function y(u) {
  return u && parseFloat(u) || 0;
}
function Lt(u) {
  const l = /* @__PURE__ */ new Map(), N = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let D;
  for (; (D = N.exec(u)) !== null; ) l.set(D[1], D[2] !== void 0 ? D[2] : D[3]);
  return l;
}
function Zt(u) {
  const l = u.split(/\r?\n/);
  return l.some((D) => D.trim().startsWith("TABLE:")) ? Ht(l) : vt(l);
}
function Ht(u) {
  var _a, _b, _c, _d, _e, _f;
  const l = [];
  let N = "";
  for (const v of u) {
    const L = v.trimEnd();
    L.endsWith("_") ? N += L.slice(0, -1) + " " : (N += L, l.push(N), N = "");
  }
  N && l.push(N);
  const D = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const Y = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), X = [], j = [], ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ce = [], ne = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Te = [], r = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
  let $ = "";
  for (const v of l) {
    const L = v.trim();
    if (!L || L.startsWith(";") || L.startsWith("File ")) continue;
    if (L.startsWith("TABLE:")) {
      const s = L.match(/TABLE:\s+"(.+?)"/);
      $ = s ? s[1].toUpperCase() : "";
      continue;
    }
    if (L === "END TABLE DATA") {
      $ = "";
      continue;
    }
    const t = Lt(L);
    switch ($) {
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
          a.E = y(t.get("E1")), a.G = y(t.get("G12")), a.nu = y(t.get("U12")), a.density = y(t.get("UnitMass")), Y.set(s, a);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const s = t.get("Material");
        s && Y.has(s) && (Y.get(s).fy = y(t.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const s = t.get("SectionName");
        s && S.set(s, { material: t.get("Material") || "", shape: t.get("Shape") || "Rectangular", D: y(t.get("t3")), B: y(t.get("t2")), TF: y(t.get("tf")), TW: y(t.get("tw")), A: y(t.get("Area")), Iz: y(t.get("I33")), Iy: y(t.get("I22")), J: y(t.get("TorsConst")), As2: y(t.get("AS2")), As3: y(t.get("AS3")) });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 09 - SHAPE BOX/TUBE": {
        const s = t.get("SectionName");
        s && U.set(s, { h: y(t.get("Height")), b: y(t.get("Width")), t: y(t.get("FlngThick")) || y(t.get("WebThick")), mat: t.get("ShapeMat") || "" });
        break;
      }
      case "SECTION DESIGNER PROPERTIES 10 - SHAPE PIPE": {
        const s = t.get("SectionName");
        s && U.set(s, { h: 0, b: 0, D: y(t.get("OuterDiam")), t: y(t.get("WallThick")), mat: t.get("ShapeMat") || "" });
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
        s && b.set(s, { material: t.get("Material") || "", type: t.get("Type") || "Shell", thickness: y(t.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const s = t.get("Joint");
        if (s) {
          const a = y(t.get("XorR")), i = y(t.get("Y")), A = y(t.get("Z"));
          Z.set(s, [a, i, A]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const s = t.get("Frame"), a = t.get("JointI"), i = t.get("JointJ");
        s && a && i && X.push({ name: s, j1: a, j2: i });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const s = t.get("Area");
        if (s) {
          const a = parseInt(t.get("NumJoints") || "4"), i = [];
          for (let A = 1; A <= a; A++) {
            const w = t.get(`Joint${A}`);
            w && i.push(w);
          }
          i.length >= 3 && j.push({ name: s, joints: i });
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
        s && a && ie.set(s, a);
        break;
      }
      case "FRAME LOADS - DISTRIBUTED": {
        const s = t.get("Frame"), a = t.get("Dir"), i = y(t.get("FOverLA"));
        if (s && a && i) {
          const A = { X: 0, Y: 1, Z: 2 }[a];
          if (A !== void 0) {
            const w = Se.get(s) ?? [0, 0, 0];
            w[A] += i, Se.set(s, w);
          }
        }
        break;
      }
      case "CONNECTIVITY - SOLID": {
        const s = t.get("Solid");
        if (s) {
          const a = [];
          for (let i = 1; i <= 8; i++) {
            const A = t.get(`Joint${i}`);
            A && a.push(A);
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
        s && a && T.set(s, a);
        break;
      }
      case "AREA STIFFNESS MODIFIERS": {
        const s = t.get("Area");
        s && re.set(s, ["f11", "f22", "f12", "m11", "m22", "m12", "v13", "v23"].map((a) => t.has(a) ? y(t.get(a)) : 1));
        break;
      }
      case "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL": {
        const s = t.get("Frame");
        s && se.set(s, y(t.get("Angle")));
        break;
      }
      case "FRAME OFFSET ALONG LENGTH ASSIGNMENTS": {
        const s = t.get("Frame");
        s && ne.set(s, [y(t.get("LengthI")), y(t.get("LengthJ")), y(t.get("RigidFactor"))]);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const s = t.get("Joint");
        s && ce.push({ joint: s, fx: y(t.get("F1")), fy: y(t.get("F2")), fz: y(t.get("F3")), mx: y(t.get("M1")), my: y(t.get("M2")), mz: y(t.get("M3")) });
        break;
      }
    }
  }
  return Rt(D, I, Y, S, b, Z, X, j, ee, te, ie, ce, ne, se, re, Se, Te, r, T, U, Q);
}
function vt(u) {
  const l = { force: "KN", length: "m" };
  let N = "UX,UY,UZ,RX,RY,RZ";
  const D = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Q = [], S = [], b = /* @__PURE__ */ new Map(), Z = [], X = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ie = [], ce = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map();
  let se = "", re = "";
  for (const r of u) {
    const T = r.trim();
    if (!T || T.startsWith(";")) continue;
    if (!r.startsWith(" ") && !r.startsWith("	")) {
      const L = T.toUpperCase();
      if (L === "END") break;
      L.startsWith("SHELL SECTION") ? se = "SHELL SECTION" : L.startsWith("FRAME SECTION") ? se = "FRAME SECTION" : se = L.split(/\s+/)[0];
      continue;
    }
    const $ = Lt(T), v = T.split(/\s+/);
    switch (se) {
      case "SYSTEM": {
        const L = $.get("DOF");
        L && (N = L);
        const t = $.get("LENGTH");
        t && (l.length = t);
        const s = $.get("FORCE");
        s && (l.force = s);
        break;
      }
      case "JOINT": {
        const L = v[0];
        U.set(L, [y($.get("X")), y($.get("Y")), y($.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const L = $.get("ADD"), t = $.get("DOF");
        if (L && t) {
          const s = t.split(","), a = [false, false, false, false, false, false];
          for (const i of s) {
            const A = i.toUpperCase();
            (A === "UX" || A === "U1") && (a[0] = true), (A === "UY" || A === "U2") && (a[1] = true), (A === "UZ" || A === "U3") && (a[2] = true), (A === "RX" || A === "R1") && (a[3] = true), (A === "RY" || A === "R2") && (a[4] = true), (A === "RZ" || A === "R3") && (a[5] = true);
          }
          b.set(L, a);
        }
        break;
      }
      case "MATERIAL": {
        const L = $.get("NAME");
        if (L) re = L, D.set(L, { E: 0, nu: 0, G: 0 });
        else if (re) {
          const t = D.get(re), s = $.get("E");
          s && (t.E = y(s));
          const a = $.get("U");
          a && (t.nu = y(a)), t.G = t.E / (2 * (1 + t.nu));
          const i = $.get("M");
          i && (t.density = y(i));
        }
        break;
      }
      case "SHELL": {
        const L = v[0], t = $.get("J");
        $.get("SEC"), t && S.push({ name: L, joints: t.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const L = $.get("NAME");
        L && Y.set(L, { material: $.get("MAT") || "", type: $.get("TYPE") || "Shell", thickness: y($.get("TH")) });
        break;
      }
      case "FRAME": {
        const L = v[0], t = $.get("J");
        if (t) {
          const s = t.split(",");
          s.length >= 2 && Q.push({ name: L, j1: s[0], j2: s[1] });
        }
        break;
      }
      case "LOAD": {
        const L = $.get("ADD");
        L && Z.push({ joint: L, fx: y($.get("UX")), fy: y($.get("UY")), fz: y($.get("UZ")), mx: y($.get("MX")), my: y($.get("MY")), mz: y($.get("MZ")) });
        break;
      }
    }
  }
  return Rt(l, N, D, I, Y, U, Q, S, b, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), Z, X, j, ee, te, ie, ce, ne);
}
function Rt(u, l, N, D, I, Y, U, Q, S, b, Z, X, j = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ce = [], ne = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), re, Se) {
  var _a, _b;
  const Te = [], r = /* @__PURE__ */ new Map(), T = [];
  for (const [h, O] of Y) r.set(h, T.length), Te.push(h), T.push(O);
  const $ = [], v = [], L = /* @__PURE__ */ new Map();
  for (const h of U) {
    const O = r.get(h.j1), m = r.get(h.j2);
    if (O !== void 0 && m !== void 0) {
      const B = $.length;
      $.push([O, m]), v.push(h.name);
      const F = b.get(h.name);
      F && L.set(B, F);
    }
  }
  const t = $.length;
  for (const h of Q) {
    const O = h.joints.map((m) => r.get(m)).filter((m) => m !== void 0);
    if (O.length >= 3) {
      const m = $.length;
      $.push(O), v.push(h.name);
      const B = Z.get(h.name);
      B && L.set(m, B);
    }
  }
  const s = $.length - t, a = [];
  for (const h of ce) {
    const O = h.joints.map((F) => r.get(F));
    if (O.some((F) => F === void 0)) continue;
    const m = $.length;
    $.push([O[0], O[1], O[3], O[2], O[4], O[5], O[7], O[6]]), v.push(h.name), a.push(m);
    const B = se.get(h.name);
    B && L.set(m, B);
  }
  const i = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, A = /* @__PURE__ */ new Map(), w = N.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let h = 0; h < $.length; h++) {
    const O = L.get(h), m = O ? D.get(O) : null, B = O ? I.get(O) : null;
    if (m || $[h].length === 2) {
      const F = m || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, _ = N.get(F.material) || w, V = _.E || w.E, J = _.nu || 0.3, q = _.G || V / (2 * (1 + J));
      i.elasticities.set(h, V), i.shearModuli.set(h, q), i.areas.set(h, F.A || F.D * F.B), i.momentsOfInertiaZ.set(h, F.Iz || F.B * F.D ** 3 / 12), i.momentsOfInertiaY.set(h, F.Iy || F.D * F.B ** 3 / 12), i.torsionalConstants.set(h, F.J || 0), i.densities.set(h, _.density || 0), F.As2 && (i.shearAreasZ ?? (i.shearAreasZ = /* @__PURE__ */ new Map()), i.shearAreasZ.set(h, F.As2)), F.As3 && (i.shearAreasY ?? (i.shearAreasY = /* @__PURE__ */ new Map()), i.shearAreasY.set(h, F.As3));
      const K = j.get(v[h]);
      K && (i.endOffsets ?? (i.endOffsets = /* @__PURE__ */ new Map()), i.endOffsets.set(h, K));
      const k = ee.get(v[h]);
      k && (i.localAngles ?? (i.localAngles = /* @__PURE__ */ new Map()), i.localAngles.set(h, k)), ((_a = F.shape) == null ? void 0 : _a.includes("Wide Flange")) || F.shape === "I" ? A.set(h, { type: "I", b: F.B, h: F.D, name: O || "I-section" }) : A.set(h, { type: "rect", b: F.B, h: F.D });
      const W = O ? re == null ? void 0 : re.get(O) : void 0;
      if (W && W.t > 0 && (W.b > 0 && W.h > 0 || (W.D ?? 0) > 0)) {
        const Ee = O ? Se == null ? void 0 : Se.get(O) : void 0, oe = Ee && ((_b = N.get(Ee.mat)) == null ? void 0 : _b.E) || 0;
        A.set(h, W.D ? { type: "CFT", d: W.D, tw: W.t, name: O, ...oe > 0 ? { fillE: oe } : {} } : { type: "CFT", b: W.b, h: W.h, tw: W.t, name: O, ...oe > 0 ? { fillE: oe } : {} });
      }
    } else if (B) {
      const F = N.get(B.material) || w, _ = F.E || w.E, V = F.nu || 0.2, J = F.G || _ / (2 * (1 + V));
      i.elasticities.set(h, _), i.shearModuli.set(h, J), i.thicknesses.set(h, B.thickness), i.poissonsRatios.set(h, V), i.plateFormulations ?? (i.plateFormulations = /* @__PURE__ */ new Map()), i.plateFormulations.set(h, /thin/i.test(B.type) ? 1 : 0);
      const q = te.get(v[h]);
      q && (i.shellModifiers ?? (i.shellModifiers = /* @__PURE__ */ new Map()), i.shellModifiers.set(h, q), i.membraneModifiers ?? (i.membraneModifiers = /* @__PURE__ */ new Map()), i.membraneModifiers.set(h, q[0]), i.bendingModifiers ?? (i.bendingModifiers = /* @__PURE__ */ new Map()), i.bendingModifiers.set(h, q[3])), i.densities.set(h, F.density || 0);
    }
  }
  if (a.length) {
    let h = false;
    for (const O of a) {
      const m = ne.get(L.get(O) || ""), B = m && N.get(m.material) || w, F = B.E || w.E, _ = B.nu || 0.2;
      i.elasticities.set(O, F), i.poissonsRatios.set(O, _), i.shearModuli.set(O, B.G || F / (2 * (1 + _))), i.densities.set(O, B.density || 0), (m == null ? void 0 : m.incomp) && (h = true);
    }
    i.solidIncompatible = h;
  }
  const H = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() };
  for (const [h, O] of S) {
    const m = r.get(h);
    m !== void 0 && H.supports.set(m, O);
  }
  for (const [h, O] of ie) {
    const m = v.indexOf(h);
    if (m < 0 || $[m].length !== 2) continue;
    i.frameLoads ?? (i.frameLoads = /* @__PURE__ */ new Map()), i.frameLoads.set(m, O);
    const B = T[$[m][0]], F = T[$[m][1]], _ = [F[0] - B[0], F[1] - B[1], F[2] - B[2]], V = Math.hypot(_[0], _[1], _[2]);
    if (V < 1e-9) continue;
    const J = [_[0] / V, _[1] / V, _[2] / V], q = V * V / 12, K = [J[1] * O[2] - J[2] * O[1], J[2] * O[0] - J[0] * O[2], J[0] * O[1] - J[1] * O[0]], k = (W, Ee) => {
      const oe = H.loads.get(W) || [0, 0, 0, 0, 0, 0];
      for (let Ae = 0; Ae < 6; Ae++) oe[Ae] += Ee[Ae];
      H.loads.set(W, oe);
    };
    k($[m][0], [O[0] * V / 2, O[1] * V / 2, O[2] * V / 2, q * K[0], q * K[1], q * K[2]]), k($[m][1], [O[0] * V / 2, O[1] * V / 2, O[2] * V / 2, -q * K[0], -q * K[1], -q * K[2]]);
  }
  for (const h of X) {
    const O = r.get(h.joint);
    if (O !== void 0) {
      const m = H.loads.get(O) || [0, 0, 0, 0, 0, 0];
      m[0] += h.fx, m[1] += h.fy, m[2] += h.fz, m[3] += h.mx, m[4] += h.my, m[5] += h.mz, H.loads.set(O, m);
    }
  }
  return { units: u, dof: l, materials: N, frameSections: D, shellSections: I, nodes: T, nodeNames: Te, nodeNameToIdx: r, elements: $, elementNames: v, elementSections: L, nodeInputs: H, elementInputs: i, sectionShapes: A, info: { nNodes: T.length, nFrames: t, nShells: s, title: `SAP2000 (${t} frames, ${s} shells)` } };
}
function Xt(u) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { nodes: l, elements: N, nodeInputs: D, elementInputs: I } = u, Y = { force: "KN", length: "m" };
  u.units && (u.units.force !== "KN" || u.units.length !== "m") && console.warn(`[s2k] el modelo va en kN\xB7m y el exportador NO convierte: se declara CurrUnits="KN, m, C" y se ignora "${u.units.force}, ${u.units.length}". Etiquetarlo de otra forma hace que SAP2000 lea las fuerzas escaladas.`);
  const U = u.title || "Awatif Model", Q = [], S = (t) => Q.push(t), b = () => Q.push(" ");
  S(`File ${U}.$2k was saved on m/d/yy at h:mm:ss`), b(), S('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), S("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), b();
  const Z = [], X = (t) => {
    var _a2, _b2, _c2, _d2;
    const s = ((_a2 = I.elasticities) == null ? void 0 : _a2.get(t)) || 0, a = (_b2 = I.poissonsRatios) == null ? void 0 : _b2.get(t), i = ((_c2 = I.shearModuli) == null ? void 0 : _c2.get(t)) || 0, A = a !== void 0 ? a : s > 0 && i > 0 ? Math.max(0, Math.min(0.5, s / (2 * i) - 1)) : 0.2, w = i > 0 ? i : s > 0 ? s / (2 * (1 + A)) : 0, H = ((_d2 = I.densities) == null ? void 0 : _d2.get(t)) || 0;
    return { E: s, nu: A, G: w, rho: H, key: `MAT_${Math.round(s)}_n${A.toFixed(4)}` };
  }, j = [], ee = [];
  if (N.forEach((t, s) => {
    t.length === 2 ? Z.push(s) : t.length === 8 ? ee.push(s) : j.push(s);
  }), Z.length > 0) {
    S('TABLE:  "CONNECTIVITY - FRAME"');
    for (const t of Z) {
      const s = N[t];
      S(`   Frame=${t + 1}   JointI=${s[0] + 1}   JointJ=${s[1] + 1}   IsCurved=No`);
    }
    b();
  }
  if (j.length > 0) {
    S('TABLE:  "CONNECTIVITY - AREA"');
    for (const t of j) {
      const s = N[t], a = s.map((i, A) => `Joint${A + 1}=${i + 1}`).join("   ");
      S(`   Area=${t + 1}   NumJoints=${s.length}   ${a}`);
    }
    b();
  }
  if (ee.length > 0) {
    S('TABLE:  "CONNECTIVITY - SOLID"');
    for (const t of ee) {
      const s = N[t], a = [s[0], s[1], s[3], s[2], s[4], s[5], s[7], s[6]];
      S(`   Solid=${t + 1}   ${a.map((i, A) => `Joint${A + 1}=${i + 1}`).join("   ")}`);
    }
    b();
  }
  S('TABLE:  "COORDINATE SYSTEMS"'), S("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), b(), S('TABLE:  "DATABASE FORMAT TYPES"'), S("   UnitsCurr=Yes   OverrideE=No"), b();
  const te = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map();
  for (const t of Z) {
    const s = ((_a = I.areas) == null ? void 0 : _a.get(t)) || 0, a = ((_b = I.momentsOfInertiaZ) == null ? void 0 : _b.get(t)) || 0, i = ((_c = I.momentsOfInertiaY) == null ? void 0 : _c.get(t)) || 0, A = ((_d = I.torsionalConstants) == null ? void 0 : _d.get(t)) || 0, w = ((_e = I.elasticities) == null ? void 0 : _e.get(t)) || 0, H = X(t).key, h = ((_f = I.shearAreasZ) == null ? void 0 : _f.get(t)) ?? 0, O = ((_g = I.shearAreasY) == null ? void 0 : _g.get(t)) ?? 0, m = (_h = I.sectionShapes) == null ? void 0 : _h.get(t);
    let B;
    const F = (m == null ? void 0 : m.type) === "CFT" && m.d > 0 && m.tw > 0 && m.tw < m.d / 2 && !(m.b > 0 && m.h > 0);
    if ((m == null ? void 0 : m.type) === "CFT" && w > 0 && (F || m.b > 0 && m.h > 0 && m.tw > 0 && m.tw < Math.min(m.b, m.h) / 2)) {
      const J = F ? m.d - 2 * m.tw : 0, q = F ? 0 : m.b - 2 * m.tw, K = F ? 0 : m.h - 2 * m.tw, k = F ? Math.PI * (m.d * m.d - J * J) / 4 : m.b * m.h - q * K, W = F ? Math.PI * J * J / 4 : q * K, Ee = m.fillE > 0 ? m.fillE / w : Math.max(0.01, Math.min(1, (s - k) / W)), oe = Ee * w, Ae = 0.2, de = `MAT_${Math.round(oe)}_n${Ae.toFixed(4)}`, $e = X(t).rho;
      ie.has(de) || ie.set(de, { E: oe, nu: Ae, G: oe / (2 * (1 + Ae)), rho: $e * Ee }), B = F ? { b: m.d, h: m.d, t: m.tw, Ec: oe, nuC: Ae, matFill: de, D: m.d } : { b: m.b, h: m.h, t: m.tw, Ec: oe, nuC: Ae, matFill: de };
    }
    const _ = `A${s.toPrecision(6)}_Iz${a.toPrecision(6)}_s${h.toPrecision(6)}_${O.toPrecision(6)}${B ? B.D ? `_SDC${B.D}x${B.t}` : `_SD${B.b}x${B.h}x${B.t}` : ""}`;
    if (!te.has(_)) {
      let J = 0.3, q = 0.3;
      s > 0 && a > 0 && (J = Math.sqrt(12 * a / s), q = s / J), te.set(_, { A: s, Iz: a, Iy: i, J: A, b: q, h: J, matKey: H, As2: h > 0 ? h : s * 5 / 6, As3: O > 0 ? O : s * 5 / 6, sd: B });
    }
    const V = [...te.keys()].indexOf(_) + 1;
    ce.set(t, `SEC${V}`);
  }
  if (Z.length > 0) {
    S('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const t of Z) {
      const s = ce.get(t) || "SEC1";
      S(`   Frame=${t + 1}   AutoSelect=N.A.   AnalSect=${s}   MatProp=Default`);
    }
    b();
  }
  if (te.size > 0) {
    S('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let t = 0;
    for (const [, s] of te) {
      if (t++, s.sd) {
        S(`   SectionName=SEC${t}   Material=${s.matKey}   Shape="SD Section"   Area=${R(s.A)}   TorsConst=${R(s.J)}   I33=${R(s.Iz)}   I22=${R(s.Iy)}   I23=0   AS2=${R(s.As2)}   AS3=${R(s.As3)} _`), S("        Color=Cyan   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
        continue;
      }
      S(`   SectionName=SEC${t}   Material=${s.matKey}   Shape=General   t3=${R(s.h)}   t2=${R(s.b)}   Area=${R(s.A)}   TorsConst=${R(s.J)}   I33=${R(s.Iz)}   I22=${R(s.Iy)}   I23=0   AS2=${R(s.As2)}   AS3=${R(s.As3)} _`), S("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    b();
  }
  const ne = [...te.values()].map((t, s) => ({ sec: t, name: `SEC${s + 1}` })).filter((t) => t.sec.sd);
  if (ne.length > 0) {
    S('TABLE:  "SECTION DESIGNER PROPERTIES 01 - GENERAL"');
    for (const { name: a } of ne) S(`   SectionName=${a}   DesignType="No Check/Design"   DsgnOrChck=Check   IncludeVStr=No   AxisAngle=90   MeshSzAbs=0   MeshSzRel=0.05`);
    b();
    const t = ne.filter((a) => !a.sec.sd.D), s = ne.filter((a) => a.sec.sd.D);
    if (t.length > 0) {
      S('TABLE:  "SECTION DESIGNER PROPERTIES 09 - SHAPE BOX/TUBE"');
      for (const { sec: a, name: i } of t) {
        const A = a.sd;
        S(`   SectionName=${i}   ShapeName=TUBO   ShapeType="User Defined"   ShapeMat=${a.matKey}   ZOrder=1   FillColor=Gray4   XCenter=0   YCenter=0   Height=${R(A.h)}   Width=${R(A.b)}   FlngThick=${R(A.t)}   WebThick=${R(A.t)}   Rotation=0 _`), S('        CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0   DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0');
      }
      b();
    }
    if (s.length > 0) {
      S('TABLE:  "SECTION DESIGNER PROPERTIES 10 - SHAPE PIPE"');
      for (const { sec: a, name: i } of s) {
        const A = a.sd;
        S(`   SectionName=${i}   ShapeName=TUBO   ShapeType="User Defined"   ShapeMat=${a.matKey}   ZOrder=1   FillColor=Gray4   XCenter=0   YCenter=0   OuterDiam=${R(A.D)}   WallThick=${R(A.t)}   CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0 _`), S("        DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0");
      }
      b();
    }
    if (t.length > 0) {
      S('TABLE:  "SECTION DESIGNER PROPERTIES 12 - SHAPE SOLID RECTANGLE"');
      for (const { sec: a, name: i } of t) {
        const A = a.sd;
        S(`   SectionName=${i}   ShapeName=RELLENO   ShapeMat=${A.matFill}   ZOrder=2   FillColor=Gray4   XCenter=0   YCenter=0   Height=${R(A.h - 2 * A.t)}   Width=${R(A.b - 2 * A.t)}   Rotation=0   Reinforcing=No   CoreDim="Program Determined"   BCoreMajor=0   BCoreMinor=0 _`), S("        DCoreMajorPositive=0   DCoreMajorNegative=0   DCoreMinorPositive=0   DCoreMinorNegative=0");
      }
      b();
    }
    if (s.length > 0) {
      S('TABLE:  "SECTION DESIGNER PROPERTIES 13 - SHAPE SOLID CIRCLE"');
      for (const { sec: a, name: i } of s) {
        const A = a.sd;
        S(`   SectionName=${i}   ShapeName=RELLENO   ShapeMat=${A.matFill}   ZOrder=2   FillColor=Gray4   XCenter=0   YCenter=0   Diameter=${R(A.D - 2 * A.t)}   Reinforcing=No   CoreDim="Program Determined"   BCoreMajor=0   DCoreMajorPositive=0`);
      }
      b();
    }
    S('TABLE:  "SECTION DESIGNER PROPERTIES 30 - FIBER GENERAL"');
    for (const { name: a } of ne) S(`   SectionName=${a}   NumFibersD2=3   NumFibersD3=3   CoordSys=Cartesian   GridAngle=0   LumpRebar=No   FiberPMM=No   FiberMC=No`);
    b();
  }
  {
    const t = Z.filter((s) => {
      var _a2;
      const a = (_a2 = I.localAngles) == null ? void 0 : _a2.get(s);
      return a !== void 0 && isFinite(a) && Math.abs(a) > 1e-9;
    });
    if (t.length > 0) {
      S('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const s of t) S(`   Frame=${s + 1}   Angle=${R(I.localAngles.get(s))}   AdvanceAxes=No`);
      b();
    }
  }
  {
    const t = I.endOffsets, s = Z.filter((a) => {
      const i = t == null ? void 0 : t.get(a);
      return !!i && (Math.abs(i[0]) > 1e-9 || Math.abs(i[1]) > 1e-9);
    });
    if (s.length > 0) {
      S('TABLE:  "FRAME OFFSET ALONG LENGTH ASSIGNMENTS"');
      for (const a of s) {
        const i = t.get(a);
        S(`   Frame=${a + 1}   Type=User   LengthI=${R(i[0])}   LengthJ=${R(i[1])}   RigidFactor=${R(i.length > 2 ? i[2] : 0)}`);
      }
      b();
    }
  }
  const se = !!u.layeredSection && j.length > 0, re = u.layeredSection, Se = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
  if (!se) for (const t of j) {
    const s = ((_i = I.thicknesses) == null ? void 0 : _i.get(t)) || 0.1;
    (_j = I.elasticities) == null ? void 0 : _j.get(t);
    const a = X(t).key, i = ((_k = I.plateFormulations) == null ? void 0 : _k.get(t)) ?? 0, A = `t${s.toPrecision(6)}_f${i}`;
    Se.has(A) || Se.set(A, { t: s, matKey: a, formulacion: i });
    const w = [...Se.keys()].indexOf(A) + 1;
    Te.set(t, `SSEC${w}`);
  }
  if (j.length > 0) {
    S('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of j) {
      const i = se ? re.name : Te.get(a) || "SSEC1";
      S(`   Area=${a + 1}   Section=${i}   MatProp=Default`);
    }
    b();
    const t = I.shellModifiers, s = j.filter((a) => {
      const i = t == null ? void 0 : t.get(a);
      return i && i.some((A) => Math.abs(A - 1) > 1e-12);
    });
    if (s.length > 0) {
      S('TABLE:  "AREA STIFFNESS MODIFIERS"');
      for (const a of s) {
        const i = t.get(a);
        S(`   Area=${a + 1}   f11=${R(i[0])}   f22=${R(i[1])}   f12=${R(i[2])}   m11=${R(i[3])}   m22=${R(i[4])}   m12=${R(i[5])}   v13=${R(i[6])}   v23=${R(i[7])}   MassMod=1   WeightMod=1`);
      }
      b();
    }
    if (S('TABLE:  "AREA SECTION PROPERTIES"'), se) {
      const a = re, i = ((_l = a.layers[0]) == null ? void 0 : _l.material) || "MAT_DEFAULT";
      S(`   Section=${a.name}   Material=${i}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${R(a.totalThickness)}   BendThick=${R(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, i] of Se) {
        a++;
        const A = i.formulacion === 2 ? "Membrane" : i.formulacion === 3 ? "Plate-Thin" : i.formulacion === 4 ? "Plate-Thick" : i.formulacion === 1 ? "Shell-Thin" : "Shell-Thick", w = i.formulacion === 3 || i.formulacion === 4 ? "No" : "Yes";
        S(`   Section=SSEC${a}   Material=${i.matKey}   MatAngle=0   AreaType=Shell   Type=${A}   DrillDOF=${w}   Thickness=${R(i.t)}   BendThick=${R(i.t)}   Color=Cyan`);
      }
    }
    if (b(), se) {
      S('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = re;
      for (const i of a.layers) {
        const A = i.angle ?? 0, w = i.numIntPts ?? 3;
        S(`   Section=${a.name}   LayerName=${i.name}   Distance=${R(i.distance)}   Thickness=${R(i.thickness)}   Type=Shell   NumIntPts=${w}   Material=${i.material}   MatAngle=${R(A * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      b();
    }
  }
  S('TABLE:  "JOINT COORDINATES"');
  for (let t = 0; t < l.length; t++) {
    const s = l[t];
    S(`   Joint=${t + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${R(s[0])}   Y=${R(s[1])}   Z=${R(s[2])}   SpecialJt=No`);
  }
  if (b(), D.supports && D.supports.size > 0) {
    S('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [t, s] of D.supports) {
      if (!s.some((i) => i)) continue;
      const a = (i) => i ? "Yes" : "No";
      S(`   Joint=${t + 1}   U1=${a(s[0])}   U2=${a(s[1])}   U3=${a(s[2])}   R1=${a(s[3])}   R2=${a(s[4])}   R3=${a(s[5])}`);
    }
    b();
  }
  const r = u.selfWtMult ?? 1;
  S('TABLE:  "LOAD PATTERN DEFINITIONS"'), S(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${r}`), b(), S('TABLE:  "LOAD CASE DEFINITIONS"'), S('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), b(), S('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), S('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), b();
  const T = I.frameLoads, $ = /* @__PURE__ */ new Map();
  if ((_m = D.loads) == null ? void 0 : _m.forEach((t, s) => $.set(s, [...t])), T && T.size > 0) {
    const t = (s, a) => {
      const i = $.get(s) ?? [0, 0, 0, 0, 0, 0];
      $.set(s, i.map((A, w) => A - a[w]));
    };
    for (const [s, a] of T) {
      const i = N[s];
      if (!i || i.length !== 2) continue;
      const A = l[i[0]], w = l[i[1]], H = [w[0] - A[0], w[1] - A[1], w[2] - A[2]], h = Math.hypot(H[0], H[1], H[2]);
      if (h < 1e-9) continue;
      const O = [H[0] / h, H[1] / h, H[2] / h], m = h * h / 12, B = [O[1] * a[2] - O[2] * a[1], O[2] * a[0] - O[0] * a[2], O[0] * a[1] - O[1] * a[0]];
      t(i[0], [a[0] * h / 2, a[1] * h / 2, a[2] * h / 2, m * B[0], m * B[1], m * B[2]]), t(i[1], [a[0] * h / 2, a[1] * h / 2, a[2] * h / 2, -m * B[0], -m * B[1], -m * B[2]]);
    }
  }
  if ($.size > 0) {
    S('TABLE:  "JOINT LOADS - FORCE"');
    for (const [t, s] of $) s.some((a) => Math.abs(a) > 1e-12) && S(`   Joint=${t + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${R(s[0])}   F2=${R(s[1])}   F3=${R(s[2])}   M1=${R(s[3])}   M2=${R(s[4])}   M3=${R(s[5])}`);
    b();
  }
  const v = I.frameLoads;
  if (v && v.size > 0) {
    S('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [t, s] of v) {
      const a = N[t];
      if (!a || a.length !== 2) continue;
      const i = l[a[0]], A = l[a[1]], w = Math.hypot(A[0] - i[0], A[1] - i[1], A[2] - i[2]);
      ["X", "Y", "Z"].forEach((H, h) => {
        Math.abs(s[h]) < 1e-12 || S(`   Frame=${t + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${H}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${R(w)}   FOverLA=${R(s[h])}   FOverLB=${R(s[h])}`);
      });
    }
    b();
  }
  const L = /* @__PURE__ */ new Map();
  for (let t = 0; t < N.length; t++) {
    const { E: s, nu: a, G: i, rho: A, key: w } = X(t);
    L.has(w) || L.set(w, { E: s, nu: a, G: i, rho: A });
  }
  if (ee.length > 0) {
    const t = I.solidIncompatible === false ? "No" : "Yes", s = /* @__PURE__ */ new Map();
    for (const a of ee) {
      const { E: i, nu: A, G: w, rho: H, key: h } = X(a);
      L.has(h) || L.set(h, { E: i, nu: A, G: w, rho: H }), s.has(h) || s.set(h, `SOL${s.size + 1}`);
    }
    S('TABLE:  "SOLID PROPERTY DEFINITIONS"');
    for (const [a, i] of s) S(`   SolidProp=${i}   Material=${a}   MatAngleA=0   MatAngleB=0   MatAngleC=0   InComp=${t}   Color=Yellow`);
    b(), S('TABLE:  "SOLID PROPERTY ASSIGNMENTS"');
    for (const a of ee) S(`   Solid=${a + 1}   SolidProp=${s.get(X(a).key)}`);
    b();
  }
  for (const [t, s] of ie) L.has(t) || L.set(t, s);
  S('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [t] of L) S(`   Material=${t}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  b(), S('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [t, s] of L) S(`   Material=${t}   UnitWeight=${R(s.rho * 9.81)}   UnitMass=${R(s.rho)}   E1=${R(s.E)}   G12=${R(s.G)}   U12=${R(s.nu)}   A1=9.9E-06`);
  b(), S('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [t] of L) S(`   Material=${t}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return b(), S('TABLE:  "PROGRAM CONTROL"'), S(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${Y.force}, ${Y.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), b(), S("END TABLE DATA"), S(""), Q.join(`\r
`);
}
function R(u) {
  return u === 0 || Math.abs(u) < 1e-15 ? "0" : Math.abs(u) >= 1e6 || Math.abs(u) < 1e-3 && Math.abs(u) > 0 ? u.toExponential(8) : parseFloat(u.toPrecision(10)).toString();
}
function Wt(u, l, N = 0.05) {
  const D = l.map(([I, Y]) => `${(+I).toFixed(4)} ${(+Y).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${u}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${N}  SPECTYPE "USER"  `, `  FUNCTION "${u}"  TIMEVAL "${D}"  `];
}
function zt(u) {
  const { name: l, func: N, modalCase: D = "Modal", sfX: I = 9.81, sfY: Y = 9.81 } = u, U = [`  LOADCASE "${l}"  TYPE  "Response Spectrum"  MODALCASE  "${D}"  `];
  return I && U.push(`  LOADCASE "${l}"  ACCEL  "U1"  FUNC  "${N}"  SF  ${I}  `), Y && U.push(`  LOADCASE "${l}"  ACCEL  "U2"  FUNC  "${N}"  SF  ${Y}  `), U;
}
function gt(u) {
  const { name: l = "Modal", ritz: N = false, nModes: D = 12 } = u;
  return N ? [`  LOADCASE "${l}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${l}"  MAXMODES  ${D} MINMODES  1 `, `  LOADCASE "${l}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${l}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${l}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${l}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${l}"  MAXMODES  ${D} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function Vt(u) {
  var _a;
  const l = (_a = u.e2kModel) == null ? void 0 : _a.rawSections;
  let N = l && l.size > 0 ? _t(l, u.e2kModel) : Jt(u);
  return u.seismicNEC && (N = jt(N, u.seismicNEC)), N;
}
function jt(u, l) {
  const N = u.includes(`\r
`) ? `\r
` : `
`, D = u.split(/\r?\n/), I = l.name ?? "NEC", Y = Wt(I, l.points, l.dampRatio ?? 0.05), U = l.modalCase ?? "Modal", Q = zt({ name: l.caseName ?? "Sismo NEC", func: I, modalCase: U, sfX: l.sfX, sfY: l.sfY });
  let S = [];
  const b = (Z) => D.some((X) => Z.test(X));
  if (l.modal) {
    const Z = new RegExp(`^\\s*LOADCASE\\s+"${U}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let X = D.length - 1; X >= 0; X--) Z.test(D[X]) && D.splice(X, 1);
    S = gt({ name: U, ritz: !!l.modal.ritz, nModes: l.modal.nModes });
  } else b(new RegExp(`LOADCASE\\s+"${U}"\\s+TYPE\\s+"Modal`)) || (S = gt({ name: U }));
  return Nt(D, "FUNCTIONS", Y), Nt(D, "LOAD CASES", [...S, ...Q]), D.join(N);
}
function Nt(u, l, N) {
  const D = u.findIndex((U) => U.trim() === `$ ${l}`);
  if (D >= 0) {
    u.splice(D + 1, 0, ...N);
    return;
  }
  const I = u.findIndex((U) => U.trim() === "END"), Y = I >= 0 ? I : u.length;
  u.splice(Y, 0, `$ ${l}`, ...N, "");
}
function _t(u, l) {
  const N = [], D = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  N.push("$ File exported from Hekatan Struct Lineal (round-trip)"), N.push("");
  for (const I of D) {
    const Y = u.get(I);
    if (!(!Y || Y.length === 0)) {
      N.push(`$ ${I}`);
      for (const U of Y) N.push(U);
      N.push("");
    }
  }
  for (const [I, Y] of u) if (!D.includes(I) && Y.length !== 0) {
    N.push(`$ ${I}`);
    for (const U of Y) N.push(U);
    N.push("");
  }
  return N.push("  END"), N.push("$ END OF MODEL FILE"), N.join(`\r
`);
}
function Jt(u) {
  var _a, _b, _c, _d, _e2, _f, _g;
  const { nodes: l, elements: N, nodeInputs: D, elementInputs: I, title: Y, units: U } = u, Q = u.shellLoads ?? I.shellSurfaceLoads;
  let S;
  Q instanceof Map && (S = /* @__PURE__ */ new Map(), Q.forEach((e, o) => {
    S.set(o, typeof e == "number" ? { value: e } : e);
  }));
  const b = u.shellAngles ?? I.shellAngles, Z = I.cargaDeArea, X = !!(S && S.size > 0), j = I.selfWeight, ee = I.frameLoads, te = (u.weightMode ?? "auto") === "auto" && j !== void 0, ie = /* @__PURE__ */ new Map(), ce = (e, o) => {
    const n = ie.get(e) ?? [0, 0, 0, 0, 0, 0];
    ie.set(e, n.map((c, E) => c + o[E]));
  }, ne = /* @__PURE__ */ new Set();
  if (te) {
    if (ee) for (const [e, o] of ee) {
      const n = N[e];
      if (!n || n.length !== 2) continue;
      const c = l[n[0]], E = l[n[1]], f = [E[0] - c[0], E[1] - c[1], E[2] - c[2]], p = Math.hypot(f[0], f[1], f[2]);
      if (p < 1e-9) continue;
      const M = [f[0] / p, f[1] / p, f[2] / p], d = p * p / 12, G = [M[1] * o[2] - M[2] * o[1], M[2] * o[0] - M[0] * o[2], M[0] * o[1] - M[1] * o[0]];
      ce(n[0], [o[0] * p / 2, o[1] * p / 2, o[2] * p / 2, d * G[0], d * G[1], d * G[2]]), ce(n[1], [o[0] * p / 2, o[1] * p / 2, o[2] * p / 2, -d * G[0], -d * G[1], -d * G[2]]), ne.add(e);
    }
    if (j && j > 0) {
      const o = I.endOffsets;
      N.forEach((n, c) => {
        var _a2, _b2, _c2;
        const E = ((_a2 = I.densities) == null ? void 0 : _a2.get(c)) ?? 0;
        if (E) {
          if (n.length === 2) {
            const f = ((_b2 = I.areas) == null ? void 0 : _b2.get(c)) ?? 0, p = l[n[0]], M = l[n[1]], d = [M[0] - p[0], M[1] - p[1], M[2] - p[2]];
            let G = Math.hypot(d[0], d[1], d[2]);
            const g = o == null ? void 0 : o.get(c);
            if (g) {
              const C = Math.hypot(d[0], d[1]);
              C > 1e-9 && Math.abs(Math.atan2(Math.abs(d[2]), C)) * 180 / Math.PI < 20 && (G = Math.max(G - g[0] - g[1], 0));
            }
            const P = f * G * E * 9.80665 * j;
            ce(n[0], [0, 0, -P / 2, 0, 0, 0]), ce(n[1], [0, 0, -P / 2, 0, 0, 0]);
          } else if (n.length === 4) {
            const f = ((_c2 = I.thicknesses) == null ? void 0 : _c2.get(c)) ?? 0, p = n.map((C) => l[C]);
            let M = 0, d = 0, G = 0;
            for (let C = 0; C < 4; C++) {
              const x = p[C], z = p[(C + 1) % 4];
              M += x[1] * z[2] - x[2] * z[1], d += x[2] * z[0] - x[0] * z[2], G += x[0] * z[1] - x[1] * z[0];
            }
            const g = Math.hypot(M, d, G) / 2, P = f * g * E * 9.80665 * j;
            for (const C of n) ce(C, [0, 0, -P / 4, 0, 0, 0]);
          }
        }
      });
    }
  }
  const se = (e, o) => {
    const n = ie.get(e);
    return [o[0] - ((n == null ? void 0 : n[0]) ?? 0), o[1] - ((n == null ? void 0 : n[1]) ?? 0), o[2] - (X ? (Z == null ? void 0 : Z.get(e)) ?? 0 : 0) - ((n == null ? void 0 : n[2]) ?? 0)];
  }, re = (e, o) => {
    const n = ie.get(e);
    return [(o[3] ?? 0) - ((n == null ? void 0 : n[3]) ?? 0), (o[4] ?? 0) - ((n == null ? void 0 : n[4]) ?? 0), (o[5] ?? 0) - ((n == null ? void 0 : n[5]) ?? 0)];
  }, Se = "N", Te = "MM", r = [], T = (e) => Math.round(e * 1e4) / 1e4, $ = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), v = 1e3, L = 1e3, t = (e) => e * L, s = (e) => e * v, a = (e) => e * v, i = (e) => e * v * L, A = (e) => e * v / L ** 2, w = (e) => e * v / L ** 3, H = /* @__PURE__ */ new Date(), h = `${H.getMonth() + 1}/${H.getDate()}/${H.getFullYear()}  ${H.getHours()}:${String(H.getMinutes()).padStart(2, "0")}:${String(H.getSeconds()).padStart(2, "0")}`;
  r.push(`$ File   "Hekatan_export.e2k"  saved ${h} in ETABS 22.6.0`), r.push(""), r.push("$ PROGRAM INFORMATION"), r.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), r.push(""), r.push("$ CONTROLS"), r.push(`  UNITS  "${Se}"  "${Te}"  "C"  `), r.push('  TITLE1  "Hekatan Struct Lineal export"  '), Y && r.push(`  TITLE2  "${Y}"  `), r.push("  PREFERENCE  MERGETOL 0.001"), r.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), r.push("");
  const O = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set();
  l.forEach((e) => {
    O.add(T(e[0])), m.add(T(e[1]));
  });
  const B = [...O].sort((e, o) => e - o), F = [...m].sort((e, o) => e - o);
  r.push("$ GRIDS"), r.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), B.forEach((e, o) => {
    const n = o < 26 ? String.fromCharCode(65 + o) : String.fromCharCode(65 + o % 26).repeat(Math.floor(o / 26) + 1);
    r.push(`  GRID "G1"  LABEL "${n}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), F.forEach((e, o) => {
    r.push(`  GRID "G1"  LABEL "${o + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), r.push("");
  const _ = 3, V = 0.5, J = /* @__PURE__ */ new Map();
  l.forEach((e) => {
    const o = T(e[2]);
    J.set(o, (J.get(o) ?? 0) + 1);
  });
  const q = /* @__PURE__ */ new Set();
  l.forEach((e) => q.add(T(e[2])));
  const K = [...q].sort((e, o) => e - o);
  let k = K.filter((e) => (J.get(e) ?? 0) >= _);
  if (k.length > 1) {
    const e = [k[0]];
    for (const o of k.slice(1)) o - e[e.length - 1] < V ? e[e.length - 1] = o : e.push(o);
    k = e;
  }
  k.length || (k = [K[0], K[K.length - 1]]), k[0] !== K[0] && k.unshift(K[0]), k[k.length - 1] !== K[K.length - 1] && k.push(K[K.length - 1]);
  const W = [], Ee = /* @__PURE__ */ new Map();
  W.push("Base"), Ee.set(k[0], "Base");
  for (let e = 1; e < k.length; e++) {
    const o = `Level_${e}`;
    W.push(o), Ee.set(k[e], o);
  }
  const oe = (e) => {
    const o = T(e);
    if (Ee.has(o)) return { story: Ee.get(o), dz: 0 };
    for (let c = 0; c < k.length; c++) if (k[c] >= o) return { story: Ee.get(k[c]), dz: T(k[c] - o) };
    const n = k[k.length - 1];
    return { story: Ee.get(n), dz: T(n - o) };
  };
  r.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = k.length - 1; e >= 1; e--) r.push(`  STORY "${W[e]}"  HEIGHT ${T(t(k[e] - k[e - 1]))} MASTERSTORY "Yes"  `);
  k.length > 0 && r.push(`  STORY "Base"  ELEV ${k[0]} `), r.push(""), N.some((e) => e.length === 4), r.push("$ DIAPHRAGM NAMES"), r.push('  DIAPHRAGM "D1"    TYPE RIGID'), r.push(""), r.push("$ MATERIAL PROPERTIES");
  const Ae = 980665e-8, de = (e) => {
    var _a2;
    const o = (_a2 = I.densities) == null ? void 0 : _a2.get(e);
    if (o !== void 0) return o > 100 ? o * Ae : o * 9.80665;
  }, $e = (e) => {
    var _a2;
    const o = ((_a2 = I.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, n = de(e);
    return `${o}|${n === void 0 ? "-" : n.toFixed(4)}`;
  }, tt = /* @__PURE__ */ new Set();
  (_a = I.elasticities) == null ? void 0 : _a.forEach((e, o) => tt.add($e(o)));
  const Oe = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map();
  let Dt = 0, Ct = 0;
  for (const e of tt) {
    const o = parseFloat(e.split("|")[0]), n = e.split("|")[1], c = o >= 1e8, E = c ? `Steel_${++Dt}` : `Conc_${++Ct}`;
    Oe.set(e, E), ye.set(e, c);
    const f = n !== "-" ? parseFloat(n) : c ? 76.97 : 24, p = A(o), M = w(f), d = (() => {
      const P = u.elementInputs.poissonsRatios;
      if (P) {
        for (const [C, x] of P) if ($e(C) === e) return x;
      }
    })(), G = d !== void 0 ? d : c ? 0.3 : 0.2, g = c ? 117e-7 : 1e-5;
    if (c) {
      r.push(`  MATERIAL  "${E}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${$(M)}`), r.push(`  MATERIAL  "${E}"    SYMTYPE "Isotropic"  E ${T(p)}  U ${G}  A ${g}`);
      const P = 345e3, C = 45e4;
      r.push(`  MATERIAL  "${E}"  FY ${T(A(P))}  FU ${T(A(C))}  FYE ${T(A(P * 1.1))}  FUE ${T(A(C * 1.1))}`);
    } else r.push(`  MATERIAL  "${E}"    TYPE "Concrete"    WEIGHTPERVOLUME ${$(M)}`), r.push(`  MATERIAL  "${E}"    SYMTYPE "Isotropic"  E ${T(p)}  U ${G}  A ${g}`), r.push(`  MATERIAL  "${E}"    FC ${T(A(24e3))}`);
  }
  const st = /* @__PURE__ */ new Map();
  {
    const e = /* @__PURE__ */ new Map();
    (_b = I.sectionShapes) == null ? void 0 : _b.forEach((n, c) => {
      var _a2;
      if ((n == null ? void 0 : n.type) !== "CFT" || !(n.fillE > 0)) return;
      const E = ((_a2 = I.elasticities) == null ? void 0 : _a2.get(c)) ?? 0;
      if (!(E > 0)) return;
      const f = n.fillE / E, p = de(c) ?? 76.97, M = `${n.fillE}|${(f * p).toFixed(4)}`;
      let d = e.get(M);
      d || (d = `ConcFill_${e.size + 1}`, e.set(M, d), r.push(`  MATERIAL  "${d}"    TYPE "Concrete"    WEIGHTPERVOLUME ${$(w(f * p))}`), r.push(`  MATERIAL  "${d}"    SYMTYPE "Isotropic"  E ${T(A(n.fillE))}  U 0.2  A 1.0e-5`), r.push(`  MATERIAL  "${d}"    FC ${T(A(24e3))}`)), st.set(c, d);
    });
  }
  r.push(""), r.push("$ FRAME SECTIONS");
  const be = /* @__PURE__ */ new Set(), We = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), ue = 0.05;
  N.forEach((e, o) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j;
    if (e.length !== 2) return;
    const n = (_a2 = I.sectionShapes) == null ? void 0 : _a2.get(o), c = ((_b2 = I.elasticities) == null ? void 0 : _b2.get(o)) ?? 0, E = Oe.get($e(o)) || "Conc_1", f = ye.get($e(o)) ?? c >= 1e8, p = ((_c2 = I.areas) == null ? void 0 : _c2.get(o)) ?? 0, M = ((_d2 = I.momentsOfInertiaZ) == null ? void 0 : _d2.get(o)) ?? 0, d = ((_e3 = I.momentsOfInertiaY) == null ? void 0 : _e3.get(o)) ?? 0, G = ((_f2 = I.torsionalConstants) == null ? void 0 : _f2.get(o)) ?? 0;
    let g = (n == null ? void 0 : n.type) || "rect", P = (n == null ? void 0 : n.h) ?? 0, C = (n == null ? void 0 : n.b) ?? 0, x = (n == null ? void 0 : n.d) ?? 0;
    const z = (n == null ? void 0 : n.tf) ?? 0, ae = (n == null ? void 0 : n.tw) ?? 0;
    if (!n && P <= 0 && C <= 0 && x <= 0 && p > 0 && M > 0 && d > 0) {
      const pe = (_g2 = I.cantos) == null ? void 0 : _g2.get(o), Fe = (_h = I.anchos) == null ? void 0 : _h.get(o);
      P = pe && pe > 0 ? pe : Math.sqrt(12 * M / p), C = Fe && Fe > 0 ? Fe : p / P, (!isFinite(P) || P < ue) && (P = ue), (!isFinite(C) || C < ue) && (C = ue), g = "general";
    } else P <= 0 && C <= 0 && x <= 0 && p > 0 && (M > 0 ? (P = Math.sqrt(12 * M / p), C = p / P) : P = C = Math.sqrt(p), (!isFinite(P) || P < ue) && (P = ue), (!isFinite(C) || C < ue) && (C = ue), g = "rect");
    P <= 0 && C <= 0 && x <= 0 && (P = 0.3, C = 0.3, g = "rect");
    const He = (n == null ? void 0 : n.name) ? `NAME_${n.name}` : `${g}_${T(P)}_${T(C)}_${T(x)}_${T(z)}_${T(ae)}_${E}`;
    (n == null ? void 0 : n.name) && !we.has(He) && we.set(He, n.name);
    let fe = we.get(He);
    if (!fe) {
      const pe = f ? "S" : "C";
      g === "general" ? fe = `${pe}_G${be.size + 1}` : g === "rect" ? fe = `${pe}_R${Math.round(C * 100)}x${Math.round(P * 100)}` : g === "circ" ? fe = `${pe}_C_D${Math.round(x * 100)}` : g === "I" ? fe = `${pe}_I${Math.round(P * 100)}x${Math.round(C * 100)}` : g === "HSS" ? fe = `${pe}_HSS${Math.round(C * 100)}x${Math.round(P * 100)}x${Math.round(ae * 1e3)}` : fe = `${pe}_Sec${be.size + 1}`, we.set(He, fe);
    }
    if (We.set(o, fe), be.has(fe)) return;
    be.add(fe);
    const ve = st.get(o);
    if (g === "CFT" && ve && x > 0 && ae > 0 && !(P > 0 && C > 0)) {
      r.push(`  FRAMESECTION  "${fe}"  MATERIAL "${E}"  SHAPE "Filled Steel Pipe"  D ${T(t(x))} T ${T(t(ae))} FILLMATERIAL "${ve}"`);
      return;
    }
    if (g === "CFT" && ve && P > 0 && C > 0 && ae > 0) {
      r.push(`  FRAMESECTION  "${fe}"  MATERIAL "${E}"  SHAPE "Filled Steel Tube"  D ${T(t(P))} B ${T(t(C))} TF ${T(t(ae))} TW ${T(t(ae))} FILLMATERIAL "${ve}"`);
      return;
    }
    const xt = p > 0 && M > 0 && d > 0;
    let he;
    g === "general" || xt ? he = "General" : g === "I" ? he = "Steel I/Wide Flange" : g === "HSS" ? he = "Steel Tube" : g === "CFT" ? he = "Filled Steel Tube" : g === "pipe" ? he = "Steel Pipe" : g === "L" ? he = "Steel Angle" : g === "C" ? he = "Steel Channel" : g === "2C" ? he = "Steel Double Channel" : g === "circ" ? he = "Concrete Circle" : he = "Concrete Rectangular";
    let me = `  FRAMESECTION  "${fe}"  MATERIAL "${E}"  SHAPE "${he}"`;
    if (he === "General") {
      const pe = ((_i = I.shearAreasZ) == null ? void 0 : _i.get(o)) || p * 5 / 6, Fe = ((_j = I.shearAreasY) == null ? void 0 : _j.get(o)) || p * 5 / 6;
      me += `  D ${T(t(P))} B ${T(t(C))} AREA ${$(p * 1e6)} AS2 ${$(pe * 1e6)} AS3 ${$(Fe * 1e6)} I33 ${$(M * 1e12)} I22 ${$(d * 1e12)} TORSION ${$((G || M + d) * 1e12)} S33POS ${$(2 * M / P * 1e9)} S33NEG ${$(2 * M / P * 1e9)} S22POS ${$(2 * d / C * 1e9)} S22NEG ${$(2 * d / C * 1e9)} Z33 ${$(2 * M / P * 1e9)} Z22 ${$(2 * d / C * 1e9)} R33 ${$(Math.sqrt(M / p) * 1e3)} R22 ${$(Math.sqrt(d / p) * 1e3)} `, r.push(me);
      return;
    }
    P && (me += `  D ${T(t(P))}`), C && (me += `  B ${T(t(C))}`), x && !P && (me += `  D ${T(t(x))}`), z && (me += `  TF ${T(t(z))}`), ae && (me += `  TW ${T(t(ae))}`), r.push(me);
  }), r.push("");
  const Be = /* @__PURE__ */ new Map();
  let Pt = 0;
  l.forEach((e) => {
    const { dz: o } = oe(e[2]), n = `${T(e[0])},${T(e[1])},${o}`;
    Be.has(n) || Be.set(n, `${++Pt}`);
  }), r.push("$ POINT COORDINATES");
  for (const [e, o] of Be) {
    const [n, c, E] = e.split(",").map(Number);
    r.push(E ? `  POINT "${o}"  ${T(t(n))} ${T(t(c))} ${T(t(E))} ` : `  POINT "${o}"  ${T(t(n))} ${T(t(c))} `);
  }
  r.push("");
  const Me = (e) => {
    const o = l[e], { story: n, dz: c } = oe(o[2]), E = `${T(o[0])},${T(o[1])},${c}`;
    return { pt: Be.get(E) || "1", story: n };
  }, ot = (e) => {
    var _a2, _b2, _c2, _d2, _e3, _f2;
    const o = [], n = (_a2 = u.propertyModifiers) == null ? void 0 : _a2.get(e);
    n && n.some((g) => Math.abs(g - 1) > 1e-9) && o.push(`PROPMODIFIERS "${n.map((g) => T(g)).join(" ")}"`);
    const c = (_b2 = I.localAngles) == null ? void 0 : _b2.get(e);
    c !== void 0 && isFinite(c) && Math.abs(c) > 1e-9 && o.push(`ANG ${T(c)}`);
    const E = (_c2 = I.momentReleases) == null ? void 0 : _c2.get(e);
    if (E && E.some((g) => g)) {
      const g = [];
      E.length === 12 ? (E[0] && g.push("PI"), E[1] && g.push("V2I"), E[2] && g.push("V3I"), E[3] && g.push("TI"), E[4] && g.push("M2I"), E[5] && g.push("M3I"), E[6] && g.push("PJ"), E[7] && g.push("V2J"), E[8] && g.push("V3J"), E[9] && g.push("TJ"), E[10] && g.push("M2J"), E[11] && g.push("M3J")) : E.length === 6 && (E[0] && g.push("TI"), E[1] && g.push("M2I"), E[2] && g.push("M3I"), E[3] && g.push("TJ"), E[4] && g.push("M2J"), E[5] && g.push("M3J")), g.length > 0 && o.push(`RELEASE "${g.join(" ")}"`);
    }
    const f = (_d2 = I.insertionPoints) == null ? void 0 : _d2.get(e);
    f && (Math.abs(f[0]) > 1e-9 || Math.abs(f[1]) > 1e-9) && o.push(`LATEROFFSET ${T(t(f[0]))} TRANSOFFSET ${T(t(f[1]))}`);
    const p = (_e3 = I.rigidOffsets) == null ? void 0 : _e3.get(e), M = (_f2 = I.endOffsets) == null ? void 0 : _f2.get(e), d = M ? [M[0], M[1]] : p, G = M && M.length > 2 ? M[2] : 0;
    return d && (Math.abs(d[0]) > 1e-9 || Math.abs(d[1]) > 1e-9) && o.push(`LENGTHOFFI ${T(t(d[0]))} LENGTHOFFJ ${T(t(d[1]))} RIGIDZONE ${T(G)}`), o.length > 0 ? ` ${o.join(" ")} ` : "";
  }, ze = [], nt = /* @__PURE__ */ new Set(), Ye = /* @__PURE__ */ new Map();
  N.forEach((e, o) => {
    if (e.length !== 2) return;
    const n = Ot(l, e);
    if (n === "BEAM") return;
    const c = l[e[0]][2] <= l[e[1]][2] ? e[0] : e[1], E = l[e[0]][2] <= l[e[1]][2] ? e[1] : e[0];
    if (Math.abs(l[c][0] - l[E][0]) > 1e-6 || Math.abs(l[c][1] - l[E][1]) > 1e-6) return;
    const f = Me(c), p = We.get(o) || `Sec_${o}`, M = `${f.pt}_${p}_${n}`;
    Ye.has(M) || Ye.set(M, []), Ye.get(M).push({ i: o, bot: c, top: E, zBot: T(l[c][2]), zTop: T(l[E][2]), planPt: f.pt, secName: p, type: n });
  }), Ye.forEach((e, o) => {
    e.sort((c, E) => c.zBot - E.zBot);
    let n = 0;
    for (let c = 1; c <= e.length; c++) if (c === e.length || Math.abs(e[c].zBot - e[c - 1].zTop) > 1e-6) {
      const f = e.slice(n, c);
      f.length >= 1 && (ze.push({ elemIndices: f.map((p) => p.i), planPt: f[0].planPt, bottomNodeIdx: f[0].bot, topNodeIdx: f[f.length - 1].top, secName: f[0].secName, type: f[0].type, nSegments: f.length }), f.forEach((p) => nt.add(p.i))), n = c;
    }
  }), r.push("$ LINE CONNECTIVITIES");
  const je = [], Ge = (e) => W.indexOf(e), at = /* @__PURE__ */ new Map(), it = (e, o, n, c, E, f, p, M) => {
    const d = Me(c), G = Me(n);
    M !== void 0 && at.set(M, { name: e, story: d.story });
    const g = Ge(d.story) - Ge(G.story);
    g <= 0 ? r.push(`  LINE  "${e}"  BEAM  "${G.pt}"  "${d.pt}"  0`) : r.push(`  LINE  "${e}"  ${o}  "${G.pt}"  "${d.pt}"  ${g}`), je.push(`  LINEASSIGN  "${e}"  "${d.story}"  SECTION "${E}" ${f} MINNUMSTA ${p} AUTOMESH "YES"  MESHATINTERSECTIONS "${I.meshAtIntersections === false ? "NO" : "YES"}"  `);
  }, ct = /* @__PURE__ */ new Map();
  ze.forEach((e, o) => {
    const n = ot(e.elemIndices[0]), c = [];
    let E = [];
    e.elemIndices.forEach((f, p) => {
      E.push(f);
      const [M, d] = N[f], G = l[M][2] >= l[d][2] ? M : d;
      (oe(l[G][2]).dz === 0 || p === e.elemIndices.length - 1) && (c.push(E), E = []);
    }), c.forEach((f) => {
      const [p, M] = N[f[0]], d = l[p][2] <= l[M][2] ? p : M, [G, g] = N[f[f.length - 1]], P = l[G][2] >= l[g][2] ? G : g;
      Ge(Me(P).story) - Ge(Me(d).story);
      let C = `C${o + 1}`;
      for (let x = 1; ; x++) {
        const z = r.length;
        it(C, e.type, d, P, e.secName, n, f.length);
        const ae = r[z], et = ct.get(C);
        if (et === void 0) {
          ct.set(C, ae);
          break;
        }
        if (r.splice(z, r.length - z), et === ae) break;
        je.pop(), C = `C${o + 1}_${x}`;
      }
    });
  }), N.forEach((e, o) => {
    if (e.length !== 2 || nt.has(o)) return;
    const n = Ot(l, e), c = We.get(o) || `Sec_${o}`, E = ot(o), f = l[e[0]][2] <= l[e[1]][2] ? e[0] : e[1], p = l[e[0]][2] <= l[e[1]][2] ? e[1] : e[0];
    it(`E${o + 1}`, n === "BEAM" ? "BRACE" : n, f, p, c, E, 3, o);
  }), r.push("");
  const Le = u.weightMode ?? "auto", Re = /* @__PURE__ */ new Set();
  r.push("$ POINT ASSIGNS"), (_c = D.supports) == null ? void 0 : _c.forEach((e, o) => {
    const n = [];
    if (e[0] && n.push("UX"), e[1] && n.push("UY"), e[2] && n.push("UZ"), e[3] && n.push("RX"), e[4] && n.push("RY"), e[5] && n.push("RZ"), n.length > 0) {
      const c = Me(o), E = c.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      r.push(`  POINTASSIGN  "${c.pt}"  "${c.story}"  RESTRAINT "${n.join(" ")}" ${E} `), Re.add(`${c.pt}@${c.story}`);
    }
  });
  const rt = (u.diaphragm ?? "auto") !== "none";
  rt && ze.forEach((e) => {
    for (const o of e.elemIndices) {
      const [n, c] = N[o], E = l[n][2] >= l[c][2] ? n : c, f = Me(E), p = `${f.pt}@${f.story}`;
      !Re.has(p) && f.story !== "Base" && (r.push(`  POINTASSIGN  "${f.pt}"  "${f.story}"  DIAPH "D1"  `), Re.add(p));
    }
  }), Le === "manual" && D.loads && D.loads.forEach((e, o) => {
    const [n, c, E] = se(o, e);
    if (Math.abs(n) < 1e-10 && Math.abs(c) < 1e-10 && Math.abs(E) < 1e-10) return;
    const f = Me(o), p = `${f.pt}@${f.story}`;
    Re.has(p) || (r.push(`  POINTASSIGN  "${f.pt}"  "${f.story}"  DIAPH "DISCONNECTED"  `), Re.add(p));
  }), r.push(""), r.push("$ LINE ASSIGNS"), je.forEach((e) => r.push(e)), r.push("");
  const le = [], Et = I.areaObjects, lt = /* @__PURE__ */ new Set(), ft = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map();
  Et == null ? void 0 : Et.forEach((e) => e.cells.forEach((o) => lt.add(o))), N.forEach((e, o) => {
    if (e.length === 4 || e.length === 3) {
      const n = l[e[0]], c = l[e[1]], E = l[e[2]], f = [c[0] - n[0], c[1] - n[1], c[2] - n[2]], p = [E[0] - n[0], E[1] - n[1], E[2] - n[2]], M = f[1] * p[2] - f[2] * p[1], d = f[2] * p[0] - f[0] * p[2], G = f[0] * p[1] - f[1] * p[0], g = Math.sqrt(M * M + d * d + G * G), P = g > 1e-10 && Math.abs(G) / g < 0.5;
      le.push({ idx: o, el: e, isWall: P }), lt.has(o) && le.pop();
    }
  });
  const Ie = (() => {
    for (const [e, o] of ye) if (!o) return Oe.get(e);
    return Oe.values().next().value || "Conc_1";
  })();
  Et == null ? void 0 : Et.forEach((e, o) => {
    le.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && ft.set(e.cells[0], e.q), e.ang !== void 0 && St.set(e.cells[0], e.ang);
  });
  const De = "DECK";
  let _e = false;
  const Je = [], At = (e) => {
    const o = u.elementInputs.plateFormulations, n = le.find((E) => E.isWall === e), c = o && n ? o.get(n.idx) : void 0;
    return c === 2 ? "Membrane" : c === 1 ? "ShellThin" : "ShellThick";
  }, ht = (e, o) => {
    const n = u.elementInputs.thicknesses, c = le.find((E) => E.isWall === e);
    return (c ? n == null ? void 0 : n.get(c.idx) : void 0) ?? (n == null ? void 0 : n.values().next().value) ?? o;
  }, pt = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], ke = (e) => {
    var _a2;
    const n = (_a2 = I.shellModifiers) == null ? void 0 : _a2.get(e);
    if (n && n.length >= 8) return n.slice(0, 8);
    const c = I.membraneModifiers, E = I.bendingModifiers, f = c == null ? void 0 : c.get(e), p = E == null ? void 0 : E.get(e);
    if (f === void 0 && p === void 0) return null;
    const M = f ?? 1, d = p ?? 1;
    return [M, M, M, d, d, d, d, d];
  }, Tt = (e, o) => {
    const n = le.filter((p) => p.isWall === o), c = /* @__PURE__ */ new Map();
    for (const p of n) {
      const M = ke(p.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      c.set(M.map((d) => T(d)).join(","), M);
    }
    if (c.size === 0) return "";
    c.size > 1 && console.warn(`[e2k] "${e}": ${c.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const E = c.values().next().value, f = pt.map((p, M) => Math.abs(E[M] - 1) > 1e-9 ? `${p} ${T(E[M])}` : "").filter(Boolean);
    return f.length ? `  SHELLPROP  "${e}"  ${f.join(" ")} ` : "";
  }, Mt = u.elementInputs.thicknesses, It = u.elementInputs.plateFormulations, Ce = (e) => {
    const o = Mt == null ? void 0 : Mt.get(e.idx), n = It == null ? void 0 : It.get(e.idx), c = ke(e.idx);
    return `${e.isWall ? "W" : "F"}|${o ?? "-"}|${n ?? "-"}|${c ? c.map((E) => T(E)).join(",") : "-"}|${$e(e.idx)}`;
  }, Ke = (e) => {
    const o = ke(e);
    return o ? Math.abs(o[3]) < 1e-9 && Math.abs(o[4]) < 1e-9 : false;
  }, Pe = /* @__PURE__ */ new Map();
  let Ft = 0, yt = 0, bt = 0;
  for (const e of le) {
    const o = Ce(e);
    if (Pe.has(o)) continue;
    const n = e.isWall, c = !n && Ke(e.idx), E = n ? ++yt : c ? ++bt : ++Ft, f = $e(e.idx);
    Pe.set(o, { nombre: (n ? "Muro" : c ? De : "Losa") + (E === 1 ? "" : String(E)), isWall: n, mem: c, t: Mt == null ? void 0 : Mt.get(e.idx), pf: It == null ? void 0 : It.get(e.idx), mat: Oe.get(f) ?? Ie, acero: ye.get(f) ?? false });
  }
  const Ue = (e) => {
    var _a2;
    return ((_a2 = Pe.get(Ce(e))) == null ? void 0 : _a2.nombre) ?? (e.isWall ? "Muro" : "Losa");
  }, $t = (e) => e === 2 ? "Membrane" : e === 1 ? "ShellThin" : "ShellThick", wt = (e, o) => {
    const n = le.find((f) => Ce(f) === o), c = n ? ke(n.idx) ?? null : null;
    if (!c) return "";
    const E = pt.map((f, p) => Math.abs(c[p] - 1) > 1e-9 ? `${f} ${T(c[p])}` : "").filter(Boolean);
    return E.length ? `  SHELLPROP  "${e}"  ${E.join(" ")} ` : "";
  }, xe = le.find((e) => !e.isWall), ut = le.find((e) => e.isWall), Ze = /* @__PURE__ */ new Set();
  xe && Ze.add(Ce(xe)), ut && Ze.add(Ce(ut));
  const mt = [...Pe.entries()].filter(([e]) => !Ze.has(e));
  if (le.some((e) => !e.isWall)) {
    _e = !!xe && Ke(xe.idx);
    const e = ht(false, 0.15);
    if (_e) {
      r.push("$ DECK PROPERTIES");
      const n = (E) => $(t(E)), c = [...Pe.values()].find((E) => E.nombre === De);
      (c == null ? void 0 : c.acero) ? r.push(`  SHELLPROP  "${De}"  PROPTYPE  "Slab"  MATERIAL "${c.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${T(t(e))} `) : r.push(`  SHELLPROP  "${De}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Ie}"  DECKMATERIAL "${Ie}"  DECKSLABDEPTH ${n(e * 65 / 120)} DECKRIBDEPTH ${n(e * 55 / 120)} DECKRIBWIDTHTOP ${n(e * 150 / 120)} DECKRIBWIDTHBOTTOM ${n(e * 100 / 120)} DECKRIBSPACING ${n(e * 200 / 120)} DECKSHEARTHICKNESS ${n(e * 0.76 / 120)} DECKUNITWEIGHT ${$(s(0.11012))} SHEARSTUDDIAM ${n(e * 19 / 120)} SHEARSTUDHEIGHT ${n(e * 100 / 120)} SHEARSTUDFU 400 `);
    } else r.push("$ SLAB PROPERTIES"), r.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Ie}"  MODELINGTYPE "${At(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${T(t(e))} `);
    const o = Tt(_e ? De : "Losa", false);
    o && r.push(o), r.push("");
  }
  if (le.some((e) => e.isWall)) {
    r.push("$ WALL PROPERTIES");
    const e = ht(true, 0.2), o = At(true);
    r.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Ie}"  MODELINGTYPE "${o}"  WALLTHICKNESS ${T(t(e))} `);
    const n = Tt("Muro", true);
    n && r.push(n), r.push("");
  }
  if (mt.length) {
    r.push("$ OTRAS SECCIONES DE CASCARA");
    for (const [e, o] of mt) {
      const n = o.t ?? (o.isWall ? 0.2 : 0.15), c = (f) => $(t(f));
      r.push(o.isWall ? `  SHELLPROP  "${o.nombre}"  PROPTYPE  "Wall"  MATERIAL "${o.mat ?? Ie}"  MODELINGTYPE "${$t(o.pf)}"  WALLTHICKNESS ${T(t(n))} ` : o.mem && o.acero ? `  SHELLPROP  "${o.nombre}"  PROPTYPE  "Slab"  MATERIAL "${o.mat}"  MODELINGTYPE "Membrane"  SLABTYPE "Slab"  SLABTHICKNESS ${T(t(n))} ` : o.mem ? `  SHELLPROP  "${o.nombre}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Ie}"  DECKMATERIAL "${Ie}"  DECKSLABDEPTH ${c(n * 65 / 120)} DECKRIBDEPTH ${c(n * 55 / 120)} DECKRIBWIDTHTOP ${c(n * 150 / 120)} DECKRIBWIDTHBOTTOM ${c(n * 100 / 120)} DECKRIBSPACING ${c(n * 200 / 120)} DECKSHEARTHICKNESS ${c(n * 0.76 / 120)} DECKUNITWEIGHT ${$(s(0.11012))} SHEARSTUDDIAM ${c(n * 19 / 120)} SHEARSTUDHEIGHT ${c(n * 100 / 120)} SHEARSTUDFU 400 ` : `  SHELLPROP  "${o.nombre}"  PROPTYPE  "Slab"  MATERIAL "${Ie}"  MODELINGTYPE "${$t(o.pf)}"  SLABTYPE "Slab"  SLABTHICKNESS ${T(t(n))} `);
      const E = wt(o.nombre, e);
      E && r.push(E);
    }
    r.push("");
  }
  if (le.length > 0) {
    r.push("$ AREA CONNECTIVITIES");
    const e = [];
    le.forEach((o, n) => {
      const { el: c, isWall: E } = o, f = E ? `W${n + 1}` : `F${n + 1}`, p = E ? "PANEL" : "FLOOR", M = c.map((d) => Me(d));
      if (E) {
        const d = (x) => W.indexOf(x);
        if (new Set(M.map((x) => x.pt)).size === 4) {
          const x = Math.max(...M.map((ae) => d(ae.story))), z = M.map((ae) => x - d(ae.story));
          r.push(`  AREA "${f}"  ${p}  4  "${M[0].pt}"  "${M[1].pt}"  "${M[2].pt}"  "${M[3].pt}"  ${z.join("  ")}  `), e.push(`  AREAASSIGN  "${f}"  "${W[x]}"  SECTION "${Ue(o)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const g = l[c[0]][2] <= l[c[2]][2] ? 0 : 2, P = l[c[1]][2] <= l[c[3]][2] ? 1 : 3;
        r.push(`  AREA "${f}"  ${p}  4  "${M[g].pt}"  "${M[P].pt}"  "${M[P].pt}"  "${M[g].pt}"  1  1  0  0  `);
        const C = M[g === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${f}"  "${C}"  SECTION "${Ue(o)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        const d = M.length, G = (z) => W.indexOf(z), g = Math.max(...M.map((z) => G(z.story))), P = M.map((z) => g - G(z.story)), C = W[g] ?? M[0].story;
        r.push(`  AREA "${f}"  ${p}  ${d}  ` + M.map((z) => `"${z.pt}"`).join("  ") + "  " + P.join("  ") + "  ");
        const x = St.get(o.idx) ?? (b == null ? void 0 : b.get(o.idx));
        e.push(Ke(o.idx) ? `  AREAASSIGN  "${f}"  "${C}"  SECTION "${Ue(o)}"  ANG ${T(x ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${f}"  "${C}"  SECTION "${Ue(o)}" ${rt ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Je.push({ name: f, story: C, idx: o.idx });
      }
    }), r.push(""), r.push("$ AREA ASSIGNS"), e.forEach((o) => r.push(o)), r.push("");
  }
  const Bt = Le === "manual" ? 0 : j ?? 1;
  r.push("$ LOAD PATTERNS");
  const ge = ((_d = u.loadPatterns) == null ? void 0 : _d.length) ? u.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: Bt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of ge) {
    let o;
    e.type === "Dead" ? o = Le === "manual" ? 0 : e.selfWeightMultiplier ?? j ?? 1 : (o = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), r.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${o}`);
  }
  r.push("");
  const Ne = u.loadPatternDestino && ge.some((e) => e.name === u.loadPatternDestino) ? u.loadPatternDestino : ((_e2 = ge.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? ge[0].name, Xe = [], Ve = /* @__PURE__ */ new Map(), dt = (e, o) => {
    const n = Ve.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let c = 0; c < 6; c++) n[c] += o[c] ?? 0;
    Ve.set(e, n);
  }, Yt = Ne === (((_f = ge.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? ge[0].name), Gt = Le === "manual" || !Yt || te;
  if (D.loads && D.loads.size > 0 && D.loads.forEach((e, o) => {
    const [n, c, E] = se(o, e), [f, p, M] = re(o, e);
    dt(o, [n, c, Gt ? E : 0, f, p, M]);
  }), D.moments && D.moments.size > 0 && D.moments.forEach((e, o) => {
    dt(o, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), Ve.forEach((e, o) => {
    if (e.every((c) => Math.abs(c) <= 1e-10)) return;
    const n = Me(o);
    Xe.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "FORCE"  LC "${Ne}"  FX ${$(a(e[0]))}  FY ${$(a(e[1]))}  FZ ${$(a(e[2]))}  MX ${$(i(e[3]))}  MY ${$(i(e[4]))}  MZ ${$(i(e[5]))}`);
  }), Xe.length > 0 && (r.push("$ POINT OBJECT LOADS"), Xe.forEach((e) => r.push(e)), r.push("")), te && ne.size > 0) {
    const e = [];
    for (const o of ne) {
      const n = ee.get(o), c = at.get(o);
      if (!c) continue;
      const E = (f) => $(s(f) / L);
      Math.abs(n[2]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "${n[2] < 0 ? "GRAV" : "Z"}"  LC "${Ne}"  FVAL ${E(Math.abs(n[2]))}`), Math.abs(n[0]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "X"  LC "${Ne}"  FVAL ${E(n[0])}`), Math.abs(n[1]) > 1e-12 && e.push(`  LINELOAD  "${c.name}"  "${c.story}"  TYPE "UNIFF"  DIR "Y"  LC "${Ne}"  FVAL ${E(n[1])}`);
    }
    e.length && (r.push("$ FRAME OBJECT LOADS"), e.forEach((o) => r.push(o)), r.push(""));
  }
  if (S && S.size > 0 && Je.length > 0) {
    const e = [];
    for (const o of Je) {
      const n = ft.get(o.idx), c = n !== void 0 ? { value: n } : S.get(o.idx);
      if (!c || Math.abs(c.value) < 1e-12) continue;
      const E = c.dir ?? "GRAV", f = E === "GRAV" ? Math.abs(c.value) : c.value;
      e.push(`  AREALOAD  "${o.name}"  "${o.story}"  TYPE "UNIFF"  DIR "${E}"  LC "${c.pattern ?? Ne}"  FVAL ${$(s(f) / (L * L))}`);
    }
    e.length > 0 && (r.push("$ SHELL OBJECT LOADS"), e.forEach((o) => r.push(o)), r.push(""));
  }
  r.push("$ ANALYSIS OPTIONS"), r.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), r.push('  PDELTA  METHOD "NONE"  '), r.push("");
  const qe = Le === "manual";
  r.push("$ MASS SOURCE"), r.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${qe ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${qe ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), qe || r.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), r.push(""), r.push("$ LOAD CASES");
  const kt = ((_g = u.loadCases) == null ? void 0 : _g.length) ? u.loadCases : ge.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of kt) {
    r.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const o of e.patterns ?? []) r.push(`  LOADCASE "${e.name}"  LOADPAT  "${o.pattern}"  SF ${o.scaleFactor} `);
  }
  const Ut = u.modalModes ?? 12;
  r.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), r.push(`  LOADCASE "Modal"  MAXMODES ${Ut}  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `), r.push("");
  const Qe = u.loadCombinations;
  if (Qe && Qe.length) {
    r.push("$ LOAD COMBINATIONS");
    for (const e of Qe) {
      r.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const o of e.cases ?? []) r.push(`  COMBO "${e.name}"  LOADCASE  "${o.case}"  SF ${o.scaleFactor} `);
    }
    r.push("");
  }
  return r.push("  END"), r.push("$ END OF MODEL FILE"), r.join(`\r
`);
}
function Ot(u, l) {
  const N = u[l[0]], D = u[l[1]], I = Math.abs(D[2] - N[2]), Y = Math.sqrt((D[0] - N[0]) ** 2 + (D[1] - N[1]) ** 2), U = I > Y * 0.5;
  return U && Y > 0.01 ? "BRACE" : U ? "COLUMN" : "BEAM";
}
export {
  Xt as a,
  Vt as e,
  Zt as p
};
