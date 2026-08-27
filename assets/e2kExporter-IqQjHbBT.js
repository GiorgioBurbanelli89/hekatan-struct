function R(A) {
  return A && parseFloat(A) || 0;
}
function Qe(A) {
  const c = /* @__PURE__ */ new Map(), $ = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let N;
  for (; (N = $.exec(A)) !== null; ) c.set(N[1], N[2] !== void 0 ? N[2] : N[3]);
  return c;
}
function Nt(A) {
  const c = A.split(/\r?\n/);
  return c.some((N) => N.trim().startsWith("TABLE:")) ? St(c) : At(c);
}
function St(A) {
  var _a, _b, _c, _d, _e, _f;
  const c = [];
  let $ = "";
  for (const u of A) {
    const E = u.trimEnd();
    E.endsWith("_") ? $ += E.slice(0, -1) + " " : ($ += E, c.push($), $ = "");
  }
  $ && c.push($);
  const N = { force: "KN", length: "m" };
  let p = "UX,UY,UZ,RX,RY,RZ";
  const g = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), L = [], k = [], w = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = [];
  let n = "";
  for (const u of c) {
    const E = u.trim();
    if (!E || E.startsWith(";") || E.startsWith("File ")) continue;
    if (E.startsWith("TABLE:")) {
      const l = E.match(/TABLE:\s+"(.+?)"/);
      n = l ? l[1].toUpperCase() : "";
      continue;
    }
    if (E === "END TABLE DATA") {
      n = "";
      continue;
    }
    const T = Qe(E);
    switch (n) {
      case "PROGRAM CONTROL": {
        const l = T.get("CurrUnits");
        if (l) {
          const f = l.split(",").map((D) => D.trim());
          f[0] && (N.force = f[0]), f[1] && (N.length = f[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const l = T.get("Material");
        l && !g.has(l) && g.set(l, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const l = T.get("Material");
        if (l) {
          const f = g.get(l) || { E: 0, nu: 0, G: 0 };
          f.E = R(T.get("E1")), f.G = R(T.get("G12")), f.nu = R(T.get("U12")), f.density = R(T.get("UnitMass")), g.set(l, f);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const l = T.get("Material");
        l && g.has(l) && (g.get(l).fy = R(T.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const l = T.get("SectionName");
        l && y.set(l, { material: T.get("Material") || "", shape: T.get("Shape") || "Rectangular", D: R(T.get("t3")), B: R(T.get("t2")), TF: R(T.get("tf")), TW: R(T.get("tw")), A: R(T.get("Area")), Iz: R(T.get("I33")), Iy: R(T.get("I22")), J: R(T.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const l = T.get("Section");
        l && J.set(l, { material: T.get("Material") || "", type: T.get("Type") || "Shell", thickness: R(T.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const l = T.get("Joint");
        if (l) {
          const f = R(T.get("XorR")), D = R(T.get("Y")), Y = R(T.get("Z"));
          h.set(l, [f, D, Y]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const l = T.get("Frame"), f = T.get("JointI"), D = T.get("JointJ");
        l && f && D && L.push({ name: l, j1: f, j2: D });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const l = T.get("Area");
        if (l) {
          const f = parseInt(T.get("NumJoints") || "4"), D = [];
          for (let Y = 1; Y <= f; Y++) {
            const i = T.get(`Joint${Y}`);
            i && D.push(i);
          }
          D.length >= 3 && k.push({ name: l, joints: D });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const l = T.get("Joint");
        if (l) {
          const f = [((_a = T.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = T.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = T.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = T.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = T.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = T.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          w.set(l, f);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const l = T.get("Frame"), f = T.get("AnalSect");
        l && f && x.set(l, f);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const l = T.get("Area"), f = T.get("Section");
        l && f && H.set(l, f);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const l = T.get("Joint");
        l && j.push({ joint: l, fx: R(T.get("F1")), fy: R(T.get("F2")), fz: R(T.get("F3")), mx: R(T.get("M1")), my: R(T.get("M2")), mz: R(T.get("M3")) });
        break;
      }
    }
  }
  return et(N, p, g, y, J, h, L, k, w, x, H, j);
}
function At(A) {
  const c = { force: "KN", length: "m" };
  let $ = "UX,UY,UZ,RX,RY,RZ";
  const N = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), J = [], h = [], L = /* @__PURE__ */ new Map(), k = [];
  let w = "", x = "";
  for (const n of A) {
    const u = n.trim();
    if (!u || u.startsWith(";")) continue;
    if (!n.startsWith(" ") && !n.startsWith("	")) {
      const l = u.toUpperCase();
      if (l === "END") break;
      l.startsWith("SHELL SECTION") ? w = "SHELL SECTION" : l.startsWith("FRAME SECTION") ? w = "FRAME SECTION" : w = l.split(/\s+/)[0];
      continue;
    }
    const E = Qe(u), T = u.split(/\s+/);
    switch (w) {
      case "SYSTEM": {
        const l = E.get("DOF");
        l && ($ = l);
        const f = E.get("LENGTH");
        f && (c.length = f);
        const D = E.get("FORCE");
        D && (c.force = D);
        break;
      }
      case "JOINT": {
        const l = T[0];
        y.set(l, [R(E.get("X")), R(E.get("Y")), R(E.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const l = E.get("ADD"), f = E.get("DOF");
        if (l && f) {
          const D = f.split(","), Y = [false, false, false, false, false, false];
          for (const i of D) {
            const s = i.toUpperCase();
            (s === "UX" || s === "U1") && (Y[0] = true), (s === "UY" || s === "U2") && (Y[1] = true), (s === "UZ" || s === "U3") && (Y[2] = true), (s === "RX" || s === "R1") && (Y[3] = true), (s === "RY" || s === "R2") && (Y[4] = true), (s === "RZ" || s === "R3") && (Y[5] = true);
          }
          L.set(l, Y);
        }
        break;
      }
      case "MATERIAL": {
        const l = E.get("NAME");
        if (l) x = l, N.set(l, { E: 0, nu: 0, G: 0 });
        else if (x) {
          const f = N.get(x), D = E.get("E");
          D && (f.E = R(D));
          const Y = E.get("U");
          Y && (f.nu = R(Y)), f.G = f.E / (2 * (1 + f.nu));
          const i = E.get("M");
          i && (f.density = R(i));
        }
        break;
      }
      case "SHELL": {
        const l = T[0], f = E.get("J");
        E.get("SEC"), f && h.push({ name: l, joints: f.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const l = E.get("NAME");
        l && g.set(l, { material: E.get("MAT") || "", type: E.get("TYPE") || "Shell", thickness: R(E.get("TH")) });
        break;
      }
      case "FRAME": {
        const l = T[0], f = E.get("J");
        if (f) {
          const D = f.split(",");
          D.length >= 2 && J.push({ name: l, j1: D[0], j2: D[1] });
        }
        break;
      }
      case "LOAD": {
        const l = E.get("ADD");
        l && k.push({ joint: l, fx: R(E.get("UX")), fy: R(E.get("UY")), fz: R(E.get("UZ")), mx: R(E.get("MX")), my: R(E.get("MY")), mz: R(E.get("MZ")) });
        break;
      }
    }
  }
  return et(c, $, N, p, g, y, J, h, L, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), k);
}
function et(A, c, $, N, p, g, y, J, h, L, k, w) {
  var _a;
  const x = [], H = /* @__PURE__ */ new Map(), j = [];
  for (const [s, O] of g) H.set(s, j.length), x.push(s), j.push(O);
  const n = [], u = [], E = /* @__PURE__ */ new Map();
  for (const s of y) {
    const O = H.get(s.j1), d = H.get(s.j2);
    if (O !== void 0 && d !== void 0) {
      const b = n.length;
      n.push([O, d]), u.push(s.name);
      const m = L.get(s.name);
      m && E.set(b, m);
    }
  }
  const T = n.length;
  for (const s of J) {
    const O = s.joints.map((d) => H.get(d)).filter((d) => d !== void 0);
    if (O.length >= 3) {
      const d = n.length;
      n.push(O), u.push(s.name);
      const b = k.get(s.name);
      b && E.set(d, b);
    }
  }
  const l = n.length - T, f = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, D = /* @__PURE__ */ new Map(), Y = $.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let s = 0; s < n.length; s++) {
    const O = E.get(s), d = O ? N.get(O) : null, b = O ? p.get(O) : null;
    if (d || n[s].length === 2) {
      const m = d || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, z = $.get(m.material) || Y, v = z.E || Y.E, Q = z.nu || 0.3, re = z.G || v / (2 * (1 + Q));
      f.elasticities.set(s, v), f.shearModuli.set(s, re), f.areas.set(s, m.A || m.D * m.B), f.momentsOfInertiaZ.set(s, m.Iz || m.B * m.D ** 3 / 12), f.momentsOfInertiaY.set(s, m.Iy || m.D * m.B ** 3 / 12), f.torsionalConstants.set(s, m.J || 0), f.densities.set(s, z.density || 0), ((_a = m.shape) == null ? void 0 : _a.includes("Wide Flange")) || m.shape === "I" ? D.set(s, { type: "I", b: m.B, h: m.D, name: O || "I-section" }) : D.set(s, { type: "rect", b: m.B, h: m.D });
    } else if (b) {
      const m = $.get(b.material) || Y, z = m.E || Y.E, v = m.nu || 0.2, Q = m.G || z / (2 * (1 + v));
      f.elasticities.set(s, z), f.shearModuli.set(s, Q), f.thicknesses.set(s, b.thickness), f.poissonsRatios.set(s, v), f.densities.set(s, m.density || 0);
    }
  }
  const i = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [s, O] of h) {
    const d = H.get(s);
    d !== void 0 && i.supports.set(d, O);
  }
  for (const s of w) {
    const O = H.get(s.joint);
    if (O !== void 0) {
      const d = i.forces.get(O) || [0, 0, 0, 0, 0, 0];
      d[0] += s.fx, d[1] += s.fy, d[2] += s.fz, d[3] += s.mx, d[4] += s.my, d[5] += s.mz, i.forces.set(O, d);
    }
  }
  return { units: A, dof: c, materials: $, frameSections: N, shellSections: p, nodes: j, nodeNames: x, nodeNameToIdx: H, elements: n, elementNames: u, elementSections: E, nodeInputs: i, elementInputs: f, sectionShapes: D, info: { nNodes: j.length, nFrames: T, nShells: l, title: `SAP2000 (${T} frames, ${l} shells)` } };
}
function Ot(A) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: c, elements: $, nodeInputs: N, elementInputs: p } = A, g = A.units || { force: "KN", length: "m" }, y = A.title || "Awatif Model", J = [], h = (i) => J.push(i), L = () => J.push(" ");
  h(`File ${y}.$2k was saved on m/d/yy at h:mm:ss`), L(), h('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), h("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), L();
  const k = [], w = (i) => {
    var _a2, _b2, _c2, _d2;
    const s = ((_a2 = p.elasticities) == null ? void 0 : _a2.get(i)) || 0, O = (_b2 = p.poissonsRatios) == null ? void 0 : _b2.get(i), d = ((_c2 = p.shearModuli) == null ? void 0 : _c2.get(i)) || 0, b = O !== void 0 ? O : s > 0 && d > 0 ? Math.max(0, Math.min(0.5, s / (2 * d) - 1)) : 0.2, m = d > 0 ? d : s > 0 ? s / (2 * (1 + b)) : 0, z = ((_d2 = p.densities) == null ? void 0 : _d2.get(i)) || 0;
    return { E: s, nu: b, G: m, rho: z, key: `MAT_${Math.round(s)}_n${b.toFixed(4)}` };
  }, x = [];
  if ($.forEach((i, s) => {
    i.length === 2 ? k.push(s) : x.push(s);
  }), k.length > 0) {
    h('TABLE:  "CONNECTIVITY - FRAME"');
    for (const i of k) {
      const s = $[i];
      h(`   Frame=${i + 1}   JointI=${s[0] + 1}   JointJ=${s[1] + 1}   IsCurved=No`);
    }
    L();
  }
  if (x.length > 0) {
    h('TABLE:  "CONNECTIVITY - AREA"');
    for (const i of x) {
      const s = $[i], O = s.map((d, b) => `Joint${b + 1}=${d + 1}`).join("   ");
      h(`   Area=${i + 1}   NumJoints=${s.length}   ${O}`);
    }
    L();
  }
  h('TABLE:  "COORDINATE SYSTEMS"'), h("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), L(), h('TABLE:  "DATABASE FORMAT TYPES"'), h("   UnitsCurr=Yes   OverrideE=No"), L();
  const H = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
  for (const i of k) {
    const s = ((_a = p.areas) == null ? void 0 : _a.get(i)) || 0, O = ((_b = p.momentsOfInertiaZ) == null ? void 0 : _b.get(i)) || 0, d = ((_c = p.momentsOfInertiaY) == null ? void 0 : _c.get(i)) || 0, b = ((_d = p.torsionalConstants) == null ? void 0 : _d.get(i)) || 0;
    (_e = p.elasticities) == null ? void 0 : _e.get(i);
    const m = w(i).key, z = ((_f = p.shearAreasZ) == null ? void 0 : _f.get(i)) ?? 0, v = ((_g = p.shearAreasY) == null ? void 0 : _g.get(i)) ?? 0, Q = `A${s.toPrecision(6)}_Iz${O.toPrecision(6)}_s${z.toPrecision(6)}_${v.toPrecision(6)}`;
    if (!H.has(Q)) {
      let Ee = 0.3, ae = 0.3;
      s > 0 && O > 0 && (Ee = Math.sqrt(12 * O / s), ae = s / Ee), H.set(Q, { A: s, Iz: O, Iy: d, J: b, b: ae, h: Ee, matKey: m, As2: z > 0 ? z : s * 5 / 6, As3: v > 0 ? v : s * 5 / 6 });
    }
    const re = [...H.keys()].indexOf(Q) + 1;
    j.set(i, `SEC${re}`);
  }
  if (k.length > 0) {
    h('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const i of k) {
      const s = j.get(i) || "SEC1";
      h(`   Frame=${i + 1}   AutoSelect=N.A.   AnalSect=${s}   MatProp=Default`);
    }
    L();
  }
  if (H.size > 0) {
    h('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let i = 0;
    for (const [, s] of H) i++, h(`   SectionName=SEC${i}   Material=${s.matKey}   Shape=General   t3=${F(s.h)}   t2=${F(s.b)}   Area=${F(s.A)}   TorsConst=${F(s.J)}   I33=${F(s.Iz)}   I22=${F(s.Iy)}   I23=0   AS2=${F(s.As2)}   AS3=${F(s.As3)} _`), h("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    L();
  }
  {
    const i = k.filter((s) => {
      var _a2;
      const O = (_a2 = p.localAngles) == null ? void 0 : _a2.get(s);
      return O !== void 0 && isFinite(O) && Math.abs(O) > 1e-9;
    });
    if (i.length > 0) {
      h('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const s of i) h(`   Frame=${s + 1}   Angle=${F(p.localAngles.get(s))}   AdvanceAxes=No`);
      L();
    }
  }
  const n = !!A.layeredSection && x.length > 0, u = A.layeredSection, E = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
  if (!n) for (const i of x) {
    const s = ((_h = p.thicknesses) == null ? void 0 : _h.get(i)) || 0.1;
    (_i = p.elasticities) == null ? void 0 : _i.get(i);
    const O = w(i).key, d = ((_j = p.plateFormulations) == null ? void 0 : _j.get(i)) ?? 0, b = `t${s.toPrecision(6)}_f${d}`;
    E.has(b) || E.set(b, { t: s, matKey: O, formulacion: d });
    const m = [...E.keys()].indexOf(b) + 1;
    T.set(i, `SSEC${m}`);
  }
  if (x.length > 0) {
    h('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const i of x) {
      const s = n ? u.name : T.get(i) || "SSEC1";
      h(`   Area=${i + 1}   Section=${s}   MatProp=Default`);
    }
    if (L(), h('TABLE:  "AREA SECTION PROPERTIES"'), n) {
      const i = u, s = ((_k = i.layers[0]) == null ? void 0 : _k.material) || "MAT_DEFAULT";
      h(`   Section=${i.name}   Material=${s}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${F(i.totalThickness)}   BendThick=${F(i.totalThickness)}   Color=Magenta`);
    } else {
      let i = 0;
      for (const [, s] of E) {
        i++;
        const O = s.formulacion === 2 ? "Membrane" : s.formulacion === 1 ? "Shell-Thin" : "Shell-Thick";
        h(`   Section=SSEC${i}   Material=${s.matKey}   MatAngle=0   AreaType=Shell   Type=${O}   DrillDOF=Yes   Thickness=${F(s.t)}   BendThick=${F(s.t)}   Color=Cyan`);
      }
    }
    if (L(), n) {
      h('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const i = u;
      for (const s of i.layers) {
        const O = s.angle ?? 0, d = s.numIntPts ?? 3;
        h(`   Section=${i.name}   LayerName=${s.name}   Distance=${F(s.distance)}   Thickness=${F(s.thickness)}   Type=Shell   NumIntPts=${d}   Material=${s.material}   MatAngle=${F(O * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      L();
    }
  }
  h('TABLE:  "JOINT COORDINATES"');
  for (let i = 0; i < c.length; i++) {
    const s = c[i];
    h(`   Joint=${i + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${F(s[0])}   Y=${F(s[1])}   Z=${F(s[2])}   SpecialJt=No`);
  }
  if (L(), N.supports && N.supports.size > 0) {
    h('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [i, s] of N.supports) {
      if (!s.some((d) => d)) continue;
      const O = (d) => d ? "Yes" : "No";
      h(`   Joint=${i + 1}   U1=${O(s[0])}   U2=${O(s[1])}   U3=${O(s[2])}   R1=${O(s[3])}   R2=${O(s[4])}   R3=${O(s[5])}`);
    }
    L();
  }
  const l = A.selfWtMult ?? 1;
  h('TABLE:  "LOAD PATTERN DEFINITIONS"'), h(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${l}`), L(), h('TABLE:  "LOAD CASE DEFINITIONS"'), h('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), L(), h('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), h('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), L();
  const f = N.loads;
  if (f && f.size > 0) {
    h('TABLE:  "JOINT LOADS - FORCE"');
    for (const [i, s] of f) s.some((O) => Math.abs(O) > 1e-12) && h(`   Joint=${i + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${F(s[0])}   F2=${F(s[1])}   F3=${F(s[2])}   M1=${F(s[3])}   M2=${F(s[4])}   M3=${F(s[5])}`);
    L();
  }
  const D = p.frameLoads;
  if (D && D.size > 0) {
    h('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [i, s] of D) {
      const O = $[i];
      if (!O || O.length !== 2) continue;
      const d = c[O[0]], b = c[O[1]], m = Math.hypot(b[0] - d[0], b[1] - d[1], b[2] - d[2]);
      ["X", "Y", "Z"].forEach((z, v) => {
        Math.abs(s[v]) < 1e-12 || h(`   Frame=${i + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${z}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${F(m)}   FOverLA=${F(s[v])}   FOverLB=${F(s[v])}`);
      });
    }
    L();
  }
  const Y = /* @__PURE__ */ new Map();
  for (let i = 0; i < $.length; i++) {
    const { E: s, nu: O, G: d, rho: b, key: m } = w(i);
    Y.has(m) || Y.set(m, { E: s, nu: O, G: d, rho: b });
  }
  h('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [i] of Y) h(`   Material=${i}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  L(), h('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [i, s] of Y) h(`   Material=${i}   UnitWeight=${F(s.rho * 9.81)}   UnitMass=${F(s.rho)}   E1=${F(s.E)}   G12=${F(s.G)}   U12=${F(s.nu)}   A1=9.9E-06`);
  L(), h('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [i] of Y) h(`   Material=${i}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return L(), h('TABLE:  "PROGRAM CONTROL"'), h(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${g.force}, ${g.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), L(), h("END TABLE DATA"), h(""), J.join(`\r
`);
}
function F(A) {
  return A === 0 || Math.abs(A) < 1e-15 ? "0" : Math.abs(A) >= 1e6 || Math.abs(A) < 1e-3 && Math.abs(A) > 0 ? A.toExponential(8) : parseFloat(A.toPrecision(10)).toString();
}
function pt(A, c, $ = 0.05) {
  const N = c.map(([p, g]) => `${(+p).toFixed(4)} ${(+g).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${A}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${$}  SPECTYPE "USER"  `, `  FUNCTION "${A}"  TIMEVAL "${N}"  `];
}
function ht(A) {
  const { name: c, func: $, modalCase: N = "Modal", sfX: p = 9.81, sfY: g = 9.81 } = A, y = [`  LOADCASE "${c}"  TYPE  "Response Spectrum"  MODALCASE  "${N}"  `];
  return p && y.push(`  LOADCASE "${c}"  ACCEL  "U1"  FUNC  "${$}"  SF  ${p}  `), g && y.push(`  LOADCASE "${c}"  ACCEL  "U2"  FUNC  "${$}"  SF  ${g}  `), y;
}
function Ve(A) {
  const { name: c = "Modal", ritz: $ = false, nModes: N = 12 } = A;
  return $ ? [`  LOADCASE "${c}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${c}"  MAXMODES  ${N} MINMODES  1 `, `  LOADCASE "${c}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${c}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${c}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${c}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${c}"  MAXMODES  ${N} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function dt(A) {
  var _a;
  const c = (_a = A.e2kModel) == null ? void 0 : _a.rawSections;
  let $ = c && c.size > 0 ? ut(c, A.e2kModel) : It(A);
  return A.seismicNEC && ($ = Tt($, A.seismicNEC)), $;
}
function Tt(A, c) {
  const $ = A.includes(`\r
`) ? `\r
` : `
`, N = A.split(/\r?\n/), p = c.name ?? "NEC", g = pt(p, c.points, c.dampRatio ?? 0.05), y = c.modalCase ?? "Modal", J = ht({ name: c.caseName ?? "Sismo NEC", func: p, modalCase: y, sfX: c.sfX, sfY: c.sfY });
  let h = [];
  const L = (k) => N.some((w) => k.test(w));
  if (c.modal) {
    const k = new RegExp(`^\\s*LOADCASE\\s+"${y}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let w = N.length - 1; w >= 0; w--) k.test(N[w]) && N.splice(w, 1);
    h = Ve({ name: y, ritz: !!c.modal.ritz, nModes: c.modal.nModes });
  } else L(new RegExp(`LOADCASE\\s+"${y}"\\s+TYPE\\s+"Modal`)) || (h = Ve({ name: y }));
  return Ke(N, "FUNCTIONS", g), Ke(N, "LOAD CASES", [...h, ...J]), N.join($);
}
function Ke(A, c, $) {
  const N = A.findIndex((y) => y.trim() === `$ ${c}`);
  if (N >= 0) {
    A.splice(N + 1, 0, ...$);
    return;
  }
  const p = A.findIndex((y) => y.trim() === "END"), g = p >= 0 ? p : A.length;
  A.splice(g, 0, `$ ${c}`, ...$, "");
}
function ut(A, c) {
  const $ = [], N = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  $.push("$ File exported from Hekatan Struct Lineal (round-trip)"), $.push("");
  for (const p of N) {
    const g = A.get(p);
    if (!(!g || g.length === 0)) {
      $.push(`$ ${p}`);
      for (const y of g) $.push(y);
      $.push("");
    }
  }
  for (const [p, g] of A) if (!N.includes(p) && g.length !== 0) {
    $.push(`$ ${p}`);
    for (const y of g) $.push(y);
    $.push("");
  }
  return $.push("  END"), $.push("$ END OF MODEL FILE"), $.join(`\r
`);
}
function It(A) {
  var _a, _b, _c, _d, _e2, _f;
  const { nodes: c, elements: $, nodeInputs: N, elementInputs: p, title: g, units: y } = A, J = A.shellLoads ?? p.shellSurfaceLoads;
  let h;
  J instanceof Map && (h = /* @__PURE__ */ new Map(), J.forEach((e, t) => {
    h.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const L = A.shellAngles ?? p.shellAngles, k = p.cargaDeArea, w = !!(h && h.size > 0), x = (e, t) => [t[0], t[1], t[2] - (w ? (k == null ? void 0 : k.get(e)) ?? 0 : 0)], H = "N", j = "MM", n = [], u = (e) => Math.round(e * 1e4) / 1e4, E = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), T = 1e3, l = 1e3, f = (e) => e * l, D = (e) => e * T, Y = (e) => e * T, i = (e) => e * T * l, s = (e) => e * T / l ** 2, O = (e) => e * T / l ** 3, d = /* @__PURE__ */ new Date(), b = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}  ${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
  n.push(`$ File   "Hekatan_export.e2k"  saved ${b} in ETABS 22.6.0`), n.push(""), n.push("$ PROGRAM INFORMATION"), n.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), n.push(""), n.push("$ CONTROLS"), n.push(`  UNITS  "${H}"  "${j}"  "C"  `), n.push('  TITLE1  "Hekatan Struct Lineal export"  '), g && n.push(`  TITLE2  "${g}"  `), n.push("  PREFERENCE  MERGETOL 0.001"), n.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), n.push("");
  const m = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  c.forEach((e) => {
    m.add(u(e[0])), z.add(u(e[1]));
  });
  const v = [...m].sort((e, t) => e - t), Q = [...z].sort((e, t) => e - t);
  n.push("$ GRIDS"), n.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), v.forEach((e, t) => {
    const o = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    n.push(`  GRID "G1"  LABEL "${o}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), Q.forEach((e, t) => {
    n.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), n.push("");
  const re = 3, Ee = 0.5, ae = /* @__PURE__ */ new Map();
  c.forEach((e) => {
    const t = u(e[2]);
    ae.set(t, (ae.get(t) ?? 0) + 1);
  });
  const ye = /* @__PURE__ */ new Set();
  c.forEach((e) => ye.add(u(e[2])));
  const q = [...ye].sort((e, t) => e - t);
  let G = q.filter((e) => (ae.get(e) ?? 0) >= re);
  if (G.length > 1) {
    const e = [G[0]];
    for (const t of G.slice(1)) t - e[e.length - 1] < Ee ? e[e.length - 1] = t : e.push(t);
    G = e;
  }
  G.length || (G = [q[0], q[q.length - 1]]), G[0] !== q[0] && G.unshift(q[0]), G[G.length - 1] !== q[q.length - 1] && G.push(q[q.length - 1]);
  const ie = [], ce = /* @__PURE__ */ new Map();
  ie.push("Base"), ce.set(G[0], "Base");
  for (let e = 1; e < G.length; e++) {
    const t = `Level_${e}`;
    ie.push(t), ce.set(G[e], t);
  }
  const Ye = (e) => {
    const t = u(e);
    if (ce.has(t)) return { story: ce.get(t), dz: 0 };
    for (let a = 0; a < G.length; a++) if (G[a] >= t) return { story: ce.get(G[a]), dz: u(G[a] - t) };
    const o = G[G.length - 1];
    return { story: ce.get(o), dz: u(o - t) };
  };
  n.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = G.length - 1; e >= 1; e--) n.push(`  STORY "${ie[e]}"  HEIGHT ${u(f(G[e] - G[e - 1]))} MASTERSTORY "Yes"  `);
  G.length > 0 && n.push(`  STORY "Base"  ELEV ${G[0]} `), n.push(""), $.some((e) => e.length === 4), n.push("$ DIAPHRAGM NAMES"), n.push('  DIAPHRAGM "D1"    TYPE RIGID'), n.push(""), n.push("$ MATERIAL PROPERTIES");
  const Be = /* @__PURE__ */ new Set();
  (_a = p.elasticities) == null ? void 0 : _a.forEach((e) => Be.add(e));
  const pe = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map();
  let tt = 0, st = 0;
  const nt = 980665e-8, be = /* @__PURE__ */ new Map();
  if (p.densities && p.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    p.densities.forEach((t, o) => {
      var _a2;
      const a = (_a2 = p.elasticities) == null ? void 0 : _a2.get(o);
      a !== void 0 && (e.has(a) || e.set(a, []), e.get(a).push(t));
    }), e.forEach((t, o) => {
      const a = t.reduce((I, M) => I + M, 0) / t.length, S = a > 100 ? a * nt : a * 9.80665;
      be.set(o, S);
    });
  }
  for (const e of Be) {
    const t = e >= 1e8, o = t ? `Steel_${++tt}` : `Conc_${++st}`;
    pe.set(e, o), Oe.set(e, t);
    const a = be.get(e) ?? (t ? 76.97 : 24), S = s(e), I = O(a), M = (() => {
      var _a2;
      const _ = A.elementInputs.poissonsRatios;
      if (_) {
        for (const [B, P] of _) if ((((_a2 = A.elementInputs.elasticities) == null ? void 0 : _a2.get(B)) ?? 0) === e) return P;
      }
    })(), r = M !== void 0 ? M : t ? 0.3 : 0.2, C = t ? 117e-7 : 1e-5;
    if (t) {
      n.push(`  MATERIAL  "${o}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${E(I)}`), n.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${u(S)}  U ${r}  A ${C}`);
      const _ = 345e3, B = 45e4;
      n.push(`  MATERIAL  "${o}"  FY ${u(s(_))}  FU ${u(s(B))}  FYE ${u(s(_ * 1.1))}  FUE ${u(s(B * 1.1))}`);
    } else n.push(`  MATERIAL  "${o}"    TYPE "Concrete"    WEIGHTPERVOLUME ${E(I)}`), n.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${u(S)}  U ${r}  A ${C}`), n.push(`  MATERIAL  "${o}"    FC ${u(s(24e3))}`);
  }
  n.push(""), n.push("$ FRAME SECTIONS");
  const he = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), ee = 0.05;
  $.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g, _h, _i, _j;
    if (e.length !== 2) return;
    const o = (_a2 = p.sectionShapes) == null ? void 0 : _a2.get(t), a = ((_b2 = p.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, S = pe.get(a) || "Conc_1", I = Oe.get(a) ?? a >= 1e8, M = ((_c2 = p.areas) == null ? void 0 : _c2.get(t)) ?? 0, r = ((_d2 = p.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, C = ((_e3 = p.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, _ = ((_f2 = p.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let B = (o == null ? void 0 : o.type) || "rect", P = (o == null ? void 0 : o.h) ?? 0, U = (o == null ? void 0 : o.b) ?? 0, W = (o == null ? void 0 : o.d) ?? 0;
    const Se = (o == null ? void 0 : o.tf) ?? 0, se = (o == null ? void 0 : o.tw) ?? 0;
    if (!o && P <= 0 && U <= 0 && W <= 0 && M > 0 && r > 0 && C > 0) {
      const V = (_g = p.cantos) == null ? void 0 : _g.get(t), Ae = (_h = p.anchos) == null ? void 0 : _h.get(t);
      P = V && V > 0 ? V : Math.sqrt(12 * r / M), U = Ae && Ae > 0 ? Ae : M / P, (!isFinite(P) || P < ee) && (P = ee), (!isFinite(U) || U < ee) && (U = ee), B = "general";
    } else P <= 0 && U <= 0 && W <= 0 && M > 0 && (r > 0 ? (P = Math.sqrt(12 * r / M), U = M / P) : P = U = Math.sqrt(M), (!isFinite(P) || P < ee) && (P = ee), (!isFinite(U) || U < ee) && (U = ee), B = "rect");
    P <= 0 && U <= 0 && W <= 0 && (P = 0.3, U = 0.3, B = "rect");
    const Ne = (o == null ? void 0 : o.name) ? `NAME_${o.name}` : `${B}_${u(P)}_${u(U)}_${u(W)}_${u(Se)}_${u(se)}_${S}`;
    (o == null ? void 0 : o.name) && !Te.has(Ne) && Te.set(Ne, o.name);
    let Z = Te.get(Ne);
    if (!Z) {
      const V = I ? "S" : "C";
      B === "general" ? Z = `${V}_G${he.size + 1}` : B === "rect" ? Z = `${V}_R${Math.round(U * 100)}x${Math.round(P * 100)}` : B === "circ" ? Z = `${V}_C_D${Math.round(W * 100)}` : B === "I" ? Z = `${V}_I${Math.round(P * 100)}x${Math.round(U * 100)}` : B === "HSS" ? Z = `${V}_HSS${Math.round(U * 100)}x${Math.round(P * 100)}x${Math.round(se * 1e3)}` : Z = `${V}_Sec${he.size + 1}`, Te.set(Ne, Z);
    }
    if (de.set(t, Z), he.has(Z)) return;
    he.add(Z);
    const ft = M > 0 && r > 0 && C > 0;
    let X;
    B === "general" || ft ? X = "General" : B === "I" ? X = "Steel I/Wide Flange" : B === "HSS" ? X = "Steel Tube" : B === "CFT" ? X = "Filled Steel Tube" : B === "pipe" ? X = "Steel Pipe" : B === "L" ? X = "Steel Angle" : B === "C" ? X = "Steel Channel" : B === "2C" ? X = "Steel Double Channel" : B === "circ" ? X = "Concrete Circle" : X = "Concrete Rectangular";
    let ne = `  FRAMESECTION  "${Z}"  MATERIAL "${S}"  SHAPE "${X}"`;
    if (X === "General") {
      const V = ((_i = p.shearAreasZ) == null ? void 0 : _i.get(t)) || M * 5 / 6, Ae = ((_j = p.shearAreasY) == null ? void 0 : _j.get(t)) || M * 5 / 6;
      ne += `  D ${u(f(P))} B ${u(f(U))} AREA ${E(M * 1e6)} AS2 ${E(V * 1e6)} AS3 ${E(Ae * 1e6)} I33 ${E(r * 1e12)} I22 ${E(C * 1e12)} TORSION ${E((_ || r + C) * 1e12)} S33POS ${E(2 * r / P * 1e9)} S33NEG ${E(2 * r / P * 1e9)} S22POS ${E(2 * C / U * 1e9)} S22NEG ${E(2 * C / U * 1e9)} Z33 ${E(2 * r / P * 1e9)} Z22 ${E(2 * C / U * 1e9)} R33 ${E(Math.sqrt(r / M) * 1e3)} R22 ${E(Math.sqrt(C / M) * 1e3)} `, n.push(ne);
      return;
    }
    P && (ne += `  D ${u(f(P))}`), U && (ne += `  B ${u(f(U))}`), W && !P && (ne += `  D ${u(f(W))}`), Se && (ne += `  TF ${u(f(Se))}`), se && (ne += `  TW ${u(f(se))}`), n.push(ne);
  }), n.push("");
  const ue = /* @__PURE__ */ new Map();
  let ot = 0;
  c.forEach((e) => {
    const { dz: t } = Ye(e[2]), o = `${u(e[0])},${u(e[1])},${t}`;
    ue.has(o) || ue.set(o, `${++ot}`);
  }), n.push("$ POINT COORDINATES");
  for (const [e, t] of ue) {
    const [o, a, S] = e.split(",").map(Number);
    n.push(S ? `  POINT "${t}"  ${u(f(o))} ${u(f(a))} ${u(f(S))} ` : `  POINT "${t}"  ${u(f(o))} ${u(f(a))} `);
  }
  n.push("");
  const te = (e) => {
    const t = c[e], { story: o, dz: a } = Ye(t[2]), S = `${u(t[0])},${u(t[1])},${a}`;
    return { pt: ue.get(S) || "1", story: o };
  }, Ge = (e) => {
    var _a2, _b2, _c2, _d2, _e3;
    const t = [], o = (_a2 = A.propertyModifiers) == null ? void 0 : _a2.get(e);
    o && o.some((r) => Math.abs(r - 1) > 1e-9) && t.push(`PROPMODIFIERS "${o.map((r) => u(r)).join(" ")}"`);
    const a = (_b2 = p.localAngles) == null ? void 0 : _b2.get(e);
    a !== void 0 && isFinite(a) && Math.abs(a) > 1e-9 && t.push(`ANG ${u(a)}`);
    const S = (_c2 = p.momentReleases) == null ? void 0 : _c2.get(e);
    if (S && S.some((r) => r)) {
      const r = [];
      S.length === 12 ? (S[0] && r.push("PI"), S[1] && r.push("V2I"), S[2] && r.push("V3I"), S[3] && r.push("TI"), S[4] && r.push("M2I"), S[5] && r.push("M3I"), S[6] && r.push("PJ"), S[7] && r.push("V2J"), S[8] && r.push("V3J"), S[9] && r.push("TJ"), S[10] && r.push("M2J"), S[11] && r.push("M3J")) : S.length === 6 && (S[0] && r.push("TI"), S[1] && r.push("M2I"), S[2] && r.push("M3I"), S[3] && r.push("TJ"), S[4] && r.push("M2J"), S[5] && r.push("M3J")), r.length > 0 && t.push(`RELEASE "${r.join(" ")}"`);
    }
    const I = (_d2 = p.insertionPoints) == null ? void 0 : _d2.get(e);
    I && (Math.abs(I[0]) > 1e-9 || Math.abs(I[1]) > 1e-9) && t.push(`LATEROFFSET ${u(f(I[0]))} TRANSOFFSET ${u(f(I[1]))}`);
    const M = (_e3 = p.rigidOffsets) == null ? void 0 : _e3.get(e);
    return M && (Math.abs(M[0]) > 1e-9 || Math.abs(M[1]) > 1e-9) && t.push(`LENGTHOFFI ${u(M[0])} LENGTHOFFJ ${u(M[1])} RIGIDZONE 0.5`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, me = [], Ue = /* @__PURE__ */ new Set(), Ie = /* @__PURE__ */ new Map();
  $.forEach((e, t) => {
    if (e.length !== 2) return;
    const o = qe(c, e);
    if (o === "BEAM") return;
    const a = c[e[0]][2] <= c[e[1]][2] ? e[0] : e[1], S = c[e[0]][2] <= c[e[1]][2] ? e[1] : e[0];
    if (Math.abs(c[a][0] - c[S][0]) > 1e-6 || Math.abs(c[a][1] - c[S][1]) > 1e-6) return;
    const I = te(a), M = de.get(t) || `Sec_${t}`, r = `${I.pt}_${M}_${o}`;
    Ie.has(r) || Ie.set(r, []), Ie.get(r).push({ i: t, bot: a, top: S, zBot: u(c[a][2]), zTop: u(c[S][2]), planPt: I.pt, secName: M, type: o });
  }), Ie.forEach((e, t) => {
    e.sort((a, S) => a.zBot - S.zBot);
    let o = 0;
    for (let a = 1; a <= e.length; a++) if (a === e.length || Math.abs(e[a].zBot - e[a - 1].zTop) > 1e-6) {
      const I = e.slice(o, a);
      I.length >= 1 && (me.push({ elemIndices: I.map((M) => M.i), planPt: I[0].planPt, bottomNodeIdx: I[0].bot, topNodeIdx: I[I.length - 1].top, secName: I[0].secName, type: I[0].type, nSegments: I.length }), I.forEach((M) => Ue.add(M.i))), o = a;
    }
  }), n.push("$ LINE CONNECTIVITIES");
  const we = [], ke = (e) => ie.indexOf(e), xe = (e, t, o, a, S, I, M) => {
    const r = te(a), C = te(o), _ = ke(r.story) - ke(C.story);
    _ <= 0 ? n.push(`  LINE  "${e}"  BEAM  "${C.pt}"  "${r.pt}"  0`) : n.push(`  LINE  "${e}"  ${t}  "${C.pt}"  "${r.pt}"  ${_}`), we.push(`  LINEASSIGN  "${e}"  "${r.story}"  SECTION "${S}" ${I} MINNUMSTA ${M} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  me.forEach((e, t) => {
    const o = Ge(e.elemIndices[0]);
    xe(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, o, e.nSegments);
  }), $.forEach((e, t) => {
    if (e.length !== 2 || Ue.has(t)) return;
    const o = qe(c, e), a = de.get(t) || `Sec_${t}`, S = Ge(t), I = c[e[0]][2] <= c[e[1]][2] ? e[0] : e[1], M = c[e[0]][2] <= c[e[1]][2] ? e[1] : e[0];
    xe(`E${t + 1}`, o === "BEAM" ? "BRACE" : o, I, M, a, S, 3);
  }), n.push("");
  const le = A.weightMode ?? "auto", fe = /* @__PURE__ */ new Set();
  n.push("$ POINT ASSIGNS"), (_b = N.supports) == null ? void 0 : _b.forEach((e, t) => {
    const o = [];
    if (e[0] && o.push("UX"), e[1] && o.push("UY"), e[2] && o.push("UZ"), e[3] && o.push("RX"), e[4] && o.push("RY"), e[5] && o.push("RZ"), o.length > 0) {
      const a = te(t), S = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      n.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${o.join(" ")}" ${S} `), fe.add(`${a.pt}@${a.story}`);
    }
  });
  const He = (A.diaphragm ?? "auto") !== "none";
  He && me.forEach((e) => {
    const t = te(e.topNodeIdx), o = `${t.pt}@${t.story}`;
    !fe.has(o) && t.story !== "Base" && (n.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), fe.add(o));
  }), le === "manual" && N.loads && N.loads.forEach((e, t) => {
    const [o, a, S] = x(t, e);
    if (Math.abs(o) < 1e-10 && Math.abs(a) < 1e-10 && Math.abs(S) < 1e-10) return;
    const I = te(t), M = `${I.pt}@${I.story}`;
    fe.has(M) || (n.push(`  POINTASSIGN  "${I.pt}"  "${I.story}"  DIAPH "DISCONNECTED"  `), fe.add(M));
  }), n.push(""), n.push("$ LINE ASSIGNS"), we.forEach((e) => n.push(e)), n.push("");
  const K = [], ze = p.areaObjects, Je = /* @__PURE__ */ new Set(), _e = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map();
  ze == null ? void 0 : ze.forEach((e) => e.cells.forEach((t) => Je.add(t))), $.forEach((e, t) => {
    if (e.length === 4) {
      const o = c[e[0]], a = c[e[1]], S = c[e[2]], I = [a[0] - o[0], a[1] - o[1], a[2] - o[2]], M = [S[0] - o[0], S[1] - o[1], S[2] - o[2]], r = I[1] * M[2] - I[2] * M[1], C = I[2] * M[0] - I[0] * M[2], _ = I[0] * M[1] - I[1] * M[0], B = Math.sqrt(r * r + C * C + _ * _), P = B > 1e-10 && Math.abs(_) / B < 0.5;
      K.push({ idx: t, el: e, isWall: P }), Je.has(t) && K.pop();
    }
  });
  const $e = (() => {
    for (const [e, t] of Oe) if (!t) return pe.get(e);
    return pe.values().next().value || "Conc_1";
  })();
  ze == null ? void 0 : ze.forEach((e, t) => {
    K.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && _e.set(e.cells[0], e.q), e.ang !== void 0 && ve.set(e.cells[0], e.ang);
  });
  const ge = "DECK";
  let Me = false;
  const Re = [], We = (e) => {
    const t = A.elementInputs.plateFormulations, o = K.find((S) => S.isWall === e), a = t && o ? t.get(o.idx) : void 0;
    return a === 2 ? "Membrane" : a === 1 ? "ShellThin" : "ShellThick";
  }, je = (e, t) => {
    const o = A.elementInputs.thicknesses, a = K.find((S) => S.isWall === e);
    return (a ? o == null ? void 0 : o.get(a.idx) : void 0) ?? (o == null ? void 0 : o.values().next().value) ?? t;
  }, at = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], it = (e) => {
    var _a2;
    const o = (_a2 = p.shellModifiers) == null ? void 0 : _a2.get(e);
    if (o && o.length >= 8) return o.slice(0, 8);
    const a = p.membraneModifiers, S = p.bendingModifiers, I = a == null ? void 0 : a.get(e), M = S == null ? void 0 : S.get(e);
    if (I === void 0 && M === void 0) return null;
    const r = I ?? 1, C = M ?? 1;
    return [r, r, r, C, C, C, C, C];
  }, Ze = (e, t) => {
    const o = K.filter((M) => M.isWall === t), a = /* @__PURE__ */ new Map();
    for (const M of o) {
      const r = it(M.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      a.set(r.map((C) => u(C)).join(","), r);
    }
    if (a.size === 0) return "";
    a.size > 1 && console.warn(`[e2k] "${e}": ${a.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const S = a.values().next().value, I = at.map((M, r) => Math.abs(S[r] - 1) > 1e-9 ? `${M} ${u(S[r])}` : "").filter(Boolean);
    return I.length ? `  SHELLPROP  "${e}"  ${I.join(" ")} ` : "";
  };
  if (K.some((e) => !e.isWall)) {
    const e = p.bendingModifiers, t = p.shellModifiers;
    Me = (() => {
      for (const S of K) {
        if (S.isWall) continue;
        const I = t == null ? void 0 : t.get(S.idx);
        if (I && Math.abs(I[3]) < 1e-9 && Math.abs(I[4]) < 1e-9) return true;
        const M = e == null ? void 0 : e.get(S.idx);
        if (M !== void 0 && Math.abs(M) < 1e-9) return true;
      }
      return false;
    })();
    const o = je(false, 0.15);
    Me ? (n.push("$ DECK PROPERTIES"), n.push(`  SHELLPROP  "${ge}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${$e}"  DECKMATERIAL "${$e}"  DECKSLABDEPTH ${E(o * 65 / 120)} DECKRIBDEPTH ${E(o * 55 / 120)} DECKRIBWIDTHTOP ${E(o * 150 / 120)} DECKRIBWIDTHBOTTOM ${E(o * 100 / 120)} DECKRIBSPACING ${E(o * 200 / 120)} DECKSHEARTHICKNESS ${E(o * 0.76 / 120)} DECKUNITWEIGHT ${E(D(0.11012))} SHEARSTUDDIAM ${E(o * 19 / 120)} SHEARSTUDHEIGHT ${E(o * 100 / 120)} SHEARSTUDFU 400 `)) : (n.push("$ SLAB PROPERTIES"), n.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${$e}"  MODELINGTYPE "${We(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${u(f(o))} `));
    const a = Ze(Me ? ge : "Losa", false);
    a && n.push(a), n.push("");
  }
  if (K.some((e) => e.isWall)) {
    n.push("$ WALL PROPERTIES");
    const e = je(true, 0.2), t = We(true);
    n.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${$e}"  MODELINGTYPE "${t}"  WALLTHICKNESS ${u(f(e))} `);
    const o = Ze("Muro", true);
    o && n.push(o), n.push("");
  }
  if (K.length > 0) {
    n.push("$ AREA CONNECTIVITIES");
    const e = [];
    K.forEach((t, o) => {
      const { el: a, isWall: S } = t, I = S ? `W${o + 1}` : `F${o + 1}`, M = S ? "PANEL" : "FLOOR", r = a.map((C) => te(C));
      if (S) {
        const C = (W) => ie.indexOf(W);
        if (new Set(r.map((W) => W.pt)).size === 4) {
          const W = Math.max(...r.map((se) => C(se.story))), Se = r.map((se) => W - C(se.story));
          n.push(`  AREA "${I}"  ${M}  4  "${r[0].pt}"  "${r[1].pt}"  "${r[2].pt}"  "${r[3].pt}"  ${Se.join("  ")}  `), e.push(`  AREAASSIGN  "${I}"  "${ie[W]}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const B = c[a[0]][2] <= c[a[2]][2] ? 0 : 2, P = c[a[1]][2] <= c[a[3]][2] ? 1 : 3;
        n.push(`  AREA "${I}"  ${M}  4  "${r[B].pt}"  "${r[P].pt}"  "${r[P].pt}"  "${r[B].pt}"  1  1  0  0  `);
        const U = r[B === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${I}"  "${U}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        n.push(`  AREA "${I}"  ${M}  4  "${r[0].pt}"  "${r[1].pt}"  "${r[2].pt}"  "${r[3].pt}"  0  0  0  0  `);
        const C = ve.get(t.idx) ?? (L == null ? void 0 : L.get(t.idx));
        e.push(Me ? `  AREAASSIGN  "${I}"  "${r[0].story}"  SECTION "${ge}"  ANG ${u(C ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${I}"  "${r[0].story}"  SECTION "Losa" ${He ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Re.push({ name: I, story: r[0].story, idx: t.idx });
      }
    }), n.push(""), n.push("$ AREA ASSIGNS"), e.forEach((t) => n.push(t)), n.push("");
  }
  const ct = le === "manual" ? 0 : 1;
  n.push("$ LOAD PATTERNS");
  const oe = ((_c = A.loadPatterns) == null ? void 0 : _c.length) ? A.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: ct }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of oe) {
    let t;
    e.type === "Dead" ? t = le === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), n.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  n.push("");
  const Le = A.loadPatternDestino && oe.some((e) => e.name === A.loadPatternDestino) ? A.loadPatternDestino : ((_d = oe.find((e) => e.type === "Dead")) == null ? void 0 : _d.name) ?? oe[0].name, De = [], Ce = /* @__PURE__ */ new Map(), Xe = (e, t) => {
    const o = Ce.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let a = 0; a < 6; a++) o[a] += t[a] ?? 0;
    Ce.set(e, o);
  }, rt = Le === (((_e2 = oe.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? oe[0].name), Et = le === "manual" || !rt;
  if (N.loads && N.loads.size > 0 && N.loads.forEach((e, t) => {
    const [o, a, S] = x(t, e);
    Xe(t, [o, a, Et ? S : 0, e[3] ?? 0, e[4] ?? 0, e[5] ?? 0]);
  }), N.moments && N.moments.size > 0 && N.moments.forEach((e, t) => {
    Xe(t, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), Ce.forEach((e, t) => {
    if (e.every((a) => Math.abs(a) <= 1e-10)) return;
    const o = te(t);
    De.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "FORCE"  LC "${Le}"  FX ${E(Y(e[0]))}  FY ${E(Y(e[1]))}  FZ ${E(Y(e[2]))}  MX ${E(i(e[3]))}  MY ${E(i(e[4]))}  MZ ${E(i(e[5]))}`);
  }), De.length > 0 && (n.push("$ POINT OBJECT LOADS"), De.forEach((e) => n.push(e)), n.push("")), h && h.size > 0 && Re.length > 0) {
    const e = [];
    for (const t of Re) {
      const o = _e.get(t.idx), a = o !== void 0 ? { value: o } : h.get(t.idx);
      if (!a || Math.abs(a.value) < 1e-12) continue;
      const S = a.dir ?? "GRAV", I = S === "GRAV" ? Math.abs(a.value) : a.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${S}"  LC "${a.pattern ?? Le}"  FVAL ${E(D(I))}`);
    }
    e.length > 0 && (n.push("$ SHELL OBJECT LOADS"), e.forEach((t) => n.push(t)), n.push(""));
  }
  n.push("$ ANALYSIS OPTIONS"), n.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), n.push('  PDELTA  METHOD "NONE"  '), n.push("");
  const Pe = le === "manual";
  n.push("$ MASS SOURCE"), n.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${Pe ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${Pe ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), Pe || n.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), n.push(""), n.push("$ LOAD CASES");
  const lt = ((_f = A.loadCases) == null ? void 0 : _f.length) ? A.loadCases : oe.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of lt) {
    n.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) n.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  n.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), n.push('  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  '), n.push("");
  const Fe = A.loadCombinations;
  if (Fe && Fe.length) {
    n.push("$ LOAD COMBINATIONS");
    for (const e of Fe) {
      n.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) n.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    n.push("");
  }
  return n.push("  END"), n.push("$ END OF MODEL FILE"), n.join(`\r
`);
}
function qe(A, c) {
  const $ = A[c[0]], N = A[c[1]], p = Math.abs(N[2] - $[2]), g = Math.sqrt((N[0] - $[0]) ** 2 + (N[1] - $[1]) ** 2), y = p > g * 0.5;
  return y && g > 0.01 ? "BRACE" : y ? "COLUMN" : "BEAM";
}
export {
  Ot as a,
  dt as e,
  Nt as p
};
