function R(l) {
  return l && parseFloat(l) || 0;
}
function rt(l) {
  const c = /* @__PURE__ */ new Map(), M = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let d;
  for (; (d = M.exec(l)) !== null; ) c.set(d[1], d[2] !== void 0 ? d[2] : d[3]);
  return c;
}
function yt(l) {
  const c = l.split(/\r?\n/);
  return c.some((d) => d.trim().startsWith("TABLE:")) ? Ot(c) : Nt(c);
}
function Ot(l) {
  var _a, _b, _c, _d, _e, _f;
  const c = [];
  let M = "";
  for (const h of l) {
    const f = h.trimEnd();
    f.endsWith("_") ? M += f.slice(0, -1) + " " : (M += f, c.push(M), M = "");
  }
  M && c.push(M);
  const d = { force: "KN", length: "m" };
  let p = "UX,UY,UZ,RX,RY,RZ";
  const g = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), L = [], k = [], w = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = [];
  let n = "";
  for (const h of c) {
    const f = h.trim();
    if (!f || f.startsWith(";") || f.startsWith("File ")) continue;
    if (f.startsWith("TABLE:")) {
      const S = f.match(/TABLE:\s+"(.+?)"/);
      n = S ? S[1].toUpperCase() : "";
      continue;
    }
    if (f === "END TABLE DATA") {
      n = "";
      continue;
    }
    const T = rt(f);
    switch (n) {
      case "PROGRAM CONTROL": {
        const S = T.get("CurrUnits");
        if (S) {
          const r = S.split(",").map((C) => C.trim());
          r[0] && (d.force = r[0]), r[1] && (d.length = r[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const S = T.get("Material");
        S && !g.has(S) && g.set(S, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const S = T.get("Material");
        if (S) {
          const r = g.get(S) || { E: 0, nu: 0, G: 0 };
          r.E = R(T.get("E1")), r.G = R(T.get("G12")), r.nu = R(T.get("U12")), r.density = R(T.get("UnitMass")), g.set(S, r);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const S = T.get("Material");
        S && g.has(S) && (g.get(S).fy = R(T.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const S = T.get("SectionName");
        S && Y.set(S, { material: T.get("Material") || "", shape: T.get("Shape") || "Rectangular", D: R(T.get("t3")), B: R(T.get("t2")), TF: R(T.get("tf")), TW: R(T.get("tw")), A: R(T.get("Area")), Iz: R(T.get("I33")), Iy: R(T.get("I22")), J: R(T.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const S = T.get("Section");
        S && J.set(S, { material: T.get("Material") || "", type: T.get("Type") || "Shell", thickness: R(T.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const S = T.get("Joint");
        if (S) {
          const r = R(T.get("XorR")), C = R(T.get("Y")), B = R(T.get("Z"));
          u.set(S, [r, C, B]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const S = T.get("Frame"), r = T.get("JointI"), C = T.get("JointJ");
        S && r && C && L.push({ name: S, j1: r, j2: C });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const S = T.get("Area");
        if (S) {
          const r = parseInt(T.get("NumJoints") || "4"), C = [];
          for (let B = 1; B <= r; B++) {
            const i = T.get(`Joint${B}`);
            i && C.push(i);
          }
          C.length >= 3 && k.push({ name: S, joints: C });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const S = T.get("Joint");
        if (S) {
          const r = [((_a = T.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = T.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = T.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = T.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = T.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = T.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          w.set(S, r);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const S = T.get("Frame"), r = T.get("AnalSect");
        S && r && x.set(S, r);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const S = T.get("Area"), r = T.get("Section");
        S && r && H.set(S, r);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const S = T.get("Joint");
        S && j.push({ joint: S, fx: R(T.get("F1")), fy: R(T.get("F2")), fz: R(T.get("F3")), mx: R(T.get("M1")), my: R(T.get("M2")), mz: R(T.get("M3")) });
        break;
      }
    }
  }
  return Et(d, p, g, Y, J, u, L, k, w, x, H, j);
}
function Nt(l) {
  const c = { force: "KN", length: "m" };
  let M = "UX,UY,UZ,RX,RY,RZ";
  const d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = [], u = [], L = /* @__PURE__ */ new Map(), k = [];
  let w = "", x = "";
  for (const n of l) {
    const h = n.trim();
    if (!h || h.startsWith(";")) continue;
    if (!n.startsWith(" ") && !n.startsWith("	")) {
      const S = h.toUpperCase();
      if (S === "END") break;
      S.startsWith("SHELL SECTION") ? w = "SHELL SECTION" : S.startsWith("FRAME SECTION") ? w = "FRAME SECTION" : w = S.split(/\s+/)[0];
      continue;
    }
    const f = rt(h), T = h.split(/\s+/);
    switch (w) {
      case "SYSTEM": {
        const S = f.get("DOF");
        S && (M = S);
        const r = f.get("LENGTH");
        r && (c.length = r);
        const C = f.get("FORCE");
        C && (c.force = C);
        break;
      }
      case "JOINT": {
        const S = T[0];
        Y.set(S, [R(f.get("X")), R(f.get("Y")), R(f.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const S = f.get("ADD"), r = f.get("DOF");
        if (S && r) {
          const C = r.split(","), B = [false, false, false, false, false, false];
          for (const i of C) {
            const s = i.toUpperCase();
            (s === "UX" || s === "U1") && (B[0] = true), (s === "UY" || s === "U2") && (B[1] = true), (s === "UZ" || s === "U3") && (B[2] = true), (s === "RX" || s === "R1") && (B[3] = true), (s === "RY" || s === "R2") && (B[4] = true), (s === "RZ" || s === "R3") && (B[5] = true);
          }
          L.set(S, B);
        }
        break;
      }
      case "MATERIAL": {
        const S = f.get("NAME");
        if (S) x = S, d.set(S, { E: 0, nu: 0, G: 0 });
        else if (x) {
          const r = d.get(x), C = f.get("E");
          C && (r.E = R(C));
          const B = f.get("U");
          B && (r.nu = R(B)), r.G = r.E / (2 * (1 + r.nu));
          const i = f.get("M");
          i && (r.density = R(i));
        }
        break;
      }
      case "SHELL": {
        const S = T[0], r = f.get("J");
        f.get("SEC"), r && u.push({ name: S, joints: r.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const S = f.get("NAME");
        S && g.set(S, { material: f.get("MAT") || "", type: f.get("TYPE") || "Shell", thickness: R(f.get("TH")) });
        break;
      }
      case "FRAME": {
        const S = T[0], r = f.get("J");
        if (r) {
          const C = r.split(",");
          C.length >= 2 && J.push({ name: S, j1: C[0], j2: C[1] });
        }
        break;
      }
      case "LOAD": {
        const S = f.get("ADD");
        S && k.push({ joint: S, fx: R(f.get("UX")), fy: R(f.get("UY")), fz: R(f.get("UZ")), mx: R(f.get("MX")), my: R(f.get("MY")), mz: R(f.get("MZ")) });
        break;
      }
    }
  }
  return Et(c, M, d, p, g, Y, J, u, L, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), k);
}
function Et(l, c, M, d, p, g, Y, J, u, L, k, w) {
  var _a;
  const x = [], H = /* @__PURE__ */ new Map(), j = [];
  for (const [s, m] of g) H.set(s, j.length), x.push(s), j.push(m);
  const n = [], h = [], f = /* @__PURE__ */ new Map();
  for (const s of Y) {
    const m = H.get(s.j1), O = H.get(s.j2);
    if (m !== void 0 && O !== void 0) {
      const G = n.length;
      n.push([m, O]), h.push(s.name);
      const N = L.get(s.name);
      N && f.set(G, N);
    }
  }
  const T = n.length;
  for (const s of J) {
    const m = s.joints.map((O) => H.get(O)).filter((O) => O !== void 0);
    if (m.length >= 3) {
      const O = n.length;
      n.push(m), h.push(s.name);
      const G = k.get(s.name);
      G && f.set(O, G);
    }
  }
  const S = n.length - T, r = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, C = /* @__PURE__ */ new Map(), B = M.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let s = 0; s < n.length; s++) {
    const m = f.get(s), O = m ? d.get(m) : null, G = m ? p.get(m) : null;
    if (O || n[s].length === 2) {
      const N = O || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, z = M.get(N.material) || B, _ = z.E || B.E, ee = z.nu || 0.3, le = z.G || _ / (2 * (1 + ee));
      r.elasticities.set(s, _), r.shearModuli.set(s, le), r.areas.set(s, N.A || N.D * N.B), r.momentsOfInertiaZ.set(s, N.Iz || N.B * N.D ** 3 / 12), r.momentsOfInertiaY.set(s, N.Iy || N.D * N.B ** 3 / 12), r.torsionalConstants.set(s, N.J || 0), r.densities.set(s, z.density || 0), ((_a = N.shape) == null ? void 0 : _a.includes("Wide Flange")) || N.shape === "I" ? C.set(s, { type: "I", b: N.B, h: N.D, name: m || "I-section" }) : C.set(s, { type: "rect", b: N.B, h: N.D });
    } else if (G) {
      const N = M.get(G.material) || B, z = N.E || B.E, _ = N.nu || 0.2, ee = N.G || z / (2 * (1 + _));
      r.elasticities.set(s, z), r.shearModuli.set(s, ee), r.thicknesses.set(s, G.thickness), r.poissonsRatios.set(s, _), r.densities.set(s, N.density || 0);
    }
  }
  const i = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [s, m] of u) {
    const O = H.get(s);
    O !== void 0 && i.supports.set(O, m);
  }
  for (const s of w) {
    const m = H.get(s.joint);
    if (m !== void 0) {
      const O = i.forces.get(m) || [0, 0, 0, 0, 0, 0];
      O[0] += s.fx, O[1] += s.fy, O[2] += s.fz, O[3] += s.mx, O[4] += s.my, O[5] += s.mz, i.forces.set(m, O);
    }
  }
  return { units: l, dof: c, materials: M, frameSections: d, shellSections: p, nodes: j, nodeNames: x, nodeNameToIdx: H, elements: n, elementNames: h, elementSections: f, nodeInputs: i, elementInputs: r, sectionShapes: C, info: { nNodes: j.length, nFrames: T, nShells: S, title: `SAP2000 (${T} frames, ${S} shells)` } };
}
function Yt(l) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: c, elements: M, nodeInputs: d, elementInputs: p } = l, g = { force: "KN", length: "m" };
  l.units && (l.units.force !== "KN" || l.units.length !== "m") && console.warn(`[s2k] el modelo va en kN\xB7m y el exportador NO convierte: se declara CurrUnits="KN, m, C" y se ignora "${l.units.force}, ${l.units.length}". Etiquetarlo de otra forma hace que SAP2000 lea las fuerzas escaladas.`);
  const Y = l.title || "Awatif Model", J = [], u = (i) => J.push(i), L = () => J.push(" ");
  u(`File ${Y}.$2k was saved on m/d/yy at h:mm:ss`), L(), u('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), u("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), L();
  const k = [], w = (i) => {
    var _a2, _b2, _c2, _d2;
    const s = ((_a2 = p.elasticities) == null ? void 0 : _a2.get(i)) || 0, m = (_b2 = p.poissonsRatios) == null ? void 0 : _b2.get(i), O = ((_c2 = p.shearModuli) == null ? void 0 : _c2.get(i)) || 0, G = m !== void 0 ? m : s > 0 && O > 0 ? Math.max(0, Math.min(0.5, s / (2 * O) - 1)) : 0.2, N = O > 0 ? O : s > 0 ? s / (2 * (1 + G)) : 0, z = ((_d2 = p.densities) == null ? void 0 : _d2.get(i)) || 0;
    return { E: s, nu: G, G: N, rho: z, key: `MAT_${Math.round(s)}_n${G.toFixed(4)}` };
  }, x = [];
  if (M.forEach((i, s) => {
    i.length === 2 ? k.push(s) : x.push(s);
  }), k.length > 0) {
    u('TABLE:  "CONNECTIVITY - FRAME"');
    for (const i of k) {
      const s = M[i];
      u(`   Frame=${i + 1}   JointI=${s[0] + 1}   JointJ=${s[1] + 1}   IsCurved=No`);
    }
    L();
  }
  if (x.length > 0) {
    u('TABLE:  "CONNECTIVITY - AREA"');
    for (const i of x) {
      const s = M[i], m = s.map((O, G) => `Joint${G + 1}=${O + 1}`).join("   ");
      u(`   Area=${i + 1}   NumJoints=${s.length}   ${m}`);
    }
    L();
  }
  u('TABLE:  "COORDINATE SYSTEMS"'), u("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), L(), u('TABLE:  "DATABASE FORMAT TYPES"'), u("   UnitsCurr=Yes   OverrideE=No"), L();
  const H = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
  for (const i of k) {
    const s = ((_a = p.areas) == null ? void 0 : _a.get(i)) || 0, m = ((_b = p.momentsOfInertiaZ) == null ? void 0 : _b.get(i)) || 0, O = ((_c = p.momentsOfInertiaY) == null ? void 0 : _c.get(i)) || 0, G = ((_d = p.torsionalConstants) == null ? void 0 : _d.get(i)) || 0;
    (_e = p.elasticities) == null ? void 0 : _e.get(i);
    const N = w(i).key, z = ((_f = p.shearAreasZ) == null ? void 0 : _f.get(i)) ?? 0, _ = ((_g = p.shearAreasY) == null ? void 0 : _g.get(i)) ?? 0, ee = `A${s.toPrecision(6)}_Iz${m.toPrecision(6)}_s${z.toPrecision(6)}_${_.toPrecision(6)}`;
    if (!H.has(ee)) {
      let fe = 0.3, ce = 0.3;
      s > 0 && m > 0 && (fe = Math.sqrt(12 * m / s), ce = s / fe), H.set(ee, { A: s, Iz: m, Iy: O, J: G, b: ce, h: fe, matKey: N, As2: z > 0 ? z : s * 5 / 6, As3: _ > 0 ? _ : s * 5 / 6 });
    }
    const le = [...H.keys()].indexOf(ee) + 1;
    j.set(i, `SEC${le}`);
  }
  if (k.length > 0) {
    u('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const i of k) {
      const s = j.get(i) || "SEC1";
      u(`   Frame=${i + 1}   AutoSelect=N.A.   AnalSect=${s}   MatProp=Default`);
    }
    L();
  }
  if (H.size > 0) {
    u('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let i = 0;
    for (const [, s] of H) i++, u(`   SectionName=SEC${i}   Material=${s.matKey}   Shape=General   t3=${y(s.h)}   t2=${y(s.b)}   Area=${y(s.A)}   TorsConst=${y(s.J)}   I33=${y(s.Iz)}   I22=${y(s.Iy)}   I23=0   AS2=${y(s.As2)}   AS3=${y(s.As3)} _`), u("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    L();
  }
  {
    const i = k.filter((s) => {
      var _a2;
      const m = (_a2 = p.localAngles) == null ? void 0 : _a2.get(s);
      return m !== void 0 && isFinite(m) && Math.abs(m) > 1e-9;
    });
    if (i.length > 0) {
      u('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const s of i) u(`   Frame=${s + 1}   Angle=${y(p.localAngles.get(s))}   AdvanceAxes=No`);
      L();
    }
  }
  const n = !!l.layeredSection && x.length > 0, h = l.layeredSection, f = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
  if (!n) for (const i of x) {
    const s = ((_h = p.thicknesses) == null ? void 0 : _h.get(i)) || 0.1;
    (_i = p.elasticities) == null ? void 0 : _i.get(i);
    const m = w(i).key, O = ((_j = p.plateFormulations) == null ? void 0 : _j.get(i)) ?? 0, G = `t${s.toPrecision(6)}_f${O}`;
    f.has(G) || f.set(G, { t: s, matKey: m, formulacion: O });
    const N = [...f.keys()].indexOf(G) + 1;
    T.set(i, `SSEC${N}`);
  }
  if (x.length > 0) {
    u('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const i of x) {
      const s = n ? h.name : T.get(i) || "SSEC1";
      u(`   Area=${i + 1}   Section=${s}   MatProp=Default`);
    }
    if (L(), u('TABLE:  "AREA SECTION PROPERTIES"'), n) {
      const i = h, s = ((_k = i.layers[0]) == null ? void 0 : _k.material) || "MAT_DEFAULT";
      u(`   Section=${i.name}   Material=${s}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${y(i.totalThickness)}   BendThick=${y(i.totalThickness)}   Color=Magenta`);
    } else {
      let i = 0;
      for (const [, s] of f) {
        i++;
        const m = s.formulacion === 2 ? "Membrane" : s.formulacion === 1 ? "Shell-Thin" : "Shell-Thick";
        u(`   Section=SSEC${i}   Material=${s.matKey}   MatAngle=0   AreaType=Shell   Type=${m}   DrillDOF=Yes   Thickness=${y(s.t)}   BendThick=${y(s.t)}   Color=Cyan`);
      }
    }
    if (L(), n) {
      u('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const i = h;
      for (const s of i.layers) {
        const m = s.angle ?? 0, O = s.numIntPts ?? 3;
        u(`   Section=${i.name}   LayerName=${s.name}   Distance=${y(s.distance)}   Thickness=${y(s.thickness)}   Type=Shell   NumIntPts=${O}   Material=${s.material}   MatAngle=${y(m * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      L();
    }
  }
  u('TABLE:  "JOINT COORDINATES"');
  for (let i = 0; i < c.length; i++) {
    const s = c[i];
    u(`   Joint=${i + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${y(s[0])}   Y=${y(s[1])}   Z=${y(s[2])}   SpecialJt=No`);
  }
  if (L(), d.supports && d.supports.size > 0) {
    u('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [i, s] of d.supports) {
      if (!s.some((O) => O)) continue;
      const m = (O) => O ? "Yes" : "No";
      u(`   Joint=${i + 1}   U1=${m(s[0])}   U2=${m(s[1])}   U3=${m(s[2])}   R1=${m(s[3])}   R2=${m(s[4])}   R3=${m(s[5])}`);
    }
    L();
  }
  const S = l.selfWtMult ?? 1;
  u('TABLE:  "LOAD PATTERN DEFINITIONS"'), u(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${S}`), L(), u('TABLE:  "LOAD CASE DEFINITIONS"'), u('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), L(), u('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), u('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), L();
  const r = d.loads;
  if (r && r.size > 0) {
    u('TABLE:  "JOINT LOADS - FORCE"');
    for (const [i, s] of r) s.some((m) => Math.abs(m) > 1e-12) && u(`   Joint=${i + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${y(s[0])}   F2=${y(s[1])}   F3=${y(s[2])}   M1=${y(s[3])}   M2=${y(s[4])}   M3=${y(s[5])}`);
    L();
  }
  const C = p.frameLoads;
  if (C && C.size > 0) {
    u('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [i, s] of C) {
      const m = M[i];
      if (!m || m.length !== 2) continue;
      const O = c[m[0]], G = c[m[1]], N = Math.hypot(G[0] - O[0], G[1] - O[1], G[2] - O[2]);
      ["X", "Y", "Z"].forEach((z, _) => {
        Math.abs(s[_]) < 1e-12 || u(`   Frame=${i + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${z}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${y(N)}   FOverLA=${y(s[_])}   FOverLB=${y(s[_])}`);
      });
    }
    L();
  }
  const B = /* @__PURE__ */ new Map();
  for (let i = 0; i < M.length; i++) {
    const { E: s, nu: m, G: O, rho: G, key: N } = w(i);
    B.has(N) || B.set(N, { E: s, nu: m, G: O, rho: G });
  }
  u('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [i] of B) u(`   Material=${i}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  L(), u('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [i, s] of B) u(`   Material=${i}   UnitWeight=${y(s.rho * 9.81)}   UnitMass=${y(s.rho)}   E1=${y(s.E)}   G12=${y(s.G)}   U12=${y(s.nu)}   A1=9.9E-06`);
  L(), u('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [i] of B) u(`   Material=${i}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return L(), u('TABLE:  "PROGRAM CONTROL"'), u(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${g.force}, ${g.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), L(), u("END TABLE DATA"), u(""), J.join(`\r
`);
}
function y(l) {
  return l === 0 || Math.abs(l) < 1e-15 ? "0" : Math.abs(l) >= 1e6 || Math.abs(l) < 1e-3 && Math.abs(l) > 0 ? l.toExponential(8) : parseFloat(l.toPrecision(10)).toString();
}
function gt(l, c, M = 0.05) {
  const d = c.map(([p, g]) => `${(+p).toFixed(4)} ${(+g).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${l}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${M}  SPECTYPE "USER"  `, `  FUNCTION "${l}"  TIMEVAL "${d}"  `];
}
function Rt(l) {
  const { name: c, func: M, modalCase: d = "Modal", sfX: p = 9.81, sfY: g = 9.81 } = l, Y = [`  LOADCASE "${c}"  TYPE  "Response Spectrum"  MODALCASE  "${d}"  `];
  return p && Y.push(`  LOADCASE "${c}"  ACCEL  "U1"  FUNC  "${M}"  SF  ${p}  `), g && Y.push(`  LOADCASE "${c}"  ACCEL  "U2"  FUNC  "${M}"  SF  ${g}  `), Y;
}
function at(l) {
  const { name: c = "Modal", ritz: M = false, nModes: d = 12 } = l;
  return M ? [`  LOADCASE "${c}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${c}"  MAXMODES  ${d} MINMODES  1 `, `  LOADCASE "${c}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${c}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${c}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${c}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${c}"  MAXMODES  ${d} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function Bt(l) {
  var _a;
  const c = (_a = l.e2kModel) == null ? void 0 : _a.rawSections;
  let M = c && c.size > 0 ? Dt(c, l.e2kModel) : Ct(l);
  return l.seismicNEC && (M = Lt(M, l.seismicNEC)), M;
}
function Lt(l, c) {
  const M = l.includes(`\r
`) ? `\r
` : `
`, d = l.split(/\r?\n/), p = c.name ?? "NEC", g = gt(p, c.points, c.dampRatio ?? 0.05), Y = c.modalCase ?? "Modal", J = Rt({ name: c.caseName ?? "Sismo NEC", func: p, modalCase: Y, sfX: c.sfX, sfY: c.sfY });
  let u = [];
  const L = (k) => d.some((w) => k.test(w));
  if (c.modal) {
    const k = new RegExp(`^\\s*LOADCASE\\s+"${Y}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let w = d.length - 1; w >= 0; w--) k.test(d[w]) && d.splice(w, 1);
    u = at({ name: Y, ritz: !!c.modal.ritz, nModes: c.modal.nModes });
  } else L(new RegExp(`LOADCASE\\s+"${Y}"\\s+TYPE\\s+"Modal`)) || (u = at({ name: Y }));
  return it(d, "FUNCTIONS", g), it(d, "LOAD CASES", [...u, ...J]), d.join(M);
}
function it(l, c, M) {
  const d = l.findIndex((Y) => Y.trim() === `$ ${c}`);
  if (d >= 0) {
    l.splice(d + 1, 0, ...M);
    return;
  }
  const p = l.findIndex((Y) => Y.trim() === "END"), g = p >= 0 ? p : l.length;
  l.splice(g, 0, `$ ${c}`, ...M, "");
}
function Dt(l, c) {
  const M = [], d = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  M.push("$ File exported from Hekatan Struct Lineal (round-trip)"), M.push("");
  for (const p of d) {
    const g = l.get(p);
    if (!(!g || g.length === 0)) {
      M.push(`$ ${p}`);
      for (const Y of g) M.push(Y);
      M.push("");
    }
  }
  for (const [p, g] of l) if (!d.includes(p) && g.length !== 0) {
    M.push(`$ ${p}`);
    for (const Y of g) M.push(Y);
    M.push("");
  }
  return M.push("  END"), M.push("$ END OF MODEL FILE"), M.join(`\r
`);
}
function Ct(l) {
  var _a, _b, _c, _d, _e2, _f;
  const { nodes: c, elements: M, nodeInputs: d, elementInputs: p, title: g, units: Y } = l, J = l.shellLoads ?? p.shellSurfaceLoads;
  let u;
  J instanceof Map && (u = /* @__PURE__ */ new Map(), J.forEach((e, t) => {
    u.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const L = l.shellAngles ?? p.shellAngles, k = p.cargaDeArea, w = !!(u && u.size > 0), x = (e, t) => [t[0], t[1], t[2] - (w ? (k == null ? void 0 : k.get(e)) ?? 0 : 0)], H = "N", j = "MM", n = [], h = (e) => Math.round(e * 1e4) / 1e4, f = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), T = 1e3, S = 1e3, r = (e) => e * S, C = (e) => e * T, B = (e) => e * T, i = (e) => e * T * S, s = (e) => e * T / S ** 2, m = (e) => e * T / S ** 3, O = /* @__PURE__ */ new Date(), G = `${O.getMonth() + 1}/${O.getDate()}/${O.getFullYear()}  ${O.getHours()}:${String(O.getMinutes()).padStart(2, "0")}:${String(O.getSeconds()).padStart(2, "0")}`;
  n.push(`$ File   "Hekatan_export.e2k"  saved ${G} in ETABS 22.6.0`), n.push(""), n.push("$ PROGRAM INFORMATION"), n.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), n.push(""), n.push("$ CONTROLS"), n.push(`  UNITS  "${H}"  "${j}"  "C"  `), n.push('  TITLE1  "Hekatan Struct Lineal export"  '), g && n.push(`  TITLE2  "${g}"  `), n.push("  PREFERENCE  MERGETOL 0.001"), n.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), n.push("");
  const N = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  c.forEach((e) => {
    N.add(h(e[0])), z.add(h(e[1]));
  });
  const _ = [...N].sort((e, t) => e - t), ee = [...z].sort((e, t) => e - t);
  n.push("$ GRIDS"), n.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), _.forEach((e, t) => {
    const o = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    n.push(`  GRID "G1"  LABEL "${o}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), ee.forEach((e, t) => {
    n.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), n.push("");
  const le = 3, fe = 0.5, ce = /* @__PURE__ */ new Map();
  c.forEach((e) => {
    const t = h(e[2]);
    ce.set(t, (ce.get(t) ?? 0) + 1);
  });
  const Ge = /* @__PURE__ */ new Set();
  c.forEach((e) => Ge.add(h(e[2])));
  const Q = [...Ge].sort((e, t) => e - t);
  let U = Q.filter((e) => (ce.get(e) ?? 0) >= le);
  if (U.length > 1) {
    const e = [U[0]];
    for (const t of U.slice(1)) t - e[e.length - 1] < fe ? e[e.length - 1] = t : e.push(t);
    U = e;
  }
  U.length || (U = [Q[0], Q[Q.length - 1]]), U[0] !== Q[0] && U.unshift(Q[0]), U[U.length - 1] !== Q[Q.length - 1] && U.push(Q[Q.length - 1]);
  const te = [], re = /* @__PURE__ */ new Map();
  te.push("Base"), re.set(U[0], "Base");
  for (let e = 1; e < U.length; e++) {
    const t = `Level_${e}`;
    te.push(t), re.set(U[e], t);
  }
  const Ue = (e) => {
    const t = h(e);
    if (re.has(t)) return { story: re.get(t), dz: 0 };
    for (let a = 0; a < U.length; a++) if (U[a] >= t) return { story: re.get(U[a]), dz: h(U[a] - t) };
    const o = U[U.length - 1];
    return { story: re.get(o), dz: h(o - t) };
  };
  n.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = U.length - 1; e >= 1; e--) n.push(`  STORY "${te[e]}"  HEIGHT ${h(r(U[e] - U[e - 1]))} MASTERSTORY "Yes"  `);
  U.length > 0 && n.push(`  STORY "Base"  ELEV ${U[0]} `), n.push(""), M.some((e) => e.length === 4), n.push("$ DIAPHRAGM NAMES"), n.push('  DIAPHRAGM "D1"    TYPE RIGID'), n.push(""), n.push("$ MATERIAL PROPERTIES");
  const we = /* @__PURE__ */ new Set();
  (_a = p.elasticities) == null ? void 0 : _a.forEach((e) => we.add(e));
  const he = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map();
  let lt = 0, ft = 0;
  const St = 980665e-8, ke = /* @__PURE__ */ new Map();
  if (p.densities && p.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    p.densities.forEach((t, o) => {
      var _a2;
      const a = (_a2 = p.elasticities) == null ? void 0 : _a2.get(o);
      a !== void 0 && (e.has(a) || e.set(a, []), e.get(a).push(t));
    }), e.forEach((t, o) => {
      const a = t.reduce(($, I) => $ + I, 0) / t.length, E = a > 100 ? a * St : a * 9.80665;
      ke.set(o, E);
    });
  }
  for (const e of we) {
    const t = e >= 1e8, o = t ? `Steel_${++lt}` : `Conc_${++ft}`;
    he.set(e, o), Oe.set(e, t);
    const a = ke.get(e) ?? (t ? 76.97 : 24), E = s(e), $ = m(a), I = (() => {
      var _a2;
      const W = l.elementInputs.poissonsRatios;
      if (W) {
        for (const [F, D] of W) if ((((_a2 = l.elementInputs.elasticities) == null ? void 0 : _a2.get(F)) ?? 0) === e) return D;
      }
    })(), A = I !== void 0 ? I : t ? 0.3 : 0.2, P = t ? 117e-7 : 1e-5;
    if (t) {
      n.push(`  MATERIAL  "${o}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${f($)}`), n.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${h(E)}  U ${A}  A ${P}`);
      const W = 345e3, F = 45e4;
      n.push(`  MATERIAL  "${o}"  FY ${h(s(W))}  FU ${h(s(F))}  FYE ${h(s(W * 1.1))}  FUE ${h(s(F * 1.1))}`);
    } else n.push(`  MATERIAL  "${o}"    TYPE "Concrete"    WEIGHTPERVOLUME ${f($)}`), n.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${h(E)}  U ${A}  A ${P}`), n.push(`  MATERIAL  "${o}"    FC ${h(s(24e3))}`);
  }
  n.push(""), n.push("$ FRAME SECTIONS");
  const ue = /* @__PURE__ */ new Set(), Ne = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), se = 0.05;
  M.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g, _h, _i, _j;
    if (e.length !== 2) return;
    const o = (_a2 = p.sectionShapes) == null ? void 0 : _a2.get(t), a = ((_b2 = p.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, E = he.get(a) || "Conc_1", $ = Oe.get(a) ?? a >= 1e8, I = ((_c2 = p.areas) == null ? void 0 : _c2.get(t)) ?? 0, A = ((_d2 = p.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, P = ((_e3 = p.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, W = ((_f2 = p.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let F = (o == null ? void 0 : o.type) || "rect", D = (o == null ? void 0 : o.h) ?? 0, b = (o == null ? void 0 : o.b) ?? 0, v = (o == null ? void 0 : o.d) ?? 0;
    const X = (o == null ? void 0 : o.tf) ?? 0, oe = (o == null ? void 0 : o.tw) ?? 0;
    if (!o && D <= 0 && b <= 0 && v <= 0 && I > 0 && A > 0 && P > 0) {
      const q = (_g = p.cantos) == null ? void 0 : _g.get(t), pe = (_h = p.anchos) == null ? void 0 : _h.get(t);
      D = q && q > 0 ? q : Math.sqrt(12 * A / I), b = pe && pe > 0 ? pe : I / D, (!isFinite(D) || D < se) && (D = se), (!isFinite(b) || b < se) && (b = se), F = "general";
    } else D <= 0 && b <= 0 && v <= 0 && I > 0 && (A > 0 ? (D = Math.sqrt(12 * A / I), b = I / D) : D = b = Math.sqrt(I), (!isFinite(D) || D < se) && (D = se), (!isFinite(b) || b < se) && (b = se), F = "rect");
    D <= 0 && b <= 0 && v <= 0 && (D = 0.3, b = 0.3, F = "rect");
    const me = (o == null ? void 0 : o.name) ? `NAME_${o.name}` : `${F}_${h(D)}_${h(b)}_${h(v)}_${h(X)}_${h(oe)}_${E}`;
    (o == null ? void 0 : o.name) && !Te.has(me) && Te.set(me, o.name);
    let K = Te.get(me);
    if (!K) {
      const q = $ ? "S" : "C";
      F === "general" ? K = `${q}_G${ue.size + 1}` : F === "rect" ? K = `${q}_R${Math.round(b * 100)}x${Math.round(D * 100)}` : F === "circ" ? K = `${q}_C_D${Math.round(v * 100)}` : F === "I" ? K = `${q}_I${Math.round(D * 100)}x${Math.round(b * 100)}` : F === "HSS" ? K = `${q}_HSS${Math.round(b * 100)}x${Math.round(D * 100)}x${Math.round(oe * 1e3)}` : K = `${q}_Sec${ue.size + 1}`, Te.set(me, K);
    }
    if (Ne.set(t, K), ue.has(K)) return;
    ue.add(K);
    const mt = I > 0 && A > 0 && P > 0;
    let V;
    F === "general" || mt ? V = "General" : F === "I" ? V = "Steel I/Wide Flange" : F === "HSS" ? V = "Steel Tube" : F === "CFT" ? V = "Filled Steel Tube" : F === "pipe" ? V = "Steel Pipe" : F === "L" ? V = "Steel Angle" : F === "C" ? V = "Steel Channel" : F === "2C" ? V = "Steel Double Channel" : F === "circ" ? V = "Concrete Circle" : V = "Concrete Rectangular";
    let ae = `  FRAMESECTION  "${K}"  MATERIAL "${E}"  SHAPE "${V}"`;
    if (V === "General") {
      const q = ((_i = p.shearAreasZ) == null ? void 0 : _i.get(t)) || I * 5 / 6, pe = ((_j = p.shearAreasY) == null ? void 0 : _j.get(t)) || I * 5 / 6;
      ae += `  D ${h(r(D))} B ${h(r(b))} AREA ${f(I * 1e6)} AS2 ${f(q * 1e6)} AS3 ${f(pe * 1e6)} I33 ${f(A * 1e12)} I22 ${f(P * 1e12)} TORSION ${f((W || A + P) * 1e12)} S33POS ${f(2 * A / D * 1e9)} S33NEG ${f(2 * A / D * 1e9)} S22POS ${f(2 * P / b * 1e9)} S22NEG ${f(2 * P / b * 1e9)} Z33 ${f(2 * A / D * 1e9)} Z22 ${f(2 * P / b * 1e9)} R33 ${f(Math.sqrt(A / I) * 1e3)} R22 ${f(Math.sqrt(P / I) * 1e3)} `, n.push(ae);
      return;
    }
    D && (ae += `  D ${h(r(D))}`), b && (ae += `  B ${h(r(b))}`), v && !D && (ae += `  D ${h(r(v))}`), X && (ae += `  TF ${h(r(X))}`), oe && (ae += `  TW ${h(r(oe))}`), n.push(ae);
  }), n.push("");
  const $e = /* @__PURE__ */ new Map();
  let At = 0;
  c.forEach((e) => {
    const { dz: t } = Ue(e[2]), o = `${h(e[0])},${h(e[1])},${t}`;
    $e.has(o) || $e.set(o, `${++At}`);
  }), n.push("$ POINT COORDINATES");
  for (const [e, t] of $e) {
    const [o, a, E] = e.split(",").map(Number);
    n.push(E ? `  POINT "${t}"  ${h(r(o))} ${h(r(a))} ${h(r(E))} ` : `  POINT "${t}"  ${h(r(o))} ${h(r(a))} `);
  }
  n.push("");
  const ne = (e) => {
    const t = c[e], { story: o, dz: a } = Ue(t[2]), E = `${h(t[0])},${h(t[1])},${a}`;
    return { pt: $e.get(E) || "1", story: o };
  }, xe = (e) => {
    var _a2, _b2, _c2, _d2, _e3;
    const t = [], o = (_a2 = l.propertyModifiers) == null ? void 0 : _a2.get(e);
    o && o.some((A) => Math.abs(A - 1) > 1e-9) && t.push(`PROPMODIFIERS "${o.map((A) => h(A)).join(" ")}"`);
    const a = (_b2 = p.localAngles) == null ? void 0 : _b2.get(e);
    a !== void 0 && isFinite(a) && Math.abs(a) > 1e-9 && t.push(`ANG ${h(a)}`);
    const E = (_c2 = p.momentReleases) == null ? void 0 : _c2.get(e);
    if (E && E.some((A) => A)) {
      const A = [];
      E.length === 12 ? (E[0] && A.push("PI"), E[1] && A.push("V2I"), E[2] && A.push("V3I"), E[3] && A.push("TI"), E[4] && A.push("M2I"), E[5] && A.push("M3I"), E[6] && A.push("PJ"), E[7] && A.push("V2J"), E[8] && A.push("V3J"), E[9] && A.push("TJ"), E[10] && A.push("M2J"), E[11] && A.push("M3J")) : E.length === 6 && (E[0] && A.push("TI"), E[1] && A.push("M2I"), E[2] && A.push("M3I"), E[3] && A.push("TJ"), E[4] && A.push("M2J"), E[5] && A.push("M3J")), A.length > 0 && t.push(`RELEASE "${A.join(" ")}"`);
    }
    const $ = (_d2 = p.insertionPoints) == null ? void 0 : _d2.get(e);
    $ && (Math.abs($[0]) > 1e-9 || Math.abs($[1]) > 1e-9) && t.push(`LATEROFFSET ${h(r($[0]))} TRANSOFFSET ${h(r($[1]))}`);
    const I = (_e3 = p.rigidOffsets) == null ? void 0 : _e3.get(e);
    return I && (Math.abs(I[0]) > 1e-9 || Math.abs(I[1]) > 1e-9) && t.push(`LENGTHOFFI ${h(I[0])} LENGTHOFFJ ${h(I[1])} RIGIDZONE 0.5`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, ge = [], He = /* @__PURE__ */ new Set(), Ie = /* @__PURE__ */ new Map();
  M.forEach((e, t) => {
    if (e.length !== 2) return;
    const o = ct(c, e);
    if (o === "BEAM") return;
    const a = c[e[0]][2] <= c[e[1]][2] ? e[0] : e[1], E = c[e[0]][2] <= c[e[1]][2] ? e[1] : e[0];
    if (Math.abs(c[a][0] - c[E][0]) > 1e-6 || Math.abs(c[a][1] - c[E][1]) > 1e-6) return;
    const $ = ne(a), I = Ne.get(t) || `Sec_${t}`, A = `${$.pt}_${I}_${o}`;
    Ie.has(A) || Ie.set(A, []), Ie.get(A).push({ i: t, bot: a, top: E, zBot: h(c[a][2]), zTop: h(c[E][2]), planPt: $.pt, secName: I, type: o });
  }), Ie.forEach((e, t) => {
    e.sort((a, E) => a.zBot - E.zBot);
    let o = 0;
    for (let a = 1; a <= e.length; a++) if (a === e.length || Math.abs(e[a].zBot - e[a - 1].zTop) > 1e-6) {
      const $ = e.slice(o, a);
      $.length >= 1 && (ge.push({ elemIndices: $.map((I) => I.i), planPt: $[0].planPt, bottomNodeIdx: $[0].bot, topNodeIdx: $[$.length - 1].top, secName: $[0].secName, type: $[0].type, nSegments: $.length }), $.forEach((I) => He.add(I.i))), o = a;
    }
  }), n.push("$ LINE CONNECTIVITIES");
  const We = [], ze = (e) => te.indexOf(e), Je = (e, t, o, a, E, $, I) => {
    const A = ne(a), P = ne(o), W = ze(A.story) - ze(P.story);
    W <= 0 ? n.push(`  LINE  "${e}"  BEAM  "${P.pt}"  "${A.pt}"  0`) : n.push(`  LINE  "${e}"  ${t}  "${P.pt}"  "${A.pt}"  ${W}`), We.push(`  LINEASSIGN  "${e}"  "${A.story}"  SECTION "${E}" ${$} MINNUMSTA ${I} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  ge.forEach((e, t) => {
    const o = xe(e.elemIndices[0]);
    Je(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, o, e.nSegments);
  }), M.forEach((e, t) => {
    if (e.length !== 2 || He.has(t)) return;
    const o = ct(c, e), a = Ne.get(t) || `Sec_${t}`, E = xe(t), $ = c[e[0]][2] <= c[e[1]][2] ? e[0] : e[1], I = c[e[0]][2] <= c[e[1]][2] ? e[1] : e[0];
    Je(`E${t + 1}`, o === "BEAM" ? "BRACE" : o, $, I, a, E, 3);
  }), n.push("");
  const Se = l.weightMode ?? "auto", Ae = /* @__PURE__ */ new Set();
  n.push("$ POINT ASSIGNS"), (_b = d.supports) == null ? void 0 : _b.forEach((e, t) => {
    const o = [];
    if (e[0] && o.push("UX"), e[1] && o.push("UY"), e[2] && o.push("UZ"), e[3] && o.push("RX"), e[4] && o.push("RY"), e[5] && o.push("RZ"), o.length > 0) {
      const a = ne(t), E = a.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      n.push(`  POINTASSIGN  "${a.pt}"  "${a.story}"  RESTRAINT "${o.join(" ")}" ${E} `), Ae.add(`${a.pt}@${a.story}`);
    }
  });
  const ve = (l.diaphragm ?? "auto") !== "none";
  ve && ge.forEach((e) => {
    const t = ne(e.topNodeIdx), o = `${t.pt}@${t.story}`;
    !Ae.has(o) && t.story !== "Base" && (n.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), Ae.add(o));
  }), Se === "manual" && d.loads && d.loads.forEach((e, t) => {
    const [o, a, E] = x(t, e);
    if (Math.abs(o) < 1e-10 && Math.abs(a) < 1e-10 && Math.abs(E) < 1e-10) return;
    const $ = ne(t), I = `${$.pt}@${$.story}`;
    Ae.has(I) || (n.push(`  POINTASSIGN  "${$.pt}"  "${$.story}"  DIAPH "DISCONNECTED"  `), Ae.add(I));
  }), n.push(""), n.push("$ LINE ASSIGNS"), We.forEach((e) => n.push(e)), n.push("");
  const Z = [], _e = p.areaObjects, je = /* @__PURE__ */ new Set(), Ze = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map();
  _e == null ? void 0 : _e.forEach((e) => e.cells.forEach((t) => je.add(t))), M.forEach((e, t) => {
    if (e.length === 4 || e.length === 3) {
      const o = c[e[0]], a = c[e[1]], E = c[e[2]], $ = [a[0] - o[0], a[1] - o[1], a[2] - o[2]], I = [E[0] - o[0], E[1] - o[1], E[2] - o[2]], A = $[1] * I[2] - $[2] * I[1], P = $[2] * I[0] - $[0] * I[2], W = $[0] * I[1] - $[1] * I[0], F = Math.sqrt(A * A + P * P + W * W), D = F > 1e-10 && Math.abs(W) / F < 0.5;
      Z.push({ idx: t, el: e, isWall: D }), je.has(t) && Z.pop();
    }
  });
  const Ee = (() => {
    for (const [e, t] of Oe) if (!t) return he.get(e);
    return he.values().next().value || "Conc_1";
  })();
  _e == null ? void 0 : _e.forEach((e, t) => {
    Z.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && Ze.set(e.cells[0], e.q), e.ang !== void 0 && Xe.set(e.cells[0], e.ang);
  });
  const Re = "DECK";
  let Me = false;
  const Le = [], Ke = (e) => {
    const t = l.elementInputs.plateFormulations, o = Z.find((E) => E.isWall === e), a = t && o ? t.get(o.idx) : void 0;
    return a === 2 ? "Membrane" : a === 1 ? "ShellThin" : "ShellThick";
  }, Ve = (e, t) => {
    const o = l.elementInputs.thicknesses, a = Z.find((E) => E.isWall === e);
    return (a ? o == null ? void 0 : o.get(a.idx) : void 0) ?? (o == null ? void 0 : o.values().next().value) ?? t;
  }, qe = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], De = (e) => {
    var _a2;
    const o = (_a2 = p.shellModifiers) == null ? void 0 : _a2.get(e);
    if (o && o.length >= 8) return o.slice(0, 8);
    const a = p.membraneModifiers, E = p.bendingModifiers, $ = a == null ? void 0 : a.get(e), I = E == null ? void 0 : E.get(e);
    if ($ === void 0 && I === void 0) return null;
    const A = $ ?? 1, P = I ?? 1;
    return [A, A, A, P, P, P, P, P];
  }, Qe = (e, t) => {
    const o = Z.filter((I) => I.isWall === t), a = /* @__PURE__ */ new Map();
    for (const I of o) {
      const A = De(I.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      a.set(A.map((P) => h(P)).join(","), A);
    }
    if (a.size === 0) return "";
    a.size > 1 && console.warn(`[e2k] "${e}": ${a.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const E = a.values().next().value, $ = qe.map((I, A) => Math.abs(E[A] - 1) > 1e-9 ? `${I} ${h(E[A])}` : "").filter(Boolean);
    return $.length ? `  SHELLPROP  "${e}"  ${$.join(" ")} ` : "";
  }, et = l.elementInputs.thicknesses, tt = l.elementInputs.plateFormulations, Ce = (e) => {
    const t = et == null ? void 0 : et.get(e.idx), o = tt == null ? void 0 : tt.get(e.idx), a = De(e.idx);
    return `${e.isWall ? "W" : "F"}|${t ?? "-"}|${o ?? "-"}|${a ? a.map((E) => h(E)).join(",") : "-"}`;
  }, de = /* @__PURE__ */ new Map();
  let pt = 0, ht = 0;
  for (const e of Z) {
    const t = Ce(e);
    if (de.has(t)) continue;
    const o = e.isWall, a = o ? ++ht : ++pt;
    de.set(t, { nombre: (o ? "Muro" : "Losa") + (a === 1 ? "" : String(a)), isWall: o, t: et == null ? void 0 : et.get(e.idx), pf: tt == null ? void 0 : tt.get(e.idx) });
  }
  const Pe = (e) => {
    var _a2;
    return ((_a2 = de.get(Ce(e))) == null ? void 0 : _a2.nombre) ?? (e.isWall ? "Muro" : "Losa");
  }, st = (e) => e === 2 ? "Membrane" : e === 1 ? "ShellThin" : "ShellThick", ut = (e, t) => {
    const o = Z.find(($) => Ce($) === t), a = o ? De(o.idx) ?? null : null;
    if (!a) return "";
    const E = qe.map(($, I) => Math.abs(a[I] - 1) > 1e-9 ? `${$} ${h(a[I])}` : "").filter(Boolean);
    return E.length ? `  SHELLPROP  "${e}"  ${E.join(" ")} ` : "";
  }, nt = [...de.entries()].filter(([, e]) => /\d$/.test(e.nombre));
  if (Z.some((e) => !e.isWall)) {
    const e = p.bendingModifiers, t = p.shellModifiers;
    Me = (() => {
      for (const E of Z) {
        if (E.isWall) continue;
        const $ = t == null ? void 0 : t.get(E.idx);
        if ($ && Math.abs($[3]) < 1e-9 && Math.abs($[4]) < 1e-9) return true;
        const I = e == null ? void 0 : e.get(E.idx);
        if (I !== void 0 && Math.abs(I) < 1e-9) return true;
      }
      return false;
    })();
    const o = Ve(false, 0.15);
    Me ? (n.push("$ DECK PROPERTIES"), n.push(`  SHELLPROP  "${Re}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${Ee}"  DECKMATERIAL "${Ee}"  DECKSLABDEPTH ${f(o * 65 / 120)} DECKRIBDEPTH ${f(o * 55 / 120)} DECKRIBWIDTHTOP ${f(o * 150 / 120)} DECKRIBWIDTHBOTTOM ${f(o * 100 / 120)} DECKRIBSPACING ${f(o * 200 / 120)} DECKSHEARTHICKNESS ${f(o * 0.76 / 120)} DECKUNITWEIGHT ${f(C(0.11012))} SHEARSTUDDIAM ${f(o * 19 / 120)} SHEARSTUDHEIGHT ${f(o * 100 / 120)} SHEARSTUDFU 400 `)) : (n.push("$ SLAB PROPERTIES"), n.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${Ee}"  MODELINGTYPE "${Ke(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${h(r(o))} `));
    const a = Qe(Me ? Re : "Losa", false);
    a && n.push(a), n.push("");
  }
  if (Z.some((e) => e.isWall)) {
    n.push("$ WALL PROPERTIES");
    const e = Ve(true, 0.2), t = Ke(true);
    n.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${Ee}"  MODELINGTYPE "${t}"  WALLTHICKNESS ${h(r(e))} `);
    const o = Qe("Muro", true);
    o && n.push(o), n.push("");
  }
  if (nt.length) {
    n.push("$ OTRAS SECCIONES DE CASCARA");
    for (const [e, t] of nt) {
      const o = t.t ?? (t.isWall ? 0.2 : 0.15);
      n.push(t.isWall ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Wall"  MATERIAL "${Ee}"  MODELINGTYPE "${st(t.pf)}"  WALLTHICKNESS ${h(r(o))} ` : `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Slab"  MATERIAL "${Ee}"  MODELINGTYPE "${st(t.pf)}"  SLABTYPE "Slab"  SLABTHICKNESS ${h(r(o))} `);
      const a = ut(t.nombre, e);
      a && n.push(a);
    }
    n.push("");
  }
  if (Z.length > 0) {
    n.push("$ AREA CONNECTIVITIES");
    const e = [];
    Z.forEach((t, o) => {
      const { el: a, isWall: E } = t, $ = E ? `W${o + 1}` : `F${o + 1}`, I = E ? "PANEL" : "FLOOR", A = a.map((P) => ne(P));
      if (E) {
        const P = (v) => te.indexOf(v);
        if (new Set(A.map((v) => v.pt)).size === 4) {
          const v = Math.max(...A.map((oe) => P(oe.story))), X = A.map((oe) => v - P(oe.story));
          n.push(`  AREA "${$}"  ${I}  4  "${A[0].pt}"  "${A[1].pt}"  "${A[2].pt}"  "${A[3].pt}"  ${X.join("  ")}  `), e.push(`  AREAASSIGN  "${$}"  "${te[v]}"  SECTION "${Pe(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const F = c[a[0]][2] <= c[a[2]][2] ? 0 : 2, D = c[a[1]][2] <= c[a[3]][2] ? 1 : 3;
        n.push(`  AREA "${$}"  ${I}  4  "${A[F].pt}"  "${A[D].pt}"  "${A[D].pt}"  "${A[F].pt}"  1  1  0  0  `);
        const b = A[F === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${$}"  "${b}"  SECTION "${Pe(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        const P = A.length, W = (X) => te.indexOf(X), F = Math.max(...A.map((X) => W(X.story))), D = A.map((X) => F - W(X.story)), b = te[F] ?? A[0].story;
        n.push(`  AREA "${$}"  ${I}  ${P}  ` + A.map((X) => `"${X.pt}"`).join("  ") + "  " + D.join("  ") + "  ");
        const v = Xe.get(t.idx) ?? (L == null ? void 0 : L.get(t.idx));
        e.push(Me ? `  AREAASSIGN  "${$}"  "${b}"  SECTION "${Re}"  ANG ${h(v ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${$}"  "${b}"  SECTION "${Pe(t)}" ${ve ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Le.push({ name: $, story: b, idx: t.idx });
      }
    }), n.push(""), n.push("$ AREA ASSIGNS"), e.forEach((t) => n.push(t)), n.push("");
  }
  const Tt = Se === "manual" ? 0 : 1;
  n.push("$ LOAD PATTERNS");
  const ie = ((_c = l.loadPatterns) == null ? void 0 : _c.length) ? l.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: Tt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of ie) {
    let t;
    e.type === "Dead" ? t = Se === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), n.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  n.push("");
  const Fe = l.loadPatternDestino && ie.some((e) => e.name === l.loadPatternDestino) ? l.loadPatternDestino : ((_d = ie.find((e) => e.type === "Dead")) == null ? void 0 : _d.name) ?? ie[0].name, ye = [], Ye = /* @__PURE__ */ new Map(), ot = (e, t) => {
    const o = Ye.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let a = 0; a < 6; a++) o[a] += t[a] ?? 0;
    Ye.set(e, o);
  }, $t = Fe === (((_e2 = ie.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? ie[0].name), It = Se === "manual" || !$t;
  if (d.loads && d.loads.size > 0 && d.loads.forEach((e, t) => {
    const [o, a, E] = x(t, e);
    ot(t, [o, a, It ? E : 0, e[3] ?? 0, e[4] ?? 0, e[5] ?? 0]);
  }), d.moments && d.moments.size > 0 && d.moments.forEach((e, t) => {
    ot(t, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), Ye.forEach((e, t) => {
    if (e.every((a) => Math.abs(a) <= 1e-10)) return;
    const o = ne(t);
    ye.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "FORCE"  LC "${Fe}"  FX ${f(B(e[0]))}  FY ${f(B(e[1]))}  FZ ${f(B(e[2]))}  MX ${f(i(e[3]))}  MY ${f(i(e[4]))}  MZ ${f(i(e[5]))}`);
  }), ye.length > 0 && (n.push("$ POINT OBJECT LOADS"), ye.forEach((e) => n.push(e)), n.push("")), u && u.size > 0 && Le.length > 0) {
    const e = [];
    for (const t of Le) {
      const o = Ze.get(t.idx), a = o !== void 0 ? { value: o } : u.get(t.idx);
      if (!a || Math.abs(a.value) < 1e-12) continue;
      const E = a.dir ?? "GRAV", $ = E === "GRAV" ? Math.abs(a.value) : a.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${E}"  LC "${a.pattern ?? Fe}"  FVAL ${f(C($))}`);
    }
    e.length > 0 && (n.push("$ SHELL OBJECT LOADS"), e.forEach((t) => n.push(t)), n.push(""));
  }
  n.push("$ ANALYSIS OPTIONS"), n.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), n.push('  PDELTA  METHOD "NONE"  '), n.push("");
  const Be = Se === "manual";
  n.push("$ MASS SOURCE"), n.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${Be ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${Be ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), Be || n.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), n.push(""), n.push("$ LOAD CASES");
  const Mt = ((_f = l.loadCases) == null ? void 0 : _f.length) ? l.loadCases : ie.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of Mt) {
    n.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) n.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  const dt = l.modalModes ?? 12;
  n.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), n.push(`  LOADCASE "Modal"  MAXMODES ${dt}  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `), n.push("");
  const be = l.loadCombinations;
  if (be && be.length) {
    n.push("$ LOAD COMBINATIONS");
    for (const e of be) {
      n.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) n.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    n.push("");
  }
  return n.push("  END"), n.push("$ END OF MODEL FILE"), n.join(`\r
`);
}
function ct(l, c) {
  const M = l[c[0]], d = l[c[1]], p = Math.abs(d[2] - M[2]), g = Math.sqrt((d[0] - M[0]) ** 2 + (d[1] - M[1]) ** 2), Y = p > g * 0.5;
  return Y && g > 0.01 ? "BRACE" : Y ? "COLUMN" : "BEAM";
}
export {
  Yt as a,
  Bt as e,
  yt as p
};
