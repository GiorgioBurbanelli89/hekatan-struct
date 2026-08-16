function R(h) {
  return h && parseFloat(h) || 0;
}
function Je(h) {
  const r = /* @__PURE__ */ new Map(), $ = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let M;
  for (; (M = $.exec(h)) !== null; ) r.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
  return r;
}
function ct(h) {
  const r = h.split(/\r?\n/);
  return r.some((M) => M.trim().startsWith("TABLE:")) ? Ke(r) : qe(r);
}
function Ke(h) {
  var _a, _b, _c, _d, _e2, _f;
  const r = [];
  let $ = "";
  for (const E of h) {
    const S = E.trimEnd();
    S.endsWith("_") ? $ += S.slice(0, -1) + " " : ($ += S, r.push($), $ = "");
  }
  $ && r.push($);
  const M = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const g = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), m = [], w = [], Y = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), z = [];
  let n = "";
  for (const E of r) {
    const S = E.trim();
    if (!S || S.startsWith(";") || S.startsWith("File ")) continue;
    if (S.startsWith("TABLE:")) {
      const c = S.match(/TABLE:\s+"(.+?)"/);
      n = c ? c[1].toUpperCase() : "";
      continue;
    }
    if (S === "END TABLE DATA") {
      n = "";
      continue;
    }
    const p = Je(S);
    switch (n) {
      case "PROGRAM CONTROL": {
        const c = p.get("CurrUnits");
        if (c) {
          const s = c.split(",").map((o) => o.trim());
          s[0] && (M.force = s[0]), s[1] && (M.length = s[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const c = p.get("Material");
        c && !g.has(c) && g.set(c, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const c = p.get("Material");
        if (c) {
          const s = g.get(c) || { E: 0, nu: 0, G: 0 };
          s.E = R(p.get("E1")), s.G = R(p.get("G12")), s.nu = R(p.get("U12")), s.density = R(p.get("UnitMass")), g.set(c, s);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const c = p.get("Material");
        c && g.has(c) && (g.get(c).fy = R(p.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const c = p.get("SectionName");
        c && L.set(c, { material: p.get("Material") || "", shape: p.get("Shape") || "Rectangular", D: R(p.get("t3")), B: R(p.get("t2")), TF: R(p.get("tf")), TW: R(p.get("tw")), A: R(p.get("Area")), Iz: R(p.get("I33")), Iy: R(p.get("I22")), J: R(p.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const c = p.get("Section");
        c && x.set(c, { material: p.get("Material") || "", type: p.get("Type") || "Shell", thickness: R(p.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const c = p.get("Joint");
        if (c) {
          const s = R(p.get("XorR")), o = R(p.get("Y")), N = R(p.get("Z"));
          u.set(c, [s, o, N]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const c = p.get("Frame"), s = p.get("JointI"), o = p.get("JointJ");
        c && s && o && m.push({ name: c, j1: s, j2: o });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const c = p.get("Area");
        if (c) {
          const s = parseInt(p.get("NumJoints") || "4"), o = [];
          for (let N = 1; N <= s; N++) {
            const F = p.get(`Joint${N}`);
            F && o.push(F);
          }
          o.length >= 3 && w.push({ name: c, joints: o });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const c = p.get("Joint");
        if (c) {
          const s = [((_a = p.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = p.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = p.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = p.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e2 = p.get("R2")) == null ? void 0 : _e2.toLowerCase()) === "yes", ((_f = p.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          Y.set(c, s);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const c = p.get("Frame"), s = p.get("AnalSect");
        c && s && k.set(c, s);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const c = p.get("Area"), s = p.get("Section");
        c && s && H.set(c, s);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const c = p.get("Joint");
        c && z.push({ joint: c, fx: R(p.get("F1")), fy: R(p.get("F2")), fz: R(p.get("F3")), mx: R(p.get("M1")), my: R(p.get("M2")), mz: R(p.get("M3")) });
        break;
      }
    }
  }
  return _e(M, I, g, L, x, u, m, w, Y, k, H, z);
}
function qe(h) {
  const r = { force: "KN", length: "m" };
  let $ = "UX,UY,UZ,RX,RY,RZ";
  const M = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), x = [], u = [], m = /* @__PURE__ */ new Map(), w = [];
  let Y = "", k = "";
  for (const n of h) {
    const E = n.trim();
    if (!E || E.startsWith(";")) continue;
    if (!n.startsWith(" ") && !n.startsWith("	")) {
      const c = E.toUpperCase();
      if (c === "END") break;
      c.startsWith("SHELL SECTION") ? Y = "SHELL SECTION" : c.startsWith("FRAME SECTION") ? Y = "FRAME SECTION" : Y = c.split(/\s+/)[0];
      continue;
    }
    const S = Je(E), p = E.split(/\s+/);
    switch (Y) {
      case "SYSTEM": {
        const c = S.get("DOF");
        c && ($ = c);
        const s = S.get("LENGTH");
        s && (r.length = s);
        const o = S.get("FORCE");
        o && (r.force = o);
        break;
      }
      case "JOINT": {
        const c = p[0];
        L.set(c, [R(S.get("X")), R(S.get("Y")), R(S.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const c = S.get("ADD"), s = S.get("DOF");
        if (c && s) {
          const o = s.split(","), N = [false, false, false, false, false, false];
          for (const F of o) {
            const T = F.toUpperCase();
            (T === "UX" || T === "U1") && (N[0] = true), (T === "UY" || T === "U2") && (N[1] = true), (T === "UZ" || T === "U3") && (N[2] = true), (T === "RX" || T === "R1") && (N[3] = true), (T === "RY" || T === "R2") && (N[4] = true), (T === "RZ" || T === "R3") && (N[5] = true);
          }
          m.set(c, N);
        }
        break;
      }
      case "MATERIAL": {
        const c = S.get("NAME");
        if (c) k = c, M.set(c, { E: 0, nu: 0, G: 0 });
        else if (k) {
          const s = M.get(k), o = S.get("E");
          o && (s.E = R(o));
          const N = S.get("U");
          N && (s.nu = R(N)), s.G = s.E / (2 * (1 + s.nu));
          const F = S.get("M");
          F && (s.density = R(F));
        }
        break;
      }
      case "SHELL": {
        const c = p[0], s = S.get("J");
        S.get("SEC"), s && u.push({ name: c, joints: s.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const c = S.get("NAME");
        c && g.set(c, { material: S.get("MAT") || "", type: S.get("TYPE") || "Shell", thickness: R(S.get("TH")) });
        break;
      }
      case "FRAME": {
        const c = p[0], s = S.get("J");
        if (s) {
          const o = s.split(",");
          o.length >= 2 && x.push({ name: c, j1: o[0], j2: o[1] });
        }
        break;
      }
      case "LOAD": {
        const c = S.get("ADD");
        c && w.push({ joint: c, fx: R(S.get("UX")), fy: R(S.get("UY")), fz: R(S.get("UZ")), mx: R(S.get("MX")), my: R(S.get("MY")), mz: R(S.get("MZ")) });
        break;
      }
    }
  }
  return _e(r, $, M, I, g, L, x, u, m, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), w);
}
function _e(h, r, $, M, I, g, L, x, u, m, w, Y) {
  var _a;
  const k = [], H = /* @__PURE__ */ new Map(), z = [];
  for (const [T, d] of g) H.set(T, z.length), k.push(T), z.push(d);
  const n = [], E = [], S = /* @__PURE__ */ new Map();
  for (const T of L) {
    const d = H.get(T.j1), B = H.get(T.j2);
    if (d !== void 0 && B !== void 0) {
      const J = n.length;
      n.push([d, B]), E.push(T.name);
      const C = m.get(T.name);
      C && S.set(J, C);
    }
  }
  const p = n.length;
  for (const T of x) {
    const d = T.joints.map((B) => H.get(B)).filter((B) => B !== void 0);
    if (d.length >= 3) {
      const B = n.length;
      n.push(d), E.push(T.name);
      const J = w.get(T.name);
      J && S.set(B, J);
    }
  }
  const c = n.length - p, s = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, o = /* @__PURE__ */ new Map(), N = $.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let T = 0; T < n.length; T++) {
    const d = S.get(T), B = d ? M.get(d) : null, J = d ? I.get(d) : null;
    if (B || n[T].length === 2) {
      const C = B || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, W = $.get(C.material) || N, Z = W.E || N.E, oe = W.nu || 0.3, V = W.G || Z / (2 * (1 + oe));
      s.elasticities.set(T, Z), s.shearModuli.set(T, V), s.areas.set(T, C.A || C.D * C.B), s.momentsOfInertiaZ.set(T, C.Iz || C.B * C.D ** 3 / 12), s.momentsOfInertiaY.set(T, C.Iy || C.D * C.B ** 3 / 12), s.torsionalConstants.set(T, C.J || 0), s.densities.set(T, W.density || 0), ((_a = C.shape) == null ? void 0 : _a.includes("Wide Flange")) || C.shape === "I" ? o.set(T, { type: "I", b: C.B, h: C.D, name: d || "I-section" }) : o.set(T, { type: "rect", b: C.B, h: C.D });
    } else if (J) {
      const C = $.get(J.material) || N, W = C.E || N.E, Z = C.nu || 0.2, oe = C.G || W / (2 * (1 + Z));
      s.elasticities.set(T, W), s.shearModuli.set(T, oe), s.thicknesses.set(T, J.thickness), s.poissonsRatios.set(T, Z), s.densities.set(T, C.density || 0);
    }
  }
  const F = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [T, d] of u) {
    const B = H.get(T);
    B !== void 0 && F.supports.set(B, d);
  }
  for (const T of Y) {
    const d = H.get(T.joint);
    if (d !== void 0) {
      const B = F.forces.get(d) || [0, 0, 0, 0, 0, 0];
      B[0] += T.fx, B[1] += T.fy, B[2] += T.fz, B[3] += T.mx, B[4] += T.my, B[5] += T.mz, F.forces.set(d, B);
    }
  }
  return { units: h, dof: r, materials: $, frameSections: M, shellSections: I, nodes: z, nodeNames: k, nodeNameToIdx: H, elements: n, elementNames: E, elementSections: S, nodeInputs: F, elementInputs: s, sectionShapes: o, info: { nNodes: z.length, nFrames: p, nShells: c, title: `SAP2000 (${p} frames, ${c} shells)` } };
}
function it(h) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
  const { nodes: r, elements: $, nodeInputs: M, elementInputs: I } = h, g = h.units || { force: "KN", length: "m" }, L = h.title || "Awatif Model", x = [], u = (s) => x.push(s), m = () => x.push(" ");
  u(`File ${L}.$2k was saved on m/d/yy at h:mm:ss`), m(), u('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), u("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), m();
  const w = [], Y = [];
  if ($.forEach((s, o) => {
    s.length === 2 ? w.push(o) : Y.push(o);
  }), w.length > 0) {
    u('TABLE:  "CONNECTIVITY - FRAME"');
    for (const s of w) {
      const o = $[s];
      u(`   Frame=${s + 1}   JointI=${o[0] + 1}   JointJ=${o[1] + 1}   IsCurved=No`);
    }
    m();
  }
  if (Y.length > 0) {
    u('TABLE:  "CONNECTIVITY - AREA"');
    for (const s of Y) {
      const o = $[s], N = o.map((F, T) => `Joint${T + 1}=${F + 1}`).join("   ");
      u(`   Area=${s + 1}   NumJoints=${o.length}   ${N}`);
    }
    m();
  }
  u('TABLE:  "COORDINATE SYSTEMS"'), u("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), m(), u('TABLE:  "DATABASE FORMAT TYPES"'), u("   UnitsCurr=Yes   OverrideE=No"), m();
  const k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
  for (const s of w) {
    const o = ((_a = I.areas) == null ? void 0 : _a.get(s)) || 0, N = ((_b = I.momentsOfInertiaZ) == null ? void 0 : _b.get(s)) || 0, F = ((_c = I.momentsOfInertiaY) == null ? void 0 : _c.get(s)) || 0, T = ((_d = I.torsionalConstants) == null ? void 0 : _d.get(s)) || 0, d = ((_e2 = I.elasticities) == null ? void 0 : _e2.get(s)) || 0, B = `MAT_${Math.round(d)}`, J = `A${o.toPrecision(6)}_Iz${N.toPrecision(6)}`;
    if (!k.has(J)) {
      let W = 0.3, Z = 0.3;
      o > 0 && N > 0 && (W = Math.sqrt(12 * N / o), Z = o / W), k.set(J, { A: o, Iz: N, Iy: F, J: T, b: Z, h: W, matKey: B });
    }
    const C = [...k.keys()].indexOf(J) + 1;
    H.set(s, `SEC${C}`);
  }
  if (w.length > 0) {
    u('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const s of w) {
      const o = H.get(s) || "SEC1";
      u(`   Frame=${s + 1}   AutoSelect=N.A.   AnalSect=${o}   MatProp=Default`);
    }
    m();
  }
  if (k.size > 0) {
    u('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let s = 0;
    for (const [, o] of k) {
      s++;
      const N = o.A * 5 / 6;
      u(`   SectionName=SEC${s}   Material=${o.matKey}   Shape=Rectangular   t3=${P(o.h)}   t2=${P(o.b)}   Area=${P(o.A)}   TorsConst=${P(o.J)}   I33=${P(o.Iz)}   I22=${P(o.Iy)}   I23=0   AS2=${P(N)}   AS3=${P(N)} _`), u("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    m();
  }
  const z = !!h.layeredSection && Y.length > 0, n = h.layeredSection, E = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
  if (!z) for (const s of Y) {
    const o = ((_f = I.thicknesses) == null ? void 0 : _f.get(s)) || 0.1, N = ((_g = I.elasticities) == null ? void 0 : _g.get(s)) || 0, F = `MAT_${Math.round(N)}`, T = `t${o.toPrecision(6)}`;
    E.has(T) || E.set(T, { t: o, matKey: F });
    const d = [...E.keys()].indexOf(T) + 1;
    S.set(s, `SSEC${d}`);
  }
  if (Y.length > 0) {
    u('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const s of Y) {
      const o = z ? n.name : S.get(s) || "SSEC1";
      u(`   Area=${s + 1}   Section=${o}   MatProp=Default`);
    }
    if (m(), u('TABLE:  "AREA SECTION PROPERTIES"'), z) {
      const s = n, o = ((_h = s.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      u(`   Section=${s.name}   Material=${o}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${P(s.totalThickness)}   BendThick=${P(s.totalThickness)}   Color=Magenta`);
    } else {
      let s = 0;
      for (const [, o] of E) s++, u(`   Section=SSEC${s}   Material=${o.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${P(o.t)}   BendThick=${P(o.t)}   Color=Cyan`);
    }
    if (m(), z) {
      u('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const s = n;
      for (const o of s.layers) {
        const N = o.angle ?? 0, F = o.numIntPts ?? 3;
        u(`   Section=${s.name}   LayerName=${o.name}   Distance=${P(o.distance)}   Thickness=${P(o.thickness)}   Type=Shell   NumIntPts=${F}   Material=${o.material}   MatAngle=${P(N * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      m();
    }
  }
  u('TABLE:  "JOINT COORDINATES"');
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    u(`   Joint=${s + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${P(o[0])}   Y=${P(o[1])}   Z=${P(o[2])}   SpecialJt=No`);
  }
  if (m(), M.supports && M.supports.size > 0) {
    u('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [s, o] of M.supports) {
      if (!o.some((F) => F)) continue;
      const N = (F) => F ? "Yes" : "No";
      u(`   Joint=${s + 1}   U1=${N(o[0])}   U2=${N(o[1])}   U3=${N(o[2])}   R1=${N(o[3])}   R2=${N(o[4])}   R3=${N(o[5])}`);
    }
    m();
  }
  const p = h.selfWtMult ?? 1;
  if (u('TABLE:  "LOAD PATTERN DEFINITIONS"'), u(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${p}`), m(), u('TABLE:  "LOAD CASE DEFINITIONS"'), u('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), m(), u('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), u('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), m(), M.forces && M.forces.size > 0) {
    u('TABLE:  "JOINT LOADS - FORCE"');
    for (const [s, o] of M.forces) o.some((N) => Math.abs(N) > 1e-12) && u(`   Joint=${s + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${P(o[0])}   F2=${P(o[1])}   F3=${P(o[2])}   M1=${P(o[3])}   M2=${P(o[4])}   M3=${P(o[5])}`);
    m();
  }
  const c = /* @__PURE__ */ new Map();
  for (let s = 0; s < $.length; s++) {
    const o = ((_i = I.elasticities) == null ? void 0 : _i.get(s)) || 0, N = ((_j = I.shearModuli) == null ? void 0 : _j.get(s)) || 0, F = o > 0 && N > 0 ? Math.max(0, Math.min(0.5, o / (2 * N) - 1)) : 0.2, T = ((_k = I.densities) == null ? void 0 : _k.get(s)) || 0, d = `MAT_${Math.round(o)}`;
    c.has(d) || c.set(d, { E: o, nu: F, G: N, rho: T });
  }
  u('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [s] of c) u(`   Material=${s}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  m(), u('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [s, o] of c) u(`   Material=${s}   UnitWeight=${P(o.rho * 9.81)}   UnitMass=${P(o.rho)}   E1=${P(o.E)}   G12=${P(o.G)}   U12=${P(o.nu)}   A1=9.9E-06`);
  m(), u('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [s] of c) u(`   Material=${s}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return m(), u('TABLE:  "PROGRAM CONTROL"'), u(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${g.force}, ${g.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), m(), u("END TABLE DATA"), u(""), x.join(`\r
`);
}
function P(h) {
  return h === 0 || Math.abs(h) < 1e-15 ? "0" : Math.abs(h) >= 1e6 || Math.abs(h) < 1e-3 && Math.abs(h) > 0 ? h.toExponential(8) : parseFloat(h.toPrecision(10)).toString();
}
function Qe(h, r, $ = 0.05) {
  const M = r.map(([I, g]) => `${(+I).toFixed(4)} ${(+g).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${h}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${$}  SPECTYPE "USER"  `, `  FUNCTION "${h}"  TIMEVAL "${M}"  `];
}
function et(h) {
  const { name: r, func: $, modalCase: M = "Modal", sfX: I = 9.81, sfY: g = 9.81 } = h, L = [`  LOADCASE "${r}"  TYPE  "Response Spectrum"  MODALCASE  "${M}"  `];
  return I && L.push(`  LOADCASE "${r}"  ACCEL  "U1"  FUNC  "${$}"  SF  ${I}  `), g && L.push(`  LOADCASE "${r}"  ACCEL  "U2"  FUNC  "${$}"  SF  ${g}  `), L;
}
function xe(h) {
  const { name: r = "Modal", ritz: $ = false, nModes: M = 12 } = h;
  return $ ? [`  LOADCASE "${r}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${r}"  MAXMODES  ${M} MINMODES  1 `, `  LOADCASE "${r}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${r}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${r}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${r}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${r}"  MAXMODES  ${M} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function rt(h) {
  var _a;
  const r = (_a = h.e2kModel) == null ? void 0 : _a.rawSections;
  let $ = r && r.size > 0 ? st(r, h.e2kModel) : nt(h);
  return h.seismicNEC && ($ = tt($, h.seismicNEC)), $;
}
function tt(h, r) {
  const $ = h.includes(`\r
`) ? `\r
` : `
`, M = h.split(/\r?\n/), I = r.name ?? "NEC", g = Qe(I, r.points, r.dampRatio ?? 0.05), L = r.modalCase ?? "Modal", x = et({ name: r.caseName ?? "Sismo NEC", func: I, modalCase: L, sfX: r.sfX, sfY: r.sfY });
  let u = [];
  const m = (w) => M.some((Y) => w.test(Y));
  if (r.modal) {
    const w = new RegExp(`^\\s*LOADCASE\\s+"${L}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let Y = M.length - 1; Y >= 0; Y--) w.test(M[Y]) && M.splice(Y, 1);
    u = xe({ name: L, ritz: !!r.modal.ritz, nModes: r.modal.nModes });
  } else m(new RegExp(`LOADCASE\\s+"${L}"\\s+TYPE\\s+"Modal`)) || (u = xe({ name: L }));
  return He(M, "FUNCTIONS", g), He(M, "LOAD CASES", [...u, ...x]), M.join($);
}
function He(h, r, $) {
  const M = h.findIndex((L) => L.trim() === `$ ${r}`);
  if (M >= 0) {
    h.splice(M + 1, 0, ...$);
    return;
  }
  const I = h.findIndex((L) => L.trim() === "END"), g = I >= 0 ? I : h.length;
  h.splice(g, 0, `$ ${r}`, ...$, "");
}
function st(h, r) {
  const $ = [], M = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  $.push("$ File exported from Hekatan Struct Lineal (round-trip)"), $.push("");
  for (const I of M) {
    const g = h.get(I);
    if (!(!g || g.length === 0)) {
      $.push(`$ ${I}`);
      for (const L of g) $.push(L);
      $.push("");
    }
  }
  for (const [I, g] of h) if (!M.includes(I) && g.length !== 0) {
    $.push(`$ ${I}`);
    for (const L of g) $.push(L);
    $.push("");
  }
  return $.push("  END"), $.push("$ END OF MODEL FILE"), $.join(`\r
`);
}
function nt(h) {
  var _a, _b, _c, _d, _e2, _f, _g;
  const { nodes: r, elements: $, nodeInputs: M, elementInputs: I, title: g, units: L } = h, x = h.shellLoads ?? I.shellSurfaceLoads;
  let u;
  x instanceof Map && (u = /* @__PURE__ */ new Map(), x.forEach((e, t) => {
    u.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const m = h.shellAngles ?? I.shellAngles, w = I.cargaDeArea, Y = !!(u && u.size > 0), k = (e, t) => [t[0], t[1], t[2] - (Y ? (w == null ? void 0 : w.get(e)) ?? 0 : 0)], H = (L == null ? void 0 : L.force) || "Tonf", z = (L == null ? void 0 : L.length) || "m", n = [], E = (e) => Math.round(e * 1e4) / 1e4, S = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), p = (() => {
    const e = (H || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), c = (e) => e * p, s = (e) => e * p, o = (e) => e * p, N = /* @__PURE__ */ new Date(), F = `${N.getMonth() + 1}/${N.getDate()}/${N.getFullYear()}  ${N.getHours()}:${String(N.getMinutes()).padStart(2, "0")}:${String(N.getSeconds()).padStart(2, "0")}`;
  n.push(`$ File   "Hekatan_export.e2k"  saved ${F} in ETABS 22.6.0`), n.push(""), n.push("$ PROGRAM INFORMATION"), n.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), n.push(""), n.push("$ CONTROLS"), n.push(`  UNITS  "${H}"  "${z}"  "C"  `), n.push('  TITLE1  "Hekatan Struct Lineal export"  '), g && n.push(`  TITLE2  "${g}"  `), n.push("  PREFERENCE  MERGETOL 0.001"), n.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), n.push("");
  const T = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
  r.forEach((e) => {
    T.add(E(e[0])), d.add(E(e[1]));
  });
  const B = [...T].sort((e, t) => e - t), J = [...d].sort((e, t) => e - t);
  n.push("$ GRIDS"), n.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), B.forEach((e, t) => {
    const a = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    n.push(`  GRID "G1"  LABEL "${a}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), J.forEach((e, t) => {
    n.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), n.push("");
  const C = 3, W = 0.5, Z = /* @__PURE__ */ new Map();
  r.forEach((e) => {
    const t = E(e[2]);
    Z.set(t, (Z.get(t) ?? 0) + 1);
  });
  const oe = /* @__PURE__ */ new Set();
  r.forEach((e) => oe.add(E(e[2])));
  const V = [...oe].sort((e, t) => e - t);
  let b = V.filter((e) => (Z.get(e) ?? 0) >= C);
  if (b.length > 1) {
    const e = [b[0]];
    for (const t of b.slice(1)) t - e[e.length - 1] < W ? e[e.length - 1] = t : e.push(t);
    b = e;
  }
  b.length || (b = V.slice()), b[0] !== V[0] && b.unshift(V[0]), b[b.length - 1] !== V[V.length - 1] && b.push(V[V.length - 1]);
  const re = [], ae = /* @__PURE__ */ new Map();
  re.push("Base"), ae.set(b[0], "Base");
  for (let e = 1; e < b.length; e++) {
    const t = `Level_${e}`;
    re.push(t), ae.set(b[e], t);
  }
  const me = (e) => {
    const t = E(e);
    if (ae.has(t)) return { story: ae.get(t), dz: 0 };
    for (let i = 0; i < b.length; i++) if (b[i] >= t) return { story: ae.get(b[i]), dz: E(b[i] - t) };
    const a = b[b.length - 1];
    return { story: ae.get(a), dz: E(a - t) };
  };
  n.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = b.length - 1; e >= 1; e--) n.push(`  STORY "${re[e]}"  HEIGHT ${E(b[e] - b[e - 1])} MASTERSTORY "Yes"  `);
  b.length > 0 && n.push(`  STORY "Base"  ELEV ${b[0]} `), n.push(""), $.some((e) => e.length === 4), n.push("$ DIAPHRAGM NAMES"), n.push('  DIAPHRAGM "D1"    TYPE RIGID'), n.push(""), n.push("$ MATERIAL PROPERTIES");
  const de = /* @__PURE__ */ new Set();
  (_a = I.elasticities) == null ? void 0 : _a.forEach((e) => de.add(e));
  const Ee = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
  let We = 0, Ze = 0;
  const je = 980665e-8, Ce = /* @__PURE__ */ new Map();
  if (I.densities && I.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    I.densities.forEach((t, a) => {
      var _a2;
      const i = (_a2 = I.elasticities) == null ? void 0 : _a2.get(a);
      i !== void 0 && (e.has(i) || e.set(i, []), e.get(i).push(t));
    }), e.forEach((t, a) => {
      const i = t.reduce((f, O) => f + O, 0) / t.length, l = i > 100 ? i * je : i * 9.80665;
      Ce.set(a, l);
    });
  }
  for (const e of de) {
    const t = e >= 1e8, a = t ? `Steel_${++We}` : `Conc_${++Ze}`;
    Ee.set(e, a), $e.set(e, t);
    const i = Ce.get(e) ?? (t ? 76.97 : 24), l = s(e), f = o(i), O = t ? 0.3 : 0.2, A = t ? 117e-7 : 1e-5;
    if (t) {
      n.push(`  MATERIAL  "${a}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${E(f)}`), n.push(`  MATERIAL  "${a}"    SYMTYPE "Isotropic"  E ${E(l)}  U ${O}  A ${A}`);
      const D = 345e3, _ = 45e4;
      n.push(`  MATERIAL  "${a}"  FY ${E(s(D))}  FU ${E(s(_))}  FYE ${E(s(D * 1.1))}  FUE ${E(s(_ * 1.1))}`);
    } else n.push(`  MATERIAL  "${a}"    TYPE "Concrete"    WEIGHTPERVOLUME ${E(f)}`), n.push(`  MATERIAL  "${a}"    SYMTYPE "Isotropic"  E ${E(l)}  U ${O}  A ${A}`), n.push(`  MATERIAL  "${a}"    FC ${E(s(24e3))}`);
  }
  n.push(""), n.push("$ FRAME SECTIONS");
  const le = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Q = 0.05;
  $.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j;
    if (e.length !== 2) return;
    const a = (_a2 = I.sectionShapes) == null ? void 0 : _a2.get(t), i = ((_b2 = I.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, l = Ee.get(i) || "Conc_1", f = $e.get(i) ?? i >= 1e8, O = ((_c2 = I.areas) == null ? void 0 : _c2.get(t)) ?? 0, A = ((_d2 = I.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, D = ((_e3 = I.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, _ = ((_f2 = I.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let U = (a == null ? void 0 : a.type) || "rect", y = (a == null ? void 0 : a.h) ?? 0, G = (a == null ? void 0 : a.b) ?? 0, ne = (a == null ? void 0 : a.d) ?? 0;
    const Le = (a == null ? void 0 : a.tf) ?? 0, ue = (a == null ? void 0 : a.tw) ?? 0;
    if (!a && y <= 0 && G <= 0 && ne <= 0 && O > 0 && A > 0 && D > 0) {
      const X = (_g2 = I.cantos) == null ? void 0 : _g2.get(t), ie = (_h = I.anchos) == null ? void 0 : _h.get(t);
      y = X && X > 0 ? X : Math.sqrt(12 * A / O), G = ie && ie > 0 ? ie : O / y, (!isFinite(y) || y < Q) && (y = Q), (!isFinite(G) || G < Q) && (G = Q), U = "general";
    } else y <= 0 && G <= 0 && ne <= 0 && O > 0 && (A > 0 ? (y = Math.sqrt(12 * A / O), G = O / y) : y = G = Math.sqrt(O), (!isFinite(y) || y < Q) && (y = Q), (!isFinite(G) || G < Q) && (G = Q), U = "rect");
    y <= 0 && G <= 0 && ne <= 0 && (y = 0.3, G = 0.3, U = "rect");
    const Ie = (a == null ? void 0 : a.name) ? `NAME_${a.name}` : `${U}_${E(y)}_${E(G)}_${E(ne)}_${E(Le)}_${E(ue)}_${l}`;
    (a == null ? void 0 : a.name) && !Se.has(Ie) && Se.set(Ie, a.name);
    let j = Se.get(Ie);
    if (!j) {
      const X = f ? "S" : "C";
      U === "general" ? j = `${X}_G${le.size + 1}` : U === "rect" ? j = `${X}_R${Math.round(G * 100)}x${Math.round(y * 100)}` : U === "circ" ? j = `${X}_C_D${Math.round(ne * 100)}` : U === "I" ? j = `${X}_I${Math.round(y * 100)}x${Math.round(G * 100)}` : U === "HSS" ? j = `${X}_HSS${Math.round(G * 100)}x${Math.round(y * 100)}x${Math.round(ue * 1e3)}` : j = `${X}_Sec${le.size + 1}`, Se.set(Ie, j);
    }
    if (Me.set(t, j), le.has(j)) return;
    le.add(j);
    let v;
    U === "general" ? v = "General" : U === "I" ? v = "Steel I/Wide Flange" : U === "HSS" ? v = "Steel Tube" : U === "CFT" ? v = "Filled Steel Tube" : U === "pipe" ? v = "Steel Pipe" : U === "L" ? v = "Steel Angle" : U === "C" ? v = "Steel Channel" : U === "2C" ? v = "Steel Double Channel" : U === "circ" ? v = "Concrete Circle" : v = "Concrete Rectangular";
    let se = `  FRAMESECTION  "${j}"  MATERIAL "${l}"  SHAPE "${v}"`;
    if (U === "general") {
      const X = ((_i = I.shearAreasY) == null ? void 0 : _i.get(t)) || O * 5 / 6, ie = ((_j = I.shearAreasZ) == null ? void 0 : _j.get(t)) || O * 5 / 6;
      se += `  D ${E(y)} B ${E(G)} AREA ${S(O)} AS2 ${S(X)} AS3 ${S(ie)} I33 ${S(A)} I22 ${S(D)} TORSION ${S(_ || A + D)} S33POS ${S(2 * A / y)} S33NEG ${S(2 * A / y)} S22POS ${S(2 * D / G)} S22NEG ${S(2 * D / G)} Z33 ${S(2 * A / y)} Z22 ${S(2 * D / G)} R33 ${S(Math.sqrt(A / O))} R22 ${S(Math.sqrt(D / O))} `, n.push(se);
      return;
    }
    y && (se += `  D ${E(y)}`), G && (se += `  B ${E(G)}`), ne && !y && (se += `  D ${E(ne)}`), Le && (se += `  TF ${E(Le)}`), ue && (se += `  TW ${E(ue)}`), n.push(se);
  }), n.push("");
  const fe = /* @__PURE__ */ new Map();
  let Xe = 0;
  r.forEach((e) => {
    const { dz: t } = me(e[2]), a = `${E(e[0])},${E(e[1])},${t}`;
    fe.has(a) || fe.set(a, `${++Xe}`);
  }), n.push("$ POINT COORDINATES");
  for (const [e, t] of fe) {
    const [a, i, l] = e.split(",").map(Number);
    n.push(l ? `  POINT "${t}"  ${a} ${i} ${l} ` : `  POINT "${t}"  ${a} ${i} `);
  }
  n.push("");
  const K = (e) => {
    const t = r[e], { story: a, dz: i } = me(t[2]), l = `${E(t[0])},${E(t[1])},${i}`;
    return { pt: fe.get(l) || "1", story: a };
  }, De = (e) => {
    var _a2, _b2, _c2, _d2, _e3;
    const t = [], a = (_a2 = h.propertyModifiers) == null ? void 0 : _a2.get(e);
    a && a.some((A) => Math.abs(A - 1) > 1e-9) && t.push(`PROPMODIFIERS "${a.map((A) => E(A)).join(" ")}"`);
    const i = (_b2 = I.localAngles) == null ? void 0 : _b2.get(e);
    i !== void 0 && isFinite(i) && Math.abs(i) > 1e-9 && t.push(`ANG ${E(i)}`);
    const l = (_c2 = I.momentReleases) == null ? void 0 : _c2.get(e);
    if (l && l.some((A) => A)) {
      const A = [];
      l.length === 12 ? (l[0] && A.push("PI"), l[1] && A.push("V2I"), l[2] && A.push("V3I"), l[3] && A.push("TI"), l[4] && A.push("M2I"), l[5] && A.push("M3I"), l[6] && A.push("PJ"), l[7] && A.push("V2J"), l[8] && A.push("V3J"), l[9] && A.push("TJ"), l[10] && A.push("M2J"), l[11] && A.push("M3J")) : l.length === 6 && (l[0] && A.push("TI"), l[1] && A.push("M2I"), l[2] && A.push("M3I"), l[3] && A.push("TJ"), l[4] && A.push("M2J"), l[5] && A.push("M3J")), A.length > 0 && t.push(`RELEASE "${A.join(" ")}"`);
    }
    const f = (_d2 = I.insertionPoints) == null ? void 0 : _d2.get(e);
    f && (Math.abs(f[0]) > 1e-9 || Math.abs(f[1]) > 1e-9) && t.push(`LATEROFFSET ${E(f[0])} TRANSOFFSET ${E(f[1])}`);
    const O = (_e3 = I.rigidOffsets) == null ? void 0 : _e3.get(e);
    return O && (Math.abs(O[0]) > 1e-9 || Math.abs(O[1]) > 1e-9) && t.push(`LENGTHOFFI ${E(O[0])} LENGTHOFFJ ${E(O[1])} RIGIDZONE 0.5`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, Ne = [], Pe = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map();
  $.forEach((e, t) => {
    if (e.length !== 2) return;
    const a = ze(r, e);
    if (a === "BEAM") return;
    const i = r[e[0]][2] <= r[e[1]][2] ? e[0] : e[1], l = r[e[0]][2] <= r[e[1]][2] ? e[1] : e[0];
    if (Math.abs(r[i][0] - r[l][0]) > 1e-6 || Math.abs(r[i][1] - r[l][1]) > 1e-6) return;
    const f = K(i), O = Me.get(t) || `Sec_${t}`, A = `${f.pt}_${O}_${a}`;
    Ae.has(A) || Ae.set(A, []), Ae.get(A).push({ i: t, bot: i, top: l, zBot: E(r[i][2]), zTop: E(r[l][2]), planPt: f.pt, secName: O, type: a });
  }), Ae.forEach((e, t) => {
    e.sort((i, l) => i.zBot - l.zBot);
    let a = 0;
    for (let i = 1; i <= e.length; i++) if (i === e.length || Math.abs(e[i].zBot - e[i - 1].zTop) > 1e-6) {
      const f = e.slice(a, i);
      f.length >= 1 && (Ne.push({ elemIndices: f.map((O) => O.i), planPt: f[0].planPt, bottomNodeIdx: f[0].bot, topNodeIdx: f[f.length - 1].top, secName: f[0].secName, type: f[0].type, nSegments: f.length }), f.forEach((O) => Pe.add(O.i))), a = i;
    }
  }), n.push("$ LINE CONNECTIVITIES");
  const Fe = [], ye = (e) => re.indexOf(e), Ye = (e, t, a, i, l, f, O) => {
    const A = K(i), D = K(a), _ = ye(A.story) - ye(D.story);
    _ <= 0 ? n.push(`  LINE  "${e}"  BEAM  "${D.pt}"  "${A.pt}"  0`) : n.push(`  LINE  "${e}"  ${t}  "${D.pt}"  "${A.pt}"  ${_}`), Fe.push(`  LINEASSIGN  "${e}"  "${A.story}"  SECTION "${l}" ${f} MINNUMSTA ${O} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  Ne.forEach((e, t) => {
    const a = De(e.elemIndices[0]);
    Ye(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, a, e.nSegments);
  }), $.forEach((e, t) => {
    if (e.length !== 2 || Pe.has(t)) return;
    const a = ze(r, e), i = Me.get(t) || `Sec_${t}`, l = De(t), f = r[e[0]][2] <= r[e[1]][2] ? e[0] : e[1], O = r[e[0]][2] <= r[e[1]][2] ? e[1] : e[0];
    Ye(`E${t + 1}`, a === "BEAM" ? "BRACE" : a, f, O, i, l, 3);
  }), n.push("");
  const he = h.weightMode ?? "auto", ce = /* @__PURE__ */ new Set();
  n.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((e, t) => {
    const a = [];
    if (e[0] && a.push("UX"), e[1] && a.push("UY"), e[2] && a.push("UZ"), e[3] && a.push("RX"), e[4] && a.push("RY"), e[5] && a.push("RZ"), a.length > 0) {
      const i = K(t), l = i.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      n.push(`  POINTASSIGN  "${i.pt}"  "${i.story}"  RESTRAINT "${a.join(" ")}" ${l} `), ce.add(`${i.pt}@${i.story}`);
    }
  });
  const Be = (h.diaphragm ?? "auto") !== "none";
  Be && Ne.forEach((e) => {
    const t = K(e.topNodeIdx), a = `${t.pt}@${t.story}`;
    !ce.has(a) && t.story !== "Base" && (n.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), ce.add(a));
  }), he === "manual" && M.loads && M.loads.forEach((e, t) => {
    const [a, i, l] = k(t, e);
    if (Math.abs(a) < 1e-10 && Math.abs(i) < 1e-10 && Math.abs(l) < 1e-10) return;
    const f = K(t), O = `${f.pt}@${f.story}`;
    ce.has(O) || (n.push(`  POINTASSIGN  "${f.pt}"  "${f.story}"  DIAPH "DISCONNECTED"  `), ce.add(O));
  }), n.push(""), n.push("$ LINE ASSIGNS"), Fe.forEach((e) => n.push(e)), n.push("");
  const ee = [], be = I.areaObjects, Ue = /* @__PURE__ */ new Set(), Ge = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
  be == null ? void 0 : be.forEach((e) => e.cells.forEach((t) => Ue.add(t))), $.forEach((e, t) => {
    if (e.length === 4) {
      const a = r[e[0]], i = r[e[1]], l = r[e[2]], f = [i[0] - a[0], i[1] - a[1], i[2] - a[2]], O = [l[0] - a[0], l[1] - a[1], l[2] - a[2]], A = f[1] * O[2] - f[2] * O[1], D = f[2] * O[0] - f[0] * O[2], _ = f[0] * O[1] - f[1] * O[0], U = Math.sqrt(A * A + D * D + _ * _), y = U > 1e-10 && Math.abs(_) / U < 0.5;
      ee.push({ idx: t, el: e, isWall: y }), Ue.has(t) && ee.pop();
    }
  });
  const pe = (() => {
    for (const [e, t] of $e) if (!t) return Ee.get(e);
    return Ee.values().next().value || "Conc_1";
  })();
  be == null ? void 0 : be.forEach((e, t) => {
    ee.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && Ge.set(e.cells[0], e.q), e.ang !== void 0 && we.set(e.cells[0], e.ang);
  });
  const ke = "DECK";
  let Oe = false;
  const ge = [];
  if (ee.some((e) => !e.isWall)) {
    const e = I.bendingModifiers, t = I.shellModifiers;
    Oe = (() => {
      for (const i of ee) {
        if (i.isWall) continue;
        const l = t == null ? void 0 : t.get(i.idx);
        if (l && Math.abs(l[3]) < 1e-9 && Math.abs(l[4]) < 1e-9) return true;
        const f = e == null ? void 0 : e.get(i.idx);
        if (f !== void 0 && Math.abs(f) < 1e-9) return true;
      }
      return false;
    })();
    const a = ((_c = I.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    Oe ? (n.push("$ DECK PROPERTIES"), n.push(`  SHELLPROP  "${ke}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${pe}"  DECKMATERIAL "${pe}"  DECKSLABDEPTH ${S(a * 65 / 120)} DECKRIBDEPTH ${S(a * 55 / 120)} DECKRIBWIDTHTOP ${S(a * 150 / 120)} DECKRIBWIDTHBOTTOM ${S(a * 100 / 120)} DECKRIBSPACING ${S(a * 200 / 120)} DECKSHEARTHICKNESS ${S(a * 0.76 / 120)} DECKUNITWEIGHT ${S(c(0.11012))} SHEARSTUDDIAM ${S(a * 19 / 120)} SHEARSTUDHEIGHT ${S(a * 100 / 120)} SHEARSTUDFU 400 `)) : (n.push("$ SLAB PROPERTIES"), n.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${pe}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${E(a)} `)), n.push("");
  }
  if (ee.some((e) => e.isWall)) {
    n.push("$ WALL PROPERTIES");
    const e = ((_d = I.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    n.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${pe}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${E(e)} `), n.push("");
  }
  if (ee.length > 0) {
    n.push("$ AREA CONNECTIVITIES");
    const e = [];
    ee.forEach((t, a) => {
      const { el: i, isWall: l } = t, f = l ? `W${a + 1}` : `F${a + 1}`, O = l ? "PANEL" : "FLOOR", A = i.map((D) => K(D));
      if (l) {
        const D = r[i[0]][2] <= r[i[2]][2] ? 0 : 2, _ = r[i[1]][2] <= r[i[3]][2] ? 1 : 3;
        n.push(`  AREA "${f}"  ${O}  4  "${A[D].pt}"  "${A[_].pt}"  "${A[_].pt}"  "${A[D].pt}"  1  1  0  0  `);
        const U = A[D === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${f}"  "${U}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        n.push(`  AREA "${f}"  ${O}  4  "${A[0].pt}"  "${A[1].pt}"  "${A[2].pt}"  "${A[3].pt}"  0  0  0  0  `);
        const D = we.get(t.idx) ?? (m == null ? void 0 : m.get(t.idx));
        e.push(Oe ? `  AREAASSIGN  "${f}"  "${A[0].story}"  SECTION "${ke}"  ANG ${E(D ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${f}"  "${A[0].story}"  SECTION "Losa" ${Be ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), ge.push({ name: f, story: A[0].story, idx: t.idx });
      }
    }), n.push(""), n.push("$ AREA ASSIGNS"), e.forEach((t) => n.push(t)), n.push("");
  }
  const ve = he === "manual" ? 0 : 1;
  n.push("$ LOAD PATTERNS");
  const Te = ((_e2 = h.loadPatterns) == null ? void 0 : _e2.length) ? h.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: ve }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of Te) {
    const t = e.type === "Dead" ? he === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : e.selfWeightMultiplier ?? 0;
    n.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  n.push("");
  const te = ((_f = Te.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? Te[0].name, q = [];
  if (M.loads && M.loads.size > 0 && M.loads.forEach((e, t) => {
    const [a, i, l] = k(t, e), f = K(t);
    Math.abs(a) > 1e-10 && q.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "FORCE"  LC "${te}"  FX ${E(c(a))}  FY 0  FZ 0`), Math.abs(i) > 1e-10 && q.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "FORCE"  LC "${te}"  FX 0  FY ${E(c(i))}  FZ 0`);
    const O = e[3] ?? 0, A = e[4] ?? 0, D = e[5] ?? 0;
    (Math.abs(O) > 1e-10 || Math.abs(A) > 1e-10 || Math.abs(D) > 1e-10) && q.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "FORCE"  LC "${te}"  FX 0  FY 0  FZ 0  MX ${E(c(O))}  MY ${E(c(A))}  MZ ${E(c(D))}`), he === "manual" && Math.abs(l) > 1e-10 && q.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "FORCE"  LC "${te}"  FX 0  FY 0  FZ ${E(c(l))}`);
  }), M.moments && M.moments.size > 0 && M.moments.forEach((e, t) => {
    const [a, i, l] = e, f = K(t);
    Math.abs(a) > 1e-10 && q.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "MOMENT"  LC "${te}"  MX ${E(c(a))}  MY 0  MZ 0`), Math.abs(i) > 1e-10 && q.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "MOMENT"  LC "${te}"  MX 0  MY ${E(c(i))}  MZ 0`), Math.abs(l) > 1e-10 && q.push(`  POINTLOAD  "${f.pt}"  "${f.story}"  TYPE "MOMENT"  LC "${te}"  MX 0  MY 0  MZ ${E(c(l))}`);
  }), q.length > 0 && (n.push("$ POINT OBJECT LOADS"), q.forEach((e) => n.push(e)), n.push("")), u && u.size > 0 && ge.length > 0) {
    const e = [];
    for (const t of ge) {
      const a = Ge.get(t.idx), i = a !== void 0 ? { value: a } : u.get(t.idx);
      if (!i || Math.abs(i.value) < 1e-12) continue;
      const l = i.dir ?? "GRAV", f = l === "GRAV" ? Math.abs(i.value) : i.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${l}"  LC "${i.pattern ?? te}"  FVAL ${E(c(f))}`);
    }
    e.length > 0 && (n.push("$ SHELL OBJECT LOADS"), e.forEach((t) => n.push(t)), n.push(""));
  }
  n.push("$ ANALYSIS OPTIONS"), n.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), n.push('  PDELTA  METHOD "NONE"  '), n.push(""), n.push("$ MASS SOURCE"), n.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), n.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), n.push(""), n.push("$ LOAD CASES");
  const Ve = ((_g = h.loadCases) == null ? void 0 : _g.length) ? h.loadCases : Te.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of Ve) {
    n.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) n.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  n.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), n.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), n.push("");
  const Re = h.loadCombinations;
  if (Re && Re.length) {
    n.push("$ LOAD COMBINATIONS");
    for (const e of Re) {
      n.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) n.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    n.push("");
  }
  return n.push("  END"), n.push("$ END OF MODEL FILE"), n.join(`\r
`);
}
function ze(h, r) {
  const $ = h[r[0]], M = h[r[1]], I = Math.abs(M[2] - $[2]), g = Math.sqrt((M[0] - $[0]) ** 2 + (M[1] - $[1]) ** 2), L = I > g * 0.5;
  return L && g > 0.01 ? "BRACE" : L ? "COLUMN" : "BEAM";
}
export {
  it as a,
  rt as e,
  ct as p
};
