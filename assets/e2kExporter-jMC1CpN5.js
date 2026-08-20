function m(S) {
  return S && parseFloat(S) || 0;
}
function Xe(S) {
  const i = /* @__PURE__ */ new Map(), I = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let $;
  for (; ($ = I.exec(S)) !== null; ) i.set($[1], $[2] !== void 0 ? $[2] : $[3]);
  return i;
}
function ht(S) {
  const i = S.split(/\r?\n/);
  return i.some(($) => $.trim().startsWith("TABLE:")) ? ct(i) : it(i);
}
function ct(S) {
  var _a, _b, _c, _d, _e, _f;
  const i = [];
  let I = "";
  for (const u of S) {
    const r = u.trimEnd();
    r.endsWith("_") ? I += r.slice(0, -1) + " " : (I += r, i.push(I), I = "");
  }
  I && i.push(I);
  const $ = { force: "KN", length: "m" };
  let f = "UX,UY,UZ,RX,RY,RZ";
  const R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), L = [], k = [], w = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), j = [];
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
    const h = Xe(r);
    switch (n) {
      case "PROGRAM CONTROL": {
        const E = h.get("CurrUnits");
        if (E) {
          const l = E.split(",").map((C) => C.trim());
          l[0] && ($.force = l[0]), l[1] && ($.length = l[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const E = h.get("Material");
        E && !R.has(E) && R.set(E, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const E = h.get("Material");
        if (E) {
          const l = R.get(E) || { E: 0, nu: 0, G: 0 };
          l.E = m(h.get("E1")), l.G = m(h.get("G12")), l.nu = m(h.get("U12")), l.density = m(h.get("UnitMass")), R.set(E, l);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const E = h.get("Material");
        E && R.has(E) && (R.get(E).fy = m(h.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const E = h.get("SectionName");
        E && F.set(E, { material: h.get("Material") || "", shape: h.get("Shape") || "Rectangular", D: m(h.get("t3")), B: m(h.get("t2")), TF: m(h.get("tf")), TW: m(h.get("tw")), A: m(h.get("Area")), Iz: m(h.get("I33")), Iy: m(h.get("I22")), J: m(h.get("TorsConst")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const E = h.get("Section");
        E && J.set(E, { material: h.get("Material") || "", type: h.get("Type") || "Shell", thickness: m(h.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const E = h.get("Joint");
        if (E) {
          const l = m(h.get("XorR")), C = m(h.get("Y")), y = m(h.get("Z"));
          p.set(E, [l, C, y]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const E = h.get("Frame"), l = h.get("JointI"), C = h.get("JointJ");
        E && l && C && L.push({ name: E, j1: l, j2: C });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const E = h.get("Area");
        if (E) {
          const l = parseInt(h.get("NumJoints") || "4"), C = [];
          for (let y = 1; y <= l; y++) {
            const a = h.get(`Joint${y}`);
            a && C.push(a);
          }
          C.length >= 3 && k.push({ name: E, joints: C });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const E = h.get("Joint");
        if (E) {
          const l = [((_a = h.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = h.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = h.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = h.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = h.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = h.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          w.set(E, l);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const E = h.get("Frame"), l = h.get("AnalSect");
        E && l && x.set(E, l);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const E = h.get("Area"), l = h.get("Section");
        E && l && H.set(E, l);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const E = h.get("Joint");
        E && j.push({ joint: E, fx: m(h.get("F1")), fy: m(h.get("F2")), fz: m(h.get("F3")), mx: m(h.get("M1")), my: m(h.get("M2")), mz: m(h.get("M3")) });
        break;
      }
    }
  }
  return Ve($, f, R, F, J, p, L, k, w, x, H, j);
}
function it(S) {
  const i = { force: "KN", length: "m" };
  let I = "UX,UY,UZ,RX,RY,RZ";
  const $ = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), J = [], p = [], L = /* @__PURE__ */ new Map(), k = [];
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
    const r = Xe(u), h = u.split(/\s+/);
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
        const E = h[0];
        F.set(E, [m(r.get("X")), m(r.get("Y")), m(r.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const E = r.get("ADD"), l = r.get("DOF");
        if (E && l) {
          const C = l.split(","), y = [false, false, false, false, false, false];
          for (const a of C) {
            const t = a.toUpperCase();
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
          const a = r.get("M");
          a && (l.density = m(a));
        }
        break;
      }
      case "SHELL": {
        const E = h[0], l = r.get("J");
        r.get("SEC"), l && p.push({ name: E, joints: l.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const E = r.get("NAME");
        E && R.set(E, { material: r.get("MAT") || "", type: r.get("TYPE") || "Shell", thickness: m(r.get("TH")) });
        break;
      }
      case "FRAME": {
        const E = h[0], l = r.get("J");
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
  return Ve(i, I, $, f, R, F, J, p, L, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), k);
}
function Ve(S, i, I, $, f, R, F, J, p, L, k, w) {
  var _a;
  const x = [], H = /* @__PURE__ */ new Map(), j = [];
  for (const [t, M] of R) H.set(t, j.length), x.push(t), j.push(M);
  const n = [], u = [], r = /* @__PURE__ */ new Map();
  for (const t of F) {
    const M = H.get(t.j1), O = H.get(t.j2);
    if (M !== void 0 && O !== void 0) {
      const B = n.length;
      n.push([M, O]), u.push(t.name);
      const d = L.get(t.name);
      d && r.set(B, d);
    }
  }
  const h = n.length;
  for (const t of J) {
    const M = t.joints.map((O) => H.get(O)).filter((O) => O !== void 0);
    if (M.length >= 3) {
      const O = n.length;
      n.push(M), u.push(t.name);
      const B = k.get(t.name);
      B && r.set(O, B);
    }
  }
  const E = n.length - h, l = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, C = /* @__PURE__ */ new Map(), y = I.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let t = 0; t < n.length; t++) {
    const M = r.get(t), O = M ? $.get(M) : null, B = M ? f.get(M) : null;
    if (O || n[t].length === 2) {
      const d = O || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, z = I.get(d.material) || y, W = z.E || y.E, q = z.nu || 0.3, re = z.G || W / (2 * (1 + q));
      l.elasticities.set(t, W), l.shearModuli.set(t, re), l.areas.set(t, d.A || d.D * d.B), l.momentsOfInertiaZ.set(t, d.Iz || d.B * d.D ** 3 / 12), l.momentsOfInertiaY.set(t, d.Iy || d.D * d.B ** 3 / 12), l.torsionalConstants.set(t, d.J || 0), l.densities.set(t, z.density || 0), ((_a = d.shape) == null ? void 0 : _a.includes("Wide Flange")) || d.shape === "I" ? C.set(t, { type: "I", b: d.B, h: d.D, name: M || "I-section" }) : C.set(t, { type: "rect", b: d.B, h: d.D });
    } else if (B) {
      const d = I.get(B.material) || y, z = d.E || y.E, W = d.nu || 0.2, q = d.G || z / (2 * (1 + W));
      l.elasticities.set(t, z), l.shearModuli.set(t, q), l.thicknesses.set(t, B.thickness), l.poissonsRatios.set(t, W), l.densities.set(t, d.density || 0);
    }
  }
  const a = { supports: /* @__PURE__ */ new Map(), forces: /* @__PURE__ */ new Map() };
  for (const [t, M] of p) {
    const O = H.get(t);
    O !== void 0 && a.supports.set(O, M);
  }
  for (const t of w) {
    const M = H.get(t.joint);
    if (M !== void 0) {
      const O = a.forces.get(M) || [0, 0, 0, 0, 0, 0];
      O[0] += t.fx, O[1] += t.fy, O[2] += t.fz, O[3] += t.mx, O[4] += t.my, O[5] += t.mz, a.forces.set(M, O);
    }
  }
  return { units: S, dof: i, materials: I, frameSections: $, shellSections: f, nodes: j, nodeNames: x, nodeNameToIdx: H, elements: n, elementNames: u, elementSections: r, nodeInputs: a, elementInputs: l, sectionShapes: C, info: { nNodes: j.length, nFrames: h, nShells: E, title: `SAP2000 (${h} frames, ${E} shells)` } };
}
function Tt(S) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: i, elements: I, nodeInputs: $, elementInputs: f } = S, R = S.units || { force: "KN", length: "m" }, F = S.title || "Awatif Model", J = [], p = (a) => J.push(a), L = () => J.push(" ");
  p(`File ${F}.$2k was saved on m/d/yy at h:mm:ss`), L(), p('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), p("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), L();
  const k = [], w = (a) => {
    var _a2, _b2, _c2, _d2;
    const t = ((_a2 = f.elasticities) == null ? void 0 : _a2.get(a)) || 0, M = (_b2 = f.poissonsRatios) == null ? void 0 : _b2.get(a), O = ((_c2 = f.shearModuli) == null ? void 0 : _c2.get(a)) || 0, B = M !== void 0 ? M : t > 0 && O > 0 ? Math.max(0, Math.min(0.5, t / (2 * O) - 1)) : 0.2, d = O > 0 ? O : t > 0 ? t / (2 * (1 + B)) : 0, z = ((_d2 = f.densities) == null ? void 0 : _d2.get(a)) || 0;
    return { E: t, nu: B, G: d, rho: z, key: `MAT_${Math.round(t)}_n${B.toFixed(4)}` };
  }, x = [];
  if (I.forEach((a, t) => {
    a.length === 2 ? k.push(t) : x.push(t);
  }), k.length > 0) {
    p('TABLE:  "CONNECTIVITY - FRAME"');
    for (const a of k) {
      const t = I[a];
      p(`   Frame=${a + 1}   JointI=${t[0] + 1}   JointJ=${t[1] + 1}   IsCurved=No`);
    }
    L();
  }
  if (x.length > 0) {
    p('TABLE:  "CONNECTIVITY - AREA"');
    for (const a of x) {
      const t = I[a], M = t.map((O, B) => `Joint${B + 1}=${O + 1}`).join("   ");
      p(`   Area=${a + 1}   NumJoints=${t.length}   ${M}`);
    }
    L();
  }
  p('TABLE:  "COORDINATE SYSTEMS"'), p("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), L(), p('TABLE:  "DATABASE FORMAT TYPES"'), p("   UnitsCurr=Yes   OverrideE=No"), L();
  const H = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
  for (const a of k) {
    const t = ((_a = f.areas) == null ? void 0 : _a.get(a)) || 0, M = ((_b = f.momentsOfInertiaZ) == null ? void 0 : _b.get(a)) || 0, O = ((_c = f.momentsOfInertiaY) == null ? void 0 : _c.get(a)) || 0, B = ((_d = f.torsionalConstants) == null ? void 0 : _d.get(a)) || 0;
    (_e = f.elasticities) == null ? void 0 : _e.get(a);
    const d = w(a).key, z = ((_f = f.shearAreasZ) == null ? void 0 : _f.get(a)) ?? 0, W = ((_g = f.shearAreasY) == null ? void 0 : _g.get(a)) ?? 0, q = `A${t.toPrecision(6)}_Iz${M.toPrecision(6)}_s${z.toPrecision(6)}_${W.toPrecision(6)}`;
    if (!H.has(q)) {
      let Ee = 0.3, ae = 0.3;
      t > 0 && M > 0 && (Ee = Math.sqrt(12 * M / t), ae = t / Ee), H.set(q, { A: t, Iz: M, Iy: O, J: B, b: ae, h: Ee, matKey: d, As2: z > 0 ? z : t * 5 / 6, As3: W > 0 ? W : t * 5 / 6 });
    }
    const re = [...H.keys()].indexOf(q) + 1;
    j.set(a, `SEC${re}`);
  }
  if (k.length > 0) {
    p('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const a of k) {
      const t = j.get(a) || "SEC1";
      p(`   Frame=${a + 1}   AutoSelect=N.A.   AnalSect=${t}   MatProp=Default`);
    }
    L();
  }
  if (H.size > 0) {
    p('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let a = 0;
    for (const [, t] of H) a++, p(`   SectionName=SEC${a}   Material=${t.matKey}   Shape=General   t3=${P(t.h)}   t2=${P(t.b)}   Area=${P(t.A)}   TorsConst=${P(t.J)}   I33=${P(t.Iz)}   I22=${P(t.Iy)}   I23=0   AS2=${P(t.As2)}   AS3=${P(t.As3)} _`), p("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    L();
  }
  {
    const a = k.filter((t) => {
      var _a2;
      const M = (_a2 = f.localAngles) == null ? void 0 : _a2.get(t);
      return M !== void 0 && isFinite(M) && Math.abs(M) > 1e-9;
    });
    if (a.length > 0) {
      p('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const t of a) p(`   Frame=${t + 1}   Angle=${P(f.localAngles.get(t))}   AdvanceAxes=No`);
      L();
    }
  }
  const n = !!S.layeredSection && x.length > 0, u = S.layeredSection, r = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
  if (!n) for (const a of x) {
    const t = ((_h = f.thicknesses) == null ? void 0 : _h.get(a)) || 0.1;
    (_i = f.elasticities) == null ? void 0 : _i.get(a);
    const M = w(a).key, O = ((_j = f.plateFormulations) == null ? void 0 : _j.get(a)) ?? 0, B = `t${t.toPrecision(6)}_f${O}`;
    r.has(B) || r.set(B, { t, matKey: M, formulacion: O });
    const d = [...r.keys()].indexOf(B) + 1;
    h.set(a, `SSEC${d}`);
  }
  if (x.length > 0) {
    p('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const a of x) {
      const t = n ? u.name : h.get(a) || "SSEC1";
      p(`   Area=${a + 1}   Section=${t}   MatProp=Default`);
    }
    if (L(), p('TABLE:  "AREA SECTION PROPERTIES"'), n) {
      const a = u, t = ((_k = a.layers[0]) == null ? void 0 : _k.material) || "MAT_DEFAULT";
      p(`   Section=${a.name}   Material=${t}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${P(a.totalThickness)}   BendThick=${P(a.totalThickness)}   Color=Magenta`);
    } else {
      let a = 0;
      for (const [, t] of r) {
        a++;
        const M = t.formulacion === 2 ? "Membrane" : t.formulacion === 1 ? "Shell-Thin" : "Shell-Thick";
        p(`   Section=SSEC${a}   Material=${t.matKey}   MatAngle=0   AreaType=Shell   Type=${M}   DrillDOF=Yes   Thickness=${P(t.t)}   BendThick=${P(t.t)}   Color=Cyan`);
      }
    }
    if (L(), n) {
      p('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const a = u;
      for (const t of a.layers) {
        const M = t.angle ?? 0, O = t.numIntPts ?? 3;
        p(`   Section=${a.name}   LayerName=${t.name}   Distance=${P(t.distance)}   Thickness=${P(t.thickness)}   Type=Shell   NumIntPts=${O}   Material=${t.material}   MatAngle=${P(M * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      L();
    }
  }
  p('TABLE:  "JOINT COORDINATES"');
  for (let a = 0; a < i.length; a++) {
    const t = i[a];
    p(`   Joint=${a + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${P(t[0])}   Y=${P(t[1])}   Z=${P(t[2])}   SpecialJt=No`);
  }
  if (L(), $.supports && $.supports.size > 0) {
    p('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [a, t] of $.supports) {
      if (!t.some((O) => O)) continue;
      const M = (O) => O ? "Yes" : "No";
      p(`   Joint=${a + 1}   U1=${M(t[0])}   U2=${M(t[1])}   U3=${M(t[2])}   R1=${M(t[3])}   R2=${M(t[4])}   R3=${M(t[5])}`);
    }
    L();
  }
  const E = S.selfWtMult ?? 1;
  p('TABLE:  "LOAD PATTERN DEFINITIONS"'), p(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${E}`), L(), p('TABLE:  "LOAD CASE DEFINITIONS"'), p('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), L(), p('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), p('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), L();
  const l = $.loads;
  if (l && l.size > 0) {
    p('TABLE:  "JOINT LOADS - FORCE"');
    for (const [a, t] of l) t.some((M) => Math.abs(M) > 1e-12) && p(`   Joint=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${P(t[0])}   F2=${P(t[1])}   F3=${P(t[2])}   M1=${P(t[3])}   M2=${P(t[4])}   M3=${P(t[5])}`);
    L();
  }
  const C = f.frameLoads;
  if (C && C.size > 0) {
    p('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [a, t] of C) {
      const M = I[a];
      if (!M || M.length !== 2) continue;
      const O = i[M[0]], B = i[M[1]], d = Math.hypot(B[0] - O[0], B[1] - O[1], B[2] - O[2]);
      ["X", "Y", "Z"].forEach((z, W) => {
        Math.abs(t[W]) < 1e-12 || p(`   Frame=${a + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${z}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${P(d)}   FOverLA=${P(t[W])}   FOverLB=${P(t[W])}`);
      });
    }
    L();
  }
  const y = /* @__PURE__ */ new Map();
  for (let a = 0; a < I.length; a++) {
    const { E: t, nu: M, G: O, rho: B, key: d } = w(a);
    y.has(d) || y.set(d, { E: t, nu: M, G: O, rho: B });
  }
  p('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [a] of y) p(`   Material=${a}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  L(), p('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [a, t] of y) p(`   Material=${a}   UnitWeight=${P(t.rho * 9.81)}   UnitMass=${P(t.rho)}   E1=${P(t.E)}   G12=${P(t.G)}   U12=${P(t.nu)}   A1=9.9E-06`);
  L(), p('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [a] of y) p(`   Material=${a}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return L(), p('TABLE:  "PROGRAM CONTROL"'), p(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${R.force}, ${R.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), L(), p("END TABLE DATA"), p(""), J.join(`\r
`);
}
function P(S) {
  return S === 0 || Math.abs(S) < 1e-15 ? "0" : Math.abs(S) >= 1e6 || Math.abs(S) < 1e-3 && Math.abs(S) > 0 ? S.toExponential(8) : parseFloat(S.toPrecision(10)).toString();
}
function rt(S, i, I = 0.05) {
  const $ = i.map(([f, R]) => `${(+f).toFixed(4)} ${(+R).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${S}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${I}  SPECTYPE "USER"  `, `  FUNCTION "${S}"  TIMEVAL "${$}"  `];
}
function Et(S) {
  const { name: i, func: I, modalCase: $ = "Modal", sfX: f = 9.81, sfY: R = 9.81 } = S, F = [`  LOADCASE "${i}"  TYPE  "Response Spectrum"  MODALCASE  "${$}"  `];
  return f && F.push(`  LOADCASE "${i}"  ACCEL  "U1"  FUNC  "${I}"  SF  ${f}  `), R && F.push(`  LOADCASE "${i}"  ACCEL  "U2"  FUNC  "${I}"  SF  ${R}  `), F;
}
function ve(S) {
  const { name: i = "Modal", ritz: I = false, nModes: $ = 12 } = S;
  return I ? [`  LOADCASE "${i}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${$} MINMODES  1 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${i}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${i}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${i}"  MAXMODES  ${$} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function ut(S) {
  var _a;
  const i = (_a = S.e2kModel) == null ? void 0 : _a.rawSections;
  let I = i && i.size > 0 ? St(i, S.e2kModel) : At(S);
  return S.seismicNEC && (I = lt(I, S.seismicNEC)), I;
}
function lt(S, i) {
  const I = S.includes(`\r
`) ? `\r
` : `
`, $ = S.split(/\r?\n/), f = i.name ?? "NEC", R = rt(f, i.points, i.dampRatio ?? 0.05), F = i.modalCase ?? "Modal", J = Et({ name: i.caseName ?? "Sismo NEC", func: f, modalCase: F, sfX: i.sfX, sfY: i.sfY });
  let p = [];
  const L = (k) => $.some((w) => k.test(w));
  if (i.modal) {
    const k = new RegExp(`^\\s*LOADCASE\\s+"${F}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let w = $.length - 1; w >= 0; w--) k.test($[w]) && $.splice(w, 1);
    p = ve({ name: F, ritz: !!i.modal.ritz, nModes: i.modal.nModes });
  } else L(new RegExp(`LOADCASE\\s+"${F}"\\s+TYPE\\s+"Modal`)) || (p = ve({ name: F }));
  return je($, "FUNCTIONS", R), je($, "LOAD CASES", [...p, ...J]), $.join(I);
}
function je(S, i, I) {
  const $ = S.findIndex((F) => F.trim() === `$ ${i}`);
  if ($ >= 0) {
    S.splice($ + 1, 0, ...I);
    return;
  }
  const f = S.findIndex((F) => F.trim() === "END"), R = f >= 0 ? f : S.length;
  S.splice(R, 0, `$ ${i}`, ...I, "");
}
function St(S, i) {
  const I = [], $ = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  I.push("$ File exported from Hekatan Struct Lineal (round-trip)"), I.push("");
  for (const f of $) {
    const R = S.get(f);
    if (!(!R || R.length === 0)) {
      I.push(`$ ${f}`);
      for (const F of R) I.push(F);
      I.push("");
    }
  }
  for (const [f, R] of S) if (!$.includes(f) && R.length !== 0) {
    I.push(`$ ${f}`);
    for (const F of R) I.push(F);
    I.push("");
  }
  return I.push("  END"), I.push("$ END OF MODEL FILE"), I.join(`\r
`);
}
function At(S) {
  var _a, _b, _c, _d, _e2, _f, _g, _h;
  const { nodes: i, elements: I, nodeInputs: $, elementInputs: f, title: R, units: F } = S, J = S.shellLoads ?? f.shellSurfaceLoads;
  let p;
  J instanceof Map && (p = /* @__PURE__ */ new Map(), J.forEach((e, s) => {
    p.set(s, typeof e == "number" ? { value: e } : e);
  }));
  const L = S.shellAngles ?? f.shellAngles, k = f.cargaDeArea, w = !!(p && p.size > 0), x = (e, s) => [s[0], s[1], s[2] - (w ? (k == null ? void 0 : k.get(e)) ?? 0 : 0)], H = "N", j = "MM", n = [], u = (e) => Math.round(e * 1e4) / 1e4, r = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), h = 1e3, E = 1e3, l = (e) => e * E, C = (e) => e * h, y = (e) => e * h, a = (e) => e * h * E, t = (e) => e * h / E ** 2, M = (e) => e * h / E ** 3, O = /* @__PURE__ */ new Date(), B = `${O.getMonth() + 1}/${O.getDate()}/${O.getFullYear()}  ${O.getHours()}:${String(O.getMinutes()).padStart(2, "0")}:${String(O.getSeconds()).padStart(2, "0")}`;
  n.push(`$ File   "Hekatan_export.e2k"  saved ${B} in ETABS 22.6.0`), n.push(""), n.push("$ PROGRAM INFORMATION"), n.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), n.push(""), n.push("$ CONTROLS"), n.push(`  UNITS  "${H}"  "${j}"  "C"  `), n.push('  TITLE1  "Hekatan Struct Lineal export"  '), R && n.push(`  TITLE2  "${R}"  `), n.push("  PREFERENCE  MERGETOL 0.001"), n.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), n.push("");
  const d = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  i.forEach((e) => {
    d.add(u(e[0])), z.add(u(e[1]));
  });
  const W = [...d].sort((e, s) => e - s), q = [...z].sort((e, s) => e - s);
  n.push("$ GRIDS"), n.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), W.forEach((e, s) => {
    const o = s < 26 ? String.fromCharCode(65 + s) : String.fromCharCode(65 + s % 26).repeat(Math.floor(s / 26) + 1);
    n.push(`  GRID "G1"  LABEL "${o}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), q.forEach((e, s) => {
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
    for (let c = 0; c < G.length; c++) if (G[c] >= s) return { story: ie.get(G[c]), dz: u(G[c] - s) };
    const o = G[G.length - 1];
    return { story: ie.get(o), dz: u(o - s) };
  };
  n.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = G.length - 1; e >= 1; e--) n.push(`  STORY "${ce[e]}"  HEIGHT ${u(l(G[e] - G[e - 1]))} MASTERSTORY "Yes"  `);
  G.length > 0 && n.push(`  STORY "Base"  ELEV ${G[0]} `), n.push(""), I.some((e) => e.length === 4), n.push("$ DIAPHRAGM NAMES"), n.push('  DIAPHRAGM "D1"    TYPE RIGID'), n.push(""), n.push("$ MATERIAL PROPERTIES");
  const ye = /* @__PURE__ */ new Set();
  (_a = f.elasticities) == null ? void 0 : _a.forEach((e) => ye.add(e));
  const fe = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
  let Ke = 0, qe = 0;
  const Qe = 980665e-8, Ye = /* @__PURE__ */ new Map();
  if (f.densities && f.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    f.densities.forEach((s, o) => {
      var _a2;
      const c = (_a2 = f.elasticities) == null ? void 0 : _a2.get(o);
      c !== void 0 && (e.has(c) || e.set(c, []), e.get(c).push(s));
    }), e.forEach((s, o) => {
      const c = s.reduce((N, g) => N + g, 0) / s.length, T = c > 100 ? c * Qe : c * 9.80665;
      Ye.set(o, T);
    });
  }
  for (const e of ye) {
    const s = e >= 1e8, o = s ? `Steel_${++Ke}` : `Conc_${++qe}`;
    fe.set(e, o), Ne.set(e, s);
    const c = Ye.get(e) ?? (s ? 76.97 : 24), T = t(e), N = M(c), g = (() => {
      var _a2;
      const _ = S.elementInputs.poissonsRatios;
      if (_) {
        for (const [Y, D] of _) if ((((_a2 = S.elementInputs.elasticities) == null ? void 0 : _a2.get(Y)) ?? 0) === e) return D;
      }
    })(), A = g !== void 0 ? g : s ? 0.3 : 0.2, U = s ? 117e-7 : 1e-5;
    if (s) {
      n.push(`  MATERIAL  "${o}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${r(N)}`), n.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${u(T)}  U ${A}  A ${U}`);
      const _ = 345e3, Y = 45e4;
      n.push(`  MATERIAL  "${o}"  FY ${u(t(_))}  FU ${u(t(Y))}  FYE ${u(t(_ * 1.1))}  FUE ${u(t(Y * 1.1))}`);
    } else n.push(`  MATERIAL  "${o}"    TYPE "Concrete"    WEIGHTPERVOLUME ${r(N)}`), n.push(`  MATERIAL  "${o}"    SYMTYPE "Isotropic"  E ${u(T)}  U ${A}  A ${U}`), n.push(`  MATERIAL  "${o}"    FC ${u(t(24e3))}`);
  }
  n.push(""), n.push("$ FRAME SECTIONS");
  const pe = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), Q = 0.05;
  I.forEach((e, s) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h2, _i, _j;
    if (e.length !== 2) return;
    const o = (_a2 = f.sectionShapes) == null ? void 0 : _a2.get(s), c = ((_b2 = f.elasticities) == null ? void 0 : _b2.get(s)) ?? 0, T = fe.get(c) || "Conc_1", N = Ne.get(c) ?? c >= 1e8, g = ((_c2 = f.areas) == null ? void 0 : _c2.get(s)) ?? 0, A = ((_d2 = f.momentsOfInertiaZ) == null ? void 0 : _d2.get(s)) ?? 0, U = ((_e3 = f.momentsOfInertiaY) == null ? void 0 : _e3.get(s)) ?? 0, _ = ((_f2 = f.torsionalConstants) == null ? void 0 : _f2.get(s)) ?? 0;
    let Y = (o == null ? void 0 : o.type) || "rect", D = (o == null ? void 0 : o.h) ?? 0, b = (o == null ? void 0 : o.b) ?? 0, v = (o == null ? void 0 : o.d) ?? 0;
    const Se = (o == null ? void 0 : o.tf) ?? 0, se = (o == null ? void 0 : o.tw) ?? 0;
    if (!o && D <= 0 && b <= 0 && v <= 0 && g > 0 && A > 0 && U > 0) {
      const V = (_g2 = f.cantos) == null ? void 0 : _g2.get(s), Ae = (_h2 = f.anchos) == null ? void 0 : _h2.get(s);
      D = V && V > 0 ? V : Math.sqrt(12 * A / g), b = Ae && Ae > 0 ? Ae : g / D, (!isFinite(D) || D < Q) && (D = Q), (!isFinite(b) || b < Q) && (b = Q), Y = "general";
    } else D <= 0 && b <= 0 && v <= 0 && g > 0 && (A > 0 ? (D = Math.sqrt(12 * A / g), b = g / D) : D = b = Math.sqrt(g), (!isFinite(D) || D < Q) && (D = Q), (!isFinite(b) || b < Q) && (b = Q), Y = "rect");
    D <= 0 && b <= 0 && v <= 0 && (D = 0.3, b = 0.3, Y = "rect");
    const Me = (o == null ? void 0 : o.name) ? `NAME_${o.name}` : `${Y}_${u(D)}_${u(b)}_${u(v)}_${u(Se)}_${u(se)}_${T}`;
    (o == null ? void 0 : o.name) && !he.has(Me) && he.set(Me, o.name);
    let Z = he.get(Me);
    if (!Z) {
      const V = N ? "S" : "C";
      Y === "general" ? Z = `${V}_G${pe.size + 1}` : Y === "rect" ? Z = `${V}_R${Math.round(b * 100)}x${Math.round(D * 100)}` : Y === "circ" ? Z = `${V}_C_D${Math.round(v * 100)}` : Y === "I" ? Z = `${V}_I${Math.round(D * 100)}x${Math.round(b * 100)}` : Y === "HSS" ? Z = `${V}_HSS${Math.round(b * 100)}x${Math.round(D * 100)}x${Math.round(se * 1e3)}` : Z = `${V}_Sec${pe.size + 1}`, he.set(Me, Z);
    }
    if (Oe.set(s, Z), pe.has(Z)) return;
    pe.add(Z);
    const at = g > 0 && A > 0 && U > 0;
    let X;
    Y === "general" || at ? X = "General" : Y === "I" ? X = "Steel I/Wide Flange" : Y === "HSS" ? X = "Steel Tube" : Y === "CFT" ? X = "Filled Steel Tube" : Y === "pipe" ? X = "Steel Pipe" : Y === "L" ? X = "Steel Angle" : Y === "C" ? X = "Steel Channel" : Y === "2C" ? X = "Steel Double Channel" : Y === "circ" ? X = "Concrete Circle" : X = "Concrete Rectangular";
    let ne = `  FRAMESECTION  "${Z}"  MATERIAL "${T}"  SHAPE "${X}"`;
    if (X === "General") {
      const V = ((_i = f.shearAreasZ) == null ? void 0 : _i.get(s)) || g * 5 / 6, Ae = ((_j = f.shearAreasY) == null ? void 0 : _j.get(s)) || g * 5 / 6;
      ne += `  D ${u(l(D))} B ${u(l(b))} AREA ${r(g * 1e6)} AS2 ${r(V * 1e6)} AS3 ${r(Ae * 1e6)} I33 ${r(A * 1e12)} I22 ${r(U * 1e12)} TORSION ${r((_ || A + U) * 1e12)} S33POS ${r(2 * A / D * 1e9)} S33NEG ${r(2 * A / D * 1e9)} S22POS ${r(2 * U / b * 1e9)} S22NEG ${r(2 * U / b * 1e9)} Z33 ${r(2 * A / D * 1e9)} Z22 ${r(2 * U / b * 1e9)} R33 ${r(Math.sqrt(A / g) * 1e3)} R22 ${r(Math.sqrt(U / g) * 1e3)} `, n.push(ne);
      return;
    }
    D && (ne += `  D ${u(l(D))}`), b && (ne += `  B ${u(l(b))}`), v && !D && (ne += `  D ${u(l(v))}`), Se && (ne += `  TF ${u(l(Se))}`), se && (ne += `  TW ${u(l(se))}`), n.push(ne);
  }), n.push("");
  const Te = /* @__PURE__ */ new Map();
  let et = 0;
  i.forEach((e) => {
    const { dz: s } = Fe(e[2]), o = `${u(e[0])},${u(e[1])},${s}`;
    Te.has(o) || Te.set(o, `${++et}`);
  }), n.push("$ POINT COORDINATES");
  for (const [e, s] of Te) {
    const [o, c, T] = e.split(",").map(Number);
    n.push(T ? `  POINT "${s}"  ${u(l(o))} ${u(l(c))} ${u(l(T))} ` : `  POINT "${s}"  ${u(l(o))} ${u(l(c))} `);
  }
  n.push("");
  const ee = (e) => {
    const s = i[e], { story: o, dz: c } = Fe(s[2]), T = `${u(s[0])},${u(s[1])},${c}`;
    return { pt: Te.get(T) || "1", story: o };
  }, Be = (e) => {
    var _a2, _b2, _c2, _d2, _e3;
    const s = [], o = (_a2 = S.propertyModifiers) == null ? void 0 : _a2.get(e);
    o && o.some((A) => Math.abs(A - 1) > 1e-9) && s.push(`PROPMODIFIERS "${o.map((A) => u(A)).join(" ")}"`);
    const c = (_b2 = f.localAngles) == null ? void 0 : _b2.get(e);
    c !== void 0 && isFinite(c) && Math.abs(c) > 1e-9 && s.push(`ANG ${u(c)}`);
    const T = (_c2 = f.momentReleases) == null ? void 0 : _c2.get(e);
    if (T && T.some((A) => A)) {
      const A = [];
      T.length === 12 ? (T[0] && A.push("PI"), T[1] && A.push("V2I"), T[2] && A.push("V3I"), T[3] && A.push("TI"), T[4] && A.push("M2I"), T[5] && A.push("M3I"), T[6] && A.push("PJ"), T[7] && A.push("V2J"), T[8] && A.push("V3J"), T[9] && A.push("TJ"), T[10] && A.push("M2J"), T[11] && A.push("M3J")) : T.length === 6 && (T[0] && A.push("TI"), T[1] && A.push("M2I"), T[2] && A.push("M3I"), T[3] && A.push("TJ"), T[4] && A.push("M2J"), T[5] && A.push("M3J")), A.length > 0 && s.push(`RELEASE "${A.join(" ")}"`);
    }
    const N = (_d2 = f.insertionPoints) == null ? void 0 : _d2.get(e);
    N && (Math.abs(N[0]) > 1e-9 || Math.abs(N[1]) > 1e-9) && s.push(`LATEROFFSET ${u(l(N[0]))} TRANSOFFSET ${u(l(N[1]))}`);
    const g = (_e3 = f.rigidOffsets) == null ? void 0 : _e3.get(e);
    return g && (Math.abs(g[0]) > 1e-9 || Math.abs(g[1]) > 1e-9) && s.push(`LENGTHOFFI ${u(g[0])} LENGTHOFFJ ${u(g[1])} RIGIDZONE 0.5`), s.length > 0 ? ` ${s.join(" ")} ` : "";
  }, ge = [], Ge = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Map();
  I.forEach((e, s) => {
    if (e.length !== 2) return;
    const o = Ze(i, e);
    if (o === "BEAM") return;
    const c = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], T = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    if (Math.abs(i[c][0] - i[T][0]) > 1e-6 || Math.abs(i[c][1] - i[T][1]) > 1e-6) return;
    const N = ee(c), g = Oe.get(s) || `Sec_${s}`, A = `${N.pt}_${g}_${o}`;
    ue.has(A) || ue.set(A, []), ue.get(A).push({ i: s, bot: c, top: T, zBot: u(i[c][2]), zTop: u(i[T][2]), planPt: N.pt, secName: g, type: o });
  }), ue.forEach((e, s) => {
    e.sort((c, T) => c.zBot - T.zBot);
    let o = 0;
    for (let c = 1; c <= e.length; c++) if (c === e.length || Math.abs(e[c].zBot - e[c - 1].zTop) > 1e-6) {
      const N = e.slice(o, c);
      N.length >= 1 && (ge.push({ elemIndices: N.map((g) => g.i), planPt: N[0].planPt, bottomNodeIdx: N[0].bot, topNodeIdx: N[N.length - 1].top, secName: N[0].secName, type: N[0].type, nSegments: N.length }), N.forEach((g) => Ge.add(g.i))), o = c;
    }
  }), n.push("$ LINE CONNECTIVITIES");
  const Ue = [], be = (e) => ce.indexOf(e), we = (e, s, o, c, T, N, g) => {
    const A = ee(c), U = ee(o), _ = be(A.story) - be(U.story);
    _ <= 0 ? n.push(`  LINE  "${e}"  BEAM  "${U.pt}"  "${A.pt}"  0`) : n.push(`  LINE  "${e}"  ${s}  "${U.pt}"  "${A.pt}"  ${_}`), Ue.push(`  LINEASSIGN  "${e}"  "${A.story}"  SECTION "${T}" ${N} MINNUMSTA ${g} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  ge.forEach((e, s) => {
    const o = Be(e.elemIndices[0]);
    we(`C${s + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, o, e.nSegments);
  }), I.forEach((e, s) => {
    if (e.length !== 2 || Ge.has(s)) return;
    const o = Ze(i, e), c = Oe.get(s) || `Sec_${s}`, T = Be(s), N = i[e[0]][2] <= i[e[1]][2] ? e[0] : e[1], g = i[e[0]][2] <= i[e[1]][2] ? e[1] : e[0];
    we(`E${s + 1}`, o === "BEAM" ? "BRACE" : o, N, g, c, T, 3);
  }), n.push("");
  const Ie = S.weightMode ?? "auto", le = /* @__PURE__ */ new Set();
  n.push("$ POINT ASSIGNS"), (_b = $.supports) == null ? void 0 : _b.forEach((e, s) => {
    const o = [];
    if (e[0] && o.push("UX"), e[1] && o.push("UY"), e[2] && o.push("UZ"), e[3] && o.push("RX"), e[4] && o.push("RY"), e[5] && o.push("RZ"), o.length > 0) {
      const c = ee(s), T = c.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      n.push(`  POINTASSIGN  "${c.pt}"  "${c.story}"  RESTRAINT "${o.join(" ")}" ${T} `), le.add(`${c.pt}@${c.story}`);
    }
  });
  const ke = (S.diaphragm ?? "auto") !== "none";
  ke && ge.forEach((e) => {
    const s = ee(e.topNodeIdx), o = `${s.pt}@${s.story}`;
    !le.has(o) && s.story !== "Base" && (n.push(`  POINTASSIGN  "${s.pt}"  "${s.story}"  DIAPH "D1"  `), le.add(o));
  }), Ie === "manual" && $.loads && $.loads.forEach((e, s) => {
    const [o, c, T] = x(s, e);
    if (Math.abs(o) < 1e-10 && Math.abs(c) < 1e-10 && Math.abs(T) < 1e-10) return;
    const N = ee(s), g = `${N.pt}@${N.story}`;
    le.has(g) || (n.push(`  POINTASSIGN  "${N.pt}"  "${N.story}"  DIAPH "DISCONNECTED"  `), le.add(g));
  }), n.push(""), n.push("$ LINE ASSIGNS"), Ue.forEach((e) => n.push(e)), n.push("");
  const te = [], xe = f.areaObjects, He = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map();
  xe == null ? void 0 : xe.forEach((e) => e.cells.forEach((s) => He.add(s))), I.forEach((e, s) => {
    if (e.length === 4) {
      const o = i[e[0]], c = i[e[1]], T = i[e[2]], N = [c[0] - o[0], c[1] - o[1], c[2] - o[2]], g = [T[0] - o[0], T[1] - o[1], T[2] - o[2]], A = N[1] * g[2] - N[2] * g[1], U = N[2] * g[0] - N[0] * g[2], _ = N[0] * g[1] - N[1] * g[0], Y = Math.sqrt(A * A + U * U + _ * _), D = Y > 1e-10 && Math.abs(_) / Y < 0.5;
      te.push({ idx: s, el: e, isWall: D }), He.has(s) && te.pop();
    }
  });
  const $e = (() => {
    for (const [e, s] of Ne) if (!s) return fe.get(e);
    return fe.values().next().value || "Conc_1";
  })();
  xe == null ? void 0 : xe.forEach((e, s) => {
    te.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && ze.set(e.cells[0], e.q), e.ang !== void 0 && Je.set(e.cells[0], e.ang);
  });
  const _e = "DECK";
  let de = false;
  const Re = [];
  if (te.some((e) => !e.isWall)) {
    const e = f.bendingModifiers, s = f.shellModifiers;
    de = (() => {
      for (const c of te) {
        if (c.isWall) continue;
        const T = s == null ? void 0 : s.get(c.idx);
        if (T && Math.abs(T[3]) < 1e-9 && Math.abs(T[4]) < 1e-9) return true;
        const N = e == null ? void 0 : e.get(c.idx);
        if (N !== void 0 && Math.abs(N) < 1e-9) return true;
      }
      return false;
    })();
    const o = ((_c = f.thicknesses) == null ? void 0 : _c.values().next().value) ?? 0.15;
    de ? (n.push("$ DECK PROPERTIES"), n.push(`  SHELLPROP  "${_e}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${$e}"  DECKMATERIAL "${$e}"  DECKSLABDEPTH ${r(o * 65 / 120)} DECKRIBDEPTH ${r(o * 55 / 120)} DECKRIBWIDTHTOP ${r(o * 150 / 120)} DECKRIBWIDTHBOTTOM ${r(o * 100 / 120)} DECKRIBSPACING ${r(o * 200 / 120)} DECKSHEARTHICKNESS ${r(o * 0.76 / 120)} DECKUNITWEIGHT ${r(C(0.11012))} SHEARSTUDDIAM ${r(o * 19 / 120)} SHEARSTUDHEIGHT ${r(o * 100 / 120)} SHEARSTUDFU 400 `)) : (n.push("$ SLAB PROPERTIES"), n.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${$e}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${u(l(o))} `)), n.push("");
  }
  if (te.some((e) => e.isWall)) {
    n.push("$ WALL PROPERTIES");
    const e = ((_d = f.thicknesses) == null ? void 0 : _d.values().next().value) ?? 0.2, s = [...S.elementInputs.plateFormulations ?? /* @__PURE__ */ new Map()].length ? S.elementInputs.plateFormulations.values().next().value ?? 0 : 0, o = s === 2 ? "Membrane" : s === 1 ? "ShellThin" : "ShellThick";
    n.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${$e}"  MODELINGTYPE "${o}"  WALLTHICKNESS ${u(l(e))} `), n.push("");
  }
  if (te.length > 0) {
    n.push("$ AREA CONNECTIVITIES");
    const e = [];
    te.forEach((s, o) => {
      const { el: c, isWall: T } = s, N = T ? `W${o + 1}` : `F${o + 1}`, g = T ? "PANEL" : "FLOOR", A = c.map((U) => ee(U));
      if (T) {
        const U = (v) => ce.indexOf(v);
        if (new Set(A.map((v) => v.pt)).size === 4) {
          const v = Math.max(...A.map((se) => U(se.story))), Se = A.map((se) => v - U(se.story));
          n.push(`  AREA "${N}"  ${g}  4  "${A[0].pt}"  "${A[1].pt}"  "${A[2].pt}"  "${A[3].pt}"  ${Se.join("  ")}  `), e.push(`  AREAASSIGN  "${N}"  "${ce[v]}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const Y = i[c[0]][2] <= i[c[2]][2] ? 0 : 2, D = i[c[1]][2] <= i[c[3]][2] ? 1 : 3;
        n.push(`  AREA "${N}"  ${g}  4  "${A[Y].pt}"  "${A[D].pt}"  "${A[D].pt}"  "${A[Y].pt}"  1  1  0  0  `);
        const b = A[Y === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${N}"  "${b}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        n.push(`  AREA "${N}"  ${g}  4  "${A[0].pt}"  "${A[1].pt}"  "${A[2].pt}"  "${A[3].pt}"  0  0  0  0  `);
        const U = Je.get(s.idx) ?? (L == null ? void 0 : L.get(s.idx));
        e.push(de ? `  AREAASSIGN  "${N}"  "${A[0].story}"  SECTION "${_e}"  ANG ${u(U ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${N}"  "${A[0].story}"  SECTION "Losa" ${ke ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Re.push({ name: N, story: A[0].story, idx: s.idx });
      }
    }), n.push(""), n.push("$ AREA ASSIGNS"), e.forEach((s) => n.push(s)), n.push("");
  }
  const tt = Ie === "manual" ? 0 : 1;
  n.push("$ LOAD PATTERNS");
  const oe = ((_e2 = S.loadPatterns) == null ? void 0 : _e2.length) ? S.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: tt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of oe) {
    let s;
    e.type === "Dead" ? s = Ie === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : (s = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), n.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${s}`);
  }
  n.push("");
  const me = S.loadPatternDestino && oe.some((e) => e.name === S.loadPatternDestino) ? S.loadPatternDestino : ((_f = oe.find((e) => e.type === "Dead")) == null ? void 0 : _f.name) ?? oe[0].name, Le = [], Ce = /* @__PURE__ */ new Map(), We = (e, s) => {
    const o = Ce.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let c = 0; c < 6; c++) o[c] += s[c] ?? 0;
    Ce.set(e, o);
  }, st = me === (((_g = oe.find((e) => e.type === "Dead")) == null ? void 0 : _g.name) ?? oe[0].name), nt = Ie === "manual" || !st;
  if ($.loads && $.loads.size > 0 && $.loads.forEach((e, s) => {
    const [o, c, T] = x(s, e);
    We(s, [o, c, nt ? T : 0, e[3] ?? 0, e[4] ?? 0, e[5] ?? 0]);
  }), $.moments && $.moments.size > 0 && $.moments.forEach((e, s) => {
    We(s, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), Ce.forEach((e, s) => {
    if (e.every((c) => Math.abs(c) <= 1e-10)) return;
    const o = ee(s);
    Le.push(`  POINTLOAD  "${o.pt}"  "${o.story}"  TYPE "FORCE"  LC "${me}"  FX ${r(y(e[0]))}  FY ${r(y(e[1]))}  FZ ${r(y(e[2]))}  MX ${r(a(e[3]))}  MY ${r(a(e[4]))}  MZ ${r(a(e[5]))}`);
  }), Le.length > 0 && (n.push("$ POINT OBJECT LOADS"), Le.forEach((e) => n.push(e)), n.push("")), p && p.size > 0 && Re.length > 0) {
    const e = [];
    for (const s of Re) {
      const o = ze.get(s.idx), c = o !== void 0 ? { value: o } : p.get(s.idx);
      if (!c || Math.abs(c.value) < 1e-12) continue;
      const T = c.dir ?? "GRAV", N = T === "GRAV" ? Math.abs(c.value) : c.value;
      e.push(`  AREALOAD  "${s.name}"  "${s.story}"  TYPE "UNIFF"  DIR "${T}"  LC "${c.pattern ?? me}"  FVAL ${r(C(N))}`);
    }
    e.length > 0 && (n.push("$ SHELL OBJECT LOADS"), e.forEach((s) => n.push(s)), n.push(""));
  }
  n.push("$ ANALYSIS OPTIONS"), n.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), n.push('  PDELTA  METHOD "NONE"  '), n.push(""), n.push("$ MASS SOURCE"), n.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), n.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), n.push(""), n.push("$ LOAD CASES");
  const ot = ((_h = S.loadCases) == null ? void 0 : _h.length) ? S.loadCases : oe.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of ot) {
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
function Ze(S, i) {
  const I = S[i[0]], $ = S[i[1]], f = Math.abs($[2] - I[2]), R = Math.sqrt(($[0] - I[0]) ** 2 + ($[1] - I[1]) ** 2), F = f > R * 0.5;
  return F && R > 0.01 ? "BRACE" : F ? "COLUMN" : "BEAM";
}
export {
  Tt as a,
  ut as e,
  ht as p
};
