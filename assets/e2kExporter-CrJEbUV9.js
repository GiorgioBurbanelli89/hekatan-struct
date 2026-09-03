function P(I) {
  return I && parseFloat(I) || 0;
}
function Nt(I) {
  const f = /* @__PURE__ */ new Map(), N = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let D;
  for (; (D = N.exec(I)) !== null; ) f.set(D[1], D[2] !== void 0 ? D[2] : D[3]);
  return f;
}
function Kt(I) {
  const f = I.split(/\r?\n/);
  return f.some((D) => D.trim().startsWith("TABLE:")) ? Ut(f) : xt(f);
}
function Ut(I) {
  var _a, _b, _c, _d, _e, _f;
  const f = [];
  let N = "";
  for (const v of I) {
    const L = v.trimEnd();
    L.endsWith("_") ? N += L.slice(0, -1) + " " : (N += L, f.push(N), N = "");
  }
  N && f.push(N);
  const D = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const Y = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Z = [], z = [], ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = [], oe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), Te = [], r = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
  let p = "";
  for (const v of f) {
    const L = v.trim();
    if (!L || L.startsWith(";") || L.startsWith("File ")) continue;
    if (L.startsWith("TABLE:")) {
      const s = L.match(/TABLE:\s+"(.+?)"/);
      p = s ? s[1].toUpperCase() : "";
      continue;
    }
    if (L === "END TABLE DATA") {
      p = "";
      continue;
    }
    const t = Nt(L);
    switch (p) {
      case "PROGRAM CONTROL": {
        const s = t.get("CurrUnits");
        if (s) {
          const a = s.split(",").map((i) => i.trim());
          a[0] && (D.force = a[0]), a[1] && (D.length = a[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const s = t.get("Material");
        s && !Y.has(s) && Y.set(s, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const s = t.get("Material");
        if (s) {
          const a = Y.get(s) || { E: 0, nu: 0, G: 0 };
          a.E = P(t.get("E1")), a.G = P(t.get("G12")), a.nu = P(t.get("U12")), a.density = P(t.get("UnitMass")), Y.set(s, a);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const s = t.get("Material");
        s && Y.has(s) && (Y.get(s).fy = P(t.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const s = t.get("SectionName");
        s && l.set(s, { material: t.get("Material") || "", shape: t.get("Shape") || "Rectangular", D: P(t.get("t3")), B: P(t.get("t2")), TF: P(t.get("tf")), TW: P(t.get("tw")), A: P(t.get("Area")), Iz: P(t.get("I33")), Iy: P(t.get("I22")), J: P(t.get("TorsConst")), As2: P(t.get("AS2")), As3: P(t.get("AS3")) });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 09 - SHAPE BOX/TUBE": {
        const s = t.get("SectionName");
        s && k.set(s, { h: P(t.get("Height")), b: P(t.get("Width")), t: P(t.get("FlngThick")) || P(t.get("WebThick")), mat: t.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 10 - SHAPE PIPE": {
        const s = t.get("SectionName");
        s && k.set(s, { h: 0, b: 0, D: P(t.get("OuterDiam")), t: P(t.get("WallThick")), mat: t.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 13 - SHAPE SOLID CIRCLE": {
        const s = t.get("SectionName");
        s && Q.set(s, { mat: t.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 12 - SHAPE SOLID RECTANGLE": {
        const s = t.get("SectionName");
        s && Q.set(s, { mat: t.get("ShapeMat") || "" });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const s = t.get("Section");
        s && b.set(s, { material: t.get("Material") || "", type: t.get("Type") || "Shell", thickness: P(t.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const s = t.get("Joint");
        if (s) {
          const a = P(t.get("XorR")), i = P(t.get("Y")), S = P(t.get("Z"));
          K.set(s, [a, i, S]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const s = t.get("Frame"), a = t.get("JointI"), i = t.get("JointJ");
        s && a && i && Z.push({ name: s, j1: a, j2: i });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const s = t.get("Area");
        if (s) {
          const a = parseInt(t.get("NumJoints") || "4"), i = [];
          for (let S = 1; S <= a; S++) {
            const w = t.get(`Joint${S}`);
            w && i.push(w);
          }
          i.length >= 3 && z.push({ name: s, joints: i });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const s = t.get("Joint");
        if (s) {
          const a = [((_a = t.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = t.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = t.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = t.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = t.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = t.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          ee.set(s, a);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const s = t.get("Frame"), a = t.get("AnalSect");
        s && a && te.set(s, a);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const s = t.get("Area"), a = t.get("Section");
        s && a && ae.set(s, a);
        break;
      }
      case "FRAME LOADS - DISTRIBUTED": {
        const s = t.get("Frame"), a = t.get("Dir"), i = P(t.get("FOverLA"));
        if (s && a && i) {
          const S = { X: 0, Y: 1, Z: 2 }[a];
          if (S !== void 0) {
            const w = fe.get(s) ?? [0, 0, 0];
            w[S] += i, fe.set(s, w);
          }
        }
        break;
      }
      case "CONNECTIVITY - SOLID": {
        const s = t.get("Solid");
        if (s) {
          const a = [];
          for (let i = 1; i <= 8; i++) {
            const S = t.get(`Joint${i}`);
            S && a.push(S);
          }
          a.length === 8 && Te.push({ name: s, joints: a });
        }
        break;
      }
      case "SOLID PROPERTY DEFINITIONS": {
        const s = t.get("SolidProp");
        s && r.set(s, { material: t.get("Material") || "", incomp: (t.get("InComp") || "Yes").toLowerCase().startsWith("y") });
        break;
      }
      case "SOLID PROPERTY ASSIGNMENTS": {
        const s = t.get("Solid"), a = t.get("SolidProp");
        s && a && h.set(s, a);
        break;
      }
      case "AREA STIFFNESS MODIFIERS": {
        const s = t.get("Area");
        s && ce.set(s, ["f11", "f22", "f12", "m11", "m22", "m12", "v13", "v23"].map((a) => t.has(a) ? P(t.get(a)) : 1));
        break;
      }
      case "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL": {
        const s = t.get("Frame");
        s && se.set(s, P(t.get("Angle")));
        break;
      }
      case "FRAME OFFSET ALONG LENGTH ASSIGNMENTS": {
        const s = t.get("Frame");
        s && oe.set(s, [P(t.get("LengthI")), P(t.get("LengthJ")), P(t.get("RigidFactor"))]);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const s = t.get("Joint");
        s && ie.push({ joint: s, fx: P(t.get("F1")), fy: P(t.get("F2")), fz: P(t.get("F3")), mx: P(t.get("M1")), my: P(t.get("M2")), mz: P(t.get("M3")) });
        break;
      }
    }
  }
  return Ot(D, M, Y, l, b, K, Z, z, ee, te, ae, ie, oe, se, ce, fe, Te, r, h, k, Q);
}
function xt(I) {
  const f = { force: "KN", length: "m" };
  let N = "UX,UY,UZ,RX,RY,RZ";
  const D = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), Q = [], l = [], b = /* @__PURE__ */ new Map(), K = [], Z = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ae = [], ie = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map();
  let se = "", ce = "";
  for (const r of I) {
    const h = r.trim();
    if (!h || h.startsWith(";")) continue;
    if (!r.startsWith(" ") && !r.startsWith("	")) {
      const L = h.toUpperCase();
      if (L === "END") break;
      L.startsWith("SHELL SECTION") ? se = "SHELL SECTION" : L.startsWith("FRAME SECTION") ? se = "FRAME SECTION" : se = L.split(/\s+/)[0];
      continue;
    }
    const p = Nt(h), v = h.split(/\s+/);
    switch (se) {
      case "SYSTEM": {
        const L = p.get("DOF");
        L && (N = L);
        const t = p.get("LENGTH");
        t && (f.length = t);
        const s = p.get("FORCE");
        s && (f.force = s);
        break;
      }
      case "JOINT": {
        const L = v[0];
        k.set(L, [P(p.get("X")), P(p.get("Y")), P(p.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const L = p.get("ADD"), t = p.get("DOF");
        if (L && t) {
          const s = t.split(","), a = [false, false, false, false, false, false];
          for (const i of s) {
            const S = i.toUpperCase();
            (S === "UX" || S === "U1") && (a[0] = true), (S === "UY" || S === "U2") && (a[1] = true), (S === "UZ" || S === "U3") && (a[2] = true), (S === "RX" || S === "R1") && (a[3] = true), (S === "RY" || S === "R2") && (a[4] = true), (S === "RZ" || S === "R3") && (a[5] = true);
          }
          b.set(L, a);
        }
        break;
      }
      case "MATERIAL": {
        const L = p.get("NAME");
        if (L) ce = L, D.set(L, { E: 0, nu: 0, G: 0 });
        else if (ce) {
          const t = D.get(ce), s = p.get("E");
          s && (t.E = P(s));
          const a = p.get("U");
          a && (t.nu = P(a)), t.G = t.E / (2 * (1 + t.nu));
          const i = p.get("M");
          i && (t.density = P(i));
        }
        break;
      }
      case "SHELL": {
        const L = v[0], t = p.get("J");
        p.get("SEC"), t && l.push({ name: L, joints: t.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const L = p.get("NAME");
        L && Y.set(L, { material: p.get("MAT") || "", type: p.get("TYPE") || "Shell", thickness: P(p.get("TH")) });
        break;
      }
      case "FRAME": {
        const L = v[0], t = p.get("J");
        if (t) {
          const s = t.split(",");
          s.length >= 2 && Q.push({ name: L, j1: s[0], j2: s[1] });
        }
        break;
      }
      case "LOAD": {
        const L = p.get("ADD");
        L && K.push({ joint: L, fx: P(p.get("UX")), fy: P(p.get("UY")), fz: P(p.get("UZ")), mx: P(p.get("MX")), my: P(p.get("MY")), mz: P(p.get("MZ")) });
        break;
      }
    }
  }
  return Ot(f, N, D, M, Y, k, Q, l, b, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), K, Z, z, ee, te, ae, ie, oe);
}
function Ot(I, f, N, D, M, Y, k, Q, l, b, K, Z, z = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = [], oe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ce, fe) {
  var _a, _b;
  const Te = [], r = /* @__PURE__ */ new Map(), h = [];
  for (const [A, d] of Y) r.set(A, h.length), Te.push(A), h.push(d);
  const p = [], v = [], L = /* @__PURE__ */ new Map();
  for (const A of k) {
    const d = r.get(A.j1), $ = r.get(A.j2);
    if (d !== void 0 && $ !== void 0) {
      const B = p.length;
      p.push([d, $]), v.push(A.name);
      const C = b.get(A.name);
      C && L.set(B, C);
    }
  }
  const t = p.length;
  for (const A of Q) {
    const d = A.joints.map(($) => r.get($)).filter(($) => $ !== void 0);
    if (d.length >= 3) {
      const $ = p.length;
      p.push(d), v.push(A.name);
      const B = K.get(A.name);
      B && L.set($, B);
    }
  }
  const s = p.length - t, a = [];
  for (const A of ie) {
    const d = A.joints.map((C) => r.get(C));
    if (d.some((C) => C === void 0)) continue;
    const $ = p.length;
    p.push([d[0], d[1], d[3], d[2], d[4], d[5], d[7], d[6]]), v.push(A.name), a.push($);
    const B = se.get(A.name);
    B && L.set($, B);
  }
  const i = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, S = /* @__PURE__ */ new Map(), w = N.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let A = 0; A < p.length; A++) {
    const d = L.get(A), $ = d ? D.get(d) : null, B = d ? M.get(d) : null;
    if ($ || p[A].length === 2) {
      const C = $ || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, j = N.get(C.material) || w, X = j.E || w.E, _ = j.nu || 0.3, V = j.G || X / (2 * (1 + _));
      i.elasticities.set(A, X), i.shearModuli.set(A, V), i.areas.set(A, C.A || C.D * C.B), i.momentsOfInertiaZ.set(A, C.Iz || C.B * C.D ** 3 / 12), i.momentsOfInertiaY.set(A, C.Iy || C.D * C.B ** 3 / 12), i.torsionalConstants.set(A, C.J || 0), i.densities.set(A, j.density || 0), C.As2 && (i.shearAreasZ ?? (i.shearAreasZ = /* @__PURE__ */ new Map()), i.shearAreasZ.set(A, C.As2)), C.As3 && (i.shearAreasY ?? (i.shearAreasY = /* @__PURE__ */ new Map()), i.shearAreasY.set(A, C.As3));
      const J = z.get(v[A]);
      J && (i.endOffsets ?? (i.endOffsets = /* @__PURE__ */ new Map()), i.endOffsets.set(A, J));
      const G = ee.get(v[A]);
      G && (i.localAngles ?? (i.localAngles = /* @__PURE__ */ new Map()), i.localAngles.set(A, G)), ((_a = C.shape) == null ? void 0 : _a.includes("Wide Flange")) || C.shape === "I" ? S.set(A, { type: "I", b: C.B, h: C.D, name: d || "I-section" }) : S.set(A, { type: "rect", b: C.B, h: C.D });
      const W = d ? ce == null ? void 0 : ce.get(d) : void 0;
      if (W && W.t > 0 && (W.b > 0 && W.h > 0 || (W.D ?? 0) > 0)) {
        const re = d ? fe == null ? void 0 : fe.get(d) : void 0, ne = re && ((_b = N.get(re.mat)) == null ? void 0 : _b.E) || 0;
        S.set(A, W.D ? { type: "CFT", d: W.D, tw: W.t, name: d, ...ne > 0 ? { fillE: ne } : {} } : { type: "CFT", b: W.b, h: W.h, tw: W.t, name: d, ...ne > 0 ? { fillE: ne } : {} });
      }
    } else if (B) {
      const C = N.get(B.material) || w, j = C.E || w.E, X = C.nu || 0.2, _ = C.G || j / (2 * (1 + X));
      i.elasticities.set(A, j), i.shearModuli.set(A, _), i.thicknesses.set(A, B.thickness), i.poissonsRatios.set(A, X), i.plateFormulations ?? (i.plateFormulations = /* @__PURE__ */ new Map()), i.plateFormulations.set(A, /thin/i.test(B.type) ? 1 : 0);
      const V = te.get(v[A]);
      V && (i.shellModifiers ?? (i.shellModifiers = /* @__PURE__ */ new Map()), i.shellModifiers.set(A, V), i.membraneModifiers ?? (i.membraneModifiers = /* @__PURE__ */ new Map()), i.membraneModifiers.set(A, V[0]), i.bendingModifiers ?? (i.bendingModifiers = /* @__PURE__ */ new Map()), i.bendingModifiers.set(A, V[3])), i.densities.set(A, C.density || 0);
    }
  }
  if (a.length) {
    let A = false;
    for (const d of a) {
      const $ = oe.get(L.get(d) || ""), B = $ && N.get($.material) || w, C = B.E || w.E, j = B.nu || 0.2;
      i.elasticities.set(d, C), i.poissonsRatios.set(d, j), i.shearModuli.set(d, B.G || C / (2 * (1 + j))), i.densities.set(d, B.density || 0), ($ == null ? void 0 : $.incomp) && (A = true);
    }
    i.solidIncompatible = A;
  }
  const x = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() };
  for (const [A, d] of l) {
    const $ = r.get(A);
    $ !== void 0 && x.supports.set($, d);
  }
  for (const [A, d] of ae) {
    const $ = v.indexOf(A);
    if ($ < 0 || p[$].length !== 2) continue;
    i.frameLoads ?? (i.frameLoads = /* @__PURE__ */ new Map()), i.frameLoads.set($, d);
    const B = h[p[$][0]], C = h[p[$][1]], j = [C[0] - B[0], C[1] - B[1], C[2] - B[2]], X = Math.hypot(j[0], j[1], j[2]);
    if (X < 1e-9) continue;
    const _ = [j[0] / X, j[1] / X, j[2] / X], V = X * X / 12, J = [_[1] * d[2] - _[2] * d[1], _[2] * d[0] - _[0] * d[2], _[0] * d[1] - _[1] * d[0]], G = (W, re) => {
      const ne = x.loads.get(W) || [0, 0, 0, 0, 0, 0];
      for (let Ae = 0; Ae < 6; Ae++) ne[Ae] += re[Ae];
      x.loads.set(W, ne);
    };
    G(p[$][0], [d[0] * X / 2, d[1] * X / 2, d[2] * X / 2, V * J[0], V * J[1], V * J[2]]), G(p[$][1], [d[0] * X / 2, d[1] * X / 2, d[2] * X / 2, -V * J[0], -V * J[1], -V * J[2]]);
  }
  for (const A of Z) {
    const d = r.get(A.joint);
    if (d !== void 0) {
      const $ = x.loads.get(d) || [0, 0, 0, 0, 0, 0];
      $[0] += A.fx, $[1] += A.fy, $[2] += A.fz, $[3] += A.mx, $[4] += A.my, $[5] += A.mz, x.loads.set(d, $);
    }
  }
  return { units: I, dof: f, materials: N, frameSections: D, shellSections: M, nodes: h, nodeNames: Te, nodeNameToIdx: r, elements: p, elementNames: v, elementSections: L, nodeInputs: x, elementInputs: i, sectionShapes: S, info: { nNodes: h.length, nFrames: t, nShells: s, title: `SAP2000 (${t} frames, ${s} shells)` } };
}
function Zt(I) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { nodes: f, elements: N, nodeInputs: D, elementInputs: M } = I, Y = { force: "KN", length: "m" };
  I.units && (I.units.force !== "KN" || I.units.length !== "m") && console.warn(`[s2k] el modelo va en kN\xB7m y el exportador NO convierte: se declara CurrUnits="KN, m, C" y se ignora "${I.units.force}, ${I.units.length}". Etiquetarlo de otra forma hace que SAP2000 lea las fuerzas escaladas.`);
  const k = I.title || "Awatif Model", Q = [], l = (t) => Q.push(t), b = () => Q.push(" ");
  l(`File ${k}.$2k was saved on m/d/yy at h:mm:ss`), b(), l('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), l("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), b();
  const K = [], Z = (t) => {
    var _a2, _b2, _c2, _d2;
    const s = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(t)) || 0, a = (_b2 = M.poissonsRatios) == null ? void 0 : _b2.get(t), i = ((_c2 = M.shearModuli) == null ? void 0 : _c2.get(t)) || 0, S = a !== void 0 ? a : s > 0 && i > 0 ? Math.max(0, Math.min(0.5, s / (2 * i) - 1)) : 0.2, w = i > 0 ? i : s > 0 ? s / (2 * (1 + S)) : 0, x = ((_d2 = M.densities) == null ? void 0 : _d2.get(t)) || 0;
    return { E: s, nu: S, G: w, rho: x, key: `MAT_${Math.round(s)}_n${S.toFixed(4)}` };
  }, z = [], ee = [];
  if (N.forEach((t, s) => {
    t.length === 2 ? K.push(s) : t.length === 8 ? ee.push(s) : z.push(s);
  }), K.length > 0) {
    l('TABLE:  "CONNECTIVITY - FRAME"');
    for (const t of K) {
      const s = N[t];
      l(`   Frame=${t + 1}   JointI=${s[0] + 1}   JointJ=${s[1] + 1}   IsCurved=No`);
    }
    b();
  }
  if (z.length > 0) {
    l('TABLE:  "CONNECTIVITY - AREA"');
    for (const t of z) {
      const s = N[t], a = s.map((i, S) => `Joint${S + 1}=${i + 1}`).join("   ");
      l(`   Area=${t + 1}   NumJoints=${s.length}   ${a}`);
    }
    b();
  }
  if (ee.length > 0) {
    l('TABLE:  "CONNECTIVITY - SOLID"');
    for (const t of ee) {
      const s = N[t], a = [s[0], s[1], s[3], s[2], s[4], s[5], s[7], s[6]];
      l(`   Solid=${t + 1}   ${a.map((i, S) => `Joint${S + 1}=${i + 1}`).join("   ")}`);
    }
    b();
  }
  l('TABLE:  "COORDINATE SYSTEMS"'), l("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), b(), l('TABLE:  "DATABASE FORMAT TYPES"'), l("   UnitsCurr=Yes   OverrideE=No"), b();
  const te = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
  for (const t of K) {
    const s = ((_a = M.areas) == null ? void 0 : _a.get(t)) || 0, a = ((_b = M.momentsOfInertiaZ) == null ? void 0 : _b.get(t)) || 0, i = ((_c = M.momentsOfInertiaY) == null ? void 0 : _c.get(t)) || 0, S = ((_d = M.torsionalConstants) == null ? void 0 : _d.get(t)) || 0, w = ((_e = M.elasticities) == null ? void 0 : _e.get(t)) || 0, x = Z(t).key, A = ((_f = M.shearAreasZ) == null ? void 0 : _f.get(t)) ?? 0, d = ((_g = M.shearAreasY) == null ? void 0 : _g.get(t)) ?? 0, $ = (_h = M.sectionShapes) == null ? void 0 : _h.get(t);
    let B;
    const C = ($ == null ? void 0 : $.type) === "CFT" && $.d > 0 && $.tw > 0 && $.tw < $.d / 2 && !($.b > 0 && $.h > 0);
    if (($ == null ? void 0 : $.type) === "CFT" && w > 0 && (C || $.b > 0 && $.h > 0 && $.tw > 0 && $.tw < Math.min($.b, $.h) / 2)) {
      const _ = C ? $.d - 2 * $.tw : 0, V = C ? 0 : $.b - 2 * $.tw, J = C ? 0 : $.h - 2 * $.tw, G = C ? Math.PI * ($.d * $.d - _ * _) / 4 : $.b * $.h - V * J, W = C ? Math.PI * _ * _ / 4 : V * J, re = $.fillE > 0 ? $.fillE / w : Math.max(0.01, Math.min(1, (s - G) / W)), ne = re * w, Ae = 0.2, de = `MAT_${Math.round(ne)}_n${Ae.toFixed(4)}`, Ie = Z(t).rho;
      ae.has(de) || ae.set(de, { E: ne, nu: Ae, G: ne / (2 * (1 + Ae)), rho: Ie * re }), B = C ? { b: $.d, h: $.d, t: $.tw, Ec: ne, nuC: Ae, matFill: de, D: $.d } : { b: $.b, h: $.h, t: $.tw, Ec: ne, nuC: Ae, matFill: de };
    }
    const j = `A${s.toPrecision(6)}_Iz${a.toPrecision(6)}_s${A.toPrecision(6)}_${d.toPrecision(6)}${B ? B.D ? `_SDC${B.D}x${B.t}` : `_SD${B.b}x${B.h}x${B.t}` : ""}`;
    if (!te.has(j)) {
      let _ = 0.3, V = 0.3;
      s > 0 && a > 0 && (_ = Math.sqrt(12 * a / s), V = s / _), te.set(j, { A: s, Iz: a, Iy: i, J: S, b: V, h: _, matKey: x, As2: A > 0 ? A : s * 5 / 6, As3: d > 0 ? d : s * 5 / 6, sd: B });
    }
    const X = [...te.keys()].indexOf(j) + 1;
    ie.set(t, `SEC${X}`);
  }
  if (K.length > 0) {
    l('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const t of K) {
      const s = ie.get(t) || "SEC1";
      l(`   Frame=${t + 1}   AutoSelect=N.A.   AnalSect=${s}   MatProp=Default`);
    }
    b();
  }
  if (te.size > 0) {
    l('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let t = 0;
    for (const [, s] of te) {
      if (t++, s.sd) {
        l(`   SectionName=SEC${t}   Material=${s.matKey}   Shape="SD Section"   Area=${R(s.A)}   TorsConst=${R(s.J)}   I33=${R(s.Iz)}   I22=${R(s.Iy)}   I23=0   AS2=${R(s.As2)}   AS3=${R(s.As3)} _`), l("        Color=Cyan   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
        continue;
      }
      l(`   SectionName=SEC${t}   Material=${s.matKey}   Shape=General   t3=${R(s.h)}   t2=${R(s.b)}   Area=${R(s.A)}   TorsConst=${R(s.J)}   I33=${R(s.Iz)}   I22=${R(s.Iy)}   I23=0   AS2=${R(s.As2)}   AS3=${R(s.As3)} _`), l("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    b();
  }
  const oe = [...te.values()].map((t, s) => ({ sec: t, name: `SEC${s + 1}` })).filter((t) => t.sec.sd);
  if (oe.length > 0) {
    l('TABLE:  "SECTION DESIGNER PROPERTIES 01 - GENERAL"');
    for (const { name: a } of oe) l(`   SectionName=${a}   DesignType="No Check/Design"   DsgnOrChck=Check   IncludeVStr=No   AxisAngle=90   MeshSzAbs=0   MeshSzRel=0.05`);
    b();
    const t = oe.filter((a) => !a.sec.sd.D), s = oe.filter((a) => a.sec.sd.D);
    if (t.length > 0) {
      l('TABLE:  "SECTION DESIGNER PROPERTIES 09 - SHAPE BOX/TUBE"');
      for (const { sec: a, name: i } of t) {
        const S = a.sd;
        l(`   SectionName=${i}   ShapeName=TUBO   ShapeType="User Defined"   ShapeMat=${a.matKey}   ZOrder=1   FillColor=Gray4   XCenter=0   YCenter=0   Height=${R(S.h)}   Width=${R(S.b)}   FlngThick=${R(S.t)}   WebThick=${R(S.t)}   Rotation=0 _`), l('        CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0   DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0');
      }
      b();
    }
    if (s.length > 0) {
      l('TABLE:  "SECTION DESIGNER PROPERTIES 10 - SHAPE PIPE"');
      for (const { sec: a, name: i } of s) {
        const S = a.sd;
        l(`   SectionName=${i}   ShapeName=TUBO   ShapeType="User Defined"   ShapeMat=${a.matKey}   ZOrder=1   FillColor=Gray4   XCenter=0   YCenter=0   OuterDiam=${R(S.D)}   WallThick=${R(S.t)}   CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0 _`), l("        DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0");
      }
      b();
    }
    if (t.length > 0) {
      l('TABLE:  "SECTION DESIGNER PROPERTIES 12 - SHAPE SOLID RECTANGLE"');
      for (const { sec: a, name: i } of t) {
        const S = a.sd;
        l(`   SectionName=${i}   ShapeName=RELLENO   ShapeMat=${S.matFill}   ZOrder=2   FillColor=Gray4   XCenter=0   YCenter=0   Height=${R(S.h - 2 * S.t)}   Width=${R(S.b - 2 * S.t)}   Rotation=0   Reinforcing=No   CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0 _`), l("        DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0");
      }
      b();
    }
    if (s.length > 0) {
      l('TABLE:  "SECTION DESIGNER PROPERTIES 13 - SHAPE SOLID CIRCLE"');
      for (const { sec: a, name: i } of s) {
        const S = a.sd;
        l(`   SectionName=${i}   ShapeName=RELLENO   ShapeMat=${S.matFill}   ZOrder=2   FillColor=Gray4   XCenter=0   YCenter=0   Diameter=${R(S.D - 2 * S.t)}   Reinforcing=No   CoreDim="Program Determined"   BCoreMajor=0   DCoreMajorPositive=0`);
      }
      b();
    }
    l('TABLE:  "SECTION DESIGNER PROPERTIES 30 - FIBER GENERAL"');
    for (const { name: a } of oe) l(`   SectionName=${a}   NumFibersD2=3   NumFibersD3=3   CoordSys=Cartesian   GridAngle=0   LumpRebar=No   FiberPMM=No   FiberMC=No`);
    b();
  }
  {
    const t = K.filter((s) => {
      var _a2;
      const a = (_a2 = M.localAngles) == null ? void 0 : _a2.get(s);
      return a !== void 0 && isFinite(a) && Math.abs(a) > 1e-9;
    });
    if (t.length > 0) {
      l('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const s of t) l(`   Frame=${s + 1}   Angle=${R(M.localAngles.get(s))}   AdvanceAxes=No`);
      b();
    }
  }
  {
    const t = M.endOffsets, s = K.filter((a) => {
      const i = t == null ? void 0 : t.get(a);
      return !!i && (Math.abs(i[0]) > 1e-9 || Math.abs(i[1]) > 1e-9);
    });
    if (s.length > 0) {
      l('TABLE:  "FRAME OFFSET ALONG LENGTH ASSIGNMENTS"');
      for (const a of s) {
        const i = t.get(a);
        l(`   Frame=${a + 1}   Type=User   LengthI=${R(i[0])}   LengthJ=${R(i[1])}   RigidFactor=${R(i.length > 2 ? i[2] : 0)}`);
      }
      b();
    }
  }
  const se = !!I.layeredSection && z.length > 0, ce = I.layeredSection, fe = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
  if (!se) for (const t of z) {
    const s = ((_i = M.thicknesses) == null ? void 0 : _i.get(t)) || 0.1;
    (_j = M.elasticities) == null ? void 0 : _j.get(t);
    const a = Z(t).key, i = ((_k = M.plateFormulations) == null ? void 0 : _k.get(t)) ?? 0, S = `t${s.toPrecision(6)}_f${i}`;
    fe.has(S) || fe.set(S, { t: s, matKey: a, formulacion: i });
    const w = [...fe.keys()].indexOf(S) + 1;
    Te.set(t, `SSEC${w}`);
  }
  if (z.length > 0) {
    l('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of z) {
      const i = se ? ce.name : Te.get(a) || "SSEC1";
      l(`   Area=${a + 1}   Section=${i}   MatProp=Default`);
    }
    b();
    const t = M.shellModifiers, s = z.filter((a) => {
      const i = t == null ? void 0 : t.get(a);
      return i && i.some((S) => Math.abs(S - 1) > 1e-12);
    });
    if (s.length > 0) {
      l('TABLE:  "AREA STIFFNESS MODIFIERS"');
      for (const a of s) {
        const i = t.get(a);
        l(`   Area=${a + 1}   f11=${R(i[0])}   f22=${R(i[1])}   f12=${R(i[2])}   m11=${R(i[3])}   m22=${R(i[4])}   m12=${R(i[5])}   v13=${R(i[6])}   v23=${R(i[7])}   MassMod=1   WeightMod=1`);
      }
      b();
    }
    if (l('TABLE:  "AREA SECTION PROPERTIES"'), se) {
      const a = ce, i = ((_l = a.layers[0]) == null ? void 0 : _l.material) || "MAT_DEFAULT";
      l(`   Section=${a.name}   Material=${i}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${R(a.totalThickness)}   BendThick=${R(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, i] of fe) {
        a++;
        const S = i.formulacion === 2 ? "Membrane" : i.formulacion === 3 ? "Plate-Thin" : i.formulacion === 4 ? "Plate-Thick" : i.formulacion === 1 ? "Shell-Thin" : "Shell-Thick", w = i.formulacion === 3 || i.formulacion === 4 ? "No" : "Yes";
        l(`   Section=SSEC${a}   Material=${i.matKey}   MatAngle=0   AreaType=Shell   Type=${S}   DrillDOF=${w}   Thickness=${R(i.t)}   BendThick=${R(i.t)}   Color=Cyan`);
      }
    }
    if (b(), se) {
      l('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = ce;
      for (const i of a.layers) {
        const S = i.angle ?? 0, w = i.numIntPts ?? 3;
        l(`   Section=${a.name}   LayerName=${i.name}   Distance=${R(i.distance)}   Thickness=${R(i.thickness)}   Type=Shell   NumIntPts=${w}   Material=${i.material}   MatAngle=${R(S * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      b();
    }
  }
  l('TABLE:  "JOINT COORDINATES"');
  for (let t = 0; t < f.length; t++) {
    const s = f[t];
    l(`   Joint=${t + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${R(s[0])}   Y=${R(s[1])}   Z=${R(s[2])}   SpecialJt=No`);
  }
  if (b(), D.supports && D.supports.size > 0) {
    l('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [t, s] of D.supports) {
      if (!s.some((i) => i)) continue;
      const a = (i) => i ? "Yes" : "No";
      l(`   Joint=${t + 1}   U1=${a(s[0])}   U2=${a(s[1])}   U3=${a(s[2])}   R1=${a(s[3])}   R2=${a(s[4])}   R3=${a(s[5])}`);
    }
    b();
  }
  const r = I.selfWtMult ?? 1;
  l('TABLE:  "LOAD PATTERN DEFINITIONS"'), l(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${r}`), b(), l('TABLE:  "LOAD CASE DEFINITIONS"'), l('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), b(), l('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), l('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), b();
  const h = M.frameLoads, p = /* @__PURE__ */ new Map();
  if ((_m = D.loads) == null ? void 0 : _m.forEach((t, s) => p.set(s, [...t])), h && h.size > 0) {
    const t = (s, a) => {
      const i = p.get(s) ?? [0, 0, 0, 0, 0, 0];
      p.set(s, i.map((S, w) => S - a[w]));
    };
    for (const [s, a] of h) {
      const i = N[s];
      if (!i || i.length !== 2) continue;
      const S = f[i[0]], w = f[i[1]], x = [w[0] - S[0], w[1] - S[1], w[2] - S[2]], A = Math.hypot(x[0], x[1], x[2]);
      if (A < 1e-9) continue;
      const d = [x[0] / A, x[1] / A, x[2] / A], $ = A * A / 12, B = [d[1] * a[2] - d[2] * a[1], d[2] * a[0] - d[0] * a[2], d[0] * a[1] - d[1] * a[0]];
      t(i[0], [a[0] * A / 2, a[1] * A / 2, a[2] * A / 2, $ * B[0], $ * B[1], $ * B[2]]), t(i[1], [a[0] * A / 2, a[1] * A / 2, a[2] * A / 2, -$ * B[0], -$ * B[1], -$ * B[2]]);
    }
  }
  if (p.size > 0) {
    l('TABLE:  "JOINT LOADS - FORCE"');
    for (const [t, s] of p) s.some((a) => Math.abs(a) > 1e-12) && l(`   Joint=${t + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${R(s[0])}   F2=${R(s[1])}   F3=${R(s[2])}   M1=${R(s[3])}   M2=${R(s[4])}   M3=${R(s[5])}`);
    b();
  }
  const v = M.frameLoads;
  if (v && v.size > 0) {
    l('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [t, s] of v) {
      const a = N[t];
      if (!a || a.length !== 2) continue;
      const i = f[a[0]], S = f[a[1]], w = Math.hypot(S[0] - i[0], S[1] - i[1], S[2] - i[2]);
      ["X", "Y", "Z"].forEach((x, A) => {
        Math.abs(s[A]) < 1e-12 || l(`   Frame=${t + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${x}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${R(w)}   FOverLA=${R(s[A])}   FOverLB=${R(s[A])}`);
      });
    }
    b();
  }
  const L = /* @__PURE__ */ new Map();
  for (let t = 0; t < N.length; t++) {
    const { E: s, nu: a, G: i, rho: S, key: w } = Z(t);
    L.has(w) || L.set(w, { E: s, nu: a, G: i, rho: S });
  }
  if (ee.length > 0) {
    const t = M.solidIncompatible === false ? "No" : "Yes", s = /* @__PURE__ */ new Map();
    for (const a of ee) {
      const { E: i, nu: S, G: w, rho: x, key: A } = Z(a);
      L.has(A) || L.set(A, { E: i, nu: S, G: w, rho: x }), s.has(A) || s.set(A, `SOL${s.size + 1}`);
    }
    l('TABLE:  "SOLID PROPERTY DEFINITIONS"');
    for (const [a, i] of s) l(`   SolidProp=${i}   Material=${a}   MatAngleA=0   MatAngleB=0   MatAngleC=0   InComp=${t}   Color=Yellow`);
    b(), l('TABLE:  "SOLID PROPERTY ASSIGNMENTS"');
    for (const a of ee) l(`   Solid=${a + 1}   SolidProp=${s.get(Z(a).key)}`);
    b();
  }
  for (const [t, s] of ae) L.has(t) || L.set(t, s);
  l('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [t] of L) l(`   Material=${t}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  b(), l('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [t, s] of L) l(`   Material=${t}   UnitWeight=${R(s.rho * 9.81)}   UnitMass=${R(s.rho)}   E1=${R(s.E)}   G12=${R(s.G)}   U12=${R(s.nu)}   A1=9.9E-06`);
  b(), l('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [t] of L) l(`   Material=${t}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return b(), l('TABLE:  "PROGRAM CONTROL"'), l(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${Y.force}, ${Y.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), b(), l("END TABLE DATA"), l(""), Q.join(`\r
`);
}
function R(I) {
  return I === 0 || Math.abs(I) < 1e-15 ? "0" : Math.abs(I) >= 1e6 || Math.abs(I) < 1e-3 && Math.abs(I) > 0 ? I.toExponential(8) : parseFloat(I.toPrecision(10)).toString();
}
function Ht(I, f, N = 0.05) {
  const D = f.map(([M, Y]) => `${(+M).toFixed(4)} ${(+Y).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${I}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${N}  SPECTYPE "USER"  `, `  FUNCTION "${I}"  TIMEVAL "${D}"  `];
}
function vt(I) {
  const { name: f, func: N, modalCase: D = "Modal", sfX: M = 9.81, sfY: Y = 9.81 } = I, k = [`  LOADCASE "${f}"  TYPE  "Response Spectrum"  MODALCASE  "${D}"  `];
  return M && k.push(`  LOADCASE "${f}"  ACCEL  "U1"  FUNC  "${N}"  SF  ${M}  `), Y && k.push(`  LOADCASE "${f}"  ACCEL  "U2"  FUNC  "${N}"  SF  ${Y}  `), k;
}
function mt(I) {
  const { name: f = "Modal", ritz: N = false, nModes: D = 12 } = I;
  return N ? [`  LOADCASE "${f}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${f}"  MAXMODES  ${D} MINMODES  1 `, `  LOADCASE "${f}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${f}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${f}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${f}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${f}"  MAXMODES  ${D} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function Xt(I) {
  var _a;
  const f = (_a = I.e2kModel) == null ? void 0 : _a.rawSections;
  let N = f && f.size > 0 ? zt(f, I.e2kModel) : jt(I);
  return I.seismicNEC && (N = Wt(N, I.seismicNEC)), N;
}
function Wt(I, f) {
  const N = I.includes(`\r
`) ? `\r
` : `
`, D = I.split(/\r?\n/), M = f.name ?? "NEC", Y = Ht(M, f.points, f.dampRatio ?? 0.05), k = f.modalCase ?? "Modal", Q = vt({ name: f.caseName ?? "Sismo NEC", func: M, modalCase: k, sfX: f.sfX, sfY: f.sfY });
  let l = [];
  const b = (K) => D.some((Z) => K.test(Z));
  if (f.modal) {
    const K = new RegExp(`^\\s*LOADCASE\\s+"${k}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let Z = D.length - 1; Z >= 0; Z--) K.test(D[Z]) && D.splice(Z, 1);
    l = mt({ name: k, ritz: !!f.modal.ritz, nModes: f.modal.nModes });
  } else b(new RegExp(`LOADCASE\\s+"${k}"\\s+TYPE\\s+"Modal`)) || (l = mt({ name: k }));
  return dt(D, "FUNCTIONS", Y), dt(D, "LOAD CASES", [...l, ...Q]), D.join(N);
}
function dt(I, f, N) {
  const D = I.findIndex((k) => k.trim() === `$ ${f}`);
  if (D >= 0) {
    I.splice(D + 1, 0, ...N);
    return;
  }
  const M = I.findIndex((k) => k.trim() === "END"), Y = M >= 0 ? M : I.length;
  I.splice(Y, 0, `$ ${f}`, ...N, "");
}
function zt(I, f) {
  const N = [], D = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  N.push("$ File exported from Hekatan Struct Lineal (round-trip)"), N.push("");
  for (const M of D) {
    const Y = I.get(M);
    if (!(!Y || Y.length === 0)) {
      N.push(`$ ${M}`);
      for (const k of Y) N.push(k);
      N.push("");
    }
  }
  for (const [M, Y] of I) if (!D.includes(M) && Y.length !== 0) {
    N.push(`$ ${M}`);
    for (const k of Y) N.push(k);
    N.push("");
  }
  return N.push("  END"), N.push("$ END OF MODEL FILE"), N.join(`\r
`);
}
function jt(I) {
  var _a, _b, _c, _d, _e2, _f, _g;
  const { nodes: f, elements: N, nodeInputs: D, elementInputs: M, title: Y, units: k } = I, Q = I.shellLoads ?? M.shellSurfaceLoads;
  let l;
  Q instanceof Map && (l = /* @__PURE__ */ new Map(), Q.forEach((e, o) => {
    l.set(o, typeof e == "number" ? { value: e } : e);
  }));
  const b = I.shellAngles ?? M.shellAngles, K = M.cargaDeArea, Z = !!(l && l.size > 0), z = M.selfWeight, ee = M.frameLoads, te = (I.weightMode ?? "auto") === "auto" && z !== void 0, ae = /* @__PURE__ */ new Map(), ie = (e, o) => {
    const n = ae.get(e) ?? [0, 0, 0, 0, 0, 0];
    ae.set(e, n.map((c, E) => c + o[E]));
  }, oe = /* @__PURE__ */ new Set();
  if (te) {
    if (ee) for (const [e, o] of ee) {
      const n = N[e];
      if (!n || n.length !== 2) continue;
      const c = f[n[0]], E = f[n[1]], T = [E[0] - c[0], E[1] - c[1], E[2] - c[2]], u = Math.hypot(T[0], T[1], T[2]);
      if (u < 1e-9) continue;
      const m = [T[0] / u, T[1] / u, T[2] / u], O = u * u / 12, U = [m[1] * o[2] - m[2] * o[1], m[2] * o[0] - m[0] * o[2], m[0] * o[1] - m[1] * o[0]];
      ie(n[0], [o[0] * u / 2, o[1] * u / 2, o[2] * u / 2, O * U[0], O * U[1], O * U[2]]), ie(n[1], [o[0] * u / 2, o[1] * u / 2, o[2] * u / 2, -O * U[0], -O * U[1], -O * U[2]]), oe.add(e);
    }
    if (z && z > 0) {
      const o = M.endOffsets;
      N.forEach((n, c) => {
        var _a2, _b2, _c2;
        const E = ((_a2 = M.densities) == null ? void 0 : _a2.get(c)) ?? 0;
        if (E) {
          if (n.length === 2) {
            const T = ((_b2 = M.areas) == null ? void 0 : _b2.get(c)) ?? 0, u = f[n[0]], m = f[n[1]], O = [m[0] - u[0], m[1] - u[1], m[2] - u[2]];
            let U = Math.hypot(O[0], O[1], O[2]);
            const g = o == null ? void 0 : o.get(c);
            if (g) {
              const F = Math.hypot(O[0], O[1]);
              F > 1e-9 && Math.abs(Math.atan2(Math.abs(O[2]), F)) * 180 / Math.PI < 20 && (U = Math.max(U - g[0] - g[1], 0));
            }
            const y = T * U * E * 9.80665 * z;
            ie(n[0], [0, 0, -y / 2, 0, 0, 0]), ie(n[1], [0, 0, -y / 2, 0, 0, 0]);
          } else if (n.length === 4) {
            const T = ((_c2 = M.thicknesses) == null ? void 0 : _c2.get(c)) ?? 0, u = n.map((F) => f[F]);
            let m = 0, O = 0, U = 0;
            for (let F = 0; F < 4; F++) {
              const H = u[F], q = u[(F + 1) % 4];
              m += H[1] * q[2] - H[2] * q[1], O += H[2] * q[0] - H[0] * q[2], U += H[0] * q[1] - H[1] * q[0];
            }
            const g = Math.hypot(m, O, U) / 2, y = T * g * E * 9.80665 * z;
            for (const F of n) ie(F, [0, 0, -y / 4, 0, 0, 0]);
          }
        }
      });
    }
  }
  const se = (e, o) => {
    const n = ae.get(e);
    return [o[0] - ((n == null ? void 0 : n[0]) ?? 0), o[1] - ((n == null ? void 0 : n[1]) ?? 0), o[2] - (Z ? (K == null ? void 0 : K.get(e)) ?? 0 : 0) - ((n == null ? void 0 : n[2]) ?? 0)];
  }, ce = (e, o) => {
    const n = ae.get(e);
    return [(o[3] ?? 0) - ((n == null ? void 0 : n[3]) ?? 0), (o[4] ?? 0) - ((n == null ? void 0 : n[4]) ?? 0), (o[5] ?? 0) - ((n == null ? void 0 : n[5]) ?? 0)];
  }, fe = "N", Te = "MM", r = [], h = (e) => Math.round(e * 1e4) / 1e4, p = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), v = 1e3, L = 1e3, t = (e) => e * L, s = (e) => e * v, a = (e) => e * v, i = (e) => e * v * L, S = (e) => e * v / L ** 2, w = (e) => e * v / L ** 3, x = /* @__PURE__ */ new Date(), A = `${x.getMonth() + 1}/${x.getDate()}/${x.getFullYear()}  ${x.getHours()}:${String(x.getMinutes()).padStart(2, "0")}:${String(x.getSeconds()).padStart(2, "0")}`;
  r.push(`$ File   "Hekatan_export.e2k"  saved ${A} in ETABS 22.6.0`), r.push(""), r.push("$ PROGRAM INFORMATION"), r.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), r.push(""), r.push("$ CONTROLS"), r.push(`  UNITS  "${fe}"  "${Te}"  "C"  `), r.push('  TITLE1  "Hekatan Struct Lineal export"  '), Y && r.push(`  TITLE2  "${Y}"  `), r.push("  PREFERENCE  MERGETOL 0.001"), r.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), r.push("");
  const d = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set();
  f.forEach((e) => {
    d.add(h(e[0])), $.add(h(e[1]));
  });
  const B = [...d].sort((e, o) => e - o), C = [...$].sort((e, o) => e - o);
  r.push("$ GRIDS"), r.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), B.forEach((e, o) => {
    const n = o < 26 ? String.fromCharCode(65 + o) : String.fromCharCode(65 + o % 26).repeat(Math.floor(o / 26) + 1);
    r.push(`  GRID "G1"  LABEL "${n}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), C.forEach((e, o) => {
    r.push(`  GRID "G1"  LABEL "${o + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), r.push("");
  const j = 3, X = 0.5, _ = /* @__PURE__ */ new Map();
  f.forEach((e) => {
    const o = h(e[2]);
    _.set(o, (_.get(o) ?? 0) + 1);
  });
  const V = /* @__PURE__ */ new Set();
  f.forEach((e) => V.add(h(e[2])));
  const J = [...V].sort((e, o) => e - o);
  let G = J.filter((e) => (_.get(e) ?? 0) >= j);
  if (G.length > 1) {
    const e = [G[0]];
    for (const o of G.slice(1)) o - e[e.length - 1] < X ? e[e.length - 1] = o : e.push(o);
    G = e;
  }
  G.length || (G = [J[0], J[J.length - 1]]), G[0] !== J[0] && G.unshift(J[0]), G[G.length - 1] !== J[J.length - 1] && G.push(J[J.length - 1]);
  const W = [], re = /* @__PURE__ */ new Map();
  W.push("Base"), re.set(G[0], "Base");
  for (let e = 1; e < G.length; e++) {
    const o = `Level_${e}`;
    W.push(o), re.set(G[e], o);
  }
  const ne = (e) => {
    const o = h(e);
    if (re.has(o)) return { story: re.get(o), dz: 0 };
    for (let c = 0; c < G.length; c++) if (G[c] >= o) return { story: re.get(G[c]), dz: h(G[c] - o) };
    const n = G[G.length - 1];
    return { story: re.get(n), dz: h(n - o) };
  };
  r.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = G.length - 1; e >= 1; e--) r.push(`  STORY "${W[e]}"  HEIGHT ${h(t(G[e] - G[e - 1]))} MASTERSTORY "Yes"  `);
  G.length > 0 && r.push(`  STORY "Base"  ELEV ${G[0]} `), r.push(""), N.some((e) => e.length === 4), r.push("$ DIAPHRAGM NAMES"), r.push('  DIAPHRAGM "D1"    TYPE RIGID'), r.push(""), r.push("$ MATERIAL PROPERTIES");
  const Ae = 980665e-8, de = (e) => {
    var _a2;
    const o = (_a2 = M.densities) == null ? void 0 : _a2.get(e);
    if (o !== void 0) return o > 100 ? o * Ae : o * 9.80665;
  }, Ie = (e) => {
    var _a2;
    const o = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, n = de(e);
    return `${o}|${n === void 0 ? "-" : n.toFixed(4)}`;
  }, qe = /* @__PURE__ */ new Set();
  (_a = M.elasticities) == null ? void 0 : _a.forEach((e, o) => qe.add(Ie(o)));
  const Oe = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map();
  let Lt = 0, Rt = 0;
  for (const e of qe) {
    const o = parseFloat(e.split("|")[0]), n = e.split("|")[1], c = o >= 1e8, E = c ? `Steel_${++Lt}` : `Conc_${++Rt}`;
    Oe.set(e, E), ye.set(e, c);
    const T = n !== "-" ? parseFloat(n) : c ? 76.97 : 24, u = S(o), m = w(T), O = (() => {
      const y = I.elementInputs.poissonsRatios;
      if (y) {
        for (const [F, H] of y) if (Ie(F) === e) return H;
      }
    })(), U = O !== void 0 ? O : c ? 0.3 : 0.2, g = c ? 117e-7 : 1e-5;
    if (c) {
      r.push(`  MATERIAL  "${E}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${p(m)}`), r.push(`  MATERIAL  "${E}"    SYMTYPE "Isotropic"  E ${h(u)}  U ${U}  A ${g}`);
      const y = 345e3, F = 45e4;
      r.push(`  MATERIAL  "${E}"  FY ${h(S(y))}  FU ${h(S(F))}  FYE ${h(S(y * 1.1))}  FUE ${h(S(F * 1.1))}`);
    } else r.push(`  MATERIAL  "${E}"    TYPE "Concrete"    WEIGHTPERVOLUME ${p(m)}`), r.push(`  MATERIAL  "${E}"    SYMTYPE "Isotropic"  E ${h(u)}  U ${U}  A ${g}`), r.push(`  MATERIAL  "${E}"    FC ${h(S(24e3))}`);
  }
  const Qe = /* @__PURE__ */ new Map();
  {
    const e = /* @__PURE__ */ new Map();
    (_b = M.sectionShapes) == null ? void 0 : _b.forEach((n, c) => {
      var _a2;
      if ((n == null ? void 0 : n.type) !== "CFT" || !(n.fillE > 0)) return;
      const E = ((_a2 = M.elasticities) == null ? void 0 : _a2.get(c)) ?? 0;
      if (!(E > 0)) return;
      const T = n.fillE / E, u = de(c) ?? 76.97, m = `${n.fillE}|${(T * u).toFixed(4)}`;
      let O = e.get(m);
      O || (O = `ConcFill_${e.size + 1}`, e.set(m, O), r.push(`  MATERIAL  "${O}"    TYPE "Concrete"    WEIGHTPERVOLUME ${p(w(T * u))}`), r.push(`  MATERIAL  "${O}"    SYMTYPE "Isotropic"  E ${h(S(n.fillE))}  U 0.2  A 1.0e-5`), r.push(`  MATERIAL  "${O}"    FC ${h(S(24e3))}`)), Qe.set(c, O);
    });
  }
  r.push(""), r.push("$ FRAME SECTIONS");
  const be = /* @__PURE__ */ new Set(), ve = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), $e = 0.05;
  N.forEach((e, o) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j;
    if (e.length !== 2) return;
    const n = (_a2 = M.sectionShapes) == null ? void 0 : _a2.get(o), c = ((_b2 = M.elasticities) == null ? void 0 : _b2.get(o)) ?? 0, E = Oe.get(Ie(o)) || "Conc_1", T = ye.get(Ie(o)) ?? c >= 1e8, u = ((_c2 = M.areas) == null ? void 0 : _c2.get(o)) ?? 0, m = ((_d2 = M.momentsOfInertiaZ) == null ? void 0 : _d2.get(o)) ?? 0, O = ((_e3 = M.momentsOfInertiaY) == null ? void 0 : _e3.get(o)) ?? 0, U = ((_f2 = M.torsionalConstants) == null ? void 0 : _f2.get(o)) ?? 0;
    let g = (n == null ? void 0 : n.type) || "rect", y = (n == null ? void 0 : n.h) ?? 0, F = (n == null ? void 0 : n.b) ?? 0, H = (n == null ? void 0 : n.d) ?? 0;
    const q = (n == null ? void 0 : n.tf) ?? 0, Se = (n == null ? void 0 : n.tw) ?? 0;
    if (!n && y <= 0 && F <= 0 && H <= 0 && u > 0 && m > 0 && O > 0) {
      const pe = (_g2 = M.cantos) == null ? void 0 : _g2.get(o), Fe = (_h = M.anchos) == null ? void 0 : _h.get(o);
      y = pe && pe > 0 ? pe : Math.sqrt(12 * m / u), F = Fe && Fe > 0 ? Fe : u / y, (!isFinite(y) || y < $e) && (y = $e), (!isFinite(F) || F < $e) && (F = $e), g = "general";
    } else y <= 0 && F <= 0 && H <= 0 && u > 0 && (m > 0 ? (y = Math.sqrt(12 * m / u), F = u / y) : y = F = Math.sqrt(u), (!isFinite(y) || y < $e) && (y = $e), (!isFinite(F) || F < $e) && (F = $e), g = "rect");
    y <= 0 && F <= 0 && H <= 0 && (y = 0.3, F = 0.3, g = "rect");
    const xe = (n == null ? void 0 : n.name) ? `NAME_${n.name}` : `${g}_${h(y)}_${h(F)}_${h(H)}_${h(q)}_${h(Se)}_${E}`;
    (n == null ? void 0 : n.name) && !we.has(xe) && we.set(xe, n.name);
    let le = we.get(xe);
    if (!le) {
      const pe = T ? "S" : "C";
      g === "general" ? le = `${pe}_G${be.size + 1}` : g === "rect" ? le = `${pe}_R${Math.round(F * 100)}x${Math.round(y * 100)}` : g === "circ" ? le = `${pe}_C_D${Math.round(H * 100)}` : g === "I" ? le = `${pe}_I${Math.round(y * 100)}x${Math.round(F * 100)}` : g === "HSS" ? le = `${pe}_HSS${Math.round(F * 100)}x${Math.round(y * 100)}x${Math.round(Se * 1e3)}` : le = `${pe}_Sec${be.size + 1}`, we.set(xe, le);
    }
    if (ve.set(o, le), be.has(le)) return;
    be.add(le);
    const He = Qe.get(o);
    if (g === "CFT" && He && H > 0 && Se > 0 && !(y > 0 && F > 0)) {
      r.push(`  FRAMESECTION  "${le}"  MATERIAL "${E}"  SHAPE "Filled Steel Pipe"  D ${h(t(H))} T ${h(t(Se))} FILLMATERIAL "${He}"`);
      return;
    }
    if (g === "CFT" && He && y > 0 && F > 0 && Se > 0) {
      r.push(`  FRAMESECTION  "${le}"  MATERIAL "${E}"  SHAPE "Filled Steel Tube"  D ${h(t(y))} B ${h(t(F))} TF ${h(t(Se))} TW ${h(t(Se))} FILLMATERIAL "${He}"`);
      return;
    }
    const kt = u > 0 && m > 0 && O > 0;
    let he;
    g === "general" || kt ? he = "General" : g === "I" ? he = "Steel I/Wide Flange" : g === "HSS" ? he = "Steel Tube" : g === "CFT" ? he = "Filled Steel Tube" : g === "pipe" ? he = "Steel Pipe" : g === "L" ? he = "Steel Angle" : g === "C" ? he = "Steel Channel" : g === "2C" ? he = "Steel Double Channel" : g === "circ" ? he = "Concrete Circle" : he = "Concrete Rectangular";
    let me = `  FRAMESECTION  "${le}"  MATERIAL "${E}"  SHAPE "${he}"`;
    if (he === "General") {
      const pe = ((_i = M.shearAreasZ) == null ? void 0 : _i.get(o)) || u * 5 / 6, Fe = ((_j = M.shearAreasY) == null ? void 0 : _j.get(o)) || u * 5 / 6;
      me += `  D ${h(t(y))} B ${h(t(F))} AREA ${p(u * 1e6)} AS2 ${p(pe * 1e6)} AS3 ${p(Fe * 1e6)} I33 ${p(m * 1e12)} I22 ${p(O * 1e12)} TORSION ${p((U || m + O) * 1e12)} S33POS ${p(2 * m / y * 1e9)} S33NEG ${p(2 * m / y * 1e9)} S22POS ${p(2 * O / F * 1e9)} S22NEG ${p(2 * O / F * 1e9)} Z33 ${p(2 * m / y * 1e9)} Z22 ${p(2 * O / F * 1e9)} R33 ${p(Math.sqrt(m / u) * 1e3)} R22 ${p(Math.sqrt(O / u) * 1e3)} `, r.push(me);
      return;
    }
    y && (me += `  D ${h(t(y))}`), F && (me += `  B ${h(t(F))}`), H && !y && (me += `  D ${h(t(H))}`), q && (me += `  TF ${h(t(q))}`), Se && (me += `  TW ${h(t(Se))}`), r.push(me);
  }), r.push("");
  const Be = /* @__PURE__ */ new Map();
  let Dt = 0;
  f.forEach((e) => {
    const { dz: o } = ne(e[2]), n = `${h(e[0])},${h(e[1])},${o}`;
    Be.has(n) || Be.set(n, `${++Dt}`);
  }), r.push("$ POINT COORDINATES");
  for (const [e, o] of Be) {
    const [n, c, E] = e.split(",").map(Number);
    r.push(E ? `  POINT "${o}"  ${h(t(n))} ${h(t(c))} ${h(t(E))} ` : `  POINT "${o}"  ${h(t(n))} ${h(t(c))} `);
  }
  r.push("");
  const ue = (e) => {
    const o = f[e], { story: n, dz: c } = ne(o[2]), E = `${h(o[0])},${h(o[1])},${c}`;
    return { pt: Be.get(E) || "1", story: n };
  }, et = (e) => {
    var _a2, _b2, _c2, _d2, _e3, _f2;
    const o = [], n = (_a2 = I.propertyModifiers) == null ? void 0 : _a2.get(e);
    n && n.some((g) => Math.abs(g - 1) > 1e-9) && o.push(`PROPMODIFIERS "${n.map((g) => h(g)).join(" ")}"`);
    const c = (_b2 = M.localAngles) == null ? void 0 : _b2.get(e);
    c !== void 0 && isFinite(c) && Math.abs(c) > 1e-9 && o.push(`ANG ${h(c)}`);
    const E = (_c2 = M.momentReleases) == null ? void 0 : _c2.get(e);
    if (E && E.some((g) => g)) {
      const g = [];
      E.length === 12 ? (E[0] && g.push("PI"), E[1] && g.push("V2I"), E[2] && g.push("V3I"), E[3] && g.push("TI"), E[4] && g.push("M2I"), E[5] && g.push("M3I"), E[6] && g.push("PJ"), E[7] && g.push("V2J"), E[8] && g.push("V3J"), E[9] && g.push("TJ"), E[10] && g.push("M2J"), E[11] && g.push("M3J")) : E.length === 6 && (E[0] && g.push("TI"), E[1] && g.push("M2I"), E[2] && g.push("M3I"), E[3] && g.push("TJ"), E[4] && g.push("M2J"), E[5] && g.push("M3J")), g.length > 0 && o.push(`RELEASE "${g.join(" ")}"`);
    }
    const T = (_d2 = M.insertionPoints) == null ? void 0 : _d2.get(e);
    T && (Math.abs(T[0]) > 1e-9 || Math.abs(T[1]) > 1e-9) && o.push(`LATEROFFSET ${h(t(T[0]))} TRANSOFFSET ${h(t(T[1]))}`);
    const u = (_e3 = M.rigidOffsets) == null ? void 0 : _e3.get(e), m = (_f2 = M.endOffsets) == null ? void 0 : _f2.get(e), O = m ? [m[0], m[1]] : u, U = m && m.length > 2 ? m[2] : 0;
    return O && (Math.abs(O[0]) > 1e-9 || Math.abs(O[1]) > 1e-9) && o.push(`LENGTHOFFI ${h(t(O[0]))} LENGTHOFFJ ${h(t(O[1]))} RIGIDZONE ${h(U)}`), o.length > 0 ? ` ${o.join(" ")} ` : "";
  }, We = [], tt = /* @__PURE__ */ new Set(), Ye = /* @__PURE__ */ new Map();
  N.forEach((e, o) => {
    if (e.length !== 2) return;
    const n = gt(f, e);
    if (n === "BEAM") return;
    const c = f[e[0]][2] <= f[e[1]][2] ? e[0] : e[1], E = f[e[0]][2] <= f[e[1]][2] ? e[1] : e[0];
    if (Math.abs(f[c][0] - f[E][0]) > 1e-6 || Math.abs(f[c][1] - f[E][1]) > 1e-6) return;
    const T = ue(c), u = ve.get(o) || `Sec_${o}`, m = `${T.pt}_${u}_${n}`;
    Ye.has(m) || Ye.set(m, []), Ye.get(m).push({ i: o, bot: c, top: E, zBot: h(f[c][2]), zTop: h(f[E][2]), planPt: T.pt, secName: u, type: n });
  }), Ye.forEach((e, o) => {
    e.sort((c, E) => c.zBot - E.zBot);
    let n = 0;
    for (let c = 1; c <= e.length; c++) if (c === e.length || Math.abs(e[c].zBot - e[c - 1].zTop) > 1e-6) {
      const T = e.slice(n, c);
      T.length >= 1 && (We.push({ elemIndices: T.map((u) => u.i), planPt: T[0].planPt, bottomNodeIdx: T[0].bot, topNodeIdx: T[T.length - 1].top, secName: T[0].secName, type: T[0].type, nSegments: T.length }), T.forEach((u) => tt.add(u.i))), n = c;
    }
  }), r.push("$ LINE CONNECTIVITIES");
  const st = [], ot = (e) => W.indexOf(e), nt = /* @__PURE__ */ new Map(), at = (e, o, n, c, E, T, u, m) => {
    const O = ue(c), U = ue(n);
    m !== void 0 && nt.set(m, { name: e, story: O.story });
    const g = ot(O.story) - ot(U.story);
    g <= 0 ? r.push(`  LINE  "${e}"  BEAM  "${U.pt}"  "${O.pt}"  0`) : r.push(`  LINE  "${e}"  ${o}  "${U.pt}"  "${O.pt}"  ${g}`), st.push(`  LINEASSIGN  "${e}"  "${O.story}"  SECTION "${E}" ${T} MINNUMSTA ${u} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  We.forEach((e, o) => {
    const n = et(e.elemIndices[0]);
    at(`C${o + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, n, e.nSegments);
  }), N.forEach((e, o) => {
    if (e.length !== 2 || tt.has(o)) return;
    const n = gt(f, e), c = ve.get(o) || `Sec_${o}`, E = et(o), T = f[e[0]][2] <= f[e[1]][2] ? e[0] : e[1], u = f[e[0]][2] <= f[e[1]][2] ? e[1] : e[0];
    at(`E${o + 1}`, n === "BEAM" ? "BRACE" : n, T, u, c, E, 3, o);
  }), r.push("");
  const Le = I.weightMode ?? "auto", Re = /* @__PURE__ */ new Set();
  r.push("$ POINT ASSIGNS"), (_c = D.supports) == null ? void 0 : _c.forEach((e, o) => {
    const n = [];
    if (e[0] && n.push("UX"), e[1] && n.push("UY"), e[2] && n.push("UZ"), e[3] && n.push("RX"), e[4] && n.push("RY"), e[5] && n.push("RZ"), n.length > 0) {
      const c = ue(o), E = c.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      r.push(`  POINTASSIGN  "${c.pt}"  "${c.story}"  RESTRAINT "${n.join(" ")}" ${E} `), Re.add(`${c.pt}@${c.story}`);
    }
  });
  const it = (I.diaphragm ?? "auto") !== "none";
  it && We.forEach((e) => {
    const o = ue(e.topNodeIdx), n = `${o.pt}@${o.story}`;
    !Re.has(n) && o.story !== "Base" && (r.push(`  POINTASSIGN  "${o.pt}"  "${o.story}"  DIAPH "D1"  `), Re.add(n));
  }), Le === "manual" && D.loads && D.loads.forEach((e, o) => {
    const [n, c, E] = se(o, e);
    if (Math.abs(n) < 1e-10 && Math.abs(c) < 1e-10 && Math.abs(E) < 1e-10) return;
    const T = ue(o), u = `${T.pt}@${T.story}`;
    Re.has(u) || (r.push(`  POINTASSIGN  "${T.pt}"  "${T.story}"  DIAPH "DISCONNECTED"  `), Re.add(u));
  }), r.push(""), r.push("$ LINE ASSIGNS"), st.forEach((e) => r.push(e)), r.push("");
  const Ee = [], ct = M.areaObjects, rt = /* @__PURE__ */ new Set(), Et = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map();
  ct == null ? void 0 : ct.forEach((e) => e.cells.forEach((o) => rt.add(o))), N.forEach((e, o) => {
    if (e.length === 4 || e.length === 3) {
      const n = f[e[0]], c = f[e[1]], E = f[e[2]], T = [c[0] - n[0], c[1] - n[1], c[2] - n[2]], u = [E[0] - n[0], E[1] - n[1], E[2] - n[2]], m = T[1] * u[2] - T[2] * u[1], O = T[2] * u[0] - T[0] * u[2], U = T[0] * u[1] - T[1] * u[0], g = Math.sqrt(m * m + O * O + U * U), y = g > 1e-10 && Math.abs(U) / g < 0.5;
      Ee.push({ idx: o, el: e, isWall: y }), rt.has(o) && Ee.pop();
    }
  });
  const Me = (() => {
    for (const [e, o] of ye) if (!o) return Oe.get(e);
    return Oe.values().next().value || "Conc_1";
  })();
  ct == null ? void 0 : ct.forEach((e, o) => {
    Ee.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && Et.set(e.cells[0], e.q), e.ang !== void 0 && lt.set(e.cells[0], e.ang);
  });
  const De = "DECK";
  let ze = false;
  const je = [], ft = (e) => {
    const o = I.elementInputs.plateFormulations, n = Ee.find((E) => E.isWall === e), c = o && n ? o.get(n.idx) : void 0;
    return c === 2 ? "Membrane" : c === 1 ? "ShellThin" : "ShellThick";
  }, St = (e, o) => {
    const n = I.elementInputs.thicknesses, c = Ee.find((E) => E.isWall === e);
    return (c ? n == null ? void 0 : n.get(c.idx) : void 0) ?? (n == null ? void 0 : n.values().next().value) ?? o;
  }, At = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], Ge = (e) => {
    var _a2;
    const n = (_a2 = M.shellModifiers) == null ? void 0 : _a2.get(e);
    if (n && n.length >= 8) return n.slice(0, 8);
    const c = M.membraneModifiers, E = M.bendingModifiers, T = c == null ? void 0 : c.get(e), u = E == null ? void 0 : E.get(e);
    if (T === void 0 && u === void 0) return null;
    const m = T ?? 1, O = u ?? 1;
    return [m, m, m, O, O, O, O, O];
  }, ht = (e, o) => {
    const n = Ee.filter((u) => u.isWall === o), c = /* @__PURE__ */ new Map();
    for (const u of n) {
      const m = Ge(u.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      c.set(m.map((O) => h(O)).join(","), m);
    }
    if (c.size === 0) return "";
    c.size > 1 && console.warn(`[e2k] "${e}": ${c.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const E = c.values().next().value, T = At.map((u, m) => Math.abs(E[m] - 1) > 1e-9 ? `${u} ${h(E[m])}` : "").filter(Boolean);
    return T.length ? `  SHELLPROP  "${e}"  ${T.join(" ")} ` : "";
  }, pt = I.elementInputs.thicknesses, Tt = I.elementInputs.plateFormulations, Ce = (e) => {
    const o = pt == null ? void 0 : pt.get(e.idx), n = Tt == null ? void 0 : Tt.get(e.idx), c = Ge(e.idx);
    return `${e.isWall ? "W" : "F"}|${o ?? "-"}|${n ?? "-"}|${c ? c.map((E) => h(E)).join(",") : "-"}|${Ie(e.idx)}`;
  }, _e = (e) => {
    const o = Ge(e);
    return o ? Math.abs(o[3]) < 1e-9 && Math.abs(o[4]) < 1e-9 : false;
  }, Pe = /* @__PURE__ */ new Map();
  let Ct = 0, Pt = 0, Ft = 0;
  for (const e of Ee) {
    const o = Ce(e);
    if (Pe.has(o)) continue;
    const n = e.isWall, c = !n && _e(e.idx), E = n ? ++Pt : c ? ++Ft : ++Ct, T = Ie(e.idx);
    Pe.set(o, { nombre: (n ? "Muro" : c ? De : "Losa") + (E === 1 ? "" : String(E)), isWall: n, mem: c, t: pt == null ? void 0 : pt.get(e.idx), pf: Tt == null ? void 0 : Tt.get(e.idx), mat: Oe.get(T) ?? Me, acero: ye.get(T) ?? false });
  }
  const ke = (e) => {
    var _a2;
    return ((_a2 = Pe.get(Ce(e))) == null ? void 0 : _a2.nombre) ?? (e.isWall ? "Muro" : "Losa");
  }, Mt = (e) => e === 2 ? "Membrane" : e === 1 ? "ShellThin" : "ShellThick", yt = (e, o) => {
    const n = Ee.find((T) => Ce(T) === o), c = n ? Ge(n.idx) ?? null : null;
    if (!c) return "";
    const E = At.map((T, u) => Math.abs(c[u] - 1) > 1e-9 ? `${T} ${h(c[u])}` : "").filter(Boolean);
    return E.length ? `  SHELLPROP  "${e}"  ${E.join(" ")} ` : "";
  }, Ue = Ee.find((e) => !e.isWall), It = Ee.find((e) => e.isWall), Je = /* @__PURE__ */ new Set();
  Ue && Je.add(Ce(Ue)), It && Je.add(Ce(It));
  const $t = [...Pe.entries()].filter(([e]) => !Je.has(e));
  if (Ee.some((e) => !e.isWall)) {
    ze = !!Ue && _e(Ue.idx);
    const e = St(false, 0.15);
    if (ze) {
      r.push("$ DECK PROPERTIES");
      const n = (E) => p(t(E)), c = [...Pe.values()].find((E) => E.nombre === De);
      (c == null ? void 0 : c.acero) ? r.push(`  SHELLPROP  "${De}"  PROPTYPE  "Slab"  MATERIAL "${c.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${h(t(e))} `) : r.push(`  SHELLPROP  "${De}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Me}"  DECKMATERIAL "${Me}"  DECKSLABDEPTH ${n(e * 65 / 120)} DECKRIBDEPTH ${n(e * 55 / 120)} DECKRIBWIDTHTOP ${n(e * 150 / 120)} DECKRIBWIDTHBOTTOM ${n(e * 100 / 120)} DECKRIBSPACING ${n(e * 200 / 120)} DECKSHEARTHICKNESS ${n(e * 0.76 / 120)} DECKUNITWEIGHT ${p(s(0.11012))} SHEARSTUDDIAM ${n(e * 19 / 120)} SHEARSTUDHEIGHT ${n(e * 100 / 120)} SHEARSTUDFU 400 `);
    } else r.push("$ SLAB PROPERTIES"), r.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Me}"  MODELINGTYPE "${ft(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${h(t(e))} `);
    const o = ht(ze ? De : "Losa", false);
    o && r.push(o), r.push("");
  }
  if (Ee.some((e) => e.isWall)) {
    r.push("$ WALL PROPERTIES");
    const e = St(true, 0.2), o = ft(true);
    r.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Me}"  MODELINGTYPE "${o}"  WALLTHICKNESS ${h(t(e))} `);
    const n = ht("Muro", true);
    n && r.push(n), r.push("");
  }
  if ($t.length) {
    r.push("$ OTRAS SECCIONES DE CASCARA");
    for (const [e, o] of $t) {
      const n = o.t ?? (o.isWall ? 0.2 : 0.15), c = (T) => p(t(T));
      r.push(o.isWall ? `  SHELLPROP  "${o.nombre}"  PROPTYPE  "Wall"  MATERIAL "${o.mat ?? Me}"  MODELINGTYPE "${Mt(o.pf)}"  WALLTHICKNESS ${h(t(n))} ` : o.mem && o.acero ? `  SHELLPROP  "${o.nombre}"  PROPTYPE  "Slab"  MATERIAL "${o.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${h(t(n))} ` : o.mem ? `  SHELLPROP  "${o.nombre}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Me}"  DECKMATERIAL "${Me}"  DECKSLABDEPTH ${c(n * 65 / 120)} DECKRIBDEPTH ${c(n * 55 / 120)} DECKRIBWIDTHTOP ${c(n * 150 / 120)} DECKRIBWIDTHBOTTOM ${c(n * 100 / 120)} DECKRIBSPACING ${c(n * 200 / 120)} DECKSHEARTHICKNESS ${c(n * 0.76 / 120)} DECKUNITWEIGHT ${p(s(0.11012))} SHEARSTUDDIAM ${c(n * 19 / 120)} SHEARSTUDHEIGHT ${c(n * 100 / 120)} SHEARSTUDFU 400 ` : `  SHELLPROP  "${o.nombre}"  PROPTYPE  "Slab"  MATERIAL "${Me}"  MODELINGTYPE "${Mt(o.pf)}"  SLABTYPE "Slab"  SLABTHICKNESS ${h(t(n))} `);
      const E = yt(o.nombre, e);
      E && r.push(E);
    }
    r.push("");
  }
  if (Ee.length > 0) {
    r.push("$ AREA CONNECTIVITIES");
    const e = [];
    Ee.forEach((o, n) => {
      const { el: c, isWall: E } = o, T = E ? `W${n + 1}` : `F${n + 1}`, u = E ? "PANEL" : "FLOOR", m = c.map((O) => ue(O));
      if (E) {
        const O = (H) => W.indexOf(H);
        if (new Set(m.map((H) => H.pt)).size === 4) {
          const H = Math.max(...m.map((Se) => O(Se.story))), q = m.map((Se) => H - O(Se.story));
          r.push(`  AREA "${T}"  ${u}  4  "${m[0].pt}"  "${m[1].pt}"  "${m[2].pt}"  "${m[3].pt}"  ${q.join("  ")}  `), e.push(`  AREAASSIGN  "${T}"  "${W[H]}"  SECTION "${ke(o)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const g = f[c[0]][2] <= f[c[2]][2] ? 0 : 2, y = f[c[1]][2] <= f[c[3]][2] ? 1 : 3;
        r.push(`  AREA "${T}"  ${u}  4  "${m[g].pt}"  "${m[y].pt}"  "${m[y].pt}"  "${m[g].pt}"  1  1  0  0  `);
        const F = m[g === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${T}"  "${F}"  SECTION "${ke(o)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        const O = m.length, U = (q) => W.indexOf(q), g = Math.max(...m.map((q) => U(q.story))), y = m.map((q) => g - U(q.story)), F = W[g] ?? m[0].story;
        r.push(`  AREA "${T}"  ${u}  ${O}  ` + m.map((q) => `"${q.pt}"`).join("  ") + "  " + y.join("  ") + "  ");
        const H = lt.get(o.idx) ?? (b == null ? void 0 : b.get(o.idx));
        e.push(_e(o.idx) ? `  AREAASSIGN  "${T}"  "${F}"  SECTION "${ke(o)}"  ANG ${h(H ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${T}"  "${F}"  SECTION "${ke(o)}" ${it ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), je.push({ name: T, story: F, idx: o.idx });
      }
    }), r.push(""), r.push("$ AREA ASSIGNS"), e.forEach((o) => r.push(o)), r.push("");
  }
  const bt = Le === "manual" ? 0 : z ?? 1;
  r.push("$ LOAD PATTERNS");
  const ge = ((_d = I.loadPatterns) == null ? void 0 : _d.length) ? I.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: bt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of ge) {
    let o;
    e.type === "Dead" ? o = Le === "manual" ? 0 : e.selfWeightMultiplier ?? z ?? 1 : (o = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), r.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${o}`);
  }
  r.push("");
  const Ne = I.loadPatternDestino && ge.some((e) => e.name === I.loadPatternDestino) ? I.loadPatternDestino : ((_e2 = ge.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? ge[0].name, Ke = [], Ze = /* @__PURE__ */ new Map(), ut = (e, o) => {
    const n = Ze.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let c = 0; c < 6; c++) n[c] += o[c] ?? 0;
    Ze.set(e, n);
  }, wt = Ne === (((_f = ge.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? ge[0].name), Bt = Le === "manual" || !wt || te;
  if (D.loads && D.loads.size > 0 && D.loads.forEach((e, o) => {
    const [n, c, E] = se(o, e), [T, u, m] = ce(o, e);
    ut(o, [n, c, Bt ? E : 0, T, u, m]);
  }), D.moments && D.moments.size > 0 && D.moments.forEach((e, o) => {
    ut(o, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), Ze.forEach((e, o) => {
    if (e.every((c) => Math.abs(c) <= 1e-10)) return;
    const n = ue(o);
    Ke.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "FORCE"  LC "${Ne}"  FX ${p(a(e[0]))}  FY ${p(a(e[1]))}  FZ ${p(a(e[2]))}  MX ${p(i(e[3]))}  MY ${p(i(e[4]))}  MZ ${p(i(e[5]))}`);
  }), Ke.length > 0 && (r.push("$ POINT OBJECT LOADS"), Ke.forEach((e) => r.push(e)), r.push("")), te && oe.size > 0) {
    const e = [];
    for (const o of oe) {
      const n = ee.get(o), c = nt.get(o);
      if (!c) continue;
      const E = (T) => p(s(T) / L);
      Math.abs(n[2]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "${n[2] < 0 ? "GRAV" : "Z"}"  LC "${Ne}"  FVAL ${E(Math.abs(n[2]))}`), Math.abs(n[0]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "X"  LC "${Ne}"  FVAL ${E(n[0])}`), Math.abs(n[1]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "Y"  LC "${Ne}"  FVAL ${E(n[1])}`);
    }
    e.length && (r.push("$ FRAME OBJECT LOADS"), e.forEach((o) => r.push(o)), r.push(""));
  }
  if (l && l.size > 0 && je.length > 0) {
    const e = [];
    for (const o of je) {
      const n = Et.get(o.idx), c = n !== void 0 ? { value: n } : l.get(o.idx);
      if (!c || Math.abs(c.value) < 1e-12) continue;
      const E = c.dir ?? "GRAV", T = E === "GRAV" ? Math.abs(c.value) : c.value;
      e.push(`  AREALOAD  "${o.name}"  "${o.story}"  TYPE "UNIFF"  DIR "${E}"  LC "${c.pattern ?? Ne}"  FVAL ${p(s(T) / (L * L))}`);
    }
    e.length > 0 && (r.push("$ SHELL OBJECT LOADS"), e.forEach((o) => r.push(o)), r.push(""));
  }
  r.push("$ ANALYSIS OPTIONS"), r.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), r.push('  PDELTA  METHOD "NONE"  '), r.push("");
  const Xe = Le === "manual";
  r.push("$ MASS SOURCE"), r.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${Xe ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${Xe ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), Xe || r.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), r.push(""), r.push("$ LOAD CASES");
  const Yt = ((_g = I.loadCases) == null ? void 0 : _g.length) ? I.loadCases : ge.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of Yt) {
    r.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const o of e.patterns ?? []) r.push(`  LOADCASE "${e.name}"  LOADPAT  "${o.pattern}"  SF ${o.scaleFactor} `);
  }
  const Gt = I.modalModes ?? 12;
  r.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), r.push(`  LOADCASE "Modal"  MAXMODES ${Gt}  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `), r.push("");
  const Ve = I.loadCombinations;
  if (Ve && Ve.length) {
    r.push("$ LOAD COMBINATIONS");
    for (const e of Ve) {
      r.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const o of e.cases ?? []) r.push(`  COMBO "${e.name}"  LOADCASE  "${o.case}"  SF ${o.scaleFactor} `);
    }
    r.push("");
  }
  return r.push("  END"), r.push("$ END OF MODEL FILE"), r.join(`\r
`);
}
function gt(I, f) {
  const N = I[f[0]], D = I[f[1]], M = Math.abs(D[2] - N[2]), Y = Math.sqrt((D[0] - N[0]) ** 2 + (D[1] - N[1]) ** 2), k = M > Y * 0.5;
  return k && Y > 0.01 ? "BRACE" : k ? "COLUMN" : "BEAM";
}
export {
  Zt as a,
  Xt as e,
  Kt as p
};
