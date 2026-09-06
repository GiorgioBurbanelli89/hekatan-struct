function b(I) {
  return I && parseFloat(I) || 0;
}
function Ct(I) {
  const l = /* @__PURE__ */ new Map(), N = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let D;
  for (; (D = N.exec(I)) !== null; ) l.set(D[1], D[2] !== void 0 ? D[2] : D[3]);
  return l;
}
function Qt(I) {
  const l = I.split(/\r?\n/);
  return l.some((D) => D.trim().startsWith("TABLE:")) ? jt(l) : Jt(l);
}
function jt(I) {
  var _a, _b, _c, _d, _e, _f;
  const l = [];
  let N = "";
  for (const P of I) {
    const u = P.trimEnd();
    u.endsWith("_") ? N += u.slice(0, -1) + " " : (N += u, l.push(N), N = "");
  }
  N && l.push(N);
  const D = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const x = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), V = [], K = [], ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), oe = [], se = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), r = [], T = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
  let k = "";
  for (const P of l) {
    const u = P.trim();
    if (!u || u.startsWith(";") || u.startsWith("File ")) continue;
    if (u.startsWith("TABLE:")) {
      const t = u.match(/TABLE:\s+"(.+?)"/);
      k = t ? t[1].toUpperCase() : "";
      continue;
    }
    if (u === "END TABLE DATA") {
      k = "";
      continue;
    }
    const o = Ct(u);
    switch (k) {
      case "PROGRAM CONTROL": {
        const t = o.get("CurrUnits");
        if (t) {
          const a = t.split(",").map((i) => i.trim());
          a[0] && (D.force = a[0]), a[1] && (D.length = a[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const t = o.get("Material");
        t && !x.has(t) && x.set(t, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const t = o.get("Material");
        if (t) {
          const a = x.get(t) || { E: 0, nu: 0, G: 0 };
          a.E = b(o.get("E1")), a.G = b(o.get("G12")), a.nu = b(o.get("U12")), a.density = b(o.get("UnitMass")), x.set(t, a);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const t = o.get("Material");
        t && x.has(t) && (x.get(t).fy = b(o.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const t = o.get("SectionName");
        t && f.set(t, { material: o.get("Material") || "", shape: o.get("Shape") || "Rectangular", D: b(o.get("t3")), B: b(o.get("t2")), TF: b(o.get("tf")), TW: b(o.get("tw")), A: b(o.get("Area")), Iz: b(o.get("I33")), Iy: b(o.get("I22")), J: b(o.get("TorsConst")), As2: b(o.get("AS2")), As3: b(o.get("AS3")) });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 09 - SHAPE BOX/TUBE": {
        const t = o.get("SectionName");
        t && H.set(t, { h: b(o.get("Height")), b: b(o.get("Width")), t: b(o.get("FlngThick")) || b(o.get("WebThick")), mat: o.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 10 - SHAPE PIPE": {
        const t = o.get("SectionName");
        t && H.set(t, { h: 0, b: 0, D: b(o.get("OuterDiam")), t: b(o.get("WallThick")), mat: o.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 13 - SHAPE SOLID CIRCLE": {
        const t = o.get("SectionName");
        t && Q.set(t, { mat: o.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 12 - SHAPE SOLID RECTANGLE": {
        const t = o.get("SectionName");
        t && Q.set(t, { mat: o.get("ShapeMat") || "" });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const t = o.get("Section");
        t && w.set(t, { material: o.get("Material") || "", type: o.get("Type") || "Shell", thickness: b(o.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const t = o.get("Joint");
        if (t) {
          const a = b(o.get("XorR")), i = b(o.get("Y")), d = b(o.get("Z"));
          X.set(t, [a, i, d]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const t = o.get("Frame"), a = o.get("JointI"), i = o.get("JointJ");
        t && a && i && V.push({ name: t, j1: a, j2: i });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const t = o.get("Area");
        if (t) {
          const a = parseInt(o.get("NumJoints") || "4"), i = [];
          for (let d = 1; d <= a; d++) {
            const G = o.get(`Joint${d}`);
            G && i.push(G);
          }
          i.length >= 3 && K.push({ name: t, joints: i });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const t = o.get("Joint");
        if (t) {
          const a = [((_a = o.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = o.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = o.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = o.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = o.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = o.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          ee.set(t, a);
        }
        break;
      }
      case "JOINT SPRING ASSIGNMENTS 1 - UNCOUPLED": {
        const t = o.get("Joint");
        t && te.set(t, ["U1", "U2", "U3", "R1", "R2", "R3"].map((a) => parseFloat(o.get(a) ?? "0") || 0));
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const t = o.get("Frame"), a = o.get("AnalSect");
        t && a && ie.set(t, a);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const t = o.get("Area"), a = o.get("Section");
        t && a && ce.set(t, a);
        break;
      }
      case "FRAME LOADS - DISTRIBUTED": {
        const t = o.get("Frame"), a = o.get("Dir"), i = b(o.get("FOverLA"));
        if (t && a && i) {
          const d = { X: 0, Y: 1, Z: 2 }[a];
          if (d !== void 0) {
            const G = Te.get(t) ?? [0, 0, 0];
            G[d] += i, Te.set(t, G);
          }
        }
        break;
      }
      case "CONNECTIVITY - SOLID": {
        const t = o.get("Solid");
        if (t) {
          const a = [];
          for (let i = 1; i <= 8; i++) {
            const d = o.get(`Joint${i}`);
            d && a.push(d);
          }
          a.length === 8 && r.push({ name: t, joints: a });
        }
        break;
      }
      case "SOLID PROPERTY DEFINITIONS": {
        const t = o.get("SolidProp");
        t && T.set(t, { material: o.get("Material") || "", incomp: (o.get("InComp") || "Yes").toLowerCase().startsWith("y") });
        break;
      }
      case "SOLID PROPERTY ASSIGNMENTS": {
        const t = o.get("Solid"), a = o.get("SolidProp");
        t && a && R.set(t, a);
        break;
      }
      case "AREA STIFFNESS MODIFIERS": {
        const t = o.get("Area");
        t && Ae.set(t, ["f11", "f22", "f12", "m11", "m22", "m12", "v13", "v23"].map((a) => o.has(a) ? b(o.get(a)) : 1));
        break;
      }
      case "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL": {
        const t = o.get("Frame");
        t && Ee.set(t, b(o.get("Angle")));
        break;
      }
      case "FRAME OFFSET ALONG LENGTH ASSIGNMENTS": {
        const t = o.get("Frame");
        t && se.set(t, [b(o.get("LengthI")), b(o.get("LengthJ")), b(o.get("RigidFactor"))]);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const t = o.get("Joint");
        t && oe.push({ joint: t, fx: b(o.get("F1")), fy: b(o.get("F2")), fz: b(o.get("F3")), mx: b(o.get("M1")), my: b(o.get("M2")), mz: b(o.get("M3")) });
        break;
      }
    }
  }
  return Pt(D, M, x, f, w, X, V, K, ee, ie, ce, oe, se, Ee, Ae, Te, r, T, R, H, Q, te);
}
function Jt(I) {
  const l = { force: "KN", length: "m" };
  let N = "UX,UY,UZ,RX,RY,RZ";
  const D = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Q = [], f = [], w = /* @__PURE__ */ new Map(), X = [], V = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ie = [], ce = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map();
  let se = "", Ee = "";
  for (const r of I) {
    const T = r.trim();
    if (!T || T.startsWith(";")) continue;
    if (!r.startsWith(" ") && !r.startsWith("	")) {
      const P = T.toUpperCase();
      if (P === "END") break;
      P.startsWith("SHELL SECTION") ? se = "SHELL SECTION" : P.startsWith("FRAME SECTION") ? se = "FRAME SECTION" : se = P.split(/\s+/)[0];
      continue;
    }
    const R = Ct(T), k = T.split(/\s+/);
    switch (se) {
      case "SYSTEM": {
        const P = R.get("DOF");
        P && (N = P);
        const u = R.get("LENGTH");
        u && (l.length = u);
        const o = R.get("FORCE");
        o && (l.force = o);
        break;
      }
      case "JOINT": {
        const P = k[0];
        H.set(P, [b(R.get("X")), b(R.get("Y")), b(R.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const P = R.get("ADD"), u = R.get("DOF");
        if (P && u) {
          const o = u.split(","), t = [false, false, false, false, false, false];
          for (const a of o) {
            const i = a.toUpperCase();
            (i === "UX" || i === "U1") && (t[0] = true), (i === "UY" || i === "U2") && (t[1] = true), (i === "UZ" || i === "U3") && (t[2] = true), (i === "RX" || i === "R1") && (t[3] = true), (i === "RY" || i === "R2") && (t[4] = true), (i === "RZ" || i === "R3") && (t[5] = true);
          }
          w.set(P, t);
        }
        break;
      }
      case "MATERIAL": {
        const P = R.get("NAME");
        if (P) Ee = P, D.set(P, { E: 0, nu: 0, G: 0 });
        else if (Ee) {
          const u = D.get(Ee), o = R.get("E");
          o && (u.E = b(o));
          const t = R.get("U");
          t && (u.nu = b(t)), u.G = u.E / (2 * (1 + u.nu));
          const a = R.get("M");
          a && (u.density = b(a));
        }
        break;
      }
      case "SHELL": {
        const P = k[0], u = R.get("J");
        R.get("SEC"), u && f.push({ name: P, joints: u.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const P = R.get("NAME");
        P && x.set(P, { material: R.get("MAT") || "", type: R.get("TYPE") || "Shell", thickness: b(R.get("TH")) });
        break;
      }
      case "FRAME": {
        const P = k[0], u = R.get("J");
        if (u) {
          const o = u.split(",");
          o.length >= 2 && Q.push({ name: P, j1: o[0], j2: o[1] });
        }
        break;
      }
      case "LOAD": {
        const P = R.get("ADD");
        P && X.push({ joint: P, fx: b(R.get("UX")), fy: b(R.get("UY")), fz: b(R.get("UZ")), mx: b(R.get("MX")), my: b(R.get("MY")), mz: b(R.get("MZ")) });
        break;
      }
    }
  }
  return Pt(l, N, D, M, x, H, Q, f, w, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), X, V, K, ee, te, ie, ce, oe);
}
function Pt(I, l, N, D, M, x, H, Q, f, w, X, V, K = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ce = [], oe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), Ee, Ae, Te = /* @__PURE__ */ new Map()) {
  var _a, _b;
  const r = [], T = /* @__PURE__ */ new Map(), R = [];
  for (const [h, O] of x) T.set(h, R.length), r.push(h), R.push(O);
  const k = [], P = [], u = /* @__PURE__ */ new Map();
  for (const h of H) {
    const O = T.get(h.j1), $ = T.get(h.j2);
    if (O !== void 0 && $ !== void 0) {
      const B = k.length;
      k.push([O, $]), P.push(h.name);
      const F = w.get(h.name);
      F && u.set(B, F);
    }
  }
  const o = k.length;
  for (const h of Q) {
    const O = h.joints.map(($) => T.get($)).filter(($) => $ !== void 0);
    if (O.length >= 3) {
      const $ = k.length;
      k.push(O), P.push(h.name);
      const B = X.get(h.name);
      B && u.set($, B);
    }
  }
  const t = k.length - o, a = [];
  for (const h of ce) {
    const O = h.joints.map((F) => T.get(F));
    if (O.some((F) => F === void 0)) continue;
    const $ = k.length;
    k.push([O[0], O[1], O[3], O[2], O[4], O[5], O[7], O[6]]), P.push(h.name), a.push($);
    const B = se.get(h.name);
    B && u.set($, B);
  }
  const i = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, d = /* @__PURE__ */ new Map(), G = N.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let h = 0; h < k.length; h++) {
    const O = u.get(h), $ = O ? D.get(O) : null, B = O ? M.get(O) : null;
    if ($ || k[h].length === 2) {
      const F = $ || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, z = N.get(F.material) || G, J = z.E || G.E, q = z.nu || 0.3, W = z.G || J / (2 * (1 + q));
      i.elasticities.set(h, J), i.shearModuli.set(h, W), i.areas.set(h, F.A || F.D * F.B), i.momentsOfInertiaZ.set(h, F.Iz || F.B * F.D ** 3 / 12), i.momentsOfInertiaY.set(h, F.Iy || F.D * F.B ** 3 / 12), i.torsionalConstants.set(h, F.J || 0), i.densities.set(h, z.density || 0), F.As2 && (i.shearAreasZ ?? (i.shearAreasZ = /* @__PURE__ */ new Map()), i.shearAreasZ.set(h, F.As2)), F.As3 && (i.shearAreasY ?? (i.shearAreasY = /* @__PURE__ */ new Map()), i.shearAreasY.set(h, F.As3));
      const U = K.get(P[h]);
      U && (i.endOffsets ?? (i.endOffsets = /* @__PURE__ */ new Map()), i.endOffsets.set(h, U));
      const ne = ee.get(P[h]);
      ne && (i.localAngles ?? (i.localAngles = /* @__PURE__ */ new Map()), i.localAngles.set(h, ne)), ((_a = F.shape) == null ? void 0 : _a.includes("Wide Flange")) || F.shape === "I" ? d.set(h, { type: "I", b: F.B, h: F.D, name: O || "I-section" }) : d.set(h, { type: "rect", b: F.B, h: F.D });
      const Z = O ? Ee == null ? void 0 : Ee.get(O) : void 0;
      if (Z && Z.t > 0 && (Z.b > 0 && Z.h > 0 || (Z.D ?? 0) > 0)) {
        const Me = O ? Ae == null ? void 0 : Ae.get(O) : void 0, re = Me && ((_b = N.get(Me.mat)) == null ? void 0 : _b.E) || 0;
        d.set(h, Z.D ? { type: "CFT", d: Z.D, tw: Z.t, name: O, ...re > 0 ? { fillE: re } : {} } : { type: "CFT", b: Z.b, h: Z.h, tw: Z.t, name: O, ...re > 0 ? { fillE: re } : {} });
      }
    } else if (B) {
      const F = N.get(B.material) || G, z = F.E || G.E, J = F.nu || 0.2, q = F.G || z / (2 * (1 + J));
      i.elasticities.set(h, z), i.shearModuli.set(h, q), i.thicknesses.set(h, B.thickness), i.poissonsRatios.set(h, J), i.plateFormulations ?? (i.plateFormulations = /* @__PURE__ */ new Map()), i.plateFormulations.set(h, /thin/i.test(B.type) ? 1 : 0);
      const W = te.get(P[h]);
      W && (i.shellModifiers ?? (i.shellModifiers = /* @__PURE__ */ new Map()), i.shellModifiers.set(h, W), i.membraneModifiers ?? (i.membraneModifiers = /* @__PURE__ */ new Map()), i.membraneModifiers.set(h, W[0]), i.bendingModifiers ?? (i.bendingModifiers = /* @__PURE__ */ new Map()), i.bendingModifiers.set(h, W[3])), i.densities.set(h, F.density || 0);
    }
  }
  if (a.length) {
    let h = false;
    for (const O of a) {
      const $ = oe.get(u.get(O) || ""), B = $ && N.get($.material) || G, F = B.E || G.E, z = B.nu || 0.2;
      i.elasticities.set(O, F), i.poissonsRatios.set(O, z), i.shearModuli.set(O, B.G || F / (2 * (1 + z))), i.densities.set(O, B.density || 0), ($ == null ? void 0 : $.incomp) && (h = true);
    }
    i.solidIncompatible = h;
  }
  const j = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() };
  for (const [h, O] of f) {
    const $ = T.get(h);
    $ !== void 0 && j.supports.set($, O);
  }
  {
    const h = [];
    for (const [O, $] of Te) {
      const B = T.get(O);
      B !== void 0 && $.forEach((F, z) => {
        F > 0 && h.push({ node: B, dof: z, k: F });
      });
    }
    h.length && (j.springs = h);
  }
  for (const [h, O] of ie) {
    const $ = P.indexOf(h);
    if ($ < 0 || k[$].length !== 2) continue;
    i.frameLoads ?? (i.frameLoads = /* @__PURE__ */ new Map()), i.frameLoads.set($, O);
    const B = R[k[$][0]], F = R[k[$][1]], z = [F[0] - B[0], F[1] - B[1], F[2] - B[2]], J = Math.hypot(z[0], z[1], z[2]);
    if (J < 1e-9) continue;
    const q = [z[0] / J, z[1] / J, z[2] / J], W = J * J / 12, U = [q[1] * O[2] - q[2] * O[1], q[2] * O[0] - q[0] * O[2], q[0] * O[1] - q[1] * O[0]], ne = (Z, Me) => {
      const re = j.loads.get(Z) || [0, 0, 0, 0, 0, 0];
      for (let Se = 0; Se < 6; Se++) re[Se] += Me[Se];
      j.loads.set(Z, re);
    };
    ne(k[$][0], [O[0] * J / 2, O[1] * J / 2, O[2] * J / 2, W * U[0], W * U[1], W * U[2]]), ne(k[$][1], [O[0] * J / 2, O[1] * J / 2, O[2] * J / 2, -W * U[0], -W * U[1], -W * U[2]]);
  }
  for (const h of V) {
    const O = T.get(h.joint);
    if (O !== void 0) {
      const $ = j.loads.get(O) || [0, 0, 0, 0, 0, 0];
      $[0] += h.fx, $[1] += h.fy, $[2] += h.fz, $[3] += h.mx, $[4] += h.my, $[5] += h.mz, j.loads.set(O, $);
    }
  }
  return { units: I, dof: l, materials: N, frameSections: D, shellSections: M, nodes: R, nodeNames: r, nodeNameToIdx: T, elements: k, elementNames: P, elementSections: u, nodeInputs: j, elementInputs: i, sectionShapes: d, info: { nNodes: R.length, nFrames: o, nShells: t, title: `SAP2000 (${o} frames, ${t} shells)` } };
}
function es(I) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { nodes: l, elements: N, nodeInputs: D, elementInputs: M } = I, x = { force: "KN", length: "m" };
  I.units && (I.units.force !== "KN" || I.units.length !== "m") && console.warn(`[s2k] el modelo va en kN\xB7m y el exportador NO convierte: se declara CurrUnits="KN, m, C" y se ignora "${I.units.force}, ${I.units.length}". Etiquetarlo de otra forma hace que SAP2000 lea las fuerzas escaladas.`);
  const H = I.title || "Awatif Model", Q = [], f = (o) => Q.push(o), w = () => Q.push(" ");
  f(`File ${H}.$2k was saved on m/d/yy at h:mm:ss`), w(), f('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), f("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), w();
  const X = [], V = (o) => {
    var _a2, _b2, _c2, _d2;
    const t = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(o)) || 0, a = (_b2 = M.poissonsRatios) == null ? void 0 : _b2.get(o), i = ((_c2 = M.shearModuli) == null ? void 0 : _c2.get(o)) || 0, d = a !== void 0 ? a : t > 0 && i > 0 ? Math.max(0, Math.min(0.5, t / (2 * i) - 1)) : 0.2, G = i > 0 ? i : t > 0 ? t / (2 * (1 + d)) : 0, j = ((_d2 = M.densities) == null ? void 0 : _d2.get(o)) || 0;
    return { E: t, nu: d, G, rho: j, key: `MAT_${Math.round(t)}_n${d.toFixed(4)}` };
  }, K = [], ee = [];
  if (N.forEach((o, t) => {
    o.length === 2 ? X.push(t) : o.length === 8 ? ee.push(t) : K.push(t);
  }), X.length > 0) {
    f('TABLE:  "CONNECTIVITY - FRAME"');
    for (const o of X) {
      const t = N[o];
      f(`   Frame=${o + 1}   JointI=${t[0] + 1}   JointJ=${t[1] + 1}   IsCurved=No`);
    }
    w();
  }
  if (K.length > 0) {
    f('TABLE:  "CONNECTIVITY - AREA"');
    for (const o of K) {
      const t = N[o], a = t.map((i, d) => `Joint${d + 1}=${i + 1}`).join("   ");
      f(`   Area=${o + 1}   NumJoints=${t.length}   ${a}`);
    }
    w();
  }
  if (ee.length > 0) {
    f('TABLE:  "CONNECTIVITY - SOLID"');
    for (const o of ee) {
      const t = N[o], a = [t[0], t[1], t[3], t[2], t[4], t[5], t[7], t[6]];
      f(`   Solid=${o + 1}   ${a.map((i, d) => `Joint${d + 1}=${i + 1}`).join("   ")}`);
    }
    w();
  }
  f('TABLE:  "COORDINATE SYSTEMS"'), f("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), w(), f('TABLE:  "DATABASE FORMAT TYPES"'), f("   UnitsCurr=Yes   OverrideE=No"), w();
  const te = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map();
  for (const o of X) {
    const t = ((_a = M.areas) == null ? void 0 : _a.get(o)) || 0, a = ((_b = M.momentsOfInertiaZ) == null ? void 0 : _b.get(o)) || 0, i = ((_c = M.momentsOfInertiaY) == null ? void 0 : _c.get(o)) || 0, d = ((_d = M.torsionalConstants) == null ? void 0 : _d.get(o)) || 0, G = ((_e = M.elasticities) == null ? void 0 : _e.get(o)) || 0, j = V(o).key, h = ((_f = M.shearAreasZ) == null ? void 0 : _f.get(o)) ?? 0, O = ((_g = M.shearAreasY) == null ? void 0 : _g.get(o)) ?? 0, $ = (_h = M.sectionShapes) == null ? void 0 : _h.get(o);
    let B;
    const F = ($ == null ? void 0 : $.type) === "CFT" && $.d > 0 && $.tw > 0 && $.tw < $.d / 2 && !($.b > 0 && $.h > 0);
    if (I.cftAs !== "general" && ($ == null ? void 0 : $.type) === "CFT" && G > 0 && (F || $.b > 0 && $.h > 0 && $.tw > 0 && $.tw < Math.min($.b, $.h) / 2)) {
      const q = F ? $.d - 2 * $.tw : 0, W = F ? 0 : $.b - 2 * $.tw, U = F ? 0 : $.h - 2 * $.tw, ne = F ? Math.PI * ($.d * $.d - q * q) / 4 : $.b * $.h - W * U, Z = F ? Math.PI * q * q / 4 : W * U, Me = $.fillE > 0 ? $.fillE / G : Math.max(0.01, Math.min(1, (t - ne) / Z)), re = Me * G, Se = 0.2, Ie = `MAT_${Math.round(re)}_n${Se.toFixed(4)}`, ye = V(o).rho;
      ie.has(Ie) || ie.set(Ie, { E: re, nu: Se, G: re / (2 * (1 + Se)), rho: ye * Me }), B = F ? { b: $.d, h: $.d, t: $.tw, Ec: re, nuC: Se, matFill: Ie, D: $.d } : { b: $.b, h: $.h, t: $.tw, Ec: re, nuC: Se, matFill: Ie };
    }
    const z = `A${t.toPrecision(6)}_Iz${a.toPrecision(6)}_s${h.toPrecision(6)}_${O.toPrecision(6)}${B ? B.D ? `_SDC${B.D}x${B.t}` : `_SD${B.b}x${B.h}x${B.t}` : ""}`;
    if (!te.has(z)) {
      let q = 0.3, W = 0.3;
      t > 0 && a > 0 && (q = Math.sqrt(12 * a / t), W = t / q), te.set(z, { A: t, Iz: a, Iy: i, J: d, b: W, h: q, matKey: j, As2: h > 0 ? h : t * 5 / 6, As3: O > 0 ? O : t * 5 / 6, sd: B });
    }
    const J = [...te.keys()].indexOf(z) + 1;
    ce.set(o, `SEC${J}`);
  }
  if (X.length > 0) {
    f('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const o of X) {
      const t = ce.get(o) || "SEC1";
      f(`   Frame=${o + 1}   AutoSelect=N.A.   AnalSect=${t}   MatProp=Default`);
    }
    w();
  }
  if (te.size > 0) {
    f('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let o = 0;
    for (const [, t] of te) {
      if (o++, t.sd) {
        f(`   SectionName=SEC${o}   Material=${t.matKey}   Shape="SD Section"   Area=${L(t.A)}   TorsConst=${L(t.J)}   I33=${L(t.Iz)}   I22=${L(t.Iy)}   I23=0   AS2=${L(t.As2)}   AS3=${L(t.As3)} _`), f("        Color=Cyan   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
        continue;
      }
      f(`   SectionName=SEC${o}   Material=${t.matKey}   Shape=General   t3=${L(t.h)}   t2=${L(t.b)}   Area=${L(t.A)}   TorsConst=${L(t.J)}   I33=${L(t.Iz)}   I22=${L(t.Iy)}   I23=0   AS2=${L(t.As2)}   AS3=${L(t.As3)} _`), f("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    w();
  }
  const oe = [...te.values()].map((o, t) => ({ sec: o, name: `SEC${t + 1}` })).filter((o) => o.sec.sd);
  if (oe.length > 0) {
    f('TABLE:  "SECTION DESIGNER PROPERTIES 01 - GENERAL"');
    for (const { name: a } of oe) f(`   SectionName=${a}   DesignType="No Check/Design"   DsgnOrChck=Check   IncludeVStr=No   AxisAngle=90   MeshSzAbs=0   MeshSzRel=0.05`);
    w();
    const o = oe.filter((a) => !a.sec.sd.D), t = oe.filter((a) => a.sec.sd.D);
    if (o.length > 0) {
      f('TABLE:  "SECTION DESIGNER PROPERTIES 09 - SHAPE BOX/TUBE"');
      for (const { sec: a, name: i } of o) {
        const d = a.sd;
        f(`   SectionName=${i}   ShapeName=TUBO   ShapeType="User Defined"   ShapeMat=${a.matKey}   ZOrder=1   FillColor=Gray4   XCenter=0   YCenter=0   Height=${L(d.h)}   Width=${L(d.b)}   FlngThick=${L(d.t)}   WebThick=${L(d.t)}   Rotation=0 _`), f('        CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0   DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0');
      }
      w();
    }
    if (t.length > 0) {
      f('TABLE:  "SECTION DESIGNER PROPERTIES 10 - SHAPE PIPE"');
      for (const { sec: a, name: i } of t) {
        const d = a.sd;
        f(`   SectionName=${i}   ShapeName=TUBO   ShapeType="User Defined"   ShapeMat=${a.matKey}   ZOrder=1   FillColor=Gray4   XCenter=0   YCenter=0   OuterDiam=${L(d.D)}   WallThick=${L(d.t)}   CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0 _`), f("        DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0");
      }
      w();
    }
    if (o.length > 0) {
      f('TABLE:  "SECTION DESIGNER PROPERTIES 12 - SHAPE SOLID RECTANGLE"');
      for (const { sec: a, name: i } of o) {
        const d = a.sd;
        f(`   SectionName=${i}   ShapeName=RELLENO   ShapeMat=${d.matFill}   ZOrder=2   FillColor=Gray4   XCenter=0   YCenter=0   Height=${L(d.h - 2 * d.t)}   Width=${L(d.b - 2 * d.t)}   Rotation=0   Reinforcing=No   CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0 _`), f("        DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0");
      }
      w();
    }
    if (t.length > 0) {
      f('TABLE:  "SECTION DESIGNER PROPERTIES 13 - SHAPE SOLID CIRCLE"');
      for (const { sec: a, name: i } of t) {
        const d = a.sd;
        f(`   SectionName=${i}   ShapeName=RELLENO   ShapeMat=${d.matFill}   ZOrder=2   FillColor=Gray4   XCenter=0   YCenter=0   Diameter=${L(d.D - 2 * d.t)}   Reinforcing=No   CoreDim="Program Determined"   BCoreMajor=0   DCoreMajorPositive=0`);
      }
      w();
    }
    f('TABLE:  "SECTION DESIGNER PROPERTIES 30 - FIBER GENERAL"');
    for (const { name: a } of oe) f(`   SectionName=${a}   NumFibersD2=3   NumFibersD3=3   CoordSys=Cartesian   GridAngle=0   LumpRebar=No   FiberPMM=No   FiberMC=No`);
    w();
  }
  {
    const o = X.filter((t) => {
      var _a2;
      const a = (_a2 = M.localAngles) == null ? void 0 : _a2.get(t);
      return a !== void 0 && isFinite(a) && Math.abs(a) > 1e-9;
    });
    if (o.length > 0) {
      f('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const t of o) f(`   Frame=${t + 1}   Angle=${L(M.localAngles.get(t))}   AdvanceAxes=No`);
      w();
    }
  }
  {
    const o = M.endOffsets, t = X.filter((a) => {
      const i = o == null ? void 0 : o.get(a);
      return !!i && (Math.abs(i[0]) > 1e-9 || Math.abs(i[1]) > 1e-9);
    });
    if (t.length > 0) {
      f('TABLE:  "FRAME OFFSET ALONG LENGTH ASSIGNMENTS"');
      for (const a of t) {
        const i = o.get(a);
        f(`   Frame=${a + 1}   Type=User   LengthI=${L(i[0])}   LengthJ=${L(i[1])}   RigidFactor=${L(i.length > 2 ? i[2] : 0)}`);
      }
      w();
    }
  }
  const se = !!I.layeredSection && K.length > 0, Ee = I.layeredSection, Ae = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
  if (!se) for (const o of K) {
    const t = ((_i = M.thicknesses) == null ? void 0 : _i.get(o)) || 0.1;
    (_j = M.elasticities) == null ? void 0 : _j.get(o);
    const a = V(o).key, i = ((_k = M.plateFormulations) == null ? void 0 : _k.get(o)) ?? 0, d = `t${t.toPrecision(6)}_f${i}`;
    Ae.has(d) || Ae.set(d, { t, matKey: a, formulacion: i });
    const G = [...Ae.keys()].indexOf(d) + 1;
    Te.set(o, `SSEC${G}`);
  }
  if (K.length > 0) {
    f('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of K) {
      const i = se ? Ee.name : Te.get(a) || "SSEC1";
      f(`   Area=${a + 1}   Section=${i}   MatProp=Default`);
    }
    w();
    const o = M.shellModifiers, t = K.filter((a) => {
      const i = o == null ? void 0 : o.get(a);
      return i && i.some((d) => Math.abs(d - 1) > 1e-12);
    });
    if (t.length > 0) {
      f('TABLE:  "AREA STIFFNESS MODIFIERS"');
      for (const a of t) {
        const i = o.get(a);
        f(`   Area=${a + 1}   f11=${L(i[0])}   f22=${L(i[1])}   f12=${L(i[2])}   m11=${L(i[3])}   m22=${L(i[4])}   m12=${L(i[5])}   v13=${L(i[6])}   v23=${L(i[7])}   MassMod=1   WeightMod=1`);
      }
      w();
    }
    if (f('TABLE:  "AREA SECTION PROPERTIES"'), se) {
      const a = Ee, i = ((_l = a.layers[0]) == null ? void 0 : _l.material) || "MAT_DEFAULT";
      f(`   Section=${a.name}   Material=${i}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${L(a.totalThickness)}   BendThick=${L(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, i] of Ae) {
        a++;
        const d = i.formulacion === 2 ? "Membrane" : i.formulacion === 3 ? "Plate-Thin" : i.formulacion === 4 ? "Plate-Thick" : i.formulacion === 1 ? "Shell-Thin" : "Shell-Thick", G = i.formulacion === 3 || i.formulacion === 4 ? "No" : "Yes";
        f(`   Section=SSEC${a}   Material=${i.matKey}   MatAngle=0   AreaType=Shell   Type=${d}   DrillDOF=${G}   Thickness=${L(i.t)}   BendThick=${L(i.t)}   Color=Cyan`);
      }
    }
    if (w(), se) {
      f('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = Ee;
      for (const i of a.layers) {
        const d = i.angle ?? 0, G = i.numIntPts ?? 3;
        f(`   Section=${a.name}   LayerName=${i.name}   Distance=${L(i.distance)}   Thickness=${L(i.thickness)}   Type=Shell   NumIntPts=${G}   Material=${i.material}   MatAngle=${L(d * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      w();
    }
  }
  f('TABLE:  "JOINT COORDINATES"');
  for (let o = 0; o < l.length; o++) {
    const t = l[o];
    f(`   Joint=${o + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${L(t[0])}   Y=${L(t[1])}   Z=${L(t[2])}   SpecialJt=No`);
  }
  if (w(), D.supports && D.supports.size > 0) {
    f('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [o, t] of D.supports) {
      if (!t.some((i) => i)) continue;
      const a = (i) => i ? "Yes" : "No";
      f(`   Joint=${o + 1}   U1=${a(t[0])}   U2=${a(t[1])}   U3=${a(t[2])}   R1=${a(t[3])}   R2=${a(t[4])}   R3=${a(t[5])}`);
    }
    w();
  }
  {
    const o = /* @__PURE__ */ new Map();
    for (const t of D.springs ?? []) {
      if (!(t.k > 0)) continue;
      const a = o.get(t.node) ?? [0, 0, 0, 0, 0, 0];
      a[t.dof] += t.k, o.set(t.node, a);
    }
    if (o.size > 0) {
      f('TABLE:  "JOINT SPRING ASSIGNMENTS 1 - UNCOUPLED"');
      for (const [t, a] of [...o].sort((i, d) => i[0] - d[0])) f(`   Joint=${t + 1}   CoordSys=Global   U1=${L(a[0])}   U2=${L(a[1])}   U3=${L(a[2])}   R1=${L(a[3])}   R2=${L(a[4])}   R3=${L(a[5])}`);
      w();
    }
  }
  const r = D.diaphragms;
  if (r && r.size > 0) {
    const o = /* @__PURE__ */ new Map();
    for (const [a, i] of r) {
      const d = Math.round(i);
      if (d === 0) continue;
      const G = Math.abs(d);
      o.has(G) || o.set(G, []), o.get(G).push(a);
    }
    const t = [...o].filter(([, a]) => a.length >= 2);
    if (t.length > 0) {
      f('TABLE:  "CONSTRAINT DEFINITIONS - DIAPHRAGM"');
      for (const [a] of t) f(`   Name=DIAPH${a}   CoordSys=GLOBAL   Axis=Z`);
      w(), f('TABLE:  "JOINT CONSTRAINT ASSIGNMENTS"');
      for (const [a, i] of t) for (const d of i) f(`   Joint=${d + 1}   Constraint=DIAPH${a}`);
      w();
    }
  }
  const T = I.selfWtMult ?? 1;
  f('TABLE:  "LOAD PATTERN DEFINITIONS"'), f(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${T}`), w(), f('TABLE:  "LOAD CASE DEFINITIONS"'), f('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), w(), f('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), f('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), w();
  const R = M.frameLoads, k = /* @__PURE__ */ new Map();
  if ((_m = D.loads) == null ? void 0 : _m.forEach((o, t) => k.set(t, [...o])), R && R.size > 0) {
    const o = (t, a) => {
      const i = k.get(t) ?? [0, 0, 0, 0, 0, 0];
      k.set(t, i.map((d, G) => d - a[G]));
    };
    for (const [t, a] of R) {
      const i = N[t];
      if (!i || i.length !== 2) continue;
      const d = l[i[0]], G = l[i[1]], j = [G[0] - d[0], G[1] - d[1], G[2] - d[2]], h = Math.hypot(j[0], j[1], j[2]);
      if (h < 1e-9) continue;
      const O = [j[0] / h, j[1] / h, j[2] / h], $ = h * h / 12, B = [O[1] * a[2] - O[2] * a[1], O[2] * a[0] - O[0] * a[2], O[0] * a[1] - O[1] * a[0]];
      o(i[0], [a[0] * h / 2, a[1] * h / 2, a[2] * h / 2, $ * B[0], $ * B[1], $ * B[2]]), o(i[1], [a[0] * h / 2, a[1] * h / 2, a[2] * h / 2, -$ * B[0], -$ * B[1], -$ * B[2]]);
    }
  }
  if (k.size > 0) {
    f('TABLE:  "JOINT LOADS - FORCE"');
    for (const [o, t] of k) t.some((a) => Math.abs(a) > 1e-12) && f(`   Joint=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${L(t[0])}   F2=${L(t[1])}   F3=${L(t[2])}   M1=${L(t[3])}   M2=${L(t[4])}   M3=${L(t[5])}`);
    w();
  }
  const P = M.frameLoads;
  if (P && P.size > 0) {
    f('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [o, t] of P) {
      const a = N[o];
      if (!a || a.length !== 2) continue;
      const i = l[a[0]], d = l[a[1]], G = Math.hypot(d[0] - i[0], d[1] - i[1], d[2] - i[2]);
      ["X", "Y", "Z"].forEach((j, h) => {
        Math.abs(t[h]) < 1e-12 || f(`   Frame=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${j}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${L(G)}   FOverLA=${L(t[h])}   FOverLB=${L(t[h])}`);
      });
    }
    w();
  }
  const u = /* @__PURE__ */ new Map();
  for (let o = 0; o < N.length; o++) {
    const { E: t, nu: a, G: i, rho: d, key: G } = V(o);
    u.has(G) || u.set(G, { E: t, nu: a, G: i, rho: d });
  }
  if (ee.length > 0) {
    const o = M.solidIncompatible === false ? "No" : "Yes", t = /* @__PURE__ */ new Map();
    for (const a of ee) {
      const { E: i, nu: d, G, rho: j, key: h } = V(a);
      u.has(h) || u.set(h, { E: i, nu: d, G, rho: j }), t.has(h) || t.set(h, `SOL${t.size + 1}`);
    }
    f('TABLE:  "SOLID PROPERTY DEFINITIONS"');
    for (const [a, i] of t) f(`   SolidProp=${i}   Material=${a}   MatAngleA=0   MatAngleB=0   MatAngleC=0   InComp=${o}   Color=Yellow`);
    w(), f('TABLE:  "SOLID PROPERTY ASSIGNMENTS"');
    for (const a of ee) f(`   Solid=${a + 1}   SolidProp=${t.get(V(a).key)}`);
    w();
  }
  for (const [o, t] of ie) u.has(o) || u.set(o, t);
  f('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [o] of u) f(`   Material=${o}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  w(), f('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [o, t] of u) f(`   Material=${o}   UnitWeight=${L(t.rho * 9.81)}   UnitMass=${L(t.rho)}   E1=${L(t.E)}   G12=${L(t.G)}   U12=${L(t.nu)}   A1=9.9E-06`);
  w(), f('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [o] of u) f(`   Material=${o}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return w(), f('TABLE:  "PROGRAM CONTROL"'), f(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${x.force}, ${x.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), w(), f("END TABLE DATA"), f(""), Q.join(`\r
`);
}
function L(I) {
  return I === 0 || Math.abs(I) < 1e-15 ? "0" : Math.abs(I) >= 1e6 || Math.abs(I) < 1e-3 && Math.abs(I) > 0 ? I.toExponential(8) : parseFloat(I.toPrecision(10)).toString();
}
function _t(I, l, N = 0.05) {
  const D = l.map(([M, x]) => `${(+M).toFixed(4)} ${(+x).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${I}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${N}  SPECTYPE "USER"  `, `  FUNCTION "${I}"  TIMEVAL "${D}"  `];
}
function Kt(I) {
  const { name: l, func: N, modalCase: D = "Modal", sfX: M = 9.81, sfY: x = 9.81 } = I, H = [`  LOADCASE "${l}"  TYPE  "Response Spectrum"  MODALCASE  "${D}"  `];
  return M && H.push(`  LOADCASE "${l}"  ACCEL  "U1"  FUNC  "${N}"  SF  ${M}  `), x && H.push(`  LOADCASE "${l}"  ACCEL  "U2"  FUNC  "${N}"  SF  ${x}  `), H;
}
function Rt(I) {
  const { name: l = "Modal", ritz: N = false, nModes: D = 12 } = I;
  return N ? [`  LOADCASE "${l}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${l}"  MAXMODES  ${D} MINMODES  1 `, `  LOADCASE "${l}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${l}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${l}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${l}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${l}"  MAXMODES  ${D} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function ts(I) {
  var _a;
  const l = (_a = I.e2kModel) == null ? void 0 : _a.rawSections;
  let N = l && l.size > 0 ? Xt(l, I.e2kModel) : Vt(I);
  return I.seismicNEC && (N = Zt(N, I.seismicNEC)), N;
}
function Zt(I, l) {
  const N = I.includes(`\r
`) ? `\r
` : `
`, D = I.split(/\r?\n/), M = l.name ?? "NEC", x = _t(M, l.points, l.dampRatio ?? 0.05), H = l.modalCase ?? "Modal", Q = Kt({ name: l.caseName ?? "Sismo NEC", func: M, modalCase: H, sfX: l.sfX, sfY: l.sfY });
  let f = [];
  const w = (X) => D.some((V) => X.test(V));
  if (l.modal) {
    const X = new RegExp(`^\\s*LOADCASE\\s+"${H}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let V = D.length - 1; V >= 0; V--) X.test(D[V]) && D.splice(V, 1);
    f = Rt({ name: H, ritz: !!l.modal.ritz, nModes: l.modal.nModes });
  } else w(new RegExp(`LOADCASE\\s+"${H}"\\s+TYPE\\s+"Modal`)) || (f = Rt({ name: H }));
  return Lt(D, "FUNCTIONS", x), Lt(D, "LOAD CASES", [...f, ...Q]), D.join(N);
}
function Lt(I, l, N) {
  const D = I.findIndex((H) => H.trim() === `$ ${l}`);
  if (D >= 0) {
    I.splice(D + 1, 0, ...N);
    return;
  }
  const M = I.findIndex((H) => H.trim() === "END"), x = M >= 0 ? M : I.length;
  I.splice(x, 0, `$ ${l}`, ...N, "");
}
function Xt(I, l) {
  const N = [], D = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  N.push("$ File exported from Hekatan Struct Lineal (round-trip)"), N.push("");
  for (const M of D) {
    const x = I.get(M);
    if (!(!x || x.length === 0)) {
      N.push(`$ ${M}`);
      for (const H of x) N.push(H);
      N.push("");
    }
  }
  for (const [M, x] of I) if (!D.includes(M) && x.length !== 0) {
    N.push(`$ ${M}`);
    for (const H of x) N.push(H);
    N.push("");
  }
  return N.push("  END"), N.push("$ END OF MODEL FILE"), N.join(`\r
`);
}
function Vt(I) {
  var _a, _b, _c, _d, _e2, _f, _g;
  const { nodes: l, elements: N, nodeInputs: D, elementInputs: M, title: x, units: H } = I, Q = I.shellLoads ?? M.shellSurfaceLoads;
  let f;
  Q instanceof Map && (f = /* @__PURE__ */ new Map(), Q.forEach((e, s) => {
    f.set(s, typeof e == "number" ? { value: e } : e);
  }));
  const w = I.shellAngles ?? M.shellAngles, X = M.cargaDeArea, V = !!(f && f.size > 0), K = M.selfWeight, ee = M.frameLoads, te = (I.weightMode ?? "auto") === "auto" && K !== void 0, ie = /* @__PURE__ */ new Map(), ce = (e, s) => {
    const n = ie.get(e) ?? [0, 0, 0, 0, 0, 0];
    ie.set(e, n.map((c, E) => c + s[E]));
  }, oe = /* @__PURE__ */ new Set();
  if (te) {
    if (ee) for (const [e, s] of ee) {
      const n = N[e];
      if (!n || n.length !== 2) continue;
      const c = l[n[0]], E = l[n[1]], S = [E[0] - c[0], E[1] - c[1], E[2] - c[2]], A = Math.hypot(S[0], S[1], S[2]);
      if (A < 1e-9) continue;
      const p = [S[0] / A, S[1] / A, S[2] / A], m = A * A / 12, Y = [p[1] * s[2] - p[2] * s[1], p[2] * s[0] - p[0] * s[2], p[0] * s[1] - p[1] * s[0]];
      ce(n[0], [s[0] * A / 2, s[1] * A / 2, s[2] * A / 2, m * Y[0], m * Y[1], m * Y[2]]), ce(n[1], [s[0] * A / 2, s[1] * A / 2, s[2] * A / 2, -m * Y[0], -m * Y[1], -m * Y[2]]), oe.add(e);
    }
    if (K && K > 0) {
      const s = M.endOffsets;
      N.forEach((n, c) => {
        var _a2, _b2, _c2;
        const E = ((_a2 = M.densities) == null ? void 0 : _a2.get(c)) ?? 0;
        if (E) {
          if (n.length === 2) {
            const S = ((_b2 = M.areas) == null ? void 0 : _b2.get(c)) ?? 0, A = l[n[0]], p = l[n[1]], m = [p[0] - A[0], p[1] - A[1], p[2] - A[2]];
            let Y = Math.hypot(m[0], m[1], m[2]);
            const g = s == null ? void 0 : s.get(c);
            if (g) {
              const C = Math.hypot(m[0], m[1]);
              C > 1e-9 && Math.abs(Math.atan2(Math.abs(m[2]), C)) * 180 / Math.PI < 20 && (Y = Math.max(Y - g[0] - g[1], 0));
            }
            const y = S * Y * E * 9.80665 * K;
            ce(n[0], [0, 0, -y / 2, 0, 0, 0]), ce(n[1], [0, 0, -y / 2, 0, 0, 0]);
          } else if (n.length === 4) {
            const S = ((_c2 = M.thicknesses) == null ? void 0 : _c2.get(c)) ?? 0, A = n.map((C) => l[C]);
            let p = 0, m = 0, Y = 0;
            for (let C = 0; C < 4; C++) {
              const v = A[C], _ = A[(C + 1) % 4];
              p += v[1] * _[2] - v[2] * _[1], m += v[2] * _[0] - v[0] * _[2], Y += v[0] * _[1] - v[1] * _[0];
            }
            const g = Math.hypot(p, m, Y) / 2, y = S * g * E * 9.80665 * K;
            for (const C of n) ce(C, [0, 0, -y / 4, 0, 0, 0]);
          }
        }
      });
    }
  }
  const se = (e, s) => {
    const n = ie.get(e);
    return [s[0] - ((n == null ? void 0 : n[0]) ?? 0), s[1] - ((n == null ? void 0 : n[1]) ?? 0), s[2] - (V ? (X == null ? void 0 : X.get(e)) ?? 0 : 0) - ((n == null ? void 0 : n[2]) ?? 0)];
  }, Ee = (e, s) => {
    const n = ie.get(e);
    return [(s[3] ?? 0) - ((n == null ? void 0 : n[3]) ?? 0), (s[4] ?? 0) - ((n == null ? void 0 : n[4]) ?? 0), (s[5] ?? 0) - ((n == null ? void 0 : n[5]) ?? 0)];
  }, Ae = "N", Te = "MM", r = [], T = (e) => Math.round(e * 1e4) / 1e4, R = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), k = 1e3, P = 1e3, u = (e) => e * P, o = (e) => e * k, t = (e) => e * k, a = (e) => e * k * P, i = (e) => e * k / P ** 2, d = (e) => e * k / P ** 3, G = /* @__PURE__ */ new Date(), j = `${G.getMonth() + 1}/${G.getDate()}/${G.getFullYear()}  ${G.getHours()}:${String(G.getMinutes()).padStart(2, "0")}:${String(G.getSeconds()).padStart(2, "0")}`;
  r.push(`$ File   "Hekatan_export.e2k"  saved ${j} in ETABS 22.6.0`), r.push(""), r.push("$ PROGRAM INFORMATION"), r.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), r.push(""), r.push("$ CONTROLS"), r.push(`  UNITS  "${Ae}"  "${Te}"  "C"  `), r.push('  TITLE1  "Hekatan Struct Lineal export"  '), x && r.push(`  TITLE2  "${x}"  `), r.push("  PREFERENCE  MERGETOL 0.001"), r.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), r.push("");
  const h = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set();
  l.forEach((e) => {
    h.add(T(e[0])), O.add(T(e[1]));
  });
  const $ = [...h].sort((e, s) => e - s), B = [...O].sort((e, s) => e - s);
  r.push("$ GRIDS"), r.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), $.forEach((e, s) => {
    const n = s < 26 ? String.fromCharCode(65 + s) : String.fromCharCode(65 + s % 26).repeat(Math.floor(s / 26) + 1);
    r.push(`  GRID "G1"  LABEL "${n}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), B.forEach((e, s) => {
    r.push(`  GRID "G1"  LABEL "${s + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), r.push("");
  const F = 3, z = 0.5, J = /* @__PURE__ */ new Map();
  l.forEach((e) => {
    const s = T(e[2]);
    J.set(s, (J.get(s) ?? 0) + 1);
  });
  const q = /* @__PURE__ */ new Set();
  l.forEach((e) => q.add(T(e[2])));
  const W = [...q].sort((e, s) => e - s);
  let U = W.filter((e) => (J.get(e) ?? 0) >= F);
  if (U.length > 1) {
    const e = [U[0]];
    for (const s of U.slice(1)) s - e[e.length - 1] < z ? e[e.length - 1] = s : e.push(s);
    U = e;
  }
  U.length || (U = [W[0], W[W.length - 1]]), U[0] !== W[0] && U.unshift(W[0]), U[U.length - 1] !== W[W.length - 1] && U.push(W[W.length - 1]);
  const ne = [], Z = /* @__PURE__ */ new Map();
  ne.push("Base"), Z.set(U[0], "Base");
  for (let e = 1; e < U.length; e++) {
    const s = `Level_${e}`;
    ne.push(s), Z.set(U[e], s);
  }
  const Me = (e) => {
    const s = T(e);
    if (Z.has(s)) return { story: Z.get(s), dz: 0 };
    for (let c = 0; c < U.length; c++) if (U[c] >= s) return { story: Z.get(U[c]), dz: T(U[c] - s) };
    const n = U[U.length - 1];
    return { story: Z.get(n), dz: T(n - s) };
  };
  r.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = U.length - 1; e >= 1; e--) r.push(`  STORY "${ne[e]}"  HEIGHT ${T(u(U[e] - U[e - 1]))} MASTERSTORY "Yes"  `);
  U.length > 0 && r.push(`  STORY "Base"  ELEV ${T(u(U[0]))} `), r.push(""), N.some((e) => e.length === 4), r.push("$ DIAPHRAGM NAMES"), r.push('  DIAPHRAGM "D1"    TYPE RIGID'), r.push(""), r.push("$ MATERIAL PROPERTIES");
  const re = 980665e-8, Se = (e) => {
    var _a2;
    const s = (_a2 = M.densities) == null ? void 0 : _a2.get(e);
    if (s !== void 0) return s > 100 ? s * re : s * 9.80665;
  }, Ie = (e) => {
    var _a2;
    const s = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, n = Se(e);
    return `${s}|${n === void 0 ? "-" : n.toFixed(4)}`;
  }, ye = /* @__PURE__ */ new Set();
  (_a = M.elasticities) == null ? void 0 : _a.forEach((e, s) => ye.add(Ie(s)));
  const Re = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map();
  let Ft = 0, yt = 0;
  for (const e of ye) {
    const s = parseFloat(e.split("|")[0]), n = e.split("|")[1], c = s >= 1e8, E = c ? `Steel_${++Ft}` : `Conc_${++yt}`;
    Re.set(e, E), be.set(e, c);
    const S = n !== "-" ? parseFloat(n) : c ? 76.97 : 24, A = i(s), p = d(S), m = (() => {
      const y = I.elementInputs.poissonsRatios;
      if (y) {
        for (const [C, v] of y) if (Ie(C) === e) return v;
      }
    })(), Y = m !== void 0 ? m : c ? 0.3 : 0.2, g = c ? 117e-7 : 1e-5;
    if (c) {
      r.push(`  MATERIAL  "${E}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${R(p)}`), r.push(`  MATERIAL  "${E}"    SYMTYPE "Isotropic"  E ${T(A)}  U ${Y}  A ${g}`);
      const y = 345e3, C = 45e4;
      r.push(`  MATERIAL  "${E}"  FY ${T(i(y))}  FU ${T(i(C))}  FYE ${T(i(y * 1.1))}  FUE ${T(i(C * 1.1))}`);
    } else r.push(`  MATERIAL  "${E}"    TYPE "Concrete"    WEIGHTPERVOLUME ${R(p)}`), r.push(`  MATERIAL  "${E}"    SYMTYPE "Isotropic"  E ${T(A)}  U ${Y}  A ${g}`), r.push(`  MATERIAL  "${E}"    FC ${T(i(24e3))}`);
  }
  const nt = /* @__PURE__ */ new Map();
  {
    const e = /* @__PURE__ */ new Map();
    (_b = M.sectionShapes) == null ? void 0 : _b.forEach((n, c) => {
      var _a2;
      if ((n == null ? void 0 : n.type) !== "CFT" || !(n.fillE > 0)) return;
      const E = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(c)) ?? 0;
      if (!(E > 0)) return;
      const S = n.fillE / E, A = Se(c) ?? 76.97, p = `${n.fillE}|${(S * A).toFixed(4)}`;
      let m = e.get(p);
      m || (m = `ConcFill_${e.size + 1}`, e.set(p, m), r.push(`  MATERIAL  "${m}"    TYPE "Concrete"    WEIGHTPERVOLUME ${R(d(S * A))}`), r.push(`  MATERIAL  "${m}"    SYMTYPE "Isotropic"  E ${T(i(n.fillE))}  U 0.2  A 1.0e-5`), r.push(`  MATERIAL  "${m}"    FC ${T(i(24e3))}`)), nt.set(c, m);
    });
  }
  r.push(""), r.push("$ FRAME SECTIONS");
  const we = /* @__PURE__ */ new Set(), je = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Map(), de = 0.05;
  N.forEach((e, s) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j;
    if (e.length !== 2) return;
    const n = (_a2 = M.sectionShapes) == null ? void 0 : _a2.get(s), c = ((_b2 = M.elasticities) == null ? void 0 : _b2.get(s)) ?? 0, E = Re.get(Ie(s)) || "Conc_1", S = be.get(Ie(s)) ?? c >= 1e8, A = ((_c2 = M.areas) == null ? void 0 : _c2.get(s)) ?? 0, p = ((_d2 = M.momentsOfInertiaZ) == null ? void 0 : _d2.get(s)) ?? 0, m = ((_e3 = M.momentsOfInertiaY) == null ? void 0 : _e3.get(s)) ?? 0, Y = ((_f2 = M.torsionalConstants) == null ? void 0 : _f2.get(s)) ?? 0;
    let g = (n == null ? void 0 : n.type) || "rect", y = (n == null ? void 0 : n.h) ?? 0, C = (n == null ? void 0 : n.b) ?? 0, v = (n == null ? void 0 : n.d) ?? 0;
    const _ = (n == null ? void 0 : n.tf) ?? 0, ae = (n == null ? void 0 : n.tw) ?? 0;
    if (!n && y <= 0 && C <= 0 && v <= 0 && A > 0 && p > 0 && m > 0) {
      const pe = (_g2 = M.cantos) == null ? void 0 : _g2.get(s), Fe = (_h = M.anchos) == null ? void 0 : _h.get(s);
      y = pe && pe > 0 ? pe : Math.sqrt(12 * p / A), C = Fe && Fe > 0 ? Fe : A / y, (!isFinite(y) || y < de) && (y = de), (!isFinite(C) || C < de) && (C = de), g = "general";
    } else y <= 0 && C <= 0 && v <= 0 && A > 0 && (p > 0 ? (y = Math.sqrt(12 * p / A), C = A / y) : y = C = Math.sqrt(A), (!isFinite(y) || y < de) && (y = de), (!isFinite(C) || C < de) && (C = de), g = "rect");
    y <= 0 && C <= 0 && v <= 0 && (y = 0.3, C = 0.3, g = "rect");
    const We = (n == null ? void 0 : n.name) ? `NAME_${n.name}` : `${g}_${T(y)}_${T(C)}_${T(v)}_${T(_)}_${T(ae)}_${E}`;
    (n == null ? void 0 : n.name) && !Ge.has(We) && Ge.set(We, n.name);
    let fe = Ge.get(We);
    if (!fe) {
      const pe = S ? "S" : "C";
      g === "general" ? fe = `${pe}_G${we.size + 1}` : g === "rect" ? fe = `${pe}_R${Math.round(C * 100)}x${Math.round(y * 100)}` : g === "circ" ? fe = `${pe}_C_D${Math.round(v * 100)}` : g === "I" ? fe = `${pe}_I${Math.round(y * 100)}x${Math.round(C * 100)}` : g === "HSS" ? fe = `${pe}_HSS${Math.round(C * 100)}x${Math.round(y * 100)}x${Math.round(ae * 1e3)}` : fe = `${pe}_Sec${we.size + 1}`, Ge.set(We, fe);
    }
    if (je.set(s, fe), we.has(fe)) return;
    we.add(fe);
    const ze = nt.get(s);
    if (g === "CFT" && ze && v > 0 && ae > 0 && !(y > 0 && C > 0)) {
      r.push(`  FRAMESECTION  "${fe}"  MATERIAL "${E}"  SHAPE "Filled Steel Pipe"  D ${T(u(v))} T ${T(u(ae))} FILLMATERIAL "${ze}"`);
      return;
    }
    if (g === "CFT" && ze && y > 0 && C > 0 && ae > 0) {
      r.push(`  FRAMESECTION  "${fe}"  MATERIAL "${E}"  SHAPE "Filled Steel Tube"  D ${T(u(y))} B ${T(u(C))} TF ${T(u(ae))} TW ${T(u(ae))} FILLMATERIAL "${ze}"`);
      return;
    }
    const zt = A > 0 && p > 0 && m > 0;
    let he;
    g === "general" || zt ? he = "General" : g === "I" ? he = "Steel I/Wide Flange" : g === "HSS" ? he = "Steel Tube" : g === "CFT" ? he = "Filled Steel Tube" : g === "pipe" ? he = "Steel Pipe" : g === "L" ? he = "Steel Angle" : g === "C" ? he = "Steel Channel" : g === "2C" ? he = "Steel Double Channel" : g === "circ" ? he = "Concrete Circle" : he = "Concrete Rectangular";
    let me = `  FRAMESECTION  "${fe}"  MATERIAL "${E}"  SHAPE "${he}"`;
    if (he === "General") {
      const pe = ((_i = M.shearAreasZ) == null ? void 0 : _i.get(s)) || A * 5 / 6, Fe = ((_j = M.shearAreasY) == null ? void 0 : _j.get(s)) || A * 5 / 6;
      me += `  D ${T(u(y))} B ${T(u(C))} AREA ${R(A * 1e6)} AS2 ${R(pe * 1e6)} AS3 ${R(Fe * 1e6)} I33 ${R(p * 1e12)} I22 ${R(m * 1e12)} TORSION ${R((Y || p + m) * 1e12)} S33POS ${R(2 * p / y * 1e9)} S33NEG ${R(2 * p / y * 1e9)} S22POS ${R(2 * m / C * 1e9)} S22NEG ${R(2 * m / C * 1e9)} Z33 ${R(2 * p / y * 1e9)} Z22 ${R(2 * m / C * 1e9)} R33 ${R(Math.sqrt(p / A) * 1e3)} R22 ${R(Math.sqrt(m / A) * 1e3)} `, r.push(me);
      return;
    }
    y && (me += `  D ${T(u(y))}`), C && (me += `  B ${T(u(C))}`), v && !y && (me += `  D ${T(u(v))}`), _ && (me += `  TF ${T(u(_))}`), ae && (me += `  TW ${T(u(ae))}`), r.push(me);
  }), r.push("");
  const Be = /* @__PURE__ */ new Map();
  let bt = 0;
  l.forEach((e) => {
    const { dz: s } = Me(e[2]), n = `${T(e[0])},${T(e[1])},${s}`;
    Be.has(n) || Be.set(n, `${++bt}`);
  });
  const Ye = /* @__PURE__ */ new Map(), Je = [];
  {
    const e = /* @__PURE__ */ new Map();
    for (const n of D.springs ?? []) {
      if (!(n.k > 0)) continue;
      const c = e.get(n.node) ?? [0, 0, 0, 0, 0, 0];
      c[n.dof] += n.k, e.set(n.node, c);
    }
    const s = /* @__PURE__ */ new Map();
    for (const [n, c] of e) {
      const E = c.map((p, m) => m < 3 ? p * k / P : p * k * P), S = E.map((p) => +p.toPrecision(12)).join("|");
      let A = s.get(S);
      if (!A) {
        A = `SPR${s.size + 1}`, s.set(S, A);
        const p = ["UX", "UY", "UZ", "RX", "RY", "RZ"], m = E.map((Y, g) => `${p[g]}  ${+Y.toPrecision(12)}`);
        Je.push(`  POINTSPRING  "${A}"  NONLINEARSPECOPTION  "LINKS"  ${m.join(" ")} `);
      }
      Ye.set(n, A);
    }
    Je.length && (r.push("$ POINT SPRING PROPERTIES"), Je.forEach((n) => r.push(n)), r.push(""));
  }
  r.push("$ POINT COORDINATES");
  for (const [e, s] of Be) {
    const [n, c, E] = e.split(",").map(Number);
    r.push(E ? `  POINT "${s}"  ${T(u(n))} ${T(u(c))} ${T(u(E))} ` : `  POINT "${s}"  ${T(u(n))} ${T(u(c))} `);
  }
  r.push("");
  const $e = (e) => {
    const s = l[e], { story: n, dz: c } = Me(s[2]), E = `${T(s[0])},${T(s[1])},${c}`;
    return { pt: Be.get(E) || "1", story: n };
  }, at = (e) => {
    var _a2, _b2, _c2, _d2, _e3, _f2;
    const s = [], n = (_a2 = I.propertyModifiers) == null ? void 0 : _a2.get(e);
    n && n.some((g) => Math.abs(g - 1) > 1e-9) && s.push(`PROPMODIFIERS "${n.map((g) => T(g)).join(" ")}"`);
    const c = (_b2 = M.localAngles) == null ? void 0 : _b2.get(e);
    c !== void 0 && isFinite(c) && Math.abs(c) > 1e-9 && s.push(`ANG ${T(c)}`);
    const E = (_c2 = M.momentReleases) == null ? void 0 : _c2.get(e);
    if (E && E.some((g) => g)) {
      const g = [];
      E.length === 12 ? (E[0] && g.push("PI"), E[1] && g.push("V2I"), E[2] && g.push("V3I"), E[3] && g.push("TI"), E[4] && g.push("M2I"), E[5] && g.push("M3I"), E[6] && g.push("PJ"), E[7] && g.push("V2J"), E[8] && g.push("V3J"), E[9] && g.push("TJ"), E[10] && g.push("M2J"), E[11] && g.push("M3J")) : E.length === 6 && (E[0] && g.push("TI"), E[1] && g.push("M2I"), E[2] && g.push("M3I"), E[3] && g.push("TJ"), E[4] && g.push("M2J"), E[5] && g.push("M3J")), g.length > 0 && s.push(`RELEASE "${g.join(" ")}"`);
    }
    const S = (_d2 = M.insertionPoints) == null ? void 0 : _d2.get(e);
    S && (Math.abs(S[0]) > 1e-9 || Math.abs(S[1]) > 1e-9) && s.push(`LATEROFFSET ${T(u(S[0]))} TRANSOFFSET ${T(u(S[1]))}`);
    const A = (_e3 = M.rigidOffsets) == null ? void 0 : _e3.get(e), p = (_f2 = M.endOffsets) == null ? void 0 : _f2.get(e), m = p ? [p[0], p[1]] : A, Y = p && p.length > 2 ? p[2] : 0;
    return m && (Math.abs(m[0]) > 1e-9 || Math.abs(m[1]) > 1e-9) && s.push(`LENGTHOFFI ${T(u(m[0]))} LENGTHOFFJ ${T(u(m[1]))} RIGIDZONE ${T(Y)}`), s.length > 0 ? ` ${s.join(" ")} ` : "";
  }, _e = [], it = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Map();
  N.forEach((e, s) => {
    if (e.length !== 2) return;
    const n = Dt(l, e);
    if (n === "BEAM") return;
    const c = l[e[0]][2] <= l[e[1]][2] ? e[0] : e[1], E = l[e[0]][2] <= l[e[1]][2] ? e[1] : e[0];
    if (Math.abs(l[c][0] - l[E][0]) > 1e-6 || Math.abs(l[c][1] - l[E][1]) > 1e-6) return;
    const S = $e(c), A = je.get(s) || `Sec_${s}`, p = `${S.pt}_${A}_${n}`;
    ke.has(p) || ke.set(p, []), ke.get(p).push({ i: s, bot: c, top: E, zBot: T(l[c][2]), zTop: T(l[E][2]), planPt: S.pt, secName: A, type: n });
  }), ke.forEach((e, s) => {
    e.sort((c, E) => c.zBot - E.zBot);
    let n = 0;
    for (let c = 1; c <= e.length; c++) if (c === e.length || Math.abs(e[c].zBot - e[c - 1].zTop) > 1e-6) {
      const S = e.slice(n, c);
      S.length >= 1 && (_e.push({ elemIndices: S.map((A) => A.i), planPt: S[0].planPt, bottomNodeIdx: S[0].bot, topNodeIdx: S[S.length - 1].top, secName: S[0].secName, type: S[0].type, nSegments: S.length }), S.forEach((A) => it.add(A.i))), n = c;
    }
  }), r.push("$ LINE CONNECTIVITIES");
  const Ke = [], Ue = (e) => ne.indexOf(e), ct = /* @__PURE__ */ new Map(), rt = (e, s, n, c, E, S, A, p) => {
    const m = $e(c), Y = $e(n);
    p !== void 0 && ct.set(p, { name: e, story: m.story });
    const g = Ue(m.story) - Ue(Y.story);
    g <= 0 ? r.push(`  LINE  "${e}"  BEAM  "${Y.pt}"  "${m.pt}"  0`) : r.push(`  LINE  "${e}"  ${s}  "${Y.pt}"  "${m.pt}"  ${g}`), Ke.push(`  LINEASSIGN  "${e}"  "${m.story}"  SECTION "${E}" ${S} MINNUMSTA ${A} AUTOMESH "YES"  MESHATINTERSECTIONS "${M.meshAtIntersections === false ? "NO" : "YES"}"  `);
  }, Et = /* @__PURE__ */ new Map();
  _e.forEach((e, s) => {
    const n = at(e.elemIndices[0]), c = [];
    let E = [];
    e.elemIndices.forEach((S, A) => {
      E.push(S);
      const [p, m] = N[S], Y = l[p][2] >= l[m][2] ? p : m;
      (Me(l[Y][2]).dz === 0 || A === e.elemIndices.length - 1) && (c.push(E), E = []);
    }), c.forEach((S) => {
      const [A, p] = N[S[0]], m = l[A][2] <= l[p][2] ? A : p, [Y, g] = N[S[S.length - 1]], y = l[Y][2] >= l[g][2] ? Y : g;
      Ue($e(y).story) - Ue($e(m).story);
      let C = `C${s + 1}`;
      for (let v = 1; ; v++) {
        const _ = r.length;
        rt(C, e.type, m, y, e.secName, n, S.length);
        const ae = r[_], ot = Et.get(C);
        if (ot === void 0) {
          Et.set(C, ae);
          break;
        }
        if (r.splice(_, r.length - _), ot === ae) break;
        Ke.pop(), C = `C${s + 1}_${v}`;
      }
    });
  }), N.forEach((e, s) => {
    if (e.length !== 2 || it.has(s)) return;
    const n = Dt(l, e), c = je.get(s) || `Sec_${s}`, E = at(s), S = l[e[0]][2] <= l[e[1]][2] ? e[0] : e[1], A = l[e[0]][2] <= l[e[1]][2] ? e[1] : e[0];
    rt(`E${s + 1}`, n === "BEAM" ? "BRACE" : n, S, A, c, E, 3, s);
  }), r.push("");
  const Le = I.weightMode ?? "auto", ge = /* @__PURE__ */ new Set();
  r.push("$ POINT ASSIGNS"), (_c = D.supports) == null ? void 0 : _c.forEach((e, s) => {
    const n = [];
    if (e[0] && n.push("UX"), e[1] && n.push("UY"), e[2] && n.push("UZ"), e[3] && n.push("RX"), e[4] && n.push("RY"), e[5] && n.push("RZ"), n.length > 0) {
      const c = $e(s), E = c.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "", S = Ye.has(s) ? ` SPRINGPROP "${Ye.get(s)}" ` : "";
      r.push(`  POINTASSIGN  "${c.pt}"  "${c.story}"  RESTRAINT "${n.join(" ")}" ${E}${S} `), ge.add(`${c.pt}@${c.story}`);
    }
  });
  for (const [e, s] of Ye) {
    const n = $e(e);
    ge.has(`${n.pt}@${n.story}`) || (r.push(`  POINTASSIGN  "${n.pt}"  "${n.story}"  SPRINGPROP "${s}" `), ge.add(`${n.pt}@${n.story}`));
  }
  const wt = !!(D.diaphragms && [...D.diaphragms.values()].some((e) => e !== 0)), lt = I.diaphragm ?? "auto", ft = lt === "d1" || lt === "auto" && wt;
  ft && _e.forEach((e) => {
    for (const s of e.elemIndices) {
      const [n, c] = N[s], E = l[n][2] >= l[c][2] ? n : c, S = $e(E), A = `${S.pt}@${S.story}`;
      !ge.has(A) && S.story !== "Base" && (r.push(`  POINTASSIGN  "${S.pt}"  "${S.story}"  DIAPH "D1"  `), ge.add(A));
    }
  }), Le === "manual" && D.loads && D.loads.forEach((e, s) => {
    const [n, c, E] = se(s, e);
    if (Math.abs(n) < 1e-10 && Math.abs(c) < 1e-10 && Math.abs(E) < 1e-10) return;
    const S = $e(s), A = `${S.pt}@${S.story}`;
    ge.has(A) || (r.push(`  POINTASSIGN  "${S.pt}"  "${S.story}"  DIAPH "DISCONNECTED"  `), ge.add(A));
  }), r.push(""), r.push("$ LINE ASSIGNS"), Ke.forEach((e) => r.push(e)), r.push("");
  const le = [], St = M.areaObjects, At = /* @__PURE__ */ new Set(), ht = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map();
  St == null ? void 0 : St.forEach((e) => e.cells.forEach((s) => At.add(s))), N.forEach((e, s) => {
    if (e.length === 4 || e.length === 3) {
      const n = l[e[0]], c = l[e[1]], E = l[e[2]], S = [c[0] - n[0], c[1] - n[1], c[2] - n[2]], A = [E[0] - n[0], E[1] - n[1], E[2] - n[2]], p = S[1] * A[2] - S[2] * A[1], m = S[2] * A[0] - S[0] * A[2], Y = S[0] * A[1] - S[1] * A[0], g = Math.sqrt(p * p + m * m + Y * Y), y = g > 1e-10 && Math.abs(Y) / g < 0.5;
      le.push({ idx: s, el: e, isWall: y }), At.has(s) && le.pop();
    }
  });
  const ue = (() => {
    for (const [e, s] of be) if (!s) return Re.get(e);
    return Re.values().next().value || "Conc_1";
  })();
  St == null ? void 0 : St.forEach((e, s) => {
    le.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && ht.set(e.cells[0], e.q), e.ang !== void 0 && pt.set(e.cells[0], e.ang);
  });
  const De = "DECK";
  let Ze = false;
  const Xe = [], Tt = (e) => {
    const s = I.elementInputs.plateFormulations, n = le.find((E) => E.isWall === e), c = s && n ? s.get(n.idx) : void 0;
    return c === 2 ? "Membrane" : c === 1 ? "ShellThin" : "ShellThick";
  }, Mt = (e, s) => {
    const n = I.elementInputs.thicknesses, c = le.find((E) => E.isWall === e);
    return (c ? n == null ? void 0 : n.get(c.idx) : void 0) ?? (n == null ? void 0 : n.values().next().value) ?? s;
  }, It = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], xe = (e) => {
    var _a2;
    const n = (_a2 = M.shellModifiers) == null ? void 0 : _a2.get(e);
    if (n && n.length >= 8) return n.slice(0, 8);
    const c = M.membraneModifiers, E = M.bendingModifiers, S = c == null ? void 0 : c.get(e), A = E == null ? void 0 : E.get(e);
    if (S === void 0 && A === void 0) return null;
    const p = S ?? 1, m = A ?? 1;
    return [p, p, p, m, m, m, m, m];
  }, $t = (e, s) => {
    const n = le.filter((A) => A.isWall === s), c = /* @__PURE__ */ new Map();
    for (const A of n) {
      const p = xe(A.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      c.set(p.map((m) => T(m)).join(","), p);
    }
    if (c.size === 0) return "";
    c.size > 1 && console.warn(`[e2k] "${e}": ${c.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const E = c.values().next().value, S = It.map((A, p) => Math.abs(E[p] - 1) > 1e-9 ? `${A} ${T(E[p])}` : "").filter(Boolean);
    return S.length ? `  SHELLPROP  "${e}"  ${S.join(" ")} ` : "";
  }, ut = I.elementInputs.thicknesses, dt = I.elementInputs.plateFormulations, Ce = (e) => {
    const s = ut == null ? void 0 : ut.get(e.idx), n = dt == null ? void 0 : dt.get(e.idx), c = xe(e.idx);
    return `${e.isWall ? "W" : "F"}|${s ?? "-"}|${n ?? "-"}|${c ? c.map((E) => T(E)).join(",") : "-"}|${Ie(e.idx)}`;
  }, Ve = (e) => {
    const s = xe(e);
    return s ? Math.abs(s[3]) < 1e-9 && Math.abs(s[4]) < 1e-9 : false;
  }, Pe = /* @__PURE__ */ new Map();
  let Gt = 0, Bt = 0, Yt = 0;
  for (const e of le) {
    const s = Ce(e);
    if (Pe.has(s)) continue;
    const n = e.isWall, c = !n && Ve(e.idx), E = n ? ++Bt : c ? ++Yt : ++Gt, S = Ie(e.idx);
    Pe.set(s, { nombre: (n ? "Muro" : c ? De : "Losa") + (E === 1 ? "" : String(E)), isWall: n, mem: c, t: ut == null ? void 0 : ut.get(e.idx), pf: dt == null ? void 0 : dt.get(e.idx), mat: Re.get(S) ?? ue, acero: be.get(S) ?? false });
  }
  const He = (e) => {
    var _a2;
    return ((_a2 = Pe.get(Ce(e))) == null ? void 0 : _a2.nombre) ?? (e.isWall ? "Muro" : "Losa");
  }, mt = (e) => e === 2 ? "Membrane" : e === 1 ? "ShellThin" : "ShellThick", kt = (e, s) => {
    const n = le.find((S) => Ce(S) === s), c = n ? xe(n.idx) ?? null : null;
    if (!c) return "";
    const E = It.map((S, A) => Math.abs(c[A] - 1) > 1e-9 ? `${S} ${T(c[A])}` : "").filter(Boolean);
    return E.length ? `  SHELLPROP  "${e}"  ${E.join(" ")} ` : "";
  }, ve = le.find((e) => !e.isWall), gt = le.find((e) => e.isWall), qe = /* @__PURE__ */ new Set();
  ve && qe.add(Ce(ve)), gt && qe.add(Ce(gt));
  const Nt = [...Pe.entries()].filter(([e]) => !qe.has(e));
  if (le.some((e) => !e.isWall)) {
    Ze = !!ve && Ve(ve.idx);
    const e = Mt(false, 0.15);
    if (Ze) {
      r.push("$ DECK PROPERTIES");
      const n = (E) => R(u(E)), c = [...Pe.values()].find((E) => E.nombre === De);
      (c == null ? void 0 : c.acero) ? r.push(`  SHELLPROP  "${De}"  PROPTYPE  "Slab"  MATERIAL "${c.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${T(u(e))} `) : r.push(`  SHELLPROP  "${De}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${ue}"  DECKMATERIAL "${ue}"  DECKSLABDEPTH ${n(e * 65 / 120)} DECKRIBDEPTH ${n(e * 55 / 120)} DECKRIBWIDTHTOP ${n(e * 150 / 120)} DECKRIBWIDTHBOTTOM ${n(e * 100 / 120)} DECKRIBSPACING ${n(e * 200 / 120)} DECKSHEARTHICKNESS ${n(e * 0.76 / 120)} DECKUNITWEIGHT ${R(o(0.11012))} SHEARSTUDDIAM ${n(e * 19 / 120)} SHEARSTUDHEIGHT ${n(e * 100 / 120)} SHEARSTUDFU 400 `);
    } else r.push("$ SLAB PROPERTIES"), r.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${ue}"  MODELINGTYPE "${Tt(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${T(u(e))} `);
    const s = $t(Ze ? De : "Losa", false);
    s && r.push(s), r.push("");
  }
  if (le.some((e) => e.isWall)) {
    r.push("$ WALL PROPERTIES");
    const e = Mt(true, 0.2), s = Tt(true);
    r.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${ue}"  MODELINGTYPE "${s}"  WALLTHICKNESS ${T(u(e))} `);
    const n = $t("Muro", true);
    n && r.push(n), r.push("");
  }
  if (Nt.length) {
    r.push("$ OTRAS SECCIONES DE CASCARA");
    for (const [e, s] of Nt) {
      const n = s.t ?? (s.isWall ? 0.2 : 0.15), c = (S) => R(u(S));
      r.push(s.isWall ? `  SHELLPROP  "${s.nombre}"  PROPTYPE  "Wall"  MATERIAL "${s.mat ?? ue}"  MODELINGTYPE "${mt(s.pf)}"  WALLTHICKNESS ${T(u(n))} ` : s.mem && s.acero ? `  SHELLPROP  "${s.nombre}"  PROPTYPE  "Slab"  MATERIAL "${s.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${T(u(n))} ` : s.mem ? `  SHELLPROP  "${s.nombre}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${ue}"  DECKMATERIAL "${ue}"  DECKSLABDEPTH ${c(n * 65 / 120)} DECKRIBDEPTH ${c(n * 55 / 120)} DECKRIBWIDTHTOP ${c(n * 150 / 120)} DECKRIBWIDTHBOTTOM ${c(n * 100 / 120)} DECKRIBSPACING ${c(n * 200 / 120)} DECKSHEARTHICKNESS ${c(n * 0.76 / 120)} DECKUNITWEIGHT ${R(o(0.11012))} SHEARSTUDDIAM ${c(n * 19 / 120)} SHEARSTUDHEIGHT ${c(n * 100 / 120)} SHEARSTUDFU 400 ` : `  SHELLPROP  "${s.nombre}"  PROPTYPE  "Slab"  MATERIAL "${ue}"  MODELINGTYPE "${mt(s.pf)}"  SLABTYPE "Slab"  SLABTHICKNESS ${T(u(n))} `);
      const E = kt(s.nombre, e);
      E && r.push(E);
    }
    r.push("");
  }
  if (le.length > 0) {
    r.push("$ AREA CONNECTIVITIES");
    const e = [];
    le.forEach((s, n) => {
      const { el: c, isWall: E } = s, S = E ? `W${n + 1}` : `F${n + 1}`, A = E ? "PANEL" : "FLOOR", p = c.map((m) => $e(m));
      if (E) {
        const m = (v) => ne.indexOf(v);
        if (new Set(p.map((v) => v.pt)).size === 4) {
          const v = Math.max(...p.map((ae) => m(ae.story))), _ = p.map((ae) => v - m(ae.story));
          r.push(`  AREA "${S}"  ${A}  4  "${p[0].pt}"  "${p[1].pt}"  "${p[2].pt}"  "${p[3].pt}"  ${_.join("  ")}  `), e.push(`  AREAASSIGN  "${S}"  "${ne[v]}"  SECTION "${He(s)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const g = l[c[0]][2] <= l[c[2]][2] ? 0 : 2, y = l[c[1]][2] <= l[c[3]][2] ? 1 : 3;
        r.push(`  AREA "${S}"  ${A}  4  "${p[g].pt}"  "${p[y].pt}"  "${p[y].pt}"  "${p[g].pt}"  1  1  0  0  `);
        const C = p[g === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${S}"  "${C}"  SECTION "${He(s)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        const m = p.length, Y = (_) => ne.indexOf(_), g = Math.max(...p.map((_) => Y(_.story))), y = p.map((_) => g - Y(_.story)), C = ne[g] ?? p[0].story;
        r.push(`  AREA "${S}"  ${A}  ${m}  ` + p.map((_) => `"${_.pt}"`).join("  ") + "  " + y.join("  ") + "  ");
        const v = pt.get(s.idx) ?? (w == null ? void 0 : w.get(s.idx));
        e.push(Ve(s.idx) ? `  AREAASSIGN  "${S}"  "${C}"  SECTION "${He(s)}"  ANG ${T(v ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${S}"  "${C}"  SECTION "${He(s)}" ${ft ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Xe.push({ name: S, story: C, idx: s.idx });
      }
    }), r.push(""), r.push("$ AREA ASSIGNS"), e.forEach((s) => r.push(s)), r.push("");
  }
  const Ut = Le === "manual" ? 0 : K ?? 1;
  r.push("$ LOAD PATTERNS");
  const Ne = ((_d = I.loadPatterns) == null ? void 0 : _d.length) ? I.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: Ut }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of Ne) {
    let s;
    e.type === "Dead" ? s = Le === "manual" ? 0 : e.selfWeightMultiplier ?? K ?? 1 : (s = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), r.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${s}`);
  }
  r.push("");
  const Oe = I.loadPatternDestino && Ne.some((e) => e.name === I.loadPatternDestino) ? I.loadPatternDestino : ((_e2 = Ne.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? Ne[0].name, Qe = [], et = /* @__PURE__ */ new Map(), Ot = (e, s) => {
    const n = et.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let c = 0; c < 6; c++) n[c] += s[c] ?? 0;
    et.set(e, n);
  }, xt = Oe === (((_f = Ne.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? Ne[0].name), Ht = Le === "manual" || !xt || te;
  if (D.loads && D.loads.size > 0 && D.loads.forEach((e, s) => {
    const [n, c, E] = se(s, e), [S, A, p] = Ee(s, e);
    Ot(s, [n, c, Ht ? E : 0, S, A, p]);
  }), D.moments && D.moments.size > 0 && D.moments.forEach((e, s) => {
    Ot(s, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), et.forEach((e, s) => {
    if (e.every((c) => Math.abs(c) <= 1e-10)) return;
    const n = $e(s);
    Qe.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "FORCE"  LC "${Oe}"  FX ${R(t(e[0]))}  FY ${R(t(e[1]))}  FZ ${R(t(e[2]))}  MX ${R(a(e[3]))}  MY ${R(a(e[4]))}  MZ ${R(a(e[5]))}`);
  }), Qe.length > 0 && (r.push("$ POINT OBJECT LOADS"), Qe.forEach((e) => r.push(e)), r.push("")), te && oe.size > 0) {
    const e = [];
    for (const s of oe) {
      const n = ee.get(s), c = ct.get(s);
      if (!c) continue;
      const E = (S) => R(o(S) / P);
      Math.abs(n[2]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "${n[2] < 0 ? "GRAV" : "Z"}"  LC "${Oe}"  FVAL ${E(Math.abs(n[2]))}`), Math.abs(n[0]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "X"  LC "${Oe}"  FVAL ${E(n[0])}`), Math.abs(n[1]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "Y"  LC "${Oe}"  FVAL ${E(n[1])}`);
    }
    e.length && (r.push("$ FRAME OBJECT LOADS"), e.forEach((s) => r.push(s)), r.push(""));
  }
  if (f && f.size > 0 && Xe.length > 0) {
    const e = [];
    for (const s of Xe) {
      const n = ht.get(s.idx), c = n !== void 0 ? { value: n } : f.get(s.idx);
      if (!c || Math.abs(c.value) < 1e-12) continue;
      const E = c.dir ?? "GRAV", S = E === "GRAV" ? Math.abs(c.value) : c.value;
      e.push(`  AREALOAD  "${s.name}"  "${s.story}"  TYPE "UNIFF"  DIR "${E}"  LC "${c.pattern ?? Oe}"  FVAL ${R(o(S) / (P * P))}`);
    }
    e.length > 0 && (r.push("$ SHELL OBJECT LOADS"), e.forEach((s) => r.push(s)), r.push(""));
  }
  r.push("$ ANALYSIS OPTIONS"), r.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), r.push('  PDELTA  METHOD "NONE"  '), r.push("");
  const tt = Le === "manual";
  r.push("$ MASS SOURCE"), r.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${tt ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${tt ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), tt || r.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), r.push(""), r.push("$ LOAD CASES");
  const vt = ((_g = I.loadCases) == null ? void 0 : _g.length) ? I.loadCases : Ne.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of vt) {
    r.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const s of e.patterns ?? []) r.push(`  LOADCASE "${e.name}"  LOADPAT  "${s.pattern}"  SF ${s.scaleFactor} `);
  }
  const Wt = I.modalModes ?? 12;
  r.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), r.push(`  LOADCASE "Modal"  MAXMODES ${Wt}  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `), r.push("");
  const st = I.loadCombinations;
  if (st && st.length) {
    r.push("$ LOAD COMBINATIONS");
    for (const e of st) {
      r.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const s of e.cases ?? []) r.push(`  COMBO "${e.name}"  LOADCASE  "${s.case}"  SF ${s.scaleFactor} `);
    }
    r.push("");
  }
  return r.push("  END"), r.push("$ END OF MODEL FILE"), r.join(`\r
`);
}
function Dt(I, l) {
  const N = I[l[0]], D = I[l[1]], M = Math.abs(D[2] - N[2]), x = Math.sqrt((D[0] - N[0]) ** 2 + (D[1] - N[1]) ** 2), H = M > x * 0.5;
  return H && x > 0.01 ? "BRACE" : H ? "COLUMN" : "BEAM";
}
export {
  es as a,
  ts as e,
  Qt as p
};
