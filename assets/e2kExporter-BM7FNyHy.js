function L(S) {
  return S && parseFloat(S) || 0;
}
function je(S) {
  const i = /* @__PURE__ */ new Map(), $ = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let M;
  for (; (M = $.exec(S)) !== null; ) i.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
  return i;
}
function ft(S) {
  const i = S.split(/\r?\n/);
  return i.some((M) => M.trim().startsWith("TABLE:")) ? st(i) : nt(i);
}
function st(S) {
  var _a, _b, _c, _d, _e2, _f;
  const i = [];
  let $ = "";
  for (const I of S) {
    const E = I.trimEnd();
    E.endsWith("_") ? $ += E.slice(0, -1) + " " : ($ += E, i.push($), $ = "");
  }
  $ && i.push($);
  const M = { force: "KN", length: "m" };
  let T = "UX,UY,UZ,RX,RY,RZ";
  const R = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), C = [], w = [], Y = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), z = [];
  let s = "";
  for (const I of i) {
    const E = I.trim();
    if (!E || E.startsWith(";") || E.startsWith("File ")) continue;
    if (E.startsWith("TABLE:")) {
      const r = E.match(/TABLE:\s+"(.+?)"/);
      s = r ? r[1].toUpperCase() : "";
      continue;
    }
    if (E === "END TABLE DATA") {
      s = "";
      continue;
    }
    const p = je(E);
    switch (s) {
      case "PROGRAM CONTROL": {
        const r = p.get("CurrUnits");
        if (r) {
          const f = r.split(",").map((a) => a.trim());
          f[0] && (M.force = f[0]), f[1] && (M.length = f[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const r = p.get("Material");
        r && !R.has(r) && R.set(r, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const r = p.get("Material");
        if (r) {
          const f = R.get(r) || { E: 0, nu: 0, G: 0 };
          f.E = L(p.get("E1")), f.G = L(p.get("G12")), f.nu = L(p.get("U12")), f.density = L(p.get("UnitMass")), R.set(r, f);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const r = p.get("Material");
        r && R.has(r) && (R.get(r).fy = L(p.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const r = p.get("SectionName");
        r && P.set(r, { material: p.get("Material") || "", shape: p.get("Shape") || "Rectangular", D: L(p.get("t3")), B: L(p.get("t2")), TF: L(p.get("tf")), TW: L(p.get("tw")), A: L(p.get("Area")), Iz: L(p.get("I33")), Iy: L(p.get("I22")), J: L(p.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const r = p.get("Section");
        r && x.set(r, { material: p.get("Material") || "", type: p.get("Type") || "Shell", thickness: L(p.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const r = p.get("Joint");
        if (r) {
          const f = L(p.get("XorR")), a = L(p.get("Y")), n = L(p.get("Z"));
          h.set(r, [f, a, n]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const r = p.get("Frame"), f = p.get("JointI"), a = p.get("JointJ");
        r && f && a && C.push({ name: r, j1: f, j2: a });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const r = p.get("Area");
        if (r) {
          const f = parseInt(p.get("NumJoints") || "4"), a = [];
          for (let n = 1; n <= f; n++) {
            const O = p.get(`Joint${n}`);
            O && a.push(O);
          }
          a.length >= 3 && w.push({ name: r, joints: a });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const r = p.get("Joint");
        if (r) {
          const f = [((_a = p.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = p.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = p.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = p.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e2 = p.get("R2")) == null ? void 0 : _e2.toLowerCase()) === "yes", ((_f = p.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          Y.set(r, f);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const r = p.get("Frame"), f = p.get("AnalSect");
        r && f && k.set(r, f);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const r = p.get("Area"), f = p.get("Section");
        r && f && H.set(r, f);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const r = p.get("Joint");
        r && z.push({ joint: r, fx: L(p.get("F1")), fy: L(p.get("F2")), fz: L(p.get("F3")), mx: L(p.get("M1")), my: L(p.get("M2")), mz: L(p.get("M3")) });
        break;
      }
    }
  }
  return Ze(M, T, R, P, x, h, C, w, Y, k, H, z);
}
function nt(S) {
  const i = { force: "KN", length: "m" };
  let $ = "UX,UY,UZ,RX,RY,RZ";
  const M = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), x = [], h = [], C = /* @__PURE__ */ new Map(), w = [];
  let Y = "", k = "";
  for (const s of S) {
    const I = s.trim();
    if (!I || I.startsWith(";")) continue;
    if (!s.startsWith(" ") && !s.startsWith("	")) {
      const r = I.toUpperCase();
      if (r === "END") break;
      r.startsWith("SHELL SECTION") ? Y = "SHELL SECTION" : r.startsWith("FRAME SECTION") ? Y = "FRAME SECTION" : Y = r.split(/\s+/)[0];
      continue;
    }
    const E = je(I), p = I.split(/\s+/);
    switch (Y) {
      case "SYSTEM": {
        const r = E.get("DOF");
        r && ($ = r);
        const f = E.get("LENGTH");
        f && (i.length = f);
        const a = E.get("FORCE");
        a && (i.force = a);
        break;
      }
      case "JOINT": {
        const r = p[0];
        P.set(r, [L(E.get("X")), L(E.get("Y")), L(E.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const r = E.get("ADD"), f = E.get("DOF");
        if (r && f) {
          const a = f.split(","), n = [false, false, false, false, false, false];
          for (const O of a) {
            const l = O.toUpperCase();
            (l === "UX" || l === "U1") && (n[0] = true), (l === "UY" || l === "U2") && (n[1] = true), (l === "UZ" || l === "U3") && (n[2] = true), (l === "RX" || l === "R1") && (n[3] = true), (l === "RY" || l === "R2") && (n[4] = true), (l === "RZ" || l === "R3") && (n[5] = true);
          }
          C.set(r, n);
        }
        break;
      }
      case "MATERIAL": {
        const r = E.get("NAME");
        if (r) k = r, M.set(r, { E: 0, nu: 0, G: 0 });
        else if (k) {
          const f = M.get(k), a = E.get("E");
          a && (f.E = L(a));
          const n = E.get("U");
          n && (f.nu = L(n)), f.G = f.E / (2 * (1 + f.nu));
          const O = E.get("M");
          O && (f.density = L(O));
        }
        break;
      }
      case "SHELL": {
        const r = p[0], f = E.get("J");
        E.get("SEC"), f && h.push({ name: r, joints: f.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const r = E.get("NAME");
        r && R.set(r, { material: E.get("MAT") || "", type: E.get("TYPE") || "Shell", thickness: L(E.get("TH")) });
        break;
      }
      case "FRAME": {
        const r = p[0], f = E.get("J");
        if (f) {
          const a = f.split(",");
          a.length >= 2 && x.push({ name: r, j1: a[0], j2: a[1] });
        }
        break;
      }
      case "LOAD": {
        const r = E.get("ADD");
        r && w.push({ joint: r, fx: L(E.get("UX")), fy: L(E.get("UY")), fz: L(E.get("UZ")), mx: L(E.get("MX")), my: L(E.get("MY")), mz: L(E.get("MZ")) });
        break;
      }
    }
  }
  return Ze(i, $, M, T, R, P, x, h, C, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), w);
}
function Ze(S, i, $, M, T, R, P, x, h, C, w, Y) {
  var _a;
  const k = [], H = /* @__PURE__ */ new Map(), z = [];
  for (const [l, d] of R) H.set(l, z.length), k.push(l), z.push(d);
  const s = [], I = [], E = /* @__PURE__ */ new Map();
  for (const l of P) {
    const d = H.get(l.j1), D = H.get(l.j2);
    if (d !== void 0 && D !== void 0) {
      const J = s.length;
      s.push([d, D]), I.push(l.name);
      const m = C.get(l.name);
      m && E.set(J, m);
    }
  }
  const p = s.length;
  for (const l of x) {
    const d = l.joints.map((D) => H.get(D)).filter((D) => D !== void 0);
    if (d.length >= 3) {
      const D = s.length;
      s.push(d), I.push(l.name);
      const J = w.get(l.name);
      J && E.set(D, J);
    }
  }
  const r = s.length - p, f = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, a = /* @__PURE__ */ new Map(), n = $.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let l = 0; l < s.length; l++) {
    const d = E.get(l), D = d ? M.get(d) : null, J = d ? T.get(d) : null;
    if (D || s[l].length === 2) {
      const m = D || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, Z = $.get(m.material) || n, v = Z.E || n.E, V = Z.nu || 0.3, ie = Z.G || v / (2 * (1 + V));
      f.elasticities.set(l, v), f.shearModuli.set(l, ie), f.areas.set(l, m.A || m.D * m.B), f.momentsOfInertiaZ.set(l, m.Iz || m.B * m.D ** 3 / 12), f.momentsOfInertiaY.set(l, m.Iy || m.D * m.B ** 3 / 12), f.torsionalConstants.set(l, m.J || 0), f.densities.set(l, Z.density || 0), ((_a = m.shape) == null ? void 0 : _a.includes("Wide Flange")) || m.shape === "I" ? a.set(l, { type: "I", b: m.B, h: m.D, name: d || "I-section" }) : a.set(l, { type: "rect", b: m.B, h: m.D });
    } else if (J) {
      const m = $.get(J.material) || n, Z = m.E || n.E, v = m.nu || 0.2, V = m.G || Z / (2 * (1 + v));
      f.elasticities.set(l, Z), f.shearModuli.set(l, V), f.thicknesses.set(l, J.thickness), f.poissonsRatios.set(l, v), f.densities.set(l, m.density || 0);
    }
  }
  const O = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [l, d] of h) {
    const D = H.get(l);
    D !== void 0 && O.supports.set(D, d);
  }
  for (const l of Y) {
    const d = H.get(l.joint);
    if (d !== void 0) {
      const D = O.forces.get(d) || [0, 0, 0, 0, 0, 0];
      D[0] += l.fx, D[1] += l.fy, D[2] += l.fz, D[3] += l.mx, D[4] += l.my, D[5] += l.mz, O.forces.set(d, D);
    }
  }
  return { units: S, dof: i, materials: $, frameSections: M, shellSections: T, nodes: z, nodeNames: k, nodeNameToIdx: H, elements: s, elementNames: I, elementSections: E, nodeInputs: O, elementInputs: f, sectionShapes: a, info: { nNodes: z.length, nFrames: p, nShells: r, title: `SAP2000 (${p} frames, ${r} shells)` } };
}
function St(S) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k;
  const { nodes: i, elements: $, nodeInputs: M, elementInputs: T } = S, R = S.units || { force: "KN", length: "m" }, P = S.title || "Awatif Model", x = [], h = (a) => x.push(a), C = () => x.push(" ");
  h(`File ${P}.$2k was saved on m/d/yy at h:mm:ss`), C(), h('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), h("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), C();
  const w = [], Y = [];
  if ($.forEach((a, n) => {
    a.length === 2 ? w.push(n) : Y.push(n);
  }), w.length > 0) {
    h('TABLE:  "CONNECTIVITY - FRAME"');
    for (const a of w) {
      const n = $[a];
      h(`   Frame=${a + 1}   JointI=${n[0] + 1}   JointJ=${n[1] + 1}   IsCurved=No`);
    }
    C();
  }
  if (Y.length > 0) {
    h('TABLE:  "CONNECTIVITY - AREA"');
    for (const a of Y) {
      const n = $[a], O = n.map((l, d) => `Joint${d + 1}=${l + 1}`).join("   ");
      h(`   Area=${a + 1}   NumJoints=${n.length}   ${O}`);
    }
    C();
  }
  h('TABLE:  "COORDINATE SYSTEMS"'), h("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), C(), h('TABLE:  "DATABASE FORMAT TYPES"'), h("   UnitsCurr=Yes   OverrideE=No"), C();
  const k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
  for (const a of w) {
    const n = ((_a = T.areas) == null ? void 0 : _a.get(a)) || 0, O = ((_b = T.momentsOfInertiaZ) == null ? void 0 : _b.get(a)) || 0, l = ((_c = T.momentsOfInertiaY) == null ? void 0 : _c.get(a)) || 0, d = ((_d = T.torsionalConstants) == null ? void 0 : _d.get(a)) || 0, D = ((_e2 = T.elasticities) == null ? void 0 : _e2.get(a)) || 0, J = `MAT_${Math.round(D)}`, m = `A${n.toPrecision(6)}_Iz${O.toPrecision(6)}`;
    if (!k.has(m)) {
      let v = 0.3, V = 0.3;
      n > 0 && O > 0 && (v = Math.sqrt(12 * O / n), V = n / v), k.set(m, { A: n, Iz: O, Iy: l, J: d, b: V, h: v, matKey: J });
    }
    const Z = [...k.keys()].indexOf(m) + 1;
    H.set(a, `SEC${Z}`);
  }
  if (w.length > 0) {
    h('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const a of w) {
      const n = H.get(a) || "SEC1";
      h(`   Frame=${a + 1}   AutoSelect=N.A.   AnalSect=${n}   MatProp=Default`);
    }
    C();
  }
  if (k.size > 0) {
    h('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let a = 0;
    for (const [, n] of k) {
      a++;
      const O = n.A * 5 / 6;
      h(`   SectionName=SEC${a}   Material=${n.matKey}   Shape=Rectangular   t3=${F(n.h)}   t2=${F(n.b)}   Area=${F(n.A)}   TorsConst=${F(n.J)}   I33=${F(n.Iz)}   I22=${F(n.Iy)}   I23=0   AS2=${F(O)}   AS3=${F(O)} _`), h("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    }
    C();
  }
  const z = !!S.layeredSection && Y.length > 0, s = S.layeredSection, I = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
  if (!z) for (const a of Y) {
    const n = ((_f = T.thicknesses) == null ? void 0 : _f.get(a)) || 0.1, O = ((_g = T.elasticities) == null ? void 0 : _g.get(a)) || 0, l = `MAT_${Math.round(O)}`, d = `t${n.toPrecision(6)}`;
    I.has(d) || I.set(d, { t: n, matKey: l });
    const D = [...I.keys()].indexOf(d) + 1;
    E.set(a, `SSEC${D}`);
  }
  if (Y.length > 0) {
    h('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of Y) {
      const n = z ? s.name : E.get(a) || "SSEC1";
      h(`   Area=${a + 1}   Section=${n}   MatProp=Default`);
    }
    if (C(), h('TABLE:  "AREA SECTION PROPERTIES"'), z) {
      const a = s, n = ((_h = a.layers[0]) == null ? void 0 : _h.material) || "MAT_DEFAULT";
      h(`   Section=${a.name}   Material=${n}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${F(a.totalThickness)}   BendThick=${F(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, n] of I) a++, h(`   Section=SSEC${a}   Material=${n.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${F(n.t)}   BendThick=${F(n.t)}   Color=Cyan`);
    }
    if (C(), z) {
      h('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = s;
      for (const n of a.layers) {
        const O = n.angle ?? 0, l = n.numIntPts ?? 3;
        h(`   Section=${a.name}   LayerName=${n.name}   Distance=${F(n.distance)}   Thickness=${F(n.thickness)}   Type=Shell   NumIntPts=${l}   Material=${n.material}   MatAngle=${F(O * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      C();
    }
  }
  h('TABLE:  "JOINT COORDINATES"');
  for (let a = 0; a < i.length; a++) {
    const n = i[a];
    h(`   Joint=${a + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${F(n[0])}   Y=${F(n[1])}   Z=${F(n[2])}   SpecialJt=No`);
  }
  if (C(), M.supports && M.supports.size > 0) {
    h('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [a, n] of M.supports) {
      if (!n.some((l) => l)) continue;
      const O = (l) => l ? "Yes" : "No";
      h(`   Joint=${a + 1}   U1=${O(n[0])}   U2=${O(n[1])}   U3=${O(n[2])}   R1=${O(n[3])}   R2=${O(n[4])}   R3=${O(n[5])}`);
    }
    C();
  }
  const p = S.selfWtMult ?? 1;
  if (h('TABLE:  "LOAD PATTERN DEFINITIONS"'), h(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${p}`), C(), h('TABLE:  "LOAD CASE DEFINITIONS"'), h('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), C(), h('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), h('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), C(), M.forces && M.forces.size > 0) {
    h('TABLE:  "JOINT LOADS - FORCE"');
    for (const [a, n] of M.forces) n.some((O) => Math.abs(O) > 1e-12) && h(`   Joint=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${F(n[0])}   F2=${F(n[1])}   F3=${F(n[2])}   M1=${F(n[3])}   M2=${F(n[4])}   M3=${F(n[5])}`);
    C();
  }
  const r = T.frameLoads;
  if (r && r.size > 0) {
    h('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [a, n] of r) {
      const O = $[a];
      if (!O || O.length !== 2) continue;
      const l = i[O[0]], d = i[O[1]], D = Math.hypot(d[0] - l[0], d[1] - l[1], d[2] - l[2]);
      ["X", "Y", "Z"].forEach((J, m) => {
        Math.abs(n[m]) < 1e-12 || h(`   Frame=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${J}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${F(D)}   FOverLA=${F(n[m])}   FOverLB=${F(n[m])}`);
      });
    }
    C();
  }
  const f = /* @__PURE__ */ new Map();
  for (let a = 0; a < $.length; a++) {
    const n = ((_i = T.elasticities) == null ? void 0 : _i.get(a)) || 0, O = ((_j = T.shearModuli) == null ? void 0 : _j.get(a)) || 0, l = n > 0 && O > 0 ? Math.max(0, Math.min(0.5, n / (2 * O) - 1)) : 0.2, d = ((_k = T.densities) == null ? void 0 : _k.get(a)) || 0, D = `MAT_${Math.round(n)}`;
    f.has(D) || f.set(D, { E: n, nu: l, G: O, rho: d });
  }
  h('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [a] of f) h(`   Material=${a}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  C(), h('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [a, n] of f) h(`   Material=${a}   UnitWeight=${F(n.rho * 9.81)}   UnitMass=${F(n.rho)}   E1=${F(n.E)}   G12=${F(n.G)}   U12=${F(n.nu)}   A1=9.9E-06`);
  C(), h('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [a] of f) h(`   Material=${a}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return C(), h('TABLE:  "PROGRAM CONTROL"'), h(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${R.force}, ${R.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), C(), h("END TABLE DATA"), h(""), x.join(`\r
`);
}
function F(S) {
  return S === 0 || Math.abs(S) < 1e-15 ? "0" : Math.abs(S) >= 1e6 || Math.abs(S) < 1e-3 && Math.abs(S) > 0 ? S.toExponential(8) : parseFloat(S.toPrecision(10)).toString();
}
function ot(S, i, $ = 0.05) {
  const M = i.map(([T, R]) => `${(+T).toFixed(4)} ${(+R).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${S}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${$}  SPECTYPE "USER"  `, `  FUNCTION "${S}"  TIMEVAL "${M}"  `];
}
function at(S) {
  const { name: i, func: $, modalCase: M = "Modal", sfX: T = 9.81, sfY: R = 9.81 } = S, P = [`  LOADCASE "${i}"  TYPE  "Response Spectrum"  MODALCASE  "${M}"  `];
  return T && P.push(`  LOADCASE "${i}"  ACCEL  "U1"  FUNC  "${$}"  SF  ${T}  `), R && P.push(`  LOADCASE "${i}"  ACCEL  "U2"  FUNC  "${$}"  SF  ${R}  `), P;
}
function Je(S) {
  const { name: i = "Modal", ritz: $ = false, nModes: M = 12 } = S;
  return $ ? [`  LOADCASE "${i}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${M} MINMODES  1 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${i}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${M} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function At(S) {
  var _a;
  const i = (_a = S.e2kModel) == null ? void 0 : _a.rawSections;
  let $ = i && i.size > 0 ? it(i, S.e2kModel) : rt(S);
  return S.seismicNEC && ($ = ct($, S.seismicNEC)), $;
}
function ct(S, i) {
  const $ = S.includes(`\r
`) ? `\r
` : `
`, M = S.split(/\r?\n/), T = i.name ?? "NEC", R = ot(T, i.points, i.dampRatio ?? 0.05), P = i.modalCase ?? "Modal", x = at({ name: i.caseName ?? "Sismo NEC", func: T, modalCase: P, sfX: i.sfX, sfY: i.sfY });
  let h = [];
  const C = (w) => M.some((Y) => w.test(Y));
  if (i.modal) {
    const w = new RegExp(`^\\s*LOADCASE\\s+"${P}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let Y = M.length - 1; Y >= 0; Y--) w.test(M[Y]) && M.splice(Y, 1);
    h = Je({ name: P, ritz: !!i.modal.ritz, nModes: i.modal.nModes });
  } else C(new RegExp(`LOADCASE\\s+"${P}"\\s+TYPE\\s+"Modal`)) || (h = Je({ name: P }));
  return _e(M, "FUNCTIONS", R), _e(M, "LOAD CASES", [...h, ...x]), M.join($);
}
function _e(S, i, $) {
  const M = S.findIndex((P) => P.trim() === `$ ${i}`);
  if (M >= 0) {
    S.splice(M + 1, 0, ...$);
    return;
  }
  const T = S.findIndex((P) => P.trim() === "END"), R = T >= 0 ? T : S.length;
  S.splice(R, 0, `$ ${i}`, ...$, "");
}
function it(S, i) {
  const $ = [], M = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  $.push("$ File exported from Hekatan Struct Lineal (round-trip)"), $.push("");
  for (const T of M) {
    const R = S.get(T);
    if (!(!R || R.length === 0)) {
      $.push(`$ ${T}`);
      for (const P of R) $.push(P);
      $.push("");
    }
  }
  for (const [T, R] of S) if (!M.includes(T) && R.length !== 0) {
    $.push(`$ ${T}`);
    for (const P of R) $.push(P);
    $.push("");
  }
  return $.push("  END"), $.push("$ END OF MODEL FILE"), $.join(`\r
`);
}
function rt(S) {
  var _a, _b, _c, _d, _e2, _f, _g, _h;
  const { nodes: i, elements: $, nodeInputs: M, elementInputs: T, title: R, units: P } = S, x = S.shellLoads ?? T.shellSurfaceLoads;
  let h;
  x instanceof Map && (h = /* @__PURE__ */ new Map(), x.forEach((e, t) => {
    h.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const C = S.shellAngles ?? T.shellAngles, w = T.cargaDeArea, Y = !!(h && h.size > 0), k = (e, t) => [t[0], t[1], t[2] - (Y ? (w == null ? void 0 : w.get(e)) ?? 0 : 0)], H = (P == null ? void 0 : P.force) || "Tonf", z = (P == null ? void 0 : P.length) || "m", s = [], I = (e) => Math.round(e * 1e4) / 1e4, E = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), p = (() => {
    const e = (H || "Tonf").toLowerCase();
    return e === "tonf" || e === "tonf-f" ? 1 / 9.80665 : e === "kn" || e === "kn-f" ? 1 : e === "kgf" || e === "kg" ? 1 / 980665e-8 : e === "kip" || e === "kips" ? 1 / 4.44822 : 1;
  })(), r = (e) => e * p, f = (e) => e * 1e3, a = (e) => e * p, n = (e) => e * p, O = /* @__PURE__ */ new Date(), l = `${O.getMonth() + 1}/${O.getDate()}/${O.getFullYear()}  ${O.getHours()}:${String(O.getMinutes()).padStart(2, "0")}:${String(O.getSeconds()).padStart(2, "0")}`;
  s.push(`$ File   "Hekatan_export.e2k"  saved ${l} in ETABS 22.6.0`), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${H}"  "${z}"  "C"  `), s.push('  TITLE1  "Hekatan Struct Lineal export"  '), R && s.push(`  TITLE2  "${R}"  `), s.push("  PREFERENCE  MERGETOL 0.001"), s.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), s.push("");
  const d = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  i.forEach((e) => {
    d.add(I(e[0])), D.add(I(e[1]));
  });
  const J = [...d].sort((e, t) => e - t), m = [...D].sort((e, t) => e - t);
  s.push("$ GRIDS"), s.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), J.forEach((e, t) => {
    const o = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    s.push(`  GRID "G1"  LABEL "${o}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), m.forEach((e, t) => {
    s.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.push("");
  const Z = 3, v = 0.5, V = /* @__PURE__ */ new Map();
  i.forEach((e) => {
    const t = I(e[2]);
    V.set(t, (V.get(t) ?? 0) + 1);
  });
  const ie = /* @__PURE__ */ new Set();
  i.forEach((e) => ie.add(I(e[2])));
  const K = [...ie].sort((e, t) => e - t);
  let U = K.filter((e) => (V.get(e) ?? 0) >= Z);
  if (U.length > 1) {
    const e = [U[0]];
    for (const t of U.slice(1)) t - e[e.length - 1] < v ? e[e.length - 1] = t : e.push(t);
    U = e;
  }
  U.length || (U = K.slice()), U[0] !== K[0] && U.unshift(K[0]), U[U.length - 1] !== K[K.length - 1] && U.push(K[K.length - 1]);
  const re = [], oe = /* @__PURE__ */ new Map();
  re.push("Base"), oe.set(U[0], "Base");
  for (let e = 1; e < U.length; e++) {
    const t = `Level_${e}`;
    re.push(t), oe.set(U[e], t);
  }
  const Ce = (e) => {
    const t = I(e);
    if (oe.has(t)) return { story: oe.get(t), dz: 0 };
    for (let c = 0; c < U.length; c++) if (U[c] >= t) return { story: oe.get(U[c]), dz: I(U[c] - t) };
    const o = U[U.length - 1];
    return { story: oe.get(o), dz: I(o - t) };
  };
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = U.length - 1; e >= 1; e--) s.push(`  STORY "${re[e]}"  HEIGHT ${I(U[e] - U[e - 1])} MASTERSTORY "Yes"  `);
  U.length > 0 && s.push(`  STORY "Base"  ELEV ${U[0]} `), s.push(""), $.some((e) => e.length === 4), s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push(""), s.push("$ MATERIAL PROPERTIES");
  const De = /* @__PURE__ */ new Set();
  (_a = T.elasticities) == null ? void 0 : _a.forEach((e) => De.add(e));
  const Ee = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
  let ve = 0, Xe = 0;
  const Ve = 980665e-8, Pe = /* @__PURE__ */ new Map();
  if (T.densities && T.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    T.densities.forEach((t, o) => {
      var _a2;
      const c = (_a2 = T.elasticities) == null ? void 0 : _a2.get(o);
      c !== void 0 && (e.has(c) || e.set(c, []), e.get(c).push(t));
    }), e.forEach((t, o) => {
      const c = t.reduce((N, g) => N + g, 0) / t.length, A = c > 100 ? c * Ve : c * 9.80665;
      Pe.set(o, A);
    });
  }
  for (const e of De) {
    const t = e >= 1e8, o = t ? `Steel_${++ve}` : `Conc_${++Xe}`;
    Ee.set(e, o), Ie.set(e, t);
    const c = Pe.get(e) ?? (t ? 76.97 : 24), A = a(e), N = n(c), g = t ? 0.3 : 0.2, u = t ? 117e-7 : 1e-5;
    if (t) {
      s.push(`  MATERIAL  "${o}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${I(N)}`), s.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${I(A)}  U ${g}  A ${u}`);
      const B = 345e3, _ = 45e4;
      s.push(`  MATERIAL  "${o}"  FY ${I(a(B))}  FU ${I(a(_))}  FYE ${I(a(B * 1.1))}  FUE ${I(a(_ * 1.1))}`);
    } else s.push(`  MATERIAL  "${o}"    TYPE "Concrete"    WEIGHTPERVOLUME ${I(N)}`), s.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${I(A)}  U ${g}  A ${u}`), s.push(`  MATERIAL  "${o}"    FC ${I(a(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const le = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), q = 0.05;
  $.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h2, _i, _j;
    if (e.length !== 2) return;
    const o = (_a2 = T.sectionShapes) == null ? void 0 : _a2.get(t), c = ((_b2 = T.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, A = Ee.get(c) || "Conc_1", N = Ie.get(c) ?? c >= 1e8, g = ((_c2 = T.areas) == null ? void 0 : _c2.get(t)) ?? 0, u = ((_d2 = T.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, B = ((_e3 = T.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, _ = ((_f2 = T.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let G = (o == null ? void 0 : o.type) || "rect", y = (o == null ? void 0 : o.h) ?? 0, b = (o == null ? void 0 : o.b) ?? 0, ne = (o == null ? void 0 : o.d) ?? 0;
    const me = (o == null ? void 0 : o.tf) ?? 0, Te = (o == null ? void 0 : o.tw) ?? 0;
    if (!o && y <= 0 && b <= 0 && ne <= 0 && g > 0 && u > 0 && B > 0) {
      const j = (_g2 = T.cantos) == null ? void 0 : _g2.get(t), ce = (_h2 = T.anchos) == null ? void 0 : _h2.get(t);
      y = j && j > 0 ? j : Math.sqrt(12 * u / g), b = ce && ce > 0 ? ce : g / y, (!isFinite(y) || y < q) && (y = q), (!isFinite(b) || b < q) && (b = q), G = "general";
    } else y <= 0 && b <= 0 && ne <= 0 && g > 0 && (u > 0 ? (y = Math.sqrt(12 * u / g), b = g / y) : y = b = Math.sqrt(g), (!isFinite(y) || y < q) && (y = q), (!isFinite(b) || b < q) && (b = q), G = "rect");
    y <= 0 && b <= 0 && ne <= 0 && (y = 0.3, b = 0.3, G = "rect");
    const ue = (o == null ? void 0 : o.name) ? `NAME_${o.name}` : `${G}_${I(y)}_${I(b)}_${I(ne)}_${I(me)}_${I(Te)}_${A}`;
    (o == null ? void 0 : o.name) && !fe.has(ue) && fe.set(ue, o.name);
    let W = fe.get(ue);
    if (!W) {
      const j = N ? "S" : "C";
      G === "general" ? W = `${j}_G${le.size + 1}` : G === "rect" ? W = `${j}_R${Math.round(b * 100)}x${Math.round(y * 100)}` : G === "circ" ? W = `${j}_C_D${Math.round(ne * 100)}` : G === "I" ? W = `${j}_I${Math.round(y * 100)}x${Math.round(b * 100)}` : G === "HSS" ? W = `${j}_HSS${Math.round(b * 100)}x${Math.round(y * 100)}x${Math.round(Te * 1e3)}` : W = `${j}_Sec${le.size + 1}`, fe.set(ue, W);
    }
    if ($e.set(t, W), le.has(W)) return;
    le.add(W);
    let X;
    G === "general" ? X = "General" : G === "I" ? X = "Steel I/Wide Flange" : G === "HSS" ? X = "Steel Tube" : G === "CFT" ? X = "Filled Steel Tube" : G === "pipe" ? X = "Steel Pipe" : G === "L" ? X = "Steel Angle" : G === "C" ? X = "Steel Channel" : G === "2C" ? X = "Steel Double Channel" : G === "circ" ? X = "Concrete Circle" : X = "Concrete Rectangular";
    let te = `  FRAMESECTION  "${W}"  MATERIAL "${A}"  SHAPE "${X}"`;
    if (G === "general") {
      const j = ((_i = T.shearAreasY) == null ? void 0 : _i.get(t)) || g * 5 / 6, ce = ((_j = T.shearAreasZ) == null ? void 0 : _j.get(t)) || g * 5 / 6;
      te += `  D ${I(y)} B ${I(b)} AREA ${E(g)} AS2 ${E(j)} AS3 ${E(ce)} I33 ${E(u)} I22 ${E(B)} TORSION ${E(_ || u + B)} S33POS ${E(2 * u / y)} S33NEG ${E(2 * u / y)} S22POS ${E(2 * B / b)} S22NEG ${E(2 * B / b)} Z33 ${E(2 * u / y)} Z22 ${E(2 * B / b)} R33 ${E(Math.sqrt(u / g))} R22 ${E(Math.sqrt(B / g))} `, s.push(te);
      return;
    }
    y && (te += `  D ${I(y)}`), b && (te += `  B ${I(b)}`), ne && !y && (te += `  D ${I(ne)}`), me && (te += `  TF ${I(me)}`), Te && (te += `  TW ${I(Te)}`), s.push(te);
  }), s.push("");
  const Se = /* @__PURE__ */ new Map();
  let Ke = 0;
  i.forEach((e) => {
    const { dz: t } = Ce(e[2]), o = `${I(e[0])},${I(e[1])},${t}`;
    Se.has(o) || Se.set(o, `${++Ke}`);
  }), s.push("$ POINT COORDINATES");
  for (const [e, t] of Se) {
    const [o, c, A] = e.split(",").map(Number);
    s.push(A ? `  POINT "${t}"  ${o} ${c} ${A} ` : `  POINT "${t}"  ${o} ${c} `);
  }
  s.push("");
  const Q = (e) => {
    const t = i[e], { story: o, dz: c } = Ce(t[2]), A = `${I(t[0])},${I(t[1])},${c}`;
    return { pt: Se.get(A) || "1", story: o };
  }, Fe = (e) => {
    var _a2, _b2, _c2, _d2, _e3;
    const t = [], o = (_a2 = S.propertyModifiers) == null ? void 0 : _a2.get(e);
    o && o.some((u) => Math.abs(u - 1) > 1e-9) && t.push(`PROPMODIFIERS "${o.map((u) => I(u)).join(" ")}"`);
    const c = (_b2 = T.localAngles) == null ? void 0 : _b2.get(e);
    c !== void 0 && isFinite(c) && Math.abs(c) > 1e-9 && t.push(`ANG ${I(c)}`);
    const A = (_c2 = T.momentReleases) == null ? void 0 : _c2.get(e);
    if (A && A.some((u) => u)) {
      const u = [];
      A.length === 12 ? (A[0] && u.push("PI"), A[1] && u.push("V2I"), A[2] && u.push("V3I"), A[3] && u.push("TI"), A[4] && u.push("M2I"), A[5] && u.push("M3I"), A[6] && u.push("PJ"), A[7] && u.push("V2J"), A[8] && u.push("V3J"), A[9] && u.push("TJ"), A[10] && u.push("M2J"), A[11] && u.push("M3J")) : A.length === 6 && (A[0] && u.push("TI"), A[1] && u.push("M2I"), A[2] && u.push("M3I"), A[3] && u.push("TJ"), A[4] && u.push("M2J"), A[5] && u.push("M3J")), u.length > 0 && t.push(`RELEASE "${u.join(" ")}"`);
    }
    const N = (_d2 = T.insertionPoints) == null ? void 0 : _d2.get(e);
    N && (Math.abs(N[0]) > 1e-9 || Math.abs(N[1]) > 1e-9) && t.push(`LATEROFFSET ${I(N[0])} TRANSOFFSET ${I(N[1])}`);
    const g = (_e3 = T.rigidOffsets) == null ? void 0 : _e3.get(e);
    return g && (Math.abs(g[0]) > 1e-9 || Math.abs(g[1]) > 1e-9) && t.push(`LENGTHOFFI ${I(g[0])} LENGTHOFFJ ${I(g[1])} RIGIDZONE 0.5`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, Me = [], ye = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map();
  $.forEach((e, t) => {
    if (e.length !== 2) return;
    const o = We(i, e);
    if (o === "BEAM") return;
    const c = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], A = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    if (Math.abs(i[c][0] - i[A][0]) > 1e-6 || Math.abs(i[c][1] - i[A][1]) > 1e-6) return;
    const N = Q(c), g = $e.get(t) || `Sec_${t}`, u = `${N.pt}_${g}_${o}`;
    Ae.has(u) || Ae.set(u, []), Ae.get(u).push({ i: t, bot: c, top: A, zBot: I(i[c][2]), zTop: I(i[A][2]), planPt: N.pt, secName: g, type: o });
  }), Ae.forEach((e, t) => {
    e.sort((c, A) => c.zBot - A.zBot);
    let o = 0;
    for (let c = 1; c <= e.length; c++) if (c === e.length || Math.abs(e[c].zBot - e[c - 1].zTop) > 1e-6) {
      const N = e.slice(o, c);
      N.length >= 1 && (Me.push({ elemIndices: N.map((g) => g.i), planPt: N[0].planPt, bottomNodeIdx: N[0].bot, topNodeIdx: N[N.length - 1].top, secName: N[0].secName, type: N[0].type, nSegments: N.length }), N.forEach((g) => ye.add(g.i))), o = c;
    }
  }), s.push("$ LINE CONNECTIVITIES");
  const Ye = [], Be = (e) => re.indexOf(e), Ue = (e, t, o, c, A, N, g) => {
    const u = Q(c), B = Q(o), _ = Be(u.story) - Be(B.story);
    _ <= 0 ? s.push(`  LINE  "${e}"  BEAM  "${B.pt}"  "${u.pt}"  0`) : s.push(`  LINE  "${e}"  ${t}  "${B.pt}"  "${u.pt}"  ${_}`), Ye.push(`  LINEASSIGN  "${e}"  "${u.story}"  SECTION "${A}" ${N} MINNUMSTA ${g} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  Me.forEach((e, t) => {
    const o = Fe(e.elemIndices[0]);
    Ue(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, o, e.nSegments);
  }), $.forEach((e, t) => {
    if (e.length !== 2 || ye.has(t)) return;
    const o = We(i, e), c = $e.get(t) || `Sec_${t}`, A = Fe(t), N = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], g = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    Ue(`E${t + 1}`, o === "BEAM" ? "BRACE" : o, N, g, c, A, 3);
  }), s.push("");
  const he = S.weightMode ?? "auto", ae = /* @__PURE__ */ new Set();
  s.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((e, t) => {
    const o = [];
    if (e[0] && o.push("UX"), e[1] && o.push("UY"), e[2] && o.push("UZ"), e[3] && o.push("RX"), e[4] && o.push("RY"), e[5] && o.push("RZ"), o.length > 0) {
      const c = Q(t), A = c.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      s.push(`  POINTASSIGN  "${c.pt}"  "${c.story}"  RESTRAINT "${o.join(" ")}" ${A} `), ae.add(`${c.pt}@${c.story}`);
    }
  });
  const Ge = (S.diaphragm ?? "auto") !== "none";
  Ge && Me.forEach((e) => {
    const t = Q(e.topNodeIdx), o = `${t.pt}@${t.story}`;
    !ae.has(o) && t.story !== "Base" && (s.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), ae.add(o));
  }), he === "manual" && M.loads && M.loads.forEach((e, t) => {
    const [o, c, A] = k(t, e);
    if (Math.abs(o) < 1e-10 && Math.abs(c) < 1e-10 && Math.abs(A) < 1e-10) return;
    const N = Q(t), g = `${N.pt}@${N.story}`;
    ae.has(g) || (s.push(`  POINTASSIGN  "${N.pt}"  "${N.story}"  DIAPH "DISCONNECTED"  `), ae.add(g));
  }), s.push(""), s.push("$ LINE ASSIGNS"), Ye.forEach((e) => s.push(e)), s.push("");
  const ee = [], be = T.areaObjects, we = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map();
  be == null ? void 0 : be.forEach((e) => e.cells.forEach((t) => we.add(t))), $.forEach((e, t) => {
    if (e.length === 4) {
      const o = i[e[0]], c = i[e[1]], A = i[e[2]], N = [c[0] - o[0], c[1] - o[1], c[2] - o[2]], g = [A[0] - o[0], A[1] - o[1], A[2] - o[2]], u = N[1] * g[2] - N[2] * g[1], B = N[2] * g[0] - N[0] * g[2], _ = N[0] * g[1] - N[1] * g[0], G = Math.sqrt(u * u + B * B + _ * _), y = G > 1e-10 && Math.abs(_) / G < 0.5;
      ee.push({ idx: t, el: e, isWall: y }), we.has(t) && ee.pop();
    }
  });
  const pe = (() => {
    for (const [e, t] of Ie) if (!t) return Ee.get(e);
    return Ee.values().next().value || "Conc_1";
  })();
  be == null ? void 0 : be.forEach((e, t) => {
    ee.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && ke.set(e.cells[0], e.q), e.ang !== void 0 && xe.set(e.cells[0], e.ang);
  });
  const He = "DECK";
  let Ne = false;
  const Oe = [];
  if (ee.some((e) => !e.isWall)) {
    const e = T.bendingModifiers, t = T.shellModifiers;
    Ne = (() => {
      for (const c of ee) {
        if (c.isWall) continue;
        const A = t == null ? void 0 : t.get(c.idx);
        if (A && Math.abs(A[3]) < 1e-9 && Math.abs(A[4]) < 1e-9) return true;
        const N = e == null ? void 0 : e.get(c.idx);
        if (N !== void 0 && Math.abs(N) < 1e-9) return true;
      }
      return false;
    })();
    const o = ((_c = T.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    Ne ? (s.push("$ DECK PROPERTIES"), s.push(`  SHELLPROP  "${He}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${pe}"  DECKMATERIAL "${pe}"  DECKSLABDEPTH ${E(o * 65 / 120)} DECKRIBDEPTH ${E(o * 55 / 120)} DECKRIBWIDTHTOP ${E(o * 150 / 120)} DECKRIBWIDTHBOTTOM ${E(o * 100 / 120)} DECKRIBSPACING ${E(o * 200 / 120)} DECKSHEARTHICKNESS ${E(o * 0.76 / 120)} DECKUNITWEIGHT ${E(r(0.11012))} SHEARSTUDDIAM ${E(o * 19 / 120)} SHEARSTUDHEIGHT ${E(o * 100 / 120)} SHEARSTUDFU 400 `)) : (s.push("$ SLAB PROPERTIES"), s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${pe}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${I(o)} `)), s.push("");
  }
  if (ee.some((e) => e.isWall)) {
    s.push("$ WALL PROPERTIES");
    const e = ((_d = T.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${pe}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${I(e)} `), s.push("");
  }
  if (ee.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const e = [];
    ee.forEach((t, o) => {
      const { el: c, isWall: A } = t, N = A ? `W${o + 1}` : `F${o + 1}`, g = A ? "PANEL" : "FLOOR", u = c.map((B) => Q(B));
      if (A) {
        const B = i[c[0]][2] <= i[c[2]][2] ? 0 : 2, _ = i[c[1]][2] <= i[c[3]][2] ? 1 : 3;
        s.push(`  AREA "${N}"  ${g}  4  "${u[B].pt}"  "${u[_].pt}"  "${u[_].pt}"  "${u[B].pt}"  1  1  0  0  `);
        const G = u[B === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${N}"  "${G}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        s.push(`  AREA "${N}"  ${g}  4  "${u[0].pt}"  "${u[1].pt}"  "${u[2].pt}"  "${u[3].pt}"  0  0  0  0  `);
        const B = xe.get(t.idx) ?? (C == null ? void 0 : C.get(t.idx));
        e.push(Ne ? `  AREAASSIGN  "${N}"  "${u[0].story}"  SECTION "${He}"  ANG ${I(B ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${N}"  "${u[0].story}"  SECTION "Losa" ${Ge ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Oe.push({ name: N, story: u[0].story, idx: t.idx });
      }
    }), s.push(""), s.push("$ AREA ASSIGNS"), e.forEach((t) => s.push(t)), s.push("");
  }
  const qe = he === "manual" ? 0 : 1;
  s.push("$ LOAD PATTERNS");
  const se = ((_e2 = S.loadPatterns) == null ? void 0 : _e2.length) ? S.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: qe }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of se) {
    let t;
    e.type === "Dead" ? t = he === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), s.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  s.push("");
  const ge = S.loadPatternDestino && se.some((e) => e.name === S.loadPatternDestino) ? S.loadPatternDestino : ((_f = se.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? se[0].name, Re = [], de = /* @__PURE__ */ new Map(), ze = (e, t) => {
    const o = de.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let c = 0; c < 6; c++) o[c] += t[c] ?? 0;
    de.set(e, o);
  }, Qe = ge === (((_g = se.find((e) => e.type === "Dead")) == null ? void 0 : _g.name) ?? se[0].name), et = he === "manual" || !Qe;
  if (M.loads && M.loads.size > 0 && M.loads.forEach((e, t) => {
    const [o, c, A] = k(t, e);
    ze(t, [o, c, et ? A : 0, e[3] ?? 0, e[4] ?? 0, e[5] ?? 0]);
  }), M.moments && M.moments.size > 0 && M.moments.forEach((e, t) => {
    ze(t, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), de.forEach((e, t) => {
    if (e.every((c) => Math.abs(c) <= 1e-10)) return;
    const o = Q(t);
    Re.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "FORCE"  LC "${ge}"  FX ${E(f(e[0]))}  FY ${E(f(e[1]))}  FZ ${E(f(e[2]))}  MX ${E(f(e[3]))}  MY ${E(f(e[4]))}  MZ ${E(f(e[5]))}`);
  }), Re.length > 0 && (s.push("$ POINT OBJECT LOADS"), Re.forEach((e) => s.push(e)), s.push("")), h && h.size > 0 && Oe.length > 0) {
    const e = [];
    for (const t of Oe) {
      const o = ke.get(t.idx), c = o !== void 0 ? { value: o } : h.get(t.idx);
      if (!c || Math.abs(c.value) < 1e-12) continue;
      const A = c.dir ?? "GRAV", N = A === "GRAV" ? Math.abs(c.value) : c.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${A}"  LC "${c.pattern ?? ge}"  FVAL ${E(r(N))}`);
    }
    e.length > 0 && (s.push("$ SHELL OBJECT LOADS"), e.forEach((t) => s.push(t)), s.push(""));
  }
  s.push("$ ANALYSIS OPTIONS"), s.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), s.push('  PDELTA  METHOD "NONE"  '), s.push(""), s.push("$ MASS SOURCE"), s.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), s.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), s.push(""), s.push("$ LOAD CASES");
  const tt = ((_h = S.loadCases) == null ? void 0 : _h.length) ? S.loadCases : se.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of tt) {
    s.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) s.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  s.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), s.push("");
  const Le = S.loadCombinations;
  if (Le && Le.length) {
    s.push("$ LOAD COMBINATIONS");
    for (const e of Le) {
      s.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) s.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    s.push("");
  }
  return s.push("  END"), s.push("$ END OF MODEL FILE"), s.join(`\r
`);
}
function We(S, i) {
  const $ = S[i[0]], M = S[i[1]], T = Math.abs(M[2] - $[2]), R = Math.sqrt((M[0] - $[0]) ** 2 + (M[1] - $[1]) ** 2), P = T > R * 0.5;
  return P && R > 0.01 ? "BRACE" : P ? "COLUMN" : "BEAM";
}
export {
  St as a,
  At as e,
  ft as p
};
