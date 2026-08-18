function d(A) {
  return A && parseFloat(A) || 0;
}
function Je(A) {
  const c = /* @__PURE__ */ new Map(), M = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let O;
  for (; (O = M.exec(A)) !== null; ) c.set(O[1], O[2] !== void 0 ? O[2] : O[3]);
  return c;
}
function it(A) {
  const c = A.split(/\r?\n/);
  return c.some((O) => O.trim().startsWith("TABLE:")) ? Ke(c) : qe(c);
}
function Ke(A) {
  var _a, _b, _c, _d, _e2, _f;
  const c = [];
  let M = "";
  for (const $ of A) {
    const E = $.trimEnd();
    E.endsWith("_") ? M += E.slice(0, -1) + " " : (M += E, c.push(M), M = "");
  }
  M && c.push(M);
  const O = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const R = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), C = [], w = [], B = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), J = [];
  let s = "";
  for (const $ of c) {
    const E = $.trim();
    if (!E || E.startsWith(";") || E.startsWith("File ")) continue;
    if (E.startsWith("TABLE:")) {
      const i = E.match(/TABLE:\s+"(.+?)"/);
      s = i ? i[1].toUpperCase() : "";
      continue;
    }
    if (E === "END TABLE DATA") {
      s = "";
      continue;
    }
    const u = Je(E);
    switch (s) {
      case "PROGRAM CONTROL": {
        const i = u.get("CurrUnits");
        if (i) {
          const S = i.split(",").map((a) => a.trim());
          S[0] && (O.force = S[0]), S[1] && (O.length = S[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const i = u.get("Material");
        i && !R.has(i) && R.set(i, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const i = u.get("Material");
        if (i) {
          const S = R.get(i) || { E: 0, nu: 0, G: 0 };
          S.E = d(u.get("E1")), S.G = d(u.get("G12")), S.nu = d(u.get("U12")), S.density = d(u.get("UnitMass")), R.set(i, S);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const i = u.get("Material");
        i && R.has(i) && (R.get(i).fy = d(u.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const i = u.get("SectionName");
        i && D.set(i, { material: u.get("Material") || "", shape: u.get("Shape") || "Rectangular", D: d(u.get("t3")), B: d(u.get("t2")), TF: d(u.get("tf")), TW: d(u.get("tw")), A: d(u.get("Area")), Iz: d(u.get("I33")), Iy: d(u.get("I22")), J: d(u.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const i = u.get("Section");
        i && x.set(i, { material: u.get("Material") || "", type: u.get("Type") || "Shell", thickness: d(u.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const i = u.get("Joint");
        if (i) {
          const S = d(u.get("XorR")), a = d(u.get("Y")), n = d(u.get("Z"));
          T.set(i, [S, a, n]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const i = u.get("Frame"), S = u.get("JointI"), a = u.get("JointJ");
        i && S && a && C.push({ name: i, j1: S, j2: a });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const i = u.get("Area");
        if (i) {
          const S = parseInt(u.get("NumJoints") || "4"), a = [];
          for (let n = 1; n <= S; n++) {
            const L = u.get(`Joint${n}`);
            L && a.push(L);
          }
          a.length >= 3 && w.push({ name: i, joints: a });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const i = u.get("Joint");
        if (i) {
          const S = [((_a = u.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = u.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = u.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = u.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e2 = u.get("R2")) == null ? void 0 : _e2.toLowerCase()) === "yes", ((_f = u.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          B.set(i, S);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const i = u.get("Frame"), S = u.get("AnalSect");
        i && S && k.set(i, S);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const i = u.get("Area"), S = u.get("Section");
        i && S && H.set(i, S);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const i = u.get("Joint");
        i && J.push({ joint: i, fx: d(u.get("F1")), fy: d(u.get("F2")), fz: d(u.get("F3")), mx: d(u.get("M1")), my: d(u.get("M2")), mz: d(u.get("M3")) });
        break;
      }
    }
  }
  return _e(O, I, R, D, x, T, C, w, B, k, H, J);
}
function qe(A) {
  const c = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const O = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), x = [], T = [], C = /* @__PURE__ */ new Map(), w = [];
  let B = "", k = "";
  for (const s of A) {
    const $ = s.trim();
    if (!$ || $.startsWith(";")) continue;
    if (!s.startsWith(" ") && !s.startsWith("	")) {
      const i = $.toUpperCase();
      if (i === "END") break;
      i.startsWith("SHELL SECTION") ? B = "SHELL SECTION" : i.startsWith("FRAME SECTION") ? B = "FRAME SECTION" : B = i.split(/\s+/)[0];
      continue;
    }
    const E = Je($), u = $.split(/\s+/);
    switch (B) {
      case "SYSTEM": {
        const i = E.get("DOF");
        i && (M = i);
        const S = E.get("LENGTH");
        S && (c.length = S);
        const a = E.get("FORCE");
        a && (c.force = a);
        break;
      }
      case "JOINT": {
        const i = u[0];
        D.set(i, [d(E.get("X")), d(E.get("Y")), d(E.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const i = E.get("ADD"), S = E.get("DOF");
        if (i && S) {
          const a = S.split(","), n = [false, false, false, false, false, false];
          for (const L of a) {
            const l = L.toUpperCase();
            (l === "UX" || l === "U1") && (n[0] = true), (l === "UY" || l === "U2") && (n[1] = true), (l === "UZ" || l === "U3") && (n[2] = true), (l === "RX" || l === "R1") && (n[3] = true), (l === "RY" || l === "R2") && (n[4] = true), (l === "RZ" || l === "R3") && (n[5] = true);
          }
          C.set(i, n);
        }
        break;
      }
      case "MATERIAL": {
        const i = E.get("NAME");
        if (i) k = i, O.set(i, { E: 0, nu: 0, G: 0 });
        else if (k) {
          const S = O.get(k), a = E.get("E");
          a && (S.E = d(a));
          const n = E.get("U");
          n && (S.nu = d(n)), S.G = S.E / (2 * (1 + S.nu));
          const L = E.get("M");
          L && (S.density = d(L));
        }
        break;
      }
      case "SHELL": {
        const i = u[0], S = E.get("J");
        E.get("SEC"), S && T.push({ name: i, joints: S.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const i = E.get("NAME");
        i && R.set(i, { material: E.get("MAT") || "", type: E.get("TYPE") || "Shell", thickness: d(E.get("TH")) });
        break;
      }
      case "FRAME": {
        const i = u[0], S = E.get("J");
        if (S) {
          const a = S.split(",");
          a.length >= 2 && x.push({ name: i, j1: a[0], j2: a[1] });
        }
        break;
      }
      case "LOAD": {
        const i = E.get("ADD");
        i && w.push({ joint: i, fx: d(E.get("UX")), fy: d(E.get("UY")), fz: d(E.get("UZ")), mx: d(E.get("MX")), my: d(E.get("MY")), mz: d(E.get("MZ")) });
        break;
      }
    }
  }
  return _e(c, M, O, I, R, D, x, T, C, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), w);
}
function _e(A, c, M, O, I, R, D, x, T, C, w, B) {
  var _a;
  const k = [], H = /* @__PURE__ */ new Map(), J = [];
  for (const [l, g] of R) H.set(l, J.length), k.push(l), J.push(g);
  const s = [], $ = [], E = /* @__PURE__ */ new Map();
  for (const l of D) {
    const g = H.get(l.j1), P = H.get(l.j2);
    if (g !== void 0 && P !== void 0) {
      const _ = s.length;
      s.push([g, P]), $.push(l.name);
      const m = C.get(l.name);
      m && E.set(_, m);
    }
  }
  const u = s.length;
  for (const l of x) {
    const g = l.joints.map((P) => H.get(P)).filter((P) => P !== void 0);
    if (g.length >= 3) {
      const P = s.length;
      s.push(g), $.push(l.name);
      const _ = w.get(l.name);
      _ && E.set(P, _);
    }
  }
  const i = s.length - u, S = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, a = /* @__PURE__ */ new Map(), n = M.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let l = 0; l < s.length; l++) {
    const g = E.get(l), P = g ? O.get(g) : null, _ = g ? I.get(g) : null;
    if (P || s[l].length === 2) {
      const m = P || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, j = M.get(m.material) || n, W = j.E || n.E, K = j.nu || 0.3, V = j.G || W / (2 * (1 + K));
      S.elasticities.set(l, W), S.shearModuli.set(l, V), S.areas.set(l, m.A || m.D * m.B), S.momentsOfInertiaZ.set(l, m.Iz || m.B * m.D ** 3 / 12), S.momentsOfInertiaY.set(l, m.Iy || m.D * m.B ** 3 / 12), S.torsionalConstants.set(l, m.J || 0), S.densities.set(l, j.density || 0), ((_a = m.shape) == null ? void 0 : _a.includes("Wide Flange")) || m.shape === "I" ? a.set(l, { type: "I", b: m.B, h: m.D, name: g || "I-section" }) : a.set(l, { type: "rect", b: m.B, h: m.D });
    } else if (_) {
      const m = M.get(_.material) || n, j = m.E || n.E, W = m.nu || 0.2, K = m.G || j / (2 * (1 + W));
      S.elasticities.set(l, j), S.shearModuli.set(l, K), S.thicknesses.set(l, _.thickness), S.poissonsRatios.set(l, W), S.densities.set(l, m.density || 0);
    }
  }
  const L = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [l, g] of T) {
    const P = H.get(l);
    P !== void 0 && L.supports.set(P, g);
  }
  for (const l of B) {
    const g = H.get(l.joint);
    if (g !== void 0) {
      const P = L.forces.get(g) || [0, 0, 0, 0, 0, 0];
      P[0] += l.fx, P[1] += l.fy, P[2] += l.fz, P[3] += l.mx, P[4] += l.my, P[5] += l.mz, L.forces.set(g, P);
    }
  }
  return { units: A, dof: c, materials: M, frameSections: O, shellSections: I, nodes: J, nodeNames: k, nodeNameToIdx: H, elements: s, elementNames: $, elementSections: E, nodeInputs: L, elementInputs: S, sectionShapes: a, info: { nNodes: J.length, nFrames: u, nShells: i, title: `SAP2000 (${u} frames, ${i} shells)` } };
}
function ct(A) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
  const { nodes: c, elements: M, nodeInputs: O, elementInputs: I } = A, R = A.units || { force: "KN", length: "m" }, D = A.title || "Awatif Model", x = [], T = (a) => x.push(a), C = () => x.push(" ");
  T(`File ${D}.$2k was saved on m/d/yy at h:mm:ss`), C(), T('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), T("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), C();
  const w = [], B = [];
  if (M.forEach((a, n) => {
    a.length === 2 ? w.push(n) : B.push(n);
  }), w.length > 0) {
    T('TABLE:  "CONNECTIVITY - FRAME"');
    for (const a of w) {
      const n = M[a];
      T(`   Frame=${a + 1}   JointI=${n[0] + 1}   JointJ=${n[1] + 1}   IsCurved=No`);
    }
    C();
  }
  if (B.length > 0) {
    T('TABLE:  "CONNECTIVITY - AREA"');
    for (const a of B) {
      const n = M[a], L = n.map((l, g) => `Joint${g + 1}=${l + 1}`).join("   ");
      T(`   Area=${a + 1}   NumJoints=${n.length}   ${L}`);
    }
    C();
  }
  T('TABLE:  "COORDINATE SYSTEMS"'), T("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), C(), T('TABLE:  "DATABASE FORMAT TYPES"'), T("   UnitsCurr=Yes   OverrideE=No"), C();
  const k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
  for (const a of w) {
    const n = ((_a = I.areas) == null ? void 0 : _a.get(a)) || 0, L = ((_b = I.momentsOfInertiaZ) == null ? void 0 : _b.get(a)) || 0, l = ((_c = I.momentsOfInertiaY) == null ? void 0 : _c.get(a)) || 0, g = ((_d = I.torsionalConstants) == null ? void 0 : _d.get(a)) || 0, P = ((_e2 = I.elasticities) == null ? void 0 : _e2.get(a)) || 0, _ = `MAT_${Math.round(P)}`, m = `A${n.toPrecision(6)}_Iz${L.toPrecision(6)}`;
    if (!k.has(m)) {
      let W = 0.3, K = 0.3;
      n > 0 && L > 0 && (W = Math.sqrt(12 * L / n), K = n / W), k.set(m, { A: n, Iz: L, Iy: l, J: g, b: K, h: W, matKey: _ });
    }
    const j = [...k.keys()].indexOf(m) + 1;
    H.set(a, `SEC${j}`);
  }
  if (w.length > 0) {
    T('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const a of w) {
      const n = H.get(a) || "SEC1";
      T(`   Frame=${a + 1}   AutoSelect=N.A.   AnalSect=${n}   MatProp=Default`);
    }
    C();
  }
  if (k.size > 0) {
    T('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let a = 0;
    for (const [, n] of k) {
      a++;
      const L = n.A * 5 / 6;
      T(`   SectionName=SEC${a}   Material=${n.matKey}   Shape=Rectangular   t3=${F(n.h)}   t2=${F(n.b)}   Area=${F(n.A)}   TorsConst=${F(n.J)}   I33=${F(n.Iz)}   I22=${F(n.Iy)}   I23=0   AS2=${F(L)}   AS3=${F(L)} _`), T("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    C();
  }
  const J = !!A.layeredSection && B.length > 0, s = A.layeredSection, $ = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
  if (!J) for (const a of B) {
    const n = ((_f = I.thicknesses) == null ? void 0 : _f.get(a)) || 0.1, L = ((_g = I.elasticities) == null ? void 0 : _g.get(a)) || 0, l = `MAT_${Math.round(L)}`, g = `t${n.toPrecision(6)}`;
    $.has(g) || $.set(g, { t: n, matKey: l });
    const P = [...$.keys()].indexOf(g) + 1;
    E.set(a, `SSEC${P}`);
  }
  if (B.length > 0) {
    T('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of B) {
      const n = J ? s.name : E.get(a) || "SSEC1";
      T(`   Area=${a + 1}   Section=${n}   MatProp=Default`);
    }
    if (C(), T('TABLE:  "AREA SECTION PROPERTIES"'), J) {
      const a = s, n = ((_h = a.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      T(`   Section=${a.name}   Material=${n}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${F(a.totalThickness)}   BendThick=${F(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, n] of $) a++, T(`   Section=SSEC${a}   Material=${n.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${F(n.t)}   BendThick=${F(n.t)}   Color=Cyan`);
    }
    if (C(), J) {
      T('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = s;
      for (const n of a.layers) {
        const L = n.angle ?? 0, l = n.numIntPts ?? 3;
        T(`   Section=${a.name}   LayerName=${n.name}   Distance=${F(n.distance)}   Thickness=${F(n.thickness)}   Type=Shell   NumIntPts=${l}   Material=${n.material}   MatAngle=${F(L * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      C();
    }
  }
  T('TABLE:  "JOINT COORDINATES"');
  for (let a = 0; a < c.length; a++) {
    const n = c[a];
    T(`   Joint=${a + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${F(n[0])}   Y=${F(n[1])}   Z=${F(n[2])}   SpecialJt=No`);
  }
  if (C(), O.supports && O.supports.size > 0) {
    T('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [a, n] of O.supports) {
      if (!n.some((l) => l)) continue;
      const L = (l) => l ? "Yes" : "No";
      T(`   Joint=${a + 1}   U1=${L(n[0])}   U2=${L(n[1])}   U3=${L(n[2])}   R1=${L(n[3])}   R2=${L(n[4])}   R3=${L(n[5])}`);
    }
    C();
  }
  const u = A.selfWtMult ?? 1;
  if (T('TABLE:  "LOAD PATTERN DEFINITIONS"'), T(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${u}`), C(), T('TABLE:  "LOAD CASE DEFINITIONS"'), T('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), C(), T('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), T('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), C(), O.forces && O.forces.size > 0) {
    T('TABLE:  "JOINT LOADS - FORCE"');
    for (const [a, n] of O.forces) n.some((L) => Math.abs(L) > 1e-12) && T(`   Joint=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${F(n[0])}   F2=${F(n[1])}   F3=${F(n[2])}   M1=${F(n[3])}   M2=${F(n[4])}   M3=${F(n[5])}`);
    C();
  }
  const i = I.frameLoads;
  if (i && i.size > 0) {
    T('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [a, n] of i) {
      const L = M[a];
      if (!L || L.length !== 2) continue;
      const l = c[L[0]], g = c[L[1]], P = Math.hypot(g[0] - l[0], g[1] - l[1], g[2] - l[2]);
      ["X", "Y", "Z"].forEach((_, m) => {
        Math.abs(n[m]) < 1e-12 || T(`   Frame=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${_}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${F(P)}   FOverLA=${F(n[m])}   FOverLB=${F(n[m])}`);
      });
    }
    C();
  }
  const S = /* @__PURE__ */ new Map();
  for (let a = 0; a < M.length; a++) {
    const n = ((_i = I.elasticities) == null ? void 0 : _i.get(a)) || 0, L = ((_j = I.shearModuli) == null ? void 0 : _j.get(a)) || 0, l = n > 0 && L > 0 ? Math.max(0, Math.min(0.5, n / (2 * L) - 1)) : 0.2, g = ((_k = I.densities) == null ? void 0 : _k.get(a)) || 0, P = `MAT_${Math.round(n)}`;
    S.has(P) || S.set(P, { E: n, nu: l, G: L, rho: g });
  }
  T('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [a] of S) T(`   Material=${a}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  C(), T('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [a, n] of S) T(`   Material=${a}   UnitWeight=${F(n.rho * 9.81)}   UnitMass=${F(n.rho)}   E1=${F(n.E)}   G12=${F(n.G)}   U12=${F(n.nu)}   A1=9.9E-06`);
  C(), T('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [a] of S) T(`   Material=${a}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return C(), T('TABLE:  "PROGRAM CONTROL"'), T(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${R.force}, ${R.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), C(), T("END TABLE DATA"), T(""), x.join(`\r
`);
}
function F(A) {
  return A === 0 || Math.abs(A) < 1e-15 ? "0" : Math.abs(A) >= 1e6 || Math.abs(A) < 1e-3 && Math.abs(A) > 0 ? A.toExponential(8) : parseFloat(A.toPrecision(10)).toString();
}
function Qe(A, c, M = 0.05) {
  const O = c.map(([I, R]) => `${(+I).toFixed(4)} ${(+R).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${A}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${M}  SPECTYPE "USER"  `, `  FUNCTION "${A}"  TIMEVAL "${O}"  `];
}
function et(A) {
  const { name: c, func: M, modalCase: O = "Modal", sfX: I = 9.81, sfY: R = 9.81 } = A, D = [`  LOADCASE "${c}"  TYPE  "Response Spectrum"  MODALCASE  "${O}"  `];
  return I && D.push(`  LOADCASE "${c}"  ACCEL  "U1"  FUNC  "${M}"  SF  ${I}  `), R && D.push(`  LOADCASE "${c}"  ACCEL  "U2"  FUNC  "${M}"  SF  ${R}  `), D;
}
function xe(A) {
  const { name: c = "Modal", ritz: M = false, nModes: O = 12 } = A;
  return M ? [`  LOADCASE "${c}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${c}"  MAXMODES  ${O} MINMODES  1 `, `  LOADCASE "${c}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${c}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${c}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${c}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${c}"  MAXMODES  ${O} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function rt(A) {
  var _a;
  const c = (_a = A.e2kModel) == null ? void 0 : _a.rawSections;
  let M = c && c.size > 0 ? st(c, A.e2kModel) : nt(A);
  return A.seismicNEC && (M = tt(M, A.seismicNEC)), M;
}
function tt(A, c) {
  const M = A.includes(`\r
`) ? `\r
` : `
`, O = A.split(/\r?\n/), I = c.name ?? "NEC", R = Qe(I, c.points, c.dampRatio ?? 0.05), D = c.modalCase ?? "Modal", x = et({ name: c.caseName ?? "Sismo NEC", func: I, modalCase: D, sfX: c.sfX, sfY: c.sfY });
  let T = [];
  const C = (w) => O.some((B) => w.test(B));
  if (c.modal) {
    const w = new RegExp(`^\\s*LOADCASE\\s+"${D}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let B = O.length - 1; B >= 0; B--) w.test(O[B]) && O.splice(B, 1);
    T = xe({ name: D, ritz: !!c.modal.ritz, nModes: c.modal.nModes });
  } else C(new RegExp(`LOADCASE\\s+"${D}"\\s+TYPE\\s+"Modal`)) || (T = xe({ name: D }));
  return He(O, "FUNCTIONS", R), He(O, "LOAD CASES", [...T, ...x]), O.join(M);
}
function He(A, c, M) {
  const O = A.findIndex((D) => D.trim() === `$ ${c}`);
  if (O >= 0) {
    A.splice(O + 1, 0, ...M);
    return;
  }
  const I = A.findIndex((D) => D.trim() === "END"), R = I >= 0 ? I : A.length;
  A.splice(R, 0, `$ ${c}`, ...M, "");
}
function st(A, c) {
  const M = [], O = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  M.push("$ File exported from Hekatan Struct Lineal (round-trip)"), M.push("");
  for (const I of O) {
    const R = A.get(I);
    if (!(!R || R.length === 0)) {
      M.push(`$ ${I}`);
      for (const D of R) M.push(D);
      M.push("");
    }
  }
  for (const [I, R] of A) if (!O.includes(I) && R.length !== 0) {
    M.push(`$ ${I}`);
    for (const D of R) M.push(D);
    M.push("");
  }
  return M.push("  END"), M.push("$ END OF MODEL FILE"), M.join(`\r
`);
}
function nt(A) {
  var _a, _b, _c, _d, _e2, _f, _g;
  const { nodes: c, elements: M, nodeInputs: O, elementInputs: I, title: R, units: D } = A, x = A.shellLoads ?? I.shellSurfaceLoads;
  let T;
  x instanceof Map && (T = /* @__PURE__ */ new Map(), x.forEach((e, t) => {
    T.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const C = A.shellAngles ?? I.shellAngles, w = I.cargaDeArea, B = !!(T && T.size > 0), k = (e, t) => [t[0], t[1], t[2] - (B ? (w == null ? void 0 : w.get(e)) ?? 0 : 0)], H = (D == null ? void 0 : D.force) || "Tonf", J = (D == null ? void 0 : D.length) || "m", s = [], $ = (e) => Math.round(e * 1e4) / 1e4, E = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), u = (() => {
    const e = (H || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), i = (e) => e * u, S = (e) => e * u, a = (e) => e * u, n = /* @__PURE__ */ new Date(), L = `${n.getMonth() + 1}/${n.getDate()}/${n.getFullYear()}  ${n.getHours()}:${String(n.getMinutes()).padStart(2, "0")}:${String(n.getSeconds()).padStart(2, "0")}`;
  s.push(`$ File   "Hekatan_export.e2k"  saved ${L} in ETABS 22.6.0`), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${H}"  "${J}"  "C"  `), s.push('  TITLE1  "Hekatan Struct Lineal export"  '), R && s.push(`  TITLE2  "${R}"  `), s.push("  PREFERENCE  MERGETOL 0.001"), s.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), s.push("");
  const l = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
  c.forEach((e) => {
    l.add($(e[0])), g.add($(e[1]));
  });
  const P = [...l].sort((e, t) => e - t), _ = [...g].sort((e, t) => e - t);
  s.push("$ GRIDS"), s.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), P.forEach((e, t) => {
    const o = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    s.push(`  GRID "G1"  LABEL "${o}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), _.forEach((e, t) => {
    s.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.push("");
  const m = 3, j = 0.5, W = /* @__PURE__ */ new Map();
  c.forEach((e) => {
    const t = $(e[2]);
    W.set(t, (W.get(t) ?? 0) + 1);
  });
  const K = /* @__PURE__ */ new Set();
  c.forEach((e) => K.add($(e[2])));
  const V = [...K].sort((e, t) => e - t);
  let U = V.filter((e) => (W.get(e) ?? 0) >= m);
  if (U.length > 1) {
    const e = [U[0]];
    for (const t of U.slice(1)) t - e[e.length - 1] < j ? e[e.length - 1] = t : e.push(t);
    U = e;
  }
  U.length || (U = V.slice()), U[0] !== V[0] && U.unshift(V[0]), U[U.length - 1] !== V[V.length - 1] && U.push(V[V.length - 1]);
  const Ee = [], ie = /* @__PURE__ */ new Map();
  Ee.push("Base"), ie.set(U[0], "Base");
  for (let e = 1; e < U.length; e++) {
    const t = `Level_${e}`;
    Ee.push(t), ie.set(U[e], t);
  }
  const de = (e) => {
    const t = $(e);
    if (ie.has(t)) return { story: ie.get(t), dz: 0 };
    for (let r = 0; r < U.length; r++) if (U[r] >= t) return { story: ie.get(U[r]), dz: $(U[r] - t) };
    const o = U[U.length - 1];
    return { story: ie.get(o), dz: $(o - t) };
  };
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = U.length - 1; e >= 1; e--) s.push(`  STORY "${Ee[e]}"  HEIGHT ${$(U[e] - U[e - 1])} MASTERSTORY "Yes"  `);
  U.length > 0 && s.push(`  STORY "Base"  ELEV ${U[0]} `), s.push(""), M.some((e) => e.length === 4), s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push(""), s.push("$ MATERIAL PROPERTIES");
  const me = /* @__PURE__ */ new Set();
  (_a = I.elasticities) == null ? void 0 : _a.forEach((e) => me.add(e));
  const le = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map();
  let We = 0, Ze = 0;
  const Xe = 980665e-8, Ce = /* @__PURE__ */ new Map();
  if (I.densities && I.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    I.densities.forEach((t, o) => {
      var _a2;
      const r = (_a2 = I.elasticities) == null ? void 0 : _a2.get(o);
      r !== void 0 && (e.has(r) || e.set(r, []), e.get(r).push(t));
    }), e.forEach((t, o) => {
      const r = t.reduce((h, N) => h + N, 0) / t.length, f = r > 100 ? r * Xe : r * 9.80665;
      Ce.set(o, f);
    });
  }
  for (const e of me) {
    const t = e >= 1e8, o = t ? `Steel_${++We}` : `Conc_${++Ze}`;
    le.set(e, o), $e.set(e, t);
    const r = Ce.get(e) ?? (t ? 76.97 : 24), f = S(e), h = a(r), N = t ? 0.3 : 0.2, p = t ? 117e-7 : 1e-5;
    if (t) {
      s.push(`  MATERIAL  "${o}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${$(h)}`), s.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${$(f)}  U ${N}  A ${p}`);
      const y = 345e3, z = 45e4;
      s.push(`  MATERIAL  "${o}"  FY ${$(S(y))}  FU ${$(S(z))}  FYE ${$(S(y * 1.1))}  FUE ${$(S(z * 1.1))}`);
    } else s.push(`  MATERIAL  "${o}"    TYPE "Concrete"    WEIGHTPERVOLUME ${$(h)}`), s.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${$(f)}  U ${N}  A ${p}`), s.push(`  MATERIAL  "${o}"    FC ${$(S(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const fe = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), te = 0.05;
  M.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i, _j;
    if (e.length !== 2) return;
    const o = (_a2 = I.sectionShapes) == null ? void 0 : _a2.get(t), r = ((_b2 = I.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, f = le.get(r) || "Conc_1", h = $e.get(r) ?? r >= 1e8, N = ((_c2 = I.areas) == null ? void 0 : _c2.get(t)) ?? 0, p = ((_d2 = I.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, y = ((_e3 = I.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, z = ((_f2 = I.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let b = (o == null ? void 0 : o.type) || "rect", Y = (o == null ? void 0 : o.h) ?? 0, G = (o == null ? void 0 : o.b) ?? 0, ae = (o == null ? void 0 : o.d) ?? 0;
    const ge = (o == null ? void 0 : o.tf) ?? 0, ue = (o == null ? void 0 : o.tw) ?? 0;
    if (!o && Y <= 0 && G <= 0 && ae <= 0 && N > 0 && p > 0 && y > 0) {
      const X = (_g2 = I.cantos) == null ? void 0 : _g2.get(t), re = (_h = I.anchos) == null ? void 0 : _h.get(t);
      Y = X && X > 0 ? X : Math.sqrt(12 * p / N), G = re && re > 0 ? re : N / Y, (!isFinite(Y) || Y < te) && (Y = te), (!isFinite(G) || G < te) && (G = te), b = "general";
    } else Y <= 0 && G <= 0 && ae <= 0 && N > 0 && (p > 0 ? (Y = Math.sqrt(12 * p / N), G = N / Y) : Y = G = Math.sqrt(N), (!isFinite(Y) || Y < te) && (Y = te), (!isFinite(G) || G < te) && (G = te), b = "rect");
    Y <= 0 && G <= 0 && ae <= 0 && (Y = 0.3, G = 0.3, b = "rect");
    const Ie = (o == null ? void 0 : o.name) ? `NAME_${o.name}` : `${b}_${$(Y)}_${$(G)}_${$(ae)}_${$(ge)}_${$(ue)}_${f}`;
    (o == null ? void 0 : o.name) && !Se.has(Ie) && Se.set(Ie, o.name);
    let Z = Se.get(Ie);
    if (!Z) {
      const X = h ? "S" : "C";
      b === "general" ? Z = `${X}_G${fe.size + 1}` : b === "rect" ? Z = `${X}_R${Math.round(G * 100)}x${Math.round(Y * 100)}` : b === "circ" ? Z = `${X}_C_D${Math.round(ae * 100)}` : b === "I" ? Z = `${X}_I${Math.round(Y * 100)}x${Math.round(G * 100)}` : b === "HSS" ? Z = `${X}_HSS${Math.round(G * 100)}x${Math.round(Y * 100)}x${Math.round(ue * 1e3)}` : Z = `${X}_Sec${fe.size + 1}`, Se.set(Ie, Z);
    }
    if (Me.set(t, Z), fe.has(Z)) return;
    fe.add(Z);
    let v;
    b === "general" ? v = "General" : b === "I" ? v = "Steel I/Wide Flange" : b === "HSS" ? v = "Steel Tube" : b === "CFT" ? v = "Filled Steel Tube" : b === "pipe" ? v = "Steel Pipe" : b === "L" ? v = "Steel Angle" : b === "C" ? v = "Steel Channel" : b === "2C" ? v = "Steel Double Channel" : b === "circ" ? v = "Concrete Circle" : v = "Concrete Rectangular";
    let ne = `  FRAMESECTION  "${Z}"  MATERIAL "${f}"  SHAPE "${v}"`;
    if (b === "general") {
      const X = ((_i = I.shearAreasY) == null ? void 0 : _i.get(t)) || N * 5 / 6, re = ((_j = I.shearAreasZ) == null ? void 0 : _j.get(t)) || N * 5 / 6;
      ne += `  D ${$(Y)} B ${$(G)} AREA ${E(N)} AS2 ${E(X)} AS3 ${E(re)} I33 ${E(p)} I22 ${E(y)} TORSION ${E(z || p + y)} S33POS ${E(2 * p / Y)} S33NEG ${E(2 * p / Y)} S22POS ${E(2 * y / G)} S22NEG ${E(2 * y / G)} Z33 ${E(2 * p / Y)} Z22 ${E(2 * y / G)} R33 ${E(Math.sqrt(p / N))} R22 ${E(Math.sqrt(y / N))} `, s.push(ne);
      return;
    }
    Y && (ne += `  D ${$(Y)}`), G && (ne += `  B ${$(G)}`), ae && !Y && (ne += `  D ${$(ae)}`), ge && (ne += `  TF ${$(ge)}`), ue && (ne += `  TW ${$(ue)}`), s.push(ne);
  }), s.push("");
  const Ae = /* @__PURE__ */ new Map();
  let je = 0;
  c.forEach((e) => {
    const { dz: t } = de(e[2]), o = `${$(e[0])},${$(e[1])},${t}`;
    Ae.has(o) || Ae.set(o, `${++je}`);
  }), s.push("$ POINT COORDINATES");
  for (const [e, t] of Ae) {
    const [o, r, f] = e.split(",").map(Number);
    s.push(f ? `  POINT "${t}"  ${o} ${r} ${f} ` : `  POINT "${t}"  ${o} ${r} `);
  }
  s.push("");
  const q = (e) => {
    const t = c[e], { story: o, dz: r } = de(t[2]), f = `${$(t[0])},${$(t[1])},${r}`;
    return { pt: Ae.get(f) || "1", story: o };
  }, De = (e) => {
    var _a2, _b2, _c2, _d2, _e3;
    const t = [], o = (_a2 = A.propertyModifiers) == null ? void 0 : _a2.get(e);
    o && o.some((p) => Math.abs(p - 1) > 1e-9) && t.push(`PROPMODIFIERS "${o.map((p) => $(p)).join(" ")}"`);
    const r = (_b2 = I.localAngles) == null ? void 0 : _b2.get(e);
    r !== void 0 && isFinite(r) && Math.abs(r) > 1e-9 && t.push(`ANG ${$(r)}`);
    const f = (_c2 = I.momentReleases) == null ? void 0 : _c2.get(e);
    if (f && f.some((p) => p)) {
      const p = [];
      f.length === 12 ? (f[0] && p.push("PI"), f[1] && p.push("V2I"), f[2] && p.push("V3I"), f[3] && p.push("TI"), f[4] && p.push("M2I"), f[5] && p.push("M3I"), f[6] && p.push("PJ"), f[7] && p.push("V2J"), f[8] && p.push("V3J"), f[9] && p.push("TJ"), f[10] && p.push("M2J"), f[11] && p.push("M3J")) : f.length === 6 && (f[0] && p.push("TI"), f[1] && p.push("M2I"), f[2] && p.push("M3I"), f[3] && p.push("TJ"), f[4] && p.push("M2J"), f[5] && p.push("M3J")), p.length > 0 && t.push(`RELEASE "${p.join(" ")}"`);
    }
    const h = (_d2 = I.insertionPoints) == null ? void 0 : _d2.get(e);
    h && (Math.abs(h[0]) > 1e-9 || Math.abs(h[1]) > 1e-9) && t.push(`LATEROFFSET ${$(h[0])} TRANSOFFSET ${$(h[1])}`);
    const N = (_e3 = I.rigidOffsets) == null ? void 0 : _e3.get(e);
    return N && (Math.abs(N[0]) > 1e-9 || Math.abs(N[1]) > 1e-9) && t.push(`LENGTHOFFI ${$(N[0])} LENGTHOFFJ ${$(N[1])} RIGIDZONE 0.5`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, Oe = [], Pe = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
  M.forEach((e, t) => {
    if (e.length !== 2) return;
    const o = ze(c, e);
    if (o === "BEAM") return;
    const r = c[e[0]][2] <= c[e[1]][2] ? e[0] : e[1], f = c[e[0]][2] <= c[e[1]][2] ? e[1] : e[0];
    if (Math.abs(c[r][0] - c[f][0]) > 1e-6 || Math.abs(c[r][1] - c[f][1]) > 1e-6) return;
    const h = q(r), N = Me.get(t) || `Sec_${t}`, p = `${h.pt}_${N}_${o}`;
    he.has(p) || he.set(p, []), he.get(p).push({ i: t, bot: r, top: f, zBot: $(c[r][2]), zTop: $(c[f][2]), planPt: h.pt, secName: N, type: o });
  }), he.forEach((e, t) => {
    e.sort((r, f) => r.zBot - f.zBot);
    let o = 0;
    for (let r = 1; r <= e.length; r++) if (r === e.length || Math.abs(e[r].zBot - e[r - 1].zTop) > 1e-6) {
      const h = e.slice(o, r);
      h.length >= 1 && (Oe.push({ elemIndices: h.map((N) => N.i), planPt: h[0].planPt, bottomNodeIdx: h[0].bot, topNodeIdx: h[h.length - 1].top, secName: h[0].secName, type: h[0].type, nSegments: h.length }), h.forEach((N) => Pe.add(N.i))), o = r;
    }
  }), s.push("$ LINE CONNECTIVITIES");
  const Fe = [], ye = (e) => Ee.indexOf(e), Ye = (e, t, o, r, f, h, N) => {
    const p = q(r), y = q(o), z = ye(p.story) - ye(y.story);
    z <= 0 ? s.push(`  LINE  "${e}"  BEAM  "${y.pt}"  "${p.pt}"  0`) : s.push(`  LINE  "${e}"  ${t}  "${y.pt}"  "${p.pt}"  ${z}`), Fe.push(`  LINEASSIGN  "${e}"  "${p.story}"  SECTION "${f}" ${h} MINNUMSTA ${N} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  Oe.forEach((e, t) => {
    const o = De(e.elemIndices[0]);
    Ye(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, o, e.nSegments);
  }), M.forEach((e, t) => {
    if (e.length !== 2 || Pe.has(t)) return;
    const o = ze(c, e), r = Me.get(t) || `Sec_${t}`, f = De(t), h = c[e[0]][2] <= c[e[1]][2] ? e[0] : e[1], N = c[e[0]][2] <= c[e[1]][2] ? e[1] : e[0];
    Ye(`E${t + 1}`, o === "BEAM" ? "BRACE" : o, h, N, r, f, 3);
  }), s.push("");
  const pe = A.weightMode ?? "auto", ce = /* @__PURE__ */ new Set();
  s.push("$ POINT ASSIGNS"), (_b = O.supports) == null ? void 0 : _b.forEach((e, t) => {
    const o = [];
    if (e[0] && o.push("UX"), e[1] && o.push("UY"), e[2] && o.push("UZ"), e[3] && o.push("RX"), e[4] && o.push("RY"), e[5] && o.push("RZ"), o.length > 0) {
      const r = q(t), f = r.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      s.push(`  POINTASSIGN  "${r.pt}"  "${r.story}"  RESTRAINT "${o.join(" ")}" ${f} `), ce.add(`${r.pt}@${r.story}`);
    }
  });
  const Be = (A.diaphragm ?? "auto") !== "none";
  Be && Oe.forEach((e) => {
    const t = q(e.topNodeIdx), o = `${t.pt}@${t.story}`;
    !ce.has(o) && t.story !== "Base" && (s.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), ce.add(o));
  }), pe === "manual" && O.loads && O.loads.forEach((e, t) => {
    const [o, r, f] = k(t, e);
    if (Math.abs(o) < 1e-10 && Math.abs(r) < 1e-10 && Math.abs(f) < 1e-10) return;
    const h = q(t), N = `${h.pt}@${h.story}`;
    ce.has(N) || (s.push(`  POINTASSIGN  "${h.pt}"  "${h.story}"  DIAPH "DISCONNECTED"  `), ce.add(N));
  }), s.push(""), s.push("$ LINE ASSIGNS"), Fe.forEach((e) => s.push(e)), s.push("");
  const se = [], be = I.areaObjects, Ue = /* @__PURE__ */ new Set(), Ge = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map();
  be == null ? void 0 : be.forEach((e) => e.cells.forEach((t) => Ue.add(t))), M.forEach((e, t) => {
    if (e.length === 4) {
      const o = c[e[0]], r = c[e[1]], f = c[e[2]], h = [r[0] - o[0], r[1] - o[1], r[2] - o[2]], N = [f[0] - o[0], f[1] - o[1], f[2] - o[2]], p = h[1] * N[2] - h[2] * N[1], y = h[2] * N[0] - h[0] * N[2], z = h[0] * N[1] - h[1] * N[0], b = Math.sqrt(p * p + y * y + z * z), Y = b > 1e-10 && Math.abs(z) / b < 0.5;
      se.push({ idx: t, el: e, isWall: Y }), Ue.has(t) && se.pop();
    }
  });
  const Te = (() => {
    for (const [e, t] of $e) if (!t) return le.get(e);
    return le.values().next().value || "Conc_1";
  })();
  be == null ? void 0 : be.forEach((e, t) => {
    se.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && Ge.set(e.cells[0], e.q), e.ang !== void 0 && we.set(e.cells[0], e.ang);
  });
  const ke = "DECK";
  let Ne = false;
  const Le = [];
  if (se.some((e) => !e.isWall)) {
    const e = I.bendingModifiers, t = I.shellModifiers;
    Ne = (() => {
      for (const r of se) {
        if (r.isWall) continue;
        const f = t == null ? void 0 : t.get(r.idx);
        if (f && Math.abs(f[3]) < 1e-9 && Math.abs(f[4]) < 1e-9) return true;
        const h = e == null ? void 0 : e.get(r.idx);
        if (h !== void 0 && Math.abs(h) < 1e-9) return true;
      }
      return false;
    })();
    const o = ((_c = I.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    Ne ? (s.push("$ DECK PROPERTIES"), s.push(`  SHELLPROP  "${ke}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Te}"  DECKMATERIAL "${Te}"  DECKSLABDEPTH ${E(o * 65 / 120)} DECKRIBDEPTH ${E(o * 55 / 120)} DECKRIBWIDTHTOP ${E(o * 150 / 120)} DECKRIBWIDTHBOTTOM ${E(o * 100 / 120)} DECKRIBSPACING ${E(o * 200 / 120)} DECKSHEARTHICKNESS ${E(o * 0.76 / 120)} DECKUNITWEIGHT ${E(i(0.11012))} SHEARSTUDDIAM ${E(o * 19 / 120)} SHEARSTUDHEIGHT ${E(o * 100 / 120)} SHEARSTUDFU 400 `)) : (s.push("$ SLAB PROPERTIES"), s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Te}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${$(o)} `)), s.push("");
  }
  if (se.some((e) => e.isWall)) {
    s.push("$ WALL PROPERTIES");
    const e = ((_d = I.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Te}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${$(e)} `), s.push("");
  }
  if (se.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const e = [];
    se.forEach((t, o) => {
      const { el: r, isWall: f } = t, h = f ? `W${o + 1}` : `F${o + 1}`, N = f ? "PANEL" : "FLOOR", p = r.map((y) => q(y));
      if (f) {
        const y = c[r[0]][2] <= c[r[2]][2] ? 0 : 2, z = c[r[1]][2] <= c[r[3]][2] ? 1 : 3;
        s.push(`  AREA "${h}"  ${N}  4  "${p[y].pt}"  "${p[z].pt}"  "${p[z].pt}"  "${p[y].pt}"  1  1  0  0  `);
        const b = p[y === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${h}"  "${b}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        s.push(`  AREA "${h}"  ${N}  4  "${p[0].pt}"  "${p[1].pt}"  "${p[2].pt}"  "${p[3].pt}"  0  0  0  0  `);
        const y = we.get(t.idx) ?? (C == null ? void 0 : C.get(t.idx));
        e.push(Ne ? `  AREAASSIGN  "${h}"  "${p[0].story}"  SECTION "${ke}"  ANG ${$(y ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${h}"  "${p[0].story}"  SECTION "Losa" ${Be ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Le.push({ name: h, story: p[0].story, idx: t.idx });
      }
    }), s.push(""), s.push("$ AREA ASSIGNS"), e.forEach((t) => s.push(t)), s.push("");
  }
  const ve = pe === "manual" ? 0 : 1;
  s.push("$ LOAD PATTERNS");
  const oe = ((_e2 = A.loadPatterns) == null ? void 0 : _e2.length) ? A.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: ve }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of oe) {
    let t;
    e.type === "Dead" ? t = pe === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), s.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  s.push("");
  const Q = A.loadPatternDestino && oe.some((e) => e.name === A.loadPatternDestino) ? A.loadPatternDestino : ((_f = oe.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? oe[0].name, ee = [];
  if (O.loads && O.loads.size > 0 && O.loads.forEach((e, t) => {
    var _a2;
    const [o, r, f] = k(t, e), h = q(t);
    Math.abs(o) > 1e-10 && ee.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "${Q}"  FX ${E(i(o))}  FY 0  FZ 0`), Math.abs(r) > 1e-10 && ee.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "${Q}"  FX 0  FY ${E(i(r))}  FZ 0`);
    const N = e[3] ?? 0, p = e[4] ?? 0, y = e[5] ?? 0;
    (Math.abs(N) > 1e-10 || Math.abs(p) > 1e-10 || Math.abs(y) > 1e-10) && ee.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "${Q}"  FX 0  FY 0  FZ 0  MX ${E(i(N))}  MY ${E(i(p))}  MZ ${E(i(y))}`);
    const z = Q === (((_a2 = oe.find((b) => b.type === "Dead")) == null ? void 0 : _a2.name) ?? oe[0].name);
    (pe === "manual" || !z) && Math.abs(f) > 1e-10 && ee.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "FORCE"  LC "${Q}"  FX 0  FY 0  FZ ${E(i(f))}`);
  }), O.moments && O.moments.size > 0 && O.moments.forEach((e, t) => {
    const [o, r, f] = e, h = q(t);
    Math.abs(o) > 1e-10 && ee.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "${Q}"  MX ${E(i(o))}  MY 0  MZ 0`), Math.abs(r) > 1e-10 && ee.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "${Q}"  MX 0  MY ${E(i(r))}  MZ 0`), Math.abs(f) > 1e-10 && ee.push(`  POINTLOAD  "${h.pt}"  "${h.story}"  TYPE "MOMENT"  LC "${Q}"  MX 0  MY 0  MZ ${E(i(f))}`);
  }), ee.length > 0 && (s.push("$ POINT OBJECT LOADS"), ee.forEach((e) => s.push(e)), s.push("")), T && T.size > 0 && Le.length > 0) {
    const e = [];
    for (const t of Le) {
      const o = Ge.get(t.idx), r = o !== void 0 ? { value: o } : T.get(t.idx);
      if (!r || Math.abs(r.value) < 1e-12) continue;
      const f = r.dir ?? "GRAV", h = f === "GRAV" ? Math.abs(r.value) : r.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${f}"  LC "${r.pattern ?? Q}"  FVAL ${E(i(h))}`);
    }
    e.length > 0 && (s.push("$ SHELL OBJECT LOADS"), e.forEach((t) => s.push(t)), s.push(""));
  }
  s.push("$ ANALYSIS OPTIONS"), s.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), s.push('  PDELTA  METHOD "NONE"  '), s.push(""), s.push("$ MASS SOURCE"), s.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), s.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), s.push(""), s.push("$ LOAD CASES");
  const Ve = ((_g = A.loadCases) == null ? void 0 : _g.length) ? A.loadCases : oe.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of Ve) {
    s.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) s.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  s.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), s.push("");
  const Re = A.loadCombinations;
  if (Re && Re.length) {
    s.push("$ LOAD COMBINATIONS");
    for (const e of Re) {
      s.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) s.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    s.push("");
  }
  return s.push("  END"), s.push("$ END OF MODEL FILE"), s.join(`\r
`);
}
function ze(A, c) {
  const M = A[c[0]], O = A[c[1]], I = Math.abs(O[2] - M[2]), R = Math.sqrt((O[0] - M[0]) ** 2 + (O[1] - M[1]) ** 2), D = I > R * 0.5;
  return D && R > 0.01 ? "BRACE" : D ? "COLUMN" : "BEAM";
}
export {
  ct as a,
  rt as e,
  it as p
};
