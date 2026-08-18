function m(A) {
  return A && parseFloat(A) || 0;
}
function Xe(A) {
  const i = /* @__PURE__ */ new Map(), $ = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let M;
  for (; (M = $.exec(A)) !== null; ) i.set(M[1], M[2] !== void 0 ? M[2] : M[3]);
  return i;
}
function pt(A) {
  const i = A.split(/\r?\n/);
  return i.some((M) => M.trim().startsWith("TABLE:")) ? ct(i) : it(i);
}
function ct(A) {
  var _a, _b, _c, _d, _e, _f;
  const i = [];
  let $ = "";
  for (const u of A) {
    const l = u.trimEnd();
    l.endsWith("_") ? $ += l.slice(0, -1) + " " : ($ += l, i.push($), $ = "");
  }
  $ && i.push($);
  const M = { force: "KN", length: "m" };
  let f = "UX,UY,UZ,RX,RY,RZ";
  const R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), C = [], w = [], B = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), z = [];
  let s = "";
  for (const u of i) {
    const l = u.trim();
    if (!l || l.startsWith(";") || l.startsWith("File ")) continue;
    if (l.startsWith("TABLE:")) {
      const r = l.match(/TABLE:\s+"(.+?)"/);
      s = r ? r[1].toUpperCase() : "";
      continue;
    }
    if (l === "END TABLE DATA") {
      s = "";
      continue;
    }
    const p = Xe(l);
    switch (s) {
      case "PROGRAM CONTROL": {
        const r = p.get("CurrUnits");
        if (r) {
          const E = r.split(",").map((o) => o.trim());
          E[0] && (M.force = E[0]), E[1] && (M.length = E[1]);
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
          const E = R.get(r) || { E: 0, nu: 0, G: 0 };
          E.E = m(p.get("E1")), E.G = m(p.get("G12")), E.nu = m(p.get("U12")), E.density = m(p.get("UnitMass")), R.set(r, E);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const r = p.get("Material");
        r && R.has(r) && (R.get(r).fy = m(p.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const r = p.get("SectionName");
        r && F.set(r, { material: p.get("Material") || "", shape: p.get("Shape") || "Rectangular", D: m(p.get("t3")), B: m(p.get("t2")), TF: m(p.get("tf")), TW: m(p.get("tw")), A: m(p.get("Area")), Iz: m(p.get("I33")), Iy: m(p.get("I22")), J: m(p.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const r = p.get("Section");
        r && x.set(r, { material: p.get("Material") || "", type: p.get("Type") || "Shell", thickness: m(p.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const r = p.get("Joint");
        if (r) {
          const E = m(p.get("XorR")), o = m(p.get("Y")), n = m(p.get("Z"));
          h.set(r, [E, o, n]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const r = p.get("Frame"), E = p.get("JointI"), o = p.get("JointJ");
        r && E && o && C.push({ name: r, j1: E, j2: o });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const r = p.get("Area");
        if (r) {
          const E = parseInt(p.get("NumJoints") || "4"), o = [];
          for (let n = 1; n <= E; n++) {
            const O = p.get(`Joint${n}`);
            O && o.push(O);
          }
          o.length >= 3 && w.push({ name: r, joints: o });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const r = p.get("Joint");
        if (r) {
          const E = [((_a = p.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = p.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = p.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = p.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = p.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = p.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          B.set(r, E);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const r = p.get("Frame"), E = p.get("AnalSect");
        r && E && k.set(r, E);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const r = p.get("Area"), E = p.get("Section");
        r && E && H.set(r, E);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const r = p.get("Joint");
        r && z.push({ joint: r, fx: m(p.get("F1")), fy: m(p.get("F2")), fz: m(p.get("F3")), mx: m(p.get("M1")), my: m(p.get("M2")), mz: m(p.get("M3")) });
        break;
      }
    }
  }
  return Ve(M, f, R, F, x, h, C, w, B, k, H, z);
}
function it(A) {
  const i = { force: "KN", length: "m" };
  let $ = "UX,UY,UZ,RX,RY,RZ";
  const M = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), x = [], h = [], C = /* @__PURE__ */ new Map(), w = [];
  let B = "", k = "";
  for (const s of A) {
    const u = s.trim();
    if (!u || u.startsWith(";")) continue;
    if (!s.startsWith(" ") && !s.startsWith("	")) {
      const r = u.toUpperCase();
      if (r === "END") break;
      r.startsWith("SHELL SECTION") ? B = "SHELL SECTION" : r.startsWith("FRAME SECTION") ? B = "FRAME SECTION" : B = r.split(/\s+/)[0];
      continue;
    }
    const l = Xe(u), p = u.split(/\s+/);
    switch (B) {
      case "SYSTEM": {
        const r = l.get("DOF");
        r && ($ = r);
        const E = l.get("LENGTH");
        E && (i.length = E);
        const o = l.get("FORCE");
        o && (i.force = o);
        break;
      }
      case "JOINT": {
        const r = p[0];
        F.set(r, [m(l.get("X")), m(l.get("Y")), m(l.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const r = l.get("ADD"), E = l.get("DOF");
        if (r && E) {
          const o = E.split(","), n = [false, false, false, false, false, false];
          for (const O of o) {
            const S = O.toUpperCase();
            (S === "UX" || S === "U1") && (n[0] = true), (S === "UY" || S === "U2") && (n[1] = true), (S === "UZ" || S === "U3") && (n[2] = true), (S === "RX" || S === "R1") && (n[3] = true), (S === "RY" || S === "R2") && (n[4] = true), (S === "RZ" || S === "R3") && (n[5] = true);
          }
          C.set(r, n);
        }
        break;
      }
      case "MATERIAL": {
        const r = l.get("NAME");
        if (r) k = r, M.set(r, { E: 0, nu: 0, G: 0 });
        else if (k) {
          const E = M.get(k), o = l.get("E");
          o && (E.E = m(o));
          const n = l.get("U");
          n && (E.nu = m(n)), E.G = E.E / (2 * (1 + E.nu));
          const O = l.get("M");
          O && (E.density = m(O));
        }
        break;
      }
      case "SHELL": {
        const r = p[0], E = l.get("J");
        l.get("SEC"), E && h.push({ name: r, joints: E.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const r = l.get("NAME");
        r && R.set(r, { material: l.get("MAT") || "", type: l.get("TYPE") || "Shell", thickness: m(l.get("TH")) });
        break;
      }
      case "FRAME": {
        const r = p[0], E = l.get("J");
        if (E) {
          const o = E.split(",");
          o.length >= 2 && x.push({ name: r, j1: o[0], j2: o[1] });
        }
        break;
      }
      case "LOAD": {
        const r = l.get("ADD");
        r && w.push({ joint: r, fx: m(l.get("UX")), fy: m(l.get("UY")), fz: m(l.get("UZ")), mx: m(l.get("MX")), my: m(l.get("MY")), mz: m(l.get("MZ")) });
        break;
      }
    }
  }
  return Ve(i, $, M, f, R, F, x, h, C, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), w);
}
function Ve(A, i, $, M, f, R, F, x, h, C, w, B) {
  var _a;
  const k = [], H = /* @__PURE__ */ new Map(), z = [];
  for (const [S, D] of R) H.set(S, z.length), k.push(S), z.push(D);
  const s = [], u = [], l = /* @__PURE__ */ new Map();
  for (const S of F) {
    const D = H.get(S.j1), d = H.get(S.j2);
    if (D !== void 0 && d !== void 0) {
      const J = s.length;
      s.push([D, d]), u.push(S.name);
      const L = C.get(S.name);
      L && l.set(J, L);
    }
  }
  const p = s.length;
  for (const S of x) {
    const D = S.joints.map((d) => H.get(d)).filter((d) => d !== void 0);
    if (D.length >= 3) {
      const d = s.length;
      s.push(D), u.push(S.name);
      const J = w.get(S.name);
      J && l.set(d, J);
    }
  }
  const r = s.length - p, E = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, o = /* @__PURE__ */ new Map(), n = $.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let S = 0; S < s.length; S++) {
    const D = l.get(S), d = D ? M.get(D) : null, J = D ? f.get(D) : null;
    if (d || s[S].length === 2) {
      const L = d || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, _ = $.get(L.material) || n, X = _.E || n.E, te = _.nu || 0.3, se = _.G || X / (2 * (1 + te));
      E.elasticities.set(S, X), E.shearModuli.set(S, se), E.areas.set(S, L.A || L.D * L.B), E.momentsOfInertiaZ.set(S, L.Iz || L.B * L.D ** 3 / 12), E.momentsOfInertiaY.set(S, L.Iy || L.D * L.B ** 3 / 12), E.torsionalConstants.set(S, L.J || 0), E.densities.set(S, _.density || 0), ((_a = L.shape) == null ? void 0 : _a.includes("Wide Flange")) || L.shape === "I" ? o.set(S, { type: "I", b: L.B, h: L.D, name: D || "I-section" }) : o.set(S, { type: "rect", b: L.B, h: L.D });
    } else if (J) {
      const L = $.get(J.material) || n, _ = L.E || n.E, X = L.nu || 0.2, te = L.G || _ / (2 * (1 + X));
      E.elasticities.set(S, _), E.shearModuli.set(S, te), E.thicknesses.set(S, J.thickness), E.poissonsRatios.set(S, X), E.densities.set(S, L.density || 0);
    }
  }
  const O = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [S, D] of h) {
    const d = H.get(S);
    d !== void 0 && O.supports.set(d, D);
  }
  for (const S of B) {
    const D = H.get(S.joint);
    if (D !== void 0) {
      const d = O.forces.get(D) || [0, 0, 0, 0, 0, 0];
      d[0] += S.fx, d[1] += S.fy, d[2] += S.fz, d[3] += S.mx, d[4] += S.my, d[5] += S.mz, O.forces.set(D, d);
    }
  }
  return { units: A, dof: i, materials: $, frameSections: M, shellSections: f, nodes: z, nodeNames: k, nodeNameToIdx: H, elements: s, elementNames: u, elementSections: l, nodeInputs: O, elementInputs: E, sectionShapes: o, info: { nNodes: z.length, nFrames: p, nShells: r, title: `SAP2000 (${p} frames, ${r} shells)` } };
}
function Tt(A) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const { nodes: i, elements: $, nodeInputs: M, elementInputs: f } = A, R = A.units || { force: "KN", length: "m" }, F = A.title || "Awatif Model", x = [], h = (o) => x.push(o), C = () => x.push(" ");
  h(`File ${F}.$2k was saved on m/d/yy at h:mm:ss`), C(), h('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), h("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), C();
  const w = [], B = [];
  if ($.forEach((o, n) => {
    o.length === 2 ? w.push(n) : B.push(n);
  }), w.length > 0) {
    h('TABLE:  "CONNECTIVITY - FRAME"');
    for (const o of w) {
      const n = $[o];
      h(`   Frame=${o + 1}   JointI=${n[0] + 1}   JointJ=${n[1] + 1}   IsCurved=No`);
    }
    C();
  }
  if (B.length > 0) {
    h('TABLE:  "CONNECTIVITY - AREA"');
    for (const o of B) {
      const n = $[o], O = n.map((S, D) => `Joint${D + 1}=${S + 1}`).join("   ");
      h(`   Area=${o + 1}   NumJoints=${n.length}   ${O}`);
    }
    C();
  }
  h('TABLE:  "COORDINATE SYSTEMS"'), h("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), C(), h('TABLE:  "DATABASE FORMAT TYPES"'), h("   UnitsCurr=Yes   OverrideE=No"), C();
  const k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
  for (const o of w) {
    const n = ((_a = f.areas) == null ? void 0 : _a.get(o)) || 0, O = ((_b = f.momentsOfInertiaZ) == null ? void 0 : _b.get(o)) || 0, S = ((_c = f.momentsOfInertiaY) == null ? void 0 : _c.get(o)) || 0, D = ((_d = f.torsionalConstants) == null ? void 0 : _d.get(o)) || 0, d = ((_e = f.elasticities) == null ? void 0 : _e.get(o)) || 0, J = `MAT_${Math.round(d)}`, L = ((_f = f.shearAreasZ) == null ? void 0 : _f.get(o)) ?? 0, _ = ((_g = f.shearAreasY) == null ? void 0 : _g.get(o)) ?? 0, X = `A${n.toPrecision(6)}_Iz${O.toPrecision(6)}_s${L.toPrecision(6)}_${_.toPrecision(6)}`;
    if (!k.has(X)) {
      let se = 0.3, re = 0.3;
      n > 0 && O > 0 && (se = Math.sqrt(12 * O / n), re = n / se), k.set(X, { A: n, Iz: O, Iy: S, J: D, b: re, h: se, matKey: J, As2: L > 0 ? L : n * 5 / 6, As3: _ > 0 ? _ : n * 5 / 6 });
    }
    const te = [...k.keys()].indexOf(X) + 1;
    H.set(o, `SEC${te}`);
  }
  if (w.length > 0) {
    h('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const o of w) {
      const n = H.get(o) || "SEC1";
      h(`   Frame=${o + 1}   AutoSelect=N.A.   AnalSect=${n}   MatProp=Default`);
    }
    C();
  }
  if (k.size > 0) {
    h('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let o = 0;
    for (const [, n] of k) o++, h(`   SectionName=SEC${o}   Material=${n.matKey}   Shape=General   t3=${P(n.h)}   t2=${P(n.b)}   Area=${P(n.A)}   TorsConst=${P(n.J)}   I33=${P(n.Iz)}   I22=${P(n.Iy)}   I23=0   AS2=${P(n.As2)}   AS3=${P(n.As3)} _`), h("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    C();
  }
  {
    const o = w.filter((n) => {
      var _a2;
      const O = (_a2 = f.localAngles) == null ? void 0 : _a2.get(n);
      return O !== void 0 && isFinite(O) && Math.abs(O) > 1e-9;
    });
    if (o.length > 0) {
      h('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const n of o) h(`   Frame=${n + 1}   Angle=${P(f.localAngles.get(n))}   AdvanceAxes=No`);
      C();
    }
  }
  const z = !!A.layeredSection && B.length > 0, s = A.layeredSection, u = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  if (!z) for (const o of B) {
    const n = ((_h = f.thicknesses) == null ? void 0 : _h.get(o)) || 0.1, O = ((_i = f.elasticities) == null ? void 0 : _i.get(o)) || 0, S = `MAT_${Math.round(O)}`, D = `t${n.toPrecision(6)}`;
    u.has(D) || u.set(D, { t: n, matKey: S });
    const d = [...u.keys()].indexOf(D) + 1;
    l.set(o, `SSEC${d}`);
  }
  if (B.length > 0) {
    h('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const o of B) {
      const n = z ? s.name : l.get(o) || "SSEC1";
      h(`   Area=${o + 1}   Section=${n}   MatProp=Default`);
    }
    if (C(), h('TABLE:  "AREA SECTION PROPERTIES"'), z) {
      const o = s, n = ((_j = o.layers[0]) == null ? void 0 : _j.material) || "MAT_DEFAULT";
      h(`   Section=${o.name}   Material=${n}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${P(o.totalThickness)}   BendThick=${P(o.totalThickness)}   Color=Magenta`);
    } else {
      let o = 0;
      for (const [, n] of u) o++, h(`   Section=SSEC${o}   Material=${n.matKey}   MatAngle=0   AreaType=Shell   Type=ShellThin   DrillDOF=Yes   Thickness=${P(n.t)}   BendThick=${P(n.t)}   Color=Cyan`);
    }
    if (C(), z) {
      h('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const o = s;
      for (const n of o.layers) {
        const O = n.angle ?? 0, S = n.numIntPts ?? 3;
        h(`   Section=${o.name}   LayerName=${n.name}   Distance=${P(n.distance)}   Thickness=${P(n.thickness)}   Type=Shell   NumIntPts=${S}   Material=${n.material}   MatAngle=${P(O * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      C();
    }
  }
  h('TABLE:  "JOINT COORDINATES"');
  for (let o = 0; o < i.length; o++) {
    const n = i[o];
    h(`   Joint=${o + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${P(n[0])}   Y=${P(n[1])}   Z=${P(n[2])}   SpecialJt=No`);
  }
  if (C(), M.supports && M.supports.size > 0) {
    h('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [o, n] of M.supports) {
      if (!n.some((S) => S)) continue;
      const O = (S) => S ? "Yes" : "No";
      h(`   Joint=${o + 1}   U1=${O(n[0])}   U2=${O(n[1])}   U3=${O(n[2])}   R1=${O(n[3])}   R2=${O(n[4])}   R3=${O(n[5])}`);
    }
    C();
  }
  const p = A.selfWtMult ?? 1;
  if (h('TABLE:  "LOAD PATTERN DEFINITIONS"'), h(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${p}`), C(), h('TABLE:  "LOAD CASE DEFINITIONS"'), h('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), C(), h('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), h('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), C(), M.forces && M.forces.size > 0) {
    h('TABLE:  "JOINT LOADS - FORCE"');
    for (const [o, n] of M.forces) n.some((O) => Math.abs(O) > 1e-12) && h(`   Joint=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${P(n[0])}   F2=${P(n[1])}   F3=${P(n[2])}   M1=${P(n[3])}   M2=${P(n[4])}   M3=${P(n[5])}`);
    C();
  }
  const r = f.frameLoads;
  if (r && r.size > 0) {
    h('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [o, n] of r) {
      const O = $[o];
      if (!O || O.length !== 2) continue;
      const S = i[O[0]], D = i[O[1]], d = Math.hypot(D[0] - S[0], D[1] - S[1], D[2] - S[2]);
      ["X", "Y", "Z"].forEach((J, L) => {
        Math.abs(n[L]) < 1e-12 || h(`   Frame=${o + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${J}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${P(d)}   FOverLA=${P(n[L])}   FOverLB=${P(n[L])}`);
      });
    }
    C();
  }
  const E = /* @__PURE__ */ new Map();
  for (let o = 0; o < $.length; o++) {
    const n = ((_k = f.elasticities) == null ? void 0 : _k.get(o)) || 0, O = ((_l = f.shearModuli) == null ? void 0 : _l.get(o)) || 0, S = n > 0 && O > 0 ? Math.max(0, Math.min(0.5, n / (2 * O) - 1)) : 0.2, D = ((_m = f.densities) == null ? void 0 : _m.get(o)) || 0, d = `MAT_${Math.round(n)}`;
    E.has(d) || E.set(d, { E: n, nu: S, G: O, rho: D });
  }
  h('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [o] of E) h(`   Material=${o}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  C(), h('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [o, n] of E) h(`   Material=${o}   UnitWeight=${P(n.rho * 9.81)}   UnitMass=${P(n.rho)}   E1=${P(n.E)}   G12=${P(n.G)}   U12=${P(n.nu)}   A1=9.9E-06`);
  C(), h('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [o] of E) h(`   Material=${o}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return C(), h('TABLE:  "PROGRAM CONTROL"'), h(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${R.force}, ${R.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), C(), h("END TABLE DATA"), h(""), x.join(`\r
`);
}
function P(A) {
  return A === 0 || Math.abs(A) < 1e-15 ? "0" : Math.abs(A) >= 1e6 || Math.abs(A) < 1e-3 && Math.abs(A) > 0 ? A.toExponential(8) : parseFloat(A.toPrecision(10)).toString();
}
function rt(A, i, $ = 0.05) {
  const M = i.map(([f, R]) => `${(+f).toFixed(4)} ${(+R).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${A}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${$}  SPECTYPE "USER"  `, `  FUNCTION "${A}"  TIMEVAL "${M}"  `];
}
function Et(A) {
  const { name: i, func: $, modalCase: M = "Modal", sfX: f = 9.81, sfY: R = 9.81 } = A, F = [`  LOADCASE "${i}"  TYPE  "Response Spectrum"  MODALCASE  "${M}"  `];
  return f && F.push(`  LOADCASE "${i}"  ACCEL  "U1"  FUNC  "${$}"  SF  ${f}  `), R && F.push(`  LOADCASE "${i}"  ACCEL  "U2"  FUNC  "${$}"  SF  ${R}  `), F;
}
function Ze(A) {
  const { name: i = "Modal", ritz: $ = false, nModes: M = 12 } = A;
  return $ ? [`  LOADCASE "${i}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${M} MINMODES  1 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${i}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${M} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function ut(A) {
  var _a;
  const i = (_a = A.e2kModel) == null ? void 0 : _a.rawSections;
  let $ = i && i.size > 0 ? St(i, A.e2kModel) : At(A);
  return A.seismicNEC && ($ = lt($, A.seismicNEC)), $;
}
function lt(A, i) {
  const $ = A.includes(`\r
`) ? `\r
` : `
`, M = A.split(/\r?\n/), f = i.name ?? "NEC", R = rt(f, i.points, i.dampRatio ?? 0.05), F = i.modalCase ?? "Modal", x = Et({ name: i.caseName ?? "Sismo NEC", func: f, modalCase: F, sfX: i.sfX, sfY: i.sfY });
  let h = [];
  const C = (w) => M.some((B) => w.test(B));
  if (i.modal) {
    const w = new RegExp(`^\\s*LOADCASE\\s+"${F}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let B = M.length - 1; B >= 0; B--) w.test(M[B]) && M.splice(B, 1);
    h = Ze({ name: F, ritz: !!i.modal.ritz, nModes: i.modal.nModes });
  } else C(new RegExp(`LOADCASE\\s+"${F}"\\s+TYPE\\s+"Modal`)) || (h = Ze({ name: F }));
  return je(M, "FUNCTIONS", R), je(M, "LOAD CASES", [...h, ...x]), M.join($);
}
function je(A, i, $) {
  const M = A.findIndex((F) => F.trim() === `$ ${i}`);
  if (M >= 0) {
    A.splice(M + 1, 0, ...$);
    return;
  }
  const f = A.findIndex((F) => F.trim() === "END"), R = f >= 0 ? f : A.length;
  A.splice(R, 0, `$ ${i}`, ...$, "");
}
function St(A, i) {
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
  const { nodes: i, elements: $, nodeInputs: M, elementInputs: f, title: R, units: F } = A, x = A.shellLoads ?? f.shellSurfaceLoads;
  let h;
  x instanceof Map && (h = /* @__PURE__ */ new Map(), x.forEach((e, t) => {
    h.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const C = A.shellAngles ?? f.shellAngles, w = f.cargaDeArea, B = !!(h && h.size > 0), k = (e, t) => [t[0], t[1], t[2] - (B ? (w == null ? void 0 : w.get(e)) ?? 0 : 0)], H = "N", z = "MM", s = [], u = (e) => Math.round(e * 1e4) / 1e4, l = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), p = 1e3, r = 1e3, E = (e) => e * r, o = (e) => e * p, n = (e) => e * p, O = (e) => e * p * r, S = (e) => e * p / r ** 2, D = (e) => e * p / r ** 3, d = /* @__PURE__ */ new Date(), J = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}  ${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
  s.push(`$ File   "Hekatan_export.e2k"  saved ${J} in ETABS 22.6.0`), s.push(""), s.push("$ PROGRAM INFORMATION"), s.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), s.push(""), s.push("$ CONTROLS"), s.push(`  UNITS  "${H}"  "${z}"  "C"  `), s.push('  TITLE1  "Hekatan Struct Lineal export"  '), R && s.push(`  TITLE2  "${R}"  `), s.push("  PREFERENCE  MERGETOL 0.001"), s.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), s.push("");
  const L = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
  i.forEach((e) => {
    L.add(u(e[0])), _.add(u(e[1]));
  });
  const X = [...L].sort((e, t) => e - t), te = [..._].sort((e, t) => e - t);
  s.push("$ GRIDS"), s.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), X.forEach((e, t) => {
    const a = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    s.push(`  GRID "G1"  LABEL "${a}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), te.forEach((e, t) => {
    s.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), s.push("");
  const se = 3, re = 0.5, $e = /* @__PURE__ */ new Map();
  i.forEach((e) => {
    const t = u(e[2]);
    $e.set(t, ($e.get(t) ?? 0) + 1);
  });
  const Pe = /* @__PURE__ */ new Set();
  i.forEach((e) => Pe.add(u(e[2])));
  const V = [...Pe].sort((e, t) => e - t);
  let U = V.filter((e) => ($e.get(e) ?? 0) >= se);
  if (U.length > 1) {
    const e = [U[0]];
    for (const t of U.slice(1)) t - e[e.length - 1] < re ? e[e.length - 1] = t : e.push(t);
    U = e;
  }
  U.length || (U = V.slice()), U[0] !== V[0] && U.unshift(V[0]), U[U.length - 1] !== V[V.length - 1] && U.push(V[V.length - 1]);
  const Ee = [], ae = /* @__PURE__ */ new Map();
  Ee.push("Base"), ae.set(U[0], "Base");
  for (let e = 1; e < U.length; e++) {
    const t = `Level_${e}`;
    Ee.push(t), ae.set(U[e], t);
  }
  const Fe = (e) => {
    const t = u(e);
    if (ae.has(t)) return { story: ae.get(t), dz: 0 };
    for (let c = 0; c < U.length; c++) if (U[c] >= t) return { story: ae.get(U[c]), dz: u(U[c] - t) };
    const a = U[U.length - 1];
    return { story: ae.get(a), dz: u(a - t) };
  };
  s.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = U.length - 1; e >= 1; e--) s.push(`  STORY "${Ee[e]}"  HEIGHT ${u(E(U[e] - U[e - 1]))} MASTERSTORY "Yes"  `);
  U.length > 0 && s.push(`  STORY "Base"  ELEV ${U[0]} `), s.push(""), $.some((e) => e.length === 4), s.push("$ DIAPHRAGM NAMES"), s.push('  DIAPHRAGM "D1"    TYPE RIGID'), s.push(""), s.push("$ MATERIAL PROPERTIES");
  const ye = /* @__PURE__ */ new Set();
  (_a = f.elasticities) == null ? void 0 : _a.forEach((e) => ye.add(e));
  const le = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
  let Ke = 0, qe = 0;
  const Qe = 980665e-8, Ye = /* @__PURE__ */ new Map();
  if (f.densities && f.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    f.densities.forEach((t, a) => {
      var _a2;
      const c = (_a2 = f.elasticities) == null ? void 0 : _a2.get(a);
      c !== void 0 && (e.has(c) || e.set(c, []), e.get(c).push(t));
    }), e.forEach((t, a) => {
      const c = t.reduce((N, g) => N + g, 0) / t.length, T = c > 100 ? c * Qe : c * 9.80665;
      Ye.set(a, T);
    });
  }
  for (const e of ye) {
    const t = e >= 1e8, a = t ? `Steel_${++Ke}` : `Conc_${++qe}`;
    le.set(e, a), Me.set(e, t);
    const c = Ye.get(e) ?? (t ? 76.97 : 24), T = S(e), N = D(c), g = t ? 0.3 : 0.2, I = t ? 117e-7 : 1e-5;
    if (t) {
      s.push(`  MATERIAL  "${a}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${l(N)}`), s.push(`  MATERIAL  "${a}"    SYMTYPE "Isotropic"  E ${u(T)}  U ${g}  A ${I}`);
      const Y = 345e3, W = 45e4;
      s.push(`  MATERIAL  "${a}"  FY ${u(S(Y))}  FU ${u(S(W))}  FYE ${u(S(Y * 1.1))}  FUE ${u(S(W * 1.1))}`);
    } else s.push(`  MATERIAL  "${a}"    TYPE "Concrete"    WEIGHTPERVOLUME ${l(N)}`), s.push(`  MATERIAL  "${a}"    SYMTYPE "Isotropic"  E ${u(T)}  U ${g}  A ${I}`), s.push(`  MATERIAL  "${a}"    FC ${u(S(24e3))}`);
  }
  s.push(""), s.push("$ FRAME SECTIONS");
  const Se = /* @__PURE__ */ new Set(), Ne = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), K = 0.05;
  $.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h2, _i, _j;
    if (e.length !== 2) return;
    const a = (_a2 = f.sectionShapes) == null ? void 0 : _a2.get(t), c = ((_b2 = f.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, T = le.get(c) || "Conc_1", N = Me.get(c) ?? c >= 1e8, g = ((_c2 = f.areas) == null ? void 0 : _c2.get(t)) ?? 0, I = ((_d2 = f.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, Y = ((_e3 = f.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, W = ((_f2 = f.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let G = (a == null ? void 0 : a.type) || "rect", y = (a == null ? void 0 : a.h) ?? 0, b = (a == null ? void 0 : a.b) ?? 0, oe = (a == null ? void 0 : a.d) ?? 0;
    const De = (a == null ? void 0 : a.tf) ?? 0, ue = (a == null ? void 0 : a.tw) ?? 0;
    if (!a && y <= 0 && b <= 0 && oe <= 0 && g > 0 && I > 0 && Y > 0) {
      const v = (_g2 = f.cantos) == null ? void 0 : _g2.get(t), ie = (_h2 = f.anchos) == null ? void 0 : _h2.get(t);
      y = v && v > 0 ? v : Math.sqrt(12 * I / g), b = ie && ie > 0 ? ie : g / y, (!isFinite(y) || y < K) && (y = K), (!isFinite(b) || b < K) && (b = K), G = "general";
    } else y <= 0 && b <= 0 && oe <= 0 && g > 0 && (I > 0 ? (y = Math.sqrt(12 * I / g), b = g / y) : y = b = Math.sqrt(g), (!isFinite(y) || y < K) && (y = K), (!isFinite(b) || b < K) && (b = K), G = "rect");
    y <= 0 && b <= 0 && oe <= 0 && (y = 0.3, b = 0.3, G = "rect");
    const Ie = (a == null ? void 0 : a.name) ? `NAME_${a.name}` : `${G}_${u(y)}_${u(b)}_${u(oe)}_${u(De)}_${u(ue)}_${T}`;
    (a == null ? void 0 : a.name) && !Ae.has(Ie) && Ae.set(Ie, a.name);
    let Z = Ae.get(Ie);
    if (!Z) {
      const v = N ? "S" : "C";
      G === "general" ? Z = `${v}_G${Se.size + 1}` : G === "rect" ? Z = `${v}_R${Math.round(b * 100)}x${Math.round(y * 100)}` : G === "circ" ? Z = `${v}_C_D${Math.round(oe * 100)}` : G === "I" ? Z = `${v}_I${Math.round(y * 100)}x${Math.round(b * 100)}` : G === "HSS" ? Z = `${v}_HSS${Math.round(b * 100)}x${Math.round(y * 100)}x${Math.round(ue * 1e3)}` : Z = `${v}_Sec${Se.size + 1}`, Ae.set(Ie, Z);
    }
    if (Ne.set(t, Z), Se.has(Z)) return;
    Se.add(Z);
    const at = g > 0 && I > 0 && Y > 0;
    let j;
    G === "general" || at ? j = "General" : G === "I" ? j = "Steel I/Wide Flange" : G === "HSS" ? j = "Steel Tube" : G === "CFT" ? j = "Filled Steel Tube" : G === "pipe" ? j = "Steel Pipe" : G === "L" ? j = "Steel Angle" : G === "C" ? j = "Steel Channel" : G === "2C" ? j = "Steel Double Channel" : G === "circ" ? j = "Concrete Circle" : j = "Concrete Rectangular";
    let ee = `  FRAMESECTION  "${Z}"  MATERIAL "${T}"  SHAPE "${j}"`;
    if (j === "General") {
      const v = ((_i = f.shearAreasZ) == null ? void 0 : _i.get(t)) || g * 5 / 6, ie = ((_j = f.shearAreasY) == null ? void 0 : _j.get(t)) || g * 5 / 6;
      ee += `  D ${u(E(y))} B ${u(E(b))} AREA ${l(g * 1e6)} AS2 ${l(v * 1e6)} AS3 ${l(ie * 1e6)} I33 ${l(I * 1e12)} I22 ${l(Y * 1e12)} TORSION ${l((W || I + Y) * 1e12)} S33POS ${l(2 * I / y * 1e9)} S33NEG ${l(2 * I / y * 1e9)} S22POS ${l(2 * Y / b * 1e9)} S22NEG ${l(2 * Y / b * 1e9)} Z33 ${l(2 * I / y * 1e9)} Z22 ${l(2 * Y / b * 1e9)} R33 ${l(Math.sqrt(I / g) * 1e3)} R22 ${l(Math.sqrt(Y / g) * 1e3)} `, s.push(ee);
      return;
    }
    y && (ee += `  D ${u(E(y))}`), b && (ee += `  B ${u(E(b))}`), oe && !y && (ee += `  D ${u(E(oe))}`), De && (ee += `  TF ${u(E(De))}`), ue && (ee += `  TW ${u(E(ue))}`), s.push(ee);
  }), s.push("");
  const fe = /* @__PURE__ */ new Map();
  let et = 0;
  i.forEach((e) => {
    const { dz: t } = Fe(e[2]), a = `${u(e[0])},${u(e[1])},${t}`;
    fe.has(a) || fe.set(a, `${++et}`);
  }), s.push("$ POINT COORDINATES");
  for (const [e, t] of fe) {
    const [a, c, T] = e.split(",").map(Number);
    s.push(T ? `  POINT "${t}"  ${u(E(a))} ${u(E(c))} ${u(E(T))} ` : `  POINT "${t}"  ${u(E(a))} ${u(E(c))} `);
  }
  s.push("");
  const q = (e) => {
    const t = i[e], { story: a, dz: c } = Fe(t[2]), T = `${u(t[0])},${u(t[1])},${c}`;
    return { pt: fe.get(T) || "1", story: a };
  }, Be = (e) => {
    var _a2, _b2, _c2, _d2, _e3;
    const t = [], a = (_a2 = A.propertyModifiers) == null ? void 0 : _a2.get(e);
    a && a.some((I) => Math.abs(I - 1) > 1e-9) && t.push(`PROPMODIFIERS "${a.map((I) => u(I)).join(" ")}"`);
    const c = (_b2 = f.localAngles) == null ? void 0 : _b2.get(e);
    c !== void 0 && isFinite(c) && Math.abs(c) > 1e-9 && t.push(`ANG ${u(c)}`);
    const T = (_c2 = f.momentReleases) == null ? void 0 : _c2.get(e);
    if (T && T.some((I) => I)) {
      const I = [];
      T.length === 12 ? (T[0] && I.push("PI"), T[1] && I.push("V2I"), T[2] && I.push("V3I"), T[3] && I.push("TI"), T[4] && I.push("M2I"), T[5] && I.push("M3I"), T[6] && I.push("PJ"), T[7] && I.push("V2J"), T[8] && I.push("V3J"), T[9] && I.push("TJ"), T[10] && I.push("M2J"), T[11] && I.push("M3J")) : T.length === 6 && (T[0] && I.push("TI"), T[1] && I.push("M2I"), T[2] && I.push("M3I"), T[3] && I.push("TJ"), T[4] && I.push("M2J"), T[5] && I.push("M3J")), I.length > 0 && t.push(`RELEASE "${I.join(" ")}"`);
    }
    const N = (_d2 = f.insertionPoints) == null ? void 0 : _d2.get(e);
    N && (Math.abs(N[0]) > 1e-9 || Math.abs(N[1]) > 1e-9) && t.push(`LATEROFFSET ${u(E(N[0]))} TRANSOFFSET ${u(E(N[1]))}`);
    const g = (_e3 = f.rigidOffsets) == null ? void 0 : _e3.get(e);
    return g && (Math.abs(g[0]) > 1e-9 || Math.abs(g[1]) > 1e-9) && t.push(`LENGTHOFFI ${u(g[0])} LENGTHOFFJ ${u(g[1])} RIGIDZONE 0.5`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, Oe = [], Ue = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map();
  $.forEach((e, t) => {
    if (e.length !== 2) return;
    const a = ve(i, e);
    if (a === "BEAM") return;
    const c = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], T = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    if (Math.abs(i[c][0] - i[T][0]) > 1e-6 || Math.abs(i[c][1] - i[T][1]) > 1e-6) return;
    const N = q(c), g = Ne.get(t) || `Sec_${t}`, I = `${N.pt}_${g}_${a}`;
    he.has(I) || he.set(I, []), he.get(I).push({ i: t, bot: c, top: T, zBot: u(i[c][2]), zTop: u(i[T][2]), planPt: N.pt, secName: g, type: a });
  }), he.forEach((e, t) => {
    e.sort((c, T) => c.zBot - T.zBot);
    let a = 0;
    for (let c = 1; c <= e.length; c++) if (c === e.length || Math.abs(e[c].zBot - e[c - 1].zTop) > 1e-6) {
      const N = e.slice(a, c);
      N.length >= 1 && (Oe.push({ elemIndices: N.map((g) => g.i), planPt: N[0].planPt, bottomNodeIdx: N[0].bot, topNodeIdx: N[N.length - 1].top, secName: N[0].secName, type: N[0].type, nSegments: N.length }), N.forEach((g) => Ue.add(g.i))), a = c;
    }
  }), s.push("$ LINE CONNECTIVITIES");
  const Ge = [], be = (e) => Ee.indexOf(e), we = (e, t, a, c, T, N, g) => {
    const I = q(c), Y = q(a), W = be(I.story) - be(Y.story);
    W <= 0 ? s.push(`  LINE  "${e}"  BEAM  "${Y.pt}"  "${I.pt}"  0`) : s.push(`  LINE  "${e}"  ${t}  "${Y.pt}"  "${I.pt}"  ${W}`), Ge.push(`  LINEASSIGN  "${e}"  "${I.story}"  SECTION "${T}" ${N} MINNUMSTA ${g} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  Oe.forEach((e, t) => {
    const a = Be(e.elemIndices[0]);
    we(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, a, e.nSegments);
  }), $.forEach((e, t) => {
    if (e.length !== 2 || Ue.has(t)) return;
    const a = ve(i, e), c = Ne.get(t) || `Sec_${t}`, T = Be(t), N = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], g = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    we(`E${t + 1}`, a === "BEAM" ? "BRACE" : a, N, g, c, T, 3);
  }), s.push("");
  const pe = A.weightMode ?? "auto", ce = /* @__PURE__ */ new Set();
  s.push("$ POINT ASSIGNS"), (_b = M.supports) == null ? void 0 : _b.forEach((e, t) => {
    const a = [];
    if (e[0] && a.push("UX"), e[1] && a.push("UY"), e[2] && a.push("UZ"), e[3] && a.push("RX"), e[4] && a.push("RY"), e[5] && a.push("RZ"), a.length > 0) {
      const c = q(t), T = c.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      s.push(`  POINTASSIGN  "${c.pt}"  "${c.story}"  RESTRAINT "${a.join(" ")}" ${T} `), ce.add(`${c.pt}@${c.story}`);
    }
  });
  const ke = (A.diaphragm ?? "auto") !== "none";
  ke && Oe.forEach((e) => {
    const t = q(e.topNodeIdx), a = `${t.pt}@${t.story}`;
    !ce.has(a) && t.story !== "Base" && (s.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), ce.add(a));
  }), pe === "manual" && M.loads && M.loads.forEach((e, t) => {
    const [a, c, T] = k(t, e);
    if (Math.abs(a) < 1e-10 && Math.abs(c) < 1e-10 && Math.abs(T) < 1e-10) return;
    const N = q(t), g = `${N.pt}@${N.story}`;
    ce.has(g) || (s.push(`  POINTASSIGN  "${N.pt}"  "${N.story}"  DIAPH "DISCONNECTED"  `), ce.add(g));
  }), s.push(""), s.push("$ LINE ASSIGNS"), Ge.forEach((e) => s.push(e)), s.push("");
  const Q = [], xe = f.areaObjects, He = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map();
  xe == null ? void 0 : xe.forEach((e) => e.cells.forEach((t) => He.add(t))), $.forEach((e, t) => {
    if (e.length === 4) {
      const a = i[e[0]], c = i[e[1]], T = i[e[2]], N = [c[0] - a[0], c[1] - a[1], c[2] - a[2]], g = [T[0] - a[0], T[1] - a[1], T[2] - a[2]], I = N[1] * g[2] - N[2] * g[1], Y = N[2] * g[0] - N[0] * g[2], W = N[0] * g[1] - N[1] * g[0], G = Math.sqrt(I * I + Y * Y + W * W), y = G > 1e-10 && Math.abs(W) / G < 0.5;
      Q.push({ idx: t, el: e, isWall: y }), He.has(t) && Q.pop();
    }
  });
  const Te = (() => {
    for (const [e, t] of Me) if (!t) return le.get(e);
    return le.values().next().value || "Conc_1";
  })();
  xe == null ? void 0 : xe.forEach((e, t) => {
    Q.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && ze.set(e.cells[0], e.q), e.ang !== void 0 && Je.set(e.cells[0], e.ang);
  });
  const _e = "DECK";
  let ge = false;
  const de = [];
  if (Q.some((e) => !e.isWall)) {
    const e = f.bendingModifiers, t = f.shellModifiers;
    ge = (() => {
      for (const c of Q) {
        if (c.isWall) continue;
        const T = t == null ? void 0 : t.get(c.idx);
        if (T && Math.abs(T[3]) < 1e-9 && Math.abs(T[4]) < 1e-9) return true;
        const N = e == null ? void 0 : e.get(c.idx);
        if (N !== void 0 && Math.abs(N) < 1e-9) return true;
      }
      return false;
    })();
    const a = ((_c = f.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    ge ? (s.push("$ DECK PROPERTIES"), s.push(`  SHELLPROP  "${_e}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Te}"  DECKMATERIAL "${Te}"  DECKSLABDEPTH ${l(a * 65 / 120)} DECKRIBDEPTH ${l(a * 55 / 120)} DECKRIBWIDTHTOP ${l(a * 150 / 120)} DECKRIBWIDTHBOTTOM ${l(a * 100 / 120)} DECKRIBSPACING ${l(a * 200 / 120)} DECKSHEARTHICKNESS ${l(a * 0.76 / 120)} DECKUNITWEIGHT ${l(o(0.11012))} SHEARSTUDDIAM ${l(a * 19 / 120)} SHEARSTUDHEIGHT ${l(a * 100 / 120)} SHEARSTUDFU 400 `)) : (s.push("$ SLAB PROPERTIES"), s.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Te}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${u(E(a))} `)), s.push("");
  }
  if (Q.some((e) => e.isWall)) {
    s.push("$ WALL PROPERTIES");
    const e = ((_d = f.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2;
    s.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Te}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${u(E(e))} `), s.push("");
  }
  if (Q.length > 0) {
    s.push("$ AREA CONNECTIVITIES");
    const e = [];
    Q.forEach((t, a) => {
      const { el: c, isWall: T } = t, N = T ? `W${a + 1}` : `F${a + 1}`, g = T ? "PANEL" : "FLOOR", I = c.map((Y) => q(Y));
      if (T) {
        const Y = i[c[0]][2] <= i[c[2]][2] ? 0 : 2, W = i[c[1]][2] <= i[c[3]][2] ? 1 : 3;
        s.push(`  AREA "${N}"  ${g}  4  "${I[Y].pt}"  "${I[W].pt}"  "${I[W].pt}"  "${I[Y].pt}"  1  1  0  0  `);
        const G = I[Y === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${N}"  "${G}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        s.push(`  AREA "${N}"  ${g}  4  "${I[0].pt}"  "${I[1].pt}"  "${I[2].pt}"  "${I[3].pt}"  0  0  0  0  `);
        const Y = Je.get(t.idx) ?? (C == null ? void 0 : C.get(t.idx));
        e.push(ge ? `  AREAASSIGN  "${N}"  "${I[0].story}"  SECTION "${_e}"  ANG ${u(Y ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${N}"  "${I[0].story}"  SECTION "Losa" ${ke ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), de.push({ name: N, story: I[0].story, idx: t.idx });
      }
    }), s.push(""), s.push("$ AREA ASSIGNS"), e.forEach((t) => s.push(t)), s.push("");
  }
  const tt = pe === "manual" ? 0 : 1;
  s.push("$ LOAD PATTERNS");
  const ne = ((_e2 = A.loadPatterns) == null ? void 0 : _e2.length) ? A.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: tt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of ne) {
    let t;
    e.type === "Dead" ? t = pe === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), s.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  s.push("");
  const Re = A.loadPatternDestino && ne.some((e) => e.name === A.loadPatternDestino) ? A.loadPatternDestino : ((_f = ne.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? ne[0].name, Le = [], me = /* @__PURE__ */ new Map(), We = (e, t) => {
    const a = me.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let c = 0; c < 6; c++) a[c] += t[c] ?? 0;
    me.set(e, a);
  }, st = Re === (((_g = ne.find((e) => e.type === "Dead")) == null ? void 0 : _g.name) ?? ne[0].name), nt = pe === "manual" || !st;
  if (M.loads && M.loads.size > 0 && M.loads.forEach((e, t) => {
    const [a, c, T] = k(t, e);
    We(t, [a, c, nt ? T : 0, e[3] ?? 0, e[4] ?? 0, e[5] ?? 0]);
  }), M.moments && M.moments.size > 0 && M.moments.forEach((e, t) => {
    We(t, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), me.forEach((e, t) => {
    if (e.every((c) => Math.abs(c) <= 1e-10)) return;
    const a = q(t);
    Le.push(`  POINTLOAD  "${a.pt}"  "${a.story}"  TYPE "FORCE"  LC "${Re}"  FX ${l(n(e[0]))}  FY ${l(n(e[1]))}  FZ ${l(n(e[2]))}  MX ${l(O(e[3]))}  MY ${l(O(e[4]))}  MZ ${l(O(e[5]))}`);
  }), Le.length > 0 && (s.push("$ POINT OBJECT LOADS"), Le.forEach((e) => s.push(e)), s.push("")), h && h.size > 0 && de.length > 0) {
    const e = [];
    for (const t of de) {
      const a = ze.get(t.idx), c = a !== void 0 ? { value: a } : h.get(t.idx);
      if (!c || Math.abs(c.value) < 1e-12) continue;
      const T = c.dir ?? "GRAV", N = T === "GRAV" ? Math.abs(c.value) : c.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${T}"  LC "${c.pattern ?? Re}"  FVAL ${l(o(N))}`);
    }
    e.length > 0 && (s.push("$ SHELL OBJECT LOADS"), e.forEach((t) => s.push(t)), s.push(""));
  }
  s.push("$ ANALYSIS OPTIONS"), s.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), s.push('  PDELTA  METHOD "NONE"  '), s.push(""), s.push("$ MASS SOURCE"), s.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), s.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), s.push(""), s.push("$ LOAD CASES");
  const ot = ((_h = A.loadCases) == null ? void 0 : _h.length) ? A.loadCases : ne.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
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
function ve(A, i) {
  const $ = A[i[0]], M = A[i[1]], f = Math.abs(M[2] - $[2]), R = Math.sqrt((M[0] - $[0]) ** 2 + (M[1] - $[1]) ** 2), F = f > R * 0.5;
  return F && R > 0.01 ? "BRACE" : F ? "COLUMN" : "BEAM";
}
export {
  Tt as a,
  ut as e,
  pt as p
};
