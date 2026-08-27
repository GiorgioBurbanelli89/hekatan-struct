function m(S) {
  return S && parseFloat(S) || 0;
}
function Ke(S) {
  const i = /* @__PURE__ */ new Map(), I = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let $;
  for (; ($ = I.exec(S)) !== null; ) i.set($[1], $[2] !== void 0 ? $[2] : $[3]);
  return i;
}
function ut(S) {
  const i = S.split(/\r?\n/);
  return i.some(($) => $.trim().startsWith("TABLE:")) ? rt(i) : Et(i);
}
function rt(S) {
  var _a, _b, _c, _d, _e, _f;
  const i = [];
  let I = "";
  for (const u of S) {
    const r = u.trimEnd();
    r.endsWith("_") ? I += r.slice(0, -1) + " " : (I += r, i.push(I), I = "");
  }
  I && i.push(I);
  const $ = { force: "KN", length: "m" };
  let p = "UX,UY,UZ,RX,RY,RZ";
  const R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), L = [], k = [], w = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = [];
  let n = "";
  for (const u of i) {
    const r = u.trim();
    if (!r || r.startsWith(";") || r.startsWith("File ")) continue;
    if (r.startsWith("TABLE:")) {
      const E = r.match(/TABLE:\s+"(.+?)"/);
      n = E ? E[1].toUpperCase() : "";
      continue;
    }
    if (r === "END TABLE DATA") {
      n = "";
      continue;
    }
    const T = Ke(r);
    switch (n) {
      case "PROGRAM CONTROL": {
        const E = T.get("CurrUnits");
        if (E) {
          const l = E.split(",").map((C) => C.trim());
          l[0] && ($.force = l[0]), l[1] && ($.length = l[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const E = T.get("Material");
        E && !R.has(E) && R.set(E, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const E = T.get("Material");
        if (E) {
          const l = R.get(E) || { E: 0, nu: 0, G: 0 };
          l.E = m(T.get("E1")), l.G = m(T.get("G12")), l.nu = m(T.get("U12")), l.density = m(T.get("UnitMass")), R.set(E, l);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const E = T.get("Material");
        E && R.has(E) && (R.get(E).fy = m(T.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const E = T.get("SectionName");
        E && F.set(E, { material: T.get("Material") || "", shape: T.get("Shape") || "Rectangular", D: m(T.get("t3")), B: m(T.get("t2")), TF: m(T.get("tf")), TW: m(T.get("tw")), A: m(T.get("Area")), Iz: m(T.get("I33")), Iy: m(T.get("I22")), J: m(T.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const E = T.get("Section");
        E && J.set(E, { material: T.get("Material") || "", type: T.get("Type") || "Shell", thickness: m(T.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const E = T.get("Joint");
        if (E) {
          const l = m(T.get("XorR")), C = m(T.get("Y")), y = m(T.get("Z"));
          h.set(E, [l, C, y]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const E = T.get("Frame"), l = T.get("JointI"), C = T.get("JointJ");
        E && l && C && L.push({ name: E, j1: l, j2: C });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const E = T.get("Area");
        if (E) {
          const l = parseInt(T.get("NumJoints") || "4"), C = [];
          for (let y = 1; y <= l; y++) {
            const c = T.get(`Joint${y}`);
            c && C.push(c);
          }
          C.length >= 3 && k.push({ name: E, joints: C });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const E = T.get("Joint");
        if (E) {
          const l = [((_a = T.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = T.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = T.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = T.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = T.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = T.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          w.set(E, l);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const E = T.get("Frame"), l = T.get("AnalSect");
        E && l && x.set(E, l);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const E = T.get("Area"), l = T.get("Section");
        E && l && H.set(E, l);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const E = T.get("Joint");
        E && j.push({ joint: E, fx: m(T.get("F1")), fy: m(T.get("F2")), fz: m(T.get("F3")), mx: m(T.get("M1")), my: m(T.get("M2")), mz: m(T.get("M3")) });
        break;
      }
    }
  }
  return qe($, p, R, F, J, h, L, k, w, x, H, j);
}
function Et(S) {
  const i = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const $ = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), J = [], h = [], L = /* @__PURE__ */ new Map(), k = [];
  let w = "", x = "";
  for (const n of S) {
    const u = n.trim();
    if (!u || u.startsWith(";")) continue;
    if (!n.startsWith(" ") && !n.startsWith("	")) {
      const E = u.toUpperCase();
      if (E === "END") break;
      E.startsWith("SHELL SECTION") ? w = "SHELL SECTION" : E.startsWith("FRAME SECTION") ? w = "FRAME SECTION" : w = E.split(/\s+/)[0];
      continue;
    }
    const r = Ke(u), T = u.split(/\s+/);
    switch (w) {
      case "SYSTEM": {
        const E = r.get("DOF");
        E && (I = E);
        const l = r.get("LENGTH");
        l && (i.length = l);
        const C = r.get("FORCE");
        C && (i.force = C);
        break;
      }
      case "JOINT": {
        const E = T[0];
        F.set(E, [m(r.get("X")), m(r.get("Y")), m(r.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const E = r.get("ADD"), l = r.get("DOF");
        if (E && l) {
          const C = l.split(","), y = [false, false, false, false, false, false];
          for (const c of C) {
            const t = c.toUpperCase();
            (t === "UX" || t === "U1") && (y[0] = true), (t === "UY" || t === "U2") && (y[1] = true), (t === "UZ" || t === "U3") && (y[2] = true), (t === "RX" || t === "R1") && (y[3] = true), (t === "RY" || t === "R2") && (y[4] = true), (t === "RZ" || t === "R3") && (y[5] = true);
          }
          L.set(E, y);
        }
        break;
      }
      case "MATERIAL": {
        const E = r.get("NAME");
        if (E) x = E, $.set(E, { E: 0, nu: 0, G: 0 });
        else if (x) {
          const l = $.get(x), C = r.get("E");
          C && (l.E = m(C));
          const y = r.get("U");
          y && (l.nu = m(y)), l.G = l.E / (2 * (1 + l.nu));
          const c = r.get("M");
          c && (l.density = m(c));
        }
        break;
      }
      case "SHELL": {
        const E = T[0], l = r.get("J");
        r.get("SEC"), l && h.push({ name: E, joints: l.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const E = r.get("NAME");
        E && R.set(E, { material: r.get("MAT") || "", type: r.get("TYPE") || "Shell", thickness: m(r.get("TH")) });
        break;
      }
      case "FRAME": {
        const E = T[0], l = r.get("J");
        if (l) {
          const C = l.split(",");
          C.length >= 2 && J.push({ name: E, j1: C[0], j2: C[1] });
        }
        break;
      }
      case "LOAD": {
        const E = r.get("ADD");
        E && k.push({ joint: E, fx: m(r.get("UX")), fy: m(r.get("UY")), fz: m(r.get("UZ")), mx: m(r.get("MX")), my: m(r.get("MY")), mz: m(r.get("MZ")) });
        break;
      }
    }
  }
  return qe(i, I, $, p, R, F, J, h, L, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), k);
}
function qe(S, i, I, $, p, R, F, J, h, L, k, w) {
  var _a;
  const x = [], H = /* @__PURE__ */ new Map(), j = [];
  for (const [t, M] of R) H.set(t, j.length), x.push(t), j.push(M);
  const n = [], u = [], r = /* @__PURE__ */ new Map();
  for (const t of F) {
    const M = H.get(t.j1), O = H.get(t.j2);
    if (M !== void 0 && O !== void 0) {
      const B = n.length;
      n.push([M, O]), u.push(t.name);
      const g = L.get(t.name);
      g && r.set(B, g);
    }
  }
  const T = n.length;
  for (const t of J) {
    const M = t.joints.map((O) => H.get(O)).filter((O) => O !== void 0);
    if (M.length >= 3) {
      const O = n.length;
      n.push(M), u.push(t.name);
      const B = k.get(t.name);
      B && r.set(O, B);
    }
  }
  const E = n.length - T, l = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, C = /* @__PURE__ */ new Map(), y = I.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let t = 0; t < n.length; t++) {
    const M = r.get(t), O = M ? $.get(M) : null, B = M ? p.get(M) : null;
    if (O || n[t].length === 2) {
      const g = O || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, z = I.get(g.material) || y, W = z.E || y.E, Q = z.nu || 0.3, re = z.G || W / (2 * (1 + Q));
      l.elasticities.set(t, W), l.shearModuli.set(t, re), l.areas.set(t, g.A || g.D * g.B), l.momentsOfInertiaZ.set(t, g.Iz || g.B * g.D ** 3 / 12), l.momentsOfInertiaY.set(t, g.Iy || g.D * g.B ** 3 / 12), l.torsionalConstants.set(t, g.J || 0), l.densities.set(t, z.density || 0), ((_a = g.shape) == null ? void 0 : _a.includes("Wide Flange")) || g.shape === "I" ? C.set(t, { type: "I", b: g.B, h: g.D, name: M || "I-section" }) : C.set(t, { type: "rect", b: g.B, h: g.D });
    } else if (B) {
      const g = I.get(B.material) || y, z = g.E || y.E, W = g.nu || 0.2, Q = g.G || z / (2 * (1 + W));
      l.elasticities.set(t, z), l.shearModuli.set(t, Q), l.thicknesses.set(t, B.thickness), l.poissonsRatios.set(t, W), l.densities.set(t, g.density || 0);
    }
  }
  const c = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [t, M] of h) {
    const O = H.get(t);
    O !== void 0 && c.supports.set(O, M);
  }
  for (const t of w) {
    const M = H.get(t.joint);
    if (M !== void 0) {
      const O = c.forces.get(M) || [0, 0, 0, 0, 0, 0];
      O[0] += t.fx, O[1] += t.fy, O[2] += t.fz, O[3] += t.mx, O[4] += t.my, O[5] += t.mz, c.forces.set(M, O);
    }
  }
  return { units: S, dof: i, materials: I, frameSections: $, shellSections: p, nodes: j, nodeNames: x, nodeNameToIdx: H, elements: n, elementNames: u, elementSections: r, nodeInputs: c, elementInputs: l, sectionShapes: C, info: { nNodes: j.length, nFrames: T, nShells: E, title: `SAP2000 (${T} frames, ${E} shells)` } };
}
function It(S) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: i, elements: I, nodeInputs: $, elementInputs: p } = S, R = S.units || { force: "KN", length: "m" }, F = S.title || "Awatif Model", J = [], h = (c) => J.push(c), L = () => J.push(" ");
  h(`File ${F}.$2k was saved on m/d/yy at h:mm:ss`), L(), h('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), h("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), L();
  const k = [], w = (c) => {
    var _a2, _b2, _c2, _d2;
    const t = ((_a2 = p.elasticities) == null ? void 0 : _a2.get(c)) || 0, M = (_b2 = p.poissonsRatios) == null ? void 0 : _b2.get(c), O = ((_c2 = p.shearModuli) == null ? void 0 : _c2.get(c)) || 0, B = M !== void 0 ? M : t > 0 && O > 0 ? Math.max(0, Math.min(0.5, t / (2 * O) - 1)) : 0.2, g = O > 0 ? O : t > 0 ? t / (2 * (1 + B)) : 0, z = ((_d2 = p.densities) == null ? void 0 : _d2.get(c)) || 0;
    return { E: t, nu: B, G: g, rho: z, key: `MAT_${Math.round(t)}_n${B.toFixed(4)}` };
  }, x = [];
  if (I.forEach((c, t) => {
    c.length === 2 ? k.push(t) : x.push(t);
  }), k.length > 0) {
    h('TABLE:  "CONNECTIVITY - FRAME"');
    for (const c of k) {
      const t = I[c];
      h(`   Frame=${c + 1}   JointI=${t[0] + 1}   JointJ=${t[1] + 1}   IsCurved=No`);
    }
    L();
  }
  if (x.length > 0) {
    h('TABLE:  "CONNECTIVITY - AREA"');
    for (const c of x) {
      const t = I[c], M = t.map((O, B) => `Joint${B + 1}=${O + 1}`).join("   ");
      h(`   Area=${c + 1}   NumJoints=${t.length}   ${M}`);
    }
    L();
  }
  h('TABLE:  "COORDINATE SYSTEMS"'), h("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), L(), h('TABLE:  "DATABASE FORMAT TYPES"'), h("   UnitsCurr=Yes   OverrideE=No"), L();
  const H = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
  for (const c of k) {
    const t = ((_a = p.areas) == null ? void 0 : _a.get(c)) || 0, M = ((_b = p.momentsOfInertiaZ) == null ? void 0 : _b.get(c)) || 0, O = ((_c = p.momentsOfInertiaY) == null ? void 0 : _c.get(c)) || 0, B = ((_d = p.torsionalConstants) == null ? void 0 : _d.get(c)) || 0;
    (_e = p.elasticities) == null ? void 0 : _e.get(c);
    const g = w(c).key, z = ((_f = p.shearAreasZ) == null ? void 0 : _f.get(c)) ?? 0, W = ((_g = p.shearAreasY) == null ? void 0 : _g.get(c)) ?? 0, Q = `A${t.toPrecision(6)}_Iz${M.toPrecision(6)}_s${z.toPrecision(6)}_${W.toPrecision(6)}`;
    if (!H.has(Q)) {
      let Ee = 0.3, ae = 0.3;
      t > 0 && M > 0 && (Ee = Math.sqrt(12 * M / t), ae = t / Ee), H.set(Q, { A: t, Iz: M, Iy: O, J: B, b: ae, h: Ee, matKey: g, As2: z > 0 ? z : t * 5 / 6, As3: W > 0 ? W : t * 5 / 6 });
    }
    const re = [...H.keys()].indexOf(Q) + 1;
    j.set(c, `SEC${re}`);
  }
  if (k.length > 0) {
    h('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const c of k) {
      const t = j.get(c) || "SEC1";
      h(`   Frame=${c + 1}   AutoSelect=N.A.   AnalSect=${t}   MatProp=Default`);
    }
    L();
  }
  if (H.size > 0) {
    h('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let c = 0;
    for (const [, t] of H) c++, h(`   SectionName=SEC${c}   Material=${t.matKey}   Shape=General   t3=${P(t.h)}   t2=${P(t.b)}   Area=${P(t.A)}   TorsConst=${P(t.J)}   I33=${P(t.Iz)}   I22=${P(t.Iy)}   I23=0   AS2=${P(t.As2)}   AS3=${P(t.As3)} _`), h("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    L();
  }
  {
    const c = k.filter((t) => {
      var _a2;
      const M = (_a2 = p.localAngles) == null ? void 0 : _a2.get(t);
      return M !== void 0 && isFinite(M) && Math.abs(M) > 1e-9;
    });
    if (c.length > 0) {
      h('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const t of c) h(`   Frame=${t + 1}   Angle=${P(p.localAngles.get(t))}   AdvanceAxes=No`);
      L();
    }
  }
  const n = !!S.layeredSection && x.length > 0, u = S.layeredSection, r = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
  if (!n) for (const c of x) {
    const t = ((_h = p.thicknesses) == null ? void 0 : _h.get(c)) || 0.1;
    (_i = p.elasticities) == null ? void 0 : _i.get(c);
    const M = w(c).key, O = ((_j = p.plateFormulations) == null ? void 0 : _j.get(c)) ?? 0, B = `t${t.toPrecision(6)}_f${O}`;
    r.has(B) || r.set(B, { t, matKey: M, formulacion: O });
    const g = [...r.keys()].indexOf(B) + 1;
    T.set(c, `SSEC${g}`);
  }
  if (x.length > 0) {
    h('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const c of x) {
      const t = n ? u.name : T.get(c) || "SSEC1";
      h(`   Area=${c + 1}   Section=${t}   MatProp=Default`);
    }
    if (L(), h('TABLE:  "AREA SECTION PROPERTIES"'), n) {
      const c = u, t = ((_k = c.layers[0]) == null ? void 0 : _k.material) || "MAT_DEFAULT";
      h(`   Section=${c.name}   Material=${t}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${P(c.totalThickness)}   BendThick=${P(c.totalThickness)}   Color=Magenta`);
    } else {
      let c = 0;
      for (const [, t] of r) {
        c++;
        const M = t.formulacion === 2 ? "Membrane" : t.formulacion === 1 ? "Shell-Thin" : "Shell-Thick";
        h(`   Section=SSEC${c}   Material=${t.matKey}   MatAngle=0   AreaType=Shell   Type=${M}   DrillDOF=Yes   Thickness=${P(t.t)}   BendThick=${P(t.t)}   Color=Cyan`);
      }
    }
    if (L(), n) {
      h('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const c = u;
      for (const t of c.layers) {
        const M = t.angle ?? 0, O = t.numIntPts ?? 3;
        h(`   Section=${c.name}   LayerName=${t.name}   Distance=${P(t.distance)}   Thickness=${P(t.thickness)}   Type=Shell   NumIntPts=${O}   Material=${t.material}   MatAngle=${P(M * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      L();
    }
  }
  h('TABLE:  "JOINT COORDINATES"');
  for (let c = 0; c < i.length; c++) {
    const t = i[c];
    h(`   Joint=${c + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${P(t[0])}   Y=${P(t[1])}   Z=${P(t[2])}   SpecialJt=No`);
  }
  if (L(), $.supports && $.supports.size > 0) {
    h('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [c, t] of $.supports) {
      if (!t.some((O) => O)) continue;
      const M = (O) => O ? "Yes" : "No";
      h(`   Joint=${c + 1}   U1=${M(t[0])}   U2=${M(t[1])}   U3=${M(t[2])}   R1=${M(t[3])}   R2=${M(t[4])}   R3=${M(t[5])}`);
    }
    L();
  }
  const E = S.selfWtMult ?? 1;
  h('TABLE:  "LOAD PATTERN DEFINITIONS"'), h(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${E}`), L(), h('TABLE:  "LOAD CASE DEFINITIONS"'), h('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), L(), h('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), h('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), L();
  const l = $.loads;
  if (l && l.size > 0) {
    h('TABLE:  "JOINT LOADS - FORCE"');
    for (const [c, t] of l) t.some((M) => Math.abs(M) > 1e-12) && h(`   Joint=${c + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${P(t[0])}   F2=${P(t[1])}   F3=${P(t[2])}   M1=${P(t[3])}   M2=${P(t[4])}   M3=${P(t[5])}`);
    L();
  }
  const C = p.frameLoads;
  if (C && C.size > 0) {
    h('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [c, t] of C) {
      const M = I[c];
      if (!M || M.length !== 2) continue;
      const O = i[M[0]], B = i[M[1]], g = Math.hypot(B[0] - O[0], B[1] - O[1], B[2] - O[2]);
      ["X", "Y", "Z"].forEach((z, W) => {
        Math.abs(t[W]) < 1e-12 || h(`   Frame=${c + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${z}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${P(g)}   FOverLA=${P(t[W])}   FOverLB=${P(t[W])}`);
      });
    }
    L();
  }
  const y = /* @__PURE__ */ new Map();
  for (let c = 0; c < I.length; c++) {
    const { E: t, nu: M, G: O, rho: B, key: g } = w(c);
    y.has(g) || y.set(g, { E: t, nu: M, G: O, rho: B });
  }
  h('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [c] of y) h(`   Material=${c}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  L(), h('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [c, t] of y) h(`   Material=${c}   UnitWeight=${P(t.rho * 9.81)}   UnitMass=${P(t.rho)}   E1=${P(t.E)}   G12=${P(t.G)}   U12=${P(t.nu)}   A1=9.9E-06`);
  L(), h('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [c] of y) h(`   Material=${c}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return L(), h('TABLE:  "PROGRAM CONTROL"'), h(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${R.force}, ${R.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), L(), h("END TABLE DATA"), h(""), J.join(`\r
`);
}
function P(S) {
  return S === 0 || Math.abs(S) < 1e-15 ? "0" : Math.abs(S) >= 1e6 || Math.abs(S) < 1e-3 && Math.abs(S) > 0 ? S.toExponential(8) : parseFloat(S.toPrecision(10)).toString();
}
function lt(S, i, I = 0.05) {
  const $ = i.map(([p, R]) => `${(+p).toFixed(4)} ${(+R).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${S}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${I}  SPECTYPE "USER"  `, `  FUNCTION "${S}"  TIMEVAL "${$}"  `];
}
function St(S) {
  const { name: i, func: I, modalCase: $ = "Modal", sfX: p = 9.81, sfY: R = 9.81 } = S, F = [`  LOADCASE "${i}"  TYPE  "Response Spectrum"  MODALCASE  "${$}"  `];
  return p && F.push(`  LOADCASE "${i}"  ACCEL  "U1"  FUNC  "${I}"  SF  ${p}  `), R && F.push(`  LOADCASE "${i}"  ACCEL  "U2"  FUNC  "${I}"  SF  ${R}  `), F;
}
function Ze(S) {
  const { name: i = "Modal", ritz: I = false, nModes: $ = 12 } = S;
  return I ? [`  LOADCASE "${i}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${$} MINMODES  1 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${i}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${$} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function $t(S) {
  var _a;
  const i = (_a = S.e2kModel) == null ? void 0 : _a.rawSections;
  let I = i && i.size > 0 ? ft(i, S.e2kModel) : pt(S);
  return S.seismicNEC && (I = At(I, S.seismicNEC)), I;
}
function At(S, i) {
  const I = S.includes(`\r
`) ? `\r
` : `
`, $ = S.split(/\r?\n/), p = i.name ?? "NEC", R = lt(p, i.points, i.dampRatio ?? 0.05), F = i.modalCase ?? "Modal", J = St({ name: i.caseName ?? "Sismo NEC", func: p, modalCase: F, sfX: i.sfX, sfY: i.sfY });
  let h = [];
  const L = (k) => $.some((w) => k.test(w));
  if (i.modal) {
    const k = new RegExp(`^\\s*LOADCASE\\s+"${F}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let w = $.length - 1; w >= 0; w--) k.test($[w]) && $.splice(w, 1);
    h = Ze({ name: F, ritz: !!i.modal.ritz, nModes: i.modal.nModes });
  } else L(new RegExp(`LOADCASE\\s+"${F}"\\s+TYPE\\s+"Modal`)) || (h = Ze({ name: F }));
  return Xe($, "FUNCTIONS", R), Xe($, "LOAD CASES", [...h, ...J]), $.join(I);
}
function Xe(S, i, I) {
  const $ = S.findIndex((F) => F.trim() === `$ ${i}`);
  if ($ >= 0) {
    S.splice($ + 1, 0, ...I);
    return;
  }
  const p = S.findIndex((F) => F.trim() === "END"), R = p >= 0 ? p : S.length;
  S.splice(R, 0, `$ ${i}`, ...I, "");
}
function ft(S, i) {
  const I = [], $ = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  I.push("$ File exported from Hekatan Struct Lineal (round-trip)"), I.push("");
  for (const p of $) {
    const R = S.get(p);
    if (!(!R || R.length === 0)) {
      I.push(`$ ${p}`);
      for (const F of R) I.push(F);
      I.push("");
    }
  }
  for (const [p, R] of S) if (!$.includes(p) && R.length !== 0) {
    I.push(`$ ${p}`);
    for (const F of R) I.push(F);
    I.push("");
  }
  return I.push("  END"), I.push("$ END OF MODEL FILE"), I.join(`\r
`);
}
function pt(S) {
  var _a, _b, _c, _d, _e2, _f;
  const { nodes: i, elements: I, nodeInputs: $, elementInputs: p, title: R, units: F } = S, J = S.shellLoads ?? p.shellSurfaceLoads;
  let h;
  J instanceof Map && (h = /* @__PURE__ */ new Map(), J.forEach((e, s) => {
    h.set(s, typeof e == "number" ? { value: e } : e);
  }));
  const L = S.shellAngles ?? p.shellAngles, k = p.cargaDeArea, w = !!(h && h.size > 0), x = (e, s) => [s[0], s[1], s[2] - (w ? (k == null ? void 0 : k.get(e)) ?? 0 : 0)], H = "N", j = "MM", n = [], u = (e) => Math.round(e * 1e4) / 1e4, r = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), T = 1e3, E = 1e3, l = (e) => e * E, C = (e) => e * T, y = (e) => e * T, c = (e) => e * T * E, t = (e) => e * T / E ** 2, M = (e) => e * T / E ** 3, O = /* @__PURE__ */ new Date(), B = `${O.getMonth() + 1}/${O.getDate()}/${O.getFullYear()}  ${O.getHours()}:${String(O.getMinutes()).padStart(2, "0")}:${String(O.getSeconds()).padStart(2, "0")}`;
  n.push(`$ File   "Hekatan_export.e2k"  saved ${B} in ETABS 22.6.0`), n.push(""), n.push("$ PROGRAM INFORMATION"), n.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), n.push(""), n.push("$ CONTROLS"), n.push(`  UNITS  "${H}"  "${j}"  "C"  `), n.push('  TITLE1  "Hekatan Struct Lineal export"  '), R && n.push(`  TITLE2  "${R}"  `), n.push("  PREFERENCE  MERGETOL 0.001"), n.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), n.push("");
  const g = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  i.forEach((e) => {
    g.add(u(e[0])), z.add(u(e[1]));
  });
  const W = [...g].sort((e, s) => e - s), Q = [...z].sort((e, s) => e - s);
  n.push("$ GRIDS"), n.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), W.forEach((e, s) => {
    const o = s < 26 ? String.fromCharCode(65 + s) : String.fromCharCode(65 + s % 26).repeat(Math.floor(s / 26) + 1);
    n.push(`  GRID "G1"  LABEL "${o}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), Q.forEach((e, s) => {
    n.push(`  GRID "G1"  LABEL "${s + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), n.push("");
  const re = 3, Ee = 0.5, ae = /* @__PURE__ */ new Map();
  i.forEach((e) => {
    const s = u(e[2]);
    ae.set(s, (ae.get(s) ?? 0) + 1);
  });
  const Pe = /* @__PURE__ */ new Set();
  i.forEach((e) => Pe.add(u(e[2])));
  const K = [...Pe].sort((e, s) => e - s);
  let G = K.filter((e) => (ae.get(e) ?? 0) >= re);
  if (G.length > 1) {
    const e = [G[0]];
    for (const s of G.slice(1)) s - e[e.length - 1] < Ee ? e[e.length - 1] = s : e.push(s);
    G = e;
  }
  G.length || (G = [K[0], K[K.length - 1]]), G[0] !== K[0] && G.unshift(K[0]), G[G.length - 1] !== K[K.length - 1] && G.push(K[K.length - 1]);
  const ce = [], ie = /* @__PURE__ */ new Map();
  ce.push("Base"), ie.set(G[0], "Base");
  for (let e = 1; e < G.length; e++) {
    const s = `Level_${e}`;
    ce.push(s), ie.set(G[e], s);
  }
  const Fe = (e) => {
    const s = u(e);
    if (ie.has(s)) return { story: ie.get(s), dz: 0 };
    for (let a = 0; a < G.length; a++) if (G[a] >= s) return { story: ie.get(G[a]), dz: u(G[a] - s) };
    const o = G[G.length - 1];
    return { story: ie.get(o), dz: u(o - s) };
  };
  n.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = G.length - 1; e >= 1; e--) n.push(`  STORY "${ce[e]}"  HEIGHT ${u(l(G[e] - G[e - 1]))} MASTERSTORY "Yes"  `);
  G.length > 0 && n.push(`  STORY "Base"  ELEV ${G[0]} `), n.push(""), I.some((e) => e.length === 4), n.push("$ DIAPHRAGM NAMES"), n.push('  DIAPHRAGM "D1"    TYPE RIGID'), n.push(""), n.push("$ MATERIAL PROPERTIES");
  const ye = /* @__PURE__ */ new Set();
  (_a = p.elasticities) == null ? void 0 : _a.forEach((e) => ye.add(e));
  const fe = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
  let Qe = 0, et = 0;
  const tt = 980665e-8, Ye = /* @__PURE__ */ new Map();
  if (p.densities && p.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    p.densities.forEach((s, o) => {
      var _a2;
      const a = (_a2 = p.elasticities) == null ? void 0 : _a2.get(o);
      a !== void 0 && (e.has(a) || e.set(a, []), e.get(a).push(s));
    }), e.forEach((s, o) => {
      const a = s.reduce((N, d) => N + d, 0) / s.length, f = a > 100 ? a * tt : a * 9.80665;
      Ye.set(o, f);
    });
  }
  for (const e of ye) {
    const s = e >= 1e8, o = s ? `Steel_${++Qe}` : `Conc_${++et}`;
    fe.set(e, o), Ne.set(e, s);
    const a = Ye.get(e) ?? (s ? 76.97 : 24), f = t(e), N = M(a), d = (() => {
      var _a2;
      const _ = S.elementInputs.poissonsRatios;
      if (_) {
        for (const [Y, D] of _) if ((((_a2 = S.elementInputs.elasticities) == null ? void 0 : _a2.get(Y)) ?? 0) === e) return D;
      }
    })(), A = d !== void 0 ? d : s ? 0.3 : 0.2, U = s ? 117e-7 : 1e-5;
    if (s) {
      n.push(`  MATERIAL  "${o}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${r(N)}`), n.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${u(f)}  U ${A}  A ${U}`);
      const _ = 345e3, Y = 45e4;
      n.push(`  MATERIAL  "${o}"  FY ${u(t(_))}  FU ${u(t(Y))}  FYE ${u(t(_ * 1.1))}  FUE ${u(t(Y * 1.1))}`);
    } else n.push(`  MATERIAL  "${o}"    TYPE "Concrete"    WEIGHTPERVOLUME ${r(N)}`), n.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${u(f)}  U ${A}  A ${U}`), n.push(`  MATERIAL  "${o}"    FC ${u(t(24e3))}`);
  }
  n.push(""), n.push("$ FRAME SECTIONS");
  const pe = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ee = 0.05;
  I.forEach((e, s) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g, _h, _i, _j;
    if (e.length !== 2) return;
    const o = (_a2 = p.sectionShapes) == null ? void 0 : _a2.get(s), a = ((_b2 = p.elasticities) == null ? void 0 : _b2.get(s)) ?? 0, f = fe.get(a) || "Conc_1", N = Ne.get(a) ?? a >= 1e8, d = ((_c2 = p.areas) == null ? void 0 : _c2.get(s)) ?? 0, A = ((_d2 = p.momentsOfInertiaZ) == null ? void 0 : _d2.get(s)) ?? 0, U = ((_e3 = p.momentsOfInertiaY) == null ? void 0 : _e3.get(s)) ?? 0, _ = ((_f2 = p.torsionalConstants) == null ? void 0 : _f2.get(s)) ?? 0;
    let Y = (o == null ? void 0 : o.type) || "rect", D = (o == null ? void 0 : o.h) ?? 0, b = (o == null ? void 0 : o.b) ?? 0, v = (o == null ? void 0 : o.d) ?? 0;
    const Se = (o == null ? void 0 : o.tf) ?? 0, se = (o == null ? void 0 : o.tw) ?? 0;
    if (!o && D <= 0 && b <= 0 && v <= 0 && d > 0 && A > 0 && U > 0) {
      const V = (_g = p.cantos) == null ? void 0 : _g.get(s), Ae = (_h = p.anchos) == null ? void 0 : _h.get(s);
      D = V && V > 0 ? V : Math.sqrt(12 * A / d), b = Ae && Ae > 0 ? Ae : d / D, (!isFinite(D) || D < ee) && (D = ee), (!isFinite(b) || b < ee) && (b = ee), Y = "general";
    } else D <= 0 && b <= 0 && v <= 0 && d > 0 && (A > 0 ? (D = Math.sqrt(12 * A / d), b = d / D) : D = b = Math.sqrt(d), (!isFinite(D) || D < ee) && (D = ee), (!isFinite(b) || b < ee) && (b = ee), Y = "rect");
    D <= 0 && b <= 0 && v <= 0 && (D = 0.3, b = 0.3, Y = "rect");
    const Me = (o == null ? void 0 : o.name) ? `NAME_${o.name}` : `${Y}_${u(D)}_${u(b)}_${u(v)}_${u(Se)}_${u(se)}_${f}`;
    (o == null ? void 0 : o.name) && !he.has(Me) && he.set(Me, o.name);
    let Z = he.get(Me);
    if (!Z) {
      const V = N ? "S" : "C";
      Y === "general" ? Z = `${V}_G${pe.size + 1}` : Y === "rect" ? Z = `${V}_R${Math.round(b * 100)}x${Math.round(D * 100)}` : Y === "circ" ? Z = `${V}_C_D${Math.round(v * 100)}` : Y === "I" ? Z = `${V}_I${Math.round(D * 100)}x${Math.round(b * 100)}` : Y === "HSS" ? Z = `${V}_HSS${Math.round(b * 100)}x${Math.round(D * 100)}x${Math.round(se * 1e3)}` : Z = `${V}_Sec${pe.size + 1}`, he.set(Me, Z);
    }
    if (Oe.set(s, Z), pe.has(Z)) return;
    pe.add(Z);
    const it = d > 0 && A > 0 && U > 0;
    let X;
    Y === "general" || it ? X = "General" : Y === "I" ? X = "Steel I/Wide Flange" : Y === "HSS" ? X = "Steel Tube" : Y === "CFT" ? X = "Filled Steel Tube" : Y === "pipe" ? X = "Steel Pipe" : Y === "L" ? X = "Steel Angle" : Y === "C" ? X = "Steel Channel" : Y === "2C" ? X = "Steel Double Channel" : Y === "circ" ? X = "Concrete Circle" : X = "Concrete Rectangular";
    let ne = `  FRAMESECTION  "${Z}"  MATERIAL "${f}"  SHAPE "${X}"`;
    if (X === "General") {
      const V = ((_i = p.shearAreasZ) == null ? void 0 : _i.get(s)) || d * 5 / 6, Ae = ((_j = p.shearAreasY) == null ? void 0 : _j.get(s)) || d * 5 / 6;
      ne += `  D ${u(l(D))} B ${u(l(b))} AREA ${r(d * 1e6)} AS2 ${r(V * 1e6)} AS3 ${r(Ae * 1e6)} I33 ${r(A * 1e12)} I22 ${r(U * 1e12)} TORSION ${r((_ || A + U) * 1e12)} S33POS ${r(2 * A / D * 1e9)} S33NEG ${r(2 * A / D * 1e9)} S22POS ${r(2 * U / b * 1e9)} S22NEG ${r(2 * U / b * 1e9)} Z33 ${r(2 * A / D * 1e9)} Z22 ${r(2 * U / b * 1e9)} R33 ${r(Math.sqrt(A / d) * 1e3)} R22 ${r(Math.sqrt(U / d) * 1e3)} `, n.push(ne);
      return;
    }
    D && (ne += `  D ${u(l(D))}`), b && (ne += `  B ${u(l(b))}`), v && !D && (ne += `  D ${u(l(v))}`), Se && (ne += `  TF ${u(l(Se))}`), se && (ne += `  TW ${u(l(se))}`), n.push(ne);
  }), n.push("");
  const Te = /* @__PURE__ */ new Map();
  let st = 0;
  i.forEach((e) => {
    const { dz: s } = Fe(e[2]), o = `${u(e[0])},${u(e[1])},${s}`;
    Te.has(o) || Te.set(o, `${++st}`);
  }), n.push("$ POINT COORDINATES");
  for (const [e, s] of Te) {
    const [o, a, f] = e.split(",").map(Number);
    n.push(f ? `  POINT "${s}"  ${u(l(o))} ${u(l(a))} ${u(l(f))} ` : `  POINT "${s}"  ${u(l(o))} ${u(l(a))} `);
  }
  n.push("");
  const te = (e) => {
    const s = i[e], { story: o, dz: a } = Fe(s[2]), f = `${u(s[0])},${u(s[1])},${a}`;
    return { pt: Te.get(f) || "1", story: o };
  }, Be = (e) => {
    var _a2, _b2, _c2, _d2, _e3;
    const s = [], o = (_a2 = S.propertyModifiers) == null ? void 0 : _a2.get(e);
    o && o.some((A) => Math.abs(A - 1) > 1e-9) && s.push(`PROPMODIFIERS "${o.map((A) => u(A)).join(" ")}"`);
    const a = (_b2 = p.localAngles) == null ? void 0 : _b2.get(e);
    a !== void 0 && isFinite(a) && Math.abs(a) > 1e-9 && s.push(`ANG ${u(a)}`);
    const f = (_c2 = p.momentReleases) == null ? void 0 : _c2.get(e);
    if (f && f.some((A) => A)) {
      const A = [];
      f.length === 12 ? (f[0] && A.push("PI"), f[1] && A.push("V2I"), f[2] && A.push("V3I"), f[3] && A.push("TI"), f[4] && A.push("M2I"), f[5] && A.push("M3I"), f[6] && A.push("PJ"), f[7] && A.push("V2J"), f[8] && A.push("V3J"), f[9] && A.push("TJ"), f[10] && A.push("M2J"), f[11] && A.push("M3J")) : f.length === 6 && (f[0] && A.push("TI"), f[1] && A.push("M2I"), f[2] && A.push("M3I"), f[3] && A.push("TJ"), f[4] && A.push("M2J"), f[5] && A.push("M3J")), A.length > 0 && s.push(`RELEASE "${A.join(" ")}"`);
    }
    const N = (_d2 = p.insertionPoints) == null ? void 0 : _d2.get(e);
    N && (Math.abs(N[0]) > 1e-9 || Math.abs(N[1]) > 1e-9) && s.push(`LATEROFFSET ${u(l(N[0]))} TRANSOFFSET ${u(l(N[1]))}`);
    const d = (_e3 = p.rigidOffsets) == null ? void 0 : _e3.get(e);
    return d && (Math.abs(d[0]) > 1e-9 || Math.abs(d[1]) > 1e-9) && s.push(`LENGTHOFFI ${u(d[0])} LENGTHOFFJ ${u(d[1])} RIGIDZONE 0.5`), s.length > 0 ? ` ${s.join(" ")} ` : "";
  }, de = [], Ge = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Map();
  I.forEach((e, s) => {
    if (e.length !== 2) return;
    const o = Ve(i, e);
    if (o === "BEAM") return;
    const a = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], f = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    if (Math.abs(i[a][0] - i[f][0]) > 1e-6 || Math.abs(i[a][1] - i[f][1]) > 1e-6) return;
    const N = te(a), d = Oe.get(s) || `Sec_${s}`, A = `${N.pt}_${d}_${o}`;
    ue.has(A) || ue.set(A, []), ue.get(A).push({ i: s, bot: a, top: f, zBot: u(i[a][2]), zTop: u(i[f][2]), planPt: N.pt, secName: d, type: o });
  }), ue.forEach((e, s) => {
    e.sort((a, f) => a.zBot - f.zBot);
    let o = 0;
    for (let a = 1; a <= e.length; a++) if (a === e.length || Math.abs(e[a].zBot - e[a - 1].zTop) > 1e-6) {
      const N = e.slice(o, a);
      N.length >= 1 && (de.push({ elemIndices: N.map((d) => d.i), planPt: N[0].planPt, bottomNodeIdx: N[0].bot, topNodeIdx: N[N.length - 1].top, secName: N[0].secName, type: N[0].type, nSegments: N.length }), N.forEach((d) => Ge.add(d.i))), o = a;
    }
  }), n.push("$ LINE CONNECTIVITIES");
  const Ue = [], be = (e) => ce.indexOf(e), we = (e, s, o, a, f, N, d) => {
    const A = te(a), U = te(o), _ = be(A.story) - be(U.story);
    _ <= 0 ? n.push(`  LINE  "${e}"  BEAM  "${U.pt}"  "${A.pt}"  0`) : n.push(`  LINE  "${e}"  ${s}  "${U.pt}"  "${A.pt}"  ${_}`), Ue.push(`  LINEASSIGN  "${e}"  "${A.story}"  SECTION "${f}" ${N} MINNUMSTA ${d} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  de.forEach((e, s) => {
    const o = Be(e.elemIndices[0]);
    we(`C${s + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, o, e.nSegments);
  }), I.forEach((e, s) => {
    if (e.length !== 2 || Ge.has(s)) return;
    const o = Ve(i, e), a = Oe.get(s) || `Sec_${s}`, f = Be(s), N = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], d = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    we(`E${s + 1}`, o === "BEAM" ? "BRACE" : o, N, d, a, f, 3);
  }), n.push("");
  const Ie = S.weightMode ?? "auto", le = /* @__PURE__ */ new Set();
  n.push("$ POINT ASSIGNS"), (_b = $.supports) == null ? void 0 : _b.forEach((e, s) => {
    const o = [];
    if (e[0] && o.push("UX"), e[1] && o.push("UY"), e[2] && o.push("UZ"), e[3] && o.push("RX"), e[4] && o.push("RY"), e[5] && o.push("RZ"), o.length > 0) {
      const a = te(s), f = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      n.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${o.join(" ")}" ${f} `), le.add(`${a.pt}@${a.story}`);
    }
  });
  const ke = (S.diaphragm ?? "auto") !== "none";
  ke && de.forEach((e) => {
    const s = te(e.topNodeIdx), o = `${s.pt}@${s.story}`;
    !le.has(o) && s.story !== "Base" && (n.push(`  POINTASSIGN  "${s.pt}"  "${s.story}"  DIAPH "D1"  `), le.add(o));
  }), Ie === "manual" && $.loads && $.loads.forEach((e, s) => {
    const [o, a, f] = x(s, e);
    if (Math.abs(o) < 1e-10 && Math.abs(a) < 1e-10 && Math.abs(f) < 1e-10) return;
    const N = te(s), d = `${N.pt}@${N.story}`;
    le.has(d) || (n.push(`  POINTASSIGN  "${N.pt}"  "${N.story}"  DIAPH "DISCONNECTED"  `), le.add(d));
  }), n.push(""), n.push("$ LINE ASSIGNS"), Ue.forEach((e) => n.push(e)), n.push("");
  const q = [], xe = p.areaObjects, He = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map();
  xe == null ? void 0 : xe.forEach((e) => e.cells.forEach((s) => He.add(s))), I.forEach((e, s) => {
    if (e.length === 4) {
      const o = i[e[0]], a = i[e[1]], f = i[e[2]], N = [a[0] - o[0], a[1] - o[1], a[2] - o[2]], d = [f[0] - o[0], f[1] - o[1], f[2] - o[2]], A = N[1] * d[2] - N[2] * d[1], U = N[2] * d[0] - N[0] * d[2], _ = N[0] * d[1] - N[1] * d[0], Y = Math.sqrt(A * A + U * U + _ * _), D = Y > 1e-10 && Math.abs(_) / Y < 0.5;
      q.push({ idx: s, el: e, isWall: D }), He.has(s) && q.pop();
    }
  });
  const $e = (() => {
    for (const [e, s] of Ne) if (!s) return fe.get(e);
    return fe.values().next().value || "Conc_1";
  })();
  xe == null ? void 0 : xe.forEach((e, s) => {
    q.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && ze.set(e.cells[0], e.q), e.ang !== void 0 && Je.set(e.cells[0], e.ang);
  });
  const _e = "DECK";
  let ge = false;
  const Re = [], We = (e) => {
    const s = S.elementInputs.plateFormulations, o = q.find((f) => f.isWall === e), a = s && o ? s.get(o.idx) : void 0;
    return a === 2 ? "Membrane" : a === 1 ? "ShellThin" : "ShellThick";
  }, ve = (e, s) => {
    const o = S.elementInputs.thicknesses, a = q.find((f) => f.isWall === e);
    return (a ? o == null ? void 0 : o.get(a.idx) : void 0) ?? (o == null ? void 0 : o.values().next().value) ?? s;
  };
  if (q.some((e) => !e.isWall)) {
    const e = p.bendingModifiers, s = p.shellModifiers;
    ge = (() => {
      for (const a of q) {
        if (a.isWall) continue;
        const f = s == null ? void 0 : s.get(a.idx);
        if (f && Math.abs(f[3]) < 1e-9 && Math.abs(f[4]) < 1e-9) return true;
        const N = e == null ? void 0 : e.get(a.idx);
        if (N !== void 0 && Math.abs(N) < 1e-9) return true;
      }
      return false;
    })();
    const o = ve(false, 0.15);
    ge ? (n.push("$ DECK PROPERTIES"), n.push(`  SHELLPROP  "${_e}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${$e}"  DECKMATERIAL "${$e}"  DECKSLABDEPTH ${r(o * 65 / 120)} DECKRIBDEPTH ${r(o * 55 / 120)} DECKRIBWIDTHTOP ${r(o * 150 / 120)} DECKRIBWIDTHBOTTOM ${r(o * 100 / 120)} DECKRIBSPACING ${r(o * 200 / 120)} DECKSHEARTHICKNESS ${r(o * 0.76 / 120)} DECKUNITWEIGHT ${r(C(0.11012))} SHEARSTUDDIAM ${r(o * 19 / 120)} SHEARSTUDHEIGHT ${r(o * 100 / 120)} SHEARSTUDFU 400 `)) : (n.push("$ SLAB PROPERTIES"), n.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${$e}"  MODELINGTYPE "${We(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${u(l(o))} `)), n.push("");
  }
  if (q.some((e) => e.isWall)) {
    n.push("$ WALL PROPERTIES");
    const e = ve(true, 0.2), s = We(true);
    n.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${$e}"  MODELINGTYPE "${s}"  WALLTHICKNESS ${u(l(e))} `), n.push("");
  }
  if (q.length > 0) {
    n.push("$ AREA CONNECTIVITIES");
    const e = [];
    q.forEach((s, o) => {
      const { el: a, isWall: f } = s, N = f ? `W${o + 1}` : `F${o + 1}`, d = f ? "PANEL" : "FLOOR", A = a.map((U) => te(U));
      if (f) {
        const U = (v) => ce.indexOf(v);
        if (new Set(A.map((v) => v.pt)).size === 4) {
          const v = Math.max(...A.map((se) => U(se.story))), Se = A.map((se) => v - U(se.story));
          n.push(`  AREA "${N}"  ${d}  4  "${A[0].pt}"  "${A[1].pt}"  "${A[2].pt}"  "${A[3].pt}"  ${Se.join("  ")}  `), e.push(`  AREAASSIGN  "${N}"  "${ce[v]}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const Y = i[a[0]][2] <= i[a[2]][2] ? 0 : 2, D = i[a[1]][2] <= i[a[3]][2] ? 1 : 3;
        n.push(`  AREA "${N}"  ${d}  4  "${A[Y].pt}"  "${A[D].pt}"  "${A[D].pt}"  "${A[Y].pt}"  1  1  0  0  `);
        const b = A[Y === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${N}"  "${b}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        n.push(`  AREA "${N}"  ${d}  4  "${A[0].pt}"  "${A[1].pt}"  "${A[2].pt}"  "${A[3].pt}"  0  0  0  0  `);
        const U = Je.get(s.idx) ?? (L == null ? void 0 : L.get(s.idx));
        e.push(ge ? `  AREAASSIGN  "${N}"  "${A[0].story}"  SECTION "${_e}"  ANG ${u(U ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${N}"  "${A[0].story}"  SECTION "Losa" ${ke ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Re.push({ name: N, story: A[0].story, idx: s.idx });
      }
    }), n.push(""), n.push("$ AREA ASSIGNS"), e.forEach((s) => n.push(s)), n.push("");
  }
  const nt = Ie === "manual" ? 0 : 1;
  n.push("$ LOAD PATTERNS");
  const oe = ((_c = S.loadPatterns) == null ? void 0 : _c.length) ? S.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: nt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of oe) {
    let s;
    e.type === "Dead" ? s = Ie === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : (s = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), n.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${s}`);
  }
  n.push("");
  const me = S.loadPatternDestino && oe.some((e) => e.name === S.loadPatternDestino) ? S.loadPatternDestino : ((_d = oe.find((e) => e.type === "Dead")) == null ? void 0 : _d.name) ?? oe[0].name, Le = [], Ce = /* @__PURE__ */ new Map(), je = (e, s) => {
    const o = Ce.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let a = 0; a < 6; a++) o[a] += s[a] ?? 0;
    Ce.set(e, o);
  }, ot = me === (((_e2 = oe.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? oe[0].name), at = Ie === "manual" || !ot;
  if ($.loads && $.loads.size > 0 && $.loads.forEach((e, s) => {
    const [o, a, f] = x(s, e);
    je(s, [o, a, at ? f : 0, e[3] ?? 0, e[4] ?? 0, e[5] ?? 0]);
  }), $.moments && $.moments.size > 0 && $.moments.forEach((e, s) => {
    je(s, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), Ce.forEach((e, s) => {
    if (e.every((a) => Math.abs(a) <= 1e-10)) return;
    const o = te(s);
    Le.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "FORCE"  LC "${me}"  FX ${r(y(e[0]))}  FY ${r(y(e[1]))}  FZ ${r(y(e[2]))}  MX ${r(c(e[3]))}  MY ${r(c(e[4]))}  MZ ${r(c(e[5]))}`);
  }), Le.length > 0 && (n.push("$ POINT OBJECT LOADS"), Le.forEach((e) => n.push(e)), n.push("")), h && h.size > 0 && Re.length > 0) {
    const e = [];
    for (const s of Re) {
      const o = ze.get(s.idx), a = o !== void 0 ? { value: o } : h.get(s.idx);
      if (!a || Math.abs(a.value) < 1e-12) continue;
      const f = a.dir ?? "GRAV", N = f === "GRAV" ? Math.abs(a.value) : a.value;
      e.push(`  AREALOAD  "${s.name}"  "${s.story}"  TYPE "UNIFF"  DIR "${f}"  LC "${a.pattern ?? me}"  FVAL ${r(C(N))}`);
    }
    e.length > 0 && (n.push("$ SHELL OBJECT LOADS"), e.forEach((s) => n.push(s)), n.push(""));
  }
  n.push("$ ANALYSIS OPTIONS"), n.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), n.push('  PDELTA  METHOD "NONE"  '), n.push(""), n.push("$ MASS SOURCE"), n.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), n.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), n.push(""), n.push("$ LOAD CASES");
  const ct = ((_f = S.loadCases) == null ? void 0 : _f.length) ? S.loadCases : oe.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of ct) {
    n.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const s of e.patterns ?? []) n.push(`  LOADCASE "${e.name}"  LOADPAT  "${s.pattern}"  SF ${s.scaleFactor} `);
  }
  n.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), n.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), n.push("");
  const De = S.loadCombinations;
  if (De && De.length) {
    n.push("$ LOAD COMBINATIONS");
    for (const e of De) {
      n.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const s of e.cases ?? []) n.push(`  COMBO "${e.name}"  LOADCASE  "${s.case}"  SF ${s.scaleFactor} `);
    }
    n.push("");
  }
  return n.push("  END"), n.push("$ END OF MODEL FILE"), n.join(`\r
`);
}
function Ve(S, i) {
  const I = S[i[0]], $ = S[i[1]], p = Math.abs($[2] - I[2]), R = Math.sqrt(($[0] - I[0]) ** 2 + ($[1] - I[1]) ** 2), F = p > R * 0.5;
  return F && R > 0.01 ? "BRACE" : F ? "COLUMN" : "BEAM";
}
export {
  It as a,
  $t as e,
  ut as p
};
