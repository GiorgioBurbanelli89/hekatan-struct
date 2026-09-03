function P(M) {
  return M && parseFloat(M) || 0;
}
function Nt(M) {
  const l = /* @__PURE__ */ new Map(), g = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let R;
  for (; (R = g.exec(M)) !== null; ) l.set(R[1], R[2] !== void 0 ? R[2] : R[3]);
  return l;
}
function Kt(M) {
  const l = M.split(/\r?\n/);
  return l.some((R) => R.trim().startsWith("TABLE:")) ? Ut(l) : xt(l);
}
function Ut(M) {
  var _a, _b, _c, _d, _e, _f;
  const l = [];
  let g = "";
  for (const v of M) {
    const L = v.trimEnd();
    L.endsWith("_") ? g += L.slice(0, -1) + " " : (g += L, l.push(g), g = "");
  }
  g && l.push(g);
  const R = { force: "KN", length: "m" };
  let p = "UX,UY,UZ,RX,RY,RZ";
  const Y = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), _ = [], j = [], ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = [], oe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), he = [], r = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
  let A = "";
  for (const v of l) {
    const L = v.trim();
    if (!L || L.startsWith(";") || L.startsWith("File ")) continue;
    if (L.startsWith("TABLE:")) {
      const o = L.match(/TABLE:\s+"(.+?)"/);
      A = o ? o[1].toUpperCase() : "";
      continue;
    }
    if (L === "END TABLE DATA") {
      A = "";
      continue;
    }
    const t = Nt(L);
    switch (A) {
      case "PROGRAM CONTROL": {
        const o = t.get("CurrUnits");
        if (o) {
          const a = o.split(",").map((i) => i.trim());
          a[0] && (R.force = a[0]), a[1] && (R.length = a[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const o = t.get("Material");
        o && !Y.has(o) && Y.set(o, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const o = t.get("Material");
        if (o) {
          const a = Y.get(o) || { E: 0, nu: 0, G: 0 };
          a.E = P(t.get("E1")), a.G = P(t.get("G12")), a.nu = P(t.get("U12")), a.density = P(t.get("UnitMass")), Y.set(o, a);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const o = t.get("Material");
        o && Y.has(o) && (Y.get(o).fy = P(t.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const o = t.get("SectionName");
        o && f.set(o, { material: t.get("Material") || "", shape: t.get("Shape") || "Rectangular", D: P(t.get("t3")), B: P(t.get("t2")), TF: P(t.get("tf")), TW: P(t.get("tw")), A: P(t.get("Area")), Iz: P(t.get("I33")), Iy: P(t.get("I22")), J: P(t.get("TorsConst")), As2: P(t.get("AS2")), As3: P(t.get("AS3")) });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 09 - SHAPE BOX/TUBE": {
        const o = t.get("SectionName");
        o && U.set(o, { h: P(t.get("Height")), b: P(t.get("Width")), t: P(t.get("FlngThick")) || P(t.get("WebThick")), mat: t.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 12 - SHAPE SOLID RECTANGLE": {
        const o = t.get("SectionName");
        o && Q.set(o, { mat: t.get("ShapeMat") || "" });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const o = t.get("Section");
        o && b.set(o, { material: t.get("Material") || "", type: t.get("Type") || "Shell", thickness: P(t.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const o = t.get("Joint");
        if (o) {
          const a = P(t.get("XorR")), i = P(t.get("Y")), I = P(t.get("Z"));
          J.set(o, [a, i, I]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const o = t.get("Frame"), a = t.get("JointI"), i = t.get("JointJ");
        o && a && i && _.push({ name: o, j1: a, j2: i });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const o = t.get("Area");
        if (o) {
          const a = parseInt(t.get("NumJoints") || "4"), i = [];
          for (let I = 1; I <= a; I++) {
            const w = t.get(`Joint${I}`);
            w && i.push(w);
          }
          i.length >= 3 && j.push({ name: o, joints: i });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const o = t.get("Joint");
        if (o) {
          const a = [((_a = t.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = t.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = t.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = t.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = t.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = t.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          ee.set(o, a);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const o = t.get("Frame"), a = t.get("AnalSect");
        o && a && te.set(o, a);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const o = t.get("Area"), a = t.get("Section");
        o && a && ae.set(o, a);
        break;
      }
      case "FRAME LOADS - DISTRIBUTED": {
        const o = t.get("Frame"), a = t.get("Dir"), i = P(t.get("FOverLA"));
        if (o && a && i) {
          const I = { X: 0, Y: 1, Z: 2 }[a];
          if (I !== void 0) {
            const w = Ee.get(o) ?? [0, 0, 0];
            w[I] += i, Ee.set(o, w);
          }
        }
        break;
      }
      case "CONNECTIVITY - SOLID": {
        const o = t.get("Solid");
        if (o) {
          const a = [];
          for (let i = 1; i <= 8; i++) {
            const I = t.get(`Joint${i}`);
            I && a.push(I);
          }
          a.length === 8 && he.push({ name: o, joints: a });
        }
        break;
      }
      case "SOLID PROPERTY DEFINITIONS": {
        const o = t.get("SolidProp");
        o && r.set(o, { material: t.get("Material") || "", incomp: (t.get("InComp") || "Yes").toLowerCase().startsWith("y") });
        break;
      }
      case "SOLID PROPERTY ASSIGNMENTS": {
        const o = t.get("Solid"), a = t.get("SolidProp");
        o && a && T.set(o, a);
        break;
      }
      case "AREA STIFFNESS MODIFIERS": {
        const o = t.get("Area");
        o && ce.set(o, ["f11", "f22", "f12", "m11", "m22", "m12", "v13", "v23"].map((a) => t.has(a) ? P(t.get(a)) : 1));
        break;
      }
      case "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL": {
        const o = t.get("Frame");
        o && se.set(o, P(t.get("Angle")));
        break;
      }
      case "FRAME OFFSET ALONG LENGTH ASSIGNMENTS": {
        const o = t.get("Frame");
        o && oe.set(o, [P(t.get("LengthI")), P(t.get("LengthJ")), P(t.get("RigidFactor"))]);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const o = t.get("Joint");
        o && ie.push({ joint: o, fx: P(t.get("F1")), fy: P(t.get("F2")), fz: P(t.get("F3")), mx: P(t.get("M1")), my: P(t.get("M2")), mz: P(t.get("M3")) });
        break;
      }
    }
  }
  return Ot(R, p, Y, f, b, J, _, j, ee, te, ae, ie, oe, se, ce, Ee, he, r, T, U, Q);
}
function xt(M) {
  const l = { force: "KN", length: "m" };
  let g = "UX,UY,UZ,RX,RY,RZ";
  const R = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Q = [], f = [], b = /* @__PURE__ */ new Map(), J = [], _ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ae = [], ie = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map();
  let se = "", ce = "";
  for (const r of M) {
    const T = r.trim();
    if (!T || T.startsWith(";")) continue;
    if (!r.startsWith(" ") && !r.startsWith("	")) {
      const L = T.toUpperCase();
      if (L === "END") break;
      L.startsWith("SHELL SECTION") ? se = "SHELL SECTION" : L.startsWith("FRAME SECTION") ? se = "FRAME SECTION" : se = L.split(/\s+/)[0];
      continue;
    }
    const A = Nt(T), v = T.split(/\s+/);
    switch (se) {
      case "SYSTEM": {
        const L = A.get("DOF");
        L && (g = L);
        const t = A.get("LENGTH");
        t && (l.length = t);
        const o = A.get("FORCE");
        o && (l.force = o);
        break;
      }
      case "JOINT": {
        const L = v[0];
        U.set(L, [P(A.get("X")), P(A.get("Y")), P(A.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const L = A.get("ADD"), t = A.get("DOF");
        if (L && t) {
          const o = t.split(","), a = [false, false, false, false, false, false];
          for (const i of o) {
            const I = i.toUpperCase();
            (I === "UX" || I === "U1") && (a[0] = true), (I === "UY" || I === "U2") && (a[1] = true), (I === "UZ" || I === "U3") && (a[2] = true), (I === "RX" || I === "R1") && (a[3] = true), (I === "RY" || I === "R2") && (a[4] = true), (I === "RZ" || I === "R3") && (a[5] = true);
          }
          b.set(L, a);
        }
        break;
      }
      case "MATERIAL": {
        const L = A.get("NAME");
        if (L) ce = L, R.set(L, { E: 0, nu: 0, G: 0 });
        else if (ce) {
          const t = R.get(ce), o = A.get("E");
          o && (t.E = P(o));
          const a = A.get("U");
          a && (t.nu = P(a)), t.G = t.E / (2 * (1 + t.nu));
          const i = A.get("M");
          i && (t.density = P(i));
        }
        break;
      }
      case "SHELL": {
        const L = v[0], t = A.get("J");
        A.get("SEC"), t && f.push({ name: L, joints: t.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const L = A.get("NAME");
        L && Y.set(L, { material: A.get("MAT") || "", type: A.get("TYPE") || "Shell", thickness: P(A.get("TH")) });
        break;
      }
      case "FRAME": {
        const L = v[0], t = A.get("J");
        if (t) {
          const o = t.split(",");
          o.length >= 2 && Q.push({ name: L, j1: o[0], j2: o[1] });
        }
        break;
      }
      case "LOAD": {
        const L = A.get("ADD");
        L && J.push({ joint: L, fx: P(A.get("UX")), fy: P(A.get("UY")), fz: P(A.get("UZ")), mx: P(A.get("MX")), my: P(A.get("MY")), mz: P(A.get("MZ")) });
        break;
      }
    }
  }
  return Ot(l, g, R, p, Y, U, Q, f, b, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), J, _, j, ee, te, ae, ie, oe);
}
function Ot(M, l, g, R, p, Y, U, Q, f, b, J, _, j = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = [], oe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ce, Ee) {
  var _a, _b;
  const he = [], r = /* @__PURE__ */ new Map(), T = [];
  for (const [S, m] of Y) r.set(S, T.length), he.push(S), T.push(m);
  const A = [], v = [], L = /* @__PURE__ */ new Map();
  for (const S of U) {
    const m = r.get(S.j1), N = r.get(S.j2);
    if (m !== void 0 && N !== void 0) {
      const B = A.length;
      A.push([m, N]), v.push(S.name);
      const y = b.get(S.name);
      y && L.set(B, y);
    }
  }
  const t = A.length;
  for (const S of Q) {
    const m = S.joints.map((N) => r.get(N)).filter((N) => N !== void 0);
    if (m.length >= 3) {
      const N = A.length;
      A.push(m), v.push(S.name);
      const B = J.get(S.name);
      B && L.set(N, B);
    }
  }
  const o = A.length - t, a = [];
  for (const S of ie) {
    const m = S.joints.map((y) => r.get(y));
    if (m.some((y) => y === void 0)) continue;
    const N = A.length;
    A.push([m[0], m[1], m[3], m[2], m[4], m[5], m[7], m[6]]), v.push(S.name), a.push(N);
    const B = se.get(S.name);
    B && L.set(N, B);
  }
  const i = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, I = /* @__PURE__ */ new Map(), w = g.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let S = 0; S < A.length; S++) {
    const m = L.get(S), N = m ? R.get(m) : null, B = m ? p.get(m) : null;
    if (N || A[S].length === 2) {
      const y = N || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, Z = g.get(y.material) || w, H = Z.E || w.E, V = Z.nu || 0.3, q = Z.G || H / (2 * (1 + V));
      i.elasticities.set(S, H), i.shearModuli.set(S, q), i.areas.set(S, y.A || y.D * y.B), i.momentsOfInertiaZ.set(S, y.Iz || y.B * y.D ** 3 / 12), i.momentsOfInertiaY.set(S, y.Iy || y.D * y.B ** 3 / 12), i.torsionalConstants.set(S, y.J || 0), i.densities.set(S, Z.density || 0), y.As2 && (i.shearAreasZ ?? (i.shearAreasZ = /* @__PURE__ */ new Map()), i.shearAreasZ.set(S, y.As2)), y.As3 && (i.shearAreasY ?? (i.shearAreasY = /* @__PURE__ */ new Map()), i.shearAreasY.set(S, y.As3));
      const K = j.get(v[S]);
      K && (i.endOffsets ?? (i.endOffsets = /* @__PURE__ */ new Map()), i.endOffsets.set(S, K));
      const G = ee.get(v[S]);
      G && (i.localAngles ?? (i.localAngles = /* @__PURE__ */ new Map()), i.localAngles.set(S, G)), ((_a = y.shape) == null ? void 0 : _a.includes("Wide Flange")) || y.shape === "I" ? I.set(S, { type: "I", b: y.B, h: y.D, name: m || "I-section" }) : I.set(S, { type: "rect", b: y.B, h: y.D });
      const z = m ? ce == null ? void 0 : ce.get(m) : void 0;
      if (z && z.b > 0 && z.h > 0 && z.t > 0) {
        const ne = m ? Ee == null ? void 0 : Ee.get(m) : void 0, fe = ne && ((_b = g.get(ne.mat)) == null ? void 0 : _b.E) || 0;
        I.set(S, { type: "CFT", b: z.b, h: z.h, tw: z.t, name: m, ...fe > 0 ? { fillE: fe } : {} });
      }
    } else if (B) {
      const y = g.get(B.material) || w, Z = y.E || w.E, H = y.nu || 0.2, V = y.G || Z / (2 * (1 + H));
      i.elasticities.set(S, Z), i.shearModuli.set(S, V), i.thicknesses.set(S, B.thickness), i.poissonsRatios.set(S, H), i.plateFormulations ?? (i.plateFormulations = /* @__PURE__ */ new Map()), i.plateFormulations.set(S, /thin/i.test(B.type) ? 1 : 0);
      const q = te.get(v[S]);
      q && (i.shellModifiers ?? (i.shellModifiers = /* @__PURE__ */ new Map()), i.shellModifiers.set(S, q), i.membraneModifiers ?? (i.membraneModifiers = /* @__PURE__ */ new Map()), i.membraneModifiers.set(S, q[0]), i.bendingModifiers ?? (i.bendingModifiers = /* @__PURE__ */ new Map()), i.bendingModifiers.set(S, q[3])), i.densities.set(S, y.density || 0);
    }
  }
  if (a.length) {
    let S = false;
    for (const m of a) {
      const N = oe.get(L.get(m) || ""), B = N && g.get(N.material) || w, y = B.E || w.E, Z = B.nu || 0.2;
      i.elasticities.set(m, y), i.poissonsRatios.set(m, Z), i.shearModuli.set(m, B.G || y / (2 * (1 + Z))), i.densities.set(m, B.density || 0), (N == null ? void 0 : N.incomp) && (S = true);
    }
    i.solidIncompatible = S;
  }
  const x = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() };
  for (const [S, m] of f) {
    const N = r.get(S);
    N !== void 0 && x.supports.set(N, m);
  }
  for (const [S, m] of ae) {
    const N = v.indexOf(S);
    if (N < 0 || A[N].length !== 2) continue;
    i.frameLoads ?? (i.frameLoads = /* @__PURE__ */ new Map()), i.frameLoads.set(N, m);
    const B = T[A[N][0]], y = T[A[N][1]], Z = [y[0] - B[0], y[1] - B[1], y[2] - B[2]], H = Math.hypot(Z[0], Z[1], Z[2]);
    if (H < 1e-9) continue;
    const V = [Z[0] / H, Z[1] / H, Z[2] / H], q = H * H / 12, K = [V[1] * m[2] - V[2] * m[1], V[2] * m[0] - V[0] * m[2], V[0] * m[1] - V[1] * m[0]], G = (z, ne) => {
      const fe = x.loads.get(z) || [0, 0, 0, 0, 0, 0];
      for (let Me = 0; Me < 6; Me++) fe[Me] += ne[Me];
      x.loads.set(z, fe);
    };
    G(A[N][0], [m[0] * H / 2, m[1] * H / 2, m[2] * H / 2, q * K[0], q * K[1], q * K[2]]), G(A[N][1], [m[0] * H / 2, m[1] * H / 2, m[2] * H / 2, -q * K[0], -q * K[1], -q * K[2]]);
  }
  for (const S of _) {
    const m = r.get(S.joint);
    if (m !== void 0) {
      const N = x.loads.get(m) || [0, 0, 0, 0, 0, 0];
      N[0] += S.fx, N[1] += S.fy, N[2] += S.fz, N[3] += S.mx, N[4] += S.my, N[5] += S.mz, x.loads.set(m, N);
    }
  }
  return { units: M, dof: l, materials: g, frameSections: R, shellSections: p, nodes: T, nodeNames: he, nodeNameToIdx: r, elements: A, elementNames: v, elementSections: L, nodeInputs: x, elementInputs: i, sectionShapes: I, info: { nNodes: T.length, nFrames: t, nShells: o, title: `SAP2000 (${t} frames, ${o} shells)` } };
}
function Zt(M) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { nodes: l, elements: g, nodeInputs: R, elementInputs: p } = M, Y = { force: "KN", length: "m" };
  M.units && (M.units.force !== "KN" || M.units.length !== "m") && console.warn(`[s2k] el modelo va en kN\xB7m y el exportador NO convierte: se declara CurrUnits="KN, m, C" y se ignora "${M.units.force}, ${M.units.length}". Etiquetarlo de otra forma hace que SAP2000 lea las fuerzas escaladas.`);
  const U = M.title || "Awatif Model", Q = [], f = (t) => Q.push(t), b = () => Q.push(" ");
  f(`File ${U}.$2k was saved on m/d/yy at h:mm:ss`), b(), f('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), f("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), b();
  const J = [], _ = (t) => {
    var _a2, _b2, _c2, _d2;
    const o = ((_a2 = p.elasticities) == null ? void 0 : _a2.get(t)) || 0, a = (_b2 = p.poissonsRatios) == null ? void 0 : _b2.get(t), i = ((_c2 = p.shearModuli) == null ? void 0 : _c2.get(t)) || 0, I = a !== void 0 ? a : o > 0 && i > 0 ? Math.max(0, Math.min(0.5, o / (2 * i) - 1)) : 0.2, w = i > 0 ? i : o > 0 ? o / (2 * (1 + I)) : 0, x = ((_d2 = p.densities) == null ? void 0 : _d2.get(t)) || 0;
    return { E: o, nu: I, G: w, rho: x, key: `MAT_${Math.round(o)}_n${I.toFixed(4)}` };
  }, j = [], ee = [];
  if (g.forEach((t, o) => {
    t.length === 2 ? J.push(o) : t.length === 8 ? ee.push(o) : j.push(o);
  }), J.length > 0) {
    f('TABLE:  "CONNECTIVITY - FRAME"');
    for (const t of J) {
      const o = g[t];
      f(`   Frame=${t + 1}   JointI=${o[0] + 1}   JointJ=${o[1] + 1}   IsCurved=No`);
    }
    b();
  }
  if (j.length > 0) {
    f('TABLE:  "CONNECTIVITY - AREA"');
    for (const t of j) {
      const o = g[t], a = o.map((i, I) => `Joint${I + 1}=${i + 1}`).join("   ");
      f(`   Area=${t + 1}   NumJoints=${o.length}   ${a}`);
    }
    b();
  }
  if (ee.length > 0) {
    f('TABLE:  "CONNECTIVITY - SOLID"');
    for (const t of ee) {
      const o = g[t], a = [o[0], o[1], o[3], o[2], o[4], o[5], o[7], o[6]];
      f(`   Solid=${t + 1}   ${a.map((i, I) => `Joint${I + 1}=${i + 1}`).join("   ")}`);
    }
    b();
  }
  f('TABLE:  "COORDINATE SYSTEMS"'), f("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), b(), f('TABLE:  "DATABASE FORMAT TYPES"'), f("   UnitsCurr=Yes   OverrideE=No"), b();
  const te = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
  for (const t of J) {
    const o = ((_a = p.areas) == null ? void 0 : _a.get(t)) || 0, a = ((_b = p.momentsOfInertiaZ) == null ? void 0 : _b.get(t)) || 0, i = ((_c = p.momentsOfInertiaY) == null ? void 0 : _c.get(t)) || 0, I = ((_d = p.torsionalConstants) == null ? void 0 : _d.get(t)) || 0, w = ((_e = p.elasticities) == null ? void 0 : _e.get(t)) || 0, x = _(t).key, S = ((_f = p.shearAreasZ) == null ? void 0 : _f.get(t)) ?? 0, m = ((_g = p.shearAreasY) == null ? void 0 : _g.get(t)) ?? 0, N = (_h = p.sectionShapes) == null ? void 0 : _h.get(t);
    let B;
    if ((N == null ? void 0 : N.type) === "CFT" && N.b > 0 && N.h > 0 && N.tw > 0 && N.tw < Math.min(N.b, N.h) / 2 && w > 0) {
      const H = N.b - 2 * N.tw, V = N.h - 2 * N.tw, q = N.b * N.h - H * V, K = H * V, G = N.fillE > 0 ? N.fillE / w : Math.max(0.01, Math.min(1, (o - q) / K)), z = G * w, ne = 0.2, fe = `MAT_${Math.round(z)}_n${ne.toFixed(4)}`, Me = _(t).rho;
      ae.has(fe) || ae.set(fe, { E: z, nu: ne, G: z / (2 * (1 + ne)), rho: Me * G }), B = { b: N.b, h: N.h, t: N.tw, Ec: z, nuC: ne, matFill: fe };
    }
    const y = `A${o.toPrecision(6)}_Iz${a.toPrecision(6)}_s${S.toPrecision(6)}_${m.toPrecision(6)}${B ? `_SD${B.b}x${B.h}x${B.t}` : ""}`;
    if (!te.has(y)) {
      let H = 0.3, V = 0.3;
      o > 0 && a > 0 && (H = Math.sqrt(12 * a / o), V = o / H), te.set(y, { A: o, Iz: a, Iy: i, J: I, b: V, h: H, matKey: x, As2: S > 0 ? S : o * 5 / 6, As3: m > 0 ? m : o * 5 / 6, sd: B });
    }
    const Z = [...te.keys()].indexOf(y) + 1;
    ie.set(t, `SEC${Z}`);
  }
  if (J.length > 0) {
    f('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const t of J) {
      const o = ie.get(t) || "SEC1";
      f(`   Frame=${t + 1}   AutoSelect=N.A.   AnalSect=${o}   MatProp=Default`);
    }
    b();
  }
  if (te.size > 0) {
    f('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let t = 0;
    for (const [, o] of te) {
      if (t++, o.sd) {
        f(`   SectionName=SEC${t}   Material=${o.matKey}   Shape="SD Section"   Area=${D(o.A)}   TorsConst=${D(o.J)}   I33=${D(o.Iz)}   I22=${D(o.Iy)}   I23=0   AS2=${D(o.As2)}   AS3=${D(o.As3)} _`), f("        Color=Cyan   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
        continue;
      }
      f(`   SectionName=SEC${t}   Material=${o.matKey}   Shape=General   t3=${D(o.h)}   t2=${D(o.b)}   Area=${D(o.A)}   TorsConst=${D(o.J)}   I33=${D(o.Iz)}   I22=${D(o.Iy)}   I23=0   AS2=${D(o.As2)}   AS3=${D(o.As3)} _`), f("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    b();
  }
  const oe = [...te.values()].map((t, o) => ({ sec: t, name: `SEC${o + 1}` })).filter((t) => t.sec.sd);
  if (oe.length > 0) {
    f('TABLE:  "SECTION DESIGNER PROPERTIES 01 - GENERAL"');
    for (const { name: t } of oe) f(`   SectionName=${t}   DesignType="No Check/Design"   DsgnOrChck=Check   IncludeVStr=No   AxisAngle=90   MeshSzAbs=0   MeshSzRel=0.05`);
    b(), f('TABLE:  "SECTION DESIGNER PROPERTIES 09 - SHAPE BOX/TUBE"');
    for (const { sec: t, name: o } of oe) {
      const a = t.sd;
      f(`   SectionName=${o}   ShapeName=TUBO   ShapeType="User Defined"   ShapeMat=${t.matKey}   ZOrder=1   FillColor=Gray4   XCenter=0   YCenter=0   Height=${D(a.h)}   Width=${D(a.b)}   FlngThick=${D(a.t)}   WebThick=${D(a.t)}   Rotation=0 _`), f('        CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0   DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0');
    }
    b(), f('TABLE:  "SECTION DESIGNER PROPERTIES 12 - SHAPE SOLID RECTANGLE"');
    for (const { sec: t, name: o } of oe) {
      const a = t.sd;
      f(`   SectionName=${o}   ShapeName=RELLENO   ShapeMat=${a.matFill}   ZOrder=2   FillColor=Gray4   XCenter=0   YCenter=0   Height=${D(a.h - 2 * a.t)}   Width=${D(a.b - 2 * a.t)}   Rotation=0   Reinforcing=No   CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0 _`), f("        DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0");
    }
    b(), f('TABLE:  "SECTION DESIGNER PROPERTIES 30 - FIBER GENERAL"');
    for (const { name: t } of oe) f(`   SectionName=${t}   NumFibersD2=3   NumFibersD3=3   CoordSys=Cartesian   GridAngle=0   LumpRebar=No   FiberPMM=No   FiberMC=No`);
    b();
  }
  {
    const t = J.filter((o) => {
      var _a2;
      const a = (_a2 = p.localAngles) == null ? void 0 : _a2.get(o);
      return a !== void 0 && isFinite(a) && Math.abs(a) > 1e-9;
    });
    if (t.length > 0) {
      f('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const o of t) f(`   Frame=${o + 1}   Angle=${D(p.localAngles.get(o))}   AdvanceAxes=No`);
      b();
    }
  }
  {
    const t = p.endOffsets, o = J.filter((a) => {
      const i = t == null ? void 0 : t.get(a);
      return !!i && (Math.abs(i[0]) > 1e-9 || Math.abs(i[1]) > 1e-9);
    });
    if (o.length > 0) {
      f('TABLE:  "FRAME OFFSET ALONG LENGTH ASSIGNMENTS"');
      for (const a of o) {
        const i = t.get(a);
        f(`   Frame=${a + 1}   Type=User   LengthI=${D(i[0])}   LengthJ=${D(i[1])}   RigidFactor=${D(i.length > 2 ? i[2] : 0)}`);
      }
      b();
    }
  }
  const se = !!M.layeredSection && j.length > 0, ce = M.layeredSection, Ee = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map();
  if (!se) for (const t of j) {
    const o = ((_i = p.thicknesses) == null ? void 0 : _i.get(t)) || 0.1;
    (_j = p.elasticities) == null ? void 0 : _j.get(t);
    const a = _(t).key, i = ((_k = p.plateFormulations) == null ? void 0 : _k.get(t)) ?? 0, I = `t${o.toPrecision(6)}_f${i}`;
    Ee.has(I) || Ee.set(I, { t: o, matKey: a, formulacion: i });
    const w = [...Ee.keys()].indexOf(I) + 1;
    he.set(t, `SSEC${w}`);
  }
  if (j.length > 0) {
    f('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of j) {
      const i = se ? ce.name : he.get(a) || "SSEC1";
      f(`   Area=${a + 1}   Section=${i}   MatProp=Default`);
    }
    b();
    const t = p.shellModifiers, o = j.filter((a) => {
      const i = t == null ? void 0 : t.get(a);
      return i && i.some((I) => Math.abs(I - 1) > 1e-12);
    });
    if (o.length > 0) {
      f('TABLE:  "AREA STIFFNESS MODIFIERS"');
      for (const a of o) {
        const i = t.get(a);
        f(`   Area=${a + 1}   f11=${D(i[0])}   f22=${D(i[1])}   f12=${D(i[2])}   m11=${D(i[3])}   m22=${D(i[4])}   m12=${D(i[5])}   v13=${D(i[6])}   v23=${D(i[7])}   MassMod=1   WeightMod=1`);
      }
      b();
    }
    if (f('TABLE:  "AREA SECTION PROPERTIES"'), se) {
      const a = ce, i = ((_l = a.layers[0]) == null ? void 0 : _l.material) || "MAT_DEFAULT";
      f(`   Section=${a.name}   Material=${i}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${D(a.totalThickness)}   BendThick=${D(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, i] of Ee) {
        a++;
        const I = i.formulacion === 2 ? "Membrane" : i.formulacion === 3 ? "Plate-Thin" : i.formulacion === 4 ? "Plate-Thick" : i.formulacion === 1 ? "Shell-Thin" : "Shell-Thick", w = i.formulacion === 3 || i.formulacion === 4 ? "No" : "Yes";
        f(`   Section=SSEC${a}   Material=${i.matKey}   MatAngle=0   AreaType=Shell   Type=${I}   DrillDOF=${w}   Thickness=${D(i.t)}   BendThick=${D(i.t)}   Color=Cyan`);
      }
    }
    if (b(), se) {
      f('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = ce;
      for (const i of a.layers) {
        const I = i.angle ?? 0, w = i.numIntPts ?? 3;
        f(`   Section=${a.name}   LayerName=${i.name}   Distance=${D(i.distance)}   Thickness=${D(i.thickness)}   Type=Shell   NumIntPts=${w}   Material=${i.material}   MatAngle=${D(I * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      b();
    }
  }
  f('TABLE:  "JOINT COORDINATES"');
  for (let t = 0; t < l.length; t++) {
    const o = l[t];
    f(`   Joint=${t + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${D(o[0])}   Y=${D(o[1])}   Z=${D(o[2])}   SpecialJt=No`);
  }
  if (b(), R.supports && R.supports.size > 0) {
    f('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [t, o] of R.supports) {
      if (!o.some((i) => i)) continue;
      const a = (i) => i ? "Yes" : "No";
      f(`   Joint=${t + 1}   U1=${a(o[0])}   U2=${a(o[1])}   U3=${a(o[2])}   R1=${a(o[3])}   R2=${a(o[4])}   R3=${a(o[5])}`);
    }
    b();
  }
  const r = M.selfWtMult ?? 1;
  f('TABLE:  "LOAD PATTERN DEFINITIONS"'), f(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${r}`), b(), f('TABLE:  "LOAD CASE DEFINITIONS"'), f('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), b(), f('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), f('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), b();
  const T = p.frameLoads, A = /* @__PURE__ */ new Map();
  if ((_m = R.loads) == null ? void 0 : _m.forEach((t, o) => A.set(o, [...t])), T && T.size > 0) {
    const t = (o, a) => {
      const i = A.get(o) ?? [0, 0, 0, 0, 0, 0];
      A.set(o, i.map((I, w) => I - a[w]));
    };
    for (const [o, a] of T) {
      const i = g[o];
      if (!i || i.length !== 2) continue;
      const I = l[i[0]], w = l[i[1]], x = [w[0] - I[0], w[1] - I[1], w[2] - I[2]], S = Math.hypot(x[0], x[1], x[2]);
      if (S < 1e-9) continue;
      const m = [x[0] / S, x[1] / S, x[2] / S], N = S * S / 12, B = [m[1] * a[2] - m[2] * a[1], m[2] * a[0] - m[0] * a[2], m[0] * a[1] - m[1] * a[0]];
      t(i[0], [a[0] * S / 2, a[1] * S / 2, a[2] * S / 2, N * B[0], N * B[1], N * B[2]]), t(i[1], [a[0] * S / 2, a[1] * S / 2, a[2] * S / 2, -N * B[0], -N * B[1], -N * B[2]]);
    }
  }
  if (A.size > 0) {
    f('TABLE:  "JOINT LOADS - FORCE"');
    for (const [t, o] of A) o.some((a) => Math.abs(a) > 1e-12) && f(`   Joint=${t + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${D(o[0])}   F2=${D(o[1])}   F3=${D(o[2])}   M1=${D(o[3])}   M2=${D(o[4])}   M3=${D(o[5])}`);
    b();
  }
  const v = p.frameLoads;
  if (v && v.size > 0) {
    f('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [t, o] of v) {
      const a = g[t];
      if (!a || a.length !== 2) continue;
      const i = l[a[0]], I = l[a[1]], w = Math.hypot(I[0] - i[0], I[1] - i[1], I[2] - i[2]);
      ["X", "Y", "Z"].forEach((x, S) => {
        Math.abs(o[S]) < 1e-12 || f(`   Frame=${t + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${x}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${D(w)}   FOverLA=${D(o[S])}   FOverLB=${D(o[S])}`);
      });
    }
    b();
  }
  const L = /* @__PURE__ */ new Map();
  for (let t = 0; t < g.length; t++) {
    const { E: o, nu: a, G: i, rho: I, key: w } = _(t);
    L.has(w) || L.set(w, { E: o, nu: a, G: i, rho: I });
  }
  if (ee.length > 0) {
    const t = p.solidIncompatible === false ? "No" : "Yes", o = /* @__PURE__ */ new Map();
    for (const a of ee) {
      const { E: i, nu: I, G: w, rho: x, key: S } = _(a);
      L.has(S) || L.set(S, { E: i, nu: I, G: w, rho: x }), o.has(S) || o.set(S, `SOL${o.size + 1}`);
    }
    f('TABLE:  "SOLID PROPERTY DEFINITIONS"');
    for (const [a, i] of o) f(`   SolidProp=${i}   Material=${a}   MatAngleA=0   MatAngleB=0   MatAngleC=0   InComp=${t}   Color=Yellow`);
    b(), f('TABLE:  "SOLID PROPERTY ASSIGNMENTS"');
    for (const a of ee) f(`   Solid=${a + 1}   SolidProp=${o.get(_(a).key)}`);
    b();
  }
  for (const [t, o] of ae) L.has(t) || L.set(t, o);
  f('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [t] of L) f(`   Material=${t}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  b(), f('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [t, o] of L) f(`   Material=${t}   UnitWeight=${D(o.rho * 9.81)}   UnitMass=${D(o.rho)}   E1=${D(o.E)}   G12=${D(o.G)}   U12=${D(o.nu)}   A1=9.9E-06`);
  b(), f('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [t] of L) f(`   Material=${t}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return b(), f('TABLE:  "PROGRAM CONTROL"'), f(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${Y.force}, ${Y.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), b(), f("END TABLE DATA"), f(""), Q.join(`\r
`);
}
function D(M) {
  return M === 0 || Math.abs(M) < 1e-15 ? "0" : Math.abs(M) >= 1e6 || Math.abs(M) < 1e-3 && Math.abs(M) > 0 ? M.toExponential(8) : parseFloat(M.toPrecision(10)).toString();
}
function Ht(M, l, g = 0.05) {
  const R = l.map(([p, Y]) => `${(+p).toFixed(4)} ${(+Y).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${M}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${g}  SPECTYPE "USER"  `, `  FUNCTION "${M}"  TIMEVAL "${R}"  `];
}
function vt(M) {
  const { name: l, func: g, modalCase: R = "Modal", sfX: p = 9.81, sfY: Y = 9.81 } = M, U = [`  LOADCASE "${l}"  TYPE  "Response Spectrum"  MODALCASE  "${R}"  `];
  return p && U.push(`  LOADCASE "${l}"  ACCEL  "U1"  FUNC  "${g}"  SF  ${p}  `), Y && U.push(`  LOADCASE "${l}"  ACCEL  "U2"  FUNC  "${g}"  SF  ${Y}  `), U;
}
function mt(M) {
  const { name: l = "Modal", ritz: g = false, nModes: R = 12 } = M;
  return g ? [`  LOADCASE "${l}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${l}"  MAXMODES  ${R} MINMODES  1 `, `  LOADCASE "${l}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${l}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${l}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${l}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${l}"  MAXMODES  ${R} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function Vt(M) {
  var _a;
  const l = (_a = M.e2kModel) == null ? void 0 : _a.rawSections;
  let g = l && l.size > 0 ? zt(l, M.e2kModel) : jt(M);
  return M.seismicNEC && (g = Wt(g, M.seismicNEC)), g;
}
function Wt(M, l) {
  const g = M.includes(`\r
`) ? `\r
` : `
`, R = M.split(/\r?\n/), p = l.name ?? "NEC", Y = Ht(p, l.points, l.dampRatio ?? 0.05), U = l.modalCase ?? "Modal", Q = vt({ name: l.caseName ?? "Sismo NEC", func: p, modalCase: U, sfX: l.sfX, sfY: l.sfY });
  let f = [];
  const b = (J) => R.some((_) => J.test(_));
  if (l.modal) {
    const J = new RegExp(`^\\s*LOADCASE\\s+"${U}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let _ = R.length - 1; _ >= 0; _--) J.test(R[_]) && R.splice(_, 1);
    f = mt({ name: U, ritz: !!l.modal.ritz, nModes: l.modal.nModes });
  } else b(new RegExp(`LOADCASE\\s+"${U}"\\s+TYPE\\s+"Modal`)) || (f = mt({ name: U }));
  return dt(R, "FUNCTIONS", Y), dt(R, "LOAD CASES", [...f, ...Q]), R.join(g);
}
function dt(M, l, g) {
  const R = M.findIndex((U) => U.trim() === `$ ${l}`);
  if (R >= 0) {
    M.splice(R + 1, 0, ...g);
    return;
  }
  const p = M.findIndex((U) => U.trim() === "END"), Y = p >= 0 ? p : M.length;
  M.splice(Y, 0, `$ ${l}`, ...g, "");
}
function zt(M, l) {
  const g = [], R = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  g.push("$ File exported from Hekatan Struct Lineal (round-trip)"), g.push("");
  for (const p of R) {
    const Y = M.get(p);
    if (!(!Y || Y.length === 0)) {
      g.push(`$ ${p}`);
      for (const U of Y) g.push(U);
      g.push("");
    }
  }
  for (const [p, Y] of M) if (!R.includes(p) && Y.length !== 0) {
    g.push(`$ ${p}`);
    for (const U of Y) g.push(U);
    g.push("");
  }
  return g.push("  END"), g.push("$ END OF MODEL FILE"), g.join(`\r
`);
}
function jt(M) {
  var _a, _b, _c, _d, _e2, _f, _g;
  const { nodes: l, elements: g, nodeInputs: R, elementInputs: p, title: Y, units: U } = M, Q = M.shellLoads ?? p.shellSurfaceLoads;
  let f;
  Q instanceof Map && (f = /* @__PURE__ */ new Map(), Q.forEach((e, s) => {
    f.set(s, typeof e == "number" ? { value: e } : e);
  }));
  const b = M.shellAngles ?? p.shellAngles, J = p.cargaDeArea, _ = !!(f && f.size > 0), j = p.selfWeight, ee = p.frameLoads, te = (M.weightMode ?? "auto") === "auto" && j !== void 0, ae = /* @__PURE__ */ new Map(), ie = (e, s) => {
    const n = ae.get(e) ?? [0, 0, 0, 0, 0, 0];
    ae.set(e, n.map((c, E) => c + s[E]));
  }, oe = /* @__PURE__ */ new Set();
  if (te) {
    if (ee) for (const [e, s] of ee) {
      const n = g[e];
      if (!n || n.length !== 2) continue;
      const c = l[n[0]], E = l[n[1]], h = [E[0] - c[0], E[1] - c[1], E[2] - c[2]], $ = Math.hypot(h[0], h[1], h[2]);
      if ($ < 1e-9) continue;
      const u = [h[0] / $, h[1] / $, h[2] / $], O = $ * $ / 12, k = [u[1] * s[2] - u[2] * s[1], u[2] * s[0] - u[0] * s[2], u[0] * s[1] - u[1] * s[0]];
      ie(n[0], [s[0] * $ / 2, s[1] * $ / 2, s[2] * $ / 2, O * k[0], O * k[1], O * k[2]]), ie(n[1], [s[0] * $ / 2, s[1] * $ / 2, s[2] * $ / 2, -O * k[0], -O * k[1], -O * k[2]]), oe.add(e);
    }
    if (j && j > 0) {
      const s = p.endOffsets;
      g.forEach((n, c) => {
        var _a2, _b2, _c2;
        const E = ((_a2 = p.densities) == null ? void 0 : _a2.get(c)) ?? 0;
        if (E) {
          if (n.length === 2) {
            const h = ((_b2 = p.areas) == null ? void 0 : _b2.get(c)) ?? 0, $ = l[n[0]], u = l[n[1]], O = [u[0] - $[0], u[1] - $[1], u[2] - $[2]];
            let k = Math.hypot(O[0], O[1], O[2]);
            const d = s == null ? void 0 : s.get(c);
            if (d) {
              const C = Math.hypot(O[0], O[1]);
              C > 1e-9 && Math.abs(Math.atan2(Math.abs(O[2]), C)) * 180 / Math.PI < 20 && (k = Math.max(k - d[0] - d[1], 0));
            }
            const F = h * k * E * 9.80665 * j;
            ie(n[0], [0, 0, -F / 2, 0, 0, 0]), ie(n[1], [0, 0, -F / 2, 0, 0, 0]);
          } else if (n.length === 4) {
            const h = ((_c2 = p.thicknesses) == null ? void 0 : _c2.get(c)) ?? 0, $ = n.map((C) => l[C]);
            let u = 0, O = 0, k = 0;
            for (let C = 0; C < 4; C++) {
              const W = $[C], X = $[(C + 1) % 4];
              u += W[1] * X[2] - W[2] * X[1], O += W[2] * X[0] - W[0] * X[2], k += W[0] * X[1] - W[1] * X[0];
            }
            const d = Math.hypot(u, O, k) / 2, F = h * d * E * 9.80665 * j;
            for (const C of n) ie(C, [0, 0, -F / 4, 0, 0, 0]);
          }
        }
      });
    }
  }
  const se = (e, s) => {
    const n = ae.get(e);
    return [s[0] - ((n == null ? void 0 : n[0]) ?? 0), s[1] - ((n == null ? void 0 : n[1]) ?? 0), s[2] - (_ ? (J == null ? void 0 : J.get(e)) ?? 0 : 0) - ((n == null ? void 0 : n[2]) ?? 0)];
  }, ce = (e, s) => {
    const n = ae.get(e);
    return [(s[3] ?? 0) - ((n == null ? void 0 : n[3]) ?? 0), (s[4] ?? 0) - ((n == null ? void 0 : n[4]) ?? 0), (s[5] ?? 0) - ((n == null ? void 0 : n[5]) ?? 0)];
  }, Ee = "N", he = "MM", r = [], T = (e) => Math.round(e * 1e4) / 1e4, A = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), v = 1e3, L = 1e3, t = (e) => e * L, o = (e) => e * v, a = (e) => e * v, i = (e) => e * v * L, I = (e) => e * v / L ** 2, w = (e) => e * v / L ** 3, x = /* @__PURE__ */ new Date(), S = `${x.getMonth() + 1}/${x.getDate()}/${x.getFullYear()}  ${x.getHours()}:${String(x.getMinutes()).padStart(2, "0")}:${String(x.getSeconds()).padStart(2, "0")}`;
  r.push(`$ File   "Hekatan_export.e2k"  saved ${S} in ETABS 22.6.0`), r.push(""), r.push("$ PROGRAM INFORMATION"), r.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), r.push(""), r.push("$ CONTROLS"), r.push(`  UNITS  "${Ee}"  "${he}"  "C"  `), r.push('  TITLE1  "Hekatan Struct Lineal export"  '), Y && r.push(`  TITLE2  "${Y}"  `), r.push("  PREFERENCE  MERGETOL 0.001"), r.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), r.push("");
  const m = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
  l.forEach((e) => {
    m.add(T(e[0])), N.add(T(e[1]));
  });
  const B = [...m].sort((e, s) => e - s), y = [...N].sort((e, s) => e - s);
  r.push("$ GRIDS"), r.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), B.forEach((e, s) => {
    const n = s < 26 ? String.fromCharCode(65 + s) : String.fromCharCode(65 + s % 26).repeat(Math.floor(s / 26) + 1);
    r.push(`  GRID "G1"  LABEL "${n}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), y.forEach((e, s) => {
    r.push(`  GRID "G1"  LABEL "${s + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), r.push("");
  const Z = 3, H = 0.5, V = /* @__PURE__ */ new Map();
  l.forEach((e) => {
    const s = T(e[2]);
    V.set(s, (V.get(s) ?? 0) + 1);
  });
  const q = /* @__PURE__ */ new Set();
  l.forEach((e) => q.add(T(e[2])));
  const K = [...q].sort((e, s) => e - s);
  let G = K.filter((e) => (V.get(e) ?? 0) >= Z);
  if (G.length > 1) {
    const e = [G[0]];
    for (const s of G.slice(1)) s - e[e.length - 1] < H ? e[e.length - 1] = s : e.push(s);
    G = e;
  }
  G.length || (G = [K[0], K[K.length - 1]]), G[0] !== K[0] && G.unshift(K[0]), G[G.length - 1] !== K[K.length - 1] && G.push(K[K.length - 1]);
  const z = [], ne = /* @__PURE__ */ new Map();
  z.push("Base"), ne.set(G[0], "Base");
  for (let e = 1; e < G.length; e++) {
    const s = `Level_${e}`;
    z.push(s), ne.set(G[e], s);
  }
  const fe = (e) => {
    const s = T(e);
    if (ne.has(s)) return { story: ne.get(s), dz: 0 };
    for (let c = 0; c < G.length; c++) if (G[c] >= s) return { story: ne.get(G[c]), dz: T(G[c] - s) };
    const n = G[G.length - 1];
    return { story: ne.get(n), dz: T(n - s) };
  };
  r.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = G.length - 1; e >= 1; e--) r.push(`  STORY "${z[e]}"  HEIGHT ${T(t(G[e] - G[e - 1]))} MASTERSTORY "Yes"  `);
  G.length > 0 && r.push(`  STORY "Base"  ELEV ${G[0]} `), r.push(""), g.some((e) => e.length === 4), r.push("$ DIAPHRAGM NAMES"), r.push('  DIAPHRAGM "D1"    TYPE RIGID'), r.push(""), r.push("$ MATERIAL PROPERTIES");
  const Me = 980665e-8, Ve = (e) => {
    var _a2;
    const s = (_a2 = p.densities) == null ? void 0 : _a2.get(e);
    if (s !== void 0) return s > 100 ? s * Me : s * 9.80665;
  }, de = (e) => {
    var _a2;
    const s = ((_a2 = p.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, n = Ve(e);
    return `${s}|${n === void 0 ? "-" : n.toFixed(4)}`;
  }, Xe = /* @__PURE__ */ new Set();
  (_a = p.elasticities) == null ? void 0 : _a.forEach((e, s) => Xe.add(de(s)));
  const Ne = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map();
  let Lt = 0, Rt = 0;
  for (const e of Xe) {
    const s = parseFloat(e.split("|")[0]), n = e.split("|")[1], c = s >= 1e8, E = c ? `Steel_${++Lt}` : `Conc_${++Rt}`;
    Ne.set(e, E), Fe.set(e, c);
    const h = n !== "-" ? parseFloat(n) : c ? 76.97 : 24, $ = I(s), u = w(h), O = (() => {
      const F = M.elementInputs.poissonsRatios;
      if (F) {
        for (const [C, W] of F) if (de(C) === e) return W;
      }
    })(), k = O !== void 0 ? O : c ? 0.3 : 0.2, d = c ? 117e-7 : 1e-5;
    if (c) {
      r.push(`  MATERIAL  "${E}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${A(u)}`), r.push(`  MATERIAL  "${E}"    SYMTYPE "Isotropic"  E ${T($)}  U ${k}  A ${d}`);
      const F = 345e3, C = 45e4;
      r.push(`  MATERIAL  "${E}"  FY ${T(I(F))}  FU ${T(I(C))}  FYE ${T(I(F * 1.1))}  FUE ${T(I(C * 1.1))}`);
    } else r.push(`  MATERIAL  "${E}"    TYPE "Concrete"    WEIGHTPERVOLUME ${A(u)}`), r.push(`  MATERIAL  "${E}"    SYMTYPE "Isotropic"  E ${T($)}  U ${k}  A ${d}`), r.push(`  MATERIAL  "${E}"    FC ${T(I(24e3))}`);
  }
  const qe = /* @__PURE__ */ new Map();
  {
    const e = /* @__PURE__ */ new Map();
    (_b = p.sectionShapes) == null ? void 0 : _b.forEach((n, c) => {
      var _a2;
      if ((n == null ? void 0 : n.type) !== "CFT" || !(n.fillE > 0)) return;
      const E = ((_a2 = p.elasticities) == null ? void 0 : _a2.get(c)) ?? 0;
      if (!(E > 0)) return;
      const h = n.fillE / E, $ = Ve(c) ?? 76.97, u = `${n.fillE}|${(h * $).toFixed(4)}`;
      let O = e.get(u);
      O || (O = `ConcFill_${e.size + 1}`, e.set(u, O), r.push(`  MATERIAL  "${O}"    TYPE "Concrete"    WEIGHTPERVOLUME ${A(w(h * $))}`), r.push(`  MATERIAL  "${O}"    SYMTYPE "Isotropic"  E ${T(I(n.fillE))}  U 0.2  A 1.0e-5`), r.push(`  MATERIAL  "${O}"    FC ${T(I(24e3))}`)), qe.set(c, O);
    });
  }
  r.push(""), r.push("$ FRAME SECTIONS");
  const ye = /* @__PURE__ */ new Set(), xe = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), $e = 0.05;
  g.forEach((e, s) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j;
    if (e.length !== 2) return;
    const n = (_a2 = p.sectionShapes) == null ? void 0 : _a2.get(s), c = ((_b2 = p.elasticities) == null ? void 0 : _b2.get(s)) ?? 0, E = Ne.get(de(s)) || "Conc_1", h = Fe.get(de(s)) ?? c >= 1e8, $ = ((_c2 = p.areas) == null ? void 0 : _c2.get(s)) ?? 0, u = ((_d2 = p.momentsOfInertiaZ) == null ? void 0 : _d2.get(s)) ?? 0, O = ((_e3 = p.momentsOfInertiaY) == null ? void 0 : _e3.get(s)) ?? 0, k = ((_f2 = p.torsionalConstants) == null ? void 0 : _f2.get(s)) ?? 0;
    let d = (n == null ? void 0 : n.type) || "rect", F = (n == null ? void 0 : n.h) ?? 0, C = (n == null ? void 0 : n.b) ?? 0, W = (n == null ? void 0 : n.d) ?? 0;
    const X = (n == null ? void 0 : n.tf) ?? 0, pe = (n == null ? void 0 : n.tw) ?? 0;
    if (!n && F <= 0 && C <= 0 && W <= 0 && $ > 0 && u > 0 && O > 0) {
      const Ae = (_g2 = p.cantos) == null ? void 0 : _g2.get(s), Pe = (_h = p.anchos) == null ? void 0 : _h.get(s);
      F = Ae && Ae > 0 ? Ae : Math.sqrt(12 * u / $), C = Pe && Pe > 0 ? Pe : $ / F, (!isFinite(F) || F < $e) && (F = $e), (!isFinite(C) || C < $e) && (C = $e), d = "general";
    } else F <= 0 && C <= 0 && W <= 0 && $ > 0 && (u > 0 ? (F = Math.sqrt(12 * u / $), C = $ / F) : F = C = Math.sqrt($), (!isFinite(F) || F < $e) && (F = $e), (!isFinite(C) || C < $e) && (C = $e), d = "rect");
    F <= 0 && C <= 0 && W <= 0 && (F = 0.3, C = 0.3, d = "rect");
    const Ue = (n == null ? void 0 : n.name) ? `NAME_${n.name}` : `${d}_${T(F)}_${T(C)}_${T(W)}_${T(X)}_${T(pe)}_${E}`;
    (n == null ? void 0 : n.name) && !be.has(Ue) && be.set(Ue, n.name);
    let le = be.get(Ue);
    if (!le) {
      const Ae = h ? "S" : "C";
      d === "general" ? le = `${Ae}_G${ye.size + 1}` : d === "rect" ? le = `${Ae}_R${Math.round(C * 100)}x${Math.round(F * 100)}` : d === "circ" ? le = `${Ae}_C_D${Math.round(W * 100)}` : d === "I" ? le = `${Ae}_I${Math.round(F * 100)}x${Math.round(C * 100)}` : d === "HSS" ? le = `${Ae}_HSS${Math.round(C * 100)}x${Math.round(F * 100)}x${Math.round(pe * 1e3)}` : le = `${Ae}_Sec${ye.size + 1}`, be.set(Ue, le);
    }
    if (xe.set(s, le), ye.has(le)) return;
    ye.add(le);
    const It = qe.get(s);
    if (d === "CFT" && It && F > 0 && C > 0 && pe > 0) {
      r.push(`  FRAMESECTION  "${le}"  MATERIAL "${E}"  SHAPE "Filled Steel Tube"  D ${T(t(F))} B ${T(t(C))} TF ${T(t(pe))} TW ${T(t(pe))} FILLMATERIAL "${It}"`);
      return;
    }
    const kt = $ > 0 && u > 0 && O > 0;
    let Se;
    d === "general" || kt ? Se = "General" : d === "I" ? Se = "Steel I/Wide Flange" : d === "HSS" ? Se = "Steel Tube" : d === "CFT" ? Se = "Filled Steel Tube" : d === "pipe" ? Se = "Steel Pipe" : d === "L" ? Se = "Steel Angle" : d === "C" ? Se = "Steel Channel" : d === "2C" ? Se = "Steel Double Channel" : d === "circ" ? Se = "Concrete Circle" : Se = "Concrete Rectangular";
    let Ie = `  FRAMESECTION  "${le}"  MATERIAL "${E}"  SHAPE "${Se}"`;
    if (Se === "General") {
      const Ae = ((_i = p.shearAreasZ) == null ? void 0 : _i.get(s)) || $ * 5 / 6, Pe = ((_j = p.shearAreasY) == null ? void 0 : _j.get(s)) || $ * 5 / 6;
      Ie += `  D ${T(t(F))} B ${T(t(C))} AREA ${A($ * 1e6)} AS2 ${A(Ae * 1e6)} AS3 ${A(Pe * 1e6)} I33 ${A(u * 1e12)} I22 ${A(O * 1e12)} TORSION ${A((k || u + O) * 1e12)} S33POS ${A(2 * u / F * 1e9)} S33NEG ${A(2 * u / F * 1e9)} S22POS ${A(2 * O / C * 1e9)} S22NEG ${A(2 * O / C * 1e9)} Z33 ${A(2 * u / F * 1e9)} Z22 ${A(2 * O / C * 1e9)} R33 ${A(Math.sqrt(u / $) * 1e3)} R22 ${A(Math.sqrt(O / $) * 1e3)} `, r.push(Ie);
      return;
    }
    F && (Ie += `  D ${T(t(F))}`), C && (Ie += `  B ${T(t(C))}`), W && !F && (Ie += `  D ${T(t(W))}`), X && (Ie += `  TF ${T(t(X))}`), pe && (Ie += `  TW ${T(t(pe))}`), r.push(Ie);
  }), r.push("");
  const we = /* @__PURE__ */ new Map();
  let Dt = 0;
  l.forEach((e) => {
    const { dz: s } = fe(e[2]), n = `${T(e[0])},${T(e[1])},${s}`;
    we.has(n) || we.set(n, `${++Dt}`);
  }), r.push("$ POINT COORDINATES");
  for (const [e, s] of we) {
    const [n, c, E] = e.split(",").map(Number);
    r.push(E ? `  POINT "${s}"  ${T(t(n))} ${T(t(c))} ${T(t(E))} ` : `  POINT "${s}"  ${T(t(n))} ${T(t(c))} `);
  }
  r.push("");
  const ue = (e) => {
    const s = l[e], { story: n, dz: c } = fe(s[2]), E = `${T(s[0])},${T(s[1])},${c}`;
    return { pt: we.get(E) || "1", story: n };
  }, Qe = (e) => {
    var _a2, _b2, _c2, _d2, _e3, _f2;
    const s = [], n = (_a2 = M.propertyModifiers) == null ? void 0 : _a2.get(e);
    n && n.some((d) => Math.abs(d - 1) > 1e-9) && s.push(`PROPMODIFIERS "${n.map((d) => T(d)).join(" ")}"`);
    const c = (_b2 = p.localAngles) == null ? void 0 : _b2.get(e);
    c !== void 0 && isFinite(c) && Math.abs(c) > 1e-9 && s.push(`ANG ${T(c)}`);
    const E = (_c2 = p.momentReleases) == null ? void 0 : _c2.get(e);
    if (E && E.some((d) => d)) {
      const d = [];
      E.length === 12 ? (E[0] && d.push("PI"), E[1] && d.push("V2I"), E[2] && d.push("V3I"), E[3] && d.push("TI"), E[4] && d.push("M2I"), E[5] && d.push("M3I"), E[6] && d.push("PJ"), E[7] && d.push("V2J"), E[8] && d.push("V3J"), E[9] && d.push("TJ"), E[10] && d.push("M2J"), E[11] && d.push("M3J")) : E.length === 6 && (E[0] && d.push("TI"), E[1] && d.push("M2I"), E[2] && d.push("M3I"), E[3] && d.push("TJ"), E[4] && d.push("M2J"), E[5] && d.push("M3J")), d.length > 0 && s.push(`RELEASE "${d.join(" ")}"`);
    }
    const h = (_d2 = p.insertionPoints) == null ? void 0 : _d2.get(e);
    h && (Math.abs(h[0]) > 1e-9 || Math.abs(h[1]) > 1e-9) && s.push(`LATEROFFSET ${T(t(h[0]))} TRANSOFFSET ${T(t(h[1]))}`);
    const $ = (_e3 = p.rigidOffsets) == null ? void 0 : _e3.get(e), u = (_f2 = p.endOffsets) == null ? void 0 : _f2.get(e), O = u ? [u[0], u[1]] : $, k = u && u.length > 2 ? u[2] : 0;
    return O && (Math.abs(O[0]) > 1e-9 || Math.abs(O[1]) > 1e-9) && s.push(`LENGTHOFFI ${T(t(O[0]))} LENGTHOFFJ ${T(t(O[1]))} RIGIDZONE ${T(k)}`), s.length > 0 ? ` ${s.join(" ")} ` : "";
  }, He = [], et = /* @__PURE__ */ new Set(), Ye = /* @__PURE__ */ new Map();
  g.forEach((e, s) => {
    if (e.length !== 2) return;
    const n = gt(l, e);
    if (n === "BEAM") return;
    const c = l[e[0]][2] <= l[e[1]][2] ? e[0] : e[1], E = l[e[0]][2] <= l[e[1]][2] ? e[1] : e[0];
    if (Math.abs(l[c][0] - l[E][0]) > 1e-6 || Math.abs(l[c][1] - l[E][1]) > 1e-6) return;
    const h = ue(c), $ = xe.get(s) || `Sec_${s}`, u = `${h.pt}_${$}_${n}`;
    Ye.has(u) || Ye.set(u, []), Ye.get(u).push({ i: s, bot: c, top: E, zBot: T(l[c][2]), zTop: T(l[E][2]), planPt: h.pt, secName: $, type: n });
  }), Ye.forEach((e, s) => {
    e.sort((c, E) => c.zBot - E.zBot);
    let n = 0;
    for (let c = 1; c <= e.length; c++) if (c === e.length || Math.abs(e[c].zBot - e[c - 1].zTop) > 1e-6) {
      const h = e.slice(n, c);
      h.length >= 1 && (He.push({ elemIndices: h.map(($) => $.i), planPt: h[0].planPt, bottomNodeIdx: h[0].bot, topNodeIdx: h[h.length - 1].top, secName: h[0].secName, type: h[0].type, nSegments: h.length }), h.forEach(($) => et.add($.i))), n = c;
    }
  }), r.push("$ LINE CONNECTIVITIES");
  const tt = [], st = (e) => z.indexOf(e), ot = /* @__PURE__ */ new Map(), nt = (e, s, n, c, E, h, $, u) => {
    const O = ue(c), k = ue(n);
    u !== void 0 && ot.set(u, { name: e, story: O.story });
    const d = st(O.story) - st(k.story);
    d <= 0 ? r.push(`  LINE  "${e}"  BEAM  "${k.pt}"  "${O.pt}"  0`) : r.push(`  LINE  "${e}"  ${s}  "${k.pt}"  "${O.pt}"  ${d}`), tt.push(`  LINEASSIGN  "${e}"  "${O.story}"  SECTION "${E}" ${h} MINNUMSTA ${$} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  He.forEach((e, s) => {
    const n = Qe(e.elemIndices[0]);
    nt(`C${s + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, n, e.nSegments);
  }), g.forEach((e, s) => {
    if (e.length !== 2 || et.has(s)) return;
    const n = gt(l, e), c = xe.get(s) || `Sec_${s}`, E = Qe(s), h = l[e[0]][2] <= l[e[1]][2] ? e[0] : e[1], $ = l[e[0]][2] <= l[e[1]][2] ? e[1] : e[0];
    nt(`E${s + 1}`, n === "BEAM" ? "BRACE" : n, h, $, c, E, 3, s);
  }), r.push("");
  const Oe = M.weightMode ?? "auto", Le = /* @__PURE__ */ new Set();
  r.push("$ POINT ASSIGNS"), (_c = R.supports) == null ? void 0 : _c.forEach((e, s) => {
    const n = [];
    if (e[0] && n.push("UX"), e[1] && n.push("UY"), e[2] && n.push("UZ"), e[3] && n.push("RX"), e[4] && n.push("RY"), e[5] && n.push("RZ"), n.length > 0) {
      const c = ue(s), E = c.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      r.push(`  POINTASSIGN  "${c.pt}"  "${c.story}"  RESTRAINT "${n.join(" ")}" ${E} `), Le.add(`${c.pt}@${c.story}`);
    }
  });
  const at = (M.diaphragm ?? "auto") !== "none";
  at && He.forEach((e) => {
    const s = ue(e.topNodeIdx), n = `${s.pt}@${s.story}`;
    !Le.has(n) && s.story !== "Base" && (r.push(`  POINTASSIGN  "${s.pt}"  "${s.story}"  DIAPH "D1"  `), Le.add(n));
  }), Oe === "manual" && R.loads && R.loads.forEach((e, s) => {
    const [n, c, E] = se(s, e);
    if (Math.abs(n) < 1e-10 && Math.abs(c) < 1e-10 && Math.abs(E) < 1e-10) return;
    const h = ue(s), $ = `${h.pt}@${h.story}`;
    Le.has($) || (r.push(`  POINTASSIGN  "${h.pt}"  "${h.story}"  DIAPH "DISCONNECTED"  `), Le.add($));
  }), r.push(""), r.push("$ LINE ASSIGNS"), tt.forEach((e) => r.push(e)), r.push("");
  const re = [], it = p.areaObjects, ct = /* @__PURE__ */ new Set(), rt = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
  it == null ? void 0 : it.forEach((e) => e.cells.forEach((s) => ct.add(s))), g.forEach((e, s) => {
    if (e.length === 4 || e.length === 3) {
      const n = l[e[0]], c = l[e[1]], E = l[e[2]], h = [c[0] - n[0], c[1] - n[1], c[2] - n[2]], $ = [E[0] - n[0], E[1] - n[1], E[2] - n[2]], u = h[1] * $[2] - h[2] * $[1], O = h[2] * $[0] - h[0] * $[2], k = h[0] * $[1] - h[1] * $[0], d = Math.sqrt(u * u + O * O + k * k), F = d > 1e-10 && Math.abs(k) / d < 0.5;
      re.push({ idx: s, el: e, isWall: F }), ct.has(s) && re.pop();
    }
  });
  const Te = (() => {
    for (const [e, s] of Fe) if (!s) return Ne.get(e);
    return Ne.values().next().value || "Conc_1";
  })();
  it == null ? void 0 : it.forEach((e, s) => {
    re.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && rt.set(e.cells[0], e.q), e.ang !== void 0 && Et.set(e.cells[0], e.ang);
  });
  const Re = "DECK";
  let ve = false;
  const We = [], lt = (e) => {
    const s = M.elementInputs.plateFormulations, n = re.find((E) => E.isWall === e), c = s && n ? s.get(n.idx) : void 0;
    return c === 2 ? "Membrane" : c === 1 ? "ShellThin" : "ShellThick";
  }, ft = (e, s) => {
    const n = M.elementInputs.thicknesses, c = re.find((E) => E.isWall === e);
    return (c ? n == null ? void 0 : n.get(c.idx) : void 0) ?? (n == null ? void 0 : n.values().next().value) ?? s;
  }, St = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], Be = (e) => {
    var _a2;
    const n = (_a2 = p.shellModifiers) == null ? void 0 : _a2.get(e);
    if (n && n.length >= 8) return n.slice(0, 8);
    const c = p.membraneModifiers, E = p.bendingModifiers, h = c == null ? void 0 : c.get(e), $ = E == null ? void 0 : E.get(e);
    if (h === void 0 && $ === void 0) return null;
    const u = h ?? 1, O = $ ?? 1;
    return [u, u, u, O, O, O, O, O];
  }, At = (e, s) => {
    const n = re.filter(($) => $.isWall === s), c = /* @__PURE__ */ new Map();
    for (const $ of n) {
      const u = Be($.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      c.set(u.map((O) => T(O)).join(","), u);
    }
    if (c.size === 0) return "";
    c.size > 1 && console.warn(`[e2k] "${e}": ${c.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const E = c.values().next().value, h = St.map(($, u) => Math.abs(E[u] - 1) > 1e-9 ? `${$} ${T(E[u])}` : "").filter(Boolean);
    return h.length ? `  SHELLPROP  "${e}"  ${h.join(" ")} ` : "";
  }, ht = M.elementInputs.thicknesses, pt = M.elementInputs.plateFormulations, De = (e) => {
    const s = ht == null ? void 0 : ht.get(e.idx), n = pt == null ? void 0 : pt.get(e.idx), c = Be(e.idx);
    return `${e.isWall ? "W" : "F"}|${s ?? "-"}|${n ?? "-"}|${c ? c.map((E) => T(E)).join(",") : "-"}|${de(e.idx)}`;
  }, ze = (e) => {
    const s = Be(e);
    return s ? Math.abs(s[3]) < 1e-9 && Math.abs(s[4]) < 1e-9 : false;
  }, Ce = /* @__PURE__ */ new Map();
  let Ct = 0, Pt = 0, Ft = 0;
  for (const e of re) {
    const s = De(e);
    if (Ce.has(s)) continue;
    const n = e.isWall, c = !n && ze(e.idx), E = n ? ++Pt : c ? ++Ft : ++Ct, h = de(e.idx);
    Ce.set(s, { nombre: (n ? "Muro" : c ? Re : "Losa") + (E === 1 ? "" : String(E)), isWall: n, mem: c, t: ht == null ? void 0 : ht.get(e.idx), pf: pt == null ? void 0 : pt.get(e.idx), mat: Ne.get(h) ?? Te, acero: Fe.get(h) ?? false });
  }
  const Ge = (e) => {
    var _a2;
    return ((_a2 = Ce.get(De(e))) == null ? void 0 : _a2.nombre) ?? (e.isWall ? "Muro" : "Losa");
  }, Tt = (e) => e === 2 ? "Membrane" : e === 1 ? "ShellThin" : "ShellThick", yt = (e, s) => {
    const n = re.find((h) => De(h) === s), c = n ? Be(n.idx) ?? null : null;
    if (!c) return "";
    const E = St.map((h, $) => Math.abs(c[$] - 1) > 1e-9 ? `${h} ${T(c[$])}` : "").filter(Boolean);
    return E.length ? `  SHELLPROP  "${e}"  ${E.join(" ")} ` : "";
  }, ke = re.find((e) => !e.isWall), Mt = re.find((e) => e.isWall), je = /* @__PURE__ */ new Set();
  ke && je.add(De(ke)), Mt && je.add(De(Mt));
  const $t = [...Ce.entries()].filter(([e]) => !je.has(e));
  if (re.some((e) => !e.isWall)) {
    ve = !!ke && ze(ke.idx);
    const e = ft(false, 0.15);
    if (ve) {
      r.push("$ DECK PROPERTIES");
      const n = (E) => A(t(E)), c = [...Ce.values()].find((E) => E.nombre === Re);
      (c == null ? void 0 : c.acero) ? r.push(`  SHELLPROP  "${Re}"  PROPTYPE  "Slab"  MATERIAL "${c.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${T(t(e))} `) : r.push(`  SHELLPROP  "${Re}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Te}"  DECKMATERIAL "${Te}"  DECKSLABDEPTH ${n(e * 65 / 120)} DECKRIBDEPTH ${n(e * 55 / 120)} DECKRIBWIDTHTOP ${n(e * 150 / 120)} DECKRIBWIDTHBOTTOM ${n(e * 100 / 120)} DECKRIBSPACING ${n(e * 200 / 120)} DECKSHEARTHICKNESS ${n(e * 0.76 / 120)} DECKUNITWEIGHT ${A(o(0.11012))} SHEARSTUDDIAM ${n(e * 19 / 120)} SHEARSTUDHEIGHT ${n(e * 100 / 120)} SHEARSTUDFU 400 `);
    } else r.push("$ SLAB PROPERTIES"), r.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Te}"  MODELINGTYPE "${lt(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${T(t(e))} `);
    const s = At(ve ? Re : "Losa", false);
    s && r.push(s), r.push("");
  }
  if (re.some((e) => e.isWall)) {
    r.push("$ WALL PROPERTIES");
    const e = ft(true, 0.2), s = lt(true);
    r.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Te}"  MODELINGTYPE "${s}"  WALLTHICKNESS ${T(t(e))} `);
    const n = At("Muro", true);
    n && r.push(n), r.push("");
  }
  if ($t.length) {
    r.push("$ OTRAS SECCIONES DE CASCARA");
    for (const [e, s] of $t) {
      const n = s.t ?? (s.isWall ? 0.2 : 0.15), c = (h) => A(t(h));
      r.push(s.isWall ? `  SHELLPROP  "${s.nombre}"  PROPTYPE  "Wall"  MATERIAL "${s.mat ?? Te}"  MODELINGTYPE "${Tt(s.pf)}"  WALLTHICKNESS ${T(t(n))} ` : s.mem && s.acero ? `  SHELLPROP  "${s.nombre}"  PROPTYPE  "Slab"  MATERIAL "${s.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${T(t(n))} ` : s.mem ? `  SHELLPROP  "${s.nombre}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Te}"  DECKMATERIAL "${Te}"  DECKSLABDEPTH ${c(n * 65 / 120)} DECKRIBDEPTH ${c(n * 55 / 120)} DECKRIBWIDTHTOP ${c(n * 150 / 120)} DECKRIBWIDTHBOTTOM ${c(n * 100 / 120)} DECKRIBSPACING ${c(n * 200 / 120)} DECKSHEARTHICKNESS ${c(n * 0.76 / 120)} DECKUNITWEIGHT ${A(o(0.11012))} SHEARSTUDDIAM ${c(n * 19 / 120)} SHEARSTUDHEIGHT ${c(n * 100 / 120)} SHEARSTUDFU 400 ` : `  SHELLPROP  "${s.nombre}"  PROPTYPE  "Slab"  MATERIAL "${Te}"  MODELINGTYPE "${Tt(s.pf)}"  SLABTYPE "Slab"  SLABTHICKNESS ${T(t(n))} `);
      const E = yt(s.nombre, e);
      E && r.push(E);
    }
    r.push("");
  }
  if (re.length > 0) {
    r.push("$ AREA CONNECTIVITIES");
    const e = [];
    re.forEach((s, n) => {
      const { el: c, isWall: E } = s, h = E ? `W${n + 1}` : `F${n + 1}`, $ = E ? "PANEL" : "FLOOR", u = c.map((O) => ue(O));
      if (E) {
        const O = (W) => z.indexOf(W);
        if (new Set(u.map((W) => W.pt)).size === 4) {
          const W = Math.max(...u.map((pe) => O(pe.story))), X = u.map((pe) => W - O(pe.story));
          r.push(`  AREA "${h}"  ${$}  4  "${u[0].pt}"  "${u[1].pt}"  "${u[2].pt}"  "${u[3].pt}"  ${X.join("  ")}  `), e.push(`  AREAASSIGN  "${h}"  "${z[W]}"  SECTION "${Ge(s)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const d = l[c[0]][2] <= l[c[2]][2] ? 0 : 2, F = l[c[1]][2] <= l[c[3]][2] ? 1 : 3;
        r.push(`  AREA "${h}"  ${$}  4  "${u[d].pt}"  "${u[F].pt}"  "${u[F].pt}"  "${u[d].pt}"  1  1  0  0  `);
        const C = u[d === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${h}"  "${C}"  SECTION "${Ge(s)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        const O = u.length, k = (X) => z.indexOf(X), d = Math.max(...u.map((X) => k(X.story))), F = u.map((X) => d - k(X.story)), C = z[d] ?? u[0].story;
        r.push(`  AREA "${h}"  ${$}  ${O}  ` + u.map((X) => `"${X.pt}"`).join("  ") + "  " + F.join("  ") + "  ");
        const W = Et.get(s.idx) ?? (b == null ? void 0 : b.get(s.idx));
        e.push(ze(s.idx) ? `  AREAASSIGN  "${h}"  "${C}"  SECTION "${Ge(s)}"  ANG ${T(W ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${h}"  "${C}"  SECTION "${Ge(s)}" ${at ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), We.push({ name: h, story: C, idx: s.idx });
      }
    }), r.push(""), r.push("$ AREA ASSIGNS"), e.forEach((s) => r.push(s)), r.push("");
  }
  const bt = Oe === "manual" ? 0 : j ?? 1;
  r.push("$ LOAD PATTERNS");
  const me = ((_d = M.loadPatterns) == null ? void 0 : _d.length) ? M.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: bt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of me) {
    let s;
    e.type === "Dead" ? s = Oe === "manual" ? 0 : e.selfWeightMultiplier ?? j ?? 1 : (s = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), r.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${s}`);
  }
  r.push("");
  const ge = M.loadPatternDestino && me.some((e) => e.name === M.loadPatternDestino) ? M.loadPatternDestino : ((_e2 = me.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? me[0].name, Je = [], _e = /* @__PURE__ */ new Map(), ut = (e, s) => {
    const n = _e.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let c = 0; c < 6; c++) n[c] += s[c] ?? 0;
    _e.set(e, n);
  }, wt = ge === (((_f = me.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? me[0].name), Yt = Oe === "manual" || !wt || te;
  if (R.loads && R.loads.size > 0 && R.loads.forEach((e, s) => {
    const [n, c, E] = se(s, e), [h, $, u] = ce(s, e);
    ut(s, [n, c, Yt ? E : 0, h, $, u]);
  }), R.moments && R.moments.size > 0 && R.moments.forEach((e, s) => {
    ut(s, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), _e.forEach((e, s) => {
    if (e.every((c) => Math.abs(c) <= 1e-10)) return;
    const n = ue(s);
    Je.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "FORCE"  LC "${ge}"  FX ${A(a(e[0]))}  FY ${A(a(e[1]))}  FZ ${A(a(e[2]))}  MX ${A(i(e[3]))}  MY ${A(i(e[4]))}  MZ ${A(i(e[5]))}`);
  }), Je.length > 0 && (r.push("$ POINT OBJECT LOADS"), Je.forEach((e) => r.push(e)), r.push("")), te && oe.size > 0) {
    const e = [];
    for (const s of oe) {
      const n = ee.get(s), c = ot.get(s);
      if (!c) continue;
      const E = (h) => A(o(h) / L);
      Math.abs(n[2]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "${n[2] < 0 ? "GRAV" : "Z"}"  LC "${ge}"  FVAL ${E(Math.abs(n[2]))}`), Math.abs(n[0]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "X"  LC "${ge}"  FVAL ${E(n[0])}`), Math.abs(n[1]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "Y"  LC "${ge}"  FVAL ${E(n[1])}`);
    }
    e.length && (r.push("$ FRAME OBJECT LOADS"), e.forEach((s) => r.push(s)), r.push(""));
  }
  if (f && f.size > 0 && We.length > 0) {
    const e = [];
    for (const s of We) {
      const n = rt.get(s.idx), c = n !== void 0 ? { value: n } : f.get(s.idx);
      if (!c || Math.abs(c.value) < 1e-12) continue;
      const E = c.dir ?? "GRAV", h = E === "GRAV" ? Math.abs(c.value) : c.value;
      e.push(`  AREALOAD  "${s.name}"  "${s.story}"  TYPE "UNIFF"  DIR "${E}"  LC "${c.pattern ?? ge}"  FVAL ${A(o(h) / (L * L))}`);
    }
    e.length > 0 && (r.push("$ SHELL OBJECT LOADS"), e.forEach((s) => r.push(s)), r.push(""));
  }
  r.push("$ ANALYSIS OPTIONS"), r.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), r.push('  PDELTA  METHOD "NONE"  '), r.push("");
  const Ke = Oe === "manual";
  r.push("$ MASS SOURCE"), r.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${Ke ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${Ke ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), Ke || r.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), r.push(""), r.push("$ LOAD CASES");
  const Bt = ((_g = M.loadCases) == null ? void 0 : _g.length) ? M.loadCases : me.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of Bt) {
    r.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const s of e.patterns ?? []) r.push(`  LOADCASE "${e.name}"  LOADPAT  "${s.pattern}"  SF ${s.scaleFactor} `);
  }
  const Gt = M.modalModes ?? 12;
  r.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), r.push(`  LOADCASE "Modal"  MAXMODES ${Gt}  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `), r.push("");
  const Ze = M.loadCombinations;
  if (Ze && Ze.length) {
    r.push("$ LOAD COMBINATIONS");
    for (const e of Ze) {
      r.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const s of e.cases ?? []) r.push(`  COMBO "${e.name}"  LOADCASE  "${s.case}"  SF ${s.scaleFactor} `);
    }
    r.push("");
  }
  return r.push("  END"), r.push("$ END OF MODEL FILE"), r.join(`\r
`);
}
function gt(M, l) {
  const g = M[l[0]], R = M[l[1]], p = Math.abs(R[2] - g[2]), Y = Math.sqrt((R[0] - g[0]) ** 2 + (R[1] - g[1]) ** 2), U = p > Y * 0.5;
  return U && Y > 0.01 ? "BRACE" : U ? "COLUMN" : "BEAM";
}
export {
  Zt as a,
  Vt as e,
  Kt as p
};
