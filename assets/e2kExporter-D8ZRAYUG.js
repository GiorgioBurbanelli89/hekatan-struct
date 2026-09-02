function P(S) {
  return S && parseFloat(S) || 0;
}
function It(S) {
  const A = /* @__PURE__ */ new Map(), I = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let m;
  for (; (m = I.exec(S)) !== null; ) A.set(m[1], m[2] !== void 0 ? m[2] : m[3]);
  return A;
}
function _t(S) {
  const A = S.split(/\r?\n/);
  return A.some((m) => m.trim().startsWith("TABLE:")) ? Gt(A) : Ut(A);
}
function Gt(S) {
  var _a, _b, _c, _d, _e, _f;
  const A = [];
  let I = "";
  for (const W of S) {
    const O = W.trimEnd();
    O.endsWith("_") ? I += O.slice(0, -1) + " " : (I += O, A.push(I), I = "");
  }
  I && A.push(I);
  const m = { force: "KN", length: "m" };
  let p = "UX,UY,UZ,RX,RY,RZ";
  const y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), b = [], v = [], _ = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), te = [], K = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
  let U = "";
  for (const W of A) {
    const O = W.trim();
    if (!O || O.startsWith(";") || O.startsWith("File ")) continue;
    if (O.startsWith("TABLE:")) {
      const a = O.match(/TABLE:\s+"(.+?)"/);
      U = a ? a[1].toUpperCase() : "";
      continue;
    }
    if (O === "END TABLE DATA") {
      U = "";
      continue;
    }
    const s = It(O);
    switch (U) {
      case "PROGRAM CONTROL": {
        const a = s.get("CurrUnits");
        if (a) {
          const n = a.split(",").map((i) => i.trim());
          n[0] && (m.force = n[0]), n[1] && (m.length = n[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const a = s.get("Material");
        a && !y.has(a) && y.set(a, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const a = s.get("Material");
        if (a) {
          const n = y.get(a) || { E: 0, nu: 0, G: 0 };
          n.E = P(s.get("E1")), n.G = P(s.get("G12")), n.nu = P(s.get("U12")), n.density = P(s.get("UnitMass")), y.set(a, n);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const a = s.get("Material");
        a && y.has(a) && (y.get(a).fy = P(s.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const a = s.get("SectionName");
        a && w.set(a, { material: s.get("Material") || "", shape: s.get("Shape") || "Rectangular", D: P(s.get("t3")), B: P(s.get("t2")), TF: P(s.get("tf")), TW: P(s.get("tw")), A: P(s.get("Area")), Iz: P(s.get("I33")), Iy: P(s.get("I22")), J: P(s.get("TorsConst")), As2: P(s.get("AS2")), As3: P(s.get("AS3")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const a = s.get("Section");
        a && Z.set(a, { material: s.get("Material") || "", type: s.get("Type") || "Shell", thickness: P(s.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const a = s.get("Joint");
        if (a) {
          const n = P(s.get("XorR")), i = P(s.get("Y")), l = P(s.get("Z"));
          M.set(a, [n, i, l]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const a = s.get("Frame"), n = s.get("JointI"), i = s.get("JointJ");
        a && n && i && b.push({ name: a, j1: n, j2: i });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const a = s.get("Area");
        if (a) {
          const n = parseInt(s.get("NumJoints") || "4"), i = [];
          for (let l = 1; l <= n; l++) {
            const r = s.get(`Joint${l}`);
            r && i.push(r);
          }
          i.length >= 3 && v.push({ name: a, joints: i });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const a = s.get("Joint");
        if (a) {
          const n = [((_a = s.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = s.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = s.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = s.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = s.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = s.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          _.set(a, n);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const a = s.get("Frame"), n = s.get("AnalSect");
        a && n && H.set(a, n);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const a = s.get("Area"), n = s.get("Section");
        a && n && X.set(a, n);
        break;
      }
      case "FRAME LOADS - DISTRIBUTED": {
        const a = s.get("Frame"), n = s.get("Dir"), i = P(s.get("FOverLA"));
        if (a && n && i) {
          const l = { X: 0, Y: 1, Z: 2 }[n];
          if (l !== void 0) {
            const r = V.get(a) ?? [0, 0, 0];
            r[l] += i, V.set(a, r);
          }
        }
        break;
      }
      case "AREA STIFFNESS MODIFIERS": {
        const a = s.get("Area");
        a && z.set(a, ["f11", "f22", "f12", "m11", "m22", "m12", "v13", "v23"].map((n) => s.has(n) ? P(s.get(n)) : 1));
        break;
      }
      case "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL": {
        const a = s.get("Frame");
        a && j.set(a, P(s.get("Angle")));
        break;
      }
      case "FRAME OFFSET ALONG LENGTH ASSIGNMENTS": {
        const a = s.get("Frame");
        a && K.set(a, [P(s.get("LengthI")), P(s.get("LengthJ")), P(s.get("RigidFactor"))]);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const a = s.get("Joint");
        a && te.push({ joint: a, fx: P(s.get("F1")), fy: P(s.get("F2")), fz: P(s.get("F3")), mx: P(s.get("M1")), my: P(s.get("M2")), mz: P(s.get("M3")) });
        break;
      }
    }
  }
  return mt(m, p, y, w, Z, M, b, v, _, H, X, te, K, j, z, V);
}
function Ut(S) {
  const A = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const m = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), Z = [], M = [], b = /* @__PURE__ */ new Map(), v = [], _ = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map();
  let K = "", j = "";
  for (const U of S) {
    const W = U.trim();
    if (!W || W.startsWith(";")) continue;
    if (!U.startsWith(" ") && !U.startsWith("	")) {
      const a = W.toUpperCase();
      if (a === "END") break;
      a.startsWith("SHELL SECTION") ? K = "SHELL SECTION" : a.startsWith("FRAME SECTION") ? K = "FRAME SECTION" : K = a.split(/\s+/)[0];
      continue;
    }
    const O = It(W), s = W.split(/\s+/);
    switch (K) {
      case "SYSTEM": {
        const a = O.get("DOF");
        a && (I = a);
        const n = O.get("LENGTH");
        n && (A.length = n);
        const i = O.get("FORCE");
        i && (A.force = i);
        break;
      }
      case "JOINT": {
        const a = s[0];
        w.set(a, [P(O.get("X")), P(O.get("Y")), P(O.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const a = O.get("ADD"), n = O.get("DOF");
        if (a && n) {
          const i = n.split(","), l = [false, false, false, false, false, false];
          for (const r of i) {
            const f = r.toUpperCase();
            (f === "UX" || f === "U1") && (l[0] = true), (f === "UY" || f === "U2") && (l[1] = true), (f === "UZ" || f === "U3") && (l[2] = true), (f === "RX" || f === "R1") && (l[3] = true), (f === "RY" || f === "R2") && (l[4] = true), (f === "RZ" || f === "R3") && (l[5] = true);
          }
          b.set(a, l);
        }
        break;
      }
      case "MATERIAL": {
        const a = O.get("NAME");
        if (a) j = a, m.set(a, { E: 0, nu: 0, G: 0 });
        else if (j) {
          const n = m.get(j), i = O.get("E");
          i && (n.E = P(i));
          const l = O.get("U");
          l && (n.nu = P(l)), n.G = n.E / (2 * (1 + n.nu));
          const r = O.get("M");
          r && (n.density = P(r));
        }
        break;
      }
      case "SHELL": {
        const a = s[0], n = O.get("J");
        O.get("SEC"), n && M.push({ name: a, joints: n.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const a = O.get("NAME");
        a && y.set(a, { material: O.get("MAT") || "", type: O.get("TYPE") || "Shell", thickness: P(O.get("TH")) });
        break;
      }
      case "FRAME": {
        const a = s[0], n = O.get("J");
        if (n) {
          const i = n.split(",");
          i.length >= 2 && Z.push({ name: a, j1: i[0], j2: i[1] });
        }
        break;
      }
      case "LOAD": {
        const a = O.get("ADD");
        a && v.push({ joint: a, fx: P(O.get("UX")), fy: P(O.get("UY")), fz: P(O.get("UZ")), mx: P(O.get("MX")), my: P(O.get("MY")), mz: P(O.get("MZ")) });
        break;
      }
    }
  }
  return mt(A, I, m, p, y, w, Z, M, b, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), v, _, H, X, te);
}
function mt(S, A, I, m, p, y, w, Z, M, b, v, _, H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map()) {
  var _a;
  const j = [], z = /* @__PURE__ */ new Map(), V = [];
  for (const [f, d] of y) z.set(f, V.length), j.push(f), V.push(d);
  const U = [], W = [], O = /* @__PURE__ */ new Map();
  for (const f of w) {
    const d = z.get(f.j1), L = z.get(f.j2);
    if (d !== void 0 && L !== void 0) {
      const F = U.length;
      U.push([d, L]), W.push(f.name);
      const N = b.get(f.name);
      N && O.set(F, N);
    }
  }
  const s = U.length;
  for (const f of Z) {
    const d = f.joints.map((L) => z.get(L)).filter((L) => L !== void 0);
    if (d.length >= 3) {
      const L = U.length;
      U.push(d), W.push(f.name);
      const F = v.get(f.name);
      F && O.set(L, F);
    }
  }
  const a = U.length - s, n = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, i = /* @__PURE__ */ new Map(), l = I.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let f = 0; f < U.length; f++) {
    const d = O.get(f), L = d ? m.get(d) : null, F = d ? p.get(d) : null;
    if (L || U[f].length === 2) {
      const N = L || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, G = I.get(N.material) || l, B = G.E || l.E, q = G.nu || 0.3, Q = G.G || B / (2 * (1 + q));
      n.elasticities.set(f, B), n.shearModuli.set(f, Q), n.areas.set(f, N.A || N.D * N.B), n.momentsOfInertiaZ.set(f, N.Iz || N.B * N.D ** 3 / 12), n.momentsOfInertiaY.set(f, N.Iy || N.D * N.B ** 3 / 12), n.torsionalConstants.set(f, N.J || 0), n.densities.set(f, G.density || 0), N.As2 && (n.shearAreasZ ?? (n.shearAreasZ = /* @__PURE__ */ new Map()), n.shearAreasZ.set(f, N.As2)), N.As3 && (n.shearAreasY ?? (n.shearAreasY = /* @__PURE__ */ new Map()), n.shearAreasY.set(f, N.As3));
      const ae = H.get(W[f]);
      ae && (n.endOffsets ?? (n.endOffsets = /* @__PURE__ */ new Map()), n.endOffsets.set(f, ae));
      const Se = X.get(W[f]);
      Se && (n.localAngles ?? (n.localAngles = /* @__PURE__ */ new Map()), n.localAngles.set(f, Se)), ((_a = N.shape) == null ? void 0 : _a.includes("Wide Flange")) || N.shape === "I" ? i.set(f, { type: "I", b: N.B, h: N.D, name: d || "I-section" }) : i.set(f, { type: "rect", b: N.B, h: N.D });
    } else if (F) {
      const N = I.get(F.material) || l, G = N.E || l.E, B = N.nu || 0.2, q = N.G || G / (2 * (1 + B));
      n.elasticities.set(f, G), n.shearModuli.set(f, q), n.thicknesses.set(f, F.thickness), n.poissonsRatios.set(f, B), n.plateFormulations ?? (n.plateFormulations = /* @__PURE__ */ new Map()), n.plateFormulations.set(f, /thin/i.test(F.type) ? 1 : 0);
      const Q = te.get(W[f]);
      Q && (n.shellModifiers ?? (n.shellModifiers = /* @__PURE__ */ new Map()), n.shellModifiers.set(f, Q), n.membraneModifiers ?? (n.membraneModifiers = /* @__PURE__ */ new Map()), n.membraneModifiers.set(f, Q[0]), n.bendingModifiers ?? (n.bendingModifiers = /* @__PURE__ */ new Map()), n.bendingModifiers.set(f, Q[3])), n.densities.set(f, N.density || 0);
    }
  }
  const r = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() };
  for (const [f, d] of M) {
    const L = z.get(f);
    L !== void 0 && r.supports.set(L, d);
  }
  for (const [f, d] of K) {
    const L = W.indexOf(f);
    if (L < 0 || U[L].length !== 2) continue;
    n.frameLoads ?? (n.frameLoads = /* @__PURE__ */ new Map()), n.frameLoads.set(L, d);
    const F = V[U[L][0]], N = V[U[L][1]], G = [N[0] - F[0], N[1] - F[1], N[2] - F[2]], B = Math.hypot(G[0], G[1], G[2]);
    if (B < 1e-9) continue;
    const q = [G[0] / B, G[1] / B, G[2] / B], Q = B * B / 12, ae = [q[1] * d[2] - q[2] * d[1], q[2] * d[0] - q[0] * d[2], q[0] * d[1] - q[1] * d[0]], Se = (Re, Ge) => {
      const Te = r.loads.get(Re) || [0, 0, 0, 0, 0, 0];
      for (let he = 0; he < 6; he++) Te[he] += Ge[he];
      r.loads.set(Re, Te);
    };
    Se(U[L][0], [d[0] * B / 2, d[1] * B / 2, d[2] * B / 2, Q * ae[0], Q * ae[1], Q * ae[2]]), Se(U[L][1], [d[0] * B / 2, d[1] * B / 2, d[2] * B / 2, -Q * ae[0], -Q * ae[1], -Q * ae[2]]);
  }
  for (const f of _) {
    const d = z.get(f.joint);
    if (d !== void 0) {
      const L = r.loads.get(d) || [0, 0, 0, 0, 0, 0];
      L[0] += f.fx, L[1] += f.fy, L[2] += f.fz, L[3] += f.mx, L[4] += f.my, L[5] += f.mz, r.loads.set(d, L);
    }
  }
  return { units: S, dof: A, materials: I, frameSections: m, shellSections: p, nodes: V, nodeNames: j, nodeNameToIdx: z, elements: U, elementNames: W, elementSections: O, nodeInputs: r, elementInputs: n, sectionShapes: i, info: { nNodes: V.length, nFrames: s, nShells: a, title: `SAP2000 (${s} frames, ${a} shells)` } };
}
function Kt(S) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const { nodes: A, elements: I, nodeInputs: m, elementInputs: p } = S, y = { force: "KN", length: "m" };
  S.units && (S.units.force !== "KN" || S.units.length !== "m") && console.warn(`[s2k] el modelo va en kN\xB7m y el exportador NO convierte: se declara CurrUnits="KN, m, C" y se ignora "${S.units.force}, ${S.units.length}". Etiquetarlo de otra forma hace que SAP2000 lea las fuerzas escaladas.`);
  const w = S.title || "Awatif Model", Z = [], M = (n) => Z.push(n), b = () => Z.push(" ");
  M(`File ${w}.$2k was saved on m/d/yy at h:mm:ss`), b(), M('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), M("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), b();
  const v = [], _ = (n) => {
    var _a2, _b2, _c2, _d2;
    const i = ((_a2 = p.elasticities) == null ? void 0 : _a2.get(n)) || 0, l = (_b2 = p.poissonsRatios) == null ? void 0 : _b2.get(n), r = ((_c2 = p.shearModuli) == null ? void 0 : _c2.get(n)) || 0, f = l !== void 0 ? l : i > 0 && r > 0 ? Math.max(0, Math.min(0.5, i / (2 * r) - 1)) : 0.2, d = r > 0 ? r : i > 0 ? i / (2 * (1 + f)) : 0, L = ((_d2 = p.densities) == null ? void 0 : _d2.get(n)) || 0;
    return { E: i, nu: f, G: d, rho: L, key: `MAT_${Math.round(i)}_n${f.toFixed(4)}` };
  }, H = [];
  if (I.forEach((n, i) => {
    n.length === 2 ? v.push(i) : H.push(i);
  }), v.length > 0) {
    M('TABLE:  "CONNECTIVITY - FRAME"');
    for (const n of v) {
      const i = I[n];
      M(`   Frame=${n + 1}   JointI=${i[0] + 1}   JointJ=${i[1] + 1}   IsCurved=No`);
    }
    b();
  }
  if (H.length > 0) {
    M('TABLE:  "CONNECTIVITY - AREA"');
    for (const n of H) {
      const i = I[n], l = i.map((r, f) => `Joint${f + 1}=${r + 1}`).join("   ");
      M(`   Area=${n + 1}   NumJoints=${i.length}   ${l}`);
    }
    b();
  }
  M('TABLE:  "COORDINATE SYSTEMS"'), M("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), b(), M('TABLE:  "DATABASE FORMAT TYPES"'), M("   UnitsCurr=Yes   OverrideE=No"), b();
  const X = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map();
  for (const n of v) {
    const i = ((_a = p.areas) == null ? void 0 : _a.get(n)) || 0, l = ((_b = p.momentsOfInertiaZ) == null ? void 0 : _b.get(n)) || 0, r = ((_c = p.momentsOfInertiaY) == null ? void 0 : _c.get(n)) || 0, f = ((_d = p.torsionalConstants) == null ? void 0 : _d.get(n)) || 0;
    (_e = p.elasticities) == null ? void 0 : _e.get(n);
    const d = _(n).key, L = ((_f = p.shearAreasZ) == null ? void 0 : _f.get(n)) ?? 0, F = ((_g = p.shearAreasY) == null ? void 0 : _g.get(n)) ?? 0, N = `A${i.toPrecision(6)}_Iz${l.toPrecision(6)}_s${L.toPrecision(6)}_${F.toPrecision(6)}`;
    if (!X.has(N)) {
      let B = 0.3, q = 0.3;
      i > 0 && l > 0 && (B = Math.sqrt(12 * l / i), q = i / B), X.set(N, { A: i, Iz: l, Iy: r, J: f, b: q, h: B, matKey: d, As2: L > 0 ? L : i * 5 / 6, As3: F > 0 ? F : i * 5 / 6 });
    }
    const G = [...X.keys()].indexOf(N) + 1;
    te.set(n, `SEC${G}`);
  }
  if (v.length > 0) {
    M('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const n of v) {
      const i = te.get(n) || "SEC1";
      M(`   Frame=${n + 1}   AutoSelect=N.A.   AnalSect=${i}   MatProp=Default`);
    }
    b();
  }
  if (X.size > 0) {
    M('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let n = 0;
    for (const [, i] of X) n++, M(`   SectionName=SEC${n}   Material=${i.matKey}   Shape=General   t3=${C(i.h)}   t2=${C(i.b)}   Area=${C(i.A)}   TorsConst=${C(i.J)}   I33=${C(i.Iz)}   I22=${C(i.Iy)}   I23=0   AS2=${C(i.As2)}   AS3=${C(i.As3)} _`), M("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    b();
  }
  {
    const n = v.filter((i) => {
      var _a2;
      const l = (_a2 = p.localAngles) == null ? void 0 : _a2.get(i);
      return l !== void 0 && isFinite(l) && Math.abs(l) > 1e-9;
    });
    if (n.length > 0) {
      M('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const i of n) M(`   Frame=${i + 1}   Angle=${C(p.localAngles.get(i))}   AdvanceAxes=No`);
      b();
    }
  }
  {
    const n = p.endOffsets, i = v.filter((l) => {
      const r = n == null ? void 0 : n.get(l);
      return !!r && (Math.abs(r[0]) > 1e-9 || Math.abs(r[1]) > 1e-9);
    });
    if (i.length > 0) {
      M('TABLE:  "FRAME OFFSET ALONG LENGTH ASSIGNMENTS"');
      for (const l of i) {
        const r = n.get(l);
        M(`   Frame=${l + 1}   Type=User   LengthI=${C(r[0])}   LengthJ=${C(r[1])}   RigidFactor=${C(r.length > 2 ? r[2] : 0)}`);
      }
      b();
    }
  }
  const K = !!S.layeredSection && H.length > 0, j = S.layeredSection, z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
  if (!K) for (const n of H) {
    const i = ((_h = p.thicknesses) == null ? void 0 : _h.get(n)) || 0.1;
    (_i = p.elasticities) == null ? void 0 : _i.get(n);
    const l = _(n).key, r = ((_j = p.plateFormulations) == null ? void 0 : _j.get(n)) ?? 0, f = `t${i.toPrecision(6)}_f${r}`;
    z.has(f) || z.set(f, { t: i, matKey: l, formulacion: r });
    const d = [...z.keys()].indexOf(f) + 1;
    V.set(n, `SSEC${d}`);
  }
  if (H.length > 0) {
    M('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const l of H) {
      const r = K ? j.name : V.get(l) || "SSEC1";
      M(`   Area=${l + 1}   Section=${r}   MatProp=Default`);
    }
    b();
    const n = p.shellModifiers, i = H.filter((l) => {
      const r = n == null ? void 0 : n.get(l);
      return r && r.some((f) => Math.abs(f - 1) > 1e-12);
    });
    if (i.length > 0) {
      M('TABLE:  "AREA STIFFNESS MODIFIERS"');
      for (const l of i) {
        const r = n.get(l);
        M(`   Area=${l + 1}   f11=${C(r[0])}   f22=${C(r[1])}   f12=${C(r[2])}   m11=${C(r[3])}   m22=${C(r[4])}   m12=${C(r[5])}   v13=${C(r[6])}   v23=${C(r[7])}   MassMod=1   WeightMod=1`);
      }
      b();
    }
    if (M('TABLE:  "AREA SECTION PROPERTIES"'), K) {
      const l = j, r = ((_k = l.layers[0]) == null ? void 0 : _k.material) || "MAT_DEFAULT";
      M(`   Section=${l.name}   Material=${r}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${C(l.totalThickness)}   BendThick=${C(l.totalThickness)}   Color=Magenta`);
    } else {
      let l = 0;
      for (const [, r] of z) {
        l++;
        const f = r.formulacion === 2 ? "Membrane" : r.formulacion === 3 ? "Plate-Thin" : r.formulacion === 4 ? "Plate-Thick" : r.formulacion === 1 ? "Shell-Thin" : "Shell-Thick", d = r.formulacion === 3 || r.formulacion === 4 ? "No" : "Yes";
        M(`   Section=SSEC${l}   Material=${r.matKey}   MatAngle=0   AreaType=Shell   Type=${f}   DrillDOF=${d}   Thickness=${C(r.t)}   BendThick=${C(r.t)}   Color=Cyan`);
      }
    }
    if (b(), K) {
      M('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const l = j;
      for (const r of l.layers) {
        const f = r.angle ?? 0, d = r.numIntPts ?? 3;
        M(`   Section=${l.name}   LayerName=${r.name}   Distance=${C(r.distance)}   Thickness=${C(r.thickness)}   Type=Shell   NumIntPts=${d}   Material=${r.material}   MatAngle=${C(f * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      b();
    }
  }
  M('TABLE:  "JOINT COORDINATES"');
  for (let n = 0; n < A.length; n++) {
    const i = A[n];
    M(`   Joint=${n + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${C(i[0])}   Y=${C(i[1])}   Z=${C(i[2])}   SpecialJt=No`);
  }
  if (b(), m.supports && m.supports.size > 0) {
    M('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [n, i] of m.supports) {
      if (!i.some((r) => r)) continue;
      const l = (r) => r ? "Yes" : "No";
      M(`   Joint=${n + 1}   U1=${l(i[0])}   U2=${l(i[1])}   U3=${l(i[2])}   R1=${l(i[3])}   R2=${l(i[4])}   R3=${l(i[5])}`);
    }
    b();
  }
  const U = S.selfWtMult ?? 1;
  M('TABLE:  "LOAD PATTERN DEFINITIONS"'), M(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${U}`), b(), M('TABLE:  "LOAD CASE DEFINITIONS"'), M('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), b(), M('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), M('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), b();
  const W = p.frameLoads, O = /* @__PURE__ */ new Map();
  if ((_l = m.loads) == null ? void 0 : _l.forEach((n, i) => O.set(i, [...n])), W && W.size > 0) {
    const n = (i, l) => {
      const r = O.get(i) ?? [0, 0, 0, 0, 0, 0];
      O.set(i, r.map((f, d) => f - l[d]));
    };
    for (const [i, l] of W) {
      const r = I[i];
      if (!r || r.length !== 2) continue;
      const f = A[r[0]], d = A[r[1]], L = [d[0] - f[0], d[1] - f[1], d[2] - f[2]], F = Math.hypot(L[0], L[1], L[2]);
      if (F < 1e-9) continue;
      const N = [L[0] / F, L[1] / F, L[2] / F], G = F * F / 12, B = [N[1] * l[2] - N[2] * l[1], N[2] * l[0] - N[0] * l[2], N[0] * l[1] - N[1] * l[0]];
      n(r[0], [l[0] * F / 2, l[1] * F / 2, l[2] * F / 2, G * B[0], G * B[1], G * B[2]]), n(r[1], [l[0] * F / 2, l[1] * F / 2, l[2] * F / 2, -G * B[0], -G * B[1], -G * B[2]]);
    }
  }
  if (O.size > 0) {
    M('TABLE:  "JOINT LOADS - FORCE"');
    for (const [n, i] of O) i.some((l) => Math.abs(l) > 1e-12) && M(`   Joint=${n + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${C(i[0])}   F2=${C(i[1])}   F3=${C(i[2])}   M1=${C(i[3])}   M2=${C(i[4])}   M3=${C(i[5])}`);
    b();
  }
  const s = p.frameLoads;
  if (s && s.size > 0) {
    M('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [n, i] of s) {
      const l = I[n];
      if (!l || l.length !== 2) continue;
      const r = A[l[0]], f = A[l[1]], d = Math.hypot(f[0] - r[0], f[1] - r[1], f[2] - r[2]);
      ["X", "Y", "Z"].forEach((L, F) => {
        Math.abs(i[F]) < 1e-12 || M(`   Frame=${n + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${L}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${C(d)}   FOverLA=${C(i[F])}   FOverLB=${C(i[F])}`);
      });
    }
    b();
  }
  const a = /* @__PURE__ */ new Map();
  for (let n = 0; n < I.length; n++) {
    const { E: i, nu: l, G: r, rho: f, key: d } = _(n);
    a.has(d) || a.set(d, { E: i, nu: l, G: r, rho: f });
  }
  M('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [n] of a) M(`   Material=${n}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  b(), M('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [n, i] of a) M(`   Material=${n}   UnitWeight=${C(i.rho * 9.81)}   UnitMass=${C(i.rho)}   E1=${C(i.E)}   G12=${C(i.G)}   U12=${C(i.nu)}   A1=9.9E-06`);
  b(), M('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [n] of a) M(`   Material=${n}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return b(), M('TABLE:  "PROGRAM CONTROL"'), M(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${y.force}, ${y.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), b(), M("END TABLE DATA"), M(""), Z.join(`\r
`);
}
function C(S) {
  return S === 0 || Math.abs(S) < 1e-15 ? "0" : Math.abs(S) >= 1e6 || Math.abs(S) < 1e-3 && Math.abs(S) > 0 ? S.toExponential(8) : parseFloat(S.toPrecision(10)).toString();
}
function kt(S, A, I = 0.05) {
  const m = A.map(([p, y]) => `${(+p).toFixed(4)} ${(+y).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${S}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${I}  SPECTYPE "USER"  `, `  FUNCTION "${S}"  TIMEVAL "${m}"  `];
}
function xt(S) {
  const { name: A, func: I, modalCase: m = "Modal", sfX: p = 9.81, sfY: y = 9.81 } = S, w = [`  LOADCASE "${A}"  TYPE  "Response Spectrum"  MODALCASE  "${m}"  `];
  return p && w.push(`  LOADCASE "${A}"  ACCEL  "U1"  FUNC  "${I}"  SF  ${p}  `), y && w.push(`  LOADCASE "${A}"  ACCEL  "U2"  FUNC  "${I}"  SF  ${y}  `), w;
}
function ut(S) {
  const { name: A = "Modal", ritz: I = false, nModes: m = 12 } = S;
  return I ? [`  LOADCASE "${A}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${A}"  MAXMODES  ${m} MINMODES  1 `, `  LOADCASE "${A}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${A}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${A}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${A}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${A}"  MAXMODES  ${m} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function jt(S) {
  var _a;
  const A = (_a = S.e2kModel) == null ? void 0 : _a.rawSections;
  let I = A && A.size > 0 ? Wt(A, S.e2kModel) : vt(S);
  return S.seismicNEC && (I = Ht(I, S.seismicNEC)), I;
}
function Ht(S, A) {
  const I = S.includes(`\r
`) ? `\r
` : `
`, m = S.split(/\r?\n/), p = A.name ?? "NEC", y = kt(p, A.points, A.dampRatio ?? 0.05), w = A.modalCase ?? "Modal", Z = xt({ name: A.caseName ?? "Sismo NEC", func: p, modalCase: w, sfX: A.sfX, sfY: A.sfY });
  let M = [];
  const b = (v) => m.some((_) => v.test(_));
  if (A.modal) {
    const v = new RegExp(`^\\s*LOADCASE\\s+"${w}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let _ = m.length - 1; _ >= 0; _--) v.test(m[_]) && m.splice(_, 1);
    M = ut({ name: w, ritz: !!A.modal.ritz, nModes: A.modal.nModes });
  } else b(new RegExp(`LOADCASE\\s+"${w}"\\s+TYPE\\s+"Modal`)) || (M = ut({ name: w }));
  return Mt(m, "FUNCTIONS", y), Mt(m, "LOAD CASES", [...M, ...Z]), m.join(I);
}
function Mt(S, A, I) {
  const m = S.findIndex((w) => w.trim() === `$ ${A}`);
  if (m >= 0) {
    S.splice(m + 1, 0, ...I);
    return;
  }
  const p = S.findIndex((w) => w.trim() === "END"), y = p >= 0 ? p : S.length;
  S.splice(y, 0, `$ ${A}`, ...I, "");
}
function Wt(S, A) {
  const I = [], m = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  I.push("$ File exported from Hekatan Struct Lineal (round-trip)"), I.push("");
  for (const p of m) {
    const y = S.get(p);
    if (!(!y || y.length === 0)) {
      I.push(`$ ${p}`);
      for (const w of y) I.push(w);
      I.push("");
    }
  }
  for (const [p, y] of S) if (!m.includes(p) && y.length !== 0) {
    I.push(`$ ${p}`);
    for (const w of y) I.push(w);
    I.push("");
  }
  return I.push("  END"), I.push("$ END OF MODEL FILE"), I.join(`\r
`);
}
function vt(S) {
  var _a, _b, _c, _d, _e2, _f;
  const { nodes: A, elements: I, nodeInputs: m, elementInputs: p, title: y, units: w } = S, Z = S.shellLoads ?? p.shellSurfaceLoads;
  let M;
  Z instanceof Map && (M = /* @__PURE__ */ new Map(), Z.forEach((e, t) => {
    M.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const b = S.shellAngles ?? p.shellAngles, v = p.cargaDeArea, _ = !!(M && M.size > 0), H = p.selfWeight, X = p.frameLoads, te = (S.weightMode ?? "auto") === "auto" && H !== void 0, K = /* @__PURE__ */ new Map(), j = (e, t) => {
    const o = K.get(e) ?? [0, 0, 0, 0, 0, 0];
    K.set(e, o.map((c, E) => c + t[E]));
  }, z = /* @__PURE__ */ new Set();
  if (te) {
    if (X) for (const [e, t] of X) {
      const o = I[e];
      if (!o || o.length !== 2) continue;
      const c = A[o[0]], E = A[o[1]], h = [E[0] - c[0], E[1] - c[1], E[2] - c[2]], T = Math.hypot(h[0], h[1], h[2]);
      if (T < 1e-9) continue;
      const u = [h[0] / T, h[1] / T, h[2] / T], g = T * T / 12, Y = [u[1] * t[2] - u[2] * t[1], u[2] * t[0] - u[0] * t[2], u[0] * t[1] - u[1] * t[0]];
      j(o[0], [t[0] * T / 2, t[1] * T / 2, t[2] * T / 2, g * Y[0], g * Y[1], g * Y[2]]), j(o[1], [t[0] * T / 2, t[1] * T / 2, t[2] * T / 2, -g * Y[0], -g * Y[1], -g * Y[2]]), z.add(e);
    }
    if (H && H > 0) {
      const t = p.endOffsets;
      I.forEach((o, c) => {
        var _a2, _b2, _c2;
        const E = ((_a2 = p.densities) == null ? void 0 : _a2.get(c)) ?? 0;
        if (E) {
          if (o.length === 2) {
            const h = ((_b2 = p.areas) == null ? void 0 : _b2.get(c)) ?? 0, T = A[o[0]], u = A[o[1]], g = [u[0] - T[0], u[1] - T[1], u[2] - T[2]];
            let Y = Math.hypot(g[0], g[1], g[2]);
            const $ = t == null ? void 0 : t.get(c);
            if ($) {
              const R = Math.hypot(g[0], g[1]);
              R > 1e-9 && Math.abs(Math.atan2(Math.abs(g[2]), R)) * 180 / Math.PI < 20 && (Y = Math.max(Y - $[0] - $[1], 0));
            }
            const D = h * Y * E * 9.80665 * H;
            j(o[0], [0, 0, -D / 2, 0, 0, 0]), j(o[1], [0, 0, -D / 2, 0, 0, 0]);
          } else if (o.length === 4) {
            const h = ((_c2 = p.thicknesses) == null ? void 0 : _c2.get(c)) ?? 0, T = o.map((R) => A[R]);
            let u = 0, g = 0, Y = 0;
            for (let R = 0; R < 4; R++) {
              const k = T[R], J = T[(R + 1) % 4];
              u += k[1] * J[2] - k[2] * J[1], g += k[2] * J[0] - k[0] * J[2], Y += k[0] * J[1] - k[1] * J[0];
            }
            const $ = Math.hypot(u, g, Y) / 2, D = h * $ * E * 9.80665 * H;
            for (const R of o) j(R, [0, 0, -D / 4, 0, 0, 0]);
          }
        }
      });
    }
  }
  const V = (e, t) => {
    const o = K.get(e);
    return [t[0] - ((o == null ? void 0 : o[0]) ?? 0), t[1] - ((o == null ? void 0 : o[1]) ?? 0), t[2] - (_ ? (v == null ? void 0 : v.get(e)) ?? 0 : 0) - ((o == null ? void 0 : o[2]) ?? 0)];
  }, U = (e, t) => {
    const o = K.get(e);
    return [(t[3] ?? 0) - ((o == null ? void 0 : o[3]) ?? 0), (t[4] ?? 0) - ((o == null ? void 0 : o[4]) ?? 0), (t[5] ?? 0) - ((o == null ? void 0 : o[5]) ?? 0)];
  }, W = "N", O = "MM", s = [], a = (e) => Math.round(e * 1e4) / 1e4, n = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), i = 1e3, l = 1e3, r = (e) => e * l, f = (e) => e * i, d = (e) => e * i, L = (e) => e * i * l, F = (e) => e * i / l ** 2, N = (e) => e * i / l ** 3, G = /* @__PURE__ */ new Date(), B = `${G.getMonth() + 1}/${G.getDate()}/${G.getFullYear()}  ${G.getHours()}:${String(G.getMinutes()).padStart(2, "0")}:${String(G.getSeconds()).padStart(2, "0")}`;
  s.push(`$ File   "Hekatan_export.e2k"  saved ${B} in ETABS 22.6.0`), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${W}"  "${O}"  "C"  `), s.push('  TITLE1  "Hekatan Struct Lineal export"  '), y && s.push(`  TITLE2  "${y}"  `), s.push("  PREFERENCE  MERGETOL 0.001"), s.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), s.push("");
  const q = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set();
  A.forEach((e) => {
    q.add(a(e[0])), Q.add(a(e[1]));
  });
  const ae = [...q].sort((e, t) => e - t), Se = [...Q].sort((e, t) => e - t);
  s.push("$ GRIDS"), s.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), ae.forEach((e, t) => {
    const o = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    s.push(`  GRID "G1"  LABEL "${o}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), Se.forEach((e, t) => {
    s.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.push("");
  const Re = 3, Ge = 0.5, Te = /* @__PURE__ */ new Map();
  A.forEach((e) => {
    const t = a(e[2]);
    Te.set(t, (Te.get(t) ?? 0) + 1);
  });
  const he = /* @__PURE__ */ new Set();
  A.forEach((e) => he.add(a(e[2])));
  const ce = [...he].sort((e, t) => e - t);
  let x = ce.filter((e) => (Te.get(e) ?? 0) >= Re);
  if (x.length > 1) {
    const e = [x[0]];
    for (const t of x.slice(1)) t - e[e.length - 1] < Ge ? e[e.length - 1] = t : e.push(t);
    x = e;
  }
  x.length || (x = [ce[0], ce[ce.length - 1]]), x[0] !== ce[0] && x.unshift(ce[0]), x[x.length - 1] !== ce[ce.length - 1] && x.push(ce[ce.length - 1]);
  const re = [], ue = /* @__PURE__ */ new Map();
  re.push("Base"), ue.set(x[0], "Base");
  for (let e = 1; e < x.length; e++) {
    const t = `Level_${e}`;
    re.push(t), ue.set(x[e], t);
  }
  const je = (e) => {
    const t = a(e);
    if (ue.has(t)) return { story: ue.get(t), dz: 0 };
    for (let c = 0; c < x.length; c++) if (x[c] >= t) return { story: ue.get(x[c]), dz: a(x[c] - t) };
    const o = x[x.length - 1];
    return { story: ue.get(o), dz: a(o - t) };
  };
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = x.length - 1; e >= 1; e--) s.push(`  STORY "${re[e]}"  HEIGHT ${a(r(x[e] - x[e - 1]))} MASTERSTORY "Yes"  `);
  x.length > 0 && s.push(`  STORY "Base"  ELEV ${x[0]} `), s.push(""), I.some((e) => e.length === 4), s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push(""), s.push("$ MATERIAL PROPERTIES");
  const dt = 980665e-8, gt = (e) => {
    var _a2;
    const t = (_a2 = p.densities) == null ? void 0 : _a2.get(e);
    if (t !== void 0) return t > 100 ? t * dt : t * 9.80665;
  }, Me = (e) => {
    var _a2;
    const t = ((_a2 = p.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, o = gt(e);
    return `${t}|${o === void 0 ? "-" : o.toFixed(4)}`;
  }, Ze = /* @__PURE__ */ new Set();
  (_a = p.elasticities) == null ? void 0 : _a.forEach((e, t) => Ze.add(Me(t)));
  const Ie = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map();
  let Ot = 0, Lt = 0;
  for (const e of Ze) {
    const t = parseFloat(e.split("|")[0]), o = e.split("|")[1], c = t >= 1e8, E = c ? `Steel_${++Ot}` : `Conc_${++Lt}`;
    Ie.set(e, E), De.set(e, c);
    const h = o !== "-" ? parseFloat(o) : c ? 76.97 : 24, T = F(t), u = N(h), g = (() => {
      const D = S.elementInputs.poissonsRatios;
      if (D) {
        for (const [R, k] of D) if (Me(R) === e) return k;
      }
    })(), Y = g !== void 0 ? g : c ? 0.3 : 0.2, $ = c ? 117e-7 : 1e-5;
    if (c) {
      s.push(`  MATERIAL  "${E}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${n(u)}`), s.push(`  MATERIAL  "${E}"    SYMTYPE "Isotropic"  E ${a(T)}  U ${Y}  A ${$}`);
      const D = 345e3, R = 45e4;
      s.push(`  MATERIAL  "${E}"  FY ${a(F(D))}  FU ${a(F(R))}  FYE ${a(F(D * 1.1))}  FUE ${a(F(R * 1.1))}`);
    } else s.push(`  MATERIAL  "${E}"    TYPE "Concrete"    WEIGHTPERVOLUME ${n(u)}`), s.push(`  MATERIAL  "${E}"    SYMTYPE "Isotropic"  E ${a(T)}  U ${Y}  A ${$}`), s.push(`  MATERIAL  "${E}"    FC ${a(F(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const Ce = /* @__PURE__ */ new Set(), Ue = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), Ee = 0.05;
  I.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g, _h, _i, _j;
    if (e.length !== 2) return;
    const o = (_a2 = p.sectionShapes) == null ? void 0 : _a2.get(t), c = ((_b2 = p.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, E = Ie.get(Me(t)) || "Conc_1", h = De.get(Me(t)) ?? c >= 1e8, T = ((_c2 = p.areas) == null ? void 0 : _c2.get(t)) ?? 0, u = ((_d2 = p.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, g = ((_e3 = p.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, Y = ((_f2 = p.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let $ = (o == null ? void 0 : o.type) || "rect", D = (o == null ? void 0 : o.h) ?? 0, R = (o == null ? void 0 : o.b) ?? 0, k = (o == null ? void 0 : o.d) ?? 0;
    const J = (o == null ? void 0 : o.tf) ?? 0, fe = (o == null ? void 0 : o.tw) ?? 0;
    if (!o && D <= 0 && R <= 0 && k <= 0 && T > 0 && u > 0 && g > 0) {
      const oe = (_g = p.cantos) == null ? void 0 : _g.get(t), Ne = (_h = p.anchos) == null ? void 0 : _h.get(t);
      D = oe && oe > 0 ? oe : Math.sqrt(12 * u / T), R = Ne && Ne > 0 ? Ne : T / D, (!isFinite(D) || D < Ee) && (D = Ee), (!isFinite(R) || R < Ee) && (R = Ee), $ = "general";
    } else D <= 0 && R <= 0 && k <= 0 && T > 0 && (u > 0 ? (D = Math.sqrt(12 * u / T), R = T / D) : D = R = Math.sqrt(T), (!isFinite(D) || D < Ee) && (D = Ee), (!isFinite(R) || R < Ee) && (R = Ee), $ = "rect");
    D <= 0 && R <= 0 && k <= 0 && (D = 0.3, R = 0.3, $ = "rect");
    const Be = (o == null ? void 0 : o.name) ? `NAME_${o.name}` : `${$}_${a(D)}_${a(R)}_${a(k)}_${a(J)}_${a(fe)}_${E}`;
    (o == null ? void 0 : o.name) && !Pe.has(Be) && Pe.set(Be, o.name);
    let se = Pe.get(Be);
    if (!se) {
      const oe = h ? "S" : "C";
      $ === "general" ? se = `${oe}_G${Ce.size + 1}` : $ === "rect" ? se = `${oe}_R${Math.round(R * 100)}x${Math.round(D * 100)}` : $ === "circ" ? se = `${oe}_C_D${Math.round(k * 100)}` : $ === "I" ? se = `${oe}_I${Math.round(D * 100)}x${Math.round(R * 100)}` : $ === "HSS" ? se = `${oe}_HSS${Math.round(R * 100)}x${Math.round(D * 100)}x${Math.round(fe * 1e3)}` : se = `${oe}_Sec${Ce.size + 1}`, Pe.set(Be, se);
    }
    if (Ue.set(t, se), Ce.has(se)) return;
    Ce.add(se);
    const Bt = T > 0 && u > 0 && g > 0;
    let ne;
    $ === "general" || Bt ? ne = "General" : $ === "I" ? ne = "Steel I/Wide Flange" : $ === "HSS" ? ne = "Steel Tube" : $ === "CFT" ? ne = "Filled Steel Tube" : $ === "pipe" ? ne = "Steel Pipe" : $ === "L" ? ne = "Steel Angle" : $ === "C" ? ne = "Steel Channel" : $ === "2C" ? ne = "Steel Double Channel" : $ === "circ" ? ne = "Concrete Circle" : ne = "Concrete Rectangular";
    let Ae = `  FRAMESECTION  "${se}"  MATERIAL "${E}"  SHAPE "${ne}"`;
    if (ne === "General") {
      const oe = ((_i = p.shearAreasZ) == null ? void 0 : _i.get(t)) || T * 5 / 6, Ne = ((_j = p.shearAreasY) == null ? void 0 : _j.get(t)) || T * 5 / 6;
      Ae += `  D ${a(r(D))} B ${a(r(R))} AREA ${n(T * 1e6)} AS2 ${n(oe * 1e6)} AS3 ${n(Ne * 1e6)} I33 ${n(u * 1e12)} I22 ${n(g * 1e12)} TORSION ${n((Y || u + g) * 1e12)} S33POS ${n(2 * u / D * 1e9)} S33NEG ${n(2 * u / D * 1e9)} S22POS ${n(2 * g / R * 1e9)} S22NEG ${n(2 * g / R * 1e9)} Z33 ${n(2 * u / D * 1e9)} Z22 ${n(2 * g / R * 1e9)} R33 ${n(Math.sqrt(u / T) * 1e3)} R22 ${n(Math.sqrt(g / T) * 1e3)} `, s.push(Ae);
      return;
    }
    D && (Ae += `  D ${a(r(D))}`), R && (Ae += `  B ${a(r(R))}`), k && !D && (Ae += `  D ${a(r(k))}`), J && (Ae += `  TF ${a(r(J))}`), fe && (Ae += `  TW ${a(r(fe))}`), s.push(Ae);
  }), s.push("");
  const Fe = /* @__PURE__ */ new Map();
  let Nt = 0;
  A.forEach((e) => {
    const { dz: t } = je(e[2]), o = `${a(e[0])},${a(e[1])},${t}`;
    Fe.has(o) || Fe.set(o, `${++Nt}`);
  }), s.push("$ POINT COORDINATES");
  for (const [e, t] of Fe) {
    const [o, c, E] = e.split(",").map(Number);
    s.push(E ? `  POINT "${t}"  ${a(r(o))} ${a(r(c))} ${a(r(E))} ` : `  POINT "${t}"  ${a(r(o))} ${a(r(c))} `);
  }
  s.push("");
  const le = (e) => {
    const t = A[e], { story: o, dz: c } = je(t[2]), E = `${a(t[0])},${a(t[1])},${c}`;
    return { pt: Fe.get(E) || "1", story: o };
  }, Ve = (e) => {
    var _a2, _b2, _c2, _d2, _e3, _f2;
    const t = [], o = (_a2 = S.propertyModifiers) == null ? void 0 : _a2.get(e);
    o && o.some(($) => Math.abs($ - 1) > 1e-9) && t.push(`PROPMODIFIERS "${o.map(($) => a($)).join(" ")}"`);
    const c = (_b2 = p.localAngles) == null ? void 0 : _b2.get(e);
    c !== void 0 && isFinite(c) && Math.abs(c) > 1e-9 && t.push(`ANG ${a(c)}`);
    const E = (_c2 = p.momentReleases) == null ? void 0 : _c2.get(e);
    if (E && E.some(($) => $)) {
      const $ = [];
      E.length === 12 ? (E[0] && $.push("PI"), E[1] && $.push("V2I"), E[2] && $.push("V3I"), E[3] && $.push("TI"), E[4] && $.push("M2I"), E[5] && $.push("M3I"), E[6] && $.push("PJ"), E[7] && $.push("V2J"), E[8] && $.push("V3J"), E[9] && $.push("TJ"), E[10] && $.push("M2J"), E[11] && $.push("M3J")) : E.length === 6 && (E[0] && $.push("TI"), E[1] && $.push("M2I"), E[2] && $.push("M3I"), E[3] && $.push("TJ"), E[4] && $.push("M2J"), E[5] && $.push("M3J")), $.length > 0 && t.push(`RELEASE "${$.join(" ")}"`);
    }
    const h = (_d2 = p.insertionPoints) == null ? void 0 : _d2.get(e);
    h && (Math.abs(h[0]) > 1e-9 || Math.abs(h[1]) > 1e-9) && t.push(`LATEROFFSET ${a(r(h[0]))} TRANSOFFSET ${a(r(h[1]))}`);
    const T = (_e3 = p.rigidOffsets) == null ? void 0 : _e3.get(e), u = (_f2 = p.endOffsets) == null ? void 0 : _f2.get(e), g = u ? [u[0], u[1]] : T, Y = u && u.length > 2 ? u[2] : 0;
    return g && (Math.abs(g[0]) > 1e-9 || Math.abs(g[1]) > 1e-9) && t.push(`LENGTHOFFI ${a(r(g[0]))} LENGTHOFFJ ${a(r(g[1]))} RIGIDZONE ${a(Y)}`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, ke = [], Xe = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Map();
  I.forEach((e, t) => {
    if (e.length !== 2) return;
    const o = $t(A, e);
    if (o === "BEAM") return;
    const c = A[e[0]][2] <= A[e[1]][2] ? e[0] : e[1], E = A[e[0]][2] <= A[e[1]][2] ? e[1] : e[0];
    if (Math.abs(A[c][0] - A[E][0]) > 1e-6 || Math.abs(A[c][1] - A[E][1]) > 1e-6) return;
    const h = le(c), T = Ue.get(t) || `Sec_${t}`, u = `${h.pt}_${T}_${o}`;
    ye.has(u) || ye.set(u, []), ye.get(u).push({ i: t, bot: c, top: E, zBot: a(A[c][2]), zTop: a(A[E][2]), planPt: h.pt, secName: T, type: o });
  }), ye.forEach((e, t) => {
    e.sort((c, E) => c.zBot - E.zBot);
    let o = 0;
    for (let c = 1; c <= e.length; c++) if (c === e.length || Math.abs(e[c].zBot - e[c - 1].zTop) > 1e-6) {
      const h = e.slice(o, c);
      h.length >= 1 && (ke.push({ elemIndices: h.map((T) => T.i), planPt: h[0].planPt, bottomNodeIdx: h[0].bot, topNodeIdx: h[h.length - 1].top, secName: h[0].secName, type: h[0].type, nSegments: h.length }), h.forEach((T) => Xe.add(T.i))), o = c;
    }
  }), s.push("$ LINE CONNECTIVITIES");
  const qe = [], Qe = (e) => re.indexOf(e), et = /* @__PURE__ */ new Map(), tt = (e, t, o, c, E, h, T, u) => {
    const g = le(c), Y = le(o);
    u !== void 0 && et.set(u, { name: e, story: g.story });
    const $ = Qe(g.story) - Qe(Y.story);
    $ <= 0 ? s.push(`  LINE  "${e}"  BEAM  "${Y.pt}"  "${g.pt}"  0`) : s.push(`  LINE  "${e}"  ${t}  "${Y.pt}"  "${g.pt}"  ${$}`), qe.push(`  LINEASSIGN  "${e}"  "${g.story}"  SECTION "${E}" ${h} MINNUMSTA ${T} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  ke.forEach((e, t) => {
    const o = Ve(e.elemIndices[0]);
    tt(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, o, e.nSegments);
  }), I.forEach((e, t) => {
    if (e.length !== 2 || Xe.has(t)) return;
    const o = $t(A, e), c = Ue.get(t) || `Sec_${t}`, E = Ve(t), h = A[e[0]][2] <= A[e[1]][2] ? e[0] : e[1], T = A[e[0]][2] <= A[e[1]][2] ? e[1] : e[0];
    tt(`E${t + 1}`, o === "BEAM" ? "BRACE" : o, h, T, c, E, 3, t);
  }), s.push("");
  const me = S.weightMode ?? "auto", de = /* @__PURE__ */ new Set();
  s.push("$ POINT ASSIGNS"), (_b = m.supports) == null ? void 0 : _b.forEach((e, t) => {
    const o = [];
    if (e[0] && o.push("UX"), e[1] && o.push("UY"), e[2] && o.push("UZ"), e[3] && o.push("RX"), e[4] && o.push("RY"), e[5] && o.push("RZ"), o.length > 0) {
      const c = le(t), E = c.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      s.push(`  POINTASSIGN  "${c.pt}"  "${c.story}"  RESTRAINT "${o.join(" ")}" ${E} `), de.add(`${c.pt}@${c.story}`);
    }
  });
  const st = (S.diaphragm ?? "auto") !== "none";
  st && ke.forEach((e) => {
    const t = le(e.topNodeIdx), o = `${t.pt}@${t.story}`;
    !de.has(o) && t.story !== "Base" && (s.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), de.add(o));
  }), me === "manual" && m.loads && m.loads.forEach((e, t) => {
    const [o, c, E] = V(t, e);
    if (Math.abs(o) < 1e-10 && Math.abs(c) < 1e-10 && Math.abs(E) < 1e-10) return;
    const h = le(t), T = `${h.pt}@${h.story}`;
    de.has(T) || (s.push(`  POINTASSIGN  "${h.pt}"  "${h.story}"  DIAPH "DISCONNECTED"  `), de.add(T));
  }), s.push(""), s.push("$ LINE ASSIGNS"), qe.forEach((e) => s.push(e)), s.push("");
  const ee = [], nt = p.areaObjects, ot = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map();
  nt == null ? void 0 : nt.forEach((e) => e.cells.forEach((t) => ot.add(t))), I.forEach((e, t) => {
    if (e.length === 4 || e.length === 3) {
      const o = A[e[0]], c = A[e[1]], E = A[e[2]], h = [c[0] - o[0], c[1] - o[1], c[2] - o[2]], T = [E[0] - o[0], E[1] - o[1], E[2] - o[2]], u = h[1] * T[2] - h[2] * T[1], g = h[2] * T[0] - h[0] * T[2], Y = h[0] * T[1] - h[1] * T[0], $ = Math.sqrt(u * u + g * g + Y * Y), D = $ > 1e-10 && Math.abs(Y) / $ < 0.5;
      ee.push({ idx: t, el: e, isWall: D }), ot.has(t) && ee.pop();
    }
  });
  const ie = (() => {
    for (const [e, t] of De) if (!t) return Ie.get(e);
    return Ie.values().next().value || "Conc_1";
  })();
  nt == null ? void 0 : nt.forEach((e, t) => {
    ee.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && at.set(e.cells[0], e.q), e.ang !== void 0 && ct.set(e.cells[0], e.ang);
  });
  const ge = "DECK";
  let xe = false;
  const He = [], it = (e) => {
    const t = S.elementInputs.plateFormulations, o = ee.find((E) => E.isWall === e), c = t && o ? t.get(o.idx) : void 0;
    return c === 2 ? "Membrane" : c === 1 ? "ShellThin" : "ShellThick";
  }, rt = (e, t) => {
    const o = S.elementInputs.thicknesses, c = ee.find((E) => E.isWall === e);
    return (c ? o == null ? void 0 : o.get(c.idx) : void 0) ?? (o == null ? void 0 : o.values().next().value) ?? t;
  }, Et = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], be = (e) => {
    var _a2;
    const o = (_a2 = p.shellModifiers) == null ? void 0 : _a2.get(e);
    if (o && o.length >= 8) return o.slice(0, 8);
    const c = p.membraneModifiers, E = p.bendingModifiers, h = c == null ? void 0 : c.get(e), T = E == null ? void 0 : E.get(e);
    if (h === void 0 && T === void 0) return null;
    const u = h ?? 1, g = T ?? 1;
    return [u, u, u, g, g, g, g, g];
  }, lt = (e, t) => {
    const o = ee.filter((T) => T.isWall === t), c = /* @__PURE__ */ new Map();
    for (const T of o) {
      const u = be(T.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      c.set(u.map((g) => a(g)).join(","), u);
    }
    if (c.size === 0) return "";
    c.size > 1 && console.warn(`[e2k] "${e}": ${c.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const E = c.values().next().value, h = Et.map((T, u) => Math.abs(E[u] - 1) > 1e-9 ? `${T} ${a(E[u])}` : "").filter(Boolean);
    return h.length ? `  SHELLPROP  "${e}"  ${h.join(" ")} ` : "";
  }, ft = S.elementInputs.thicknesses, At = S.elementInputs.plateFormulations, Oe = (e) => {
    const t = ft == null ? void 0 : ft.get(e.idx), o = At == null ? void 0 : At.get(e.idx), c = be(e.idx);
    return `${e.isWall ? "W" : "F"}|${t ?? "-"}|${o ?? "-"}|${c ? c.map((E) => a(E)).join(",") : "-"}|${Me(e.idx)}`;
  }, We = (e) => {
    const t = be(e);
    return t ? Math.abs(t[3]) < 1e-9 && Math.abs(t[4]) < 1e-9 : false;
  }, Le = /* @__PURE__ */ new Map();
  let Rt = 0, Dt = 0, Ct = 0;
  for (const e of ee) {
    const t = Oe(e);
    if (Le.has(t)) continue;
    const o = e.isWall, c = !o && We(e.idx), E = o ? ++Dt : c ? ++Ct : ++Rt, h = Me(e.idx);
    Le.set(t, { nombre: (o ? "Muro" : c ? ge : "Losa") + (E === 1 ? "" : String(E)), isWall: o, mem: c, t: ft == null ? void 0 : ft.get(e.idx), pf: At == null ? void 0 : At.get(e.idx), mat: Ie.get(h) ?? ie, acero: De.get(h) ?? false });
  }
  const Ye = (e) => {
    var _a2;
    return ((_a2 = Le.get(Oe(e))) == null ? void 0 : _a2.nombre) ?? (e.isWall ? "Muro" : "Losa");
  }, St = (e) => e === 2 ? "Membrane" : e === 1 ? "ShellThin" : "ShellThick", Pt = (e, t) => {
    const o = ee.find((h) => Oe(h) === t), c = o ? be(o.idx) ?? null : null;
    if (!c) return "";
    const E = Et.map((h, T) => Math.abs(c[T] - 1) > 1e-9 ? `${h} ${a(c[T])}` : "").filter(Boolean);
    return E.length ? `  SHELLPROP  "${e}"  ${E.join(" ")} ` : "";
  }, we = ee.find((e) => !e.isWall), ht = ee.find((e) => e.isWall), ve = /* @__PURE__ */ new Set();
  we && ve.add(Oe(we)), ht && ve.add(Oe(ht));
  const pt = [...Le.entries()].filter(([e]) => !ve.has(e));
  if (ee.some((e) => !e.isWall)) {
    xe = !!we && We(we.idx);
    const e = rt(false, 0.15);
    if (xe) {
      s.push("$ DECK PROPERTIES");
      const o = (E) => n(r(E)), c = [...Le.values()].find((E) => E.nombre === ge);
      (c == null ? void 0 : c.acero) ? s.push(`  SHELLPROP  "${ge}"  PROPTYPE  "Slab"  MATERIAL "${c.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${a(r(e))} `) : s.push(`  SHELLPROP  "${ge}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${ie}"  DECKMATERIAL "${ie}"  DECKSLABDEPTH ${o(e * 65 / 120)} DECKRIBDEPTH ${o(e * 55 / 120)} DECKRIBWIDTHTOP ${o(e * 150 / 120)} DECKRIBWIDTHBOTTOM ${o(e * 100 / 120)} DECKRIBSPACING ${o(e * 200 / 120)} DECKSHEARTHICKNESS ${o(e * 0.76 / 120)} DECKUNITWEIGHT ${n(f(0.11012))} SHEARSTUDDIAM ${o(e * 19 / 120)} SHEARSTUDHEIGHT ${o(e * 100 / 120)} SHEARSTUDFU 400 `);
    } else s.push("$ SLAB PROPERTIES"), s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${ie}"  MODELINGTYPE "${it(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${a(r(e))} `);
    const t = lt(xe ? ge : "Losa", false);
    t && s.push(t), s.push("");
  }
  if (ee.some((e) => e.isWall)) {
    s.push("$ WALL PROPERTIES");
    const e = rt(true, 0.2), t = it(true);
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${ie}"  MODELINGTYPE "${t}"  WALLTHICKNESS ${a(r(e))} `);
    const o = lt("Muro", true);
    o && s.push(o), s.push("");
  }
  if (pt.length) {
    s.push("$ OTRAS SECCIONES DE CASCARA");
    for (const [e, t] of pt) {
      const o = t.t ?? (t.isWall ? 0.2 : 0.15), c = (h) => n(r(h));
      s.push(t.isWall ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Wall"  MATERIAL "${t.mat ?? ie}"  MODELINGTYPE "${St(t.pf)}"  WALLTHICKNESS ${a(r(o))} ` : t.mem && t.acero ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Slab"  MATERIAL "${t.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${a(r(o))} ` : t.mem ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${ie}"  DECKMATERIAL "${ie}"  DECKSLABDEPTH ${c(o * 65 / 120)} DECKRIBDEPTH ${c(o * 55 / 120)} DECKRIBWIDTHTOP ${c(o * 150 / 120)} DECKRIBWIDTHBOTTOM ${c(o * 100 / 120)} DECKRIBSPACING ${c(o * 200 / 120)} DECKSHEARTHICKNESS ${c(o * 0.76 / 120)} DECKUNITWEIGHT ${n(f(0.11012))} SHEARSTUDDIAM ${c(o * 19 / 120)} SHEARSTUDHEIGHT ${c(o * 100 / 120)} SHEARSTUDFU 400 ` : `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Slab"  MATERIAL "${ie}"  MODELINGTYPE "${St(t.pf)}"  SLABTYPE "Slab"  SLABTHICKNESS ${a(r(o))} `);
      const E = Pt(t.nombre, e);
      E && s.push(E);
    }
    s.push("");
  }
  if (ee.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const e = [];
    ee.forEach((t, o) => {
      const { el: c, isWall: E } = t, h = E ? `W${o + 1}` : `F${o + 1}`, T = E ? "PANEL" : "FLOOR", u = c.map((g) => le(g));
      if (E) {
        const g = (k) => re.indexOf(k);
        if (new Set(u.map((k) => k.pt)).size === 4) {
          const k = Math.max(...u.map((fe) => g(fe.story))), J = u.map((fe) => k - g(fe.story));
          s.push(`  AREA "${h}"  ${T}  4  "${u[0].pt}"  "${u[1].pt}"  "${u[2].pt}"  "${u[3].pt}"  ${J.join("  ")}  `), e.push(`  AREAASSIGN  "${h}"  "${re[k]}"  SECTION "${Ye(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const $ = A[c[0]][2] <= A[c[2]][2] ? 0 : 2, D = A[c[1]][2] <= A[c[3]][2] ? 1 : 3;
        s.push(`  AREA "${h}"  ${T}  4  "${u[$].pt}"  "${u[D].pt}"  "${u[D].pt}"  "${u[$].pt}"  1  1  0  0  `);
        const R = u[$ === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${h}"  "${R}"  SECTION "${Ye(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        const g = u.length, Y = (J) => re.indexOf(J), $ = Math.max(...u.map((J) => Y(J.story))), D = u.map((J) => $ - Y(J.story)), R = re[$] ?? u[0].story;
        s.push(`  AREA "${h}"  ${T}  ${g}  ` + u.map((J) => `"${J.pt}"`).join("  ") + "  " + D.join("  ") + "  ");
        const k = ct.get(t.idx) ?? (b == null ? void 0 : b.get(t.idx));
        e.push(We(t.idx) ? `  AREAASSIGN  "${h}"  "${R}"  SECTION "${Ye(t)}"  ANG ${a(k ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${h}"  "${R}"  SECTION "${Ye(t)}" ${st ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), He.push({ name: h, story: R, idx: t.idx });
      }
    }), s.push(""), s.push("$ AREA ASSIGNS"), e.forEach((t) => s.push(t)), s.push("");
  }
  const Ft = me === "manual" ? 0 : H ?? 1;
  s.push("$ LOAD PATTERNS");
  const pe = ((_c = S.loadPatterns) == null ? void 0 : _c.length) ? S.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: Ft }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of pe) {
    let t;
    e.type === "Dead" ? t = me === "manual" ? 0 : e.selfWeightMultiplier ?? H ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), s.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  s.push("");
  const $e = S.loadPatternDestino && pe.some((e) => e.name === S.loadPatternDestino) ? S.loadPatternDestino : ((_d = pe.find((e) => e.type === "Dead")) == null ? void 0 : _d.name) ?? pe[0].name, ze = [], Je = /* @__PURE__ */ new Map(), Tt = (e, t) => {
    const o = Je.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let c = 0; c < 6; c++) o[c] += t[c] ?? 0;
    Je.set(e, o);
  }, yt = $e === (((_e2 = pe.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? pe[0].name), bt = me === "manual" || !yt || te;
  if (m.loads && m.loads.size > 0 && m.loads.forEach((e, t) => {
    const [o, c, E] = V(t, e), [h, T, u] = U(t, e);
    Tt(t, [o, c, bt ? E : 0, h, T, u]);
  }), m.moments && m.moments.size > 0 && m.moments.forEach((e, t) => {
    Tt(t, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), Je.forEach((e, t) => {
    if (e.every((c) => Math.abs(c) <= 1e-10)) return;
    const o = le(t);
    ze.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "FORCE"  LC "${$e}"  FX ${n(d(e[0]))}  FY ${n(d(e[1]))}  FZ ${n(d(e[2]))}  MX ${n(L(e[3]))}  MY ${n(L(e[4]))}  MZ ${n(L(e[5]))}`);
  }), ze.length > 0 && (s.push("$ POINT OBJECT LOADS"), ze.forEach((e) => s.push(e)), s.push("")), te && z.size > 0) {
    const e = [];
    for (const t of z) {
      const o = X.get(t), c = et.get(t);
      if (!c) continue;
      const E = (h) => n(f(h) / l);
      Math.abs(o[2]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "${o[2] < 0 ? "GRAV" : "Z"}"  LC "${$e}"  FVAL ${E(Math.abs(o[2]))}`), Math.abs(o[0]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "X"  LC "${$e}"  FVAL ${E(o[0])}`), Math.abs(o[1]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "Y"  LC "${$e}"  FVAL ${E(o[1])}`);
    }
    e.length && (s.push("$ FRAME OBJECT LOADS"), e.forEach((t) => s.push(t)), s.push(""));
  }
  if (M && M.size > 0 && He.length > 0) {
    const e = [];
    for (const t of He) {
      const o = at.get(t.idx), c = o !== void 0 ? { value: o } : M.get(t.idx);
      if (!c || Math.abs(c.value) < 1e-12) continue;
      const E = c.dir ?? "GRAV", h = E === "GRAV" ? Math.abs(c.value) : c.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${E}"  LC "${c.pattern ?? $e}"  FVAL ${n(f(h) / (l * l))}`);
    }
    e.length > 0 && (s.push("$ SHELL OBJECT LOADS"), e.forEach((t) => s.push(t)), s.push(""));
  }
  s.push("$ ANALYSIS OPTIONS"), s.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), s.push('  PDELTA  METHOD "NONE"  '), s.push("");
  const _e = me === "manual";
  s.push("$ MASS SOURCE"), s.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${_e ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${_e ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), _e || s.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), s.push(""), s.push("$ LOAD CASES");
  const Yt = ((_f = S.loadCases) == null ? void 0 : _f.length) ? S.loadCases : pe.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of Yt) {
    s.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) s.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  const wt = S.modalModes ?? 12;
  s.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), s.push(`  LOADCASE "Modal"  MAXMODES ${wt}  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `), s.push("");
  const Ke = S.loadCombinations;
  if (Ke && Ke.length) {
    s.push("$ LOAD COMBINATIONS");
    for (const e of Ke) {
      s.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) s.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    s.push("");
  }
  return s.push("  END"), s.push("$ END OF MODEL FILE"), s.join(`\r
`);
}
function $t(S, A) {
  const I = S[A[0]], m = S[A[1]], p = Math.abs(m[2] - I[2]), y = Math.sqrt((m[0] - I[0]) ** 2 + (m[1] - I[1]) ** 2), w = p > y * 0.5;
  return w && y > 0.01 ? "BRACE" : w ? "COLUMN" : "BEAM";
}
export {
  Kt as a,
  jt as e,
  _t as p
};
