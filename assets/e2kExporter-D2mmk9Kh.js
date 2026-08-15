function R(p) {
  return p && parseFloat(p) || 0;
}
function He(p) {
  const i = /* @__PURE__ */ new Map(), $ = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let M;
  for (; (M = $.exec(p)) !== null; ) i.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
  return i;
}
function ot(p) {
  const i = p.split(/\r?\n/);
  return i.some((M) => M.trim().startsWith("TABLE:")) ? ve(i) : Ve(i);
}
function ve(p) {
  var _a, _b, _c, _d, _e, _f;
  const i = [];
  let $ = "";
  for (const r of p) {
    const f = r.trimEnd();
    f.endsWith("_") ? $ += f.slice(0, -1) + " " : ($ += f, i.push($), $ = "");
  }
  $ && i.push($);
  const M = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const g = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), L = [], w = [], b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), z = [];
  let n = "";
  for (const r of i) {
    const f = r.trim();
    if (!f || f.startsWith(";") || f.startsWith("File ")) continue;
    if (f.startsWith("TABLE:")) {
      const c = f.match(/TABLE:\s+"(.+?)"/);
      n = c ? c[1].toUpperCase() : "";
      continue;
    }
    if (f === "END TABLE DATA") {
      n = "";
      continue;
    }
    const h = He(f);
    switch (n) {
      case "PROGRAM CONTROL": {
        const c = h.get("CurrUnits");
        if (c) {
          const s = c.split(",").map((o) => o.trim());
          s[0] && (M.force = s[0]), s[1] && (M.length = s[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const c = h.get("Material");
        c && !g.has(c) && g.set(c, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const c = h.get("Material");
        if (c) {
          const s = g.get(c) || { E: 0, nu: 0, G: 0 };
          s.E = R(h.get("E1")), s.G = R(h.get("G12")), s.nu = R(h.get("U12")), s.density = R(h.get("UnitMass")), g.set(c, s);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const c = h.get("Material");
        c && g.has(c) && (g.get(c).fy = R(h.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const c = h.get("SectionName");
        c && d.set(c, { material: h.get("Material") || "", shape: h.get("Shape") || "Rectangular", D: R(h.get("t3")), B: R(h.get("t2")), TF: R(h.get("tf")), TW: R(h.get("tw")), A: R(h.get("Area")), Iz: R(h.get("I33")), Iy: R(h.get("I22")), J: R(h.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const c = h.get("Section");
        c && x.set(c, { material: h.get("Material") || "", type: h.get("Type") || "Shell", thickness: R(h.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const c = h.get("Joint");
        if (c) {
          const s = R(h.get("XorR")), o = R(h.get("Y")), N = R(h.get("Z"));
          u.set(c, [s, o, N]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const c = h.get("Frame"), s = h.get("JointI"), o = h.get("JointJ");
        c && s && o && L.push({ name: c, j1: s, j2: o });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const c = h.get("Area");
        if (c) {
          const s = parseInt(h.get("NumJoints") || "4"), o = [];
          for (let N = 1; N <= s; N++) {
            const Y = h.get(`Joint${N}`);
            Y && o.push(Y);
          }
          o.length >= 3 && w.push({ name: c, joints: o });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const c = h.get("Joint");
        if (c) {
          const s = [((_a = h.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = h.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = h.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = h.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = h.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = h.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          b.set(c, s);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const c = h.get("Frame"), s = h.get("AnalSect");
        c && s && k.set(c, s);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const c = h.get("Area"), s = h.get("Section");
        c && s && H.set(c, s);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const c = h.get("Joint");
        c && z.push({ joint: c, fx: R(h.get("F1")), fy: R(h.get("F2")), fz: R(h.get("F3")), mx: R(h.get("M1")), my: R(h.get("M2")), mz: R(h.get("M3")) });
        break;
      }
    }
  }
  return ze(M, I, g, d, x, u, L, w, b, k, H, z);
}
function Ve(p) {
  const i = { force: "KN", length: "m" };
  let $ = "UX,UY,UZ,RX,RY,RZ";
  const M = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), x = [], u = [], L = /* @__PURE__ */ new Map(), w = [];
  let b = "", k = "";
  for (const n of p) {
    const r = n.trim();
    if (!r || r.startsWith(";")) continue;
    if (!n.startsWith(" ") && !n.startsWith("	")) {
      const c = r.toUpperCase();
      if (c === "END") break;
      c.startsWith("SHELL SECTION") ? b = "SHELL SECTION" : c.startsWith("FRAME SECTION") ? b = "FRAME SECTION" : b = c.split(/\s+/)[0];
      continue;
    }
    const f = He(r), h = r.split(/\s+/);
    switch (b) {
      case "SYSTEM": {
        const c = f.get("DOF");
        c && ($ = c);
        const s = f.get("LENGTH");
        s && (i.length = s);
        const o = f.get("FORCE");
        o && (i.force = o);
        break;
      }
      case "JOINT": {
        const c = h[0];
        d.set(c, [R(f.get("X")), R(f.get("Y")), R(f.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const c = f.get("ADD"), s = f.get("DOF");
        if (c && s) {
          const o = s.split(","), N = [false, false, false, false, false, false];
          for (const Y of o) {
            const T = Y.toUpperCase();
            (T === "UX" || T === "U1") && (N[0] = true), (T === "UY" || T === "U2") && (N[1] = true), (T === "UZ" || T === "U3") && (N[2] = true), (T === "RX" || T === "R1") && (N[3] = true), (T === "RY" || T === "R2") && (N[4] = true), (T === "RZ" || T === "R3") && (N[5] = true);
          }
          L.set(c, N);
        }
        break;
      }
      case "MATERIAL": {
        const c = f.get("NAME");
        if (c) k = c, M.set(c, { E: 0, nu: 0, G: 0 });
        else if (k) {
          const s = M.get(k), o = f.get("E");
          o && (s.E = R(o));
          const N = f.get("U");
          N && (s.nu = R(N)), s.G = s.E / (2 * (1 + s.nu));
          const Y = f.get("M");
          Y && (s.density = R(Y));
        }
        break;
      }
      case "SHELL": {
        const c = h[0], s = f.get("J");
        f.get("SEC"), s && u.push({ name: c, joints: s.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const c = f.get("NAME");
        c && g.set(c, { material: f.get("MAT") || "", type: f.get("TYPE") || "Shell", thickness: R(f.get("TH")) });
        break;
      }
      case "FRAME": {
        const c = h[0], s = f.get("J");
        if (s) {
          const o = s.split(",");
          o.length >= 2 && x.push({ name: c, j1: o[0], j2: o[1] });
        }
        break;
      }
      case "LOAD": {
        const c = f.get("ADD");
        c && w.push({ joint: c, fx: R(f.get("UX")), fy: R(f.get("UY")), fz: R(f.get("UZ")), mx: R(f.get("MX")), my: R(f.get("MY")), mz: R(f.get("MZ")) });
        break;
      }
    }
  }
  return ze(i, $, M, I, g, d, x, u, L, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), w);
}
function ze(p, i, $, M, I, g, d, x, u, L, w, b) {
  var _a;
  const k = [], H = /* @__PURE__ */ new Map(), z = [];
  for (const [T, C] of g) H.set(T, z.length), k.push(T), z.push(C);
  const n = [], r = [], f = /* @__PURE__ */ new Map();
  for (const T of d) {
    const C = H.get(T.j1), B = H.get(T.j2);
    if (C !== void 0 && B !== void 0) {
      const _ = n.length;
      n.push([C, B]), r.push(T.name);
      const D = L.get(T.name);
      D && f.set(_, D);
    }
  }
  const h = n.length;
  for (const T of x) {
    const C = T.joints.map((B) => H.get(B)).filter((B) => B !== void 0);
    if (C.length >= 3) {
      const B = n.length;
      n.push(C), r.push(T.name);
      const _ = w.get(T.name);
      _ && f.set(B, _);
    }
  }
  const c = n.length - h, s = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, o = /* @__PURE__ */ new Map(), N = $.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let T = 0; T < n.length; T++) {
    const C = f.get(T), B = C ? M.get(C) : null, _ = C ? I.get(C) : null;
    if (B || n[T].length === 2) {
      const D = B || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, W = $.get(D.material) || N, Z = W.E || N.E, oe = W.nu || 0.3, K = W.G || Z / (2 * (1 + oe));
      s.elasticities.set(T, Z), s.shearModuli.set(T, K), s.areas.set(T, D.A || D.D * D.B), s.momentsOfInertiaZ.set(T, D.Iz || D.B * D.D ** 3 / 12), s.momentsOfInertiaY.set(T, D.Iy || D.D * D.B ** 3 / 12), s.torsionalConstants.set(T, D.J || 0), s.densities.set(T, W.density || 0), ((_a = D.shape) == null ? void 0 : _a.includes("Wide Flange")) || D.shape === "I" ? o.set(T, { type: "I", b: D.B, h: D.D, name: C || "I-section" }) : o.set(T, { type: "rect", b: D.B, h: D.D });
    } else if (_) {
      const D = $.get(_.material) || N, W = D.E || N.E, Z = D.nu || 0.2, oe = D.G || W / (2 * (1 + Z));
      s.elasticities.set(T, W), s.shearModuli.set(T, oe), s.thicknesses.set(T, _.thickness), s.poissonsRatios.set(T, Z), s.densities.set(T, D.density || 0);
    }
  }
  const Y = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [T, C] of u) {
    const B = H.get(T);
    B !== void 0 && Y.supports.set(B, C);
  }
  for (const T of b) {
    const C = H.get(T.joint);
    if (C !== void 0) {
      const B = Y.forces.get(C) || [0, 0, 0, 0, 0, 0];
      B[0] += T.fx, B[1] += T.fy, B[2] += T.fz, B[3] += T.mx, B[4] += T.my, B[5] += T.mz, Y.forces.set(C, B);
    }
  }
  return { units: p, dof: i, materials: $, frameSections: M, shellSections: I, nodes: z, nodeNames: k, nodeNameToIdx: H, elements: n, elementNames: r, elementSections: f, nodeInputs: Y, elementInputs: s, sectionShapes: o, info: { nNodes: z.length, nFrames: h, nShells: c, title: `SAP2000 (${h} frames, ${c} shells)` } };
}
function at(p) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: i, elements: $, nodeInputs: M, elementInputs: I } = p, g = p.units || { force: "KN", length: "m" }, d = p.title || "Awatif Model", x = [], u = (s) => x.push(s), L = () => x.push(" ");
  u(`File ${d}.$2k was saved on m/d/yy at h:mm:ss`), L(), u('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), u("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), L();
  const w = [], b = [];
  if ($.forEach((s, o) => {
    s.length === 2 ? w.push(o) : b.push(o);
  }), w.length > 0) {
    u('TABLE:  "CONNECTIVITY - FRAME"');
    for (const s of w) {
      const o = $[s];
      u(`   Frame=${s + 1}   JointI=${o[0] + 1}   JointJ=${o[1] + 1}   IsCurved=No`);
    }
    L();
  }
  if (b.length > 0) {
    u('TABLE:  "CONNECTIVITY - AREA"');
    for (const s of b) {
      const o = $[s], N = o.map((Y, T) => `Joint${T + 1}=${Y + 1}`).join("   ");
      u(`   Area=${s + 1}   NumJoints=${o.length}   ${N}`);
    }
    L();
  }
  u('TABLE:  "COORDINATE SYSTEMS"'), u("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), L(), u('TABLE:  "DATABASE FORMAT TYPES"'), u("   UnitsCurr=Yes   OverrideE=No"), L();
  const k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
  for (const s of w) {
    const o = ((_a = I.areas) == null ? void 0 : _a.get(s)) || 0, N = ((_b = I.momentsOfInertiaZ) == null ? void 0 : _b.get(s)) || 0, Y = ((_c = I.momentsOfInertiaY) == null ? void 0 : _c.get(s)) || 0, T = ((_d = I.torsionalConstants) == null ? void 0 : _d.get(s)) || 0, C = ((_e = I.elasticities) == null ? void 0 : _e.get(s)) || 0, B = `MAT_${Math.round(C)}`, _ = `A${o.toPrecision(6)}_Iz${N.toPrecision(6)}`;
    if (!k.has(_)) {
      let W = 0.3, Z = 0.3;
      o > 0 && N > 0 && (W = Math.sqrt(12 * N / o), Z = o / W), k.set(_, { A: o, Iz: N, Iy: Y, J: T, b: Z, h: W, matKey: B });
    }
    const D = [...k.keys()].indexOf(_) + 1;
    H.set(s, `SEC${D}`);
  }
  if (w.length > 0) {
    u('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const s of w) {
      const o = H.get(s) || "SEC1";
      u(`   Frame=${s + 1}   AutoSelect=N.A.   AnalSect=${o}   MatProp=Default`);
    }
    L();
  }
  if (k.size > 0) {
    u('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let s = 0;
    for (const [, o] of k) {
      s++;
      const N = o.A * 5 / 6;
      u(`   SectionName=SEC${s}   Material=${o.matKey}   Shape=Rectangular   t3=${y(o.h)}   t2=${y(o.b)}   Area=${y(o.A)}   TorsConst=${y(o.J)}   I33=${y(o.Iz)}   I22=${y(o.Iy)}   I23=0   AS2=${y(N)}   AS3=${y(N)} _`), u("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    L();
  }
  const z = !!p.layeredSection && b.length > 0, n = p.layeredSection, r = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  if (!z) for (const s of b) {
    const o = ((_f = I.thicknesses) == null ? void 0 : _f.get(s)) || 0.1, N = ((_g = I.elasticities) == null ? void 0 : _g.get(s)) || 0, Y = `MAT_${Math.round(N)}`, T = `t${o.toPrecision(6)}`;
    r.has(T) || r.set(T, { t: o, matKey: Y });
    const C = [...r.keys()].indexOf(T) + 1;
    f.set(s, `SSEC${C}`);
  }
  if (b.length > 0) {
    u('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const s of b) {
      const o = z ? n.name : f.get(s) || "SSEC1";
      u(`   Area=${s + 1}   Section=${o}   MatProp=Default`);
    }
    if (L(), u('TABLE:  "AREA SECTION PROPERTIES"'), z) {
      const s = n, o = ((_h = s.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      u(`   Section=${s.name}   Material=${o}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${y(s.totalThickness)}   BendThick=${y(s.totalThickness)}   Color=Magenta`);
    } else {
      let s = 0;
      for (const [, o] of r) s++, u(`   Section=SSEC${s}   Material=${o.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${y(o.t)}   BendThick=${y(o.t)}   Color=Cyan`);
    }
    if (L(), z) {
      u('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const s = n;
      for (const o of s.layers) {
        const N = o.angle ?? 0, Y = o.numIntPts ?? 3;
        u(`   Section=${s.name}   LayerName=${o.name}   Distance=${y(o.distance)}   Thickness=${y(o.thickness)}   Type=Shell   NumIntPts=${Y}   Material=${o.material}   MatAngle=${y(N * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      L();
    }
  }
  u('TABLE:  "JOINT COORDINATES"');
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    u(`   Joint=${s + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${y(o[0])}   Y=${y(o[1])}   Z=${y(o[2])}   SpecialJt=No`);
  }
  if (L(), M.supports && M.supports.size > 0) {
    u('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [s, o] of M.supports) {
      if (!o.some((Y) => Y)) continue;
      const N = (Y) => Y ? "Yes" : "No";
      u(`   Joint=${s + 1}   U1=${N(o[0])}   U2=${N(o[1])}   U3=${N(o[2])}   R1=${N(o[3])}   R2=${N(o[4])}   R3=${N(o[5])}`);
    }
    L();
  }
  const h = p.selfWtMult ?? 1;
  if (u('TABLE:  "LOAD PATTERN DEFINITIONS"'), u(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${h}`), L(), u('TABLE:  "LOAD CASE DEFINITIONS"'), u('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), L(), u('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), u('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), L(), M.forces && M.forces.size > 0) {
    u('TABLE:  "JOINT LOADS - FORCE"');
    for (const [s, o] of M.forces) o.some((N) => Math.abs(N) > 1e-12) && u(`   Joint=${s + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${y(o[0])}   F2=${y(o[1])}   F3=${y(o[2])}   M1=${y(o[3])}   M2=${y(o[4])}   M3=${y(o[5])}`);
    L();
  }
  const c = /* @__PURE__ */ new Map();
  for (let s = 0; s < $.length; s++) {
    const o = ((_i = I.elasticities) == null ? void 0 : _i.get(s)) || 0, N = ((_j = I.shearModuli) == null ? void 0 : _j.get(s)) || 0, Y = o > 0 && N > 0 ? Math.max(0, Math.min(0.5, o / (2 * N) - 1)) : 0.2, T = ((_k = I.densities) == null ? void 0 : _k.get(s)) || 0, C = `MAT_${Math.round(o)}`;
    c.has(C) || c.set(C, { E: o, nu: Y, G: N, rho: T });
  }
  u('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [s] of c) u(`   Material=${s}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  L(), u('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [s, o] of c) u(`   Material=${s}   UnitWeight=${y(o.rho * 9.81)}   UnitMass=${y(o.rho)}   E1=${y(o.E)}   G12=${y(o.G)}   U12=${y(o.nu)}   A1=9.9E-06`);
  L(), u('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [s] of c) u(`   Material=${s}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return L(), u('TABLE:  "PROGRAM CONTROL"'), u(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${g.force}, ${g.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), L(), u("END TABLE DATA"), u(""), x.join(`\r
`);
}
function y(p) {
  return p === 0 || Math.abs(p) < 1e-15 ? "0" : Math.abs(p) >= 1e6 || Math.abs(p) < 1e-3 && Math.abs(p) > 0 ? p.toExponential(8) : parseFloat(p.toPrecision(10)).toString();
}
function Ke(p, i, $ = 0.05) {
  const M = i.map(([I, g]) => `${(+I).toFixed(4)} ${(+g).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${p}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${$}  SPECTYPE "USER"  `, `  FUNCTION "${p}"  TIMEVAL "${M}"  `];
}
function qe(p) {
  const { name: i, func: $, modalCase: M = "Modal", sfX: I = 9.81, sfY: g = 9.81 } = p, d = [`  LOADCASE "${i}"  TYPE  "Response Spectrum"  MODALCASE  "${M}"  `];
  return I && d.push(`  LOADCASE "${i}"  ACCEL  "U1"  FUNC  "${$}"  SF  ${I}  `), g && d.push(`  LOADCASE "${i}"  ACCEL  "U2"  FUNC  "${$}"  SF  ${g}  `), d;
}
function we(p) {
  const { name: i = "Modal", ritz: $ = false, nModes: M = 12 } = p;
  return $ ? [`  LOADCASE "${i}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${M} MINMODES  1 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${i}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${M} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function ct(p) {
  var _a;
  const i = (_a = p.e2kModel) == null ? void 0 : _a.rawSections;
  let $ = i && i.size > 0 ? et(i, p.e2kModel) : tt(p);
  return p.seismicNEC && ($ = Qe($, p.seismicNEC)), $;
}
function Qe(p, i) {
  const $ = p.includes(`\r
`) ? `\r
` : `
`, M = p.split(/\r?\n/), I = i.name ?? "NEC", g = Ke(I, i.points, i.dampRatio ?? 0.05), d = i.modalCase ?? "Modal", x = qe({ name: i.caseName ?? "Sismo NEC", func: I, modalCase: d, sfX: i.sfX, sfY: i.sfY });
  let u = [];
  const L = (w) => M.some((b) => w.test(b));
  if (i.modal) {
    const w = new RegExp(`^\\s*LOADCASE\\s+"${d}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let b = M.length - 1; b >= 0; b--) w.test(M[b]) && M.splice(b, 1);
    u = we({ name: d, ritz: !!i.modal.ritz, nModes: i.modal.nModes });
  } else L(new RegExp(`LOADCASE\\s+"${d}"\\s+TYPE\\s+"Modal`)) || (u = we({ name: d }));
  return ke(M, "FUNCTIONS", g), ke(M, "LOAD CASES", [...u, ...x]), M.join($);
}
function ke(p, i, $) {
  const M = p.findIndex((d) => d.trim() === `$ ${i}`);
  if (M >= 0) {
    p.splice(M + 1, 0, ...$);
    return;
  }
  const I = p.findIndex((d) => d.trim() === "END"), g = I >= 0 ? I : p.length;
  p.splice(g, 0, `$ ${i}`, ...$, "");
}
function et(p, i) {
  const $ = [], M = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  $.push("$ File exported from Hekatan Struct Lineal (round-trip)"), $.push("");
  for (const I of M) {
    const g = p.get(I);
    if (!(!g || g.length === 0)) {
      $.push(`$ ${I}`);
      for (const d of g) $.push(d);
      $.push("");
    }
  }
  for (const [I, g] of p) if (!M.includes(I) && g.length !== 0) {
    $.push(`$ ${I}`);
    for (const d of g) $.push(d);
    $.push("");
  }
  return $.push("  END"), $.push("$ END OF MODEL FILE"), $.join(`\r
`);
}
function tt(p) {
  var _a, _b, _c, _d, _e2, _f, _g;
  const { nodes: i, elements: $, nodeInputs: M, elementInputs: I, title: g, units: d } = p, x = p.shellLoads ?? I.shellSurfaceLoads;
  let u;
  x instanceof Map && (u = /* @__PURE__ */ new Map(), x.forEach((e, t) => {
    u.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const L = p.shellAngles ?? I.shellAngles, w = I.cargaDeArea, b = !!(u && u.size > 0), k = (e, t) => [t[0], t[1], t[2] - (b ? (w == null ? void 0 : w.get(e)) ?? 0 : 0)], H = (d == null ? void 0 : d.force) || "Tonf", z = (d == null ? void 0 : d.length) || "m", n = [], r = (e) => Math.round(e * 1e4) / 1e4, f = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), h = (() => {
    const e = (H || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), c = (e) => e * h, s = (e) => e * h, o = (e) => e * h, N = /* @__PURE__ */ new Date(), Y = `${N.getMonth() + 1}/${N.getDate()}/${N.getFullYear()}  ${N.getHours()}:${String(N.getMinutes()).padStart(2, "0")}:${String(N.getSeconds()).padStart(2, "0")}`;
  n.push(`$ File   "Hekatan_export.e2k"  saved ${Y} in ETABS 22.6.0`), n.push(""), n.push("$ PROGRAM INFORMATION"), n.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), n.push(""), n.push("$ CONTROLS"), n.push(`  UNITS  "${H}"  "${z}"  "C"  `), n.push('  TITLE1  "Hekatan Struct Lineal export"  '), g && n.push(`  TITLE2  "${g}"  `), n.push("  PREFERENCE  MERGETOL 0.001"), n.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), n.push("");
  const T = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
  i.forEach((e) => {
    T.add(r(e[0])), C.add(r(e[1]));
  });
  const B = [...T].sort((e, t) => e - t), _ = [...C].sort((e, t) => e - t);
  n.push("$ GRIDS"), n.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), B.forEach((e, t) => {
    const a = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    n.push(`  GRID "G1"  LABEL "${a}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), _.forEach((e, t) => {
    n.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), n.push("");
  const D = 3, W = 0.5, Z = /* @__PURE__ */ new Map();
  i.forEach((e) => {
    const t = r(e[2]);
    Z.set(t, (Z.get(t) ?? 0) + 1);
  });
  const oe = /* @__PURE__ */ new Set();
  i.forEach((e) => oe.add(r(e[2])));
  const K = [...oe].sort((e, t) => e - t);
  let P = K.filter((e) => (Z.get(e) ?? 0) >= D);
  if (P.length > 1) {
    const e = [P[0]];
    for (const t of P.slice(1)) t - e[e.length - 1] < W ? e[e.length - 1] = t : e.push(t);
    P = e;
  }
  P.length || (P = K.slice()), P[0] !== K[0] && P.unshift(K[0]), P[P.length - 1] !== K[K.length - 1] && P.push(K[K.length - 1]);
  const $e = [], ae = /* @__PURE__ */ new Map();
  $e.push("Base"), ae.set(P[0], "Base");
  for (let e = 1; e < P.length; e++) {
    const t = `Level_${e}`;
    $e.push(t), ae.set(P[e], t);
  }
  const me = (e) => {
    const t = r(e);
    if (ae.has(t)) return { story: ae.get(t), dz: 0 };
    for (let E = 0; E < P.length; E++) if (P[E] >= t) return { story: ae.get(P[E]), dz: r(P[E] - t) };
    const a = P[P.length - 1];
    return { story: ae.get(a), dz: r(a - t) };
  };
  n.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = P.length - 1; e >= 1; e--) n.push(`  STORY "${$e[e]}"  HEIGHT ${r(P[e] - P[e - 1])} MASTERSTORY "Yes"  `);
  P.length > 0 && n.push(`  STORY "Base"  ELEV ${P[0]} `), n.push(""), $.some((e) => e.length === 4), n.push("$ DIAPHRAGM NAMES"), n.push('  DIAPHRAGM "D1"    TYPE RIGID'), n.push(""), n.push("$ MATERIAL PROPERTIES");
  const Ce = /* @__PURE__ */ new Set();
  (_a = I.elasticities) == null ? void 0 : _a.forEach((e) => Ce.add(e));
  const Ee = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
  let Je = 0, _e = 0;
  const We = 980665e-8, De = /* @__PURE__ */ new Map();
  if (I.densities && I.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    I.densities.forEach((t, a) => {
      var _a2;
      const E = (_a2 = I.elasticities) == null ? void 0 : _a2.get(a);
      E !== void 0 && (e.has(E) || e.set(E, []), e.get(E).push(t));
    }), e.forEach((t, a) => {
      const E = t.reduce((l, O) => l + O, 0) / t.length, S = E > 100 ? E * We : E * 9.80665;
      De.set(a, S);
    });
  }
  for (const e of Ce) {
    const t = e >= 1e8, a = t ? `Steel_${++Je}` : `Conc_${++_e}`;
    Ee.set(e, a), Me.set(e, t);
    const E = De.get(e) ?? (t ? 76.97 : 24), S = s(e), l = o(E), O = t ? 0.3 : 0.2, A = t ? 117e-7 : 1e-5;
    if (t) {
      n.push(`  MATERIAL  "${a}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${r(l)}`), n.push(`  MATERIAL  "${a}"    SYMTYPE "Isotropic"  E ${r(S)}  U ${O}  A ${A}`);
      const F = 345e3, J = 45e4;
      n.push(`  MATERIAL  "${a}"  FY ${r(s(F))}  FU ${r(s(J))}  FYE ${r(s(F * 1.1))}  FUE ${r(s(J * 1.1))}`);
    } else n.push(`  MATERIAL  "${a}"    TYPE "Concrete"    WEIGHTPERVOLUME ${r(l)}`), n.push(`  MATERIAL  "${a}"    SYMTYPE "Isotropic"  E ${r(S)}  U ${O}  A ${A}`), n.push(`  MATERIAL  "${a}"    FC ${r(s(24e3))}`);
  }
  n.push(""), n.push("$ FRAME SECTIONS");
  const re = /* @__PURE__ */ new Set(), Ne = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Q = 0.05;
  $.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j;
    if (e.length !== 2) return;
    const a = (_a2 = I.sectionShapes) == null ? void 0 : _a2.get(t), E = ((_b2 = I.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, S = Ee.get(E) || "Conc_1", l = Me.get(E) ?? E >= 1e8, O = ((_c2 = I.areas) == null ? void 0 : _c2.get(t)) ?? 0, A = ((_d2 = I.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, F = ((_e3 = I.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, J = ((_f2 = I.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let U = (a == null ? void 0 : a.type) || "rect", m = (a == null ? void 0 : a.h) ?? 0, G = (a == null ? void 0 : a.b) ?? 0, ne = (a == null ? void 0 : a.d) ?? 0;
    const Le = (a == null ? void 0 : a.tf) ?? 0, ue = (a == null ? void 0 : a.tw) ?? 0;
    if (!a && m <= 0 && G <= 0 && ne <= 0 && O > 0 && A > 0 && F > 0) {
      const v = (_g2 = I.cantos) == null ? void 0 : _g2.get(t), ie = (_h = I.anchos) == null ? void 0 : _h.get(t);
      m = v && v > 0 ? v : Math.sqrt(12 * A / O), G = ie && ie > 0 ? ie : O / m, (!isFinite(m) || m < Q) && (m = Q), (!isFinite(G) || G < Q) && (G = Q), U = "general";
    } else m <= 0 && G <= 0 && ne <= 0 && O > 0 && (A > 0 ? (m = Math.sqrt(12 * A / O), G = O / m) : m = G = Math.sqrt(O), (!isFinite(m) || m < Q) && (m = Q), (!isFinite(G) || G < Q) && (G = Q), U = "rect");
    m <= 0 && G <= 0 && ne <= 0 && (m = 0.3, G = 0.3, U = "rect");
    const Ie = (a == null ? void 0 : a.name) ? `NAME_${a.name}` : `${U}_${r(m)}_${r(G)}_${r(ne)}_${r(Le)}_${r(ue)}_${S}`;
    (a == null ? void 0 : a.name) && !Se.has(Ie) && Se.set(Ie, a.name);
    let X = Se.get(Ie);
    if (!X) {
      const v = l ? "S" : "C";
      U === "general" ? X = `${v}_G${re.size + 1}` : U === "rect" ? X = `${v}_R${Math.round(G * 100)}x${Math.round(m * 100)}` : U === "circ" ? X = `${v}_C_D${Math.round(ne * 100)}` : U === "I" ? X = `${v}_I${Math.round(m * 100)}x${Math.round(G * 100)}` : U === "HSS" ? X = `${v}_HSS${Math.round(G * 100)}x${Math.round(m * 100)}x${Math.round(ue * 1e3)}` : X = `${v}_Sec${re.size + 1}`, Se.set(Ie, X);
    }
    if (Ne.set(t, X), re.has(X)) return;
    re.add(X);
    let V;
    U === "general" ? V = "General" : U === "I" ? V = "Steel I/Wide Flange" : U === "HSS" ? V = "Steel Tube" : U === "CFT" ? V = "Filled Steel Tube" : U === "pipe" ? V = "Steel Pipe" : U === "L" ? V = "Steel Angle" : U === "C" ? V = "Steel Channel" : U === "2C" ? V = "Steel Double Channel" : U === "circ" ? V = "Concrete Circle" : V = "Concrete Rectangular";
    let se = `  FRAMESECTION  "${X}"  MATERIAL "${S}"  SHAPE "${V}"`;
    if (U === "general") {
      const v = ((_i = I.shearAreasY) == null ? void 0 : _i.get(t)) || O * 5 / 6, ie = ((_j = I.shearAreasZ) == null ? void 0 : _j.get(t)) || O * 5 / 6;
      se += `  D ${r(m)} B ${r(G)} AREA ${f(O)} AS2 ${f(v)} AS3 ${f(ie)} I33 ${f(A)} I22 ${f(F)} TORSION ${f(J || A + F)} S33POS ${f(2 * A / m)} S33NEG ${f(2 * A / m)} S22POS ${f(2 * F / G)} S22NEG ${f(2 * F / G)} Z33 ${f(2 * A / m)} Z22 ${f(2 * F / G)} R33 ${f(Math.sqrt(A / O))} R22 ${f(Math.sqrt(F / O))} `, n.push(se);
      return;
    }
    m && (se += `  D ${r(m)}`), G && (se += `  B ${r(G)}`), ne && !m && (se += `  D ${r(ne)}`), Le && (se += `  TF ${r(Le)}`), ue && (se += `  TW ${r(ue)}`), n.push(se);
  }), n.push("");
  const le = /* @__PURE__ */ new Map();
  let Ze = 0;
  i.forEach((e) => {
    const { dz: t } = me(e[2]), a = `${r(e[0])},${r(e[1])},${t}`;
    le.has(a) || le.set(a, `${++Ze}`);
  }), n.push("$ POINT COORDINATES");
  for (const [e, t] of le) {
    const [a, E, S] = e.split(",").map(Number);
    n.push(S ? `  POINT "${t}"  ${a} ${E} ${S} ` : `  POINT "${t}"  ${a} ${E} `);
  }
  n.push("");
  const j = (e) => {
    const t = i[e], { story: a, dz: E } = me(t[2]), S = `${r(t[0])},${r(t[1])},${E}`;
    return { pt: le.get(S) || "1", story: a };
  }, Pe = (e) => {
    var _a2, _b2, _c2, _d2, _e3;
    const t = [], a = (_a2 = p.propertyModifiers) == null ? void 0 : _a2.get(e);
    a && a.some((A) => Math.abs(A - 1) > 1e-9) && t.push(`PROPMODIFIERS "${a.map((A) => r(A)).join(" ")}"`);
    const E = (_b2 = I.localAngles) == null ? void 0 : _b2.get(e);
    E !== void 0 && isFinite(E) && Math.abs(E) > 1e-9 && t.push(`ANG ${r(E)}`);
    const S = (_c2 = I.momentReleases) == null ? void 0 : _c2.get(e);
    if (S && S.some((A) => A)) {
      const A = [];
      S.length === 12 ? (S[0] && A.push("PI"), S[1] && A.push("V2I"), S[2] && A.push("V3I"), S[3] && A.push("TI"), S[4] && A.push("M2I"), S[5] && A.push("M3I"), S[6] && A.push("PJ"), S[7] && A.push("V2J"), S[8] && A.push("V3J"), S[9] && A.push("TJ"), S[10] && A.push("M2J"), S[11] && A.push("M3J")) : S.length === 6 && (S[0] && A.push("TI"), S[1] && A.push("M2I"), S[2] && A.push("M3I"), S[3] && A.push("TJ"), S[4] && A.push("M2J"), S[5] && A.push("M3J")), A.length > 0 && t.push(`RELEASE "${A.join(" ")}"`);
    }
    const l = (_d2 = I.insertionPoints) == null ? void 0 : _d2.get(e);
    l && (Math.abs(l[0]) > 1e-9 || Math.abs(l[1]) > 1e-9) && t.push(`LATEROFFSET ${r(l[0])} TRANSOFFSET ${r(l[1])}`);
    const O = (_e3 = I.rigidOffsets) == null ? void 0 : _e3.get(e);
    return O && (Math.abs(O[0]) > 1e-9 || Math.abs(O[1]) > 1e-9) && t.push(`LENGTHOFFI ${r(O[0])} LENGTHOFFJ ${r(O[1])} RIGIDZONE 0.5`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, Oe = [], Fe = /* @__PURE__ */ new Set(), fe = /* @__PURE__ */ new Map();
  $.forEach((e, t) => {
    if (e.length !== 2) return;
    const a = xe(i, e);
    if (a === "BEAM") return;
    const E = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], S = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    if (Math.abs(i[E][0] - i[S][0]) > 1e-6 || Math.abs(i[E][1] - i[S][1]) > 1e-6) return;
    const l = j(E), O = Ne.get(t) || `Sec_${t}`, A = `${l.pt}_${O}_${a}`;
    fe.has(A) || fe.set(A, []), fe.get(A).push({ i: t, bot: E, top: S, zBot: r(i[E][2]), zTop: r(i[S][2]), planPt: l.pt, secName: O, type: a });
  }), fe.forEach((e, t) => {
    e.sort((E, S) => E.zBot - S.zBot);
    let a = 0;
    for (let E = 1; E <= e.length; E++) if (E === e.length || Math.abs(e[E].zBot - e[E - 1].zTop) > 1e-6) {
      const l = e.slice(a, E);
      l.length >= 1 && (Oe.push({ elemIndices: l.map((O) => O.i), planPt: l[0].planPt, bottomNodeIdx: l[0].bot, topNodeIdx: l[l.length - 1].top, secName: l[0].secName, type: l[0].type, nSegments: l.length }), l.forEach((O) => Fe.add(O.i))), a = E;
    }
  }), n.push("$ LINE CONNECTIVITIES");
  const Ae = [];
  Oe.forEach((e, t) => {
    const a = `C${t + 1}`, E = j(e.topNodeIdx);
    j(e.bottomNodeIdx);
    const S = r(i[e.topNodeIdx][2]), l = r(i[e.bottomNodeIdx][2]), O = P.indexOf(S), A = P.indexOf(l), F = Math.max(1, O - A), J = Pe(e.elemIndices[0]);
    n.push(`  LINE  "${a}"  ${e.type}  "${E.pt}"  "${E.pt}"  ${F}`), Ae.push(`  LINEASSIGN  "${a}"  "${E.story}"  SECTION "${e.secName}" ${J} MINNUMSTA ${e.nSegments} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  }), $.forEach((e, t) => {
    if (e.length !== 2 || Fe.has(t)) return;
    const a = xe(i, e), E = Ne.get(t) || `Sec_${t}`, S = Pe(t);
    if (a === "BEAM") {
      const l = j(e[0]), O = j(e[1]);
      n.push(`  LINE  "E${t + 1}"  BEAM  "${l.pt}"  "${O.pt}"  0`), Ae.push(`  LINEASSIGN  "E${t + 1}"  "${l.story}"  SECTION "${E}" ${S} MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      const l = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], O = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0], A = j(O), F = r(i[l][2]), J = r(i[O][2]), U = P.indexOf(F), m = P.indexOf(J), G = Math.max(1, m >= 0 && U >= 0 ? m - U : 1);
      n.push(`  LINE  "E${t + 1}"  ${a}  "${A.pt}"  "${A.pt}"  ${G}`), Ae.push(`  LINEASSIGN  "E${t + 1}"  "${A.story}"  SECTION "${E}" ${S} MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  }), n.push("");
  const pe = p.weightMode ?? "auto", ce = /* @__PURE__ */ new Set();
  n.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((e, t) => {
    const a = [];
    if (e[0] && a.push("UX"), e[1] && a.push("UY"), e[2] && a.push("UZ"), e[3] && a.push("RX"), e[4] && a.push("RY"), e[5] && a.push("RZ"), a.length > 0) {
      const E = j(t), S = E.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      n.push(`  POINTASSIGN  "${E.pt}"  "${E.story}"  RESTRAINT "${a.join(" ")}" ${S} `), ce.add(`${E.pt}@${E.story}`);
    }
  });
  const ye = (p.diaphragm ?? "auto") !== "none";
  ye && Oe.forEach((e) => {
    const t = j(e.topNodeIdx), a = `${t.pt}@${t.story}`;
    !ce.has(a) && t.story !== "Base" && (n.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), ce.add(a));
  }), pe === "manual" && M.loads && M.loads.forEach((e, t) => {
    const [a, E, S] = k(t, e);
    if (Math.abs(a) < 1e-10 && Math.abs(E) < 1e-10 && Math.abs(S) < 1e-10) return;
    const l = j(t), O = `${l.pt}@${l.story}`;
    ce.has(O) || (n.push(`  POINTASSIGN  "${l.pt}"  "${l.story}"  DIAPH "DISCONNECTED"  `), ce.add(O));
  }), n.push(""), n.push("$ LINE ASSIGNS"), Ae.forEach((e) => n.push(e)), n.push("");
  const ee = [], Ye = I.areaObjects, Ue = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map();
  Ye == null ? void 0 : Ye.forEach((e) => e.cells.forEach((t) => Ue.add(t))), $.forEach((e, t) => {
    if (e.length === 4) {
      const a = i[e[0]], E = i[e[1]], S = i[e[2]], l = [E[0] - a[0], E[1] - a[1], E[2] - a[2]], O = [S[0] - a[0], S[1] - a[1], S[2] - a[2]], A = l[1] * O[2] - l[2] * O[1], F = l[2] * O[0] - l[0] * O[2], J = l[0] * O[1] - l[1] * O[0], U = Math.sqrt(A * A + F * F + J * J), m = U > 1e-10 && Math.abs(J) / U < 0.5;
      ee.push({ idx: t, el: e, isWall: m }), Ue.has(t) && ee.pop();
    }
  });
  const he = (() => {
    for (const [e, t] of Me) if (!t) return Ee.get(e);
    return Ee.values().next().value || "Conc_1";
  })();
  Ye == null ? void 0 : Ye.forEach((e, t) => {
    ee.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && be.set(e.cells[0], e.q), e.ang !== void 0 && Be.set(e.cells[0], e.ang);
  });
  const Ge = "DECK";
  let ge = false;
  const Re = [];
  if (ee.some((e) => !e.isWall)) {
    const e = I.bendingModifiers, t = I.shellModifiers;
    ge = (() => {
      for (const E of ee) {
        if (E.isWall) continue;
        const S = t == null ? void 0 : t.get(E.idx);
        if (S && Math.abs(S[3]) < 1e-9 && Math.abs(S[4]) < 1e-9) return true;
        const l = e == null ? void 0 : e.get(E.idx);
        if (l !== void 0 && Math.abs(l) < 1e-9) return true;
      }
      return false;
    })();
    const a = ((_c = I.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    ge ? (n.push("$ DECK PROPERTIES"), n.push(`  SHELLPROP  "${Ge}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${he}"  DECKMATERIAL "${he}"  DECKSLABDEPTH ${f(a * 65 / 120)} DECKRIBDEPTH ${f(a * 55 / 120)} DECKRIBWIDTHTOP ${f(a * 150 / 120)} DECKRIBWIDTHBOTTOM ${f(a * 100 / 120)} DECKRIBSPACING ${f(a * 200 / 120)} DECKSHEARTHICKNESS ${f(a * 0.76 / 120)} DECKUNITWEIGHT ${f(c(0.11012))} SHEARSTUDDIAM ${f(a * 19 / 120)} SHEARSTUDHEIGHT ${f(a * 100 / 120)} SHEARSTUDFU 400 `)) : (n.push("$ SLAB PROPERTIES"), n.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${he}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${r(a)} `)), n.push("");
  }
  if (ee.some((e) => e.isWall)) {
    n.push("$ WALL PROPERTIES");
    const e = ((_d = I.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    n.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${he}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${r(e)} `), n.push("");
  }
  if (ee.length > 0) {
    n.push("$ AREA CONNECTIVITIES");
    const e = [];
    ee.forEach((t, a) => {
      const { el: E, isWall: S } = t, l = S ? `W${a + 1}` : `F${a + 1}`, O = S ? "PANEL" : "FLOOR", A = E.map((F) => j(F));
      if (S) {
        const F = i[E[0]][2] <= i[E[2]][2] ? 0 : 2, J = i[E[1]][2] <= i[E[3]][2] ? 1 : 3;
        n.push(`  AREA "${l}"  ${O}  4  "${A[F].pt}"  "${A[J].pt}"  "${A[J].pt}"  "${A[F].pt}"  1  1  0  0  `);
        const U = A[F === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${l}"  "${U}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        n.push(`  AREA "${l}"  ${O}  4  "${A[0].pt}"  "${A[1].pt}"  "${A[2].pt}"  "${A[3].pt}"  0  0  0  0  `);
        const F = Be.get(t.idx) ?? (L == null ? void 0 : L.get(t.idx));
        e.push(ge ? `  AREAASSIGN  "${l}"  "${A[0].story}"  SECTION "${Ge}"  ANG ${r(F ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${l}"  "${A[0].story}"  SECTION "Losa" ${ye ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Re.push({ name: l, story: A[0].story, idx: t.idx });
      }
    }), n.push(""), n.push("$ AREA ASSIGNS"), e.forEach((t) => n.push(t)), n.push("");
  }
  const je = pe === "manual" ? 0 : 1;
  n.push("$ LOAD PATTERNS");
  const Te = ((_e2 = p.loadPatterns) == null ? void 0 : _e2.length) ? p.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: je }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of Te) {
    const t = e.type === "Dead" ? pe === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : e.selfWeightMultiplier ?? 0;
    n.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  n.push("");
  const te = ((_f = Te.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? Te[0].name, q = [];
  if (M.loads && M.loads.size > 0 && M.loads.forEach((e, t) => {
    const [a, E, S] = k(t, e), l = j(t);
    Math.abs(a) > 1e-10 && q.push(`  POINTLOAD  "${l.pt}"  "${l.story}"  TYPE "FORCE"  LC "${te}"  FX ${r(c(a))}  FY 0  FZ 0`), Math.abs(E) > 1e-10 && q.push(`  POINTLOAD  "${l.pt}"  "${l.story}"  TYPE "FORCE"  LC "${te}"  FX 0  FY ${r(c(E))}  FZ 0`);
    const O = e[3] ?? 0, A = e[4] ?? 0, F = e[5] ?? 0;
    (Math.abs(O) > 1e-10 || Math.abs(A) > 1e-10 || Math.abs(F) > 1e-10) && q.push(`  POINTLOAD  "${l.pt}"  "${l.story}"  TYPE "FORCE"  LC "${te}"  FX 0  FY 0  FZ 0  MX ${r(c(O))}  MY ${r(c(A))}  MZ ${r(c(F))}`), pe === "manual" && Math.abs(S) > 1e-10 && q.push(`  POINTLOAD  "${l.pt}"  "${l.story}"  TYPE "FORCE"  LC "${te}"  FX 0  FY 0  FZ ${r(c(S))}`);
  }), M.moments && M.moments.size > 0 && M.moments.forEach((e, t) => {
    const [a, E, S] = e, l = j(t);
    Math.abs(a) > 1e-10 && q.push(`  POINTLOAD  "${l.pt}"  "${l.story}"  TYPE "MOMENT"  LC "${te}"  MX ${r(c(a))}  MY 0  MZ 0`), Math.abs(E) > 1e-10 && q.push(`  POINTLOAD  "${l.pt}"  "${l.story}"  TYPE "MOMENT"  LC "${te}"  MX 0  MY ${r(c(E))}  MZ 0`), Math.abs(S) > 1e-10 && q.push(`  POINTLOAD  "${l.pt}"  "${l.story}"  TYPE "MOMENT"  LC "${te}"  MX 0  MY 0  MZ ${r(c(S))}`);
  }), q.length > 0 && (n.push("$ POINT OBJECT LOADS"), q.forEach((e) => n.push(e)), n.push("")), u && u.size > 0 && Re.length > 0) {
    const e = [];
    for (const t of Re) {
      const a = be.get(t.idx), E = a !== void 0 ? { value: a } : u.get(t.idx);
      if (!E || Math.abs(E.value) < 1e-12) continue;
      const S = E.dir ?? "GRAV", l = S === "GRAV" ? Math.abs(E.value) : E.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${S}"  LC "${E.pattern ?? te}"  FVAL ${r(c(l))}`);
    }
    e.length > 0 && (n.push("$ SHELL OBJECT LOADS"), e.forEach((t) => n.push(t)), n.push(""));
  }
  n.push("$ ANALYSIS OPTIONS"), n.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), n.push('  PDELTA  METHOD "NONE"  '), n.push(""), n.push("$ MASS SOURCE"), n.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), n.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), n.push(""), n.push("$ LOAD CASES");
  const Xe = ((_g = p.loadCases) == null ? void 0 : _g.length) ? p.loadCases : Te.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of Xe) {
    n.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) n.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  n.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), n.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), n.push("");
  const de = p.loadCombinations;
  if (de && de.length) {
    n.push("$ LOAD COMBINATIONS");
    for (const e of de) {
      n.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) n.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    n.push("");
  }
  return n.push("  END"), n.push("$ END OF MODEL FILE"), n.join(`\r
`);
}
function xe(p, i) {
  const $ = p[i[0]], M = p[i[1]], I = Math.abs(M[2] - $[2]), g = Math.sqrt((M[0] - $[0]) ** 2 + (M[1] - $[1]) ** 2), d = I > g * 0.5;
  return d && g > 0.01 ? "BRACE" : d ? "COLUMN" : "BEAM";
}
export {
  at as a,
  ct as e,
  ot as p
};
