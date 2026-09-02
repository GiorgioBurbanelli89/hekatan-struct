function y(A) {
  return A && parseFloat(A) || 0;
}
function It(A) {
  const E = /* @__PURE__ */ new Map(), m = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let O;
  for (; (O = m.exec(A)) !== null; ) E.set(O[1], O[2] !== void 0 ? O[2] : O[3]);
  return E;
}
function jt(A) {
  const E = A.split(/\r?\n/);
  return E.some((O) => O.trim().startsWith("TABLE:")) ? Gt(E) : Ut(E);
}
function Gt(A) {
  var _a, _b, _c, _d, _e, _f;
  const E = [];
  let m = "";
  for (const u of A) {
    const S = u.trimEnd();
    S.endsWith("_") ? m += S.slice(0, -1) + " " : (m += S, E.push(m), m = "");
  }
  m && E.push(m);
  const O = { force: "KN", length: "m" };
  let h = "UX,UY,UZ,RX,RY,RZ";
  const w = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), b = [], W = [], v = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), X = [], te = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), ne = [], q = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
  let i = "";
  for (const u of E) {
    const S = u.trim();
    if (!S || S.startsWith(";") || S.startsWith("File ")) continue;
    if (S.startsWith("TABLE:")) {
      const s = S.match(/TABLE:\s+"(.+?)"/);
      i = s ? s[1].toUpperCase() : "";
      continue;
    }
    if (S === "END TABLE DATA") {
      i = "";
      continue;
    }
    const o = It(S);
    switch (i) {
      case "PROGRAM CONTROL": {
        const s = o.get("CurrUnits");
        if (s) {
          const n = s.split(",").map((c) => c.trim());
          n[0] && (O.force = n[0]), n[1] && (O.length = n[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const s = o.get("Material");
        s && !w.has(s) && w.set(s, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const s = o.get("Material");
        if (s) {
          const n = w.get(s) || { E: 0, nu: 0, G: 0 };
          n.E = y(o.get("E1")), n.G = y(o.get("G12")), n.nu = y(o.get("U12")), n.density = y(o.get("UnitMass")), w.set(s, n);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const s = o.get("Material");
        s && w.has(s) && (w.get(s).fy = y(o.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const s = o.get("SectionName");
        s && U.set(s, { material: o.get("Material") || "", shape: o.get("Shape") || "Rectangular", D: y(o.get("t3")), B: y(o.get("t2")), TF: y(o.get("tf")), TW: y(o.get("tw")), A: y(o.get("Area")), Iz: y(o.get("I33")), Iy: y(o.get("I22")), J: y(o.get("TorsConst")), As2: y(o.get("AS2")), As3: y(o.get("AS3")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const s = o.get("Section");
        s && K.set(s, { material: o.get("Material") || "", type: o.get("Type") || "Shell", thickness: y(o.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const s = o.get("Joint");
        if (s) {
          const n = y(o.get("XorR")), c = y(o.get("Y")), g = y(o.get("Z"));
          T.set(s, [n, c, g]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const s = o.get("Frame"), n = o.get("JointI"), c = o.get("JointJ");
        s && n && c && b.push({ name: s, j1: n, j2: c });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const s = o.get("Area");
        if (s) {
          const n = parseInt(o.get("NumJoints") || "4"), c = [];
          for (let g = 1; g <= n; g++) {
            const P = o.get(`Joint${g}`);
            P && c.push(P);
          }
          c.length >= 3 && W.push({ name: s, joints: c });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const s = o.get("Joint");
        if (s) {
          const n = [((_a = o.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = o.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = o.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = o.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = o.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = o.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          v.set(s, n);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const s = o.get("Frame"), n = o.get("AnalSect");
        s && n && H.set(s, n);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const s = o.get("Area"), n = o.get("Section");
        s && n && Z.set(s, n);
        break;
      }
      case "FRAME LOADS - DISTRIBUTED": {
        const s = o.get("Frame"), n = o.get("Dir"), c = y(o.get("FOverLA"));
        if (s && n && c) {
          const g = { X: 0, Y: 1, Z: 2 }[n];
          if (g !== void 0) {
            const P = _.get(s) ?? [0, 0, 0];
            P[g] += c, _.set(s, P);
          }
        }
        break;
      }
      case "CONNECTIVITY - SOLID": {
        const s = o.get("Solid");
        if (s) {
          const n = [];
          for (let c = 1; c <= 8; c++) {
            const g = o.get(`Joint${c}`);
            g && n.push(g);
          }
          n.length === 8 && ne.push({ name: s, joints: n });
        }
        break;
      }
      case "SOLID PROPERTY DEFINITIONS": {
        const s = o.get("SolidProp");
        s && q.set(s, { material: o.get("Material") || "", incomp: (o.get("InComp") || "Yes").toLowerCase().startsWith("y") });
        break;
      }
      case "SOLID PROPERTY ASSIGNMENTS": {
        const s = o.get("Solid"), n = o.get("SolidProp");
        s && n && Q.set(s, n);
        break;
      }
      case "AREA STIFFNESS MODIFIERS": {
        const s = o.get("Area");
        s && se.set(s, ["f11", "f22", "f12", "m11", "m22", "m12", "v13", "v23"].map((n) => o.has(n) ? y(o.get(n)) : 1));
        break;
      }
      case "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL": {
        const s = o.get("Frame");
        s && V.set(s, y(o.get("Angle")));
        break;
      }
      case "FRAME OFFSET ALONG LENGTH ASSIGNMENTS": {
        const s = o.get("Frame");
        s && te.set(s, [y(o.get("LengthI")), y(o.get("LengthJ")), y(o.get("RigidFactor"))]);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const s = o.get("Joint");
        s && X.push({ joint: s, fx: y(o.get("F1")), fy: y(o.get("F2")), fz: y(o.get("F3")), mx: y(o.get("M1")), my: y(o.get("M2")), mz: y(o.get("M3")) });
        break;
      }
    }
  }
  return dt(O, h, w, U, K, T, b, W, v, H, Z, X, te, V, se, _, ne, q, Q);
}
function Ut(A) {
  const E = { force: "KN", length: "m" };
  let m = "UX,UY,UZ,RX,RY,RZ";
  const O = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), K = [], T = [], b = /* @__PURE__ */ new Map(), W = [], v = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), te = [], V = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map();
  let _ = "", ne = "";
  for (const i of A) {
    const u = i.trim();
    if (!u || u.startsWith(";")) continue;
    if (!i.startsWith(" ") && !i.startsWith("	")) {
      const s = u.toUpperCase();
      if (s === "END") break;
      s.startsWith("SHELL SECTION") ? _ = "SHELL SECTION" : s.startsWith("FRAME SECTION") ? _ = "FRAME SECTION" : _ = s.split(/\s+/)[0];
      continue;
    }
    const S = It(u), o = u.split(/\s+/);
    switch (_) {
      case "SYSTEM": {
        const s = S.get("DOF");
        s && (m = s);
        const n = S.get("LENGTH");
        n && (E.length = n);
        const c = S.get("FORCE");
        c && (E.force = c);
        break;
      }
      case "JOINT": {
        const s = o[0];
        U.set(s, [y(S.get("X")), y(S.get("Y")), y(S.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const s = S.get("ADD"), n = S.get("DOF");
        if (s && n) {
          const c = n.split(","), g = [false, false, false, false, false, false];
          for (const P of c) {
            const Y = P.toUpperCase();
            (Y === "UX" || Y === "U1") && (g[0] = true), (Y === "UY" || Y === "U2") && (g[1] = true), (Y === "UZ" || Y === "U3") && (g[2] = true), (Y === "RX" || Y === "R1") && (g[3] = true), (Y === "RY" || Y === "R2") && (g[4] = true), (Y === "RZ" || Y === "R3") && (g[5] = true);
          }
          b.set(s, g);
        }
        break;
      }
      case "MATERIAL": {
        const s = S.get("NAME");
        if (s) ne = s, O.set(s, { E: 0, nu: 0, G: 0 });
        else if (ne) {
          const n = O.get(ne), c = S.get("E");
          c && (n.E = y(c));
          const g = S.get("U");
          g && (n.nu = y(g)), n.G = n.E / (2 * (1 + n.nu));
          const P = S.get("M");
          P && (n.density = y(P));
        }
        break;
      }
      case "SHELL": {
        const s = o[0], n = S.get("J");
        S.get("SEC"), n && T.push({ name: s, joints: n.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const s = S.get("NAME");
        s && w.set(s, { material: S.get("MAT") || "", type: S.get("TYPE") || "Shell", thickness: y(S.get("TH")) });
        break;
      }
      case "FRAME": {
        const s = o[0], n = S.get("J");
        if (n) {
          const c = n.split(",");
          c.length >= 2 && K.push({ name: s, j1: c[0], j2: c[1] });
        }
        break;
      }
      case "LOAD": {
        const s = S.get("ADD");
        s && W.push({ joint: s, fx: y(S.get("UX")), fy: y(S.get("UY")), fz: y(S.get("UZ")), mx: y(S.get("MX")), my: y(S.get("MY")), mz: y(S.get("MZ")) });
        break;
      }
    }
  }
  return dt(E, m, O, h, w, U, K, T, b, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), W, v, H, Z, X, te, V, se);
}
function dt(A, E, m, O, h, w, U, K, T, b, W, v, H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), V = [], se = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map()) {
  var _a;
  const ne = [], q = /* @__PURE__ */ new Map(), Q = [];
  for (const [f, I] of w) q.set(f, Q.length), ne.push(f), Q.push(I);
  const i = [], u = [], S = /* @__PURE__ */ new Map();
  for (const f of U) {
    const I = q.get(f.j1), L = q.get(f.j2);
    if (I !== void 0 && L !== void 0) {
      const B = i.length;
      i.push([I, L]), u.push(f.name);
      const R = b.get(f.name);
      R && S.set(B, R);
    }
  }
  const o = i.length;
  for (const f of K) {
    const I = f.joints.map((L) => q.get(L)).filter((L) => L !== void 0);
    if (I.length >= 3) {
      const L = i.length;
      i.push(I), u.push(f.name);
      const B = W.get(f.name);
      B && S.set(L, B);
    }
  }
  const s = i.length - o, n = [];
  for (const f of V) {
    const I = f.joints.map((R) => q.get(R));
    if (I.some((R) => R === void 0)) continue;
    const L = i.length;
    i.push([I[0], I[1], I[3], I[2], I[4], I[5], I[7], I[6]]), u.push(f.name), n.push(L);
    const B = _.get(f.name);
    B && S.set(L, B);
  }
  const c = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, g = /* @__PURE__ */ new Map(), P = m.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let f = 0; f < i.length; f++) {
    const I = S.get(f), L = I ? O.get(I) : null, B = I ? h.get(I) : null;
    if (L || i[f].length === 2) {
      const R = L || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, j = m.get(R.material) || P, z = j.E || P.E, ie = j.nu || 0.3, ee = j.G || z / (2 * (1 + ie));
      c.elasticities.set(f, z), c.shearModuli.set(f, ee), c.areas.set(f, R.A || R.D * R.B), c.momentsOfInertiaZ.set(f, R.Iz || R.B * R.D ** 3 / 12), c.momentsOfInertiaY.set(f, R.Iy || R.D * R.B ** 3 / 12), c.torsionalConstants.set(f, R.J || 0), c.densities.set(f, j.density || 0), R.As2 && (c.shearAreasZ ?? (c.shearAreasZ = /* @__PURE__ */ new Map()), c.shearAreasZ.set(f, R.As2)), R.As3 && (c.shearAreasY ?? (c.shearAreasY = /* @__PURE__ */ new Map()), c.shearAreasY.set(f, R.As3));
      const ae = H.get(u[f]);
      ae && (c.endOffsets ?? (c.endOffsets = /* @__PURE__ */ new Map()), c.endOffsets.set(f, ae));
      const pe = Z.get(u[f]);
      pe && (c.localAngles ?? (c.localAngles = /* @__PURE__ */ new Map()), c.localAngles.set(f, pe)), ((_a = R.shape) == null ? void 0 : _a.includes("Wide Flange")) || R.shape === "I" ? g.set(f, { type: "I", b: R.B, h: R.D, name: I || "I-section" }) : g.set(f, { type: "rect", b: R.B, h: R.D });
    } else if (B) {
      const R = m.get(B.material) || P, j = R.E || P.E, z = R.nu || 0.2, ie = R.G || j / (2 * (1 + z));
      c.elasticities.set(f, j), c.shearModuli.set(f, ie), c.thicknesses.set(f, B.thickness), c.poissonsRatios.set(f, z), c.plateFormulations ?? (c.plateFormulations = /* @__PURE__ */ new Map()), c.plateFormulations.set(f, /thin/i.test(B.type) ? 1 : 0);
      const ee = X.get(u[f]);
      ee && (c.shellModifiers ?? (c.shellModifiers = /* @__PURE__ */ new Map()), c.shellModifiers.set(f, ee), c.membraneModifiers ?? (c.membraneModifiers = /* @__PURE__ */ new Map()), c.membraneModifiers.set(f, ee[0]), c.bendingModifiers ?? (c.bendingModifiers = /* @__PURE__ */ new Map()), c.bendingModifiers.set(f, ee[3])), c.densities.set(f, R.density || 0);
    }
  }
  if (n.length) {
    let f = false;
    for (const I of n) {
      const L = se.get(S.get(I) || ""), B = L && m.get(L.material) || P, R = B.E || P.E, j = B.nu || 0.2;
      c.elasticities.set(I, R), c.poissonsRatios.set(I, j), c.shearModuli.set(I, B.G || R / (2 * (1 + j))), c.densities.set(I, B.density || 0), (L == null ? void 0 : L.incomp) && (f = true);
    }
    c.solidIncompatible = f;
  }
  const Y = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() };
  for (const [f, I] of T) {
    const L = q.get(f);
    L !== void 0 && Y.supports.set(L, I);
  }
  for (const [f, I] of te) {
    const L = u.indexOf(f);
    if (L < 0 || i[L].length !== 2) continue;
    c.frameLoads ?? (c.frameLoads = /* @__PURE__ */ new Map()), c.frameLoads.set(L, I);
    const B = Q[i[L][0]], R = Q[i[L][1]], j = [R[0] - B[0], R[1] - B[1], R[2] - B[2]], z = Math.hypot(j[0], j[1], j[2]);
    if (z < 1e-9) continue;
    const ie = [j[0] / z, j[1] / z, j[2] / z], ee = z * z / 12, ae = [ie[1] * I[2] - ie[2] * I[1], ie[2] * I[0] - ie[0] * I[2], ie[0] * I[1] - ie[1] * I[0]], pe = (ce, k) => {
      const fe = Y.loads.get(ce) || [0, 0, 0, 0, 0, 0];
      for (let Se = 0; Se < 6; Se++) fe[Se] += k[Se];
      Y.loads.set(ce, fe);
    };
    pe(i[L][0], [I[0] * z / 2, I[1] * z / 2, I[2] * z / 2, ee * ae[0], ee * ae[1], ee * ae[2]]), pe(i[L][1], [I[0] * z / 2, I[1] * z / 2, I[2] * z / 2, -ee * ae[0], -ee * ae[1], -ee * ae[2]]);
  }
  for (const f of v) {
    const I = q.get(f.joint);
    if (I !== void 0) {
      const L = Y.loads.get(I) || [0, 0, 0, 0, 0, 0];
      L[0] += f.fx, L[1] += f.fy, L[2] += f.fz, L[3] += f.mx, L[4] += f.my, L[5] += f.mz, Y.loads.set(I, L);
    }
  }
  return { units: A, dof: E, materials: m, frameSections: O, shellSections: h, nodes: Q, nodeNames: ne, nodeNameToIdx: q, elements: i, elementNames: u, elementSections: S, nodeInputs: Y, elementInputs: c, sectionShapes: g, info: { nNodes: Q.length, nFrames: o, nShells: s, title: `SAP2000 (${o} frames, ${s} shells)` } };
}
function _t(A) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const { nodes: E, elements: m, nodeInputs: O, elementInputs: h } = A, w = { force: "KN", length: "m" };
  A.units && (A.units.force !== "KN" || A.units.length !== "m") && console.warn(`[s2k] el modelo va en kN\xB7m y el exportador NO convierte: se declara CurrUnits="KN, m, C" y se ignora "${A.units.force}, ${A.units.length}". Etiquetarlo de otra forma hace que SAP2000 lea las fuerzas escaladas.`);
  const U = A.title || "Awatif Model", K = [], T = (o) => K.push(o), b = () => K.push(" ");
  T(`File ${U}.$2k was saved on m/d/yy at h:mm:ss`), b(), T('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), T("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), b();
  const W = [], v = (o) => {
    var _a2, _b2, _c2, _d2;
    const s = ((_a2 = h.elasticities) == null ? void 0 : _a2.get(o)) || 0, n = (_b2 = h.poissonsRatios) == null ? void 0 : _b2.get(o), c = ((_c2 = h.shearModuli) == null ? void 0 : _c2.get(o)) || 0, g = n !== void 0 ? n : s > 0 && c > 0 ? Math.max(0, Math.min(0.5, s / (2 * c) - 1)) : 0.2, P = c > 0 ? c : s > 0 ? s / (2 * (1 + g)) : 0, Y = ((_d2 = h.densities) == null ? void 0 : _d2.get(o)) || 0;
    return { E: s, nu: g, G: P, rho: Y, key: `MAT_${Math.round(s)}_n${g.toFixed(4)}` };
  }, H = [], Z = [];
  if (m.forEach((o, s) => {
    o.length === 2 ? W.push(s) : o.length === 8 ? Z.push(s) : H.push(s);
  }), W.length > 0) {
    T('TABLE:  "CONNECTIVITY - FRAME"');
    for (const o of W) {
      const s = m[o];
      T(`   Frame=${o + 1}   JointI=${s[0] + 1}   JointJ=${s[1] + 1}   IsCurved=No`);
    }
    b();
  }
  if (H.length > 0) {
    T('TABLE:  "CONNECTIVITY - AREA"');
    for (const o of H) {
      const s = m[o], n = s.map((c, g) => `Joint${g + 1}=${c + 1}`).join("   ");
      T(`   Area=${o + 1}   NumJoints=${s.length}   ${n}`);
    }
    b();
  }
  if (Z.length > 0) {
    T('TABLE:  "CONNECTIVITY - SOLID"');
    for (const o of Z) {
      const s = m[o], n = [s[0], s[1], s[3], s[2], s[4], s[5], s[7], s[6]];
      T(`   Solid=${o + 1}   ${n.map((c, g) => `Joint${g + 1}=${c + 1}`).join("   ")}`);
    }
    b();
  }
  T('TABLE:  "COORDINATE SYSTEMS"'), T("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), b(), T('TABLE:  "DATABASE FORMAT TYPES"'), T("   UnitsCurr=Yes   OverrideE=No"), b();
  const X = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map();
  for (const o of W) {
    const s = ((_a = h.areas) == null ? void 0 : _a.get(o)) || 0, n = ((_b = h.momentsOfInertiaZ) == null ? void 0 : _b.get(o)) || 0, c = ((_c = h.momentsOfInertiaY) == null ? void 0 : _c.get(o)) || 0, g = ((_d = h.torsionalConstants) == null ? void 0 : _d.get(o)) || 0;
    (_e = h.elasticities) == null ? void 0 : _e.get(o);
    const P = v(o).key, Y = ((_f = h.shearAreasZ) == null ? void 0 : _f.get(o)) ?? 0, f = ((_g = h.shearAreasY) == null ? void 0 : _g.get(o)) ?? 0, I = `A${s.toPrecision(6)}_Iz${n.toPrecision(6)}_s${Y.toPrecision(6)}_${f.toPrecision(6)}`;
    if (!X.has(I)) {
      let B = 0.3, R = 0.3;
      s > 0 && n > 0 && (B = Math.sqrt(12 * n / s), R = s / B), X.set(I, { A: s, Iz: n, Iy: c, J: g, b: R, h: B, matKey: P, As2: Y > 0 ? Y : s * 5 / 6, As3: f > 0 ? f : s * 5 / 6 });
    }
    const L = [...X.keys()].indexOf(I) + 1;
    te.set(o, `SEC${L}`);
  }
  if (W.length > 0) {
    T('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const o of W) {
      const s = te.get(o) || "SEC1";
      T(`   Frame=${o + 1}   AutoSelect=N.A.   AnalSect=${s}   MatProp=Default`);
    }
    b();
  }
  if (X.size > 0) {
    T('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let o = 0;
    for (const [, s] of X) o++, T(`   SectionName=SEC${o}   Material=${s.matKey}   Shape=General   t3=${F(s.h)}   t2=${F(s.b)}   Area=${F(s.A)}   TorsConst=${F(s.J)}   I33=${F(s.Iz)}   I22=${F(s.Iy)}   I23=0   AS2=${F(s.As2)}   AS3=${F(s.As3)} _`), T("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    b();
  }
  {
    const o = W.filter((s) => {
      var _a2;
      const n = (_a2 = h.localAngles) == null ? void 0 : _a2.get(s);
      return n !== void 0 && isFinite(n) && Math.abs(n) > 1e-9;
    });
    if (o.length > 0) {
      T('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const s of o) T(`   Frame=${s + 1}   Angle=${F(h.localAngles.get(s))}   AdvanceAxes=No`);
      b();
    }
  }
  {
    const o = h.endOffsets, s = W.filter((n) => {
      const c = o == null ? void 0 : o.get(n);
      return !!c && (Math.abs(c[0]) > 1e-9 || Math.abs(c[1]) > 1e-9);
    });
    if (s.length > 0) {
      T('TABLE:  "FRAME OFFSET ALONG LENGTH ASSIGNMENTS"');
      for (const n of s) {
        const c = o.get(n);
        T(`   Frame=${n + 1}   Type=User   LengthI=${F(c[0])}   LengthJ=${F(c[1])}   RigidFactor=${F(c.length > 2 ? c[2] : 0)}`);
      }
      b();
    }
  }
  const V = !!A.layeredSection && H.length > 0, se = A.layeredSection, _ = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map();
  if (!V) for (const o of H) {
    const s = ((_h = h.thicknesses) == null ? void 0 : _h.get(o)) || 0.1;
    (_i = h.elasticities) == null ? void 0 : _i.get(o);
    const n = v(o).key, c = ((_j = h.plateFormulations) == null ? void 0 : _j.get(o)) ?? 0, g = `t${s.toPrecision(6)}_f${c}`;
    _.has(g) || _.set(g, { t: s, matKey: n, formulacion: c });
    const P = [..._.keys()].indexOf(g) + 1;
    ne.set(o, `SSEC${P}`);
  }
  if (H.length > 0) {
    T('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const n of H) {
      const c = V ? se.name : ne.get(n) || "SSEC1";
      T(`   Area=${n + 1}   Section=${c}   MatProp=Default`);
    }
    b();
    const o = h.shellModifiers, s = H.filter((n) => {
      const c = o == null ? void 0 : o.get(n);
      return c && c.some((g) => Math.abs(g - 1) > 1e-12);
    });
    if (s.length > 0) {
      T('TABLE:  "AREA STIFFNESS MODIFIERS"');
      for (const n of s) {
        const c = o.get(n);
        T(`   Area=${n + 1}   f11=${F(c[0])}   f22=${F(c[1])}   f12=${F(c[2])}   m11=${F(c[3])}   m22=${F(c[4])}   m12=${F(c[5])}   v13=${F(c[6])}   v23=${F(c[7])}   MassMod=1   WeightMod=1`);
      }
      b();
    }
    if (T('TABLE:  "AREA SECTION PROPERTIES"'), V) {
      const n = se, c = ((_k = n.layers[0]) == null ? void 0 : _k.material) || "MAT_DEFAULT";
      T(`   Section=${n.name}   Material=${c}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${F(n.totalThickness)}   BendThick=${F(n.totalThickness)}   Color=Magenta`);
    } else {
      let n = 0;
      for (const [, c] of _) {
        n++;
        const g = c.formulacion === 2 ? "Membrane" : c.formulacion === 3 ? "Plate-Thin" : c.formulacion === 4 ? "Plate-Thick" : c.formulacion === 1 ? "Shell-Thin" : "Shell-Thick", P = c.formulacion === 3 || c.formulacion === 4 ? "No" : "Yes";
        T(`   Section=SSEC${n}   Material=${c.matKey}   MatAngle=0   AreaType=Shell   Type=${g}   DrillDOF=${P}   Thickness=${F(c.t)}   BendThick=${F(c.t)}   Color=Cyan`);
      }
    }
    if (b(), V) {
      T('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const n = se;
      for (const c of n.layers) {
        const g = c.angle ?? 0, P = c.numIntPts ?? 3;
        T(`   Section=${n.name}   LayerName=${c.name}   Distance=${F(c.distance)}   Thickness=${F(c.thickness)}   Type=Shell   NumIntPts=${P}   Material=${c.material}   MatAngle=${F(g * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      b();
    }
  }
  T('TABLE:  "JOINT COORDINATES"');
  for (let o = 0; o < E.length; o++) {
    const s = E[o];
    T(`   Joint=${o + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${F(s[0])}   Y=${F(s[1])}   Z=${F(s[2])}   SpecialJt=No`);
  }
  if (b(), O.supports && O.supports.size > 0) {
    T('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [o, s] of O.supports) {
      if (!s.some((c) => c)) continue;
      const n = (c) => c ? "Yes" : "No";
      T(`   Joint=${o + 1}   U1=${n(s[0])}   U2=${n(s[1])}   U3=${n(s[2])}   R1=${n(s[3])}   R2=${n(s[4])}   R3=${n(s[5])}`);
    }
    b();
  }
  const q = A.selfWtMult ?? 1;
  T('TABLE:  "LOAD PATTERN DEFINITIONS"'), T(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${q}`), b(), T('TABLE:  "LOAD CASE DEFINITIONS"'), T('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), b(), T('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), T('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), b();
  const Q = h.frameLoads, i = /* @__PURE__ */ new Map();
  if ((_l = O.loads) == null ? void 0 : _l.forEach((o, s) => i.set(s, [...o])), Q && Q.size > 0) {
    const o = (s, n) => {
      const c = i.get(s) ?? [0, 0, 0, 0, 0, 0];
      i.set(s, c.map((g, P) => g - n[P]));
    };
    for (const [s, n] of Q) {
      const c = m[s];
      if (!c || c.length !== 2) continue;
      const g = E[c[0]], P = E[c[1]], Y = [P[0] - g[0], P[1] - g[1], P[2] - g[2]], f = Math.hypot(Y[0], Y[1], Y[2]);
      if (f < 1e-9) continue;
      const I = [Y[0] / f, Y[1] / f, Y[2] / f], L = f * f / 12, B = [I[1] * n[2] - I[2] * n[1], I[2] * n[0] - I[0] * n[2], I[0] * n[1] - I[1] * n[0]];
      o(c[0], [n[0] * f / 2, n[1] * f / 2, n[2] * f / 2, L * B[0], L * B[1], L * B[2]]), o(c[1], [n[0] * f / 2, n[1] * f / 2, n[2] * f / 2, -L * B[0], -L * B[1], -L * B[2]]);
    }
  }
  if (i.size > 0) {
    T('TABLE:  "JOINT LOADS - FORCE"');
    for (const [o, s] of i) s.some((n) => Math.abs(n) > 1e-12) && T(`   Joint=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${F(s[0])}   F2=${F(s[1])}   F3=${F(s[2])}   M1=${F(s[3])}   M2=${F(s[4])}   M3=${F(s[5])}`);
    b();
  }
  const u = h.frameLoads;
  if (u && u.size > 0) {
    T('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [o, s] of u) {
      const n = m[o];
      if (!n || n.length !== 2) continue;
      const c = E[n[0]], g = E[n[1]], P = Math.hypot(g[0] - c[0], g[1] - c[1], g[2] - c[2]);
      ["X", "Y", "Z"].forEach((Y, f) => {
        Math.abs(s[f]) < 1e-12 || T(`   Frame=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${Y}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${F(P)}   FOverLA=${F(s[f])}   FOverLB=${F(s[f])}`);
      });
    }
    b();
  }
  const S = /* @__PURE__ */ new Map();
  for (let o = 0; o < m.length; o++) {
    const { E: s, nu: n, G: c, rho: g, key: P } = v(o);
    S.has(P) || S.set(P, { E: s, nu: n, G: c, rho: g });
  }
  if (Z.length > 0) {
    const o = h.solidIncompatible === false ? "No" : "Yes", s = /* @__PURE__ */ new Map();
    for (const n of Z) {
      const { E: c, nu: g, G: P, rho: Y, key: f } = v(n);
      S.has(f) || S.set(f, { E: c, nu: g, G: P, rho: Y }), s.has(f) || s.set(f, `SOL${s.size + 1}`);
    }
    T('TABLE:  "SOLID PROPERTY DEFINITIONS"');
    for (const [n, c] of s) T(`   SolidProp=${c}   Material=${n}   MatAngleA=0   MatAngleB=0   MatAngleC=0   InComp=${o}   Color=Yellow`);
    b(), T('TABLE:  "SOLID PROPERTY ASSIGNMENTS"');
    for (const n of Z) T(`   Solid=${n + 1}   SolidProp=${s.get(v(n).key)}`);
    b();
  }
  T('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [o] of S) T(`   Material=${o}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  b(), T('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [o, s] of S) T(`   Material=${o}   UnitWeight=${F(s.rho * 9.81)}   UnitMass=${F(s.rho)}   E1=${F(s.E)}   G12=${F(s.G)}   U12=${F(s.nu)}   A1=9.9E-06`);
  b(), T('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [o] of S) T(`   Material=${o}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return b(), T('TABLE:  "PROGRAM CONTROL"'), T(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${w.force}, ${w.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), b(), T("END TABLE DATA"), T(""), K.join(`\r
`);
}
function F(A) {
  return A === 0 || Math.abs(A) < 1e-15 ? "0" : Math.abs(A) >= 1e6 || Math.abs(A) < 1e-3 && Math.abs(A) > 0 ? A.toExponential(8) : parseFloat(A.toPrecision(10)).toString();
}
function kt(A, E, m = 0.05) {
  const O = E.map(([h, w]) => `${(+h).toFixed(4)} ${(+w).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${A}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${m}  SPECTYPE "USER"  `, `  FUNCTION "${A}"  TIMEVAL "${O}"  `];
}
function xt(A) {
  const { name: E, func: m, modalCase: O = "Modal", sfX: h = 9.81, sfY: w = 9.81 } = A, U = [`  LOADCASE "${E}"  TYPE  "Response Spectrum"  MODALCASE  "${O}"  `];
  return h && U.push(`  LOADCASE "${E}"  ACCEL  "U1"  FUNC  "${m}"  SF  ${h}  `), w && U.push(`  LOADCASE "${E}"  ACCEL  "U2"  FUNC  "${m}"  SF  ${w}  `), U;
}
function ut(A) {
  const { name: E = "Modal", ritz: m = false, nModes: O = 12 } = A;
  return m ? [`  LOADCASE "${E}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${E}"  MAXMODES  ${O} MINMODES  1 `, `  LOADCASE "${E}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${E}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${E}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${E}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${E}"  MAXMODES  ${O} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function Kt(A) {
  var _a;
  const E = (_a = A.e2kModel) == null ? void 0 : _a.rawSections;
  let m = E && E.size > 0 ? Wt(E, A.e2kModel) : vt(A);
  return A.seismicNEC && (m = Ht(m, A.seismicNEC)), m;
}
function Ht(A, E) {
  const m = A.includes(`\r
`) ? `\r
` : `
`, O = A.split(/\r?\n/), h = E.name ?? "NEC", w = kt(h, E.points, E.dampRatio ?? 0.05), U = E.modalCase ?? "Modal", K = xt({ name: E.caseName ?? "Sismo NEC", func: h, modalCase: U, sfX: E.sfX, sfY: E.sfY });
  let T = [];
  const b = (W) => O.some((v) => W.test(v));
  if (E.modal) {
    const W = new RegExp(`^\\s*LOADCASE\\s+"${U}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let v = O.length - 1; v >= 0; v--) W.test(O[v]) && O.splice(v, 1);
    T = ut({ name: U, ritz: !!E.modal.ritz, nModes: E.modal.nModes });
  } else b(new RegExp(`LOADCASE\\s+"${U}"\\s+TYPE\\s+"Modal`)) || (T = ut({ name: U }));
  return Mt(O, "FUNCTIONS", w), Mt(O, "LOAD CASES", [...T, ...K]), O.join(m);
}
function Mt(A, E, m) {
  const O = A.findIndex((U) => U.trim() === `$ ${E}`);
  if (O >= 0) {
    A.splice(O + 1, 0, ...m);
    return;
  }
  const h = A.findIndex((U) => U.trim() === "END"), w = h >= 0 ? h : A.length;
  A.splice(w, 0, `$ ${E}`, ...m, "");
}
function Wt(A, E) {
  const m = [], O = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  m.push("$ File exported from Hekatan Struct Lineal (round-trip)"), m.push("");
  for (const h of O) {
    const w = A.get(h);
    if (!(!w || w.length === 0)) {
      m.push(`$ ${h}`);
      for (const U of w) m.push(U);
      m.push("");
    }
  }
  for (const [h, w] of A) if (!O.includes(h) && w.length !== 0) {
    m.push(`$ ${h}`);
    for (const U of w) m.push(U);
    m.push("");
  }
  return m.push("  END"), m.push("$ END OF MODEL FILE"), m.join(`\r
`);
}
function vt(A) {
  var _a, _b, _c, _d, _e2, _f;
  const { nodes: E, elements: m, nodeInputs: O, elementInputs: h, title: w, units: U } = A, K = A.shellLoads ?? h.shellSurfaceLoads;
  let T;
  K instanceof Map && (T = /* @__PURE__ */ new Map(), K.forEach((e, t) => {
    T.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const b = A.shellAngles ?? h.shellAngles, W = h.cargaDeArea, v = !!(T && T.size > 0), H = h.selfWeight, Z = h.frameLoads, X = (A.weightMode ?? "auto") === "auto" && H !== void 0, te = /* @__PURE__ */ new Map(), V = (e, t) => {
    const a = te.get(e) ?? [0, 0, 0, 0, 0, 0];
    te.set(e, a.map((r, l) => r + t[l]));
  }, se = /* @__PURE__ */ new Set();
  if (X) {
    if (Z) for (const [e, t] of Z) {
      const a = m[e];
      if (!a || a.length !== 2) continue;
      const r = E[a[0]], l = E[a[1]], p = [l[0] - r[0], l[1] - r[1], l[2] - r[2]], M = Math.hypot(p[0], p[1], p[2]);
      if (M < 1e-9) continue;
      const $ = [p[0] / M, p[1] / M, p[2] / M], N = M * M / 12, G = [$[1] * t[2] - $[2] * t[1], $[2] * t[0] - $[0] * t[2], $[0] * t[1] - $[1] * t[0]];
      V(a[0], [t[0] * M / 2, t[1] * M / 2, t[2] * M / 2, N * G[0], N * G[1], N * G[2]]), V(a[1], [t[0] * M / 2, t[1] * M / 2, t[2] * M / 2, -N * G[0], -N * G[1], -N * G[2]]), se.add(e);
    }
    if (H && H > 0) {
      const t = h.endOffsets;
      m.forEach((a, r) => {
        var _a2, _b2, _c2;
        const l = ((_a2 = h.densities) == null ? void 0 : _a2.get(r)) ?? 0;
        if (l) {
          if (a.length === 2) {
            const p = ((_b2 = h.areas) == null ? void 0 : _b2.get(r)) ?? 0, M = E[a[0]], $ = E[a[1]], N = [$[0] - M[0], $[1] - M[1], $[2] - M[2]];
            let G = Math.hypot(N[0], N[1], N[2]);
            const d = t == null ? void 0 : t.get(r);
            if (d) {
              const D = Math.hypot(N[0], N[1]);
              D > 1e-9 && Math.abs(Math.atan2(Math.abs(N[2]), D)) * 180 / Math.PI < 20 && (G = Math.max(G - d[0] - d[1], 0));
            }
            const C = p * G * l * 9.80665 * H;
            V(a[0], [0, 0, -C / 2, 0, 0, 0]), V(a[1], [0, 0, -C / 2, 0, 0, 0]);
          } else if (a.length === 4) {
            const p = ((_c2 = h.thicknesses) == null ? void 0 : _c2.get(r)) ?? 0, M = a.map((D) => E[D]);
            let $ = 0, N = 0, G = 0;
            for (let D = 0; D < 4; D++) {
              const x = M[D], J = M[(D + 1) % 4];
              $ += x[1] * J[2] - x[2] * J[1], N += x[2] * J[0] - x[0] * J[2], G += x[0] * J[1] - x[1] * J[0];
            }
            const d = Math.hypot($, N, G) / 2, C = p * d * l * 9.80665 * H;
            for (const D of a) V(D, [0, 0, -C / 4, 0, 0, 0]);
          }
        }
      });
    }
  }
  const _ = (e, t) => {
    const a = te.get(e);
    return [t[0] - ((a == null ? void 0 : a[0]) ?? 0), t[1] - ((a == null ? void 0 : a[1]) ?? 0), t[2] - (v ? (W == null ? void 0 : W.get(e)) ?? 0 : 0) - ((a == null ? void 0 : a[2]) ?? 0)];
  }, ne = (e, t) => {
    const a = te.get(e);
    return [(t[3] ?? 0) - ((a == null ? void 0 : a[3]) ?? 0), (t[4] ?? 0) - ((a == null ? void 0 : a[4]) ?? 0), (t[5] ?? 0) - ((a == null ? void 0 : a[5]) ?? 0)];
  }, q = "N", Q = "MM", i = [], u = (e) => Math.round(e * 1e4) / 1e4, S = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), o = 1e3, s = 1e3, n = (e) => e * s, c = (e) => e * o, g = (e) => e * o, P = (e) => e * o * s, Y = (e) => e * o / s ** 2, f = (e) => e * o / s ** 3, I = /* @__PURE__ */ new Date(), L = `${I.getMonth() + 1}/${I.getDate()}/${I.getFullYear()}  ${I.getHours()}:${String(I.getMinutes()).padStart(2, "0")}:${String(I.getSeconds()).padStart(2, "0")}`;
  i.push(`$ File   "Hekatan_export.e2k"  saved ${L} in ETABS 22.6.0`), i.push(""), i.push("$ PROGRAM INFORMATION"), i.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), i.push(""), i.push("$ CONTROLS"), i.push(`  UNITS  "${q}"  "${Q}"  "C"  `), i.push('  TITLE1  "Hekatan Struct Lineal export"  '), w && i.push(`  TITLE2  "${w}"  `), i.push("  PREFERENCE  MERGETOL 0.001"), i.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), i.push("");
  const B = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
  E.forEach((e) => {
    B.add(u(e[0])), R.add(u(e[1]));
  });
  const j = [...B].sort((e, t) => e - t), z = [...R].sort((e, t) => e - t);
  i.push("$ GRIDS"), i.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), j.forEach((e, t) => {
    const a = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    i.push(`  GRID "G1"  LABEL "${a}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), z.forEach((e, t) => {
    i.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), i.push("");
  const ie = 3, ee = 0.5, ae = /* @__PURE__ */ new Map();
  E.forEach((e) => {
    const t = u(e[2]);
    ae.set(t, (ae.get(t) ?? 0) + 1);
  });
  const pe = /* @__PURE__ */ new Set();
  E.forEach((e) => pe.add(u(e[2])));
  const ce = [...pe].sort((e, t) => e - t);
  let k = ce.filter((e) => (ae.get(e) ?? 0) >= ie);
  if (k.length > 1) {
    const e = [k[0]];
    for (const t of k.slice(1)) t - e[e.length - 1] < ee ? e[e.length - 1] = t : e.push(t);
    k = e;
  }
  k.length || (k = [ce[0], ce[ce.length - 1]]), k[0] !== ce[0] && k.unshift(ce[0]), k[k.length - 1] !== ce[ce.length - 1] && k.push(ce[ce.length - 1]);
  const fe = [], Se = /* @__PURE__ */ new Map();
  fe.push("Base"), Se.set(k[0], "Base");
  for (let e = 1; e < k.length; e++) {
    const t = `Level_${e}`;
    fe.push(t), Se.set(k[e], t);
  }
  const Ke = (e) => {
    const t = u(e);
    if (Se.has(t)) return { story: Se.get(t), dz: 0 };
    for (let r = 0; r < k.length; r++) if (k[r] >= t) return { story: Se.get(k[r]), dz: u(k[r] - t) };
    const a = k[k.length - 1];
    return { story: Se.get(a), dz: u(a - t) };
  };
  i.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = k.length - 1; e >= 1; e--) i.push(`  STORY "${fe[e]}"  HEIGHT ${u(n(k[e] - k[e - 1]))} MASTERSTORY "Yes"  `);
  k.length > 0 && i.push(`  STORY "Base"  ELEV ${k[0]} `), i.push(""), m.some((e) => e.length === 4), i.push("$ DIAPHRAGM NAMES"), i.push('  DIAPHRAGM "D1"    TYPE RIGID'), i.push(""), i.push("$ MATERIAL PROPERTIES");
  const mt = 980665e-8, gt = (e) => {
    var _a2;
    const t = (_a2 = h.densities) == null ? void 0 : _a2.get(e);
    if (t !== void 0) return t > 100 ? t * mt : t * 9.80665;
  }, Ie = (e) => {
    var _a2;
    const t = ((_a2 = h.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, a = gt(e);
    return `${t}|${a === void 0 ? "-" : a.toFixed(4)}`;
  }, Ze = /* @__PURE__ */ new Set();
  (_a = h.elasticities) == null ? void 0 : _a.forEach((e, t) => Ze.add(Ie(t)));
  const me = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map();
  let Ot = 0, Nt = 0;
  for (const e of Ze) {
    const t = parseFloat(e.split("|")[0]), a = e.split("|")[1], r = t >= 1e8, l = r ? `Steel_${++Ot}` : `Conc_${++Nt}`;
    me.set(e, l), Ce.set(e, r);
    const p = a !== "-" ? parseFloat(a) : r ? 76.97 : 24, M = Y(t), $ = f(p), N = (() => {
      const C = A.elementInputs.poissonsRatios;
      if (C) {
        for (const [D, x] of C) if (Ie(D) === e) return x;
      }
    })(), G = N !== void 0 ? N : r ? 0.3 : 0.2, d = r ? 117e-7 : 1e-5;
    if (r) {
      i.push(`  MATERIAL  "${l}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${S($)}`), i.push(`  MATERIAL  "${l}"    SYMTYPE "Isotropic"  E ${u(M)}  U ${G}  A ${d}`);
      const C = 345e3, D = 45e4;
      i.push(`  MATERIAL  "${l}"  FY ${u(Y(C))}  FU ${u(Y(D))}  FYE ${u(Y(C * 1.1))}  FUE ${u(Y(D * 1.1))}`);
    } else i.push(`  MATERIAL  "${l}"    TYPE "Concrete"    WEIGHTPERVOLUME ${S($)}`), i.push(`  MATERIAL  "${l}"    SYMTYPE "Isotropic"  E ${u(M)}  U ${G}  A ${d}`), i.push(`  MATERIAL  "${l}"    FC ${u(Y(24e3))}`);
  }
  i.push(""), i.push("$ FRAME SECTIONS");
  const Pe = /* @__PURE__ */ new Set(), Ue = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), he = 0.05;
  m.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g, _h, _i, _j;
    if (e.length !== 2) return;
    const a = (_a2 = h.sectionShapes) == null ? void 0 : _a2.get(t), r = ((_b2 = h.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, l = me.get(Ie(t)) || "Conc_1", p = Ce.get(Ie(t)) ?? r >= 1e8, M = ((_c2 = h.areas) == null ? void 0 : _c2.get(t)) ?? 0, $ = ((_d2 = h.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, N = ((_e3 = h.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, G = ((_f2 = h.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let d = (a == null ? void 0 : a.type) || "rect", C = (a == null ? void 0 : a.h) ?? 0, D = (a == null ? void 0 : a.b) ?? 0, x = (a == null ? void 0 : a.d) ?? 0;
    const J = (a == null ? void 0 : a.tf) ?? 0, ue = (a == null ? void 0 : a.tw) ?? 0;
    if (!a && C <= 0 && D <= 0 && x <= 0 && M > 0 && $ > 0 && N > 0) {
      const Ee = (_g = h.cantos) == null ? void 0 : _g.get(t), De = (_h = h.anchos) == null ? void 0 : _h.get(t);
      C = Ee && Ee > 0 ? Ee : Math.sqrt(12 * $ / M), D = De && De > 0 ? De : M / C, (!isFinite(C) || C < he) && (C = he), (!isFinite(D) || D < he) && (D = he), d = "general";
    } else C <= 0 && D <= 0 && x <= 0 && M > 0 && ($ > 0 ? (C = Math.sqrt(12 * $ / M), D = M / C) : C = D = Math.sqrt(M), (!isFinite(C) || C < he) && (C = he), (!isFinite(D) || D < he) && (D = he), d = "rect");
    C <= 0 && D <= 0 && x <= 0 && (C = 0.3, D = 0.3, d = "rect");
    const Ge = (a == null ? void 0 : a.name) ? `NAME_${a.name}` : `${d}_${u(C)}_${u(D)}_${u(x)}_${u(J)}_${u(ue)}_${l}`;
    (a == null ? void 0 : a.name) && !Fe.has(Ge) && Fe.set(Ge, a.name);
    let re = Fe.get(Ge);
    if (!re) {
      const Ee = p ? "S" : "C";
      d === "general" ? re = `${Ee}_G${Pe.size + 1}` : d === "rect" ? re = `${Ee}_R${Math.round(D * 100)}x${Math.round(C * 100)}` : d === "circ" ? re = `${Ee}_C_D${Math.round(x * 100)}` : d === "I" ? re = `${Ee}_I${Math.round(C * 100)}x${Math.round(D * 100)}` : d === "HSS" ? re = `${Ee}_HSS${Math.round(D * 100)}x${Math.round(C * 100)}x${Math.round(ue * 1e3)}` : re = `${Ee}_Sec${Pe.size + 1}`, Fe.set(Ge, re);
    }
    if (Ue.set(t, re), Pe.has(re)) return;
    Pe.add(re);
    const Bt = M > 0 && $ > 0 && N > 0;
    let le;
    d === "general" || Bt ? le = "General" : d === "I" ? le = "Steel I/Wide Flange" : d === "HSS" ? le = "Steel Tube" : d === "CFT" ? le = "Filled Steel Tube" : d === "pipe" ? le = "Steel Pipe" : d === "L" ? le = "Steel Angle" : d === "C" ? le = "Steel Channel" : d === "2C" ? le = "Steel Double Channel" : d === "circ" ? le = "Concrete Circle" : le = "Concrete Rectangular";
    let Me = `  FRAMESECTION  "${re}"  MATERIAL "${l}"  SHAPE "${le}"`;
    if (le === "General") {
      const Ee = ((_i = h.shearAreasZ) == null ? void 0 : _i.get(t)) || M * 5 / 6, De = ((_j = h.shearAreasY) == null ? void 0 : _j.get(t)) || M * 5 / 6;
      Me += `  D ${u(n(C))} B ${u(n(D))} AREA ${S(M * 1e6)} AS2 ${S(Ee * 1e6)} AS3 ${S(De * 1e6)} I33 ${S($ * 1e12)} I22 ${S(N * 1e12)} TORSION ${S((G || $ + N) * 1e12)} S33POS ${S(2 * $ / C * 1e9)} S33NEG ${S(2 * $ / C * 1e9)} S22POS ${S(2 * N / D * 1e9)} S22NEG ${S(2 * N / D * 1e9)} Z33 ${S(2 * $ / C * 1e9)} Z22 ${S(2 * N / D * 1e9)} R33 ${S(Math.sqrt($ / M) * 1e3)} R22 ${S(Math.sqrt(N / M) * 1e3)} `, i.push(Me);
      return;
    }
    C && (Me += `  D ${u(n(C))}`), D && (Me += `  B ${u(n(D))}`), x && !C && (Me += `  D ${u(n(x))}`), J && (Me += `  TF ${u(n(J))}`), ue && (Me += `  TW ${u(n(ue))}`), i.push(Me);
  }), i.push("");
  const ye = /* @__PURE__ */ new Map();
  let Lt = 0;
  E.forEach((e) => {
    const { dz: t } = Ke(e[2]), a = `${u(e[0])},${u(e[1])},${t}`;
    ye.has(a) || ye.set(a, `${++Lt}`);
  }), i.push("$ POINT COORDINATES");
  for (const [e, t] of ye) {
    const [a, r, l] = e.split(",").map(Number);
    i.push(l ? `  POINT "${t}"  ${u(n(a))} ${u(n(r))} ${u(n(l))} ` : `  POINT "${t}"  ${u(n(a))} ${u(n(r))} `);
  }
  i.push("");
  const Te = (e) => {
    const t = E[e], { story: a, dz: r } = Ke(t[2]), l = `${u(t[0])},${u(t[1])},${r}`;
    return { pt: ye.get(l) || "1", story: a };
  }, Ve = (e) => {
    var _a2, _b2, _c2, _d2, _e3, _f2;
    const t = [], a = (_a2 = A.propertyModifiers) == null ? void 0 : _a2.get(e);
    a && a.some((d) => Math.abs(d - 1) > 1e-9) && t.push(`PROPMODIFIERS "${a.map((d) => u(d)).join(" ")}"`);
    const r = (_b2 = h.localAngles) == null ? void 0 : _b2.get(e);
    r !== void 0 && isFinite(r) && Math.abs(r) > 1e-9 && t.push(`ANG ${u(r)}`);
    const l = (_c2 = h.momentReleases) == null ? void 0 : _c2.get(e);
    if (l && l.some((d) => d)) {
      const d = [];
      l.length === 12 ? (l[0] && d.push("PI"), l[1] && d.push("V2I"), l[2] && d.push("V3I"), l[3] && d.push("TI"), l[4] && d.push("M2I"), l[5] && d.push("M3I"), l[6] && d.push("PJ"), l[7] && d.push("V2J"), l[8] && d.push("V3J"), l[9] && d.push("TJ"), l[10] && d.push("M2J"), l[11] && d.push("M3J")) : l.length === 6 && (l[0] && d.push("TI"), l[1] && d.push("M2I"), l[2] && d.push("M3I"), l[3] && d.push("TJ"), l[4] && d.push("M2J"), l[5] && d.push("M3J")), d.length > 0 && t.push(`RELEASE "${d.join(" ")}"`);
    }
    const p = (_d2 = h.insertionPoints) == null ? void 0 : _d2.get(e);
    p && (Math.abs(p[0]) > 1e-9 || Math.abs(p[1]) > 1e-9) && t.push(`LATEROFFSET ${u(n(p[0]))} TRANSOFFSET ${u(n(p[1]))}`);
    const M = (_e3 = h.rigidOffsets) == null ? void 0 : _e3.get(e), $ = (_f2 = h.endOffsets) == null ? void 0 : _f2.get(e), N = $ ? [$[0], $[1]] : M, G = $ && $.length > 2 ? $[2] : 0;
    return N && (Math.abs(N[0]) > 1e-9 || Math.abs(N[1]) > 1e-9) && t.push(`LENGTHOFFI ${u(n(N[0]))} LENGTHOFFJ ${u(n(N[1]))} RIGIDZONE ${u(G)}`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, ke = [], Xe = /* @__PURE__ */ new Set(), Ye = /* @__PURE__ */ new Map();
  m.forEach((e, t) => {
    if (e.length !== 2) return;
    const a = $t(E, e);
    if (a === "BEAM") return;
    const r = E[e[0]][2] <= E[e[1]][2] ? e[0] : e[1], l = E[e[0]][2] <= E[e[1]][2] ? e[1] : e[0];
    if (Math.abs(E[r][0] - E[l][0]) > 1e-6 || Math.abs(E[r][1] - E[l][1]) > 1e-6) return;
    const p = Te(r), M = Ue.get(t) || `Sec_${t}`, $ = `${p.pt}_${M}_${a}`;
    Ye.has($) || Ye.set($, []), Ye.get($).push({ i: t, bot: r, top: l, zBot: u(E[r][2]), zTop: u(E[l][2]), planPt: p.pt, secName: M, type: a });
  }), Ye.forEach((e, t) => {
    e.sort((r, l) => r.zBot - l.zBot);
    let a = 0;
    for (let r = 1; r <= e.length; r++) if (r === e.length || Math.abs(e[r].zBot - e[r - 1].zTop) > 1e-6) {
      const p = e.slice(a, r);
      p.length >= 1 && (ke.push({ elemIndices: p.map((M) => M.i), planPt: p[0].planPt, bottomNodeIdx: p[0].bot, topNodeIdx: p[p.length - 1].top, secName: p[0].secName, type: p[0].type, nSegments: p.length }), p.forEach((M) => Xe.add(M.i))), a = r;
    }
  }), i.push("$ LINE CONNECTIVITIES");
  const qe = [], Qe = (e) => fe.indexOf(e), et = /* @__PURE__ */ new Map(), tt = (e, t, a, r, l, p, M, $) => {
    const N = Te(r), G = Te(a);
    $ !== void 0 && et.set($, { name: e, story: N.story });
    const d = Qe(N.story) - Qe(G.story);
    d <= 0 ? i.push(`  LINE  "${e}"  BEAM  "${G.pt}"  "${N.pt}"  0`) : i.push(`  LINE  "${e}"  ${t}  "${G.pt}"  "${N.pt}"  ${d}`), qe.push(`  LINEASSIGN  "${e}"  "${N.story}"  SECTION "${l}" ${p} MINNUMSTA ${M} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  ke.forEach((e, t) => {
    const a = Ve(e.elemIndices[0]);
    tt(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, a, e.nSegments);
  }), m.forEach((e, t) => {
    if (e.length !== 2 || Xe.has(t)) return;
    const a = $t(E, e), r = Ue.get(t) || `Sec_${t}`, l = Ve(t), p = E[e[0]][2] <= E[e[1]][2] ? e[0] : e[1], M = E[e[0]][2] <= E[e[1]][2] ? e[1] : e[0];
    tt(`E${t + 1}`, a === "BEAM" ? "BRACE" : a, p, M, r, l, 3, t);
  }), i.push("");
  const ge = A.weightMode ?? "auto", Oe = /* @__PURE__ */ new Set();
  i.push("$ POINT ASSIGNS"), (_b = O.supports) == null ? void 0 : _b.forEach((e, t) => {
    const a = [];
    if (e[0] && a.push("UX"), e[1] && a.push("UY"), e[2] && a.push("UZ"), e[3] && a.push("RX"), e[4] && a.push("RY"), e[5] && a.push("RZ"), a.length > 0) {
      const r = Te(t), l = r.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      i.push(`  POINTASSIGN  "${r.pt}"  "${r.story}"  RESTRAINT "${a.join(" ")}" ${l} `), Oe.add(`${r.pt}@${r.story}`);
    }
  });
  const st = (A.diaphragm ?? "auto") !== "none";
  st && ke.forEach((e) => {
    const t = Te(e.topNodeIdx), a = `${t.pt}@${t.story}`;
    !Oe.has(a) && t.story !== "Base" && (i.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), Oe.add(a));
  }), ge === "manual" && O.loads && O.loads.forEach((e, t) => {
    const [a, r, l] = _(t, e);
    if (Math.abs(a) < 1e-10 && Math.abs(r) < 1e-10 && Math.abs(l) < 1e-10) return;
    const p = Te(t), M = `${p.pt}@${p.story}`;
    Oe.has(M) || (i.push(`  POINTASSIGN  "${p.pt}"  "${p.story}"  DIAPH "DISCONNECTED"  `), Oe.add(M));
  }), i.push(""), i.push("$ LINE ASSIGNS"), qe.forEach((e) => i.push(e)), i.push("");
  const oe = [], nt = h.areaObjects, ot = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map();
  nt == null ? void 0 : nt.forEach((e) => e.cells.forEach((t) => ot.add(t))), m.forEach((e, t) => {
    if (e.length === 4 || e.length === 3) {
      const a = E[e[0]], r = E[e[1]], l = E[e[2]], p = [r[0] - a[0], r[1] - a[1], r[2] - a[2]], M = [l[0] - a[0], l[1] - a[1], l[2] - a[2]], $ = p[1] * M[2] - p[2] * M[1], N = p[2] * M[0] - p[0] * M[2], G = p[0] * M[1] - p[1] * M[0], d = Math.sqrt($ * $ + N * N + G * G), C = d > 1e-10 && Math.abs(G) / d < 0.5;
      oe.push({ idx: t, el: e, isWall: C }), ot.has(t) && oe.pop();
    }
  });
  const Ae = (() => {
    for (const [e, t] of Ce) if (!t) return me.get(e);
    return me.values().next().value || "Conc_1";
  })();
  nt == null ? void 0 : nt.forEach((e, t) => {
    oe.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && at.set(e.cells[0], e.q), e.ang !== void 0 && ct.set(e.cells[0], e.ang);
  });
  const Ne = "DECK";
  let xe = false;
  const He = [], it = (e) => {
    const t = A.elementInputs.plateFormulations, a = oe.find((l) => l.isWall === e), r = t && a ? t.get(a.idx) : void 0;
    return r === 2 ? "Membrane" : r === 1 ? "ShellThin" : "ShellThick";
  }, rt = (e, t) => {
    const a = A.elementInputs.thicknesses, r = oe.find((l) => l.isWall === e);
    return (r ? a == null ? void 0 : a.get(r.idx) : void 0) ?? (a == null ? void 0 : a.values().next().value) ?? t;
  }, lt = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], be = (e) => {
    var _a2;
    const a = (_a2 = h.shellModifiers) == null ? void 0 : _a2.get(e);
    if (a && a.length >= 8) return a.slice(0, 8);
    const r = h.membraneModifiers, l = h.bendingModifiers, p = r == null ? void 0 : r.get(e), M = l == null ? void 0 : l.get(e);
    if (p === void 0 && M === void 0) return null;
    const $ = p ?? 1, N = M ?? 1;
    return [$, $, $, N, N, N, N, N];
  }, Et = (e, t) => {
    const a = oe.filter((M) => M.isWall === t), r = /* @__PURE__ */ new Map();
    for (const M of a) {
      const $ = be(M.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      r.set($.map((N) => u(N)).join(","), $);
    }
    if (r.size === 0) return "";
    r.size > 1 && console.warn(`[e2k] "${e}": ${r.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const l = r.values().next().value, p = lt.map((M, $) => Math.abs(l[$] - 1) > 1e-9 ? `${M} ${u(l[$])}` : "").filter(Boolean);
    return p.length ? `  SHELLPROP  "${e}"  ${p.join(" ")} ` : "";
  }, ft = A.elementInputs.thicknesses, St = A.elementInputs.plateFormulations, Le = (e) => {
    const t = ft == null ? void 0 : ft.get(e.idx), a = St == null ? void 0 : St.get(e.idx), r = be(e.idx);
    return `${e.isWall ? "W" : "F"}|${t ?? "-"}|${a ?? "-"}|${r ? r.map((l) => u(l)).join(",") : "-"}|${Ie(e.idx)}`;
  }, We = (e) => {
    const t = be(e);
    return t ? Math.abs(t[3]) < 1e-9 && Math.abs(t[4]) < 1e-9 : false;
  }, Re = /* @__PURE__ */ new Map();
  let Rt = 0, Dt = 0, Ct = 0;
  for (const e of oe) {
    const t = Le(e);
    if (Re.has(t)) continue;
    const a = e.isWall, r = !a && We(e.idx), l = a ? ++Dt : r ? ++Ct : ++Rt, p = Ie(e.idx);
    Re.set(t, { nombre: (a ? "Muro" : r ? Ne : "Losa") + (l === 1 ? "" : String(l)), isWall: a, mem: r, t: ft == null ? void 0 : ft.get(e.idx), pf: St == null ? void 0 : St.get(e.idx), mat: me.get(p) ?? Ae, acero: Ce.get(p) ?? false });
  }
  const we = (e) => {
    var _a2;
    return ((_a2 = Re.get(Le(e))) == null ? void 0 : _a2.nombre) ?? (e.isWall ? "Muro" : "Losa");
  }, At = (e) => e === 2 ? "Membrane" : e === 1 ? "ShellThin" : "ShellThick", Pt = (e, t) => {
    const a = oe.find((p) => Le(p) === t), r = a ? be(a.idx) ?? null : null;
    if (!r) return "";
    const l = lt.map((p, M) => Math.abs(r[M] - 1) > 1e-9 ? `${p} ${u(r[M])}` : "").filter(Boolean);
    return l.length ? `  SHELLPROP  "${e}"  ${l.join(" ")} ` : "";
  }, Be = oe.find((e) => !e.isWall), pt = oe.find((e) => e.isWall), ve = /* @__PURE__ */ new Set();
  Be && ve.add(Le(Be)), pt && ve.add(Le(pt));
  const ht = [...Re.entries()].filter(([e]) => !ve.has(e));
  if (oe.some((e) => !e.isWall)) {
    xe = !!Be && We(Be.idx);
    const e = rt(false, 0.15);
    if (xe) {
      i.push("$ DECK PROPERTIES");
      const a = (l) => S(n(l)), r = [...Re.values()].find((l) => l.nombre === Ne);
      (r == null ? void 0 : r.acero) ? i.push(`  SHELLPROP  "${Ne}"  PROPTYPE  "Slab"  MATERIAL "${r.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${u(n(e))} `) : i.push(`  SHELLPROP  "${Ne}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Ae}"  DECKMATERIAL "${Ae}"  DECKSLABDEPTH ${a(e * 65 / 120)} DECKRIBDEPTH ${a(e * 55 / 120)} DECKRIBWIDTHTOP ${a(e * 150 / 120)} DECKRIBWIDTHBOTTOM ${a(e * 100 / 120)} DECKRIBSPACING ${a(e * 200 / 120)} DECKSHEARTHICKNESS ${a(e * 0.76 / 120)} DECKUNITWEIGHT ${S(c(0.11012))} SHEARSTUDDIAM ${a(e * 19 / 120)} SHEARSTUDHEIGHT ${a(e * 100 / 120)} SHEARSTUDFU 400 `);
    } else i.push("$ SLAB PROPERTIES"), i.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Ae}"  MODELINGTYPE "${it(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${u(n(e))} `);
    const t = Et(xe ? Ne : "Losa", false);
    t && i.push(t), i.push("");
  }
  if (oe.some((e) => e.isWall)) {
    i.push("$ WALL PROPERTIES");
    const e = rt(true, 0.2), t = it(true);
    i.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Ae}"  MODELINGTYPE "${t}"  WALLTHICKNESS ${u(n(e))} `);
    const a = Et("Muro", true);
    a && i.push(a), i.push("");
  }
  if (ht.length) {
    i.push("$ OTRAS SECCIONES DE CASCARA");
    for (const [e, t] of ht) {
      const a = t.t ?? (t.isWall ? 0.2 : 0.15), r = (p) => S(n(p));
      i.push(t.isWall ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Wall"  MATERIAL "${t.mat ?? Ae}"  MODELINGTYPE "${At(t.pf)}"  WALLTHICKNESS ${u(n(a))} ` : t.mem && t.acero ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Slab"  MATERIAL "${t.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${u(n(a))} ` : t.mem ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Ae}"  DECKMATERIAL "${Ae}"  DECKSLABDEPTH ${r(a * 65 / 120)} DECKRIBDEPTH ${r(a * 55 / 120)} DECKRIBWIDTHTOP ${r(a * 150 / 120)} DECKRIBWIDTHBOTTOM ${r(a * 100 / 120)} DECKRIBSPACING ${r(a * 200 / 120)} DECKSHEARTHICKNESS ${r(a * 0.76 / 120)} DECKUNITWEIGHT ${S(c(0.11012))} SHEARSTUDDIAM ${r(a * 19 / 120)} SHEARSTUDHEIGHT ${r(a * 100 / 120)} SHEARSTUDFU 400 ` : `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Slab"  MATERIAL "${Ae}"  MODELINGTYPE "${At(t.pf)}"  SLABTYPE "Slab"  SLABTHICKNESS ${u(n(a))} `);
      const l = Pt(t.nombre, e);
      l && i.push(l);
    }
    i.push("");
  }
  if (oe.length > 0) {
    i.push("$ AREA CONNECTIVITIES");
    const e = [];
    oe.forEach((t, a) => {
      const { el: r, isWall: l } = t, p = l ? `W${a + 1}` : `F${a + 1}`, M = l ? "PANEL" : "FLOOR", $ = r.map((N) => Te(N));
      if (l) {
        const N = (x) => fe.indexOf(x);
        if (new Set($.map((x) => x.pt)).size === 4) {
          const x = Math.max(...$.map((ue) => N(ue.story))), J = $.map((ue) => x - N(ue.story));
          i.push(`  AREA "${p}"  ${M}  4  "${$[0].pt}"  "${$[1].pt}"  "${$[2].pt}"  "${$[3].pt}"  ${J.join("  ")}  `), e.push(`  AREAASSIGN  "${p}"  "${fe[x]}"  SECTION "${we(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const d = E[r[0]][2] <= E[r[2]][2] ? 0 : 2, C = E[r[1]][2] <= E[r[3]][2] ? 1 : 3;
        i.push(`  AREA "${p}"  ${M}  4  "${$[d].pt}"  "${$[C].pt}"  "${$[C].pt}"  "${$[d].pt}"  1  1  0  0  `);
        const D = $[d === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${p}"  "${D}"  SECTION "${we(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        const N = $.length, G = (J) => fe.indexOf(J), d = Math.max(...$.map((J) => G(J.story))), C = $.map((J) => d - G(J.story)), D = fe[d] ?? $[0].story;
        i.push(`  AREA "${p}"  ${M}  ${N}  ` + $.map((J) => `"${J.pt}"`).join("  ") + "  " + C.join("  ") + "  ");
        const x = ct.get(t.idx) ?? (b == null ? void 0 : b.get(t.idx));
        e.push(We(t.idx) ? `  AREAASSIGN  "${p}"  "${D}"  SECTION "${we(t)}"  ANG ${u(x ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${p}"  "${D}"  SECTION "${we(t)}" ${st ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), He.push({ name: p, story: D, idx: t.idx });
      }
    }), i.push(""), i.push("$ AREA ASSIGNS"), e.forEach((t) => i.push(t)), i.push("");
  }
  const Ft = ge === "manual" ? 0 : H ?? 1;
  i.push("$ LOAD PATTERNS");
  const $e = ((_c = A.loadPatterns) == null ? void 0 : _c.length) ? A.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: Ft }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of $e) {
    let t;
    e.type === "Dead" ? t = ge === "manual" ? 0 : e.selfWeightMultiplier ?? H ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), i.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  i.push("");
  const de = A.loadPatternDestino && $e.some((e) => e.name === A.loadPatternDestino) ? A.loadPatternDestino : ((_d = $e.find((e) => e.type === "Dead")) == null ? void 0 : _d.name) ?? $e[0].name, ze = [], Je = /* @__PURE__ */ new Map(), Tt = (e, t) => {
    const a = Je.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let r = 0; r < 6; r++) a[r] += t[r] ?? 0;
    Je.set(e, a);
  }, yt = de === (((_e2 = $e.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? $e[0].name), Yt = ge === "manual" || !yt || X;
  if (O.loads && O.loads.size > 0 && O.loads.forEach((e, t) => {
    const [a, r, l] = _(t, e), [p, M, $] = ne(t, e);
    Tt(t, [a, r, Yt ? l : 0, p, M, $]);
  }), O.moments && O.moments.size > 0 && O.moments.forEach((e, t) => {
    Tt(t, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), Je.forEach((e, t) => {
    if (e.every((r) => Math.abs(r) <= 1e-10)) return;
    const a = Te(t);
    ze.push(`  POINTLOAD  "${a.pt}"  "${a.story}"  TYPE "FORCE"  LC "${de}"  FX ${S(g(e[0]))}  FY ${S(g(e[1]))}  FZ ${S(g(e[2]))}  MX ${S(P(e[3]))}  MY ${S(P(e[4]))}  MZ ${S(P(e[5]))}`);
  }), ze.length > 0 && (i.push("$ POINT OBJECT LOADS"), ze.forEach((e) => i.push(e)), i.push("")), X && se.size > 0) {
    const e = [];
    for (const t of se) {
      const a = Z.get(t), r = et.get(t);
      if (!r) continue;
      const l = (p) => S(c(p) / s);
      Math.abs(a[2]) > 1e-12 && e.push(`  LINELOAD  "${r.name}"  "${r.story}"  TYPE "UNIFF"  DIR "${a[2] < 0 ? "GRAV" : "Z"}"  LC "${de}"  FVAL ${l(Math.abs(a[2]))}`), Math.abs(a[0]) > 1e-12 && e.push(`  LINELOAD  "${r.name}"  "${r.story}"  TYPE "UNIFF"  DIR "X"  LC "${de}"  FVAL ${l(a[0])}`), Math.abs(a[1]) > 1e-12 && e.push(`  LINELOAD  "${r.name}"  "${r.story}"  TYPE "UNIFF"  DIR "Y"  LC "${de}"  FVAL ${l(a[1])}`);
    }
    e.length && (i.push("$ FRAME OBJECT LOADS"), e.forEach((t) => i.push(t)), i.push(""));
  }
  if (T && T.size > 0 && He.length > 0) {
    const e = [];
    for (const t of He) {
      const a = at.get(t.idx), r = a !== void 0 ? { value: a } : T.get(t.idx);
      if (!r || Math.abs(r.value) < 1e-12) continue;
      const l = r.dir ?? "GRAV", p = l === "GRAV" ? Math.abs(r.value) : r.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${l}"  LC "${r.pattern ?? de}"  FVAL ${S(c(p) / (s * s))}`);
    }
    e.length > 0 && (i.push("$ SHELL OBJECT LOADS"), e.forEach((t) => i.push(t)), i.push(""));
  }
  i.push("$ ANALYSIS OPTIONS"), i.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), i.push('  PDELTA  METHOD "NONE"  '), i.push("");
  const je = ge === "manual";
  i.push("$ MASS SOURCE"), i.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${je ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${je ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), je || i.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), i.push(""), i.push("$ LOAD CASES");
  const bt = ((_f = A.loadCases) == null ? void 0 : _f.length) ? A.loadCases : $e.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of bt) {
    i.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) i.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  const wt = A.modalModes ?? 12;
  i.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), i.push(`  LOADCASE "Modal"  MAXMODES ${wt}  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `), i.push("");
  const _e = A.loadCombinations;
  if (_e && _e.length) {
    i.push("$ LOAD COMBINATIONS");
    for (const e of _e) {
      i.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) i.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    i.push("");
  }
  return i.push("  END"), i.push("$ END OF MODEL FILE"), i.join(`\r
`);
}
function $t(A, E) {
  const m = A[E[0]], O = A[E[1]], h = Math.abs(O[2] - m[2]), w = Math.sqrt((O[0] - m[0]) ** 2 + (O[1] - m[1]) ** 2), U = h > w * 0.5;
  return U && w > 0.01 ? "BRACE" : U ? "COLUMN" : "BEAM";
}
export {
  _t as a,
  Kt as e,
  jt as p
};
