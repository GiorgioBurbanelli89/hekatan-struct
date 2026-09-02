function L(f) {
  return f && parseFloat(f) || 0;
}
function St(f) {
  const E = /* @__PURE__ */ new Map(), $ = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let m;
  for (; (m = $.exec(f)) !== null; ) E.set(m[1], m[2] !== void 0 ? m[2] : m[3]);
  return E;
}
function Ut(f) {
  const E = f.split(/\r?\n/);
  return E.some((m) => m.trim().startsWith("TABLE:")) ? Dt(E) : Ct(E);
}
function Dt(f) {
  var _a, _b, _c, _d, _e, _f;
  const E = [];
  let $ = "";
  for (const g of f) {
    const N = g.trimEnd();
    N.endsWith("_") ? $ += N.slice(0, -1) + " " : ($ += N, E.push($), $ = "");
  }
  $ && E.push($);
  const m = { force: "KN", length: "m" };
  let h = "UX,UY,UZ,RX,RY,RZ";
  const P = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), F = [], k = [], W = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), _ = [], a = /* @__PURE__ */ new Map();
  let S = "";
  for (const g of E) {
    const N = g.trim();
    if (!N || N.startsWith(";") || N.startsWith("File ")) continue;
    if (N.startsWith("TABLE:")) {
      const i = N.match(/TABLE:\s+"(.+?)"/);
      S = i ? i[1].toUpperCase() : "";
      continue;
    }
    if (N === "END TABLE DATA") {
      S = "";
      continue;
    }
    const A = St(N);
    switch (S) {
      case "PROGRAM CONTROL": {
        const i = A.get("CurrUnits");
        if (i) {
          const p = i.split(",").map((y) => y.trim());
          p[0] && (m.force = p[0]), p[1] && (m.length = p[1]);
        }
        break;
      }
      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const i = A.get("Material");
        i && !P.has(i) && P.set(i, { E: 0, nu: 0, G: 0 });
        break;
      }
      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const i = A.get("Material");
        if (i) {
          const p = P.get(i) || { E: 0, nu: 0, G: 0 };
          p.E = L(A.get("E1")), p.G = L(A.get("G12")), p.nu = L(A.get("U12")), p.density = L(A.get("UnitMass")), P.set(i, p);
        }
        break;
      }
      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const i = A.get("Material");
        i && P.has(i) && (P.get(i).fy = L(A.get("Fy")));
        break;
      }
      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const i = A.get("SectionName");
        i && G.set(i, { material: A.get("Material") || "", shape: A.get("Shape") || "Rectangular", D: L(A.get("t3")), B: L(A.get("t2")), TF: L(A.get("tf")), TW: L(A.get("tw")), A: L(A.get("Area")), Iz: L(A.get("I33")), Iy: L(A.get("I22")), J: L(A.get("TorsConst")), As2: L(A.get("AS2")), As3: L(A.get("AS3")) });
        break;
      }
      case "AREA SECTION PROPERTIES": {
        const i = A.get("Section");
        i && z.set(i, { material: A.get("Material") || "", type: A.get("Type") || "Shell", thickness: L(A.get("Thickness")) });
        break;
      }
      case "JOINT COORDINATES": {
        const i = A.get("Joint");
        if (i) {
          const p = L(A.get("XorR")), y = L(A.get("Y")), c = L(A.get("Z"));
          T.set(i, [p, y, c]);
        }
        break;
      }
      case "CONNECTIVITY - FRAME": {
        const i = A.get("Frame"), p = A.get("JointI"), y = A.get("JointJ");
        i && p && y && F.push({ name: i, j1: p, j2: y });
        break;
      }
      case "CONNECTIVITY - AREA": {
        const i = A.get("Area");
        if (i) {
          const p = parseInt(A.get("NumJoints") || "4"), y = [];
          for (let c = 1; c <= p; c++) {
            const o = A.get(`Joint${c}`);
            o && y.push(o);
          }
          y.length >= 3 && k.push({ name: i, joints: y });
        }
        break;
      }
      case "JOINT RESTRAINT ASSIGNMENTS": {
        const i = A.get("Joint");
        if (i) {
          const p = [((_a = A.get("U1")) == null ? void 0 : _a.toLowerCase()) === "yes", ((_b = A.get("U2")) == null ? void 0 : _b.toLowerCase()) === "yes", ((_c = A.get("U3")) == null ? void 0 : _c.toLowerCase()) === "yes", ((_d = A.get("R1")) == null ? void 0 : _d.toLowerCase()) === "yes", ((_e = A.get("R2")) == null ? void 0 : _e.toLowerCase()) === "yes", ((_f = A.get("R3")) == null ? void 0 : _f.toLowerCase()) === "yes"];
          W.set(i, p);
        }
        break;
      }
      case "FRAME SECTION ASSIGNMENTS": {
        const i = A.get("Frame"), p = A.get("AnalSect");
        i && p && H.set(i, p);
        break;
      }
      case "AREA SECTION ASSIGNMENTS": {
        const i = A.get("Area"), p = A.get("Section");
        i && p && J.set(i, p);
        break;
      }
      case "FRAME OFFSET ALONG LENGTH ASSIGNMENTS": {
        const i = A.get("Frame");
        i && a.set(i, [L(A.get("LengthI")), L(A.get("LengthJ")), L(A.get("RigidFactor"))]);
        break;
      }
      case "JOINT LOADS - FORCE": {
        const i = A.get("Joint");
        i && _.push({ joint: i, fx: L(A.get("F1")), fy: L(A.get("F2")), fz: L(A.get("F3")), mx: L(A.get("M1")), my: L(A.get("M2")), mz: L(A.get("M3")) });
        break;
      }
    }
  }
  return At(m, h, P, G, z, T, F, k, W, H, J, _, a);
}
function Ct(f) {
  const E = { force: "KN", length: "m" };
  let $ = "UX,UY,UZ,RX,RY,RZ";
  const m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), z = [], T = [], F = /* @__PURE__ */ new Map(), k = [], W = /* @__PURE__ */ new Map();
  let H = "", J = "";
  for (const S of f) {
    const g = S.trim();
    if (!g || g.startsWith(";")) continue;
    if (!S.startsWith(" ") && !S.startsWith("	")) {
      const i = g.toUpperCase();
      if (i === "END") break;
      i.startsWith("SHELL SECTION") ? H = "SHELL SECTION" : i.startsWith("FRAME SECTION") ? H = "FRAME SECTION" : H = i.split(/\s+/)[0];
      continue;
    }
    const N = St(g), A = g.split(/\s+/);
    switch (H) {
      case "SYSTEM": {
        const i = N.get("DOF");
        i && ($ = i);
        const p = N.get("LENGTH");
        p && (E.length = p);
        const y = N.get("FORCE");
        y && (E.force = y);
        break;
      }
      case "JOINT": {
        const i = A[0];
        G.set(i, [L(N.get("X")), L(N.get("Y")), L(N.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const i = N.get("ADD"), p = N.get("DOF");
        if (i && p) {
          const y = p.split(","), c = [false, false, false, false, false, false];
          for (const o of y) {
            const r = o.toUpperCase();
            (r === "UX" || r === "U1") && (c[0] = true), (r === "UY" || r === "U2") && (c[1] = true), (r === "UZ" || r === "U3") && (c[2] = true), (r === "RX" || r === "R1") && (c[3] = true), (r === "RY" || r === "R2") && (c[4] = true), (r === "RZ" || r === "R3") && (c[5] = true);
          }
          F.set(i, c);
        }
        break;
      }
      case "MATERIAL": {
        const i = N.get("NAME");
        if (i) J = i, m.set(i, { E: 0, nu: 0, G: 0 });
        else if (J) {
          const p = m.get(J), y = N.get("E");
          y && (p.E = L(y));
          const c = N.get("U");
          c && (p.nu = L(c)), p.G = p.E / (2 * (1 + p.nu));
          const o = N.get("M");
          o && (p.density = L(o));
        }
        break;
      }
      case "SHELL": {
        const i = A[0], p = N.get("J");
        N.get("SEC"), p && T.push({ name: i, joints: p.split(",") });
        break;
      }
      case "SHELL SECTION": {
        const i = N.get("NAME");
        i && P.set(i, { material: N.get("MAT") || "", type: N.get("TYPE") || "Shell", thickness: L(N.get("TH")) });
        break;
      }
      case "FRAME": {
        const i = A[0], p = N.get("J");
        if (p) {
          const y = p.split(",");
          y.length >= 2 && z.push({ name: i, j1: y[0], j2: y[1] });
        }
        break;
      }
      case "LOAD": {
        const i = N.get("ADD");
        i && k.push({ joint: i, fx: L(N.get("UX")), fy: L(N.get("UY")), fz: L(N.get("UZ")), mx: L(N.get("MX")), my: L(N.get("MY")), mz: L(N.get("MZ")) });
        break;
      }
    }
  }
  return At(E, $, m, h, P, G, z, T, F, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), k, W);
}
function At(f, E, $, m, h, P, G, z, T, F, k, W, H = /* @__PURE__ */ new Map()) {
  var _a;
  const J = [], _ = /* @__PURE__ */ new Map(), a = [];
  for (const [r, I] of P) _.set(r, a.length), J.push(r), a.push(I);
  const S = [], g = [], N = /* @__PURE__ */ new Map();
  for (const r of G) {
    const I = _.get(r.j1), R = _.get(r.j2);
    if (I !== void 0 && R !== void 0) {
      const w = S.length;
      S.push([I, R]), g.push(r.name);
      const D = F.get(r.name);
      D && N.set(w, D);
    }
  }
  const A = S.length;
  for (const r of z) {
    const I = r.joints.map((R) => _.get(R)).filter((R) => R !== void 0);
    if (I.length >= 3) {
      const R = S.length;
      S.push(I), g.push(r.name);
      const w = k.get(r.name);
      w && N.set(R, w);
    }
  }
  const i = S.length - A, p = { elasticities: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map() }, y = /* @__PURE__ */ new Map(), c = $.values().next().value || { E: 29e3, nu: 0.3, G: 11153 };
  for (let r = 0; r < S.length; r++) {
    const I = N.get(r), R = I ? m.get(I) : null, w = I ? h.get(I) : null;
    if (R || S[r].length === 2) {
      const D = R || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" }, v = $.get(D.material) || c, Q = v.E || c.E, re = v.nu || 0.3, Ee = v.G || Q / (2 * (1 + re));
      p.elasticities.set(r, Q), p.shearModuli.set(r, Ee), p.areas.set(r, D.A || D.D * D.B), p.momentsOfInertiaZ.set(r, D.Iz || D.B * D.D ** 3 / 12), p.momentsOfInertiaY.set(r, D.Iy || D.D * D.B ** 3 / 12), p.torsionalConstants.set(r, D.J || 0), p.densities.set(r, v.density || 0), D.As2 && (p.shearAreasZ ?? (p.shearAreasZ = /* @__PURE__ */ new Map()), p.shearAreasZ.set(r, D.As2)), D.As3 && (p.shearAreasY ?? (p.shearAreasY = /* @__PURE__ */ new Map()), p.shearAreasY.set(r, D.As3));
      const te = H.get(g[r]);
      te && (p.endOffsets ?? (p.endOffsets = /* @__PURE__ */ new Map()), p.endOffsets.set(r, te)), ((_a = D.shape) == null ? void 0 : _a.includes("Wide Flange")) || D.shape === "I" ? y.set(r, { type: "I", b: D.B, h: D.D, name: I || "I-section" }) : y.set(r, { type: "rect", b: D.B, h: D.D });
    } else if (w) {
      const D = $.get(w.material) || c, v = D.E || c.E, Q = D.nu || 0.2, re = D.G || v / (2 * (1 + Q));
      p.elasticities.set(r, v), p.shearModuli.set(r, re), p.thicknesses.set(r, w.thickness), p.poissonsRatios.set(r, Q), p.plateFormulations ?? (p.plateFormulations = /* @__PURE__ */ new Map()), p.plateFormulations.set(r, /thin/i.test(w.type) ? 1 : 0), p.densities.set(r, D.density || 0);
    }
  }
  const o = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() };
  for (const [r, I] of T) {
    const R = _.get(r);
    R !== void 0 && o.supports.set(R, I);
  }
  for (const r of W) {
    const I = _.get(r.joint);
    if (I !== void 0) {
      const R = o.loads.get(I) || [0, 0, 0, 0, 0, 0];
      R[0] += r.fx, R[1] += r.fy, R[2] += r.fz, R[3] += r.mx, R[4] += r.my, R[5] += r.mz, o.loads.set(I, R);
    }
  }
  return { units: f, dof: E, materials: $, frameSections: m, shellSections: h, nodes: a, nodeNames: J, nodeNameToIdx: _, elements: S, elementNames: g, elementSections: N, nodeInputs: o, elementInputs: p, sectionShapes: y, info: { nNodes: a.length, nFrames: A, nShells: i, title: `SAP2000 (${A} frames, ${i} shells)` } };
}
function wt(f) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { nodes: E, elements: $, nodeInputs: m, elementInputs: h } = f, P = { force: "KN", length: "m" };
  f.units && (f.units.force !== "KN" || f.units.length !== "m") && console.warn(`[s2k] el modelo va en kN\xB7m y el exportador NO convierte: se declara CurrUnits="KN, m, C" y se ignora "${f.units.force}, ${f.units.length}". Etiquetarlo de otra forma hace que SAP2000 lea las fuerzas escaladas.`);
  const G = f.title || "Awatif Model", z = [], T = (c) => z.push(c), F = () => z.push(" ");
  T(`File ${G}.$2k was saved on m/d/yy at h:mm:ss`), F(), T('TABLE:  "ACTIVE DEGREES OF FREEDOM"'), T("   UX=Yes   UY=Yes   UZ=Yes   RX=Yes   RY=Yes   RZ=Yes"), F();
  const k = [], W = (c) => {
    var _a2, _b2, _c2, _d2;
    const o = ((_a2 = h.elasticities) == null ? void 0 : _a2.get(c)) || 0, r = (_b2 = h.poissonsRatios) == null ? void 0 : _b2.get(c), I = ((_c2 = h.shearModuli) == null ? void 0 : _c2.get(c)) || 0, R = r !== void 0 ? r : o > 0 && I > 0 ? Math.max(0, Math.min(0.5, o / (2 * I) - 1)) : 0.2, w = I > 0 ? I : o > 0 ? o / (2 * (1 + R)) : 0, D = ((_d2 = h.densities) == null ? void 0 : _d2.get(c)) || 0;
    return { E: o, nu: R, G: w, rho: D, key: `MAT_${Math.round(o)}_n${R.toFixed(4)}` };
  }, H = [];
  if ($.forEach((c, o) => {
    c.length === 2 ? k.push(o) : H.push(o);
  }), k.length > 0) {
    T('TABLE:  "CONNECTIVITY - FRAME"');
    for (const c of k) {
      const o = $[c];
      T(`   Frame=${c + 1}   JointI=${o[0] + 1}   JointJ=${o[1] + 1}   IsCurved=No`);
    }
    F();
  }
  if (H.length > 0) {
    T('TABLE:  "CONNECTIVITY - AREA"');
    for (const c of H) {
      const o = $[c], r = o.map((I, R) => `Joint${R + 1}=${I + 1}`).join("   ");
      T(`   Area=${c + 1}   NumJoints=${o.length}   ${r}`);
    }
    F();
  }
  T('TABLE:  "COORDINATE SYSTEMS"'), T("   Name=GLOBAL   Type=Cartesian   X=0   Y=0   Z=0   AboutZ=0   AboutY=0   AboutX=0"), F(), T('TABLE:  "DATABASE FORMAT TYPES"'), T("   UnitsCurr=Yes   OverrideE=No"), F();
  const J = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
  for (const c of k) {
    const o = ((_a = h.areas) == null ? void 0 : _a.get(c)) || 0, r = ((_b = h.momentsOfInertiaZ) == null ? void 0 : _b.get(c)) || 0, I = ((_c = h.momentsOfInertiaY) == null ? void 0 : _c.get(c)) || 0, R = ((_d = h.torsionalConstants) == null ? void 0 : _d.get(c)) || 0;
    (_e = h.elasticities) == null ? void 0 : _e.get(c);
    const w = W(c).key, D = ((_f = h.shearAreasZ) == null ? void 0 : _f.get(c)) ?? 0, v = ((_g = h.shearAreasY) == null ? void 0 : _g.get(c)) ?? 0, Q = `A${o.toPrecision(6)}_Iz${r.toPrecision(6)}_s${D.toPrecision(6)}_${v.toPrecision(6)}`;
    if (!J.has(Q)) {
      let Ee = 0.3, te = 0.3;
      o > 0 && r > 0 && (Ee = Math.sqrt(12 * r / o), te = o / Ee), J.set(Q, { A: o, Iz: r, Iy: I, J: R, b: te, h: Ee, matKey: w, As2: D > 0 ? D : o * 5 / 6, As3: v > 0 ? v : o * 5 / 6 });
    }
    const re = [...J.keys()].indexOf(Q) + 1;
    _.set(c, `SEC${re}`);
  }
  if (k.length > 0) {
    T('TABLE:  "FRAME SECTION ASSIGNMENTS"');
    for (const c of k) {
      const o = _.get(c) || "SEC1";
      T(`   Frame=${c + 1}   AutoSelect=N.A.   AnalSect=${o}   MatProp=Default`);
    }
    F();
  }
  if (J.size > 0) {
    T('TABLE:  "FRAME SECTION PROPERTIES 01 - GENERAL"');
    let c = 0;
    for (const [, o] of J) c++, T(`   SectionName=SEC${c}   Material=${o.matKey}   Shape=General   t3=${Y(o.h)}   t2=${Y(o.b)}   Area=${Y(o.A)}   TorsConst=${Y(o.J)}   I33=${Y(o.Iz)}   I22=${Y(o.Iy)}   I23=0   AS2=${Y(o.As2)}   AS3=${Y(o.As3)} _`), T("        Color=Blue   FromFile=No   AMod=1   A2Mod=1   A3Mod=1   JMod=1   I2Mod=1   I3Mod=1   MMod=1   WMod=1");
    F();
  }
  {
    const c = k.filter((o) => {
      var _a2;
      const r = (_a2 = h.localAngles) == null ? void 0 : _a2.get(o);
      return r !== void 0 && isFinite(r) && Math.abs(r) > 1e-9;
    });
    if (c.length > 0) {
      T('TABLE:  "FRAME LOCAL AXES ASSIGNMENTS 1 - TYPICAL"');
      for (const o of c) T(`   Frame=${o + 1}   Angle=${Y(h.localAngles.get(o))}   AdvanceAxes=No`);
      F();
    }
  }
  {
    const c = h.endOffsets, o = k.filter((r) => {
      const I = c == null ? void 0 : c.get(r);
      return !!I && (Math.abs(I[0]) > 1e-9 || Math.abs(I[1]) > 1e-9);
    });
    if (o.length > 0) {
      T('TABLE:  "FRAME OFFSET ALONG LENGTH ASSIGNMENTS"');
      for (const r of o) {
        const I = c.get(r);
        T(`   Frame=${r + 1}   Type=User   LengthI=${Y(I[0])}   LengthJ=${Y(I[1])}   RigidFactor=${Y(I.length > 2 ? I[2] : 0)}`);
      }
      F();
    }
  }
  const a = !!f.layeredSection && H.length > 0, S = f.layeredSection, g = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
  if (!a) for (const c of H) {
    const o = ((_h = h.thicknesses) == null ? void 0 : _h.get(c)) || 0.1;
    (_i = h.elasticities) == null ? void 0 : _i.get(c);
    const r = W(c).key, I = ((_j = h.plateFormulations) == null ? void 0 : _j.get(c)) ?? 0, R = `t${o.toPrecision(6)}_f${I}`;
    g.has(R) || g.set(R, { t: o, matKey: r, formulacion: I });
    const w = [...g.keys()].indexOf(R) + 1;
    N.set(c, `SSEC${w}`);
  }
  if (H.length > 0) {
    T('TABLE:  "AREA SECTION ASSIGNMENTS"');
    for (const c of H) {
      const o = a ? S.name : N.get(c) || "SSEC1";
      T(`   Area=${c + 1}   Section=${o}   MatProp=Default`);
    }
    if (F(), T('TABLE:  "AREA SECTION PROPERTIES"'), a) {
      const c = S, o = ((_k = c.layers[0]) == null ? void 0 : _k.material) || "MAT_DEFAULT";
      T(`   Section=${c.name}   Material=${o}   MatAngle=0   AreaType=Shell   Type=Shell-Layered   Thickness=${Y(c.totalThickness)}   BendThick=${Y(c.totalThickness)}   Color=Magenta`);
    } else {
      let c = 0;
      for (const [, o] of g) {
        c++;
        const r = o.formulacion === 2 ? "Membrane" : o.formulacion === 3 ? "Plate-Thin" : o.formulacion === 4 ? "Plate-Thick" : o.formulacion === 1 ? "Shell-Thin" : "Shell-Thick", I = o.formulacion === 3 || o.formulacion === 4 ? "No" : "Yes";
        T(`   Section=SSEC${c}   Material=${o.matKey}   MatAngle=0   AreaType=Shell   Type=${r}   DrillDOF=${I}   Thickness=${Y(o.t)}   BendThick=${Y(o.t)}   Color=Cyan`);
      }
    }
    if (F(), a) {
      T('TABLE:  "AREA SECTION PROPERTY LAYERS"');
      const c = S;
      for (const o of c.layers) {
        const r = o.angle ?? 0, I = o.numIntPts ?? 3;
        T(`   Section=${c.name}   LayerName=${o.name}   Distance=${Y(o.distance)}   Thickness=${Y(o.thickness)}   Type=Shell   NumIntPts=${I}   Material=${o.material}   MatAngle=${Y(r * 180 / Math.PI)}   MatBehave=Directional   S11Opt=Linear   S22Opt=Linear   S12Opt=Linear`);
      }
      F();
    }
  }
  T('TABLE:  "JOINT COORDINATES"');
  for (let c = 0; c < E.length; c++) {
    const o = E[c];
    T(`   Joint=${c + 1}   CoordSys=GLOBAL   CoordType=Cartesian   XorR=${Y(o[0])}   Y=${Y(o[1])}   Z=${Y(o[2])}   SpecialJt=No`);
  }
  if (F(), m.supports && m.supports.size > 0) {
    T('TABLE:  "JOINT RESTRAINT ASSIGNMENTS"');
    for (const [c, o] of m.supports) {
      if (!o.some((I) => I)) continue;
      const r = (I) => I ? "Yes" : "No";
      T(`   Joint=${c + 1}   U1=${r(o[0])}   U2=${r(o[1])}   U3=${r(o[2])}   R1=${r(o[3])}   R2=${r(o[4])}   R3=${r(o[5])}`);
    }
    F();
  }
  const A = f.selfWtMult ?? 1;
  T('TABLE:  "LOAD PATTERN DEFINITIONS"'), T(`   LoadPat=DEAD   DesignType=Dead   SelfWtMult=${A}`), F(), T('TABLE:  "LOAD CASE DEFINITIONS"'), T('   Case=DEAD   Type=LinStatic   InitialCond=Zero   DesTypeOpt="Prog Det"   DesignType=Dead   DesActOpt="Prog Det"   DesignAct=Non-Composite   AutoType=None   RunCase=Yes'), F(), T('TABLE:  "CASE - STATIC 1 - LOAD ASSIGNMENTS"'), T('   Case=DEAD   LoadType="Load pattern"   LoadName=DEAD   LoadSF=1'), F();
  const i = m.loads;
  if (i && i.size > 0) {
    T('TABLE:  "JOINT LOADS - FORCE"');
    for (const [c, o] of i) o.some((r) => Math.abs(r) > 1e-12) && T(`   Joint=${c + 1}   LoadPat=DEAD   CoordSys=GLOBAL   F1=${Y(o[0])}   F2=${Y(o[1])}   F3=${Y(o[2])}   M1=${Y(o[3])}   M2=${Y(o[4])}   M3=${Y(o[5])}`);
    F();
  }
  const p = h.frameLoads;
  if (p && p.size > 0) {
    T('TABLE:  "FRAME LOADS - DISTRIBUTED"');
    for (const [c, o] of p) {
      const r = $[c];
      if (!r || r.length !== 2) continue;
      const I = E[r[0]], R = E[r[1]], w = Math.hypot(R[0] - I[0], R[1] - I[1], R[2] - I[2]);
      ["X", "Y", "Z"].forEach((D, v) => {
        Math.abs(o[v]) < 1e-12 || T(`   Frame=${c + 1}   LoadPat=DEAD   CoordSys=GLOBAL   Type=Force   Dir=${D}   DistType=RelDist   RelDistA=0   RelDistB=1   AbsDistA=0   AbsDistB=${Y(w)}   FOverLA=${Y(o[v])}   FOverLB=${Y(o[v])}`);
      });
    }
    F();
  }
  const y = /* @__PURE__ */ new Map();
  for (let c = 0; c < $.length; c++) {
    const { E: o, nu: r, G: I, rho: R, key: w } = W(c);
    y.has(w) || y.set(w, { E: o, nu: r, G: I, rho: R });
  }
  T('TABLE:  "MATERIAL PROPERTIES 01 - GENERAL"');
  for (const [c] of y) T(`   Material=${c}   Type=Concrete   SymType=Isotropic   TempDepend=No   Color=Green`);
  F(), T('TABLE:  "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES"');
  for (const [c, o] of y) T(`   Material=${c}   UnitWeight=${Y(o.rho * 9.81)}   UnitMass=${Y(o.rho)}   E1=${Y(o.E)}   G12=${Y(o.G)}   U12=${Y(o.nu)}   A1=9.9E-06`);
  F(), T('TABLE:  "MATERIAL PROPERTIES 03B - CONCRETE DATA"');
  for (const [c] of y) T(`   Material=${c}   Fc=27579   eFc=27579   LtWtConc=No   SSCurveOpt=Mander   SSHysType=Takeda   SFc=0.00222   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  return F(), T('TABLE:  "PROGRAM CONTROL"'), T(`   ProgramName=SAP2000   Version=24.1.0   CurrUnits="${P.force}, ${P.length}, C"   SteelCode="AISC 360-16"   ConcCode="ACI 318-19"   AlumCode="AA 2015"   ColdCode=AISI-16   RegenHinge=Yes`), F(), T("END TABLE DATA"), T(""), z.join(`\r
`);
}
function Y(f) {
  return f === 0 || Math.abs(f) < 1e-15 ? "0" : Math.abs(f) >= 1e6 || Math.abs(f) < 1e-3 && Math.abs(f) > 0 ? f.toExponential(8) : parseFloat(f.toPrecision(10)).toString();
}
function Pt(f, E, $ = 0.05) {
  const m = E.map(([h, P]) => `${(+h).toFixed(4)} ${(+P).toFixed(5)}`).join("  ");
  return [`  FUNCTION "${f}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${$}  SPECTYPE "USER"  `, `  FUNCTION "${f}"  TIMEVAL "${m}"  `];
}
function Ft(f) {
  const { name: E, func: $, modalCase: m = "Modal", sfX: h = 9.81, sfY: P = 9.81 } = f, G = [`  LOADCASE "${E}"  TYPE  "Response Spectrum"  MODALCASE  "${m}"  `];
  return h && G.push(`  LOADCASE "${E}"  ACCEL  "U1"  FUNC  "${$}"  SF  ${h}  `), P && G.push(`  LOADCASE "${E}"  ACCEL  "U2"  FUNC  "${$}"  SF  ${P}  `), G;
}
function Et(f) {
  const { name: E = "Modal", ritz: $ = false, nModes: m = 12 } = f;
  return $ ? [`  LOADCASE "${E}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `, `  LOADCASE "${E}"  MAXMODES  ${m} MINMODES  1 `, `  LOADCASE "${E}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `, `  LOADCASE "${E}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `, `  LOADCASE "${E}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `] : [`  LOADCASE "${E}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `, `  LOADCASE "${E}"  MAXMODES  ${m} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `];
}
function kt(f) {
  var _a;
  const E = (_a = f.e2kModel) == null ? void 0 : _a.rawSections;
  let $ = E && E.size > 0 ? Yt(E, f.e2kModel) : Bt(f);
  return f.seismicNEC && ($ = yt($, f.seismicNEC)), $;
}
function yt(f, E) {
  const $ = f.includes(`\r
`) ? `\r
` : `
`, m = f.split(/\r?\n/), h = E.name ?? "NEC", P = Pt(h, E.points, E.dampRatio ?? 0.05), G = E.modalCase ?? "Modal", z = Ft({ name: E.caseName ?? "Sismo NEC", func: h, modalCase: G, sfX: E.sfX, sfY: E.sfY });
  let T = [];
  const F = (k) => m.some((W) => k.test(W));
  if (E.modal) {
    const k = new RegExp(`^\\s*LOADCASE\\s+"${G}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let W = m.length - 1; W >= 0; W--) k.test(m[W]) && m.splice(W, 1);
    T = Et({ name: G, ritz: !!E.modal.ritz, nModes: E.modal.nModes });
  } else F(new RegExp(`LOADCASE\\s+"${G}"\\s+TYPE\\s+"Modal`)) || (T = Et({ name: G }));
  return lt(m, "FUNCTIONS", P), lt(m, "LOAD CASES", [...T, ...z]), m.join($);
}
function lt(f, E, $) {
  const m = f.findIndex((G) => G.trim() === `$ ${E}`);
  if (m >= 0) {
    f.splice(m + 1, 0, ...$);
    return;
  }
  const h = f.findIndex((G) => G.trim() === "END"), P = h >= 0 ? h : f.length;
  f.splice(P, 0, `$ ${E}`, ...$, "");
}
function Yt(f, E) {
  const $ = [], m = ["PROGRAM INFORMATION", "CONTROLS", "STORIES - IN SEQUENCE FROM TOP", "GRIDS", "DIAPHRAGM NAMES", "MATERIAL PROPERTIES", "REBAR DEFINITIONS", "FRAME SECTIONS", "AUTO SELECT SECTION LISTS", "CONCRETE SECTIONS", "WALL/SLAB/DECK SECTIONS", "POINT COORDINATES", "LINE CONNECTIVITIES", "AREA CONNECTIVITIES", "POINT ASSIGNS", "LINE ASSIGNS", "AREA ASSIGNS", "LOAD PATTERNS", "POINT OBJECT LOADS", "FRAME OBJECT LOADS", "SHELL OBJECT LOADS", "ANALYSIS OPTIONS", "MASS SOURCE", "FUNCTIONS", "LOAD CASES", "LOAD COMBINATIONS"];
  $.push("$ File exported from Hekatan Struct Lineal (round-trip)"), $.push("");
  for (const h of m) {
    const P = f.get(h);
    if (!(!P || P.length === 0)) {
      $.push(`$ ${h}`);
      for (const G of P) $.push(G);
      $.push("");
    }
  }
  for (const [h, P] of f) if (!m.includes(h) && P.length !== 0) {
    $.push(`$ ${h}`);
    for (const G of P) $.push(G);
    $.push("");
  }
  return $.push("  END"), $.push("$ END OF MODEL FILE"), $.join(`\r
`);
}
function Bt(f) {
  var _a, _b, _c, _d, _e2, _f;
  const { nodes: E, elements: $, nodeInputs: m, elementInputs: h, title: P, units: G } = f, z = f.shellLoads ?? h.shellSurfaceLoads;
  let T;
  z instanceof Map && (T = /* @__PURE__ */ new Map(), z.forEach((e, t) => {
    T.set(t, typeof e == "number" ? { value: e } : e);
  }));
  const F = f.shellAngles ?? h.shellAngles, k = h.cargaDeArea, W = !!(T && T.size > 0), H = (e, t) => [t[0], t[1], t[2] - (W ? (k == null ? void 0 : k.get(e)) ?? 0 : 0)], J = "N", _ = "MM", a = [], S = (e) => Math.round(e * 1e4) / 1e4, g = (e) => !isFinite(e) || e === 0 ? "0" : Number(e.toPrecision(10)).toString(), N = 1e3, A = 1e3, i = (e) => e * A, p = (e) => e * N, y = (e) => e * N, c = (e) => e * N * A, o = (e) => e * N / A ** 2, r = (e) => e * N / A ** 3, I = /* @__PURE__ */ new Date(), R = `${I.getMonth() + 1}/${I.getDate()}/${I.getFullYear()}  ${I.getHours()}:${String(I.getMinutes()).padStart(2, "0")}:${String(I.getSeconds()).padStart(2, "0")}`;
  a.push(`$ File   "Hekatan_export.e2k"  saved ${R} in ETABS 22.6.0`), a.push(""), a.push("$ PROGRAM INFORMATION"), a.push('  PROGRAM  "ETABS"  VERSION "22.6.0"  '), a.push(""), a.push("$ CONTROLS"), a.push(`  UNITS  "${J}"  "${_}"  "C"  `), a.push('  TITLE1  "Hekatan Struct Lineal export"  '), P && a.push(`  TITLE2  "${P}"  `), a.push("  PREFERENCE  MERGETOL 0.001"), a.push('  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  '), a.push("");
  const w = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  E.forEach((e) => {
    w.add(S(e[0])), D.add(S(e[1]));
  });
  const v = [...w].sort((e, t) => e - t), Q = [...D].sort((e, t) => e - t);
  a.push("$ GRIDS"), a.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), v.forEach((e, t) => {
    const s = t < 26 ? String.fromCharCode(65 + t) : String.fromCharCode(65 + t % 26).repeat(Math.floor(t / 26) + 1);
    a.push(`  GRID "G1"  LABEL "${s}"  DIR "X"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), Q.forEach((e, t) => {
    a.push(`  GRID "G1"  LABEL "${t + 1}"  DIR "Y"  COORD ${e}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  }), a.push("");
  const re = 3, Ee = 0.5, te = /* @__PURE__ */ new Map();
  E.forEach((e) => {
    const t = S(e[2]);
    te.set(t, (te.get(t) ?? 0) + 1);
  });
  const ke = /* @__PURE__ */ new Set();
  E.forEach((e) => ke.add(S(e[2])));
  const ee = [...ke].sort((e, t) => e - t);
  let U = ee.filter((e) => (te.get(e) ?? 0) >= re);
  if (U.length > 1) {
    const e = [U[0]];
    for (const t of U.slice(1)) t - e[e.length - 1] < Ee ? e[e.length - 1] = t : e.push(t);
    U = e;
  }
  U.length || (U = [ee[0], ee[ee.length - 1]]), U[0] !== ee[0] && U.unshift(ee[0]), U[U.length - 1] !== ee[ee.length - 1] && U.push(ee[ee.length - 1]);
  const se = [], fe = /* @__PURE__ */ new Map();
  se.push("Base"), fe.set(U[0], "Base");
  for (let e = 1; e < U.length; e++) {
    const t = `Level_${e}`;
    se.push(t), fe.set(U[e], t);
  }
  const xe = (e) => {
    const t = S(e);
    if (fe.has(t)) return { story: fe.get(t), dz: 0 };
    for (let n = 0; n < U.length; n++) if (U[n] >= t) return { story: fe.get(U[n]), dz: S(U[n] - t) };
    const s = U[U.length - 1];
    return { story: fe.get(s), dz: S(s - t) };
  };
  a.push("$ STORIES - IN SEQUENCE FROM TOP");
  for (let e = U.length - 1; e >= 1; e--) a.push(`  STORY "${se[e]}"  HEIGHT ${S(i(U[e] - U[e - 1]))} MASTERSTORY "Yes"  `);
  U.length > 0 && a.push(`  STORY "Base"  ELEV ${U[0]} `), a.push(""), $.some((e) => e.length === 4), a.push("$ DIAPHRAGM NAMES"), a.push('  DIAPHRAGM "D1"    TYPE RIGID'), a.push(""), a.push("$ MATERIAL PROPERTIES");
  const He = /* @__PURE__ */ new Set();
  (_a = h.elasticities) == null ? void 0 : _a.forEach((e) => He.add(e));
  const Te = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map();
  let pt = 0, ht = 0;
  const Tt = 980665e-8, We = /* @__PURE__ */ new Map();
  if (h.densities && h.densities.size > 0) {
    const e = /* @__PURE__ */ new Map();
    h.densities.forEach((t, s) => {
      var _a2;
      const n = (_a2 = h.elasticities) == null ? void 0 : _a2.get(s);
      n !== void 0 && (e.has(n) || e.set(n, []), e.get(n).push(t));
    }), e.forEach((t, s) => {
      const n = t.reduce((u, O) => u + O, 0) / t.length, l = n > 100 ? n * Tt : n * 9.80665;
      We.set(s, l);
    });
  }
  for (const e of He) {
    const t = e >= 1e8, s = t ? `Steel_${++pt}` : `Conc_${++ht}`;
    Te.set(e, s), Re.set(e, t);
    const n = We.get(e) ?? (t ? 76.97 : 24), l = o(e), u = r(n), O = (() => {
      var _a2;
      const x = f.elementInputs.poissonsRatios;
      if (x) {
        for (const [d, B] of x) if ((((_a2 = f.elementInputs.elasticities) == null ? void 0 : _a2.get(d)) ?? 0) === e) return B;
      }
    })(), M = O !== void 0 ? O : t ? 0.3 : 0.2, C = t ? 117e-7 : 1e-5;
    if (t) {
      a.push(`  MATERIAL  "${s}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${g(u)}`), a.push(`  MATERIAL  "${s}"    SYMTYPE "Isotropic"  E ${S(l)}  U ${M}  A ${C}`);
      const x = 345e3, d = 45e4;
      a.push(`  MATERIAL  "${s}"  FY ${S(o(x))}  FU ${S(o(d))}  FYE ${S(o(x * 1.1))}  FUE ${S(o(d * 1.1))}`);
    } else a.push(`  MATERIAL  "${s}"    TYPE "Concrete"    WEIGHTPERVOLUME ${g(u)}`), a.push(`  MATERIAL  "${s}"    SYMTYPE "Isotropic"  E ${S(l)}  U ${M}  A ${C}`), a.push(`  MATERIAL  "${s}"    FC ${S(o(24e3))}`);
  }
  a.push(""), a.push("$ FRAME SECTIONS");
  const ue = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Map(), ne = 0.05;
  $.forEach((e, t) => {
    var _a2, _b2, _c2, _d2, _e3, _f2, _g, _h, _i, _j;
    if (e.length !== 2) return;
    const s = (_a2 = h.sectionShapes) == null ? void 0 : _a2.get(t), n = ((_b2 = h.elasticities) == null ? void 0 : _b2.get(t)) ?? 0, l = Te.get(n) || "Conc_1", u = Re.get(n) ?? n >= 1e8, O = ((_c2 = h.areas) == null ? void 0 : _c2.get(t)) ?? 0, M = ((_d2 = h.momentsOfInertiaZ) == null ? void 0 : _d2.get(t)) ?? 0, C = ((_e3 = h.momentsOfInertiaY) == null ? void 0 : _e3.get(t)) ?? 0, x = ((_f2 = h.torsionalConstants) == null ? void 0 : _f2.get(t)) ?? 0;
    let d = (s == null ? void 0 : s.type) || "rect", B = (s == null ? void 0 : s.h) ?? 0, b = (s == null ? void 0 : s.b) ?? 0, j = (s == null ? void 0 : s.d) ?? 0;
    const Z = (s == null ? void 0 : s.tf) ?? 0, ie = (s == null ? void 0 : s.tw) ?? 0;
    if (!s && B <= 0 && b <= 0 && j <= 0 && O > 0 && M > 0 && C > 0) {
      const q = (_g = h.cantos) == null ? void 0 : _g.get(t), he = (_h = h.anchos) == null ? void 0 : _h.get(t);
      B = q && q > 0 ? q : Math.sqrt(12 * M / O), b = he && he > 0 ? he : O / B, (!isFinite(B) || B < ne) && (B = ne), (!isFinite(b) || b < ne) && (b = ne), d = "general";
    } else B <= 0 && b <= 0 && j <= 0 && O > 0 && (M > 0 ? (B = Math.sqrt(12 * M / O), b = O / B) : B = b = Math.sqrt(O), (!isFinite(B) || B < ne) && (B = ne), (!isFinite(b) || b < ne) && (b = ne), d = "rect");
    B <= 0 && b <= 0 && j <= 0 && (B = 0.3, b = 0.3, d = "rect");
    const ge = (s == null ? void 0 : s.name) ? `NAME_${s.name}` : `${d}_${S(B)}_${S(b)}_${S(j)}_${S(Z)}_${S(ie)}_${l}`;
    (s == null ? void 0 : s.name) && !$e.has(ge) && $e.set(ge, s.name);
    let X = $e.get(ge);
    if (!X) {
      const q = u ? "S" : "C";
      d === "general" ? X = `${q}_G${ue.size + 1}` : d === "rect" ? X = `${q}_R${Math.round(b * 100)}x${Math.round(B * 100)}` : d === "circ" ? X = `${q}_C_D${Math.round(j * 100)}` : d === "I" ? X = `${q}_I${Math.round(B * 100)}x${Math.round(b * 100)}` : d === "HSS" ? X = `${q}_HSS${Math.round(b * 100)}x${Math.round(B * 100)}x${Math.round(ie * 1e3)}` : X = `${q}_Sec${ue.size + 1}`, $e.set(ge, X);
    }
    if (Le.set(t, X), ue.has(X)) return;
    ue.add(X);
    const Lt = O > 0 && M > 0 && C > 0;
    let V;
    d === "general" || Lt ? V = "General" : d === "I" ? V = "Steel I/Wide Flange" : d === "HSS" ? V = "Steel Tube" : d === "CFT" ? V = "Filled Steel Tube" : d === "pipe" ? V = "Steel Pipe" : d === "L" ? V = "Steel Angle" : d === "C" ? V = "Steel Channel" : d === "2C" ? V = "Steel Double Channel" : d === "circ" ? V = "Concrete Circle" : V = "Concrete Rectangular";
    let ce = `  FRAMESECTION  "${X}"  MATERIAL "${l}"  SHAPE "${V}"`;
    if (V === "General") {
      const q = ((_i = h.shearAreasZ) == null ? void 0 : _i.get(t)) || O * 5 / 6, he = ((_j = h.shearAreasY) == null ? void 0 : _j.get(t)) || O * 5 / 6;
      ce += `  D ${S(i(B))} B ${S(i(b))} AREA ${g(O * 1e6)} AS2 ${g(q * 1e6)} AS3 ${g(he * 1e6)} I33 ${g(M * 1e12)} I22 ${g(C * 1e12)} TORSION ${g((x || M + C) * 1e12)} S33POS ${g(2 * M / B * 1e9)} S33NEG ${g(2 * M / B * 1e9)} S22POS ${g(2 * C / b * 1e9)} S22NEG ${g(2 * C / b * 1e9)} Z33 ${g(2 * M / B * 1e9)} Z22 ${g(2 * C / b * 1e9)} R33 ${g(Math.sqrt(M / O) * 1e3)} R22 ${g(Math.sqrt(C / O) * 1e3)} `, a.push(ce);
      return;
    }
    B && (ce += `  D ${S(i(B))}`), b && (ce += `  B ${S(i(b))}`), j && !B && (ce += `  D ${S(i(j))}`), Z && (ce += `  TF ${S(i(Z))}`), ie && (ce += `  TW ${S(i(ie))}`), a.push(ce);
  }), a.push("");
  const Ie = /* @__PURE__ */ new Map();
  let ut = 0;
  E.forEach((e) => {
    const { dz: t } = xe(e[2]), s = `${S(e[0])},${S(e[1])},${t}`;
    Ie.has(s) || Ie.set(s, `${++ut}`);
  }), a.push("$ POINT COORDINATES");
  for (const [e, t] of Ie) {
    const [s, n, l] = e.split(",").map(Number);
    a.push(l ? `  POINT "${t}"  ${S(i(s))} ${S(i(n))} ${S(i(l))} ` : `  POINT "${t}"  ${S(i(s))} ${S(i(n))} `);
  }
  a.push("");
  const oe = (e) => {
    const t = E[e], { story: s, dz: n } = xe(t[2]), l = `${S(t[0])},${S(t[1])},${n}`;
    return { pt: Ie.get(l) || "1", story: s };
  }, ze = (e) => {
    var _a2, _b2, _c2, _d2, _e3, _f2;
    const t = [], s = (_a2 = f.propertyModifiers) == null ? void 0 : _a2.get(e);
    s && s.some((d) => Math.abs(d - 1) > 1e-9) && t.push(`PROPMODIFIERS "${s.map((d) => S(d)).join(" ")}"`);
    const n = (_b2 = h.localAngles) == null ? void 0 : _b2.get(e);
    n !== void 0 && isFinite(n) && Math.abs(n) > 1e-9 && t.push(`ANG ${S(n)}`);
    const l = (_c2 = h.momentReleases) == null ? void 0 : _c2.get(e);
    if (l && l.some((d) => d)) {
      const d = [];
      l.length === 12 ? (l[0] && d.push("PI"), l[1] && d.push("V2I"), l[2] && d.push("V3I"), l[3] && d.push("TI"), l[4] && d.push("M2I"), l[5] && d.push("M3I"), l[6] && d.push("PJ"), l[7] && d.push("V2J"), l[8] && d.push("V3J"), l[9] && d.push("TJ"), l[10] && d.push("M2J"), l[11] && d.push("M3J")) : l.length === 6 && (l[0] && d.push("TI"), l[1] && d.push("M2I"), l[2] && d.push("M3I"), l[3] && d.push("TJ"), l[4] && d.push("M2J"), l[5] && d.push("M3J")), d.length > 0 && t.push(`RELEASE "${d.join(" ")}"`);
    }
    const u = (_d2 = h.insertionPoints) == null ? void 0 : _d2.get(e);
    u && (Math.abs(u[0]) > 1e-9 || Math.abs(u[1]) > 1e-9) && t.push(`LATEROFFSET ${S(i(u[0]))} TRANSOFFSET ${S(i(u[1]))}`);
    const O = (_e3 = h.rigidOffsets) == null ? void 0 : _e3.get(e), M = (_f2 = h.endOffsets) == null ? void 0 : _f2.get(e), C = M ? [M[0], M[1]] : O, x = M && M.length > 2 ? M[2] : 0;
    return C && (Math.abs(C[0]) > 1e-9 || Math.abs(C[1]) > 1e-9) && t.push(`LENGTHOFFI ${S(i(C[0]))} LENGTHOFFJ ${S(i(C[1]))} RIGIDZONE ${S(x)}`), t.length > 0 ? ` ${t.join(" ")} ` : "";
  }, De = [], Je = /* @__PURE__ */ new Set(), Me = /* @__PURE__ */ new Map();
  $.forEach((e, t) => {
    if (e.length !== 2) return;
    const s = ft(E, e);
    if (s === "BEAM") return;
    const n = E[e[0]][2] <= E[e[1]][2] ? e[0] : e[1], l = E[e[0]][2] <= E[e[1]][2] ? e[1] : e[0];
    if (Math.abs(E[n][0] - E[l][0]) > 1e-6 || Math.abs(E[n][1] - E[l][1]) > 1e-6) return;
    const u = oe(n), O = Le.get(t) || `Sec_${t}`, M = `${u.pt}_${O}_${s}`;
    Me.has(M) || Me.set(M, []), Me.get(M).push({ i: t, bot: n, top: l, zBot: S(E[n][2]), zTop: S(E[l][2]), planPt: u.pt, secName: O, type: s });
  }), Me.forEach((e, t) => {
    e.sort((n, l) => n.zBot - l.zBot);
    let s = 0;
    for (let n = 1; n <= e.length; n++) if (n === e.length || Math.abs(e[n].zBot - e[n - 1].zTop) > 1e-6) {
      const u = e.slice(s, n);
      u.length >= 1 && (De.push({ elemIndices: u.map((O) => O.i), planPt: u[0].planPt, bottomNodeIdx: u[0].bot, topNodeIdx: u[u.length - 1].top, secName: u[0].secName, type: u[0].type, nSegments: u.length }), u.forEach((O) => Je.add(O.i))), s = n;
    }
  }), a.push("$ LINE CONNECTIVITIES");
  const ve = [], _e = (e) => se.indexOf(e), je = (e, t, s, n, l, u, O) => {
    const M = oe(n), C = oe(s), x = _e(M.story) - _e(C.story);
    x <= 0 ? a.push(`  LINE  "${e}"  BEAM  "${C.pt}"  "${M.pt}"  0`) : a.push(`  LINE  "${e}"  ${t}  "${C.pt}"  "${M.pt}"  ${x}`), ve.push(`  LINEASSIGN  "${e}"  "${M.story}"  SECTION "${l}" ${u} MINNUMSTA ${O} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };
  De.forEach((e, t) => {
    const s = ze(e.elemIndices[0]);
    je(`C${t + 1}`, e.type, e.bottomNodeIdx, e.topNodeIdx, e.secName, s, e.nSegments);
  }), $.forEach((e, t) => {
    if (e.length !== 2 || Je.has(t)) return;
    const s = ft(E, e), n = Le.get(t) || `Sec_${t}`, l = ze(t), u = E[e[0]][2] <= E[e[1]][2] ? e[0] : e[1], O = E[e[0]][2] <= E[e[1]][2] ? e[1] : e[0];
    je(`E${t + 1}`, s === "BEAM" ? "BRACE" : s, u, O, n, l, 3);
  }), a.push("");
  const Se = f.weightMode ?? "auto", Ae = /* @__PURE__ */ new Set();
  a.push("$ POINT ASSIGNS"), (_b = m.supports) == null ? void 0 : _b.forEach((e, t) => {
    const s = [];
    if (e[0] && s.push("UX"), e[1] && s.push("UY"), e[2] && s.push("UZ"), e[3] && s.push("RX"), e[4] && s.push("RY"), e[5] && s.push("RZ"), s.length > 0) {
      const n = oe(t), l = n.story === "Base" ? ' DIAPH "DISCONNECTED" ' : "";
      a.push(`  POINTASSIGN  "${n.pt}"  "${n.story}"  RESTRAINT "${s.join(" ")}" ${l} `), Ae.add(`${n.pt}@${n.story}`);
    }
  });
  const Ke = (f.diaphragm ?? "auto") !== "none";
  Ke && De.forEach((e) => {
    const t = oe(e.topNodeIdx), s = `${t.pt}@${t.story}`;
    !Ae.has(s) && t.story !== "Base" && (a.push(`  POINTASSIGN  "${t.pt}"  "${t.story}"  DIAPH "D1"  `), Ae.add(s));
  }), Se === "manual" && m.loads && m.loads.forEach((e, t) => {
    const [s, n, l] = H(t, e);
    if (Math.abs(s) < 1e-10 && Math.abs(n) < 1e-10 && Math.abs(l) < 1e-10) return;
    const u = oe(t), O = `${u.pt}@${u.story}`;
    Ae.has(O) || (a.push(`  POINTASSIGN  "${u.pt}"  "${u.story}"  DIAPH "DISCONNECTED"  `), Ae.add(O));
  }), a.push(""), a.push("$ LINE ASSIGNS"), ve.forEach((e) => a.push(e)), a.push("");
  const K = [], Ze = h.areaObjects, Xe = /* @__PURE__ */ new Set(), Ve = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map();
  Ze == null ? void 0 : Ze.forEach((e) => e.cells.forEach((t) => Xe.add(t))), $.forEach((e, t) => {
    if (e.length === 4 || e.length === 3) {
      const s = E[e[0]], n = E[e[1]], l = E[e[2]], u = [n[0] - s[0], n[1] - s[1], n[2] - s[2]], O = [l[0] - s[0], l[1] - s[1], l[2] - s[2]], M = u[1] * O[2] - u[2] * O[1], C = u[2] * O[0] - u[0] * O[2], x = u[0] * O[1] - u[1] * O[0], d = Math.sqrt(M * M + C * C + x * x), B = d > 1e-10 && Math.abs(x) / d < 0.5;
      K.push({ idx: t, el: e, isWall: B }), Xe.has(t) && K.pop();
    }
  });
  const ae = (() => {
    for (const [e, t] of Re) if (!t) return Te.get(e);
    return Te.values().next().value || "Conc_1";
  })();
  Ze == null ? void 0 : Ze.forEach((e, t) => {
    K.push({ idx: e.cells[0], el: e.nodes, isWall: false }), e.q !== void 0 && Ve.set(e.cells[0], e.q), e.ang !== void 0 && qe.set(e.cells[0], e.ang);
  });
  const Ce = "DECK";
  let Pe = false;
  const Fe = [], Qe = (e) => {
    const t = f.elementInputs.plateFormulations, s = K.find((l) => l.isWall === e), n = t && s ? t.get(s.idx) : void 0;
    return n === 2 ? "Membrane" : n === 1 ? "ShellThin" : "ShellThick";
  }, et = (e, t) => {
    const s = f.elementInputs.thicknesses, n = K.find((l) => l.isWall === e);
    return (n ? s == null ? void 0 : s.get(n.idx) : void 0) ?? (s == null ? void 0 : s.values().next().value) ?? t;
  }, tt = ["F11MOD", "F22MOD", "F12MOD", "M11MOD", "M22MOD", "M12MOD", "V13MOD", "V23MOD"], de = (e) => {
    var _a2;
    const s = (_a2 = h.shellModifiers) == null ? void 0 : _a2.get(e);
    if (s && s.length >= 8) return s.slice(0, 8);
    const n = h.membraneModifiers, l = h.bendingModifiers, u = n == null ? void 0 : n.get(e), O = l == null ? void 0 : l.get(e);
    if (u === void 0 && O === void 0) return null;
    const M = u ?? 1, C = O ?? 1;
    return [M, M, M, C, C, C, C, C];
  }, st = (e, t) => {
    const s = K.filter((O) => O.isWall === t), n = /* @__PURE__ */ new Map();
    for (const O of s) {
      const M = de(O.idx) ?? [1, 1, 1, 1, 1, 1, 1, 1];
      n.set(M.map((C) => S(C)).join(","), M);
    }
    if (n.size === 0) return "";
    n.size > 1 && console.warn(`[e2k] "${e}": ${n.size} juegos de modificadores distintos en la misma propiedad. ETABS los guarda POR PROPIEDAD, asi que se exporta el primero y los demas se pierden.`);
    const l = n.values().next().value, u = tt.map((O, M) => Math.abs(l[M] - 1) > 1e-9 ? `${O} ${S(l[M])}` : "").filter(Boolean);
    return u.length ? `  SHELLPROP  "${e}"  ${u.join(" ")} ` : "";
  }, nt = f.elementInputs.thicknesses, ot = f.elementInputs.plateFormulations, pe = (e) => {
    const t = nt == null ? void 0 : nt.get(e.idx), s = ot == null ? void 0 : ot.get(e.idx), n = de(e.idx);
    return `${e.isWall ? "W" : "F"}|${t ?? "-"}|${s ?? "-"}|${n ? n.map((l) => S(l)).join(",") : "-"}`;
  }, ye = (e) => {
    const t = de(e);
    return t ? Math.abs(t[3]) < 1e-9 && Math.abs(t[4]) < 1e-9 : false;
  }, me = /* @__PURE__ */ new Map();
  let $t = 0, It = 0, Mt = 0;
  for (const e of K) {
    const t = pe(e);
    if (me.has(t)) continue;
    const s = e.isWall, n = !s && ye(e.idx), l = s ? ++It : n ? ++Mt : ++$t;
    me.set(t, { nombre: (s ? "Muro" : n ? Ce : "Losa") + (l === 1 ? "" : String(l)), isWall: s, mem: n, t: nt == null ? void 0 : nt.get(e.idx), pf: ot == null ? void 0 : ot.get(e.idx) });
  }
  const Oe = (e) => {
    var _a2;
    return ((_a2 = me.get(pe(e))) == null ? void 0 : _a2.nombre) ?? (e.isWall ? "Muro" : "Losa");
  }, at = (e) => e === 2 ? "Membrane" : e === 1 ? "ShellThin" : "ShellThick", dt = (e, t) => {
    const s = K.find((u) => pe(u) === t), n = s ? de(s.idx) ?? null : null;
    if (!n) return "";
    const l = tt.map((u, O) => Math.abs(n[O] - 1) > 1e-9 ? `${u} ${S(n[O])}` : "").filter(Boolean);
    return l.length ? `  SHELLPROP  "${e}"  ${l.join(" ")} ` : "";
  }, Ne = K.find((e) => !e.isWall), it = K.find((e) => e.isWall), Ye = /* @__PURE__ */ new Set();
  Ne && Ye.add(pe(Ne)), it && Ye.add(pe(it));
  const ct = [...me.entries()].filter(([e]) => !Ye.has(e));
  if (K.some((e) => !e.isWall)) {
    Pe = !!Ne && ye(Ne.idx);
    const e = et(false, 0.15);
    if (Pe) {
      a.push("$ DECK PROPERTIES");
      const s = (n) => g(i(n));
      a.push(`  SHELLPROP  "${Ce}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${ae}"  DECKMATERIAL "${ae}"  DECKSLABDEPTH ${s(e * 65 / 120)} DECKRIBDEPTH ${s(e * 55 / 120)} DECKRIBWIDTHTOP ${s(e * 150 / 120)} DECKRIBWIDTHBOTTOM ${s(e * 100 / 120)} DECKRIBSPACING ${s(e * 200 / 120)} DECKSHEARTHICKNESS ${s(e * 0.76 / 120)} DECKUNITWEIGHT ${g(p(0.11012))} SHEARSTUDDIAM ${s(e * 19 / 120)} SHEARSTUDHEIGHT ${s(e * 100 / 120)} SHEARSTUDFU 400 `);
    } else a.push("$ SLAB PROPERTIES"), a.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${ae}"  MODELINGTYPE "${Qe(false)}"  SLABTYPE "Slab"  SLABTHICKNESS ${S(i(e))} `);
    const t = st(Pe ? Ce : "Losa", false);
    t && a.push(t), a.push("");
  }
  if (K.some((e) => e.isWall)) {
    a.push("$ WALL PROPERTIES");
    const e = et(true, 0.2), t = Qe(true);
    a.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${ae}"  MODELINGTYPE "${t}"  WALLTHICKNESS ${S(i(e))} `);
    const s = st("Muro", true);
    s && a.push(s), a.push("");
  }
  if (ct.length) {
    a.push("$ OTRAS SECCIONES DE CASCARA");
    for (const [e, t] of ct) {
      const s = t.t ?? (t.isWall ? 0.2 : 0.15), n = (u) => g(i(u));
      a.push(t.isWall ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Wall"  MATERIAL "${ae}"  MODELINGTYPE "${at(t.pf)}"  WALLTHICKNESS ${S(i(s))} ` : t.mem ? `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${ae}"  DECKMATERIAL "${ae}"  DECKSLABDEPTH ${n(s * 65 / 120)} DECKRIBDEPTH ${n(s * 55 / 120)} DECKRIBWIDTHTOP ${n(s * 150 / 120)} DECKRIBWIDTHBOTTOM ${n(s * 100 / 120)} DECKRIBSPACING ${n(s * 200 / 120)} DECKSHEARTHICKNESS ${n(s * 0.76 / 120)} DECKUNITWEIGHT ${g(p(0.11012))} SHEARSTUDDIAM ${n(s * 19 / 120)} SHEARSTUDHEIGHT ${n(s * 100 / 120)} SHEARSTUDFU 400 ` : `  SHELLPROP  "${t.nombre}"  PROPTYPE  "Slab"  MATERIAL "${ae}"  MODELINGTYPE "${at(t.pf)}"  SLABTYPE "Slab"  SLABTHICKNESS ${S(i(s))} `);
      const l = dt(t.nombre, e);
      l && a.push(l);
    }
    a.push("");
  }
  if (K.length > 0) {
    a.push("$ AREA CONNECTIVITIES");
    const e = [];
    K.forEach((t, s) => {
      const { el: n, isWall: l } = t, u = l ? `W${s + 1}` : `F${s + 1}`, O = l ? "PANEL" : "FLOOR", M = n.map((C) => oe(C));
      if (l) {
        const C = (j) => se.indexOf(j);
        if (new Set(M.map((j) => j.pt)).size === 4) {
          const j = Math.max(...M.map((ie) => C(ie.story))), Z = M.map((ie) => j - C(ie.story));
          a.push(`  AREA "${u}"  ${O}  4  "${M[0].pt}"  "${M[1].pt}"  "${M[2].pt}"  "${M[3].pt}"  ${Z.join("  ")}  `), e.push(`  AREAASSIGN  "${u}"  "${se[j]}"  SECTION "${Oe(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
          return;
        }
        const d = E[n[0]][2] <= E[n[2]][2] ? 0 : 2, B = E[n[1]][2] <= E[n[3]][2] ? 1 : 3;
        a.push(`  AREA "${u}"  ${O}  4  "${M[d].pt}"  "${M[B].pt}"  "${M[B].pt}"  "${M[d].pt}"  1  1  0  0  `);
        const b = M[d === 0 ? 2 : 0].story;
        e.push(`  AREAASSIGN  "${u}"  "${b}"  SECTION "${Oe(t)}"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        const C = M.length, x = (Z) => se.indexOf(Z), d = Math.max(...M.map((Z) => x(Z.story))), B = M.map((Z) => d - x(Z.story)), b = se[d] ?? M[0].story;
        a.push(`  AREA "${u}"  ${O}  ${C}  ` + M.map((Z) => `"${Z.pt}"`).join("  ") + "  " + B.join("  ") + "  ");
        const j = qe.get(t.idx) ?? (F == null ? void 0 : F.get(t.idx));
        e.push(ye(t.idx) ? `  AREAASSIGN  "${u}"  "${b}"  SECTION "${Oe(t)}"  ANG ${S(j ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  ` : `  AREAASSIGN  "${u}"  "${b}"  SECTION "${Oe(t)}" ${Ke ? ' DIAPH  "D1" ' : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `), Fe.push({ name: u, story: b, idx: t.idx });
      }
    }), a.push(""), a.push("$ AREA ASSIGNS"), e.forEach((t) => a.push(t)), a.push("");
  }
  const mt = Se === "manual" ? 0 : 1;
  a.push("$ LOAD PATTERNS");
  const le = ((_c = f.loadPatterns) == null ? void 0 : _c.length) ? f.loadPatterns : [{ name: "Dead", type: "Dead", selfWeightMultiplier: mt }, { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const e of le) {
    let t;
    e.type === "Dead" ? t = Se === "manual" ? 0 : e.selfWeightMultiplier ?? 1 : (t = 0, (e.selfWeightMultiplier ?? 0) !== 0 && console.warn(`[e2k] El patron "${e.name}" (tipo ${e.type ?? "Other"}) pedia SELFWEIGHT ${e.selfWeightMultiplier}. Se exporta 0: el peso propio va solo en Dead.`)), a.push(`  LOADPATTERN "${e.name}"  TYPE  "${e.type ?? "Other"}"  SELFWEIGHT  ${t}`);
  }
  a.push("");
  const Be = f.loadPatternDestino && le.some((e) => e.name === f.loadPatternDestino) ? f.loadPatternDestino : ((_d = le.find((e) => e.type === "Dead")) == null ? void 0 : _d.name) ?? le[0].name, Ge = [], be = /* @__PURE__ */ new Map(), rt = (e, t) => {
    const s = be.get(e) ?? [0, 0, 0, 0, 0, 0];
    for (let n = 0; n < 6; n++) s[n] += t[n] ?? 0;
    be.set(e, s);
  }, Ot = Be === (((_e2 = le.find((e) => e.type === "Dead")) == null ? void 0 : _e2.name) ?? le[0].name), Nt = Se === "manual" || !Ot;
  if (m.loads && m.loads.size > 0 && m.loads.forEach((e, t) => {
    const [s, n, l] = H(t, e);
    rt(t, [s, n, Nt ? l : 0, e[3] ?? 0, e[4] ?? 0, e[5] ?? 0]);
  }), m.moments && m.moments.size > 0 && m.moments.forEach((e, t) => {
    rt(t, [0, 0, 0, e[0] ?? 0, e[1] ?? 0, e[2] ?? 0]);
  }), be.forEach((e, t) => {
    if (e.every((n) => Math.abs(n) <= 1e-10)) return;
    const s = oe(t);
    Ge.push(`  POINTLOAD  "${s.pt}"  "${s.story}"  TYPE "FORCE"  LC "${Be}"  FX ${g(y(e[0]))}  FY ${g(y(e[1]))}  FZ ${g(y(e[2]))}  MX ${g(c(e[3]))}  MY ${g(c(e[4]))}  MZ ${g(c(e[5]))}`);
  }), Ge.length > 0 && (a.push("$ POINT OBJECT LOADS"), Ge.forEach((e) => a.push(e)), a.push("")), T && T.size > 0 && Fe.length > 0) {
    const e = [];
    for (const t of Fe) {
      const s = Ve.get(t.idx), n = s !== void 0 ? { value: s } : T.get(t.idx);
      if (!n || Math.abs(n.value) < 1e-12) continue;
      const l = n.dir ?? "GRAV", u = l === "GRAV" ? Math.abs(n.value) : n.value;
      e.push(`  AREALOAD  "${t.name}"  "${t.story}"  TYPE "UNIFF"  DIR "${l}"  LC "${n.pattern ?? Be}"  FVAL ${g(p(u) / (A * A))}`);
    }
    e.length > 0 && (a.push("$ SHELL OBJECT LOADS"), e.forEach((t) => a.push(t)), a.push(""));
  }
  a.push("$ ANALYSIS OPTIONS"), a.push('  ACTIVEDOF "UX UY UZ RX RY RZ"  '), a.push('  PDELTA  METHOD "NONE"  '), a.push("");
  const Ue = Se === "manual";
  a.push("$ MASS SOURCE"), a.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "${Ue ? "Yes" : "No"}"    INCLUDEADDEDMASS "No"    INCLUDELOADS "${Ue ? "No" : "Yes"}"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `), Ue || a.push('  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 '), a.push(""), a.push("$ LOAD CASES");
  const gt = ((_f = f.loadCases) == null ? void 0 : _f.length) ? f.loadCases : le.map((e) => ({ name: e.name, type: "Linear Static", patterns: [{ pattern: e.name, scaleFactor: 1 }] }));
  for (const e of gt) {
    a.push(`  LOADCASE "${e.name}"  TYPE  "${e.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const t of e.patterns ?? []) a.push(`  LOADCASE "${e.name}"  LOADPAT  "${t.pattern}"  SF ${t.scaleFactor} `);
  }
  const Rt = f.modalModes ?? 12;
  a.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), a.push(`  LOADCASE "Modal"  MAXMODES ${Rt}  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `), a.push("");
  const we = f.loadCombinations;
  if (we && we.length) {
    a.push("$ LOAD COMBINATIONS");
    for (const e of we) {
      a.push(`  COMBO "${e.name}"  TYPE "${e.type ?? "Linear Add"}"  `);
      for (const t of e.cases ?? []) a.push(`  COMBO "${e.name}"  LOADCASE  "${t.case}"  SF ${t.scaleFactor} `);
    }
    a.push("");
  }
  return a.push("  END"), a.push("$ END OF MODEL FILE"), a.join(`\r
`);
}
function ft(f, E) {
  const $ = f[E[0]], m = f[E[1]], h = Math.abs(m[2] - $[2]), P = Math.sqrt((m[0] - $[0]) ** 2 + (m[1] - $[1]) ** 2), G = h > P * 0.5;
  return G && P > 0.01 ? "BRACE" : G ? "COLUMN" : "BEAM";
}
export {
  wt as a,
  kt as e,
  Ut as p
};
