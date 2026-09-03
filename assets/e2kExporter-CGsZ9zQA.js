function w(I) {
  return I && parseFloat(I) || 0;
}
function Rt(I) {
  const f = /* @__PURE__ */ new Map(), O = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let R;
  for (; (R = O.exec(I)) !== null; ) f.set(R[1], R[2] !== void 0 ? R[2] : R[3]);
  return f;
}
function Vt(I) {
  const f = I.split(/\r?\n/);
  return f.some((R) => R.trim().startsWith("TABLE:")) ? Wt(f) : zt(f);
}
function Wt(I) {
  var _a, _b, _c, _d, _e, _f;
  const f = [];
  let O = "";
  for (const v of I) {
    const P = v.trimEnd();
    P.endsWith("_") ? O += P.slice(0, -1) + " " : (O += P, f.push(O), O = "");
  }
  O && f.push(O);
  const R = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const G = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), V = [], Z = [], Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = [], se = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), Te = [], r = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
  let u = "";
  for (const v of f) {
    const P = v.trim();
    if (!P || P.startsWith(";") || P.startsWith("File ")) continue;
    if (P.startsWith("TABLE:")) {
      const s = P.match(/TABLE:\s+"(.+?)"/);
      u = s ? s[1].toUpperCase() : "";
      continue;
    }
    if (P === "END TABLE DATA") {
      u = "";
      continue;
    }
    const i = Rt(P);
    switch (u) {
      case "PROGRAM CONTROL": {
        const s = i.get("CurrUnits");
        if (s) {
          const o = s.split(",").map((n) => n.trim());
          o[0] && (R.force = o[0]), o[1] && (R.length = o[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const s = i.get("Material");
        s && !G.has(s) && G.set(s, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const s = i.get("Material");
        if (s) {
          const o = G.get(s) || { E: 0, nu: 0, G: 0 };
          o.E = w(i.get("E1")), o.G = w(i.get("G12")), o.nu = w(i.get("U12")), o.density = w(i.get("UnitMass")), G.set(s, o);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const s = i.get("Material");
        s && G.has(s) && (G.get(s).fy = w(i.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const s = i.get("SectionName");
        s && S.set(s, { material: i.get("Material") || "", shape: i.get("Shape") || "Rectangular", D: w(i.get("t3")), B: w(i.get("t2")), TF: w(i.get("tf")), TW: w(i.get("tw")), A: w(i.get("Area")), Iz: w(i.get("I33")), Iy: w(i.get("I22")), J: w(i.get("TorsConst")), As2: w(i.get("AS2")), As3: w(i.get("AS3")) });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 09 - SHAPE BOX/TUBE": {
        const s = i.get("SectionName");
        s && x.set(s, { h: w(i.get("Height")), b: w(i.get("Width")), t: w(i.get("FlngThick")) || w(i.get("WebThick")), mat: i.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 10 - SHAPE PIPE": {
        const s = i.get("SectionName");
        s && x.set(s, { h: 0, b: 0, D: w(i.get("OuterDiam")), t: w(i.get("WallThick")), mat: i.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 13 - SHAPE SOLID CIRCLE": {
        const s = i.get("SectionName");
        s && q.set(s, { mat: i.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 12 - SHAPE SOLID RECTANGLE": {
        const s = i.get("SectionName");
        s && q.set(s, { mat: i.get("ShapeMat") || "" });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const s = i.get("Section");
        s && B.set(s, { material: i.get("Material") || "", type: i.get("Type") || "Shell", thickness: w(i.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const s = i.get("Joint");
        if (s) {
          const o = w(i.get("XorR")), n = w(i.get("Y")), E = w(i.get("Z"));
          X.set(s, [o, n, E]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const s = i.get("Frame"), o = i.get("JointI"), n = i.get("JointJ");
        s && o && n && V.push({ name: s, j1: o, j2: n });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const s = i.get("Area");
        if (s) {
          const o = parseInt(i.get("NumJoints") || "4"), n = [];
          for (let E = 1; E <= o; E++) {
            const d = i.get(`Joint${E}`);
            d && n.push(d);
          }
          n.length >= 3 && Z.push({ name: s, joints: n });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const s = i.get("Joint");
        if (s) {
          const o = [((_a = i.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = i.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = i.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = i.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = i.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = i.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          Q.set(s, o);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const s = i.get("Frame"), o = i.get("AnalSect");
        s && o && ee.set(s, o);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const s = i.get("Area"), o = i.get("Section");
        s && o && ae.set(s, o);
        break;
      }
      case "FRAME LOADS - DISTRIBUTED": {
        const s = i.get("Frame"), o = i.get("Dir"), n = w(i.get("FOverLA"));
        if (s && o && n) {
          const E = { X: 0, Y: 1, Z: 2 }[o];
          if (E !== void 0) {
            const d = fe.get(s) ?? [0, 0, 0];
            d[E] += n, fe.set(s, d);
          }
        }
        break;
      }
      case "CONNECTIVITY - SOLID": {
        const s = i.get("Solid");
        if (s) {
          const o = [];
          for (let n = 1; n <= 8; n++) {
            const E = i.get(`Joint${n}`);
            E && o.push(E);
          }
          o.length === 8 && Te.push({ name: s, joints: o });
        }
        break;
      }
      case "SOLID PROPERTY DEFINITIONS": {
        const s = i.get("SolidProp");
        s && r.set(s, { material: i.get("Material") || "", incomp: (i.get("InComp") || "Yes").toLowerCase().startsWith("y") });
        break;
      }
      case "SOLID PROPERTY ASSIGNMENTS": {
        const s = i.get("Solid"), o = i.get("SolidProp");
        s && o && $.set(s, o);
        break;
      }
      case "AREA STIFFNESS MODIFIERS": {
        const s = i.get("Area");
        s && ce.set(s, ["f11", "f22", "f12", "m11", "m22", "m12", "v13", "v23"].map((o) => i.has(o) ? w(i.get(o)) : 1));
        break;
      }
      case "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL": {
        const s = i.get("Frame");
        s && te.set(s, w(i.get("Angle")));
        break;
      }
      case "FRAME OFFSET ALONG LENGTH ASSIGNMENTS": {
        const s = i.get("Frame");
        s && se.set(s, [w(i.get("LengthI")), w(i.get("LengthJ")), w(i.get("RigidFactor"))]);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const s = i.get("Joint");
        s && ie.push({ joint: s, fx: w(i.get("F1")), fy: w(i.get("F2")), fz: w(i.get("F3")), mx: w(i.get("M1")), my: w(i.get("M2")), mz: w(i.get("M3")) });
        break;
      }
    }
  }
  return Dt(R, M, G, S, B, X, V, Z, Q, ee, ae, ie, se, te, ce, fe, Te, r, $, x, q);
}
function zt(I) {
  const f = { force: "KN", length: "m" };
  let O = "UX,UY,UZ,RX,RY,RZ";
  const R = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), q = [], S = [], B = /* @__PURE__ */ new Map(), X = [], V = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ae = [], ie = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map();
  let te = "", ce = "";
  for (const r of I) {
    const $ = r.trim();
    if (!$ || $.startsWith(";")) continue;
    if (!r.startsWith(" ") && !r.startsWith("	")) {
      const P = $.toUpperCase();
      if (P === "END") break;
      P.startsWith("SHELL SECTION") ? te = "SHELL SECTION" : P.startsWith("FRAME SECTION") ? te = "FRAME SECTION" : te = P.split(/\s+/)[0];
      continue;
    }
    const u = Rt($), v = $.split(/\s+/);
    switch (te) {
      case "SYSTEM": {
        const P = u.get("DOF");
        P && (O = P);
        const i = u.get("LENGTH");
        i && (f.length = i);
        const s = u.get("FORCE");
        s && (f.force = s);
        break;
      }
      case "JOINT": {
        const P = v[0];
        x.set(P, [w(u.get("X")), w(u.get("Y")), w(u.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const P = u.get("ADD"), i = u.get("DOF");
        if (P && i) {
          const s = i.split(","), o = [false, false, false, false, false, false];
          for (const n of s) {
            const E = n.toUpperCase();
            (E === "UX" || E === "U1") && (o[0] = true), (E === "UY" || E === "U2") && (o[1] = true), (E === "UZ" || E === "U3") && (o[2] = true), (E === "RX" || E === "R1") && (o[3] = true), (E === "RY" || E === "R2") && (o[4] = true), (E === "RZ" || E === "R3") && (o[5] = true);
          }
          B.set(P, o);
        }
        break;
      }
      case "MATERIAL": {
        const P = u.get("NAME");
        if (P) ce = P, R.set(P, { E: 0, nu: 0, G: 0 });
        else if (ce) {
          const i = R.get(ce), s = u.get("E");
          s && (i.E = w(s));
          const o = u.get("U");
          o && (i.nu = w(o)), i.G = i.E / (2 * (1 + i.nu));
          const n = u.get("M");
          n && (i.density = w(n));
        }
        break;
      }
      case "SHELL": {
        const P = v[0], i = u.get("J");
        u.get("SEC"), i && S.push({ name: P, joints: i.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const P = u.get("NAME");
        P && G.set(P, { material: u.get("MAT") || "", type: u.get("TYPE") || "Shell", thickness: w(u.get("TH")) });
        break;
      }
      case "FRAME": {
        const P = v[0], i = u.get("J");
        if (i) {
          const s = i.split(",");
          s.length >= 2 && q.push({ name: P, j1: s[0], j2: s[1] });
        }
        break;
      }
      case "LOAD": {
        const P = u.get("ADD");
        P && X.push({ joint: P, fx: w(u.get("UX")), fy: w(u.get("UY")), fz: w(u.get("UZ")), mx: w(u.get("MX")), my: w(u.get("MY")), mz: w(u.get("MZ")) });
        break;
      }
    }
  }
  return Dt(f, O, R, M, G, x, q, S, B, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), X, V, Z, Q, ee, ae, ie, se);
}
function Dt(I, f, O, R, M, G, x, q, S, B, X, V, Z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = [], se = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ce, fe) {
  var _a, _b;
  const Te = [], r = /* @__PURE__ */ new Map(), $ = [];
  for (const [m, p] of G) r.set(m, $.length), Te.push(m), $.push(p);
  const u = [], v = [], P = /* @__PURE__ */ new Map();
  for (const m of x) {
    const p = r.get(m.j1), y = r.get(m.j2);
    if (p !== void 0 && y !== void 0) {
      const L = u.length;
      u.push([p, y]), v.push(m.name);
      const D = B.get(m.name);
      D && P.set(L, D);
    }
  }
  const i = u.length;
  for (const m of q) {
    const p = m.joints.map((y) => r.get(y)).filter((y) => y !== void 0);
    if (p.length >= 3) {
      const y = u.length;
      u.push(p), v.push(m.name);
      const L = X.get(m.name);
      L && P.set(y, L);
    }
  }
  const s = u.length - i, o = [];
  for (const m of ie) {
    const p = m.joints.map((D) => r.get(D));
    if (p.some((D) => D === void 0)) continue;
    const y = u.length;
    u.push([p[0], p[1], p[3], p[2], p[4], p[5], p[7], p[6]]), v.push(m.name), o.push(y);
    const L = te.get(m.name);
    L && P.set(y, L);
  }
  const n = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, E = /* @__PURE__ */ new Map(), d = O.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let m = 0; m < u.length; m++) {
    const p = P.get(m), y = p ? R.get(p) : null, L = p ? M.get(p) : null;
    if (y || u[m].length === 2) {
      const D = y || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, W = O.get(D.material) || d, J = W.E || d.E, oe = W.nu || 0.3, j = W.G || J / (2 * (1 + oe));
      n.elasticities.set(m, J), n.shearModuli.set(m, j), n.areas.set(m, D.A || D.D * D.B), n.momentsOfInertiaZ.set(m, D.Iz || D.B * D.D ** 3 / 12), n.momentsOfInertiaY.set(m, D.Iy || D.D * D.B ** 3 / 12), n.torsionalConstants.set(m, D.J || 0), n.densities.set(m, W.density || 0), D.As2 && (n.shearAreasZ ?? (n.shearAreasZ = /* @__PURE__ */ new Map()), n.shearAreasZ.set(m, D.As2)), D.As3 && (n.shearAreasY ?? (n.shearAreasY = /* @__PURE__ */ new Map()), n.shearAreasY.set(m, D.As3));
      const z = Z.get(v[m]);
      z && (n.endOffsets ?? (n.endOffsets = /* @__PURE__ */ new Map()), n.endOffsets.set(m, z));
      const U = Q.get(v[m]);
      U && (n.localAngles ?? (n.localAngles = /* @__PURE__ */ new Map()), n.localAngles.set(m, U)), ((_a = D.shape) == null ? void 0 : _a.includes("Wide Flange")) || D.shape === "I" ? E.set(m, { type: "I", b: D.B, h: D.D, name: p || "I-section" }) : E.set(m, { type: "rect", b: D.B, h: D.D });
      const _ = p ? ce == null ? void 0 : ce.get(p) : void 0;
      if (_ && _.t > 0 && (_.b > 0 && _.h > 0 || (_.D ?? 0) > 0)) {
        const Se = p ? fe == null ? void 0 : fe.get(p) : void 0, re = Se && ((_b = O.get(Se.mat)) == null ? void 0 : _b.E) || 0;
        E.set(m, _.D ? { type: "CFT", d: _.D, tw: _.t, name: p, ...re > 0 ? { fillE: re } : {} } : { type: "CFT", b: _.b, h: _.h, tw: _.t, name: p, ...re > 0 ? { fillE: re } : {} });
      }
    } else if (L) {
      const D = O.get(L.material) || d, W = D.E || d.E, J = D.nu || 0.2, oe = D.G || W / (2 * (1 + J));
      n.elasticities.set(m, W), n.shearModuli.set(m, oe), n.thicknesses.set(m, L.thickness), n.poissonsRatios.set(m, J), n.plateFormulations ?? (n.plateFormulations = /* @__PURE__ */ new Map()), n.plateFormulations.set(m, /thin/i.test(L.type) ? 1 : 0);
      const j = ee.get(v[m]);
      j && (n.shellModifiers ?? (n.shellModifiers = /* @__PURE__ */ new Map()), n.shellModifiers.set(m, j), n.membraneModifiers ?? (n.membraneModifiers = /* @__PURE__ */ new Map()), n.membraneModifiers.set(m, j[0]), n.bendingModifiers ?? (n.bendingModifiers = /* @__PURE__ */ new Map()), n.bendingModifiers.set(m, j[3])), n.densities.set(m, D.density || 0);
    }
  }
  if (o.length) {
    let m = false;
    for (const p of o) {
      const y = se.get(P.get(p) || ""), L = y && O.get(y.material) || d, D = L.E || d.E, W = L.nu || 0.2;
      n.elasticities.set(p, D), n.poissonsRatios.set(p, W), n.shearModuli.set(p, L.G || D / (2 * (1 + W))), n.densities.set(p, L.density || 0), (y == null ? void 0 : y.incomp) && (m = true);
    }
    n.solidIncompatible = m;
  }
  const Y = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() };
  for (const [m, p] of S) {
    const y = r.get(m);
    y !== void 0 && Y.supports.set(y, p);
  }
  for (const [m, p] of ae) {
    const y = v.indexOf(m);
    if (y < 0 || u[y].length !== 2) continue;
    n.frameLoads ?? (n.frameLoads = /* @__PURE__ */ new Map()), n.frameLoads.set(y, p);
    const L = $[u[y][0]], D = $[u[y][1]], W = [D[0] - L[0], D[1] - L[1], D[2] - L[2]], J = Math.hypot(W[0], W[1], W[2]);
    if (J < 1e-9) continue;
    const oe = [W[0] / J, W[1] / J, W[2] / J], j = J * J / 12, z = [oe[1] * p[2] - oe[2] * p[1], oe[2] * p[0] - oe[0] * p[2], oe[0] * p[1] - oe[1] * p[0]], U = (_, Se) => {
      const re = Y.loads.get(_) || [0, 0, 0, 0, 0, 0];
      for (let Ae = 0; Ae < 6; Ae++) re[Ae] += Se[Ae];
      Y.loads.set(_, re);
    };
    U(u[y][0], [p[0] * J / 2, p[1] * J / 2, p[2] * J / 2, j * z[0], j * z[1], j * z[2]]), U(u[y][1], [p[0] * J / 2, p[1] * J / 2, p[2] * J / 2, -j * z[0], -j * z[1], -j * z[2]]);
  }
  for (const m of V) {
    const p = r.get(m.joint);
    if (p !== void 0) {
      const y = Y.loads.get(p) || [0, 0, 0, 0, 0, 0];
      y[0] += m.fx, y[1] += m.fy, y[2] += m.fz, y[3] += m.mx, y[4] += m.my, y[5] += m.mz, Y.loads.set(p, y);
    }
  }
  return { units: I, dof: f, materials: O, frameSections: R, shellSections: M, nodes: $, nodeNames: Te, nodeNameToIdx: r, elements: u, elementNames: v, elementSections: P, nodeInputs: Y, elementInputs: n, sectionShapes: E, info: { nNodes: $.length, nFrames: i, nShells: s, title: `SAP2000 (${i} frames, ${s} shells)` } };
}
function qt(I) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { nodes: f, elements: O, nodeInputs: R, elementInputs: M } = I, G = { force: "KN", length: "m" };
  I.units && (I.units.force !== "KN" || I.units.length !== "m") && console.warn(`[s2k] el modelo va en kN\xB7m y el exportador NO convierte: se declara CurrUnits="KN, m, C" y se ignora "${I.units.force}, ${I.units.length}". Etiquetarlo de otra forma hace que SAP2000 lea las fuerzas escaladas.`);
  const x = I.title || "Awatif Model", q = [], S = (s) => q.push(s), B = () => q.push(" ");
  S(`File ${x}.$2k was saved on m/d/yy at h:mm:ss`), B(), S('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), S("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), B();
  const X = [], V = (s) => {
    var _a2, _b2, _c2, _d2;
    const o = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(s)) || 0, n = (_b2 = M.poissonsRatios) == null ? void 0 : _b2.get(s), E = ((_c2 = M.shearModuli) == null ? void 0 : _c2.get(s)) || 0, d = n !== void 0 ? n : o > 0 && E > 0 ? Math.max(0, Math.min(0.5, o / (2 * E) - 1)) : 0.2, Y = E > 0 ? E : o > 0 ? o / (2 * (1 + d)) : 0, m = ((_d2 = M.densities) == null ? void 0 : _d2.get(s)) || 0;
    return { E: o, nu: d, G: Y, rho: m, key: `MAT_${Math.round(o)}_n${d.toFixed(4)}` };
  }, Z = [], Q = [];
  if (O.forEach((s, o) => {
    s.length === 2 ? X.push(o) : s.length === 8 ? Q.push(o) : Z.push(o);
  }), X.length > 0) {
    S('TABLE:  "CONNECTIVITY - FRAME"');
    for (const s of X) {
      const o = O[s];
      S(`   Frame=${s + 1}   JointI=${o[0] + 1}   JointJ=${o[1] + 1}   IsCurved=No`);
    }
    B();
  }
  if (Z.length > 0) {
    S('TABLE:  "CONNECTIVITY - AREA"');
    for (const s of Z) {
      const o = O[s], n = o.map((E, d) => `Joint${d + 1}=${E + 1}`).join("   ");
      S(`   Area=${s + 1}   NumJoints=${o.length}   ${n}`);
    }
    B();
  }
  if (Q.length > 0) {
    S('TABLE:  "CONNECTIVITY - SOLID"');
    for (const s of Q) {
      const o = O[s], n = [o[0], o[1], o[3], o[2], o[4], o[5], o[7], o[6]];
      S(`   Solid=${s + 1}   ${n.map((E, d) => `Joint${d + 1}=${E + 1}`).join("   ")}`);
    }
    B();
  }
  S('TABLE:  "COORDINATE SYSTEMS"'), S("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), B(), S('TABLE:  "DATABASE FORMAT TYPES"'), S("   UnitsCurr=Yes   OverrideE=No"), B();
  const ee = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
  for (const s of X) {
    const o = ((_a = M.areas) == null ? void 0 : _a.get(s)) || 0, n = ((_b = M.momentsOfInertiaZ) == null ? void 0 : _b.get(s)) || 0, E = ((_c = M.momentsOfInertiaY) == null ? void 0 : _c.get(s)) || 0, d = ((_d = M.torsionalConstants) == null ? void 0 : _d.get(s)) || 0, Y = ((_e = M.elasticities) == null ? void 0 : _e.get(s)) || 0, m = V(s).key, p = ((_f = M.shearAreasZ) == null ? void 0 : _f.get(s)) ?? 0, y = ((_g = M.shearAreasY) == null ? void 0 : _g.get(s)) ?? 0, L = (_h = M.sectionShapes) == null ? void 0 : _h.get(s);
    let D;
    const W = (L == null ? void 0 : L.type) === "CFT" && L.d > 0 && L.tw > 0 && L.tw < L.d / 2 && !(L.b > 0 && L.h > 0);
    if (I.cftAs !== "general" && (L == null ? void 0 : L.type) === "CFT" && Y > 0 && (W || L.b > 0 && L.h > 0 && L.tw > 0 && L.tw < Math.min(L.b, L.h) / 2)) {
      const j = W ? L.d - 2 * L.tw : 0, z = W ? 0 : L.b - 2 * L.tw, U = W ? 0 : L.h - 2 * L.tw, _ = W ? Math.PI * (L.d * L.d - j * j) / 4 : L.b * L.h - z * U, Se = W ? Math.PI * j * j / 4 : z * U, re = L.fillE > 0 ? L.fillE / Y : Math.max(0.01, Math.min(1, (o - _) / Se)), Ae = re * Y, ue = 0.2, Me = `MAT_${Math.round(Ae)}_n${ue.toFixed(4)}`, ye = V(s).rho;
      ae.has(Me) || ae.set(Me, { E: Ae, nu: ue, G: Ae / (2 * (1 + ue)), rho: ye * re }), D = W ? { b: L.d, h: L.d, t: L.tw, Ec: Ae, nuC: ue, matFill: Me, D: L.d } : { b: L.b, h: L.h, t: L.tw, Ec: Ae, nuC: ue, matFill: Me };
    }
    const J = `A${o.toPrecision(6)}_Iz${n.toPrecision(6)}_s${p.toPrecision(6)}_${y.toPrecision(6)}${D ? D.D ? `_SDC${D.D}x${D.t}` : `_SD${D.b}x${D.h}x${D.t}` : ""}`;
    if (!ee.has(J)) {
      let j = 0.3, z = 0.3;
      o > 0 && n > 0 && (j = Math.sqrt(12 * n / o), z = o / j), ee.set(J, { A: o, Iz: n, Iy: E, J: d, b: z, h: j, matKey: m, As2: p > 0 ? p : o * 5 / 6, As3: y > 0 ? y : o * 5 / 6, sd: D });
    }
    const oe = [...ee.keys()].indexOf(J) + 1;
    ie.set(s, `SEC${oe}`);
  }
  if (X.length > 0) {
    S('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const s of X) {
      const o = ie.get(s) || "SEC1";
      S(`   Frame=${s + 1}   AutoSelect=N.A.   AnalSect=${o}   MatProp=Default`);
    }
    B();
  }
  if (ee.size > 0) {
    S('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let s = 0;
    for (const [, o] of ee) {
      if (s++, o.sd) {
        S(`   SectionName=SEC${s}   Material=${o.matKey}   Shape="SD Section"   Area=${C(o.A)}   TorsConst=${C(o.J)}   I33=${C(o.Iz)}   I22=${C(o.Iy)}   I23=0   AS2=${C(o.As2)}   AS3=${C(o.As3)} _`), S("        Color=Cyan   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
        continue;
      }
      S(`   SectionName=SEC${s}   Material=${o.matKey}   Shape=General   t3=${C(o.h)}   t2=${C(o.b)}   Area=${C(o.A)}   TorsConst=${C(o.J)}   I33=${C(o.Iz)}   I22=${C(o.Iy)}   I23=0   AS2=${C(o.As2)}   AS3=${C(o.As3)} _`), S("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    B();
  }
  const se = [...ee.values()].map((s, o) => ({ sec: s, name: `SEC${o + 1}` })).filter((s) => s.sec.sd);
  if (se.length > 0) {
    S('TABLE:  "SECTION DESIGNER PROPERTIES 01 - GENERAL"');
    for (const { name: n } of se) S(`   SectionName=${n}   DesignType="No Check/Design"   DsgnOrChck=Check   IncludeVStr=No   AxisAngle=90   MeshSzAbs=0   MeshSzRel=0.05`);
    B();
    const s = se.filter((n) => !n.sec.sd.D), o = se.filter((n) => n.sec.sd.D);
    if (s.length > 0) {
      S('TABLE:  "SECTION DESIGNER PROPERTIES 09 - SHAPE BOX/TUBE"');
      for (const { sec: n, name: E } of s) {
        const d = n.sd;
        S(`   SectionName=${E}   ShapeName=TUBO   ShapeType="User Defined"   ShapeMat=${n.matKey}   ZOrder=1   FillColor=Gray4   XCenter=0   YCenter=0   Height=${C(d.h)}   Width=${C(d.b)}   FlngThick=${C(d.t)}   WebThick=${C(d.t)}   Rotation=0 _`), S('        CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0   DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0');
      }
      B();
    }
    if (o.length > 0) {
      S('TABLE:  "SECTION DESIGNER PROPERTIES 10 - SHAPE PIPE"');
      for (const { sec: n, name: E } of o) {
        const d = n.sd;
        S(`   SectionName=${E}   ShapeName=TUBO   ShapeType="User Defined"   ShapeMat=${n.matKey}   ZOrder=1   FillColor=Gray4   XCenter=0   YCenter=0   OuterDiam=${C(d.D)}   WallThick=${C(d.t)}   CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0 _`), S("        DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0");
      }
      B();
    }
    if (s.length > 0) {
      S('TABLE:  "SECTION DESIGNER PROPERTIES 12 - SHAPE SOLID RECTANGLE"');
      for (const { sec: n, name: E } of s) {
        const d = n.sd;
        S(`   SectionName=${E}   ShapeName=RELLENO   ShapeMat=${d.matFill}   ZOrder=2   FillColor=Gray4   XCenter=0   YCenter=0   Height=${C(d.h - 2 * d.t)}   Width=${C(d.b - 2 * d.t)}   Rotation=0   Reinforcing=No   CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0 _`), S("        DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0");
      }
      B();
    }
    if (o.length > 0) {
      S('TABLE:  "SECTION DESIGNER PROPERTIES 13 - SHAPE SOLID CIRCLE"');
      for (const { sec: n, name: E } of o) {
        const d = n.sd;
        S(`   SectionName=${E}   ShapeName=RELLENO   ShapeMat=${d.matFill}   ZOrder=2   FillColor=Gray4   XCenter=0   YCenter=0   Diameter=${C(d.D - 2 * d.t)}   Reinforcing=No   CoreDim="Program Determined"   BCoreMajor=0   DCoreMajorPositive=0`);
      }
      B();
    }
    S('TABLE:  "SECTION DESIGNER PROPERTIES 30 - FIBER GENERAL"');
    for (const { name: n } of se) S(`   SectionName=${n}   NumFibersD2=3   NumFibersD3=3   CoordSys=Cartesian   GridAngle=0   LumpRebar=No   FiberPMM=No   FiberMC=No`);
    B();
  }
  {
    const s = X.filter((o) => {
      var _a2;
      const n = (_a2 = M.localAngles) == null ? void 0 : _a2.get(o);
      return n !== void 0 && isFinite(n) && Math.abs(n) > 1e-9;
    });
    if (s.length > 0) {
      S('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const o of s) S(`   Frame=${o + 1}   Angle=${C(M.localAngles.get(o))}   AdvanceAxes=No`);
      B();
    }
  }
  {
    const s = M.endOffsets, o = X.filter((n) => {
      const E = s == null ? void 0 : s.get(n);
      return !!E && (Math.abs(E[0]) > 1e-9 || Math.abs(E[1]) > 1e-9);
    });
    if (o.length > 0) {
      S('TABLE:  "FRAME OFFSET ALONG LENGTH ASSIGNMENTS"');
      for (const n of o) {
        const E = s.get(n);
        S(`   Frame=${n + 1}   Type=User   LengthI=${C(E[0])}   LengthJ=${C(E[1])}   RigidFactor=${C(E.length > 2 ? E[2] : 0)}`);
      }
      B();
    }
  }
  const te = !!I.layeredSection && Z.length > 0, ce = I.layeredSection, fe = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
  if (!te) for (const s of Z) {
    const o = ((_i = M.thicknesses) == null ? void 0 : _i.get(s)) || 0.1;
    (_j = M.elasticities) == null ? void 0 : _j.get(s);
    const n = V(s).key, E = ((_k = M.plateFormulations) == null ? void 0 : _k.get(s)) ?? 0, d = `t${o.toPrecision(6)}_f${E}`;
    fe.has(d) || fe.set(d, { t: o, matKey: n, formulacion: E });
    const Y = [...fe.keys()].indexOf(d) + 1;
    Te.set(s, `SSEC${Y}`);
  }
  if (Z.length > 0) {
    S('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const n of Z) {
      const E = te ? ce.name : Te.get(n) || "SSEC1";
      S(`   Area=${n + 1}   Section=${E}   MatProp=Default`);
    }
    B();
    const s = M.shellModifiers, o = Z.filter((n) => {
      const E = s == null ? void 0 : s.get(n);
      return E && E.some((d) => Math.abs(d - 1) > 1e-12);
    });
    if (o.length > 0) {
      S('TABLE:  "AREA STIFFNESS MODIFIERS"');
      for (const n of o) {
        const E = s.get(n);
        S(`   Area=${n + 1}   f11=${C(E[0])}   f22=${C(E[1])}   f12=${C(E[2])}   m11=${C(E[3])}   m22=${C(E[4])}   m12=${C(E[5])}   v13=${C(E[6])}   v23=${C(E[7])}   MassMod=1   WeightMod=1`);
      }
      B();
    }
    if (S('TABLE:  "AREA SECTION PROPERTIES"'), te) {
      const n = ce, E = ((_l = n.layers[0]) == null ? void 0 : _l.material) || "MAT_DEFAULT";
      S(`   Section=${n.name}   Material=${E}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${C(n.totalThickness)}   BendThick=${C(n.totalThickness)}   Color=Magenta`);
    } else {
      let n = 0;
      for (const [, E] of fe) {
        n++;
        const d = E.formulacion === 2 ? "Membrane" : E.formulacion === 3 ? "Plate-Thin" : E.formulacion === 4 ? "Plate-Thick" : E.formulacion === 1 ? "Shell-Thin" : "Shell-Thick", Y = E.formulacion === 3 || E.formulacion === 4 ? "No" : "Yes";
        S(`   Section=SSEC${n}   Material=${E.matKey}   MatAngle=0   AreaType=Shell   Type=${d}   DrillDOF=${Y}   Thickness=${C(E.t)}   BendThick=${C(E.t)}   Color=Cyan`);
      }
    }
    if (B(), te) {
      S('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const n = ce;
      for (const E of n.layers) {
        const d = E.angle ?? 0, Y = E.numIntPts ?? 3;
        S(`   Section=${n.name}   LayerName=${E.name}   Distance=${C(E.distance)}   Thickness=${C(E.thickness)}   Type=Shell   NumIntPts=${Y}   Material=${E.material}   MatAngle=${C(d * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      B();
    }
  }
  S('TABLE:  "JOINT COORDINATES"');
  for (let s = 0; s < f.length; s++) {
    const o = f[s];
    S(`   Joint=${s + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${C(o[0])}   Y=${C(o[1])}   Z=${C(o[2])}   SpecialJt=No`);
  }
  if (B(), R.supports && R.supports.size > 0) {
    S('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [s, o] of R.supports) {
      if (!o.some((E) => E)) continue;
      const n = (E) => E ? "Yes" : "No";
      S(`   Joint=${s + 1}   U1=${n(o[0])}   U2=${n(o[1])}   U3=${n(o[2])}   R1=${n(o[3])}   R2=${n(o[4])}   R3=${n(o[5])}`);
    }
    B();
  }
  const r = R.diaphragms;
  if (r && r.size > 0) {
    const s = /* @__PURE__ */ new Map();
    for (const [n, E] of r) {
      const d = Math.round(E);
      if (d === 0) continue;
      const Y = Math.abs(d);
      s.has(Y) || s.set(Y, []), s.get(Y).push(n);
    }
    const o = [...s].filter(([, n]) => n.length >= 2);
    if (o.length > 0) {
      S('TABLE:  "CONSTRAINT DEFINITIONS - DIAPHRAGM"');
      for (const [n] of o) S(`   Name=DIAPH${n}   CoordSys=GLOBAL   Axis=Z`);
      B(), S('TABLE:  "JOINT CONSTRAINT ASSIGNMENTS"');
      for (const [n, E] of o) for (const d of E) S(`   Joint=${d + 1}   Constraint=DIAPH${n}`);
      B();
    }
  }
  const $ = I.selfWtMult ?? 1;
  S('TABLE:  "LOAD PATTERN DEFINITIONS"'), S(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${$}`), B(), S('TABLE:  "LOAD CASE DEFINITIONS"'), S('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), B(), S('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), S('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), B();
  const u = M.frameLoads, v = /* @__PURE__ */ new Map();
  if ((_m = R.loads) == null ? void 0 : _m.forEach((s, o) => v.set(o, [...s])), u && u.size > 0) {
    const s = (o, n) => {
      const E = v.get(o) ?? [0, 0, 0, 0, 0, 0];
      v.set(o, E.map((d, Y) => d - n[Y]));
    };
    for (const [o, n] of u) {
      const E = O[o];
      if (!E || E.length !== 2) continue;
      const d = f[E[0]], Y = f[E[1]], m = [Y[0] - d[0], Y[1] - d[1], Y[2] - d[2]], p = Math.hypot(m[0], m[1], m[2]);
      if (p < 1e-9) continue;
      const y = [m[0] / p, m[1] / p, m[2] / p], L = p * p / 12, D = [y[1] * n[2] - y[2] * n[1], y[2] * n[0] - y[0] * n[2], y[0] * n[1] - y[1] * n[0]];
      s(E[0], [n[0] * p / 2, n[1] * p / 2, n[2] * p / 2, L * D[0], L * D[1], L * D[2]]), s(E[1], [n[0] * p / 2, n[1] * p / 2, n[2] * p / 2, -L * D[0], -L * D[1], -L * D[2]]);
    }
  }
  if (v.size > 0) {
    S('TABLE:  "JOINT LOADS - FORCE"');
    for (const [s, o] of v) o.some((n) => Math.abs(n) > 1e-12) && S(`   Joint=${s + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${C(o[0])}   F2=${C(o[1])}   F3=${C(o[2])}   M1=${C(o[3])}   M2=${C(o[4])}   M3=${C(o[5])}`);
    B();
  }
  const P = M.frameLoads;
  if (P && P.size > 0) {
    S('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [s, o] of P) {
      const n = O[s];
      if (!n || n.length !== 2) continue;
      const E = f[n[0]], d = f[n[1]], Y = Math.hypot(d[0] - E[0], d[1] - E[1], d[2] - E[2]);
      ["X", "Y", "Z"].forEach((m, p) => {
        Math.abs(o[p]) < 1e-12 || S(`   Frame=${s + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${m}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${C(Y)}   FOverLA=${C(o[p])}   FOverLB=${C(o[p])}`);
      });
    }
    B();
  }
  const i = /* @__PURE__ */ new Map();
  for (let s = 0; s < O.length; s++) {
    const { E: o, nu: n, G: E, rho: d, key: Y } = V(s);
    i.has(Y) || i.set(Y, { E: o, nu: n, G: E, rho: d });
  }
  if (Q.length > 0) {
    const s = M.solidIncompatible === false ? "No" : "Yes", o = /* @__PURE__ */ new Map();
    for (const n of Q) {
      const { E, nu: d, G: Y, rho: m, key: p } = V(n);
      i.has(p) || i.set(p, { E, nu: d, G: Y, rho: m }), o.has(p) || o.set(p, `SOL${o.size + 1}`);
    }
    S('TABLE:  "SOLID PROPERTY DEFINITIONS"');
    for (const [n, E] of o) S(`   SolidProp=${E}   Material=${n}   MatAngleA=0   MatAngleB=0   MatAngleC=0   InComp=${s}   Color=Yellow`);
    B(), S('TABLE:  "SOLID PROPERTY ASSIGNMENTS"');
    for (const n of Q) S(`   Solid=${n + 1}   SolidProp=${o.get(V(n).key)}`);
    B();
  }
  for (const [s, o] of ae) i.has(s) || i.set(s, o);
  S('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [s] of i) S(`   Material=${s}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  B(), S('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [s, o] of i) S(`   Material=${s}   UnitWeight=${C(o.rho * 9.81)}   UnitMass=${C(o.rho)}   E1=${C(o.E)}   G12=${C(o.G)}   U12=${C(o.nu)}   A1=9.9E-06`);
  B(), S('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [s] of i) S(`   Material=${s}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return B(), S('TABLE:  "PROGRAM CONTROL"'), S(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${G.force}, ${G.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), B(), S("END TABLE DATA"), S(""), q.join(`\r
`);
}
function C(I) {
  return I === 0 || Math.abs(I) < 1e-15 ? "0" : Math.abs(I) >= 1e6 || Math.abs(I) < 1e-3 && Math.abs(I) > 0 ? I.toExponential(8) : parseFloat(I.toPrecision(10)).toString();
}
function jt(I, f, O = 0.05) {
  const R = f.map(([M, G]) => `${(+M).toFixed(4)} ${(+G).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${I}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${O}  SPECTYPE "USER"  `, `  FUNCTION "${I}"  TIMEVAL "${R}"  `];
}
function _t(I) {
  const { name: f, func: O, modalCase: R = "Modal", sfX: M = 9.81, sfY: G = 9.81 } = I, x = [`  LOADCASE "${f}"  TYPE  "Response Spectrum"  MODALCASE  "${R}"  `];
  return M && x.push(`  LOADCASE "${f}"  ACCEL  "U1"  FUNC  "${O}"  SF  ${M}  `), G && x.push(`  LOADCASE "${f}"  ACCEL  "U2"  FUNC  "${O}"  SF  ${G}  `), x;
}
function Nt(I) {
  const { name: f = "Modal", ritz: O = false, nModes: R = 12 } = I;
  return O ? [`  LOADCASE "${f}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${f}"  MAXMODES  ${R} MINMODES  1 `, `  LOADCASE "${f}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${f}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${f}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${f}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${f}"  MAXMODES  ${R} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function Qt(I) {
  var _a;
  const f = (_a = I.e2kModel) == null ? void 0 : _a.rawSections;
  let O = f && f.size > 0 ? Kt(f, I.e2kModel) : Zt(I);
  return I.seismicNEC && (O = Jt(O, I.seismicNEC)), O;
}
function Jt(I, f) {
  const O = I.includes(`\r
`) ? `\r
` : `
`, R = I.split(/\r?\n/), M = f.name ?? "NEC", G = jt(M, f.points, f.dampRatio ?? 0.05), x = f.modalCase ?? "Modal", q = _t({ name: f.caseName ?? "Sismo NEC", func: M, modalCase: x, sfX: f.sfX, sfY: f.sfY });
  let S = [];
  const B = (X) => R.some((V) => X.test(V));
  if (f.modal) {
    const X = new RegExp(`^\\s*LOADCASE\\s+"${x}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let V = R.length - 1; V >= 0; V--) X.test(R[V]) && R.splice(V, 1);
    S = Nt({ name: x, ritz: !!f.modal.ritz, nModes: f.modal.nModes });
  } else B(new RegExp(`LOADCASE\\s+"${x}"\\s+TYPE\\s+"Modal`)) || (S = Nt({ name: x }));
  return Ot(R, "FUNCTIONS", G), Ot(R, "LOAD CASES", [...S, ...q]), R.join(O);
}
function Ot(I, f, O) {
  const R = I.findIndex((x) => x.trim() === `$ ${f}`);
  if (R >= 0) {
    I.splice(R + 1, 0, ...O);
    return;
  }
  const M = I.findIndex((x) => x.trim() === "END"), G = M >= 0 ? M : I.length;
  I.splice(G, 0, `$ ${f}`, ...O, "");
}
function Kt(I, f) {
  const O = [], R = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  O.push("$ File exported from Hekatan Struct Lineal (round-trip)"), O.push("");
  for (const M of R) {
    const G = I.get(M);
    if (!(!G || G.length === 0)) {
      O.push(`$ ${M}`);
      for (const x of G) O.push(x);
      O.push("");
    }
  }
  for (const [M, G] of I) if (!R.includes(M) && G.length !== 0) {
    O.push(`$ ${M}`);
    for (const x of G) O.push(x);
    O.push("");
  }
  return O.push("  END"), O.push("$ END OF MODEL FILE"), O.join(`\r
`);
}
function Zt(I) {
  var _a, _b, _c, _d, _e2, _f, _g;
  const { nodes: f, elements: O, nodeInputs: R, elementInputs: M, title: G, units: x } = I, q = I.shellLoads ?? M.shellSurfaceLoads;
  let S;
  q instanceof Map && (S = /* @__PURE__ */ new Map(), q.forEach((e, t) => {
    S.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const B = I.shellAngles ?? M.shellAngles, X = M.cargaDeArea, V = !!(S && S.size > 0), Z = M.selfWeight, Q = M.frameLoads, ee = (I.weightMode ?? "auto") === "auto" && Z !== void 0, ae = /* @__PURE__ */ new Map(), ie = (e, t) => {
    const a = ae.get(e) ?? [0, 0, 0, 0, 0, 0];
    ae.set(e, a.map((c, l) => c + t[l]));
  }, se = /* @__PURE__ */ new Set();
  if (ee) {
    if (Q) for (const [e, t] of Q) {
      const a = O[e];
      if (!a || a.length !== 2) continue;
      const c = f[a[0]], l = f[a[1]], A = [l[0] - c[0], l[1] - c[1], l[2] - c[2]], h = Math.hypot(A[0], A[1], A[2]);
      if (h < 1e-9) continue;
      const T = [A[0] / h, A[1] / h, A[2] / h], g = h * h / 12, k = [T[1] * t[2] - T[2] * t[1], T[2] * t[0] - T[0] * t[2], T[0] * t[1] - T[1] * t[0]];
      ie(a[0], [t[0] * h / 2, t[1] * h / 2, t[2] * h / 2, g * k[0], g * k[1], g * k[2]]), ie(a[1], [t[0] * h / 2, t[1] * h / 2, t[2] * h / 2, -g * k[0], -g * k[1], -g * k[2]]), se.add(e);
    }
    if (Z && Z > 0) {
      const t = M.endOffsets;
      O.forEach((a, c) => {
        var _a2, _b2, _c2;
        const l = ((_a2 = M.densities) == null ? void 0 : _a2.get(c)) ?? 0;
        if (l) {
          if (a.length === 2) {
            const A = ((_b2 = M.areas) == null ? void 0 : _b2.get(c)) ?? 0, h = f[a[0]], T = f[a[1]], g = [T[0] - h[0], T[1] - h[1], T[2] - h[2]];
            let k = Math.hypot(g[0], g[1], g[2]);
            const N = t == null ? void 0 : t.get(c);
            if (N) {
              const F = Math.hypot(g[0], g[1]);
              F > 1e-9 && Math.abs(Math.atan2(Math.abs(g[2]), F)) * 180 / Math.PI < 20 && (k = Math.max(k - N[0] - N[1], 0));
            }
            const b = A * k * l * 9.80665 * Z;
            ie(a[0], [0, 0, -b / 2, 0, 0, 0]), ie(a[1], [0, 0, -b / 2, 0, 0, 0]);
          } else if (a.length === 4) {
            const A = ((_c2 = M.thicknesses) == null ? void 0 : _c2.get(c)) ?? 0, h = a.map((F) => f[F]);
            let T = 0, g = 0, k = 0;
            for (let F = 0; F < 4; F++) {
              const H = h[F], K = h[(F + 1) % 4];
              T += H[1] * K[2] - H[2] * K[1], g += H[2] * K[0] - H[0] * K[2], k += H[0] * K[1] - H[1] * K[0];
            }
            const N = Math.hypot(T, g, k) / 2, b = A * N * l * 9.80665 * Z;
            for (const F of a) ie(F, [0, 0, -b / 4, 0, 0, 0]);
          }
        }
      });
    }
  }
  const te = (e, t) => {
    const a = ae.get(e);
    return [t[0] - ((a == null ? void 0 : a[0]) ?? 0), t[1] - ((a == null ? void 0 : a[1]) ?? 0), t[2] - (V ? (X == null ? void 0 : X.get(e)) ?? 0 : 0) - ((a == null ? void 0 : a[2]) ?? 0)];
  }, ce = (e, t) => {
    const a = ae.get(e);
    return [(t[3] ?? 0) - ((a == null ? void 0 : a[3]) ?? 0), (t[4] ?? 0) - ((a == null ? void 0 : a[4]) ?? 0), (t[5] ?? 0) - ((a == null ? void 0 : a[5]) ?? 0)];
  }, fe = "N", Te = "MM", r = [], $ = (e) => Math.round(e * 1e4) / 1e4, u = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), v = 1e3, P = 1e3, i = (e) => e * P, s = (e) => e * v, o = (e) => e * v, n = (e) => e * v * P, E = (e) => e * v / P ** 2, d = (e) => e * v / P ** 3, Y = /* @__PURE__ */ new Date(), m = `${Y.getMonth() + 1}/${Y.getDate()}/${Y.getFullYear()}  ${Y.getHours()}:${String(Y.getMinutes()).padStart(2, "0")}:${String(Y.getSeconds()).padStart(2, "0")}`;
  r.push(`$ File   "Hekatan_export.e2k"  saved ${m} in ETABS 22.6.0`), r.push(""), r.push("$ PROGRAM INFORMATION"), r.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), r.push(""), r.push("$ CONTROLS"), r.push(`  UNITS  "${fe}"  "${Te}"  "C"  `), r.push('  TITLE1  "Hekatan Struct Lineal export"  '), G && r.push(`  TITLE2  "${G}"  `), r.push("  PREFERENCE  MERGETOL 0.001"), r.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), r.push("");
  const p = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
  f.forEach((e) => {
    p.add($(e[0])), y.add($(e[1]));
  });
  const L = [...p].sort((e, t) => e - t), D = [...y].sort((e, t) => e - t);
  r.push("$ GRIDS"), r.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), L.forEach((e, t) => {
    const a = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    r.push(`  GRID "G1"  LABEL "${a}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), D.forEach((e, t) => {
    r.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), r.push("");
  const W = 3, J = 0.5, oe = /* @__PURE__ */ new Map();
  f.forEach((e) => {
    const t = $(e[2]);
    oe.set(t, (oe.get(t) ?? 0) + 1);
  });
  const j = /* @__PURE__ */ new Set();
  f.forEach((e) => j.add($(e[2])));
  const z = [...j].sort((e, t) => e - t);
  let U = z.filter((e) => (oe.get(e) ?? 0) >= W);
  if (U.length > 1) {
    const e = [U[0]];
    for (const t of U.slice(1)) t - e[e.length - 1] < J ? e[e.length - 1] = t : e.push(t);
    U = e;
  }
  U.length || (U = [z[0], z[z.length - 1]]), U[0] !== z[0] && U.unshift(z[0]), U[U.length - 1] !== z[z.length - 1] && U.push(z[z.length - 1]);
  const _ = [], Se = /* @__PURE__ */ new Map();
  _.push("Base"), Se.set(U[0], "Base");
  for (let e = 1; e < U.length; e++) {
    const t = `Level_${e}`;
    _.push(t), Se.set(U[e], t);
  }
  const re = (e) => {
    const t = $(e);
    if (Se.has(t)) return { story: Se.get(t), dz: 0 };
    for (let c = 0; c < U.length; c++) if (U[c] >= t) return { story: Se.get(U[c]), dz: $(U[c] - t) };
    const a = U[U.length - 1];
    return { story: Se.get(a), dz: $(a - t) };
  };
  r.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = U.length - 1; e >= 1; e--) r.push(`  STORY "${_[e]}"  HEIGHT ${$(i(U[e] - U[e - 1]))} MASTERSTORY "Yes"  `);
  U.length > 0 && r.push(`  STORY "Base"  ELEV ${U[0]} `), r.push(""), O.some((e) => e.length === 4), r.push("$ DIAPHRAGM NAMES"), r.push('  DIAPHRAGM "D1"    TYPE RIGID'), r.push(""), r.push("$ MATERIAL PROPERTIES");
  const Ae = 980665e-8, ue = (e) => {
    var _a2;
    const t = (_a2 = M.densities) == null ? void 0 : _a2.get(e);
    if (t !== void 0) return t > 100 ? t * Ae : t * 9.80665;
  }, Me = (e) => {
    var _a2;
    const t = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, a = ue(e);
    return `${t}|${a === void 0 ? "-" : a.toFixed(4)}`;
  }, ye = /* @__PURE__ */ new Set();
  (_a = M.elasticities) == null ? void 0 : _a.forEach((e, t) => ye.add(Me(t)));
  const Oe = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map();
  let Ct = 0, Pt = 0;
  for (const e of ye) {
    const t = parseFloat(e.split("|")[0]), a = e.split("|")[1], c = t >= 1e8, l = c ? `Steel_${++Ct}` : `Conc_${++Pt}`;
    Oe.set(e, l), be.set(e, c);
    const A = a !== "-" ? parseFloat(a) : c ? 76.97 : 24, h = E(t), T = d(A), g = (() => {
      const b = I.elementInputs.poissonsRatios;
      if (b) {
        for (const [F, H] of b) if (Me(F) === e) return H;
      }
    })(), k = g !== void 0 ? g : c ? 0.3 : 0.2, N = c ? 117e-7 : 1e-5;
    if (c) {
      r.push(`  MATERIAL  "${l}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${u(T)}`), r.push(`  MATERIAL  "${l}"    SYMTYPE "Isotropic"  E ${$(h)}  U ${k}  A ${N}`);
      const b = 345e3, F = 45e4;
      r.push(`  MATERIAL  "${l}"  FY ${$(E(b))}  FU ${$(E(F))}  FYE ${$(E(b * 1.1))}  FUE ${$(E(F * 1.1))}`);
    } else r.push(`  MATERIAL  "${l}"    TYPE "Concrete"    WEIGHTPERVOLUME ${u(T)}`), r.push(`  MATERIAL  "${l}"    SYMTYPE "Isotropic"  E ${$(h)}  U ${k}  A ${N}`), r.push(`  MATERIAL  "${l}"    FC ${$(E(24e3))}`);
  }
  const st = /* @__PURE__ */ new Map();
  {
    const e = /* @__PURE__ */ new Map();
    (_b = M.sectionShapes) == null ? void 0 : _b.forEach((a, c) => {
      var _a2;
      if ((a == null ? void 0 : a.type) !== "CFT" || !(a.fillE > 0)) return;
      const l = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(c)) ?? 0;
      if (!(l > 0)) return;
      const A = a.fillE / l, h = ue(c) ?? 76.97, T = `${a.fillE}|${(A * h).toFixed(4)}`;
      let g = e.get(T);
      g || (g = `ConcFill_${e.size + 1}`, e.set(T, g), r.push(`  MATERIAL  "${g}"    TYPE "Concrete"    WEIGHTPERVOLUME ${u(d(A * h))}`), r.push(`  MATERIAL  "${g}"    SYMTYPE "Isotropic"  E ${$(E(a.fillE))}  U 0.2  A 1.0e-5`), r.push(`  MATERIAL  "${g}"    FC ${$(E(24e3))}`)), st.set(c, g);
    });
  }
  r.push(""), r.push("$ FRAME SECTIONS");
  const we = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map(), me = 0.05;
  O.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j;
    if (e.length !== 2) return;
    const a = (_a2 = M.sectionShapes) == null ? void 0 : _a2.get(t), c = ((_b2 = M.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, l = Oe.get(Me(t)) || "Conc_1", A = be.get(Me(t)) ?? c >= 1e8, h = ((_c2 = M.areas) == null ? void 0 : _c2.get(t)) ?? 0, T = ((_d2 = M.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, g = ((_e3 = M.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, k = ((_f2 = M.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let N = (a == null ? void 0 : a.type) || "rect", b = (a == null ? void 0 : a.h) ?? 0, F = (a == null ? void 0 : a.b) ?? 0, H = (a == null ? void 0 : a.d) ?? 0;
    const K = (a == null ? void 0 : a.tf) ?? 0, ne = (a == null ? void 0 : a.tw) ?? 0;
    if (!a && b <= 0 && F <= 0 && H <= 0 && h > 0 && T > 0 && g > 0) {
      const pe = (_g2 = M.cantos) == null ? void 0 : _g2.get(t), Fe = (_h = M.anchos) == null ? void 0 : _h.get(t);
      b = pe && pe > 0 ? pe : Math.sqrt(12 * T / h), F = Fe && Fe > 0 ? Fe : h / b, (!isFinite(b) || b < me) && (b = me), (!isFinite(F) || F < me) && (F = me), N = "general";
    } else b <= 0 && F <= 0 && H <= 0 && h > 0 && (T > 0 ? (b = Math.sqrt(12 * T / h), F = h / b) : b = F = Math.sqrt(h), (!isFinite(b) || b < me) && (b = me), (!isFinite(F) || F < me) && (F = me), N = "rect");
    b <= 0 && F <= 0 && H <= 0 && (b = 0.3, F = 0.3, N = "rect");
    const ve = (a == null ? void 0 : a.name) ? `NAME_${a.name}` : `${N}_${$(b)}_${$(F)}_${$(H)}_${$(K)}_${$(ne)}_${l}`;
    (a == null ? void 0 : a.name) && !Be.has(ve) && Be.set(ve, a.name);
    let le = Be.get(ve);
    if (!le) {
      const pe = A ? "S" : "C";
      N === "general" ? le = `${pe}_G${we.size + 1}` : N === "rect" ? le = `${pe}_R${Math.round(F * 100)}x${Math.round(b * 100)}` : N === "circ" ? le = `${pe}_C_D${Math.round(H * 100)}` : N === "I" ? le = `${pe}_I${Math.round(b * 100)}x${Math.round(F * 100)}` : N === "HSS" ? le = `${pe}_HSS${Math.round(F * 100)}x${Math.round(b * 100)}x${Math.round(ne * 1e3)}` : le = `${pe}_Sec${we.size + 1}`, Be.set(ve, le);
    }
    if (ze.set(t, le), we.has(le)) return;
    we.add(le);
    const We = st.get(t);
    if (N === "CFT" && We && H > 0 && ne > 0 && !(b > 0 && F > 0)) {
      r.push(`  FRAMESECTION  "${le}"  MATERIAL "${l}"  SHAPE "Filled Steel Pipe"  D ${$(i(H))} T ${$(i(ne))} FILLMATERIAL "${We}"`);
      return;
    }
    if (N === "CFT" && We && b > 0 && F > 0 && ne > 0) {
      r.push(`  FRAMESECTION  "${le}"  MATERIAL "${l}"  SHAPE "Filled Steel Tube"  D ${$(i(b))} B ${$(i(F))} TF ${$(i(ne))} TW ${$(i(ne))} FILLMATERIAL "${We}"`);
      return;
    }
    const vt = h > 0 && T > 0 && g > 0;
    let he;
    N === "general" || vt ? he = "General" : N === "I" ? he = "Steel I/Wide Flange" : N === "HSS" ? he = "Steel Tube" : N === "CFT" ? he = "Filled Steel Tube" : N === "pipe" ? he = "Steel Pipe" : N === "L" ? he = "Steel Angle" : N === "C" ? he = "Steel Channel" : N === "2C" ? he = "Steel Double Channel" : N === "circ" ? he = "Concrete Circle" : he = "Concrete Rectangular";
    let de = `  FRAMESECTION  "${le}"  MATERIAL "${l}"  SHAPE "${he}"`;
    if (he === "General") {
      const pe = ((_i = M.shearAreasZ) == null ? void 0 : _i.get(t)) || h * 5 / 6, Fe = ((_j = M.shearAreasY) == null ? void 0 : _j.get(t)) || h * 5 / 6;
      de += `  D ${$(i(b))} B ${$(i(F))} AREA ${u(h * 1e6)} AS2 ${u(pe * 1e6)} AS3 ${u(Fe * 1e6)} I33 ${u(T * 1e12)} I22 ${u(g * 1e12)} TORSION ${u((k || T + g) * 1e12)} S33POS ${u(2 * T / b * 1e9)} S33NEG ${u(2 * T / b * 1e9)} S22POS ${u(2 * g / F * 1e9)} S22NEG ${u(2 * g / F * 1e9)} Z33 ${u(2 * T / b * 1e9)} Z22 ${u(2 * g / F * 1e9)} R33 ${u(Math.sqrt(T / h) * 1e3)} R22 ${u(Math.sqrt(g / h) * 1e3)} `, r.push(de);
      return;
    }
    b && (de += `  D ${$(i(b))}`), F && (de += `  B ${$(i(F))}`), H && !b && (de += `  D ${$(i(H))}`), K && (de += `  TF ${$(i(K))}`), ne && (de += `  TW ${$(i(ne))}`), r.push(de);
  }), r.push("");
  const Ye = /* @__PURE__ */ new Map();
  let Ft = 0;
  f.forEach((e) => {
    const { dz: t } = re(e[2]), a = `${$(e[0])},${$(e[1])},${t}`;
    Ye.has(a) || Ye.set(a, `${++Ft}`);
  }), r.push("$ POINT COORDINATES");
  for (const [e, t] of Ye) {
    const [a, c, l] = e.split(",").map(Number);
    r.push(l ? `  POINT "${t}"  ${$(i(a))} ${$(i(c))} ${$(i(l))} ` : `  POINT "${t}"  ${$(i(a))} ${$(i(c))} `);
  }
  r.push("");
  const Ie = (e) => {
    const t = f[e], { story: a, dz: c } = re(t[2]), l = `${$(t[0])},${$(t[1])},${c}`;
    return { pt: Ye.get(l) || "1", story: a };
  }, ot = (e) => {
    var _a2, _b2, _c2, _d2, _e3, _f2;
    const t = [], a = (_a2 = I.propertyModifiers) == null ? void 0 : _a2.get(e);
    a && a.some((N) => Math.abs(N - 1) > 1e-9) && t.push(`PROPMODIFIERS "${a.map((N) => $(N)).join(" ")}"`);
    const c = (_b2 = M.localAngles) == null ? void 0 : _b2.get(e);
    c !== void 0 && isFinite(c) && Math.abs(c) > 1e-9 && t.push(`ANG ${$(c)}`);
    const l = (_c2 = M.momentReleases) == null ? void 0 : _c2.get(e);
    if (l && l.some((N) => N)) {
      const N = [];
      l.length === 12 ? (l[0] && N.push("PI"), l[1] && N.push("V2I"), l[2] && N.push("V3I"), l[3] && N.push("TI"), l[4] && N.push("M2I"), l[5] && N.push("M3I"), l[6] && N.push("PJ"), l[7] && N.push("V2J"), l[8] && N.push("V3J"), l[9] && N.push("TJ"), l[10] && N.push("M2J"), l[11] && N.push("M3J")) : l.length === 6 && (l[0] && N.push("TI"), l[1] && N.push("M2I"), l[2] && N.push("M3I"), l[3] && N.push("TJ"), l[4] && N.push("M2J"), l[5] && N.push("M3J")), N.length > 0 && t.push(`RELEASE "${N.join(" ")}"`);
    }
    const A = (_d2 = M.insertionPoints) == null ? void 0 : _d2.get(e);
    A && (Math.abs(A[0]) > 1e-9 || Math.abs(A[1]) > 1e-9) && t.push(`LATEROFFSET ${$(i(A[0]))} TRANSOFFSET ${$(i(A[1]))}`);
    const h = (_e3 = M.rigidOffsets) == null ? void 0 : _e3.get(e), T = (_f2 = M.endOffsets) == null ? void 0 : _f2.get(e), g = T ? [T[0], T[1]] : h, k = T && T.length > 2 ? T[2] : 0;
    return g && (Math.abs(g[0]) > 1e-9 || Math.abs(g[1]) > 1e-9) && t.push(`LENGTHOFFI ${$(i(g[0]))} LENGTHOFFJ ${$(i(g[1]))} RIGIDZONE ${$(k)}`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, je = [], nt = /* @__PURE__ */ new Set(), Ge = /* @__PURE__ */ new Map();
  O.forEach((e, t) => {
    if (e.length !== 2) return;
    const a = Lt(f, e);
    if (a === "BEAM") return;
    const c = f[e[0]][2] <= f[e[1]][2] ? e[0] : e[1], l = f[e[0]][2] <= f[e[1]][2] ? e[1] : e[0];
    if (Math.abs(f[c][0] - f[l][0]) > 1e-6 || Math.abs(f[c][1] - f[l][1]) > 1e-6) return;
    const A = Ie(c), h = ze.get(t) || `Sec_${t}`, T = `${A.pt}_${h}_${a}`;
    Ge.has(T) || Ge.set(T, []), Ge.get(T).push({ i: t, bot: c, top: l, zBot: $(f[c][2]), zTop: $(f[l][2]), planPt: A.pt, secName: h, type: a });
  }), Ge.forEach((e, t) => {
    e.sort((c, l) => c.zBot - l.zBot);
    let a = 0;
    for (let c = 1; c <= e.length; c++) if (c === e.length || Math.abs(e[c].zBot - e[c - 1].zTop) > 1e-6) {
      const A = e.slice(a, c);
      A.length >= 1 && (je.push({ elemIndices: A.map((h) => h.i), planPt: A[0].planPt, bottomNodeIdx: A[0].bot, topNodeIdx: A[A.length - 1].top, secName: A[0].secName, type: A[0].type, nSegments: A.length }), A.forEach((h) => nt.add(h.i))), a = c;
    }
  }), r.push("$ LINE CONNECTIVITIES");
  const _e = [], ke = (e) => _.indexOf(e), at = /* @__PURE__ */ new Map(), it = (e, t, a, c, l, A, h, T) => {
    const g = Ie(c), k = Ie(a);
    T !== void 0 && at.set(T, { name: e, story: g.story });
    const N = ke(g.story) - ke(k.story);
    N <= 0 ? r.push(`  LINE  "${e}"  BEAM  "${k.pt}"  "${g.pt}"  0`) : r.push(`  LINE  "${e}"  ${t}  "${k.pt}"  "${g.pt}"  ${N}`), _e.push(`  LINEASSIGN  "${e}"  "${g.story}"  SECTION "${l}" ${A} MINNUMSTA ${h} AUTOMESH "YES"  MESHATINTERSECTIONS "${M.meshAtIntersections === false ? "NO" : "YES"}"  `);
  }, ct = /* @__PURE__ */ new Map();
  je.forEach((e, t) => {
    const a = ot(e.elemIndices[0]), c = [];
    let l = [];
    e.elemIndices.forEach((A, h) => {
      l.push(A);
      const [T, g] = O[A], k = f[T][2] >= f[g][2] ? T : g;
      (re(f[k][2]).dz === 0 || h === e.elemIndices.length - 1) && (c.push(l), l = []);
    }), c.forEach((A) => {
      const [h, T] = O[A[0]], g = f[h][2] <= f[T][2] ? h : T, [k, N] = O[A[A.length - 1]], b = f[k][2] >= f[N][2] ? k : N;
      ke(Ie(b).story) - ke(Ie(g).story);
      let F = `C${t + 1}`;
      for (let H = 1; ; H++) {
        const K = r.length;
        it(F, e.type, g, b, e.secName, a, A.length);
        const ne = r[K], tt = ct.get(F);
        if (tt === void 0) {
          ct.set(F, ne);
          break;
        }
        if (r.splice(K, r.length - K), tt === ne) break;
        _e.pop(), F = `C${t + 1}_${H}`;
      }
    });
  }), O.forEach((e, t) => {
    if (e.length !== 2 || nt.has(t)) return;
    const a = Lt(f, e), c = ze.get(t) || `Sec_${t}`, l = ot(t), A = f[e[0]][2] <= f[e[1]][2] ? e[0] : e[1], h = f[e[0]][2] <= f[e[1]][2] ? e[1] : e[0];
    it(`E${t + 1}`, a === "BEAM" ? "BRACE" : a, A, h, c, l, 3, t);
  }), r.push("");
  const Le = I.weightMode ?? "auto", Re = /* @__PURE__ */ new Set();
  r.push("$ POINT ASSIGNS"), (_c = R.supports) == null ? void 0 : _c.forEach((e, t) => {
    const a = [];
    if (e[0] && a.push("UX"), e[1] && a.push("UY"), e[2] && a.push("UZ"), e[3] && a.push("RX"), e[4] && a.push("RY"), e[5] && a.push("RZ"), a.length > 0) {
      const c = Ie(t), l = c.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      r.push(`  POINTASSIGN  "${c.pt}"  "${c.story}"  RESTRAINT "${a.join(" ")}" ${l} `), Re.add(`${c.pt}@${c.story}`);
    }
  });
  const yt = !!(R.diaphragms && [...R.diaphragms.values()].some((e) => e !== 0)), rt = I.diaphragm ?? "auto", Et = rt === "d1" || rt === "auto" && yt;
  Et && je.forEach((e) => {
    for (const t of e.elemIndices) {
      const [a, c] = O[t], l = f[a][2] >= f[c][2] ? a : c, A = Ie(l), h = `${A.pt}@${A.story}`;
      !Re.has(h) && A.story !== "Base" && (r.push(`  POINTASSIGN  "${A.pt}"  "${A.story}"  DIAPH "D1"  `), Re.add(h));
    }
  }), Le === "manual" && R.loads && R.loads.forEach((e, t) => {
    const [a, c, l] = te(t, e);
    if (Math.abs(a) < 1e-10 && Math.abs(c) < 1e-10 && Math.abs(l) < 1e-10) return;
    const A = Ie(t), h = `${A.pt}@${A.story}`;
    Re.has(h) || (r.push(`  POINTASSIGN  "${A.pt}"  "${A.story}"  DIAPH "DISCONNECTED"  `), Re.add(h));
  }), r.push(""), r.push("$ LINE ASSIGNS"), _e.forEach((e) => r.push(e)), r.push("");
  const Ee = [], lt = M.areaObjects, ft = /* @__PURE__ */ new Set(), St = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map();
  lt == null ? void 0 : lt.forEach((e) => e.cells.forEach((t) => ft.add(t))), O.forEach((e, t) => {
    if (e.length === 4 || e.length === 3) {
      const a = f[e[0]], c = f[e[1]], l = f[e[2]], A = [c[0] - a[0], c[1] - a[1], c[2] - a[2]], h = [l[0] - a[0], l[1] - a[1], l[2] - a[2]], T = A[1] * h[2] - A[2] * h[1], g = A[2] * h[0] - A[0] * h[2], k = A[0] * h[1] - A[1] * h[0], N = Math.sqrt(T * T + g * g + k * k), b = N > 1e-10 && Math.abs(k) / N < 0.5;
      Ee.push({ idx: t, el: e, isWall: b }), ft.has(t) && Ee.pop();
    }
  });
  const $e = (() => {
    for (const [e, t] of be) if (!t) return Oe.get(e);
    return Oe.values().next().value || "Conc_1";
  })();
  lt == null ? void 0 : lt.forEach((e, t) => {
    Ee.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && St.set(e.cells[0], e.q), e.ang !== void 0 && At.set(e.cells[0], e.ang);
  });
  const De = "DECK";
  let Je = false;
  const Ke = [], ht = (e) => {
    const t = I.elementInputs.plateFormulations, a = Ee.find((l) => l.isWall === e), c = t && a ? t.get(a.idx) : void 0;
    return c === 2 ? "Membrane" : c === 1 ? "ShellThin" : "ShellThick";
  }, pt = (e, t) => {
    const a = I.elementInputs.thicknesses, c = Ee.find((l) => l.isWall === e);
    return (c ? a == null ? void 0 : a.get(c.idx) : void 0) ?? (a == null ? void 0 : a.values().next().value) ?? t;
  }, Tt = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], Ue = (e) => {
    var _a2;
    const a = (_a2 = M.shellModifiers) == null ? void 0 : _a2.get(e);
    if (a && a.length >= 8) return a.slice(0, 8);
    const c = M.membraneModifiers, l = M.bendingModifiers, A = c == null ? void 0 : c.get(e), h = l == null ? void 0 : l.get(e);
    if (A === void 0 && h === void 0) return null;
    const T = A ?? 1, g = h ?? 1;
    return [T, T, T, g, g, g, g, g];
  }, Mt = (e, t) => {
    const a = Ee.filter((h) => h.isWall === t), c = /* @__PURE__ */ new Map();
    for (const h of a) {
      const T = Ue(h.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      c.set(T.map((g) => $(g)).join(","), T);
    }
    if (c.size === 0) return "";
    c.size > 1 && console.warn(`[e2k] "${e}": ${c.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const l = c.values().next().value, A = Tt.map((h, T) => Math.abs(l[T] - 1) > 1e-9 ? `${h} ${$(l[T])}` : "").filter(Boolean);
    return A.length ? `  SHELLPROP  "${e}"  ${A.join(" ")} ` : "";
  }, It = I.elementInputs.thicknesses, $t = I.elementInputs.plateFormulations, Ce = (e) => {
    const t = It == null ? void 0 : It.get(e.idx), a = $t == null ? void 0 : $t.get(e.idx), c = Ue(e.idx);
    return `${e.isWall ? "W" : "F"}|${t ?? "-"}|${a ?? "-"}|${c ? c.map((l) => $(l)).join(",") : "-"}|${Me(e.idx)}`;
  }, Ze = (e) => {
    const t = Ue(e);
    return t ? Math.abs(t[3]) < 1e-9 && Math.abs(t[4]) < 1e-9 : false;
  }, Pe = /* @__PURE__ */ new Map();
  let bt = 0, wt = 0, Bt = 0;
  for (const e of Ee) {
    const t = Ce(e);
    if (Pe.has(t)) continue;
    const a = e.isWall, c = !a && Ze(e.idx), l = a ? ++wt : c ? ++Bt : ++bt, A = Me(e.idx);
    Pe.set(t, { nombre: (a ? "Muro" : c ? De : "Losa") + (l === 1 ? "" : String(l)), isWall: a, mem: c, t: It == null ? void 0 : It.get(e.idx), pf: $t == null ? void 0 : $t.get(e.idx), mat: Oe.get(A) ?? $e, acero: be.get(A) ?? false });
  }
  const xe = (e) => {
    var _a2;
    return ((_a2 = Pe.get(Ce(e))) == null ? void 0 : _a2.nombre) ?? (e.isWall ? "Muro" : "Losa");
  }, ut = (e) => e === 2 ? "Membrane" : e === 1 ? "ShellThin" : "ShellThick", Yt = (e, t) => {
    const a = Ee.find((A) => Ce(A) === t), c = a ? Ue(a.idx) ?? null : null;
    if (!c) return "";
    const l = Tt.map((A, h) => Math.abs(c[h] - 1) > 1e-9 ? `${A} ${$(c[h])}` : "").filter(Boolean);
    return l.length ? `  SHELLPROP  "${e}"  ${l.join(" ")} ` : "";
  }, He = Ee.find((e) => !e.isWall), mt = Ee.find((e) => e.isWall), Xe = /* @__PURE__ */ new Set();
  He && Xe.add(Ce(He)), mt && Xe.add(Ce(mt));
  const dt = [...Pe.entries()].filter(([e]) => !Xe.has(e));
  if (Ee.some((e) => !e.isWall)) {
    Je = !!He && Ze(He.idx);
    const e = pt(false, 0.15);
    if (Je) {
      r.push("$ DECK PROPERTIES");
      const a = (l) => u(i(l)), c = [...Pe.values()].find((l) => l.nombre === De);
      (c == null ? void 0 : c.acero) ? r.push(`  SHELLPROP  "${De}"  PROPTYPE  "Slab"  MATERIAL "${c.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${$(i(e))} `) : r.push(`  SHELLPROP  "${De}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${$e}"  DECKMATERIAL "${$e}"  DECKSLABDEPTH ${a(e * 65 / 120)} DECKRIBDEPTH ${a(e * 55 / 120)} DECKRIBWIDTHTOP ${a(e * 150 / 120)} DECKRIBWIDTHBOTTOM ${a(e * 100 / 120)} DECKRIBSPACING ${a(e * 200 / 120)} DECKSHEARTHICKNESS ${a(e * 0.76 / 120)} DECKUNITWEIGHT ${u(s(0.11012))} SHEARSTUDDIAM ${a(e * 19 / 120)} SHEARSTUDHEIGHT ${a(e * 100 / 120)} SHEARSTUDFU 400 `);
    } else r.push("$ SLAB PROPERTIES"), r.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${$e}"  MODELINGTYPE "${ht(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${$(i(e))} `);
    const t = Mt(Je ? De : "Losa", false);
    t && r.push(t), r.push("");
  }
  if (Ee.some((e) => e.isWall)) {
    r.push("$ WALL PROPERTIES");
    const e = pt(true, 0.2), t = ht(true);
    r.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${$e}"  MODELINGTYPE "${t}"  WALLTHICKNESS ${$(i(e))} `);
    const a = Mt("Muro", true);
    a && r.push(a), r.push("");
  }
  if (dt.length) {
    r.push("$ OTRAS SECCIONES DE CASCARA");
    for (const [e, t] of dt) {
      const a = t.t ?? (t.isWall ? 0.2 : 0.15), c = (A) => u(i(A));
      r.push(t.isWall ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Wall"  MATERIAL "${t.mat ?? $e}"  MODELINGTYPE "${ut(t.pf)}"  WALLTHICKNESS ${$(i(a))} ` : t.mem && t.acero ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Slab"  MATERIAL "${t.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${$(i(a))} ` : t.mem ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${$e}"  DECKMATERIAL "${$e}"  DECKSLABDEPTH ${c(a * 65 / 120)} DECKRIBDEPTH ${c(a * 55 / 120)} DECKRIBWIDTHTOP ${c(a * 150 / 120)} DECKRIBWIDTHBOTTOM ${c(a * 100 / 120)} DECKRIBSPACING ${c(a * 200 / 120)} DECKSHEARTHICKNESS ${c(a * 0.76 / 120)} DECKUNITWEIGHT ${u(s(0.11012))} SHEARSTUDDIAM ${c(a * 19 / 120)} SHEARSTUDHEIGHT ${c(a * 100 / 120)} SHEARSTUDFU 400 ` : `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Slab"  MATERIAL "${$e}"  MODELINGTYPE "${ut(t.pf)}"  SLABTYPE "Slab"  SLABTHICKNESS ${$(i(a))} `);
      const l = Yt(t.nombre, e);
      l && r.push(l);
    }
    r.push("");
  }
  if (Ee.length > 0) {
    r.push("$ AREA CONNECTIVITIES");
    const e = [];
    Ee.forEach((t, a) => {
      const { el: c, isWall: l } = t, A = l ? `W${a + 1}` : `F${a + 1}`, h = l ? "PANEL" : "FLOOR", T = c.map((g) => Ie(g));
      if (l) {
        const g = (H) => _.indexOf(H);
        if (new Set(T.map((H) => H.pt)).size === 4) {
          const H = Math.max(...T.map((ne) => g(ne.story))), K = T.map((ne) => H - g(ne.story));
          r.push(`  AREA "${A}"  ${h}  4  "${T[0].pt}"  "${T[1].pt}"  "${T[2].pt}"  "${T[3].pt}"  ${K.join("  ")}  `), e.push(`  AREAASSIGN  "${A}"  "${_[H]}"  SECTION "${xe(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const N = f[c[0]][2] <= f[c[2]][2] ? 0 : 2, b = f[c[1]][2] <= f[c[3]][2] ? 1 : 3;
        r.push(`  AREA "${A}"  ${h}  4  "${T[N].pt}"  "${T[b].pt}"  "${T[b].pt}"  "${T[N].pt}"  1  1  0  0  `);
        const F = T[N === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${A}"  "${F}"  SECTION "${xe(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        const g = T.length, k = (K) => _.indexOf(K), N = Math.max(...T.map((K) => k(K.story))), b = T.map((K) => N - k(K.story)), F = _[N] ?? T[0].story;
        r.push(`  AREA "${A}"  ${h}  ${g}  ` + T.map((K) => `"${K.pt}"`).join("  ") + "  " + b.join("  ") + "  ");
        const H = At.get(t.idx) ?? (B == null ? void 0 : B.get(t.idx));
        e.push(Ze(t.idx) ? `  AREAASSIGN  "${A}"  "${F}"  SECTION "${xe(t)}"  ANG ${$(H ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${A}"  "${F}"  SECTION "${xe(t)}" ${Et ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Ke.push({ name: A, story: F, idx: t.idx });
      }
    }), r.push(""), r.push("$ AREA ASSIGNS"), e.forEach((t) => r.push(t)), r.push("");
  }
  const Gt = Le === "manual" ? 0 : Z ?? 1;
  r.push("$ LOAD PATTERNS");
  const ge = ((_d = I.loadPatterns) == null ? void 0 : _d.length) ? I.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: Gt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of ge) {
    let t;
    e.type === "Dead" ? t = Le === "manual" ? 0 : e.selfWeightMultiplier ?? Z ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), r.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  r.push("");
  const Ne = I.loadPatternDestino && ge.some((e) => e.name === I.loadPatternDestino) ? I.loadPatternDestino : ((_e2 = ge.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? ge[0].name, Ve = [], qe = /* @__PURE__ */ new Map(), gt = (e, t) => {
    const a = qe.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let c = 0; c < 6; c++) a[c] += t[c] ?? 0;
    qe.set(e, a);
  }, kt = Ne === (((_f = ge.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? ge[0].name), Ut = Le === "manual" || !kt || ee;
  if (R.loads && R.loads.size > 0 && R.loads.forEach((e, t) => {
    const [a, c, l] = te(t, e), [A, h, T] = ce(t, e);
    gt(t, [a, c, Ut ? l : 0, A, h, T]);
  }), R.moments && R.moments.size > 0 && R.moments.forEach((e, t) => {
    gt(t, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), qe.forEach((e, t) => {
    if (e.every((c) => Math.abs(c) <= 1e-10)) return;
    const a = Ie(t);
    Ve.push(`  POINTLOAD  "${a.pt}"  "${a.story}"  TYPE "FORCE"  LC "${Ne}"  FX ${u(o(e[0]))}  FY ${u(o(e[1]))}  FZ ${u(o(e[2]))}  MX ${u(n(e[3]))}  MY ${u(n(e[4]))}  MZ ${u(n(e[5]))}`);
  }), Ve.length > 0 && (r.push("$ POINT OBJECT LOADS"), Ve.forEach((e) => r.push(e)), r.push("")), ee && se.size > 0) {
    const e = [];
    for (const t of se) {
      const a = Q.get(t), c = at.get(t);
      if (!c) continue;
      const l = (A) => u(s(A) / P);
      Math.abs(a[2]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "${a[2] < 0 ? "GRAV" : "Z"}"  LC "${Ne}"  FVAL ${l(Math.abs(a[2]))}`), Math.abs(a[0]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "X"  LC "${Ne}"  FVAL ${l(a[0])}`), Math.abs(a[1]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "Y"  LC "${Ne}"  FVAL ${l(a[1])}`);
    }
    e.length && (r.push("$ FRAME OBJECT LOADS"), e.forEach((t) => r.push(t)), r.push(""));
  }
  if (S && S.size > 0 && Ke.length > 0) {
    const e = [];
    for (const t of Ke) {
      const a = St.get(t.idx), c = a !== void 0 ? { value: a } : S.get(t.idx);
      if (!c || Math.abs(c.value) < 1e-12) continue;
      const l = c.dir ?? "GRAV", A = l === "GRAV" ? Math.abs(c.value) : c.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${l}"  LC "${c.pattern ?? Ne}"  FVAL ${u(s(A) / (P * P))}`);
    }
    e.length > 0 && (r.push("$ SHELL OBJECT LOADS"), e.forEach((t) => r.push(t)), r.push(""));
  }
  r.push("$ ANALYSIS OPTIONS"), r.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), r.push('  PDELTA  METHOD "NONE"  '), r.push("");
  const Qe = Le === "manual";
  r.push("$ MASS SOURCE"), r.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${Qe ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${Qe ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), Qe || r.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), r.push(""), r.push("$ LOAD CASES");
  const xt = ((_g = I.loadCases) == null ? void 0 : _g.length) ? I.loadCases : ge.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of xt) {
    r.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) r.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  const Ht = I.modalModes ?? 12;
  r.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), r.push(`  LOADCASE "Modal"  MAXMODES ${Ht}  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `), r.push("");
  const et = I.loadCombinations;
  if (et && et.length) {
    r.push("$ LOAD COMBINATIONS");
    for (const e of et) {
      r.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) r.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    r.push("");
  }
  return r.push("  END"), r.push("$ END OF MODEL FILE"), r.join(`\r
`);
}
function Lt(I, f) {
  const O = I[f[0]], R = I[f[1]], M = Math.abs(R[2] - O[2]), G = Math.sqrt((R[0] - O[0]) ** 2 + (R[1] - O[1]) ** 2), x = M > G * 0.5;
  return x && G > 0.01 ? "BRACE" : x ? "COLUMN" : "BEAM";
}
export {
  qt as a,
  Qt as e,
  Vt as p
};
