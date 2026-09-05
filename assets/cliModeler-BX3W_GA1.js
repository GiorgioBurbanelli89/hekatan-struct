import { c as je, a as We } from "./cadSections-DVtTZU6U.js";
import { h as Be, a as qe, __tla as __tla_0 } from "./h8-B8y-PzF9.js";
import { a as Ne } from "./analyze-BFwM3Jvn.js";
import { d as Re, __tla as __tla_1 } from "./didacticCpp-DaEmtxPu.js";
let Qe, _e;
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
  const Ae = {
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
  function ze(d) {
    const o = d.toLowerCase().trim();
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
    const y = [
      false,
      false,
      false,
      false,
      false,
      false
    ], r = o.split(/[\s,]+/).filter(Boolean);
    if (r.length > 1 && r.length <= 6 && r.every((E) => E === "0" || E === "1")) return r.forEach((E, R) => {
      y[R] = E === "1";
    }), y;
    for (const E of r) Ae[E] !== void 0 && (y[Ae[E]] = true);
    if (/^[01]+$/.test(o) && o.length <= 6) for (let E = 0; E < o.length; E++) y[E] = o[E] === "1";
    return y;
  }
  _e = function(d) {
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
      deckEtabs: false,
      deckTributario: /* @__PURE__ */ new Set(),
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
    let y = null, r = 0, E = 0, R = 0;
    const k = d.split(/\r?\n/);
    for (let U = 0; U < k.length; U++) {
      let F = k[U].trim();
      if (!F || F.startsWith("#") || F.startsWith("//")) continue;
      F = F.replace(/[;]+$/, "");
      const t = F.split(/\s+/), B = t[0].toLowerCase();
      if (B === "nodes" && t.length === 1) {
        y = "nodes";
        continue;
      }
      if ((B === "elements" || B === "frames") && t.length === 1) {
        y = "elements";
        continue;
      }
      if (B === "areas" && t.length === 1) {
        y = "areas";
        continue;
      }
      if (B === "supports" && t.length === 1) {
        y = "supports";
        continue;
      }
      if (B === "loads" && t.length === 1) {
        y = "loads";
        continue;
      }
      if (B === "springs" && t.length === 1) {
        y = "springs";
        continue;
      }
      if (y && /^[\-\d]/.test(t[0])) {
        const s = t.map(parseFloat);
        if (y === "nodes" && s.length >= 3) {
          r++, o.nodes.set(r, [
            s[0],
            s[1],
            s[2]
          ]);
          continue;
        }
        if (y === "elements" && s.length >= 2) {
          E++, o.frames.push({
            id: E,
            nI: s[0] + 1,
            nJ: s[1] + 1,
            E: 25e6,
            A: 0.16,
            I: 21e-4
          });
          continue;
        }
        if (y === "areas" && s.length >= 4) {
          R++, o.shells.push({
            id: R,
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
        if (y === "loads" && s.length >= 4) {
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
        if (y === "springs" && s.length >= 3) {
          o.springs.push({
            node: s[0],
            dof: s[1],
            k: s[2]
          });
          continue;
        }
      }
      if (y === "supports" && /^\d/.test(t[0])) {
        const s = parseInt(t[0], 10), l = t.slice(1).join(" ");
        o.supports.set(s, ze(l));
        continue;
      }
      y && !/^[\-\d]/.test(t[0]) && (y = null);
      try {
        switch (B) {
          case "node":
          case "n": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2]), n = parseFloat(t[3]), i = parseFloat(t[4]);
            !isFinite(s) || !isFinite(l) || !isFinite(n) || !isFinite(i) ? o.errors.push(`L${U + 1}: node mal formado: ${F}`) : o.nodes.set(s, [
              l,
              n,
              i
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const s = parseInt(t[1], 10), l = parseInt(t[2], 10), n = parseInt(t[3], 10), i = parseFloat(t[4] ?? "25e6"), h = parseFloat(t[5] ?? "0.16"), m = parseFloat(t[6] ?? "0.001"), A = t[7] !== void 0 ? parseFloat(t[7]) : void 0, z = t[8] !== void 0 ? parseFloat(t[8]) : void 0, S = t[9] !== void 0 ? parseFloat(t[9]) : void 0, D = t[10] !== void 0 ? parseFloat(t[10]) : void 0, O = t[11] !== void 0 ? parseFloat(t[11]) : void 0, $ = t[12] !== void 0 ? parseFloat(t[12]) : void 0, _ = t.indexOf("#"), b = _ >= 0 && t[_ + 1] ? t[_ + 1] : void 0;
            o.frames.push({
              id: s,
              nI: l,
              nJ: n,
              E: i,
              A: h,
              I: m,
              Iy: A,
              J: z,
              nu: S,
              rho: D,
              D: O,
              B: $,
              sec: b
            });
            break;
          }
          case "cftc": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2] ?? ""), n = parseFloat(t[3] ?? ""), i = parseFloat(t[4] ?? "25e6"), h = parseFloat(t[5] ?? "0.2");
            isFinite(s) && l > 0 && n > 0 && n < l / 2 && i > 0 ? o.frameCftc.set(s, {
              D: l,
              t: n,
              Ec: i,
              nuC: isFinite(h) ? h : 0.2
            }) : o.errors.push(`cftc ${t[1]}: hace falta D t (m) y Ec (kN/m2), con t < D/2`);
            break;
          }
          case "cft": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2] ?? ""), n = parseFloat(t[3] ?? ""), i = parseFloat(t[4] ?? ""), h = parseFloat(t[5] ?? "25e6"), m = parseFloat(t[6] ?? "0.2");
            isFinite(s) && l > 0 && n > 0 && i > 0 && i < Math.min(l, n) / 2 && h > 0 ? o.frameCft.set(s, {
              b: l,
              h: n,
              t: i,
              Ec: h,
              nuC: isFinite(m) ? m : 0.2
            }) : o.errors.push(`cft ${t[1]}: hace falta b h t (m) y Ec (kN/m2), con t < min(b,h)/2`);
            break;
          }
          case "as":
          case "shearareas": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2] ?? "0"), n = parseFloat(t[3] ?? "0");
            isFinite(s) && isFinite(l) && isFinite(n) && o.frameShearAreas.set(s, [
              l,
              n
            ]);
            break;
          }
          case "release":
          case "rel": {
            const s = parseInt(t[1], 10), l = t.slice(2).map((i) => i.toLowerCase());
            if (!isFinite(s) || l.length === 0) {
              o.errors.push('release: se esperaba "release frameID <12 bits> | pin fix"');
              break;
            }
            const n = new Array(12).fill(false);
            if (l.length === 2 && l.every((i) => /^(pin|fix|libre|rigido)$/.test(i))) l.forEach((i, h) => {
              (i === "pin" || i === "libre") && (n[h * 6 + 4] = true, n[h * 6 + 5] = true);
            });
            else {
              const i = l.filter((h) => h === "0" || h === "1");
              if (i.length !== 12) {
                o.errors.push(`release ${s}: hacen falta 12 banderas (U1 U2 U3 R1 R2 R3 en I y en J), llegaron ${i.length}`);
                break;
              }
              for (let h = 0; h < 12; h++) n[h] = i[h] === "1";
            }
            n.some(Boolean) && o.frameReleases.set(s, n);
            break;
          }
          case "hex":
          case "solid":
          case "h8": {
            const s = parseInt(t[1], 10), l = t.slice(2, 10).map((n) => parseInt(n, 10));
            if (!isFinite(s) || l.length !== 8 || l.some((n) => !isFinite(n))) {
              o.errors.push(`hex ${t[1]}: hacen falta 8 nudos`);
              break;
            }
            o.solids.push({
              id: s,
              pts: l,
              E: parseFloat(t[10] ?? "25e6"),
              nu: parseFloat(t[11] ?? "0.2"),
              rho: parseFloat(t[12] ?? "2.45")
            });
            break;
          }
          case "incompatible": {
            const s = (t[1] ?? "1").toLowerCase();
            o.solidIncompatible = !(s === "0" || s === "no" || s === "off" || s === "false");
            break;
          }
          case "deck":
          case "deckmode": {
            const s = (t[1] ?? "etabs").toLowerCase();
            o.deckEtabs = s === "etabs" || s === "1" || s === "on" || s === "si";
            break;
          }
          case "meshcross":
          case "meshatintersections": {
            const s = (t[1] ?? "1").toLowerCase();
            o.meshCross = !(s === "0" || s === "no" || s === "off" || s === "false");
            break;
          }
          case "etabsjoint":
          case "etabswalljoint": {
            const s = (t[1] ?? "1").toLowerCase();
            o.etabsWallJoint = !(s === "0" || s === "no" || s === "off" || s === "false");
            break;
          }
          case "selfweight":
          case "peso":
          case "sw": {
            const s = parseFloat(t[1] ?? "1");
            o.selfWeight = isFinite(s) ? s : 1;
            break;
          }
          case "endoffset":
          case "offset":
          case "lengthoff": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2] ?? "0"), n = parseFloat(t[3] ?? "0"), i = parseFloat(t[4] ?? "0");
            if (!isFinite(s) || !isFinite(l) || !isFinite(n)) {
              o.errors.push('endoffset: se esperaba "endoffset frameID offI offJ [rz]"');
              break;
            }
            o.frameEndOffsets.set(s, [
              l,
              n,
              isFinite(i) ? i : 0
            ]);
            break;
          }
          case "ang":
          case "localaxis": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2] ?? "0");
            isFinite(s) && isFinite(l) && o.frameAngles.set(s, l);
            break;
          }
          case "shell":
          case "plate":
          case "s": {
            const s = parseInt(t[1], 10), l = [
              parseInt(t[2], 10),
              parseInt(t[3], 10),
              parseInt(t[4], 10),
              parseInt(t[5], 10)
            ], n = parseFloat(t[6] ?? "0.20"), i = parseFloat(t[7] ?? "25e6"), h = t[9] !== void 0 ? parseFloat(t[9]) : void 0, m = h !== void 0 && isFinite(h) ? h : void 0;
            if (o.shells.push({
              id: s,
              pts: l,
              t: n,
              E: i,
              rho: m
            }), t[8] !== void 0) {
              const A = parseFloat(t[8]);
              isFinite(A) && A !== 0 && o.shellLoads.set(s, A);
            }
            break;
          }
          case "shelltype":
          case "plateform": {
            const s = parseInt(t[1], 10), l = (t[2] ?? "").toLowerCase();
            if (!isFinite(s)) break;
            let n;
            if (l === "thin" || l === "delgada" || l === "kirchhoff" || l === "1" ? n = 1 : (l === "thick" || l === "gruesa" || l === "mindlin" || l === "0") && (n = 0), n === void 0) {
              o.errors.push(`shelltype ${s}: se esperaba thin o thick`);
              break;
            }
            o.shellTypes.set(s, n);
            break;
          }
          case "shellmod": {
            const s = parseInt(t[1], 10);
            if (!isFinite(s)) break;
            const l = t.slice(2).map(parseFloat);
            if (l.length >= 8) o.shellModsDir.set(s, l.slice(0, 8).map((n) => isFinite(n) ? n : 1));
            else {
              const n = l[0], i = l[1];
              o.shellMods.set(s, [
                isFinite(n) ? n : 1,
                isFinite(i) ? i : 1
              ]);
            }
            break;
          }
          case "areaobj": {
            const s = t.slice(1).map((D) => parseInt(D, 10));
            if (s.length < 7 || s.some((D) => !isFinite(D))) {
              o.errors.push('areaobj: se esperaba "areaobj ID n1 n2 n3 n4 desdeShell hastaShell"');
              break;
            }
            const [l, n, i, h, m, A, z] = s, S = [];
            for (let D = A; D <= z; D++) S.push(D);
            o.areaObjs.push({
              id: l,
              pts: [
                n,
                i,
                h,
                m
              ],
              cells: S
            });
            break;
          }
          case "shellang": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2]);
            if (!isFinite(s) || !isFinite(l)) {
              o.errors.push('shellang: se esperaba "shellang shellID grados"');
              break;
            }
            o.shellAngles.set(s, l);
            break;
          }
          case "areaload":
          case "qarea": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2]);
            if (!isFinite(s) || !isFinite(l)) {
              o.errors.push('areaload: se esperaba "areaload shellID q"');
              break;
            }
            o.shellLoads.set(s, l);
            break;
          }
          case "support":
          case "fix": {
            const s = parseInt(t[1], 10), l = t.slice(2).join(" ");
            o.supports.set(s, ze(l));
            break;
          }
          case "load":
          case "l": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2] ?? "0"), n = parseFloat(t[3] ?? "0"), i = parseFloat(t[4] ?? "0"), h = parseFloat(t[5] ?? "0"), m = parseFloat(t[6] ?? "0"), A = parseFloat(t[7] ?? "0");
            o.loads.set(s, [
              l,
              n,
              i,
              h,
              m,
              A
            ]);
            break;
          }
          case "frameload":
          case "fl": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2] ?? "0"), n = parseFloat(t[3] ?? "0"), i = parseFloat(t[4] ?? "0"), h = o.frameLoads.get(s) ?? [
              0,
              0,
              0
            ];
            o.frameLoads.set(s, [
              h[0] + l,
              h[1] + n,
              h[2] + i
            ]);
            break;
          }
          case "spring": {
            const s = parseInt(t[1], 10), l = (t[2] ?? "uz").toLowerCase(), n = Ae[l] ?? 2, i = parseFloat(t[3] ?? "1000");
            o.springs.push({
              node: s,
              dof: n,
              k: i
            });
            break;
          }
          case "diaph":
          case "diaphragm": {
            const s = parseInt(t[1], 10), l = parseInt(t[2] ?? "1", 10);
            isFinite(s) && isFinite(l) && l > 0 && o.diaphragms.set(s, l);
            break;
          }
          case "mass": {
            const s = parseInt(t[1], 10), l = parseFloat(t[2] ?? "0");
            Number.isFinite(s) && Number.isFinite(l) ? o.masses.set(s, (o.masses.get(s) ?? 0) + l) : o.errors.push(`L${U + 1}: mass necesita <nudo> <toneladas>`);
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
            o.errors.push(`L${U + 1}: comando desconocido "${B}"`);
        }
      } catch (s) {
        o.errors.push(`L${U + 1}: error "${F}" \u2014 ${s.message}`);
      }
    }
    return o;
  };
  const Ue = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
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
`, N = (d, o) => [
    d[0] - o[0],
    d[1] - o[1],
    d[2] - o[2]
  ], fe = (d, o) => d[0] * o[0] + d[1] * o[1] + d[2] * o[2], we = (d, o) => [
    d[1] * o[2] - d[2] * o[1],
    d[2] * o[0] - d[0] * o[2],
    d[0] * o[1] - d[1] * o[0]
  ], oe = (d) => Math.hypot(d[0], d[1], d[2]), ie = (d, o) => [
    d[0] * o,
    d[1] * o,
    d[2] * o
  ];
  function Oe(d, o) {
    const y = d.shellModsDir.get(o);
    return !!y && Math.abs(y[3]) < 1e-12 && Math.abs(y[4]) < 1e-12 && Math.abs(y[5]) < 1e-12;
  }
  function Ge(d, o = 200) {
    const y = [
      0,
      1,
      2
    ].map((m) => (d[0][m] + d[1][m] + d[2][m] + d[3][m]) / 4);
    let r = N(d[1], d[0]), E = we(r, N(d[3], d[0]));
    E = ie(E, 1 / oe(E)), r = ie(r, 1 / oe(r));
    const R = we(E, r), k = d.map((m) => [
      fe(N(m, y), r),
      fe(N(m, y), R)
    ]), U = k.map((m) => m[0]), F = k.map((m) => m[1]), t = Math.min(...U), B = Math.max(...U), s = Math.min(...F), l = Math.max(...F), n = [
      0,
      1,
      2,
      3
    ].map(() => ({
      pts: [],
      dA: 0
    }));
    let i = 0;
    for (let m = 0; m < o; m++) for (let A = 0; A < o; A++) {
      const z = t + (B - t) * (m + 0.5) / o, S = s + (l - s) * (A + 0.5) / o;
      let D = 0, O = 0;
      for (let b = 0; b < 4; b++) {
        const C = k[b], T = k[(b + 1) % 4];
        (T[0] - C[0]) * (S - C[1]) - (T[1] - C[1]) * (z - C[0]) >= 0 ? D++ : O++;
      }
      if (D !== 4 && O !== 4) continue;
      let $ = 0, _ = 1 / 0;
      for (let b = 0; b < 4; b++) {
        const C = k[b], T = k[(b + 1) % 4], G = T[0] - C[0], P = T[1] - C[1], J = G * G + P * P, ne = Math.max(0, Math.min(1, ((z - C[0]) * G + (S - C[1]) * P) / J)), ae = Math.hypot(z - (C[0] + ne * G), S - (C[1] + ne * P));
        ae < _ && (_ = ae, $ = b);
      }
      n[$].pts.push([
        y[0] + z * r[0] + S * R[0],
        y[1] + z * r[1] + S * R[1],
        y[2] + z * r[2] + S * R[2]
      ]), i++;
    }
    const h = 0.5 * oe(we(N(d[2], d[0]), N(d[3], d[1])));
    for (const m of n) m.dA = i ? h / i : 0;
    return n;
  }
  function Xe(d) {
    const y = (n) => d.nodes.get(n), r = [
      ...d.nodes.keys()
    ], E = (n, i, h) => {
      const m = N(i, n), A = oe(m), z = ie(m, 1 / A), S = [];
      for (const D of r) {
        if (h.includes(D)) continue;
        const O = N(y(D), n), $ = fe(O, z);
        $ > 1e-6 && $ < A - 1e-6 && oe(N(O, ie(z, $))) < 1e-4 && S.push($ / A);
      }
      return S.sort((D, O) => D - O);
    }, R = (n, i) => {
      const h = [];
      for (const m of n) i.some((A) => Math.abs(m - A) < 1e-5) && !h.some((A) => Math.abs(m - A) < 1e-5) && h.push(m);
      return h;
    }, k = (n) => {
      for (const i of r) if (oe(N(y(i), n)) < 1e-4) return i;
    };
    let U = d.shells.reduce((n, i) => Math.max(n, i.id), 0) + 1;
    const F = [], t = (n, i) => {
      const h = d.shellModsDir.get(n);
      h && d.shellModsDir.set(i, [
        ...h
      ]);
      const m = d.shellMods.get(n);
      m && d.shellMods.set(i, [
        ...m
      ]);
      const A = d.shellLoads.get(n);
      A !== void 0 && d.shellLoads.set(i, A);
      const z = d.shellTypes.get(n);
      z !== void 0 && d.shellTypes.set(i, z);
      const S = d.shellAngles.get(n);
      S !== void 0 && d.shellAngles.set(i, S);
    };
    for (const n of d.shells) {
      if (!Oe(d, n.id) || n.pts.length !== 4 || n.pts.some((b) => !d.nodes.has(b))) {
        F.push(n);
        continue;
      }
      const i = n.pts.map(y), h = E(i[0], i[1], n.pts), m = E(i[2], i[3], n.pts).map((b) => 1 - b), A = E(i[1], i[2], n.pts), z = E(i[3], i[0], n.pts).map((b) => 1 - b);
      let S = [
        0,
        ...R(h, m),
        1
      ], D = [
        0,
        ...R(A, z),
        1
      ];
      if (S.length === 2 && D.length === 2) {
        F.push(n);
        continue;
      }
      const O = (b, C) => [
        0,
        1,
        2
      ].map((T) => (1 - b) * (1 - C) * i[0][T] + b * (1 - C) * i[1][T] + b * C * i[2][T] + (1 - b) * C * i[3][T]);
      let $ = D.map((b) => S.map((C) => k(O(C, b))));
      if ($.some((b) => b.some((C) => C === void 0)) && (S.length >= D.length ? D = [
        0,
        1
      ] : S = [
        0,
        1
      ], $ = D.map((b) => S.map((C) => k(O(C, b)))), $.some((b) => b.some((C) => C === void 0)))) {
        F.push(n);
        continue;
      }
      let _ = true;
      for (let b = 0; b < D.length - 1; b++) for (let C = 0; C < S.length - 1; C++) {
        const T = [
          $[b][C],
          $[b][C + 1],
          $[b + 1][C + 1],
          $[b + 1][C]
        ], G = _ ? n.id : U++;
        _ || t(n.id, G), _ = false, F.push({
          id: G,
          pts: T,
          t: n.t,
          E: n.E,
          rho: n.rho
        });
      }
    }
    d.shells = F;
    const B = 9.80665, s = (n, i) => {
      const h = d.loads.get(n) ?? [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      d.loads.set(n, [
        h[0] + i[0],
        h[1] + i[1],
        h[2] + i[2],
        h[3] + i[3],
        h[4] + i[4],
        h[5] + i[5]
      ]);
    }, l = (n, i) => {
      const h = N(i, n), m = oe(h), A = ie(h, 1 / m);
      return d.frames.filter((z) => [
        z.nI,
        z.nJ
      ].every((S) => {
        const D = d.nodes.get(S);
        if (!D) return false;
        const O = N(D, n), $ = fe(O, A);
        return $ > -1e-4 && $ < m + 1e-4 && oe(N(O, ie(A, $))) < 1e-4;
      }));
    };
    for (const n of d.shells) {
      if (!Oe(d, n.id) || n.pts.length !== 4) continue;
      const i = d.selfWeight ? (n.rho ?? 2.45) * n.t * B * d.selfWeight : 0, h = d.shellLoads.get(n.id) ?? 0, m = -i + h;
      if (Math.abs(m) < 1e-15) continue;
      const A = n.pts.map(y), z = Ge(A);
      for (let S = 0; S < 4; S++) {
        const { pts: D, dA: O } = z[S];
        if (!D.length) continue;
        const $ = A[S], _ = A[(S + 1) % 4], b = l($, _);
        if (!b.length) {
          const J = m * O * D.length;
          s(n.pts[S], [
            0,
            0,
            J / 2,
            0,
            0,
            0
          ]), s(n.pts[(S + 1) % 4], [
            0,
            0,
            J / 2,
            0,
            0,
            0
          ]);
          continue;
        }
        const C = N(_, $), T = oe(C), G = ie(C, 1 / T), P = D.map((J) => fe(N(J, $), G));
        for (const J of b) {
          const ne = y(J.nI), ae = y(J.nJ), re = fe(N(ne, $), G), K = fe(N(ae, $), G), he = Math.min(re, K), H = Math.max(re, K), X = H - he;
          if (X < 1e-9) continue;
          const ue = H >= T - 1e-6, me = ie(N(ae, ne), 1 / X), se = we(me, [
            0,
            0,
            1
          ]);
          let ge = 0, ce = 0, pe = 0, le = 0;
          for (const e of P) {
            if (e < he - 1e-9 || (ue ? e > H + 1e-9 : e >= H - 1e-9)) continue;
            let f = e - he;
            re > K && (f = X - f);
            const a = f / X;
            ge += 1 - 3 * a * a + 2 * a * a * a, ce += X * (a - 2 * a * a + a * a * a), pe += 3 * a * a - 2 * a * a * a, le += X * (-a * a + a * a * a);
          }
          const Z = m * O;
          s(J.nI, [
            0,
            0,
            Z * ge,
            se[0] * Z * ce,
            se[1] * Z * ce,
            se[2] * Z * ce
          ]), s(J.nJ, [
            0,
            0,
            Z * pe,
            se[0] * Z * le,
            se[1] * Z * le,
            se[2] * Z * le
          ]);
        }
      }
      d.deckTributario.add(n.id), d.shellLoads.delete(n.id);
    }
  }
  Qe = {
    id: "cli-modeler",
    name: "CLI Modeler (comandos)",
    category: "\u{1F9EA} Utilidades",
    defaultShellResult: "none",
    availableShellResults: [],
    params: {},
    build(d, o) {
      var _a, _b;
      const y = window.__hekatanCliScript ?? Ue;
      window.__hekatanCliLastScript = y;
      const r = _e(y);
      r.deckEtabs && Xe(r);
      const E = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), k = [], U = Array.from(r.nodes.keys()).sort((e, f) => e - f);
      for (const e of U) E.set(e, k.length), k.push(r.nodes.get(e));
      const F = [], t = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map();
      for (const e of r.frames) {
        const f = E.get(e.nI), a = E.get(e.nJ);
        if (f === void 0 || a === void 0) {
          const I = U.length ? `IDs disponibles: ${U.join(", ")}` : "ning\xFAn nodo definido", j = [];
          f === void 0 && j.push(e.nI), a === void 0 && j.push(e.nJ), r.errors.push(`frame ${e.id}: nodo(s) inexistente(s) [${j.join(", ")}] \u2014 ${I}`);
          continue;
        }
        const c = F.length;
        F.push([
          f,
          a
        ]);
        const v = e.nu ?? 0.2;
        t.set(c, e.E), B.set(c, e.E / (2 * (1 + v))), s.set(c, e.A), l.set(c, e.I), n.set(c, e.Iy ?? e.I), i.set(c, e.J ?? 0.14 * Math.pow(Math.sqrt(e.A), 4)), h.set(c, e.rho ?? 2.45), T.set(c, v), e.D !== void 0 && isFinite(e.D) && m.set(c, e.D), e.B !== void 0 && isFinite(e.B) && A.set(c, e.B);
        const M = r.frameAngles.get(e.id);
        M !== void 0 && isFinite(M) && S.set(c, M);
        const u = r.frameReleases.get(e.id);
        u && D.set(c, u);
        const p = r.frameEndOffsets.get(e.id);
        p && O.set(c, p);
        const L = r.frameLoads.get(e.id);
        L && _.set(c, L);
        const x = r.frameShearAreas.get(e.id);
        if (x && (C.set(c, x[0]), b.set(c, x[1])), e.sec || e.D !== void 0 && e.B !== void 0) {
          const I = {
            type: "general"
          };
          e.sec && (I.name = e.sec), e.D !== void 0 && isFinite(e.D) && (I.h = e.D), e.B !== void 0 && isFinite(e.B) && (I.b = e.B), z.set(c, I);
        }
        const g = r.frameCftc.get(e.id);
        if (g) {
          const I = je(g.D, g.t, e.E, v, g.Ec, g.nuC);
          s.set(c, I.A), n.set(c, I.Iz), l.set(c, I.Iy), i.set(c, I.J), C.set(c, I.As2), b.set(c, I.As3), m.set(c, g.D), A.set(c, g.D), z.set(c, {
            type: "CFT",
            d: g.D,
            tw: g.t,
            fillE: g.Ec,
            name: e.sec ?? `CFTC ${Math.round(g.D * 1e3)}X${Math.round(g.t * 1e3)}`
          });
        }
        const w = r.frameCft.get(e.id);
        if (w) {
          const I = We(w.b, w.h, w.t, e.E, v, w.Ec, w.nuC);
          s.set(c, I.A), n.set(c, I.Iz), l.set(c, I.Iy), i.set(c, I.J), C.set(c, I.As2), b.set(c, I.As3), m.set(c, w.h), A.set(c, w.b), z.set(c, {
            type: "CFT",
            b: w.b,
            h: w.h,
            tw: w.t,
            fillE: w.Ec,
            name: e.sec ?? `CFT ${Math.round(w.h * 1e3)}X${Math.round(w.b * 1e3)}X${Math.round(w.t * 1e3)}`
          });
        }
      }
      if (r.meshCross) {
        const e = (u, p) => u[0] * p[0] + u[1] * p[1] + u[2] * p[2], f = [
          t,
          B,
          s,
          l,
          n,
          i,
          h,
          T,
          m,
          A,
          S,
          b,
          C,
          z,
          _
        ], a = (u, p) => {
          for (const L of f) L.has(u) && L.set(p, L.get(u));
        }, c = (u) => {
          for (let p = 0; p < k.length; p++) if (Math.hypot(k[p][0] - u[0], k[p][1] - u[1], k[p][2] - u[2]) < 1e-6) return p;
          return k.push([
            u[0],
            u[1],
            u[2]
          ]), k.length - 1;
        }, v = (u) => {
          const p = k[u[0]], L = k[u[1]];
          return [
            Math.min(p[0], L[0]),
            Math.min(p[1], L[1]),
            Math.min(p[2], L[2]),
            Math.max(p[0], L[0]),
            Math.max(p[1], L[1]),
            Math.max(p[2], L[2])
          ];
        };
        let M = 0;
        for (let u = 0; u < F.length; u++) {
          if (F[u].length !== 2) continue;
          const p = v(F[u]);
          for (let L = u + 1; L < F.length; L++) {
            if (F[L].length !== 2) continue;
            const [x, g] = F[u], [w, I] = F[L];
            if (x === w || x === I || g === w || g === I) continue;
            const j = v(F[L]);
            if (p[0] > j[3] + 1e-6 || j[0] > p[3] + 1e-6 || p[1] > j[4] + 1e-6 || j[1] > p[4] + 1e-6 || p[2] > j[5] + 1e-6 || j[2] > p[5] + 1e-6) continue;
            const W = k[x], Q = k[g], q = k[w], ee = k[I], V = [
              Q[0] - W[0],
              Q[1] - W[1],
              Q[2] - W[2]
            ], Y = [
              ee[0] - q[0],
              ee[1] - q[1],
              ee[2] - q[2]
            ], te = [
              W[0] - q[0],
              W[1] - q[1],
              W[2] - q[2]
            ], xe = e(V, V), Ie = e(V, Y), ye = e(Y, Y), Se = e(V, te), De = e(Y, te), ke = xe * ye - Ie * Ie;
            if (ke < 1e-10 * xe * ye) continue;
            const Me = (Ie * De - ye * Se) / ke, be = (xe * De - Ie * Se) / ke;
            if (Me < 1e-6 || Me > 1 - 1e-6 || be < 1e-6 || be > 1 - 1e-6) continue;
            const ve = [
              W[0] + Me * V[0],
              W[1] + Me * V[1],
              W[2] + Me * V[2]
            ], Le = [
              q[0] + be * Y[0],
              q[1] + be * Y[1],
              q[2] + be * Y[2]
            ];
            if (Math.hypot(ve[0] - Le[0], ve[1] - Le[1], ve[2] - Le[2]) > 1e-6) continue;
            const $e = c(ve);
            for (const de of [
              u,
              L
            ]) {
              const [Te, Je] = F[de], Ee = F.length;
              F[de] = [
                Te,
                $e
              ], F.push([
                $e,
                Je
              ]), a(de, Ee);
              const Ce = D.get(de);
              Ce && (D.set(de, [
                ...Ce.slice(0, 6),
                ...Array(6).fill(false)
              ]), D.set(Ee, [
                ...Array(6).fill(false),
                ...Ce.slice(6)
              ]));
              const Fe = O.get(de);
              Fe && (O.set(de, [
                Fe[0],
                0,
                Fe[2]
              ]), O.set(Ee, [
                0,
                Fe[1],
                Fe[2]
              ]));
            }
            M++;
          }
        }
        M > 0 && console.log(`[CLI Modeler] ${M} cruces de barras partidos con nudo (como ETABS; meshcross 0 lo apaga)`);
      }
      for (const e of r.shells) {
        const f = e.pts.map((v) => E.get(v));
        if (f.some((v) => v === void 0)) {
          r.errors.push(`shell ${e.id}: algun nodo inexistente`);
          continue;
        }
        const a = F.length;
        R.set(e.id, a), F.push(f), t.set(a, e.E), B.set(a, e.E / (2 * 1.2)), G.set(a, e.t), h.set(a, e.rho ?? 2.45), T.set(a, 0.2);
        const c = r.shellTypes.get(e.id);
        c !== void 0 && $.set(a, c);
      }
      const P = /* @__PURE__ */ new Map();
      for (const [e, f] of r.supports.entries()) {
        const a = E.get(e);
        a !== void 0 && P.set(a, f);
      }
      const J = /* @__PURE__ */ new Map();
      for (const [e, f] of r.loads.entries()) {
        const a = E.get(e);
        a !== void 0 && J.set(a, [
          ...f
        ]);
      }
      const ne = /* @__PURE__ */ new Map();
      for (const [e, f] of r.diaphragms.entries()) {
        const a = E.get(e);
        a !== void 0 && ne.set(a, f);
      }
      const ae = /* @__PURE__ */ new Map();
      for (const [e, f] of r.masses.entries()) {
        const a = E.get(e);
        a !== void 0 && ae.set(a, f);
      }
      if (r.frameLoads.size) {
        const e = (f, a) => {
          const c = J.get(f) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          J.set(f, [
            c[0] + a[0],
            c[1] + a[1],
            c[2] + a[2],
            c[3] + a[3],
            c[4] + a[4],
            c[5] + a[5]
          ]);
        };
        for (const [f, a] of r.frameLoads.entries()) {
          const c = r.frames.find((j) => j.id === f);
          if (!c) {
            r.errors.push(`frameload ${f}: no existe esa barra`);
            continue;
          }
          const v = E.get(c.nI), M = E.get(c.nJ);
          if (v === void 0 || M === void 0) continue;
          const u = k[v], p = k[M], L = [
            p[0] - u[0],
            p[1] - u[1],
            p[2] - u[2]
          ], x = Math.hypot(L[0], L[1], L[2]);
          if (x < 1e-9) continue;
          const g = [
            L[0] / x,
            L[1] / x,
            L[2] / x
          ], w = x * x / 12, I = [
            g[1] * a[2] - g[2] * a[1],
            g[2] * a[0] - g[0] * a[2],
            g[0] * a[1] - g[1] * a[0]
          ];
          e(v, [
            a[0] * x / 2,
            a[1] * x / 2,
            a[2] * x / 2,
            w * I[0],
            w * I[1],
            w * I[2]
          ]), e(M, [
            a[0] * x / 2,
            a[1] * x / 2,
            a[2] * x / 2,
            -w * I[0],
            -w * I[1],
            -w * I[2]
          ]);
        }
      }
      const re = /* @__PURE__ */ new Map(), K = 1 / Math.sqrt(3), he = [
        [
          -K,
          -K
        ],
        [
          K,
          -K
        ],
        [
          K,
          K
        ],
        [
          -K,
          K
        ]
      ];
      for (const e of r.shells) {
        const f = r.shellLoads.get(e.id);
        if (!f || r.deckTributario.has(e.id)) continue;
        const a = e.pts.map((M) => E.get(M));
        if (a.some((M) => M === void 0)) {
          r.errors.push(`areaload ${e.id}: algun nodo inexistente`);
          continue;
        }
        const c = a.map((M) => k[M]), v = [
          0,
          0,
          0,
          0
        ];
        for (const [M, u] of he) {
          const p = [
            0.25 * (1 - M) * (1 - u),
            0.25 * (1 + M) * (1 - u),
            0.25 * (1 + M) * (1 + u),
            0.25 * (1 - M) * (1 + u)
          ], L = [
            -0.25 * (1 - u),
            0.25 * (1 - u),
            0.25 * (1 + u),
            -0.25 * (1 + u)
          ], x = [
            -0.25 * (1 - M),
            -0.25 * (1 + M),
            0.25 * (1 + M),
            0.25 * (1 - M)
          ], g = [
            0,
            1,
            2
          ].map((W) => L.reduce((Q, q, ee) => Q + q * c[ee][W], 0)), w = [
            0,
            1,
            2
          ].map((W) => x.reduce((Q, q, ee) => Q + q * c[ee][W], 0)), I = [
            g[1] * w[2] - g[2] * w[1],
            g[2] * w[0] - g[0] * w[2],
            g[0] * w[1] - g[1] * w[0]
          ], j = Math.hypot(I[0], I[1], I[2]);
          for (let W = 0; W < 4; W++) v[W] += p[W] * f * j;
        }
        for (let M = 0; M < 4; M++) {
          const u = a[M], p = J.get(u) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          p[2] += v[M], J.set(u, p), re.set(u, (re.get(u) ?? 0) + v[M]);
        }
      }
      if (r.selfWeight) {
        const f = /* @__PURE__ */ new Set();
        for (const [c, v] of R) r.deckTributario.has(c) && f.add(v);
        const a = (c, v) => {
          const M = J.get(c) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          M[2] += v, J.set(c, M);
        };
        F.forEach((c, v) => {
          const M = h.get(v) ?? 0;
          if (M && !f.has(v)) {
            if (c.length === 2) {
              const u = s.get(v) ?? 0, p = k[c[0]], L = k[c[1]], x = [
                L[0] - p[0],
                L[1] - p[1],
                L[2] - p[2]
              ];
              let g = Math.hypot(x[0], x[1], x[2]);
              const w = O.get(v);
              if (w) {
                const V = Math.hypot(x[0], x[1]);
                V > 1e-9 && Math.abs(Math.atan2(Math.abs(x[2]), V)) * 180 / Math.PI < 20 && (g = Math.max(g - w[0] - w[1], 0));
              }
              const I = Math.hypot(x[0], x[1], x[2]), j = -u * M * 9.80665 * r.selfWeight, W = [
                x[0] / I,
                x[1] / I,
                x[2] / I
              ], Q = g * g / 12, q = [
                W[1] * j,
                -W[0] * j,
                0
              ], ee = (V, Y) => {
                const te = J.get(V) ?? [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ];
                J.set(V, [
                  te[0] + Y[0],
                  te[1] + Y[1],
                  te[2] + Y[2],
                  te[3] + Y[3],
                  te[4] + Y[4],
                  te[5] + Y[5]
                ]);
              };
              ee(c[0], [
                0,
                0,
                j * g / 2,
                Q * q[0],
                Q * q[1],
                0
              ]), ee(c[1], [
                0,
                0,
                j * g / 2,
                -Q * q[0],
                -Q * q[1],
                0
              ]);
            } else if (c.length === 4) {
              const u = G.get(v) ?? 0, p = c.map((g) => k[g]);
              let L = 0;
              for (let g = 1; g < 3; g++) {
                const w = [
                  p[g][0] - p[0][0],
                  p[g][1] - p[0][1],
                  p[g][2] - p[0][2]
                ], I = [
                  p[g + 1][0] - p[0][0],
                  p[g + 1][1] - p[0][1],
                  p[g + 1][2] - p[0][2]
                ], j = [
                  w[1] * I[2] - w[2] * I[1],
                  w[2] * I[0] - w[0] * I[2],
                  w[0] * I[1] - w[1] * I[0]
                ];
                L += Math.hypot(j[0], j[1], j[2]) / 2;
              }
              const x = L * u * M * 9.80665 * r.selfWeight;
              for (const g of c) a(g, -x / 4);
            }
          }
        });
      }
      const H = [];
      for (const e of r.springs) {
        const f = E.get(e.node);
        f !== void 0 && H.push({
          node: f,
          dof: e.dof,
          k: e.k
        });
      }
      const X = [];
      for (const e of r.solids) {
        const f = e.pts.map((c) => E.get(c));
        if (f.some((c) => c === void 0)) {
          r.errors.push(`hex ${e.id}: algun nodo inexistente`);
          continue;
        }
        const a = F.length;
        F.push(f), t.set(a, e.E), T.set(a, e.nu), B.set(a, e.E / (2 * (1 + e.nu))), h.set(a, e.rho), X.push(a);
      }
      o.nodes.val = k, o.elements.val = F, o.nodeInputs.val = {
        supports: P,
        loads: J,
        masses: ae,
        diaphragms: ne,
        springs: H
      }, o.springs && (o.springs.val = H);
      const ue = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map();
      for (const e of r.shells) {
        const f = R.get(e.id);
        if (f === void 0) continue;
        const a = r.shellLoads.get(e.id);
        a !== void 0 && ge.set(f, a);
        const c = r.shellAngles.get(e.id);
        c !== void 0 && ce.set(f, c);
        const v = r.shellModsDir.get(e.id);
        if (v) {
          se.set(f, v), ue.set(f, (v[0] + v[1]) / 2), me.set(f, (v[3] + v[4]) / 2);
          continue;
        }
        const M = r.shellMods.get(e.id);
        M && (ue.set(f, M[0]), me.set(f, M[1]));
      }
      if (o.elementInputs.val = {
        elasticities: t,
        shearModuli: B,
        areas: s,
        momentsOfInertiaY: l,
        momentsOfInertiaZ: n,
        torsionalConstants: i,
        densities: h,
        poissonsRatios: T,
        thicknesses: G,
        membraneModifiers: ue,
        bendingModifiers: me,
        shellModifiers: se,
        shellSurfaceLoads: ge,
        shellAngles: ce,
        cargaDeArea: re,
        cantos: m,
        anchos: A,
        sectionShapes: z,
        localAngles: S,
        shearAreasY: b,
        shearAreasZ: C,
        momentReleases: D,
        endOffsets: O,
        plateFormulations: $,
        frameLoads: _,
        meshAtIntersections: r.meshCross,
        solidIncompatible: r.solidIncompatible,
        selfWeight: r.selfWeight,
        etabsWallJoint: r.etabsWallJoint,
        areaObjects: r.areaObjs.map((e) => ({
          nodes: e.pts.map((f) => E.get(f)).filter((f) => f !== void 0),
          cells: e.cells.map((f) => R.get(f)).filter((f) => f !== void 0),
          q: e.cells.map((f) => r.shellLoads.get(f)).find((f) => f !== void 0),
          ang: e.cells.map((f) => r.shellAngles.get(f)).find((f) => f !== void 0)
        })).filter((e) => e.nodes.length === 4 && e.cells.length > 0)
      }, r.doSolve && X.length > 0 && X.length === F.length) try {
        const e = t.get(X[0]) ?? 25e6, f = T.get(X[0]) ?? 0.2;
        X.some((u) => Math.abs((t.get(u) ?? e) - e) > 1e-9 * e || Math.abs((T.get(u) ?? f) - f) > 1e-12) && r.errors.push("hex: hex8Solve lleva UN material; los solidos tienen E o nu distintos y se usa el del primero");
        const a = /* @__PURE__ */ new Map();
        for (const [u, p] of o.nodeInputs.val.supports ?? []) a.set(u, [
          !!p[0],
          !!p[1],
          !!p[2]
        ]);
        const c = /* @__PURE__ */ new Map();
        for (const [u, p] of o.nodeInputs.val.loads ?? []) c.set(u, [
          p[0] ?? 0,
          p[1] ?? 0,
          p[2] ?? 0
        ]);
        const v = Be({
          nodes: k,
          elements: F,
          E: e,
          nu: f,
          supports: a,
          loads: c,
          incompatible: r.solidIncompatible
        }), M = /* @__PURE__ */ new Map();
        v.displacements.forEach(([u, p, L], x) => M.set(x, [
          u,
          p,
          L,
          0,
          0,
          0
        ])), o.deformOutputs.val = {
          deformations: M,
          reactions: /* @__PURE__ */ new Map()
        }, o.analyzeOutputs.val = {
          solidStress: v.stressPerElement,
          solidVonMises: v.vonMisesPerElement
        }, console.log(`[CLI Modeler] Solve OK \u2014 ${F.length} solidos H8, ${k.length} nodos (${v.elapsedMs.toFixed(0)} ms)`);
      } catch (e) {
        r.errors.push(`hex8Solve: ${(e == null ? void 0 : e.message) ?? e}`);
      }
      else if (r.doSolve && k.length && F.length) try {
        o.deformOutputs.val = Re(k, F, o.nodeInputs.val, o.elementInputs.val, H.length ? H : void 0);
        try {
          o.analyzeOutputs.val = Ne(k, F, o.elementInputs.val, o.deformOutputs.val);
        } catch (e) {
          console.warn("[CLI Modeler] analyze:", (e == null ? void 0 : e.message) ?? e);
        }
        if (X.length > 0) try {
          const e = o.deformOutputs.val.deformations, f = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
          for (const c of X) {
            const v = F[c], M = v.map((L) => k[L]), u = v.flatMap((L) => {
              const x = e.get(L) ?? [
                0,
                0,
                0
              ];
              return [
                x[0],
                x[1],
                x[2]
              ];
            }), p = qe(M, t.get(c) ?? 25e6, T.get(c) ?? 0.2, u, r.solidIncompatible);
            f.set(c, p.stress), a.set(c, p.vonMises);
          }
          o.analyzeOutputs.val = {
            ...o.analyzeOutputs.val ?? {},
            solidStress: f,
            solidVonMises: a
          };
        } catch (e) {
          console.warn("[CLI Modeler] tensiones de solidos:", (e == null ? void 0 : e.message) ?? e);
        }
        console.log("[CLI Modeler] Solve OK \u2014", F.length, "elementos,", k.length, "nodos");
      } catch (e) {
        r.errors.push(`solve fall\xF3: ${e.message}`);
      }
      if (o.objects3D.val = [], r.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const e of r.errors) console.warn("  -", e);
      }
      window.__hekatanCliErrors = r.errors;
      let pe = 0, le = 0;
      const Z = o.deformOutputs.val;
      if ((_a = Z == null ? void 0 : Z.deformations) == null ? void 0 : _a.size) for (const [, e] of Z.deformations) Math.abs(e[2]) > Math.abs(pe) && (pe = e[2]);
      if ((_b = Z == null ? void 0 : Z.reactions) == null ? void 0 : _b.size) for (const [, e] of Z.reactions) le += e[2] || 0;
      window.__hekatanCliStats = {
        nodes: k.length,
        frames: r.frames.length,
        shells: r.shells.length,
        supports: P.size,
        loads: J.size,
        springs: H.length,
        solved: r.doSolve,
        errors: r.errors.length,
        maxUzMm: +(pe * 1e3).toFixed(3),
        sumRz: +le.toFixed(1)
      };
    }
  };
});
export {
  __tla,
  Qe as c,
  _e as p
};
