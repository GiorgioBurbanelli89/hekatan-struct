function L(A) {
  return A && parseFloat(A) || 0;
}
function Xe(A) {
  const r = /* @__PURE__ */ new Map(), $ = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let M;
  for (; (M = $.exec(A)) !== null; ) r.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
  return r;
}
function pt(A) {
  const r = A.split(/\r?\n/);
  return r.some((M) => M.trim().startsWith("TABLE:")) ? ct(r) : it(r);
}
function ct(A) {
  var _a, _b, _c, _d, _e, _f;
  const r = [];
  let $ = "";
  for (const u of A) {
    const S = u.trimEnd();
    S.endsWith("_") ? $ += S.slice(0, -1) + " " : ($ += S, r.push($), $ = "");
  }
  $ && r.push($);
  const M = { force: "KN", length: "m" };
  let f = "UX,UY,UZ,RX,RY,RZ";
  const R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = [], w = [], B = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), _ = [];
  let s = "";
  for (const u of r) {
    const S = u.trim();
    if (!S || S.startsWith(";") || S.startsWith("File ")) continue;
    if (S.startsWith("TABLE:")) {
      const E = S.match(/TABLE:\s+"(.+?)"/);
      s = E ? E[1].toUpperCase() : "";
      continue;
    }
    if (S === "END TABLE DATA") {
      s = "";
      continue;
    }
    const p = Xe(S);
    switch (s) {
      case "PROGRAM CONTROL": {
        const E = p.get("CurrUnits");
        if (E) {
          const l = E.split(",").map((C) => C.trim());
          l[0] && (M.force = l[0]), l[1] && (M.length = l[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const E = p.get("Material");
        E && !R.has(E) && R.set(E, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const E = p.get("Material");
        if (E) {
          const l = R.get(E) || { E: 0, nu: 0, G: 0 };
          l.E = L(p.get("E1")), l.G = L(p.get("G12")), l.nu = L(p.get("U12")), l.density = L(p.get("UnitMass")), R.set(E, l);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const E = p.get("Material");
        E && R.has(E) && (R.get(E).fy = L(p.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const E = p.get("SectionName");
        E && F.set(E, { material: p.get("Material") || "", shape: p.get("Shape") || "Rectangular", D: L(p.get("t3")), B: L(p.get("t2")), TF: L(p.get("tf")), TW: L(p.get("tw")), A: L(p.get("Area")), Iz: L(p.get("I33")), Iy: L(p.get("I22")), J: L(p.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const E = p.get("Section");
        E && z.set(E, { material: p.get("Material") || "", type: p.get("Type") || "Shell", thickness: L(p.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const E = p.get("Joint");
        if (E) {
          const l = L(p.get("XorR")), C = L(p.get("Y")), a = L(p.get("Z"));
          h.set(E, [l, C, a]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const E = p.get("Frame"), l = p.get("JointI"), C = p.get("JointJ");
        E && l && C && m.push({ name: E, j1: l, j2: C });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const E = p.get("Area");
        if (E) {
          const l = parseInt(p.get("NumJoints") || "4"), C = [];
          for (let a = 1; a <= l; a++) {
            const n = p.get(`Joint${a}`);
            n && C.push(n);
          }
          C.length >= 3 && w.push({ name: E, joints: C });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const E = p.get("Joint");
        if (E) {
          const l = [((_a = p.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = p.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = p.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = p.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = p.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = p.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          B.set(E, l);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const E = p.get("Frame"), l = p.get("AnalSect");
        E && l && x.set(E, l);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const E = p.get("Area"), l = p.get("Section");
        E && l && J.set(E, l);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const E = p.get("Joint");
        E && _.push({ joint: E, fx: L(p.get("F1")), fy: L(p.get("F2")), fz: L(p.get("F3")), mx: L(p.get("M1")), my: L(p.get("M2")), mz: L(p.get("M3")) });
        break;
      }
    }
  }
  return Ve(M, f, R, F, z, h, m, w, B, x, J, _);
}
function it(A) {
  const r = { force: "KN", length: "m" };
  let $ = "UX,UY,UZ,RX,RY,RZ";
  const M = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), z = [], h = [], m = /* @__PURE__ */ new Map(), w = [];
  let B = "", x = "";
  for (const s of A) {
    const u = s.trim();
    if (!u || u.startsWith(";")) continue;
    if (!s.startsWith(" ") && !s.startsWith("	")) {
      const E = u.toUpperCase();
      if (E === "END") break;
      E.startsWith("SHELL SECTION") ? B = "SHELL SECTION" : E.startsWith("FRAME SECTION") ? B = "FRAME SECTION" : B = E.split(/\s+/)[0];
      continue;
    }
    const S = Xe(u), p = u.split(/\s+/);
    switch (B) {
      case "SYSTEM": {
        const E = S.get("DOF");
        E && ($ = E);
        const l = S.get("LENGTH");
        l && (r.length = l);
        const C = S.get("FORCE");
        C && (r.force = C);
        break;
      }
      case "JOINT": {
        const E = p[0];
        F.set(E, [L(S.get("X")), L(S.get("Y")), L(S.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const E = S.get("ADD"), l = S.get("DOF");
        if (E && l) {
          const C = l.split(","), a = [false, false, false, false, false, false];
          for (const n of C) {
            const c = n.toUpperCase();
            (c === "UX" || c === "U1") && (a[0] = true), (c === "UY" || c === "U2") && (a[1] = true), (c === "UZ" || c === "U3") && (a[2] = true), (c === "RX" || c === "R1") && (a[3] = true), (c === "RY" || c === "R2") && (a[4] = true), (c === "RZ" || c === "R3") && (a[5] = true);
          }
          m.set(E, a);
        }
        break;
      }
      case "MATERIAL": {
        const E = S.get("NAME");
        if (E) x = E, M.set(E, { E: 0, nu: 0, G: 0 });
        else if (x) {
          const l = M.get(x), C = S.get("E");
          C && (l.E = L(C));
          const a = S.get("U");
          a && (l.nu = L(a)), l.G = l.E / (2 * (1 + l.nu));
          const n = S.get("M");
          n && (l.density = L(n));
        }
        break;
      }
      case "SHELL": {
        const E = p[0], l = S.get("J");
        S.get("SEC"), l && h.push({ name: E, joints: l.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const E = S.get("NAME");
        E && R.set(E, { material: S.get("MAT") || "", type: S.get("TYPE") || "Shell", thickness: L(S.get("TH")) });
        break;
      }
      case "FRAME": {
        const E = p[0], l = S.get("J");
        if (l) {
          const C = l.split(",");
          C.length >= 2 && z.push({ name: E, j1: C[0], j2: C[1] });
        }
        break;
      }
      case "LOAD": {
        const E = S.get("ADD");
        E && w.push({ joint: E, fx: L(S.get("UX")), fy: L(S.get("UY")), fz: L(S.get("UZ")), mx: L(S.get("MX")), my: L(S.get("MY")), mz: L(S.get("MZ")) });
        break;
      }
    }
  }
  return Ve(r, $, M, f, R, F, z, h, m, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), w);
}
function Ve(A, r, $, M, f, R, F, z, h, m, w, B) {
  var _a;
  const x = [], J = /* @__PURE__ */ new Map(), _ = [];
  for (const [c, d] of R) J.set(c, _.length), x.push(c), _.push(d);
  const s = [], u = [], S = /* @__PURE__ */ new Map();
  for (const c of F) {
    const d = J.get(c.j1), g = J.get(c.j2);
    if (d !== void 0 && g !== void 0) {
      const k = s.length;
      s.push([d, g]), u.push(c.name);
      const P = m.get(c.name);
      P && S.set(k, P);
    }
  }
  const p = s.length;
  for (const c of z) {
    const d = c.joints.map((g) => J.get(g)).filter((g) => g !== void 0);
    if (d.length >= 3) {
      const g = s.length;
      s.push(d), u.push(c.name);
      const k = w.get(c.name);
      k && S.set(g, k);
    }
  }
  const E = s.length - p, l = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, C = /* @__PURE__ */ new Map(), a = $.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let c = 0; c < s.length; c++) {
    const d = S.get(c), g = d ? M.get(d) : null, k = d ? f.get(d) : null;
    if (g || s[c].length === 2) {
      const P = g || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, H = $.get(P.material) || a, X = H.E || a.E, V = H.nu || 0.3, ce = H.G || X / (2 * (1 + V));
      l.elasticities.set(c, X), l.shearModuli.set(c, ce), l.areas.set(c, P.A || P.D * P.B), l.momentsOfInertiaZ.set(c, P.Iz || P.B * P.D ** 3 / 12), l.momentsOfInertiaY.set(c, P.Iy || P.D * P.B ** 3 / 12), l.torsionalConstants.set(c, P.J || 0), l.densities.set(c, H.density || 0), ((_a = P.shape) == null ? void 0 : _a.includes("Wide Flange")) || P.shape === "I" ? C.set(c, { type: "I", b: P.B, h: P.D, name: d || "I-section" }) : C.set(c, { type: "rect", b: P.B, h: P.D });
    } else if (k) {
      const P = $.get(k.material) || a, H = P.E || a.E, X = P.nu || 0.2, V = P.G || H / (2 * (1 + X));
      l.elasticities.set(c, H), l.shearModuli.set(c, V), l.thicknesses.set(c, k.thickness), l.poissonsRatios.set(c, X), l.densities.set(c, P.density || 0);
    }
  }
  const n = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [c, d] of h) {
    const g = J.get(c);
    g !== void 0 && n.supports.set(g, d);
  }
  for (const c of B) {
    const d = J.get(c.joint);
    if (d !== void 0) {
      const g = n.forces.get(d) || [0, 0, 0, 0, 0, 0];
      g[0] += c.fx, g[1] += c.fy, g[2] += c.fz, g[3] += c.mx, g[4] += c.my, g[5] += c.mz, n.forces.set(d, g);
    }
  }
  return { units: A, dof: r, materials: $, frameSections: M, shellSections: f, nodes: _, nodeNames: x, nodeNameToIdx: J, elements: s, elementNames: u, elementSections: S, nodeInputs: n, elementInputs: l, sectionShapes: C, info: { nNodes: _.length, nFrames: p, nShells: E, title: `SAP2000 (${p} frames, ${E} shells)` } };
}
function Tt(A) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { nodes: r, elements: $, nodeInputs: M, elementInputs: f } = A, R = A.units || { force: "KN", length: "m" }, F = A.title || "Awatif Model", z = [], h = (a) => z.push(a), m = () => z.push(" ");
  h(`File ${F}.$2k was saved on m/d/yy at h:mm:ss`), m(), h('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), h("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), m();
  const w = [], B = [];
  if ($.forEach((a, n) => {
    a.length === 2 ? w.push(n) : B.push(n);
  }), w.length > 0) {
    h('TABLE:  "CONNECTIVITY - FRAME"');
    for (const a of w) {
      const n = $[a];
      h(`   Frame=${a + 1}   JointI=${n[0] + 1}   JointJ=${n[1] + 1}   IsCurved=No`);
    }
    m();
  }
  if (B.length > 0) {
    h('TABLE:  "CONNECTIVITY - AREA"');
    for (const a of B) {
      const n = $[a], c = n.map((d, g) => `Joint${g + 1}=${d + 1}`).join("   ");
      h(`   Area=${a + 1}   NumJoints=${n.length}   ${c}`);
    }
    m();
  }
  h('TABLE:  "COORDINATE SYSTEMS"'), h("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), m(), h('TABLE:  "DATABASE FORMAT TYPES"'), h("   UnitsCurr=Yes   OverrideE=No"), m();
  const x = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map();
  for (const a of w) {
    const n = ((_a = f.areas) == null ? void 0 : _a.get(a)) || 0, c = ((_b = f.momentsOfInertiaZ) == null ? void 0 : _b.get(a)) || 0, d = ((_c = f.momentsOfInertiaY) == null ? void 0 : _c.get(a)) || 0, g = ((_d = f.torsionalConstants) == null ? void 0 : _d.get(a)) || 0, k = ((_e = f.elasticities) == null ? void 0 : _e.get(a)) || 0, P = `MAT_${Math.round(k)}`, H = ((_f = f.shearAreasZ) == null ? void 0 : _f.get(a)) ?? 0, X = ((_g = f.shearAreasY) == null ? void 0 : _g.get(a)) ?? 0, V = `A${n.toPrecision(6)}_Iz${c.toPrecision(6)}_s${H.toPrecision(6)}_${X.toPrecision(6)}`;
    if (!x.has(V)) {
      let ie = 0.3, oe = 0.3;
      n > 0 && c > 0 && (ie = Math.sqrt(12 * c / n), oe = n / ie), x.set(V, { A: n, Iz: c, Iy: d, J: g, b: oe, h: ie, matKey: P, As2: H > 0 ? H : n * 5 / 6, As3: X > 0 ? X : n * 5 / 6 });
    }
    const ce = [...x.keys()].indexOf(V) + 1;
    J.set(a, `SEC${ce}`);
  }
  if (w.length > 0) {
    h('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const a of w) {
      const n = J.get(a) || "SEC1";
      h(`   Frame=${a + 1}   AutoSelect=N.A.   AnalSect=${n}   MatProp=Default`);
    }
    m();
  }
  if (x.size > 0) {
    h('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let a = 0;
    for (const [, n] of x) a++, h(`   SectionName=SEC${a}   Material=${n.matKey}   Shape=General   t3=${D(n.h)}   t2=${D(n.b)}   Area=${D(n.A)}   TorsConst=${D(n.J)}   I33=${D(n.Iz)}   I22=${D(n.Iy)}   I23=0   AS2=${D(n.As2)}   AS3=${D(n.As3)} _`), h("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    m();
  }
  {
    const a = w.filter((n) => {
      var _a2;
      const c = (_a2 = f.localAngles) == null ? void 0 : _a2.get(n);
      return c !== void 0 && isFinite(c) && Math.abs(c) > 1e-9;
    });
    if (a.length > 0) {
      h('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const n of a) h(`   Frame=${n + 1}   Angle=${D(f.localAngles.get(n))}   AdvanceAxes=No`);
      m();
    }
  }
  const _ = !!A.layeredSection && B.length > 0, s = A.layeredSection, u = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
  if (!_) for (const a of B) {
    const n = ((_h = f.thicknesses) == null ? void 0 : _h.get(a)) || 0.1, c = ((_i = f.elasticities) == null ? void 0 : _i.get(a)) || 0, d = `MAT_${Math.round(c)}`, g = `t${n.toPrecision(6)}`;
    u.has(g) || u.set(g, { t: n, matKey: d });
    const k = [...u.keys()].indexOf(g) + 1;
    S.set(a, `SSEC${k}`);
  }
  if (B.length > 0) {
    h('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of B) {
      const n = _ ? s.name : S.get(a) || "SSEC1";
      h(`   Area=${a + 1}   Section=${n}   MatProp=Default`);
    }
    if (m(), h('TABLE:  "AREA SECTION PROPERTIES"'), _) {
      const a = s, n = ((_j = a.layers[0]) == null ? void 0 : _j.material) || "MAT_DEFAULT";
      h(`   Section=${a.name}   Material=${n}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${D(a.totalThickness)}   BendThick=${D(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, n] of u) a++, h(`   Section=SSEC${a}   Material=${n.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${D(n.t)}   BendThick=${D(n.t)}   Color=Cyan`);
    }
    if (m(), _) {
      h('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = s;
      for (const n of a.layers) {
        const c = n.angle ?? 0, d = n.numIntPts ?? 3;
        h(`   Section=${a.name}   LayerName=${n.name}   Distance=${D(n.distance)}   Thickness=${D(n.thickness)}   Type=Shell   NumIntPts=${d}   Material=${n.material}   MatAngle=${D(c * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      m();
    }
  }
  h('TABLE:  "JOINT COORDINATES"');
  for (let a = 0; a < r.length; a++) {
    const n = r[a];
    h(`   Joint=${a + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${D(n[0])}   Y=${D(n[1])}   Z=${D(n[2])}   SpecialJt=No`);
  }
  if (m(), M.supports && M.supports.size > 0) {
    h('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [a, n] of M.supports) {
      if (!n.some((d) => d)) continue;
      const c = (d) => d ? "Yes" : "No";
      h(`   Joint=${a + 1}   U1=${c(n[0])}   U2=${c(n[1])}   U3=${c(n[2])}   R1=${c(n[3])}   R2=${c(n[4])}   R3=${c(n[5])}`);
    }
    m();
  }
  const p = A.selfWtMult ?? 1;
  h('TABLE:  "LOAD PATTERN DEFINITIONS"'), h(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${p}`), m(), h('TABLE:  "LOAD CASE DEFINITIONS"'), h('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), m(), h('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), h('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), m();
  const E = M.loads;
  if (E && E.size > 0) {
    h('TABLE:  "JOINT LOADS - FORCE"');
    for (const [a, n] of E) n.some((c) => Math.abs(c) > 1e-12) && h(`   Joint=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${D(n[0])}   F2=${D(n[1])}   F3=${D(n[2])}   M1=${D(n[3])}   M2=${D(n[4])}   M3=${D(n[5])}`);
    m();
  }
  const l = f.frameLoads;
  if (l && l.size > 0) {
    h('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [a, n] of l) {
      const c = $[a];
      if (!c || c.length !== 2) continue;
      const d = r[c[0]], g = r[c[1]], k = Math.hypot(g[0] - d[0], g[1] - d[1], g[2] - d[2]);
      ["X", "Y", "Z"].forEach((P, H) => {
        Math.abs(n[H]) < 1e-12 || h(`   Frame=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${P}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${D(k)}   FOverLA=${D(n[H])}   FOverLB=${D(n[H])}`);
      });
    }
    m();
  }
  const C = /* @__PURE__ */ new Map();
  for (let a = 0; a < $.length; a++) {
    const n = ((_k = f.elasticities) == null ? void 0 : _k.get(a)) || 0, c = ((_l = f.shearModuli) == null ? void 0 : _l.get(a)) || 0, d = n > 0 && c > 0 ? Math.max(0, Math.min(0.5, n / (2 * c) - 1)) : 0.2, g = ((_m = f.densities) == null ? void 0 : _m.get(a)) || 0, k = `MAT_${Math.round(n)}`;
    C.has(k) || C.set(k, { E: n, nu: d, G: c, rho: g });
  }
  h('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [a] of C) h(`   Material=${a}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  m(), h('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [a, n] of C) h(`   Material=${a}   UnitWeight=${D(n.rho * 9.81)}   UnitMass=${D(n.rho)}   E1=${D(n.E)}   G12=${D(n.G)}   U12=${D(n.nu)}   A1=9.9E-06`);
  m(), h('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [a] of C) h(`   Material=${a}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return m(), h('TABLE:  "PROGRAM CONTROL"'), h(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${R.force}, ${R.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), m(), h("END TABLE DATA"), h(""), z.join(`\r
`);
}
function D(A) {
  return A === 0 || Math.abs(A) < 1e-15 ? "0" : Math.abs(A) >= 1e6 || Math.abs(A) < 1e-3 && Math.abs(A) > 0 ? A.toExponential(8) : parseFloat(A.toPrecision(10)).toString();
}
function rt(A, r, $ = 0.05) {
  const M = r.map(([f, R]) => `${(+f).toFixed(4)} ${(+R).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${A}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${$}  SPECTYPE "USER"  `, `  FUNCTION "${A}"  TIMEVAL "${M}"  `];
}
function Et(A) {
  const { name: r, func: $, modalCase: M = "Modal", sfX: f = 9.81, sfY: R = 9.81 } = A, F = [`  LOADCASE "${r}"  TYPE  "Response Spectrum"  MODALCASE  "${M}"  `];
  return f && F.push(`  LOADCASE "${r}"  ACCEL  "U1"  FUNC  "${$}"  SF  ${f}  `), R && F.push(`  LOADCASE "${r}"  ACCEL  "U2"  FUNC  "${$}"  SF  ${R}  `), F;
}
function Ze(A) {
  const { name: r = "Modal", ritz: $ = false, nModes: M = 12 } = A;
  return $ ? [`  LOADCASE "${r}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${r}"  MAXMODES  ${M} MINMODES  1 `, `  LOADCASE "${r}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${r}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${r}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${r}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${r}"  MAXMODES  ${M} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function ut(A) {
  var _a;
  const r = (_a = A.e2kModel) == null ? void 0 : _a.rawSections;
  let $ = r && r.size > 0 ? St(r, A.e2kModel) : At(A);
  return A.seismicNEC && ($ = lt($, A.seismicNEC)), $;
}
function lt(A, r) {
  const $ = A.includes(`\r
`) ? `\r
` : `
`, M = A.split(/\r?\n/), f = r.name ?? "NEC", R = rt(f, r.points, r.dampRatio ?? 0.05), F = r.modalCase ?? "Modal", z = Et({ name: r.caseName ?? "Sismo NEC", func: f, modalCase: F, sfX: r.sfX, sfY: r.sfY });
  let h = [];
  const m = (w) => M.some((B) => w.test(B));
  if (r.modal) {
    const w = new RegExp(`^\\s*LOADCASE\\s+"${F}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let B = M.length - 1; B >= 0; B--) w.test(M[B]) && M.splice(B, 1);
    h = Ze({ name: F, ritz: !!r.modal.ritz, nModes: r.modal.nModes });
  } else m(new RegExp(`LOADCASE\\s+"${F}"\\s+TYPE\\s+"Modal`)) || (h = Ze({ name: F }));
  return je(M, "FUNCTIONS", R), je(M, "LOAD CASES", [...h, ...z]), M.join($);
}
function je(A, r, $) {
  const M = A.findIndex((F) => F.trim() === `$ ${r}`);
  if (M >= 0) {
    A.splice(M + 1, 0, ...$);
    return;
  }
  const f = A.findIndex((F) => F.trim() === "END"), R = f >= 0 ? f : A.length;
  A.splice(R, 0, `$ ${r}`, ...$, "");
}
function St(A, r) {
  const $ = [], M = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  $.push("$ File exported from Hekatan Struct Lineal (round-trip)"), $.push("");
  for (const f of M) {
    const R = A.get(f);
    if (!(!R || R.length === 0)) {
      $.push(`$ ${f}`);
      for (const F of R) $.push(F);
      $.push("");
    }
  }
  for (const [f, R] of A) if (!M.includes(f) && R.length !== 0) {
    $.push(`$ ${f}`);
    for (const F of R) $.push(F);
    $.push("");
  }
  return $.push("  END"), $.push("$ END OF MODEL FILE"), $.join(`\r
`);
}
function At(A) {
  var _a, _b, _c, _d, _e2, _f, _g, _h;
  const { nodes: r, elements: $, nodeInputs: M, elementInputs: f, title: R, units: F } = A, z = A.shellLoads ?? f.shellSurfaceLoads;
  let h;
  z instanceof Map && (h = /* @__PURE__ */ new Map(), z.forEach((e, t) => {
    h.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const m = A.shellAngles ?? f.shellAngles, w = f.cargaDeArea, B = !!(h && h.size > 0), x = (e, t) => [t[0], t[1], t[2] - (B ? (w == null ? void 0 : w.get(e)) ?? 0 : 0)], J = "N", _ = "MM", s = [], u = (e) => Math.round(e * 1e4) / 1e4, S = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), p = 1e3, E = 1e3, l = (e) => e * E, C = (e) => e * p, a = (e) => e * p, n = (e) => e * p * E, c = (e) => e * p / E ** 2, d = (e) => e * p / E ** 3, g = /* @__PURE__ */ new Date(), k = `${g.getMonth() + 1}/${g.getDate()}/${g.getFullYear()}  ${g.getHours()}:${String(g.getMinutes()).padStart(2, "0")}:${String(g.getSeconds()).padStart(2, "0")}`;
  s.push(`$ File   "Hekatan_export.e2k"  saved ${k} in ETABS 22.6.0`), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${J}"  "${_}"  "C"  `), s.push('  TITLE1  "Hekatan Struct Lineal export"  '), R && s.push(`  TITLE2  "${R}"  `), s.push("  PREFERENCE  MERGETOL 0.001"), s.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), s.push("");
  const P = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set();
  r.forEach((e) => {
    P.add(u(e[0])), H.add(u(e[1]));
  });
  const X = [...P].sort((e, t) => e - t), V = [...H].sort((e, t) => e - t);
  s.push("$ GRIDS"), s.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), X.forEach((e, t) => {
    const o = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    s.push(`  GRID "G1"  LABEL "${o}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), V.forEach((e, t) => {
    s.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.push("");
  const ce = 3, ie = 0.5, oe = /* @__PURE__ */ new Map();
  r.forEach((e) => {
    const t = u(e[2]);
    oe.set(t, (oe.get(t) ?? 0) + 1);
  });
  const Pe = /* @__PURE__ */ new Set();
  r.forEach((e) => Pe.add(u(e[2])));
  const K = [...Pe].sort((e, t) => e - t);
  let U = K.filter((e) => (oe.get(e) ?? 0) >= ce);
  if (U.length > 1) {
    const e = [U[0]];
    for (const t of U.slice(1)) t - e[e.length - 1] < ie ? e[e.length - 1] = t : e.push(t);
    U = e;
  }
  U.length || (U = K.slice()), U[0] !== K[0] && U.unshift(K[0]), U[U.length - 1] !== K[K.length - 1] && U.push(K[K.length - 1]);
  const le = [], ae = /* @__PURE__ */ new Map();
  le.push("Base"), ae.set(U[0], "Base");
  for (let e = 1; e < U.length; e++) {
    const t = `Level_${e}`;
    le.push(t), ae.set(U[e], t);
  }
  const Fe = (e) => {
    const t = u(e);
    if (ae.has(t)) return { story: ae.get(t), dz: 0 };
    for (let i = 0; i < U.length; i++) if (U[i] >= t) return { story: ae.get(U[i]), dz: u(U[i] - t) };
    const o = U[U.length - 1];
    return { story: ae.get(o), dz: u(o - t) };
  };
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = U.length - 1; e >= 1; e--) s.push(`  STORY "${le[e]}"  HEIGHT ${u(l(U[e] - U[e - 1]))} MASTERSTORY "Yes"  `);
  U.length > 0 && s.push(`  STORY "Base"  ELEV ${U[0]} `), s.push(""), $.some((e) => e.length === 4), s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push(""), s.push("$ MATERIAL PROPERTIES");
  const ye = /* @__PURE__ */ new Set();
  (_a = f.elasticities) == null ? void 0 : _a.forEach((e) => ye.add(e));
  const Se = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
  let Ke = 0, qe = 0;
  const Qe = 980665e-8, Ye = /* @__PURE__ */ new Map();
  if (f.densities && f.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    f.densities.forEach((t, o) => {
      var _a2;
      const i = (_a2 = f.elasticities) == null ? void 0 : _a2.get(o);
      i !== void 0 && (e.has(i) || e.set(i, []), e.get(i).push(t));
    }), e.forEach((t, o) => {
      const i = t.reduce((N, O) => N + O, 0) / t.length, T = i > 100 ? i * Qe : i * 9.80665;
      Ye.set(o, T);
    });
  }
  for (const e of ye) {
    const t = e >= 1e8, o = t ? `Steel_${++Ke}` : `Conc_${++qe}`;
    Se.set(e, o), Me.set(e, t);
    const i = Ye.get(e) ?? (t ? 76.97 : 24), T = c(e), N = d(i), O = t ? 0.3 : 0.2, I = t ? 117e-7 : 1e-5;
    if (t) {
      s.push(`  MATERIAL  "${o}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${S(N)}`), s.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${u(T)}  U ${O}  A ${I}`);
      const Y = 345e3, W = 45e4;
      s.push(`  MATERIAL  "${o}"  FY ${u(c(Y))}  FU ${u(c(W))}  FYE ${u(c(Y * 1.1))}  FUE ${u(c(W * 1.1))}`);
    } else s.push(`  MATERIAL  "${o}"    TYPE "Concrete"    WEIGHTPERVOLUME ${S(N)}`), s.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${u(T)}  U ${O}  A ${I}`), s.push(`  MATERIAL  "${o}"    FC ${u(c(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const Ae = /* @__PURE__ */ new Set(), Ne = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), q = 0.05;
  $.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h2, _i, _j;
    if (e.length !== 2) return;
    const o = (_a2 = f.sectionShapes) == null ? void 0 : _a2.get(t), i = ((_b2 = f.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, T = Se.get(i) || "Conc_1", N = Me.get(i) ?? i >= 1e8, O = ((_c2 = f.areas) == null ? void 0 : _c2.get(t)) ?? 0, I = ((_d2 = f.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, Y = ((_e3 = f.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, W = ((_f2 = f.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let G = (o == null ? void 0 : o.type) || "rect", y = (o == null ? void 0 : o.h) ?? 0, b = (o == null ? void 0 : o.b) ?? 0, ne = (o == null ? void 0 : o.d) ?? 0;
    const De = (o == null ? void 0 : o.tf) ?? 0, Ie = (o == null ? void 0 : o.tw) ?? 0;
    if (!o && y <= 0 && b <= 0 && ne <= 0 && O > 0 && I > 0 && Y > 0) {
      const v = (_g2 = f.cantos) == null ? void 0 : _g2.get(t), Ee = (_h2 = f.anchos) == null ? void 0 : _h2.get(t);
      y = v && v > 0 ? v : Math.sqrt(12 * I / O), b = Ee && Ee > 0 ? Ee : O / y, (!isFinite(y) || y < q) && (y = q), (!isFinite(b) || b < q) && (b = q), G = "general";
    } else y <= 0 && b <= 0 && ne <= 0 && O > 0 && (I > 0 ? (y = Math.sqrt(12 * I / O), b = O / y) : y = b = Math.sqrt(O), (!isFinite(y) || y < q) && (y = q), (!isFinite(b) || b < q) && (b = q), G = "rect");
    y <= 0 && b <= 0 && ne <= 0 && (y = 0.3, b = 0.3, G = "rect");
    const $e = (o == null ? void 0 : o.name) ? `NAME_${o.name}` : `${G}_${u(y)}_${u(b)}_${u(ne)}_${u(De)}_${u(Ie)}_${T}`;
    (o == null ? void 0 : o.name) && !fe.has($e) && fe.set($e, o.name);
    let Z = fe.get($e);
    if (!Z) {
      const v = N ? "S" : "C";
      G === "general" ? Z = `${v}_G${Ae.size + 1}` : G === "rect" ? Z = `${v}_R${Math.round(b * 100)}x${Math.round(y * 100)}` : G === "circ" ? Z = `${v}_C_D${Math.round(ne * 100)}` : G === "I" ? Z = `${v}_I${Math.round(y * 100)}x${Math.round(b * 100)}` : G === "HSS" ? Z = `${v}_HSS${Math.round(b * 100)}x${Math.round(y * 100)}x${Math.round(Ie * 1e3)}` : Z = `${v}_Sec${Ae.size + 1}`, fe.set($e, Z);
    }
    if (Ne.set(t, Z), Ae.has(Z)) return;
    Ae.add(Z);
    const at = O > 0 && I > 0 && Y > 0;
    let j;
    G === "general" || at ? j = "General" : G === "I" ? j = "Steel I/Wide Flange" : G === "HSS" ? j = "Steel Tube" : G === "CFT" ? j = "Filled Steel Tube" : G === "pipe" ? j = "Steel Pipe" : G === "L" ? j = "Steel Angle" : G === "C" ? j = "Steel Channel" : G === "2C" ? j = "Steel Double Channel" : G === "circ" ? j = "Concrete Circle" : j = "Concrete Rectangular";
    let te = `  FRAMESECTION  "${Z}"  MATERIAL "${T}"  SHAPE "${j}"`;
    if (j === "General") {
      const v = ((_i = f.shearAreasZ) == null ? void 0 : _i.get(t)) || O * 5 / 6, Ee = ((_j = f.shearAreasY) == null ? void 0 : _j.get(t)) || O * 5 / 6;
      te += `  D ${u(l(y))} B ${u(l(b))} AREA ${S(O * 1e6)} AS2 ${S(v * 1e6)} AS3 ${S(Ee * 1e6)} I33 ${S(I * 1e12)} I22 ${S(Y * 1e12)} TORSION ${S((W || I + Y) * 1e12)} S33POS ${S(2 * I / y * 1e9)} S33NEG ${S(2 * I / y * 1e9)} S22POS ${S(2 * Y / b * 1e9)} S22NEG ${S(2 * Y / b * 1e9)} Z33 ${S(2 * I / y * 1e9)} Z22 ${S(2 * Y / b * 1e9)} R33 ${S(Math.sqrt(I / O) * 1e3)} R22 ${S(Math.sqrt(Y / O) * 1e3)} `, s.push(te);
      return;
    }
    y && (te += `  D ${u(l(y))}`), b && (te += `  B ${u(l(b))}`), ne && !y && (te += `  D ${u(l(ne))}`), De && (te += `  TF ${u(l(De))}`), Ie && (te += `  TW ${u(l(Ie))}`), s.push(te);
  }), s.push("");
  const he = /* @__PURE__ */ new Map();
  let et = 0;
  r.forEach((e) => {
    const { dz: t } = Fe(e[2]), o = `${u(e[0])},${u(e[1])},${t}`;
    he.has(o) || he.set(o, `${++et}`);
  }), s.push("$ POINT COORDINATES");
  for (const [e, t] of he) {
    const [o, i, T] = e.split(",").map(Number);
    s.push(T ? `  POINT "${t}"  ${u(l(o))} ${u(l(i))} ${u(l(T))} ` : `  POINT "${t}"  ${u(l(o))} ${u(l(i))} `);
  }
  s.push("");
  const Q = (e) => {
    const t = r[e], { story: o, dz: i } = Fe(t[2]), T = `${u(t[0])},${u(t[1])},${i}`;
    return { pt: he.get(T) || "1", story: o };
  }, Be = (e) => {
    var _a2, _b2, _c2, _d2, _e3;
    const t = [], o = (_a2 = A.propertyModifiers) == null ? void 0 : _a2.get(e);
    o && o.some((I) => Math.abs(I - 1) > 1e-9) && t.push(`PROPMODIFIERS "${o.map((I) => u(I)).join(" ")}"`);
    const i = (_b2 = f.localAngles) == null ? void 0 : _b2.get(e);
    i !== void 0 && isFinite(i) && Math.abs(i) > 1e-9 && t.push(`ANG ${u(i)}`);
    const T = (_c2 = f.momentReleases) == null ? void 0 : _c2.get(e);
    if (T && T.some((I) => I)) {
      const I = [];
      T.length === 12 ? (T[0] && I.push("PI"), T[1] && I.push("V2I"), T[2] && I.push("V3I"), T[3] && I.push("TI"), T[4] && I.push("M2I"), T[5] && I.push("M3I"), T[6] && I.push("PJ"), T[7] && I.push("V2J"), T[8] && I.push("V3J"), T[9] && I.push("TJ"), T[10] && I.push("M2J"), T[11] && I.push("M3J")) : T.length === 6 && (T[0] && I.push("TI"), T[1] && I.push("M2I"), T[2] && I.push("M3I"), T[3] && I.push("TJ"), T[4] && I.push("M2J"), T[5] && I.push("M3J")), I.length > 0 && t.push(`RELEASE "${I.join(" ")}"`);
    }
    const N = (_d2 = f.insertionPoints) == null ? void 0 : _d2.get(e);
    N && (Math.abs(N[0]) > 1e-9 || Math.abs(N[1]) > 1e-9) && t.push(`LATEROFFSET ${u(l(N[0]))} TRANSOFFSET ${u(l(N[1]))}`);
    const O = (_e3 = f.rigidOffsets) == null ? void 0 : _e3.get(e);
    return O && (Math.abs(O[0]) > 1e-9 || Math.abs(O[1]) > 1e-9) && t.push(`LENGTHOFFI ${u(O[0])} LENGTHOFFJ ${u(O[1])} RIGIDZONE 0.5`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, Oe = [], Ue = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Map();
  $.forEach((e, t) => {
    if (e.length !== 2) return;
    const o = ve(r, e);
    if (o === "BEAM") return;
    const i = r[e[0]][2] <= r[e[1]][2] ? e[0] : e[1], T = r[e[0]][2] <= r[e[1]][2] ? e[1] : e[0];
    if (Math.abs(r[i][0] - r[T][0]) > 1e-6 || Math.abs(r[i][1] - r[T][1]) > 1e-6) return;
    const N = Q(i), O = Ne.get(t) || `Sec_${t}`, I = `${N.pt}_${O}_${o}`;
    pe.has(I) || pe.set(I, []), pe.get(I).push({ i: t, bot: i, top: T, zBot: u(r[i][2]), zTop: u(r[T][2]), planPt: N.pt, secName: O, type: o });
  }), pe.forEach((e, t) => {
    e.sort((i, T) => i.zBot - T.zBot);
    let o = 0;
    for (let i = 1; i <= e.length; i++) if (i === e.length || Math.abs(e[i].zBot - e[i - 1].zTop) > 1e-6) {
      const N = e.slice(o, i);
      N.length >= 1 && (Oe.push({ elemIndices: N.map((O) => O.i), planPt: N[0].planPt, bottomNodeIdx: N[0].bot, topNodeIdx: N[N.length - 1].top, secName: N[0].secName, type: N[0].type, nSegments: N.length }), N.forEach((O) => Ue.add(O.i))), o = i;
    }
  }), s.push("$ LINE CONNECTIVITIES");
  const Ge = [], be = (e) => le.indexOf(e), we = (e, t, o, i, T, N, O) => {
    const I = Q(i), Y = Q(o), W = be(I.story) - be(Y.story);
    W <= 0 ? s.push(`  LINE  "${e}"  BEAM  "${Y.pt}"  "${I.pt}"  0`) : s.push(`  LINE  "${e}"  ${t}  "${Y.pt}"  "${I.pt}"  ${W}`), Ge.push(`  LINEASSIGN  "${e}"  "${I.story}"  SECTION "${T}" ${N} MINNUMSTA ${O} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  Oe.forEach((e, t) => {
    const o = Be(e.elemIndices[0]);
    we(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, o, e.nSegments);
  }), $.forEach((e, t) => {
    if (e.length !== 2 || Ue.has(t)) return;
    const o = ve(r, e), i = Ne.get(t) || `Sec_${t}`, T = Be(t), N = r[e[0]][2] <= r[e[1]][2] ? e[0] : e[1], O = r[e[0]][2] <= r[e[1]][2] ? e[1] : e[0];
    we(`E${t + 1}`, o === "BEAM" ? "BRACE" : o, N, O, i, T, 3);
  }), s.push("");
  const Te = A.weightMode ?? "auto", re = /* @__PURE__ */ new Set();
  s.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((e, t) => {
    const o = [];
    if (e[0] && o.push("UX"), e[1] && o.push("UY"), e[2] && o.push("UZ"), e[3] && o.push("RX"), e[4] && o.push("RY"), e[5] && o.push("RZ"), o.length > 0) {
      const i = Q(t), T = i.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      s.push(`  POINTASSIGN  "${i.pt}"  "${i.story}"  RESTRAINT "${o.join(" ")}" ${T} `), re.add(`${i.pt}@${i.story}`);
    }
  });
  const ke = (A.diaphragm ?? "auto") !== "none";
  ke && Oe.forEach((e) => {
    const t = Q(e.topNodeIdx), o = `${t.pt}@${t.story}`;
    !re.has(o) && t.story !== "Base" && (s.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), re.add(o));
  }), Te === "manual" && M.loads && M.loads.forEach((e, t) => {
    const [o, i, T] = x(t, e);
    if (Math.abs(o) < 1e-10 && Math.abs(i) < 1e-10 && Math.abs(T) < 1e-10) return;
    const N = Q(t), O = `${N.pt}@${N.story}`;
    re.has(O) || (s.push(`  POINTASSIGN  "${N.pt}"  "${N.story}"  DIAPH "DISCONNECTED"  `), re.add(O));
  }), s.push(""), s.push("$ LINE ASSIGNS"), Ge.forEach((e) => s.push(e)), s.push("");
  const ee = [], xe = f.areaObjects, He = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map();
  xe == null ? void 0 : xe.forEach((e) => e.cells.forEach((t) => He.add(t))), $.forEach((e, t) => {
    if (e.length === 4) {
      const o = r[e[0]], i = r[e[1]], T = r[e[2]], N = [i[0] - o[0], i[1] - o[1], i[2] - o[2]], O = [T[0] - o[0], T[1] - o[1], T[2] - o[2]], I = N[1] * O[2] - N[2] * O[1], Y = N[2] * O[0] - N[0] * O[2], W = N[0] * O[1] - N[1] * O[0], G = Math.sqrt(I * I + Y * Y + W * W), y = G > 1e-10 && Math.abs(W) / G < 0.5;
      ee.push({ idx: t, el: e, isWall: y }), He.has(t) && ee.pop();
    }
  });
  const ue = (() => {
    for (const [e, t] of Me) if (!t) return Se.get(e);
    return Se.values().next().value || "Conc_1";
  })();
  xe == null ? void 0 : xe.forEach((e, t) => {
    ee.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && ze.set(e.cells[0], e.q), e.ang !== void 0 && Je.set(e.cells[0], e.ang);
  });
  const _e = "DECK";
  let ge = false;
  const de = [];
  if (ee.some((e) => !e.isWall)) {
    const e = f.bendingModifiers, t = f.shellModifiers;
    ge = (() => {
      for (const i of ee) {
        if (i.isWall) continue;
        const T = t == null ? void 0 : t.get(i.idx);
        if (T && Math.abs(T[3]) < 1e-9 && Math.abs(T[4]) < 1e-9) return true;
        const N = e == null ? void 0 : e.get(i.idx);
        if (N !== void 0 && Math.abs(N) < 1e-9) return true;
      }
      return false;
    })();
    const o = ((_c = f.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    ge ? (s.push("$ DECK PROPERTIES"), s.push(`  SHELLPROP  "${_e}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${ue}"  DECKMATERIAL "${ue}"  DECKSLABDEPTH ${S(o * 65 / 120)} DECKRIBDEPTH ${S(o * 55 / 120)} DECKRIBWIDTHTOP ${S(o * 150 / 120)} DECKRIBWIDTHBOTTOM ${S(o * 100 / 120)} DECKRIBSPACING ${S(o * 200 / 120)} DECKSHEARTHICKNESS ${S(o * 0.76 / 120)} DECKUNITWEIGHT ${S(C(0.11012))} SHEARSTUDDIAM ${S(o * 19 / 120)} SHEARSTUDHEIGHT ${S(o * 100 / 120)} SHEARSTUDFU 400 `)) : (s.push("$ SLAB PROPERTIES"), s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${ue}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${u(l(o))} `)), s.push("");
  }
  if (ee.some((e) => e.isWall)) {
    s.push("$ WALL PROPERTIES");
    const e = ((_d = f.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${ue}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${u(l(e))} `), s.push("");
  }
  if (ee.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const e = [];
    ee.forEach((t, o) => {
      const { el: i, isWall: T } = t, N = T ? `W${o + 1}` : `F${o + 1}`, O = T ? "PANEL" : "FLOOR", I = i.map((Y) => Q(Y));
      if (T) {
        const Y = r[i[0]][2] <= r[i[2]][2] ? 0 : 2, W = r[i[1]][2] <= r[i[3]][2] ? 1 : 3;
        s.push(`  AREA "${N}"  ${O}  4  "${I[Y].pt}"  "${I[W].pt}"  "${I[W].pt}"  "${I[Y].pt}"  1  1  0  0  `);
        const G = I[Y === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${N}"  "${G}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        s.push(`  AREA "${N}"  ${O}  4  "${I[0].pt}"  "${I[1].pt}"  "${I[2].pt}"  "${I[3].pt}"  0  0  0  0  `);
        const Y = Je.get(t.idx) ?? (m == null ? void 0 : m.get(t.idx));
        e.push(ge ? `  AREAASSIGN  "${N}"  "${I[0].story}"  SECTION "${_e}"  ANG ${u(Y ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${N}"  "${I[0].story}"  SECTION "Losa" ${ke ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), de.push({ name: N, story: I[0].story, idx: t.idx });
      }
    }), s.push(""), s.push("$ AREA ASSIGNS"), e.forEach((t) => s.push(t)), s.push("");
  }
  const tt = Te === "manual" ? 0 : 1;
  s.push("$ LOAD PATTERNS");
  const se = ((_e2 = A.loadPatterns) == null ? void 0 : _e2.length) ? A.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: tt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of se) {
    let t;
    e.type === "Dead" ? t = Te === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), s.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  s.push("");
  const Re = A.loadPatternDestino && se.some((e) => e.name === A.loadPatternDestino) ? A.loadPatternDestino : ((_f = se.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? se[0].name, Le = [], me = /* @__PURE__ */ new Map(), We = (e, t) => {
    const o = me.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 6; i++) o[i] += t[i] ?? 0;
    me.set(e, o);
  }, st = Re === (((_g = se.find((e) => e.type === "Dead")) == null ? void 0 : _g.name) ?? se[0].name), nt = Te === "manual" || !st;
  if (M.loads && M.loads.size > 0 && M.loads.forEach((e, t) => {
    const [o, i, T] = x(t, e);
    We(t, [o, i, nt ? T : 0, e[3] ?? 0, e[4] ?? 0, e[5] ?? 0]);
  }), M.moments && M.moments.size > 0 && M.moments.forEach((e, t) => {
    We(t, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), me.forEach((e, t) => {
    if (e.every((i) => Math.abs(i) <= 1e-10)) return;
    const o = Q(t);
    Le.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "FORCE"  LC "${Re}"  FX ${S(a(e[0]))}  FY ${S(a(e[1]))}  FZ ${S(a(e[2]))}  MX ${S(n(e[3]))}  MY ${S(n(e[4]))}  MZ ${S(n(e[5]))}`);
  }), Le.length > 0 && (s.push("$ POINT OBJECT LOADS"), Le.forEach((e) => s.push(e)), s.push("")), h && h.size > 0 && de.length > 0) {
    const e = [];
    for (const t of de) {
      const o = ze.get(t.idx), i = o !== void 0 ? { value: o } : h.get(t.idx);
      if (!i || Math.abs(i.value) < 1e-12) continue;
      const T = i.dir ?? "GRAV", N = T === "GRAV" ? Math.abs(i.value) : i.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${T}"  LC "${i.pattern ?? Re}"  FVAL ${S(C(N))}`);
    }
    e.length > 0 && (s.push("$ SHELL OBJECT LOADS"), e.forEach((t) => s.push(t)), s.push(""));
  }
  s.push("$ ANALYSIS OPTIONS"), s.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), s.push('  PDELTA  METHOD "NONE"  '), s.push(""), s.push("$ MASS SOURCE"), s.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), s.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), s.push(""), s.push("$ LOAD CASES");
  const ot = ((_h = A.loadCases) == null ? void 0 : _h.length) ? A.loadCases : se.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of ot) {
    s.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) s.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  s.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), s.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), s.push("");
  const Ce = A.loadCombinations;
  if (Ce && Ce.length) {
    s.push("$ LOAD COMBINATIONS");
    for (const e of Ce) {
      s.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) s.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    s.push("");
  }
  return s.push("  END"), s.push("$ END OF MODEL FILE"), s.join(`\r
`);
}
function ve(A, r) {
  const $ = A[r[0]], M = A[r[1]], f = Math.abs(M[2] - $[2]), R = Math.sqrt((M[0] - $[0]) ** 2 + (M[1] - $[1]) ** 2), F = f > R * 0.5;
  return F && R > 0.01 ? "BRACE" : F ? "COLUMN" : "BEAM";
}
export {
  Tt as a,
  ut as e,
  pt as p
};
