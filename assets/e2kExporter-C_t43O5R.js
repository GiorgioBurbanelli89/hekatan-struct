function P(l) {
  return l && parseFloat(l) || 0;
}
function ft(l) {
  const i = /* @__PURE__ */ new Map(), M = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let O;
  for (; (O = M.exec(l)) !== null; ) i.set(O[1], O[2] !== void 0 ? O[2] : O[3]);
  return i;
}
function Ut(l) {
  const i = l.split(/\r?\n/);
  return i.some((O) => O.trim().startsWith("TABLE:")) ? Dt(i) : Ct(i);
}
function Dt(l) {
  var _a, _b, _c, _d, _e, _f;
  const i = [];
  let M = "";
  for (const p of l) {
    const f = p.trimEnd();
    f.endsWith("_") ? M += f.slice(0, -1) + " " : (M += f, i.push(M), M = "");
  }
  M && i.push(M);
  const O = { force: "KN", length: "m" };
  let A = "UX,UY,UZ,RX,RY,RZ";
  const L = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), D = [], w = [], k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), K = [];
  let o = "";
  for (const p of i) {
    const f = p.trim();
    if (!f || f.startsWith(";") || f.startsWith("File ")) continue;
    if (f.startsWith("TABLE:")) {
      const S = f.match(/TABLE:\s+"(.+?)"/);
      o = S ? S[1].toUpperCase() : "";
      continue;
    }
    if (f === "END TABLE DATA") {
      o = "";
      continue;
    }
    const T = ft(f);
    switch (o) {
      case "PROGRAM CONTROL": {
        const S = T.get("CurrUnits");
        if (S) {
          const r = S.split(",").map((y) => y.trim());
          r[0] && (O.force = r[0]), r[1] && (O.length = r[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const S = T.get("Material");
        S && !L.has(S) && L.set(S, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const S = T.get("Material");
        if (S) {
          const r = L.get(S) || { E: 0, nu: 0, G: 0 };
          r.E = P(T.get("E1")), r.G = P(T.get("G12")), r.nu = P(T.get("U12")), r.density = P(T.get("UnitMass")), L.set(S, r);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const S = T.get("Material");
        S && L.has(S) && (L.get(S).fy = P(T.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const S = T.get("SectionName");
        S && Y.set(S, { material: T.get("Material") || "", shape: T.get("Shape") || "Rectangular", D: P(T.get("t3")), B: P(T.get("t2")), TF: P(T.get("tf")), TW: P(T.get("tw")), A: P(T.get("Area")), Iz: P(T.get("I33")), Iy: P(T.get("I22")), J: P(T.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const S = T.get("Section");
        S && J.set(S, { material: T.get("Material") || "", type: T.get("Type") || "Shell", thickness: P(T.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const S = T.get("Joint");
        if (S) {
          const r = P(T.get("XorR")), y = P(T.get("Y")), B = P(T.get("Z"));
          h.set(S, [r, y, B]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const S = T.get("Frame"), r = T.get("JointI"), y = T.get("JointJ");
        S && r && y && D.push({ name: S, j1: r, j2: y });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const S = T.get("Area");
        if (S) {
          const r = parseInt(T.get("NumJoints") || "4"), y = [];
          for (let B = 1; B <= r; B++) {
            const c = T.get(`Joint${B}`);
            c && y.push(c);
          }
          y.length >= 3 && w.push({ name: S, joints: y });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const S = T.get("Joint");
        if (S) {
          const r = [((_a = T.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = T.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = T.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = T.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = T.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = T.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          k.set(S, r);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const S = T.get("Frame"), r = T.get("AnalSect");
        S && r && H.set(S, r);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const S = T.get("Area"), r = T.get("Section");
        S && r && W.set(S, r);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const S = T.get("Joint");
        S && K.push({ joint: S, fx: P(T.get("F1")), fy: P(T.get("F2")), fz: P(T.get("F3")), mx: P(T.get("M1")), my: P(T.get("M2")), mz: P(T.get("M3")) });
        break;
      }
    }
  }
  return At(O, A, L, Y, J, h, D, w, k, H, W, K);
}
function Ct(l) {
  const i = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const O = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = [], h = [], D = /* @__PURE__ */ new Map(), w = [];
  let k = "", H = "";
  for (const o of l) {
    const p = o.trim();
    if (!p || p.startsWith(";")) continue;
    if (!o.startsWith(" ") && !o.startsWith("	")) {
      const S = p.toUpperCase();
      if (S === "END") break;
      S.startsWith("SHELL SECTION") ? k = "SHELL SECTION" : S.startsWith("FRAME SECTION") ? k = "FRAME SECTION" : k = S.split(/\s+/)[0];
      continue;
    }
    const f = ft(p), T = p.split(/\s+/);
    switch (k) {
      case "SYSTEM": {
        const S = f.get("DOF");
        S && (M = S);
        const r = f.get("LENGTH");
        r && (i.length = r);
        const y = f.get("FORCE");
        y && (i.force = y);
        break;
      }
      case "JOINT": {
        const S = T[0];
        Y.set(S, [P(f.get("X")), P(f.get("Y")), P(f.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const S = f.get("ADD"), r = f.get("DOF");
        if (S && r) {
          const y = r.split(","), B = [false, false, false, false, false, false];
          for (const c of y) {
            const s = c.toUpperCase();
            (s === "UX" || s === "U1") && (B[0] = true), (s === "UY" || s === "U2") && (B[1] = true), (s === "UZ" || s === "U3") && (B[2] = true), (s === "RX" || s === "R1") && (B[3] = true), (s === "RY" || s === "R2") && (B[4] = true), (s === "RZ" || s === "R3") && (B[5] = true);
          }
          D.set(S, B);
        }
        break;
      }
      case "MATERIAL": {
        const S = f.get("NAME");
        if (S) H = S, O.set(S, { E: 0, nu: 0, G: 0 });
        else if (H) {
          const r = O.get(H), y = f.get("E");
          y && (r.E = P(y));
          const B = f.get("U");
          B && (r.nu = P(B)), r.G = r.E / (2 * (1 + r.nu));
          const c = f.get("M");
          c && (r.density = P(c));
        }
        break;
      }
      case "SHELL": {
        const S = T[0], r = f.get("J");
        f.get("SEC"), r && h.push({ name: S, joints: r.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const S = f.get("NAME");
        S && L.set(S, { material: f.get("MAT") || "", type: f.get("TYPE") || "Shell", thickness: P(f.get("TH")) });
        break;
      }
      case "FRAME": {
        const S = T[0], r = f.get("J");
        if (r) {
          const y = r.split(",");
          y.length >= 2 && J.push({ name: S, j1: y[0], j2: y[1] });
        }
        break;
      }
      case "LOAD": {
        const S = f.get("ADD");
        S && w.push({ joint: S, fx: P(f.get("UX")), fy: P(f.get("UY")), fz: P(f.get("UZ")), mx: P(f.get("MX")), my: P(f.get("MY")), mz: P(f.get("MZ")) });
        break;
      }
    }
  }
  return At(i, M, O, A, L, Y, J, h, D, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), w);
}
function At(l, i, M, O, A, L, Y, J, h, D, w, k) {
  var _a;
  const H = [], W = /* @__PURE__ */ new Map(), K = [];
  for (const [s, $] of L) W.set(s, K.length), H.push(s), K.push($);
  const o = [], p = [], f = /* @__PURE__ */ new Map();
  for (const s of Y) {
    const $ = W.get(s.j1), I = W.get(s.j2);
    if ($ !== void 0 && I !== void 0) {
      const b = o.length;
      o.push([$, I]), p.push(s.name);
      const g = D.get(s.name);
      g && f.set(b, g);
    }
  }
  const T = o.length;
  for (const s of J) {
    const $ = s.joints.map((I) => W.get(I)).filter((I) => I !== void 0);
    if ($.length >= 3) {
      const I = o.length;
      o.push($), p.push(s.name);
      const b = w.get(s.name);
      b && f.set(I, b);
    }
  }
  const S = o.length - T, r = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, y = /* @__PURE__ */ new Map(), B = M.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let s = 0; s < o.length; s++) {
    const $ = f.get(s), I = $ ? O.get($) : null, b = $ ? A.get($) : null;
    if (I || o[s].length === 2) {
      const g = I || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, z = M.get(g.material) || B, _ = z.E || B.E, ee = z.nu || 0.3, le = z.G || _ / (2 * (1 + ee));
      r.elasticities.set(s, _), r.shearModuli.set(s, le), r.areas.set(s, g.A || g.D * g.B), r.momentsOfInertiaZ.set(s, g.Iz || g.B * g.D ** 3 / 12), r.momentsOfInertiaY.set(s, g.Iy || g.D * g.B ** 3 / 12), r.torsionalConstants.set(s, g.J || 0), r.densities.set(s, z.density || 0), ((_a = g.shape) == null ? void 0 : _a.includes("Wide Flange")) || g.shape === "I" ? y.set(s, { type: "I", b: g.B, h: g.D, name: $ || "I-section" }) : y.set(s, { type: "rect", b: g.B, h: g.D });
    } else if (b) {
      const g = M.get(b.material) || B, z = g.E || B.E, _ = g.nu || 0.2, ee = g.G || z / (2 * (1 + _));
      r.elasticities.set(s, z), r.shearModuli.set(s, ee), r.thicknesses.set(s, b.thickness), r.poissonsRatios.set(s, _), r.densities.set(s, g.density || 0);
    }
  }
  const c = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [s, $] of h) {
    const I = W.get(s);
    I !== void 0 && c.supports.set(I, $);
  }
  for (const s of k) {
    const $ = W.get(s.joint);
    if ($ !== void 0) {
      const I = c.forces.get($) || [0, 0, 0, 0, 0, 0];
      I[0] += s.fx, I[1] += s.fy, I[2] += s.fz, I[3] += s.mx, I[4] += s.my, I[5] += s.mz, c.forces.set($, I);
    }
  }
  return { units: l, dof: i, materials: M, frameSections: O, shellSections: A, nodes: K, nodeNames: H, nodeNameToIdx: W, elements: o, elementNames: p, elementSections: f, nodeInputs: c, elementInputs: r, sectionShapes: y, info: { nNodes: K.length, nFrames: T, nShells: S, title: `SAP2000 (${T} frames, ${S} shells)` } };
}
function wt(l) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: i, elements: M, nodeInputs: O, elementInputs: A } = l, L = { force: "KN", length: "m" };
  l.units && (l.units.force !== "KN" || l.units.length !== "m") && console.warn(`[s2k] el modelo va en kN\xB7m y el exportador NO convierte: se declara CurrUnits="KN, m, C" y se ignora "${l.units.force}, ${l.units.length}". Etiquetarlo de otra forma hace que SAP2000 lea las fuerzas escaladas.`);
  const Y = l.title || "Awatif Model", J = [], h = (c) => J.push(c), D = () => J.push(" ");
  h(`File ${Y}.$2k was saved on m/d/yy at h:mm:ss`), D(), h('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), h("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), D();
  const w = [], k = (c) => {
    var _a2, _b2, _c2, _d2;
    const s = ((_a2 = A.elasticities) == null ? void 0 : _a2.get(c)) || 0, $ = (_b2 = A.poissonsRatios) == null ? void 0 : _b2.get(c), I = ((_c2 = A.shearModuli) == null ? void 0 : _c2.get(c)) || 0, b = $ !== void 0 ? $ : s > 0 && I > 0 ? Math.max(0, Math.min(0.5, s / (2 * I) - 1)) : 0.2, g = I > 0 ? I : s > 0 ? s / (2 * (1 + b)) : 0, z = ((_d2 = A.densities) == null ? void 0 : _d2.get(c)) || 0;
    return { E: s, nu: b, G: g, rho: z, key: `MAT_${Math.round(s)}_n${b.toFixed(4)}` };
  }, H = [];
  if (M.forEach((c, s) => {
    c.length === 2 ? w.push(s) : H.push(s);
  }), w.length > 0) {
    h('TABLE:  "CONNECTIVITY - FRAME"');
    for (const c of w) {
      const s = M[c];
      h(`   Frame=${c + 1}   JointI=${s[0] + 1}   JointJ=${s[1] + 1}   IsCurved=No`);
    }
    D();
  }
  if (H.length > 0) {
    h('TABLE:  "CONNECTIVITY - AREA"');
    for (const c of H) {
      const s = M[c], $ = s.map((I, b) => `Joint${b + 1}=${I + 1}`).join("   ");
      h(`   Area=${c + 1}   NumJoints=${s.length}   ${$}`);
    }
    D();
  }
  h('TABLE:  "COORDINATE SYSTEMS"'), h("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), D(), h('TABLE:  "DATABASE FORMAT TYPES"'), h("   UnitsCurr=Yes   OverrideE=No"), D();
  const W = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
  for (const c of w) {
    const s = ((_a = A.areas) == null ? void 0 : _a.get(c)) || 0, $ = ((_b = A.momentsOfInertiaZ) == null ? void 0 : _b.get(c)) || 0, I = ((_c = A.momentsOfInertiaY) == null ? void 0 : _c.get(c)) || 0, b = ((_d = A.torsionalConstants) == null ? void 0 : _d.get(c)) || 0;
    (_e = A.elasticities) == null ? void 0 : _e.get(c);
    const g = k(c).key, z = ((_f = A.shearAreasZ) == null ? void 0 : _f.get(c)) ?? 0, _ = ((_g = A.shearAreasY) == null ? void 0 : _g.get(c)) ?? 0, ee = `A${s.toPrecision(6)}_Iz${$.toPrecision(6)}_s${z.toPrecision(6)}_${_.toPrecision(6)}`;
    if (!W.has(ee)) {
      let Se = 0.3, re = 0.3;
      s > 0 && $ > 0 && (Se = Math.sqrt(12 * $ / s), re = s / Se), W.set(ee, { A: s, Iz: $, Iy: I, J: b, b: re, h: Se, matKey: g, As2: z > 0 ? z : s * 5 / 6, As3: _ > 0 ? _ : s * 5 / 6 });
    }
    const le = [...W.keys()].indexOf(ee) + 1;
    K.set(c, `SEC${le}`);
  }
  if (w.length > 0) {
    h('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const c of w) {
      const s = K.get(c) || "SEC1";
      h(`   Frame=${c + 1}   AutoSelect=N.A.   AnalSect=${s}   MatProp=Default`);
    }
    D();
  }
  if (W.size > 0) {
    h('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let c = 0;
    for (const [, s] of W) c++, h(`   SectionName=SEC${c}   Material=${s.matKey}   Shape=General   t3=${C(s.h)}   t2=${C(s.b)}   Area=${C(s.A)}   TorsConst=${C(s.J)}   I33=${C(s.Iz)}   I22=${C(s.Iy)}   I23=0   AS2=${C(s.As2)}   AS3=${C(s.As3)} _`), h("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    D();
  }
  {
    const c = w.filter((s) => {
      var _a2;
      const $ = (_a2 = A.localAngles) == null ? void 0 : _a2.get(s);
      return $ !== void 0 && isFinite($) && Math.abs($) > 1e-9;
    });
    if (c.length > 0) {
      h('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const s of c) h(`   Frame=${s + 1}   Angle=${C(A.localAngles.get(s))}   AdvanceAxes=No`);
      D();
    }
  }
  {
    const c = A.endOffsets, s = w.filter(($) => {
      const I = c == null ? void 0 : c.get($);
      return !!I && (Math.abs(I[0]) > 1e-9 || Math.abs(I[1]) > 1e-9);
    });
    if (s.length > 0) {
      h('TABLE:  "FRAME OFFSET ALONG LENGTH ASSIGNMENTS"');
      for (const $ of s) {
        const I = c.get($);
        h(`   Frame=${$ + 1}   Type=User   LengthI=${C(I[0])}   LengthJ=${C(I[1])}   RigidFactor=${C(I.length > 2 ? I[2] : 0)}`);
      }
      D();
    }
  }
  const o = !!l.layeredSection && H.length > 0, p = l.layeredSection, f = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
  if (!o) for (const c of H) {
    const s = ((_h = A.thicknesses) == null ? void 0 : _h.get(c)) || 0.1;
    (_i = A.elasticities) == null ? void 0 : _i.get(c);
    const $ = k(c).key, I = ((_j = A.plateFormulations) == null ? void 0 : _j.get(c)) ?? 0, b = `t${s.toPrecision(6)}_f${I}`;
    f.has(b) || f.set(b, { t: s, matKey: $, formulacion: I });
    const g = [...f.keys()].indexOf(b) + 1;
    T.set(c, `SSEC${g}`);
  }
  if (H.length > 0) {
    h('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const c of H) {
      const s = o ? p.name : T.get(c) || "SSEC1";
      h(`   Area=${c + 1}   Section=${s}   MatProp=Default`);
    }
    if (D(), h('TABLE:  "AREA SECTION PROPERTIES"'), o) {
      const c = p, s = ((_k = c.layers[0]) == null ? void 0 : _k.material) || "MAT_DEFAULT";
      h(`   Section=${c.name}   Material=${s}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${C(c.totalThickness)}   BendThick=${C(c.totalThickness)}   Color=Magenta`);
    } else {
      let c = 0;
      for (const [, s] of f) {
        c++;
        const $ = s.formulacion === 2 ? "Membrane" : s.formulacion === 1 ? "Shell-Thin" : "Shell-Thick";
        h(`   Section=SSEC${c}   Material=${s.matKey}   MatAngle=0   AreaType=Shell   Type=${$}   DrillDOF=Yes   Thickness=${C(s.t)}   BendThick=${C(s.t)}   Color=Cyan`);
      }
    }
    if (D(), o) {
      h('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const c = p;
      for (const s of c.layers) {
        const $ = s.angle ?? 0, I = s.numIntPts ?? 3;
        h(`   Section=${c.name}   LayerName=${s.name}   Distance=${C(s.distance)}   Thickness=${C(s.thickness)}   Type=Shell   NumIntPts=${I}   Material=${s.material}   MatAngle=${C($ * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      D();
    }
  }
  h('TABLE:  "JOINT COORDINATES"');
  for (let c = 0; c < i.length; c++) {
    const s = i[c];
    h(`   Joint=${c + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${C(s[0])}   Y=${C(s[1])}   Z=${C(s[2])}   SpecialJt=No`);
  }
  if (D(), O.supports && O.supports.size > 0) {
    h('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [c, s] of O.supports) {
      if (!s.some((I) => I)) continue;
      const $ = (I) => I ? "Yes" : "No";
      h(`   Joint=${c + 1}   U1=${$(s[0])}   U2=${$(s[1])}   U3=${$(s[2])}   R1=${$(s[3])}   R2=${$(s[4])}   R3=${$(s[5])}`);
    }
    D();
  }
  const S = l.selfWtMult ?? 1;
  h('TABLE:  "LOAD PATTERN DEFINITIONS"'), h(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${S}`), D(), h('TABLE:  "LOAD CASE DEFINITIONS"'), h('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), D(), h('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), h('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), D();
  const r = O.loads;
  if (r && r.size > 0) {
    h('TABLE:  "JOINT LOADS - FORCE"');
    for (const [c, s] of r) s.some(($) => Math.abs($) > 1e-12) && h(`   Joint=${c + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${C(s[0])}   F2=${C(s[1])}   F3=${C(s[2])}   M1=${C(s[3])}   M2=${C(s[4])}   M3=${C(s[5])}`);
    D();
  }
  const y = A.frameLoads;
  if (y && y.size > 0) {
    h('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [c, s] of y) {
      const $ = M[c];
      if (!$ || $.length !== 2) continue;
      const I = i[$[0]], b = i[$[1]], g = Math.hypot(b[0] - I[0], b[1] - I[1], b[2] - I[2]);
      ["X", "Y", "Z"].forEach((z, _) => {
        Math.abs(s[_]) < 1e-12 || h(`   Frame=${c + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${z}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${C(g)}   FOverLA=${C(s[_])}   FOverLB=${C(s[_])}`);
      });
    }
    D();
  }
  const B = /* @__PURE__ */ new Map();
  for (let c = 0; c < M.length; c++) {
    const { E: s, nu: $, G: I, rho: b, key: g } = k(c);
    B.has(g) || B.set(g, { E: s, nu: $, G: I, rho: b });
  }
  h('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [c] of B) h(`   Material=${c}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  D(), h('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [c, s] of B) h(`   Material=${c}   UnitWeight=${C(s.rho * 9.81)}   UnitMass=${C(s.rho)}   E1=${C(s.E)}   G12=${C(s.G)}   U12=${C(s.nu)}   A1=9.9E-06`);
  D(), h('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [c] of B) h(`   Material=${c}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return D(), h('TABLE:  "PROGRAM CONTROL"'), h(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${L.force}, ${L.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), D(), h("END TABLE DATA"), h(""), J.join(`\r
`);
}
function C(l) {
  return l === 0 || Math.abs(l) < 1e-15 ? "0" : Math.abs(l) >= 1e6 || Math.abs(l) < 1e-3 && Math.abs(l) > 0 ? l.toExponential(8) : parseFloat(l.toPrecision(10)).toString();
}
function Pt(l, i, M = 0.05) {
  const O = i.map(([A, L]) => `${(+A).toFixed(4)} ${(+L).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${l}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${M}  SPECTYPE "USER"  `, `  FUNCTION "${l}"  TIMEVAL "${O}"  `];
}
function Ft(l) {
  const { name: i, func: M, modalCase: O = "Modal", sfX: A = 9.81, sfY: L = 9.81 } = l, Y = [`  LOADCASE "${i}"  TYPE  "Response Spectrum"  MODALCASE  "${O}"  `];
  return A && Y.push(`  LOADCASE "${i}"  ACCEL  "U1"  FUNC  "${M}"  SF  ${A}  `), L && Y.push(`  LOADCASE "${i}"  ACCEL  "U2"  FUNC  "${M}"  SF  ${L}  `), Y;
}
function Et(l) {
  const { name: i = "Modal", ritz: M = false, nModes: O = 12 } = l;
  return M ? [`  LOADCASE "${i}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${O} MINMODES  1 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${i}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${O} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function kt(l) {
  var _a;
  const i = (_a = l.e2kModel) == null ? void 0 : _a.rawSections;
  let M = i && i.size > 0 ? Yt(i, l.e2kModel) : Bt(l);
  return l.seismicNEC && (M = yt(M, l.seismicNEC)), M;
}
function yt(l, i) {
  const M = l.includes(`\r
`) ? `\r
` : `
`, O = l.split(/\r?\n/), A = i.name ?? "NEC", L = Pt(A, i.points, i.dampRatio ?? 0.05), Y = i.modalCase ?? "Modal", J = Ft({ name: i.caseName ?? "Sismo NEC", func: A, modalCase: Y, sfX: i.sfX, sfY: i.sfY });
  let h = [];
  const D = (w) => O.some((k) => w.test(k));
  if (i.modal) {
    const w = new RegExp(`^\\s*LOADCASE\\s+"${Y}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let k = O.length - 1; k >= 0; k--) w.test(O[k]) && O.splice(k, 1);
    h = Et({ name: Y, ritz: !!i.modal.ritz, nModes: i.modal.nModes });
  } else D(new RegExp(`LOADCASE\\s+"${Y}"\\s+TYPE\\s+"Modal`)) || (h = Et({ name: Y }));
  return lt(O, "FUNCTIONS", L), lt(O, "LOAD CASES", [...h, ...J]), O.join(M);
}
function lt(l, i, M) {
  const O = l.findIndex((Y) => Y.trim() === `$ ${i}`);
  if (O >= 0) {
    l.splice(O + 1, 0, ...M);
    return;
  }
  const A = l.findIndex((Y) => Y.trim() === "END"), L = A >= 0 ? A : l.length;
  l.splice(L, 0, `$ ${i}`, ...M, "");
}
function Yt(l, i) {
  const M = [], O = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  M.push("$ File exported from Hekatan Struct Lineal (round-trip)"), M.push("");
  for (const A of O) {
    const L = l.get(A);
    if (!(!L || L.length === 0)) {
      M.push(`$ ${A}`);
      for (const Y of L) M.push(Y);
      M.push("");
    }
  }
  for (const [A, L] of l) if (!O.includes(A) && L.length !== 0) {
    M.push(`$ ${A}`);
    for (const Y of L) M.push(Y);
    M.push("");
  }
  return M.push("  END"), M.push("$ END OF MODEL FILE"), M.join(`\r
`);
}
function Bt(l) {
  var _a, _b, _c, _d, _e2, _f;
  const { nodes: i, elements: M, nodeInputs: O, elementInputs: A, title: L, units: Y } = l, J = l.shellLoads ?? A.shellSurfaceLoads;
  let h;
  J instanceof Map && (h = /* @__PURE__ */ new Map(), J.forEach((e, t) => {
    h.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const D = l.shellAngles ?? A.shellAngles, w = A.cargaDeArea, k = !!(h && h.size > 0), H = (e, t) => [t[0], t[1], t[2] - (k ? (w == null ? void 0 : w.get(e)) ?? 0 : 0)], W = "N", K = "MM", o = [], p = (e) => Math.round(e * 1e4) / 1e4, f = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), T = 1e3, S = 1e3, r = (e) => e * S, y = (e) => e * T, B = (e) => e * T, c = (e) => e * T * S, s = (e) => e * T / S ** 2, $ = (e) => e * T / S ** 3, I = /* @__PURE__ */ new Date(), b = `${I.getMonth() + 1}/${I.getDate()}/${I.getFullYear()}  ${I.getHours()}:${String(I.getMinutes()).padStart(2, "0")}:${String(I.getSeconds()).padStart(2, "0")}`;
  o.push(`$ File   "Hekatan_export.e2k"  saved ${b} in ETABS 22.6.0`), o.push(""), o.push("$ PROGRAM INFORMATION"), o.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), o.push(""), o.push("$ CONTROLS"), o.push(`  UNITS  "${W}"  "${K}"  "C"  `), o.push('  TITLE1  "Hekatan Struct Lineal export"  '), L && o.push(`  TITLE2  "${L}"  `), o.push("  PREFERENCE  MERGETOL 0.001"), o.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), o.push("");
  const g = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  i.forEach((e) => {
    g.add(p(e[0])), z.add(p(e[1]));
  });
  const _ = [...g].sort((e, t) => e - t), ee = [...z].sort((e, t) => e - t);
  o.push("$ GRIDS"), o.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), _.forEach((e, t) => {
    const n = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    o.push(`  GRID "G1"  LABEL "${n}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), ee.forEach((e, t) => {
    o.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), o.push("");
  const le = 3, Se = 0.5, re = /* @__PURE__ */ new Map();
  i.forEach((e) => {
    const t = p(e[2]);
    re.set(t, (re.get(t) ?? 0) + 1);
  });
  const ke = /* @__PURE__ */ new Set();
  i.forEach((e) => ke.add(p(e[2])));
  const Q = [...ke].sort((e, t) => e - t);
  let U = Q.filter((e) => (re.get(e) ?? 0) >= le);
  if (U.length > 1) {
    const e = [U[0]];
    for (const t of U.slice(1)) t - e[e.length - 1] < Se ? e[e.length - 1] = t : e.push(t);
    U = e;
  }
  U.length || (U = [Q[0], Q[Q.length - 1]]), U[0] !== Q[0] && U.unshift(Q[0]), U[U.length - 1] !== Q[Q.length - 1] && U.push(Q[Q.length - 1]);
  const te = [], Ee = /* @__PURE__ */ new Map();
  te.push("Base"), Ee.set(U[0], "Base");
  for (let e = 1; e < U.length; e++) {
    const t = `Level_${e}`;
    te.push(t), Ee.set(U[e], t);
  }
  const xe = (e) => {
    const t = p(e);
    if (Ee.has(t)) return { story: Ee.get(t), dz: 0 };
    for (let a = 0; a < U.length; a++) if (U[a] >= t) return { story: Ee.get(U[a]), dz: p(U[a] - t) };
    const n = U[U.length - 1];
    return { story: Ee.get(n), dz: p(n - t) };
  };
  o.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = U.length - 1; e >= 1; e--) o.push(`  STORY "${te[e]}"  HEIGHT ${p(r(U[e] - U[e - 1]))} MASTERSTORY "Yes"  `);
  U.length > 0 && o.push(`  STORY "Base"  ELEV ${U[0]} `), o.push(""), M.some((e) => e.length === 4), o.push("$ DIAPHRAGM NAMES"), o.push('  DIAPHRAGM "D1"    TYPE RIGID'), o.push(""), o.push("$ MATERIAL PROPERTIES");
  const He = /* @__PURE__ */ new Set();
  (_a = A.elasticities) == null ? void 0 : _a.forEach((e) => He.add(e));
  const Te = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map();
  let pt = 0, ht = 0;
  const Tt = 980665e-8, We = /* @__PURE__ */ new Map();
  if (A.densities && A.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    A.densities.forEach((t, n) => {
      var _a2;
      const a = (_a2 = A.elasticities) == null ? void 0 : _a2.get(n);
      a !== void 0 && (e.has(a) || e.set(a, []), e.get(a).push(t));
    }), e.forEach((t, n) => {
      const a = t.reduce((u, N) => u + N, 0) / t.length, E = a > 100 ? a * Tt : a * 9.80665;
      We.set(n, E);
    });
  }
  for (const e of He) {
    const t = e >= 1e8, n = t ? `Steel_${++pt}` : `Conc_${++ht}`;
    Te.set(e, n), Re.set(e, t);
    const a = We.get(e) ?? (t ? 76.97 : 24), E = s(e), u = $(a), N = (() => {
      var _a2;
      const x = l.elementInputs.poissonsRatios;
      if (x) {
        for (const [m, F] of x) if ((((_a2 = l.elementInputs.elasticities) == null ? void 0 : _a2.get(m)) ?? 0) === e) return F;
      }
    })(), d = N !== void 0 ? N : t ? 0.3 : 0.2, R = t ? 117e-7 : 1e-5;
    if (t) {
      o.push(`  MATERIAL  "${n}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${f(u)}`), o.push(`  MATERIAL  "${n}"    SYMTYPE "Isotropic"  E ${p(E)}  U ${d}  A ${R}`);
      const x = 345e3, m = 45e4;
      o.push(`  MATERIAL  "${n}"  FY ${p(s(x))}  FU ${p(s(m))}  FYE ${p(s(x * 1.1))}  FUE ${p(s(m * 1.1))}`);
    } else o.push(`  MATERIAL  "${n}"    TYPE "Concrete"    WEIGHTPERVOLUME ${f(u)}`), o.push(`  MATERIAL  "${n}"    SYMTYPE "Isotropic"  E ${p(E)}  U ${d}  A ${R}`), o.push(`  MATERIAL  "${n}"    FC ${p(s(24e3))}`);
  }
  o.push(""), o.push("$ FRAME SECTIONS");
  const ue = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), se = 0.05;
  M.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g, _h, _i, _j;
    if (e.length !== 2) return;
    const n = (_a2 = A.sectionShapes) == null ? void 0 : _a2.get(t), a = ((_b2 = A.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, E = Te.get(a) || "Conc_1", u = Re.get(a) ?? a >= 1e8, N = ((_c2 = A.areas) == null ? void 0 : _c2.get(t)) ?? 0, d = ((_d2 = A.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, R = ((_e3 = A.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, x = ((_f2 = A.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let m = (n == null ? void 0 : n.type) || "rect", F = (n == null ? void 0 : n.h) ?? 0, G = (n == null ? void 0 : n.b) ?? 0, v = (n == null ? void 0 : n.d) ?? 0;
    const Z = (n == null ? void 0 : n.tf) ?? 0, ae = (n == null ? void 0 : n.tw) ?? 0;
    if (!n && F <= 0 && G <= 0 && v <= 0 && N > 0 && d > 0 && R > 0) {
      const q = (_g = A.cantos) == null ? void 0 : _g.get(t), he = (_h = A.anchos) == null ? void 0 : _h.get(t);
      F = q && q > 0 ? q : Math.sqrt(12 * d / N), G = he && he > 0 ? he : N / F, (!isFinite(F) || F < se) && (F = se), (!isFinite(G) || G < se) && (G = se), m = "general";
    } else F <= 0 && G <= 0 && v <= 0 && N > 0 && (d > 0 ? (F = Math.sqrt(12 * d / N), G = N / F) : F = G = Math.sqrt(N), (!isFinite(F) || F < se) && (F = se), (!isFinite(G) || G < se) && (G = se), m = "rect");
    F <= 0 && G <= 0 && v <= 0 && (F = 0.3, G = 0.3, m = "rect");
    const ge = (n == null ? void 0 : n.name) ? `NAME_${n.name}` : `${m}_${p(F)}_${p(G)}_${p(v)}_${p(Z)}_${p(ae)}_${E}`;
    (n == null ? void 0 : n.name) && !$e.has(ge) && $e.set(ge, n.name);
    let X = $e.get(ge);
    if (!X) {
      const q = u ? "S" : "C";
      m === "general" ? X = `${q}_G${ue.size + 1}` : m === "rect" ? X = `${q}_R${Math.round(G * 100)}x${Math.round(F * 100)}` : m === "circ" ? X = `${q}_C_D${Math.round(v * 100)}` : m === "I" ? X = `${q}_I${Math.round(F * 100)}x${Math.round(G * 100)}` : m === "HSS" ? X = `${q}_HSS${Math.round(G * 100)}x${Math.round(F * 100)}x${Math.round(ae * 1e3)}` : X = `${q}_Sec${ue.size + 1}`, $e.set(ge, X);
    }
    if (Le.set(t, X), ue.has(X)) return;
    ue.add(X);
    const Lt = N > 0 && d > 0 && R > 0;
    let V;
    m === "general" || Lt ? V = "General" : m === "I" ? V = "Steel I/Wide Flange" : m === "HSS" ? V = "Steel Tube" : m === "CFT" ? V = "Filled Steel Tube" : m === "pipe" ? V = "Steel Pipe" : m === "L" ? V = "Steel Angle" : m === "C" ? V = "Steel Channel" : m === "2C" ? V = "Steel Double Channel" : m === "circ" ? V = "Concrete Circle" : V = "Concrete Rectangular";
    let ce = `  FRAMESECTION  "${X}"  MATERIAL "${E}"  SHAPE "${V}"`;
    if (V === "General") {
      const q = ((_i = A.shearAreasZ) == null ? void 0 : _i.get(t)) || N * 5 / 6, he = ((_j = A.shearAreasY) == null ? void 0 : _j.get(t)) || N * 5 / 6;
      ce += `  D ${p(r(F))} B ${p(r(G))} AREA ${f(N * 1e6)} AS2 ${f(q * 1e6)} AS3 ${f(he * 1e6)} I33 ${f(d * 1e12)} I22 ${f(R * 1e12)} TORSION ${f((x || d + R) * 1e12)} S33POS ${f(2 * d / F * 1e9)} S33NEG ${f(2 * d / F * 1e9)} S22POS ${f(2 * R / G * 1e9)} S22NEG ${f(2 * R / G * 1e9)} Z33 ${f(2 * d / F * 1e9)} Z22 ${f(2 * R / G * 1e9)} R33 ${f(Math.sqrt(d / N) * 1e3)} R22 ${f(Math.sqrt(R / N) * 1e3)} `, o.push(ce);
      return;
    }
    F && (ce += `  D ${p(r(F))}`), G && (ce += `  B ${p(r(G))}`), v && !F && (ce += `  D ${p(r(v))}`), Z && (ce += `  TF ${p(r(Z))}`), ae && (ce += `  TW ${p(r(ae))}`), o.push(ce);
  }), o.push("");
  const Ie = /* @__PURE__ */ new Map();
  let ut = 0;
  i.forEach((e) => {
    const { dz: t } = xe(e[2]), n = `${p(e[0])},${p(e[1])},${t}`;
    Ie.has(n) || Ie.set(n, `${++ut}`);
  }), o.push("$ POINT COORDINATES");
  for (const [e, t] of Ie) {
    const [n, a, E] = e.split(",").map(Number);
    o.push(E ? `  POINT "${t}"  ${p(r(n))} ${p(r(a))} ${p(r(E))} ` : `  POINT "${t}"  ${p(r(n))} ${p(r(a))} `);
  }
  o.push("");
  const ne = (e) => {
    const t = i[e], { story: n, dz: a } = xe(t[2]), E = `${p(t[0])},${p(t[1])},${a}`;
    return { pt: Ie.get(E) || "1", story: n };
  }, ze = (e) => {
    var _a2, _b2, _c2, _d2, _e3, _f2;
    const t = [], n = (_a2 = l.propertyModifiers) == null ? void 0 : _a2.get(e);
    n && n.some((m) => Math.abs(m - 1) > 1e-9) && t.push(`PROPMODIFIERS "${n.map((m) => p(m)).join(" ")}"`);
    const a = (_b2 = A.localAngles) == null ? void 0 : _b2.get(e);
    a !== void 0 && isFinite(a) && Math.abs(a) > 1e-9 && t.push(`ANG ${p(a)}`);
    const E = (_c2 = A.momentReleases) == null ? void 0 : _c2.get(e);
    if (E && E.some((m) => m)) {
      const m = [];
      E.length === 12 ? (E[0] && m.push("PI"), E[1] && m.push("V2I"), E[2] && m.push("V3I"), E[3] && m.push("TI"), E[4] && m.push("M2I"), E[5] && m.push("M3I"), E[6] && m.push("PJ"), E[7] && m.push("V2J"), E[8] && m.push("V3J"), E[9] && m.push("TJ"), E[10] && m.push("M2J"), E[11] && m.push("M3J")) : E.length === 6 && (E[0] && m.push("TI"), E[1] && m.push("M2I"), E[2] && m.push("M3I"), E[3] && m.push("TJ"), E[4] && m.push("M2J"), E[5] && m.push("M3J")), m.length > 0 && t.push(`RELEASE "${m.join(" ")}"`);
    }
    const u = (_d2 = A.insertionPoints) == null ? void 0 : _d2.get(e);
    u && (Math.abs(u[0]) > 1e-9 || Math.abs(u[1]) > 1e-9) && t.push(`LATEROFFSET ${p(r(u[0]))} TRANSOFFSET ${p(r(u[1]))}`);
    const N = (_e3 = A.rigidOffsets) == null ? void 0 : _e3.get(e), d = (_f2 = A.endOffsets) == null ? void 0 : _f2.get(e), R = d ? [d[0], d[1]] : N, x = d && d.length > 2 ? d[2] : 0;
    return R && (Math.abs(R[0]) > 1e-9 || Math.abs(R[1]) > 1e-9) && t.push(`LENGTHOFFI ${p(R[0])} LENGTHOFFJ ${p(R[1])} RIGIDZONE ${p(x)}`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, De = [], Je = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
  M.forEach((e, t) => {
    if (e.length !== 2) return;
    const n = St(i, e);
    if (n === "BEAM") return;
    const a = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], E = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    if (Math.abs(i[a][0] - i[E][0]) > 1e-6 || Math.abs(i[a][1] - i[E][1]) > 1e-6) return;
    const u = ne(a), N = Le.get(t) || `Sec_${t}`, d = `${u.pt}_${N}_${n}`;
    Me.has(d) || Me.set(d, []), Me.get(d).push({ i: t, bot: a, top: E, zBot: p(i[a][2]), zTop: p(i[E][2]), planPt: u.pt, secName: N, type: n });
  }), Me.forEach((e, t) => {
    e.sort((a, E) => a.zBot - E.zBot);
    let n = 0;
    for (let a = 1; a <= e.length; a++) if (a === e.length || Math.abs(e[a].zBot - e[a - 1].zTop) > 1e-6) {
      const u = e.slice(n, a);
      u.length >= 1 && (De.push({ elemIndices: u.map((N) => N.i), planPt: u[0].planPt, bottomNodeIdx: u[0].bot, topNodeIdx: u[u.length - 1].top, secName: u[0].secName, type: u[0].type, nSegments: u.length }), u.forEach((N) => Je.add(N.i))), n = a;
    }
  }), o.push("$ LINE CONNECTIVITIES");
  const ve = [], _e = (e) => te.indexOf(e), je = (e, t, n, a, E, u, N) => {
    const d = ne(a), R = ne(n), x = _e(d.story) - _e(R.story);
    x <= 0 ? o.push(`  LINE  "${e}"  BEAM  "${R.pt}"  "${d.pt}"  0`) : o.push(`  LINE  "${e}"  ${t}  "${R.pt}"  "${d.pt}"  ${x}`), ve.push(`  LINEASSIGN  "${e}"  "${d.story}"  SECTION "${E}" ${u} MINNUMSTA ${N} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  De.forEach((e, t) => {
    const n = ze(e.elemIndices[0]);
    je(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, n, e.nSegments);
  }), M.forEach((e, t) => {
    if (e.length !== 2 || Je.has(t)) return;
    const n = St(i, e), a = Le.get(t) || `Sec_${t}`, E = ze(t), u = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], N = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    je(`E${t + 1}`, n === "BEAM" ? "BRACE" : n, u, N, a, E, 3);
  }), o.push("");
  const fe = l.weightMode ?? "auto", Ae = /* @__PURE__ */ new Set();
  o.push("$ POINT ASSIGNS"), (_b = O.supports) == null ? void 0 : _b.forEach((e, t) => {
    const n = [];
    if (e[0] && n.push("UX"), e[1] && n.push("UY"), e[2] && n.push("UZ"), e[3] && n.push("RX"), e[4] && n.push("RY"), e[5] && n.push("RZ"), n.length > 0) {
      const a = ne(t), E = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      o.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${n.join(" ")}" ${E} `), Ae.add(`${a.pt}@${a.story}`);
    }
  });
  const Ke = (l.diaphragm ?? "auto") !== "none";
  Ke && De.forEach((e) => {
    const t = ne(e.topNodeIdx), n = `${t.pt}@${t.story}`;
    !Ae.has(n) && t.story !== "Base" && (o.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), Ae.add(n));
  }), fe === "manual" && O.loads && O.loads.forEach((e, t) => {
    const [n, a, E] = H(t, e);
    if (Math.abs(n) < 1e-10 && Math.abs(a) < 1e-10 && Math.abs(E) < 1e-10) return;
    const u = ne(t), N = `${u.pt}@${u.story}`;
    Ae.has(N) || (o.push(`  POINTASSIGN  "${u.pt}"  "${u.story}"  DIAPH "DISCONNECTED"  `), Ae.add(N));
  }), o.push(""), o.push("$ LINE ASSIGNS"), ve.forEach((e) => o.push(e)), o.push("");
  const j = [], Ze = A.areaObjects, Xe = /* @__PURE__ */ new Set(), Ve = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map();
  Ze == null ? void 0 : Ze.forEach((e) => e.cells.forEach((t) => Xe.add(t))), M.forEach((e, t) => {
    if (e.length === 4 || e.length === 3) {
      const n = i[e[0]], a = i[e[1]], E = i[e[2]], u = [a[0] - n[0], a[1] - n[1], a[2] - n[2]], N = [E[0] - n[0], E[1] - n[1], E[2] - n[2]], d = u[1] * N[2] - u[2] * N[1], R = u[2] * N[0] - u[0] * N[2], x = u[0] * N[1] - u[1] * N[0], m = Math.sqrt(d * d + R * R + x * x), F = m > 1e-10 && Math.abs(x) / m < 0.5;
      j.push({ idx: t, el: e, isWall: F }), Xe.has(t) && j.pop();
    }
  });
  const oe = (() => {
    for (const [e, t] of Re) if (!t) return Te.get(e);
    return Te.values().next().value || "Conc_1";
  })();
  Ze == null ? void 0 : Ze.forEach((e, t) => {
    j.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && Ve.set(e.cells[0], e.q), e.ang !== void 0 && qe.set(e.cells[0], e.ang);
  });
  const Ce = "DECK";
  let Pe = false;
  const Fe = [], Qe = (e) => {
    const t = l.elementInputs.plateFormulations, n = j.find((E) => E.isWall === e), a = t && n ? t.get(n.idx) : void 0;
    return a === 2 ? "Membrane" : a === 1 ? "ShellThin" : "ShellThick";
  }, et = (e, t) => {
    const n = l.elementInputs.thicknesses, a = j.find((E) => E.isWall === e);
    return (a ? n == null ? void 0 : n.get(a.idx) : void 0) ?? (n == null ? void 0 : n.values().next().value) ?? t;
  }, tt = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], de = (e) => {
    var _a2;
    const n = (_a2 = A.shellModifiers) == null ? void 0 : _a2.get(e);
    if (n && n.length >= 8) return n.slice(0, 8);
    const a = A.membraneModifiers, E = A.bendingModifiers, u = a == null ? void 0 : a.get(e), N = E == null ? void 0 : E.get(e);
    if (u === void 0 && N === void 0) return null;
    const d = u ?? 1, R = N ?? 1;
    return [d, d, d, R, R, R, R, R];
  }, st = (e, t) => {
    const n = j.filter((N) => N.isWall === t), a = /* @__PURE__ */ new Map();
    for (const N of n) {
      const d = de(N.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      a.set(d.map((R) => p(R)).join(","), d);
    }
    if (a.size === 0) return "";
    a.size > 1 && console.warn(`[e2k] "${e}": ${a.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const E = a.values().next().value, u = tt.map((N, d) => Math.abs(E[d] - 1) > 1e-9 ? `${N} ${p(E[d])}` : "").filter(Boolean);
    return u.length ? `  SHELLPROP  "${e}"  ${u.join(" ")} ` : "";
  }, nt = l.elementInputs.thicknesses, ot = l.elementInputs.plateFormulations, pe = (e) => {
    const t = nt == null ? void 0 : nt.get(e.idx), n = ot == null ? void 0 : ot.get(e.idx), a = de(e.idx);
    return `${e.isWall ? "W" : "F"}|${t ?? "-"}|${n ?? "-"}|${a ? a.map((E) => p(E)).join(",") : "-"}`;
  }, ye = (e) => {
    const t = de(e);
    return t ? Math.abs(t[3]) < 1e-9 && Math.abs(t[4]) < 1e-9 : false;
  }, me = /* @__PURE__ */ new Map();
  let $t = 0, It = 0, Mt = 0;
  for (const e of j) {
    const t = pe(e);
    if (me.has(t)) continue;
    const n = e.isWall, a = !n && ye(e.idx), E = n ? ++It : a ? ++Mt : ++$t;
    me.set(t, { nombre: (n ? "Muro" : a ? Ce : "Losa") + (E === 1 ? "" : String(E)), isWall: n, mem: a, t: nt == null ? void 0 : nt.get(e.idx), pf: ot == null ? void 0 : ot.get(e.idx) });
  }
  const Oe = (e) => {
    var _a2;
    return ((_a2 = me.get(pe(e))) == null ? void 0 : _a2.nombre) ?? (e.isWall ? "Muro" : "Losa");
  }, at = (e) => e === 2 ? "Membrane" : e === 1 ? "ShellThin" : "ShellThick", dt = (e, t) => {
    const n = j.find((u) => pe(u) === t), a = n ? de(n.idx) ?? null : null;
    if (!a) return "";
    const E = tt.map((u, N) => Math.abs(a[N] - 1) > 1e-9 ? `${u} ${p(a[N])}` : "").filter(Boolean);
    return E.length ? `  SHELLPROP  "${e}"  ${E.join(" ")} ` : "";
  }, Ne = j.find((e) => !e.isWall), ct = j.find((e) => e.isWall), Ye = /* @__PURE__ */ new Set();
  Ne && Ye.add(pe(Ne)), ct && Ye.add(pe(ct));
  const it = [...me.entries()].filter(([e]) => !Ye.has(e));
  if (j.some((e) => !e.isWall)) {
    Pe = !!Ne && ye(Ne.idx);
    const e = et(false, 0.15);
    if (Pe) {
      o.push("$ DECK PROPERTIES");
      const n = (a) => f(r(a));
      o.push(`  SHELLPROP  "${Ce}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${oe}"  DECKMATERIAL "${oe}"  DECKSLABDEPTH ${n(e * 65 / 120)} DECKRIBDEPTH ${n(e * 55 / 120)} DECKRIBWIDTHTOP ${n(e * 150 / 120)} DECKRIBWIDTHBOTTOM ${n(e * 100 / 120)} DECKRIBSPACING ${n(e * 200 / 120)} DECKSHEARTHICKNESS ${n(e * 0.76 / 120)} DECKUNITWEIGHT ${f(y(0.11012))} SHEARSTUDDIAM ${n(e * 19 / 120)} SHEARSTUDHEIGHT ${n(e * 100 / 120)} SHEARSTUDFU 400 `);
    } else o.push("$ SLAB PROPERTIES"), o.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${oe}"  MODELINGTYPE "${Qe(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${p(r(e))} `);
    const t = st(Pe ? Ce : "Losa", false);
    t && o.push(t), o.push("");
  }
  if (j.some((e) => e.isWall)) {
    o.push("$ WALL PROPERTIES");
    const e = et(true, 0.2), t = Qe(true);
    o.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${oe}"  MODELINGTYPE "${t}"  WALLTHICKNESS ${p(r(e))} `);
    const n = st("Muro", true);
    n && o.push(n), o.push("");
  }
  if (it.length) {
    o.push("$ OTRAS SECCIONES DE CASCARA");
    for (const [e, t] of it) {
      const n = t.t ?? (t.isWall ? 0.2 : 0.15), a = (u) => f(r(u));
      o.push(t.isWall ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Wall"  MATERIAL "${oe}"  MODELINGTYPE "${at(t.pf)}"  WALLTHICKNESS ${p(r(n))} ` : t.mem ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${oe}"  DECKMATERIAL "${oe}"  DECKSLABDEPTH ${a(n * 65 / 120)} DECKRIBDEPTH ${a(n * 55 / 120)} DECKRIBWIDTHTOP ${a(n * 150 / 120)} DECKRIBWIDTHBOTTOM ${a(n * 100 / 120)} DECKRIBSPACING ${a(n * 200 / 120)} DECKSHEARTHICKNESS ${a(n * 0.76 / 120)} DECKUNITWEIGHT ${f(y(0.11012))} SHEARSTUDDIAM ${a(n * 19 / 120)} SHEARSTUDHEIGHT ${a(n * 100 / 120)} SHEARSTUDFU 400 ` : `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Slab"  MATERIAL "${oe}"  MODELINGTYPE "${at(t.pf)}"  SLABTYPE "Slab"  SLABTHICKNESS ${p(r(n))} `);
      const E = dt(t.nombre, e);
      E && o.push(E);
    }
    o.push("");
  }
  if (j.length > 0) {
    o.push("$ AREA CONNECTIVITIES");
    const e = [];
    j.forEach((t, n) => {
      const { el: a, isWall: E } = t, u = E ? `W${n + 1}` : `F${n + 1}`, N = E ? "PANEL" : "FLOOR", d = a.map((R) => ne(R));
      if (E) {
        const R = (v) => te.indexOf(v);
        if (new Set(d.map((v) => v.pt)).size === 4) {
          const v = Math.max(...d.map((ae) => R(ae.story))), Z = d.map((ae) => v - R(ae.story));
          o.push(`  AREA "${u}"  ${N}  4  "${d[0].pt}"  "${d[1].pt}"  "${d[2].pt}"  "${d[3].pt}"  ${Z.join("  ")}  `), e.push(`  AREAASSIGN  "${u}"  "${te[v]}"  SECTION "${Oe(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const m = i[a[0]][2] <= i[a[2]][2] ? 0 : 2, F = i[a[1]][2] <= i[a[3]][2] ? 1 : 3;
        o.push(`  AREA "${u}"  ${N}  4  "${d[m].pt}"  "${d[F].pt}"  "${d[F].pt}"  "${d[m].pt}"  1  1  0  0  `);
        const G = d[m === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${u}"  "${G}"  SECTION "${Oe(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        const R = d.length, x = (Z) => te.indexOf(Z), m = Math.max(...d.map((Z) => x(Z.story))), F = d.map((Z) => m - x(Z.story)), G = te[m] ?? d[0].story;
        o.push(`  AREA "${u}"  ${N}  ${R}  ` + d.map((Z) => `"${Z.pt}"`).join("  ") + "  " + F.join("  ") + "  ");
        const v = qe.get(t.idx) ?? (D == null ? void 0 : D.get(t.idx));
        e.push(ye(t.idx) ? `  AREAASSIGN  "${u}"  "${G}"  SECTION "${Oe(t)}"  ANG ${p(v ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${u}"  "${G}"  SECTION "${Oe(t)}" ${Ke ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Fe.push({ name: u, story: G, idx: t.idx });
      }
    }), o.push(""), o.push("$ AREA ASSIGNS"), e.forEach((t) => o.push(t)), o.push("");
  }
  const mt = fe === "manual" ? 0 : 1;
  o.push("$ LOAD PATTERNS");
  const ie = ((_c = l.loadPatterns) == null ? void 0 : _c.length) ? l.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: mt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of ie) {
    let t;
    e.type === "Dead" ? t = fe === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), o.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  o.push("");
  const Be = l.loadPatternDestino && ie.some((e) => e.name === l.loadPatternDestino) ? l.loadPatternDestino : ((_d = ie.find((e) => e.type === "Dead")) == null ? void 0 : _d.name) ?? ie[0].name, Ge = [], be = /* @__PURE__ */ new Map(), rt = (e, t) => {
    const n = be.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let a = 0; a < 6; a++) n[a] += t[a] ?? 0;
    be.set(e, n);
  }, Ot = Be === (((_e2 = ie.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? ie[0].name), Nt = fe === "manual" || !Ot;
  if (O.loads && O.loads.size > 0 && O.loads.forEach((e, t) => {
    const [n, a, E] = H(t, e);
    rt(t, [n, a, Nt ? E : 0, e[3] ?? 0, e[4] ?? 0, e[5] ?? 0]);
  }), O.moments && O.moments.size > 0 && O.moments.forEach((e, t) => {
    rt(t, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), be.forEach((e, t) => {
    if (e.every((a) => Math.abs(a) <= 1e-10)) return;
    const n = ne(t);
    Ge.push(`  POINTLOAD  "${n.pt}"  "${n.story}"  TYPE "FORCE"  LC "${Be}"  FX ${f(B(e[0]))}  FY ${f(B(e[1]))}  FZ ${f(B(e[2]))}  MX ${f(c(e[3]))}  MY ${f(c(e[4]))}  MZ ${f(c(e[5]))}`);
  }), Ge.length > 0 && (o.push("$ POINT OBJECT LOADS"), Ge.forEach((e) => o.push(e)), o.push("")), h && h.size > 0 && Fe.length > 0) {
    const e = [];
    for (const t of Fe) {
      const n = Ve.get(t.idx), a = n !== void 0 ? { value: n } : h.get(t.idx);
      if (!a || Math.abs(a.value) < 1e-12) continue;
      const E = a.dir ?? "GRAV", u = E === "GRAV" ? Math.abs(a.value) : a.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${E}"  LC "${a.pattern ?? Be}"  FVAL ${f(y(u))}`);
    }
    e.length > 0 && (o.push("$ SHELL OBJECT LOADS"), e.forEach((t) => o.push(t)), o.push(""));
  }
  o.push("$ ANALYSIS OPTIONS"), o.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), o.push('  PDELTA  METHOD "NONE"  '), o.push("");
  const Ue = fe === "manual";
  o.push("$ MASS SOURCE"), o.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${Ue ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${Ue ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), Ue || o.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), o.push(""), o.push("$ LOAD CASES");
  const gt = ((_f = l.loadCases) == null ? void 0 : _f.length) ? l.loadCases : ie.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of gt) {
    o.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) o.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  const Rt = l.modalModes ?? 12;
  o.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), o.push(`  LOADCASE "Modal"  MAXMODES ${Rt}  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `), o.push("");
  const we = l.loadCombinations;
  if (we && we.length) {
    o.push("$ LOAD COMBINATIONS");
    for (const e of we) {
      o.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) o.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    o.push("");
  }
  return o.push("  END"), o.push("$ END OF MODEL FILE"), o.join(`\r
`);
}
function St(l, i) {
  const M = l[i[0]], O = l[i[1]], A = Math.abs(O[2] - M[2]), L = Math.sqrt((O[0] - M[0]) ** 2 + (O[1] - M[1]) ** 2), Y = A > L * 0.5;
  return Y && L > 0.01 ? "BRACE" : Y ? "COLUMN" : "BEAM";
}
export {
  wt as a,
  kt as e,
  Ut as p
};
