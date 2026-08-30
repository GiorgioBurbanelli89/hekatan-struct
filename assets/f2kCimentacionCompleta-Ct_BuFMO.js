const l = 0.10197162129779283;
function p() {
  try {
    const c = globalThis.crypto;
    if (c && typeof c.randomUUID == "function") return c.randomUUID();
  } catch {
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const N = Math.random() * 16 | 0;
    return (c === "x" ? N : N & 3 | 8).toString(16);
  });
}
function b(c) {
  return c === 0 || Math.abs(c) < 1e-10 ? "0" : c.toString();
}
function _(c) {
  const N = c.E_concreto_MPa ?? 24855, M = c.ks_kNm3, d = c.Z ?? 0, h = c.zapatas, u = h.length, P = M * l, E = N * 1e3 / 9.80665, y = E / (2 * (1 + 0.2)), m = 24 * l, C = m / 9.80665, R = (N / 4700) ** 2 * 1e3 / 9.80665, t = b, e = [];
  e.push(`File "Cimentacion_Edificio_Hekatan.f2k" exportado desde Hekatan Struct Lineal ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)} at ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`), e.push(`File contains ${u} zapatas en un solo modelo SAFE.`), e.push(" "), e.push('TABLE:  "PROGRAM CONTROL"'), e.push('   ProgramName=SAFE   Version=20.3.0   ProgLevel="Post Tensioning"   LicenseNum=3010-*12MBTJ2L34MJLQ5   CurrUnits="tonf, m, C"   CompBmCode="AISC 360-16"   ConcFrmCode="ACI 318-19"   ConcSlbCode="ACI 318-19"'), e.push(" "), e.push('TABLE:  "MATERIAL PROPERTIES - GENERAL"'), e.push(`   Material=4000Psi   Type=Concrete   SymType=Isotropic   Grade="f'c 4000 psi"   Color=Gray8Dark   GUID=${p()}`), e.push(`   Material=A615Gr60   Type=Rebar   SymType=Uniaxial   Grade="Grade 60"   Color=Green   GUID=${p()}`), e.push(" "), e.push('TABLE:  "MATERIAL PROPERTIES - BASIC MECHANICAL PROPERTIES"'), e.push(`   Material=4000Psi   DensityType=Weight   UnitWeight=${t(m)}   UnitMass=${t(C)}   E1=${t(E)}   G12=${t(y)}   U12=0.2   A1=9.9E-06`), e.push("   Material=A615Gr60   DensityType=Weight   UnitWeight=7.849   UnitMass=0.800380   E1=20389019.16   A1=6.5E-06"), e.push(" "), e.push('TABLE:  "MATERIAL PROPERTIES - CONCRETE DATA"'), e.push(`   Material=4000Psi   Fc=${t(R)}   LtWtConc=No   IsUserFr=No   SSCurveOpt=Mander   SSHysType=Concrete   SFc=0.00221914   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`), e.push(" "), e.push('TABLE:  "MATERIAL PROPERTIES - REBAR DATA"'), e.push("   Material=A615Gr60   Fy=42184.18   Fu=63276.27   Fye=46402.60   Fue=69603.89   SSCurveOpt=Simple   SSHysType=Kinematic   SHard=0.01   SCap=0.09   FinalSlope=-0.1"), e.push(" "), e.push('TABLE:  "AREA SECTION PROPERTY DEFINITIONS - SUMMARY"');
  for (let o = 0; o < u; o++) {
    const i = h[o];
    e.push(`   Name=Footing${o + 1}   Type=Slab   "Element Type"=Shell-Thin   Material=4000Psi   "Total Thickness"=${t(i.tz)}`), e.push(`   Name=Stiff${o + 1}     Type=Slab   "Element Type"=Shell-Thin   Material=4000Psi   "Total Thickness"=${t(i.tz)}`);
  }
  e.push(" "), e.push('TABLE:  "SLAB PROPERTY DEFINITIONS"');
  for (let o = 0; o < u; o++) {
    const i = h[o];
    e.push(`   Name=Footing${o + 1}   "Modeling Type"=Shell-Thin   "Property Type"=Footing   Material=4000Psi   "Slab Thickness"=${t(i.tz)}   "Notional Size Type"=Auto   "Notional Auto Factor"=1   "f11 Modifier"=1   "f22 Modifier"=1   "f12 Modifier"=1   "m11 Modifier"=1   "m22 Modifier"=1   "m12 Modifier"=1   "v13 Modifier"=1   "v23 Modifier"=1   "Mass Modifier"=1   "Weight Modifier"=1   Color=Blue   GUID=${p()}   Orthotropic?=No`), e.push(`   Name=Stiff${o + 1}     "Modeling Type"=Shell-Thin   "Property Type"=Stiff     Material=4000Psi   "Slab Thickness"=${t(i.tz)}   "Notional Size Type"=Auto   "Notional Auto Factor"=1   "f11 Modifier"=1   "f22 Modifier"=1   "f12 Modifier"=1   "m11 Modifier"=100   "m22 Modifier"=100   "m12 Modifier"=100   "v13 Modifier"=1   "v23 Modifier"=1   "Mass Modifier"=0   "Weight Modifier"=0   Color=Cyan   GUID=${p()}   Orthotropic?=No`);
  }
  e.push(" "), e.push('TABLE:  "SPRING PROPERTY DEFINITIONS - AREA SPRINGS"'), e.push(`   Name=ASpr1   "Subgrade Modulus"=${t(P)}   "Nonlinear Option"="Compression Only"   Color=Green   GUID=${p()}`), e.push(" "), e.push('TABLE:  "LOAD PATTERN DEFINITIONS"'), e.push(`   Name=Dead   "Is Auto Load"=No   Type=Dead   "Self Weight Multiplier"=1   GUID=${p()}`), e.push(`   Name=Live   "Is Auto Load"=No   Type=Live   "Self Weight Multiplier"=0   GUID=${p()}`), e.push(" "), e.push('TABLE:  "LOAD CASE DEFINITIONS - SUMMARY"'), e.push(`   Name=Dead   Type="Linear Static"   GUID=${p()}`), e.push(`   Name=Live   Type="Linear Static"   GUID=${p()}`), e.push(" "), e.push('TABLE:  "LOAD CASE DEFINITIONS - LINEAR STATIC"'), e.push(`   Name=Dead   "Exclude Group"=None   "Mass Source"=MsSrc1   "Initial Condition"=Unstressed   "Load Type"=Load   "Load Name"=Dead   "Load SF"=1   "Design Type"="Program Determined"   GUID=${p()}`), e.push(`   Name=Live   "Exclude Group"=None   "Mass Source"=MsSrc1   "Initial Condition"=Unstressed   "Load Type"=Load   "Load Name"=Live   "Load SF"=1   "Design Type"="Program Determined"   GUID=${p()}`), e.push(" "), e.push('TABLE:  "MASS SOURCE DEFINITION"'), e.push(`   Name=MsSrc1   "Is Default"=Yes   "Include Lateral Mass?"=No   "Include Vertical Mass?"=Yes   "Lump Mass?"=Yes   "Source Self Mass?"=Yes   "Source Added Mass?"=Yes   "Source Load Patterns?"=No   "Move Mass Centroid?"=No   GUID=${p()}`), e.push(" "), e.push('TABLE:  "COMBINATION DEFINITIONS"'), e.push(`   Name=Pu_1.4D+1.7L   Type="Linear Add"   "Is Auto"=No   "Load Name"=Dead   "Scale Factor"=1.4   GUID=${p()}`), e.push('   Name=Pu_1.4D+1.7L   "Load Name"=Live   "Scale Factor"=1.7'), e.push(" ");
  const T = c.vigasAmarre ?? [];
  e.push('TABLE:  "POINT OBJECT CONNECTIVITY"');
  for (let o = 0; o < u; o++) {
    const i = h[o], s = o * 9, n = i.Lz / 2, a = i.Bz / 2, r = i.bc / 2, A = [{ uid: s + 1, x: i.xC - n, y: i.yC - a, special: false }, { uid: s + 2, x: i.xC + n, y: i.yC - a, special: false }, { uid: s + 3, x: i.xC + n, y: i.yC + a, special: false }, { uid: s + 4, x: i.xC - n, y: i.yC + a, special: false }, { uid: s + 5, x: i.xCol - r, y: i.yCol - r, special: false }, { uid: s + 6, x: i.xCol + r, y: i.yCol - r, special: false }, { uid: s + 7, x: i.xCol + r, y: i.yCol + r, special: false }, { uid: s + 8, x: i.xCol - r, y: i.yCol + r, special: false }, { uid: s + 9, x: i.xCol, y: i.yCol, special: true }];
    for (const S of A) e.push(`   UniqueName=${S.uid}   "Is Auto Point"=No   IsSpecial=${S.special ? "Yes" : "No"}   X=${t(S.x)}   Y=${t(S.y)}   Z=${t(d)}   GUID=${p()}`);
  }
  const f = [];
  let x = u * 9 + 1;
  const $ = (o, i, s) => {
    for (let a = 0; a < u; a++) {
      const r = h[a];
      if (Math.abs(r.xCol - o) < 1e-3 && Math.abs(r.yCol - i) < 1e-3 && Math.abs(d - s) < 1e-3) return a * 9 + 9;
    }
    const n = x++;
    return e.push(`   UniqueName=${n}   "Is Auto Point"=No   IsSpecial=No   X=${t(o)}   Y=${t(i)}   Z=${t(s)}   GUID=${p()}`), n;
  };
  for (let o = 0; o < T.length; o++) {
    const i = T[o], s = i.z ?? d, n = $(i.x1, i.y1, s), a = $(i.x2, i.y2, s);
    f.push({ vigaIdx: o, jStart: n, jEnd: a });
  }
  e.push(" "), e.push('TABLE:  "FLOOR OBJECT CONNECTIVITY"');
  for (let o = 0; o < u; o++) {
    const i = h[o], s = o * 9, n = i.Lz * i.Bz, a = 2 * (i.Lz + i.Bz), r = i.bc * i.bc, A = 4 * i.bc;
    e.push(`   "Unique Name"=${o + 1}        UniquePt1=${s + 1}   UniquePt2=${s + 2}   UniquePt3=${s + 3}   UniquePt4=${s + 4}   Perimeter=${t(a)}   Area=${t(n)}   GUID=${p()}`), e.push(`   "Unique Name"=LOAD${o + 1}    UniquePt1=${s + 5}   UniquePt2=${s + 6}   UniquePt3=${s + 7}   UniquePt4=${s + 8}   Perimeter=${t(A)}   Area=${t(r)}   GUID=${p()}`);
  }
  e.push(" "), e.push('TABLE:  "JOINT ASSIGNMENTS - FLOOR MESHING OPTION"');
  for (let o = 0; o < u; o++) {
    const i = o * 9;
    e.push(`   UniqueName=${i + 9}   IncludeInMesh=Yes`);
  }
  e.push(" "), e.push('TABLE:  "JOINT LOADS ASSIGNMENTS - FORCE"');
  for (let o = 0; o < u; o++) {
    const i = h[o], s = o * 9, n = i.P_dead_kN * l, a = (i.Mx_dead_kNm ?? 0) * l, r = (i.My_dead_kNm ?? 0) * l;
    (n !== 0 || a !== 0 || r !== 0) && e.push(`   UniqueName=${s + 9}   "Load Pattern"=Dead   FX=0   FY=0   FZ=${t(-n)}   MX=${t(a)}   MY=${t(r)}   MZ=0   "X Dimension"=${t(i.bc)}   "Y Dimension"=${t(i.bc)}   GUID=${p()}`);
    const A = (i.P_live_kN ?? 0) * l, S = (i.Mx_live_kNm ?? 0) * l, I = (i.My_live_kNm ?? 0) * l;
    (A !== 0 || S !== 0 || I !== 0) && e.push(`   UniqueName=${s + 9}   "Load Pattern"=Live   FX=0   FY=0   FZ=${t(-A)}   MX=${t(S)}   MY=${t(I)}   MZ=0   "X Dimension"=${t(i.bc)}   "Y Dimension"=${t(i.bc)}   GUID=${p()}`);
  }
  e.push(" "), e.push('TABLE:  "AREA ASSIGNMENTS - SUMMARY"');
  for (let o = 0; o < u; o++) e.push(`   UniqueName=${o + 1}        "Section Property"=Footing${o + 1}   "Property Type"=Slab   Spring=ASpr1`), e.push(`   UniqueName=LOAD${o + 1}    "Section Property"=Stiff${o + 1}     "Property Type"=Slab`);
  e.push(" "), e.push('TABLE:  "AREA ASSIGNMENTS - SECTION PROPERTIES"');
  for (let o = 0; o < u; o++) e.push(`   UniqueName=${o + 1}        "Section Property"=Footing${o + 1}   "Property Type"=Slab`), e.push(`   UniqueName=LOAD${o + 1}    "Section Property"=Stiff${o + 1}     "Property Type"=Slab`);
  e.push(" "), e.push('TABLE:  "AREA ASSIGNMENTS - INSERTION POINT"');
  for (let o = 0; o < u; o++) e.push(`   UniqueName=${o + 1}        "Cardinal Point"=Top   Transform=No`), e.push(`   UniqueName=LOAD${o + 1}    "Cardinal Point"=Top   Transform=No`);
  e.push(" "), e.push('TABLE:  "AREA ASSIGNMENTS - AREA SPRINGS"');
  for (let o = 0; o < u; o++) e.push(`   UniqueName=${o + 1}   "Spring Property"=ASpr1`);
  e.push(" "), e.push('TABLE:  "AREA ASSIGNMENTS - FLOOR AUTO MESH OPTIONS"');
  for (let o = 0; o < u; o++) e.push(`   UniqueName=${o + 1}        "Mesh Option"=Default   "Add Restraints"=No`), e.push(`   UniqueName=LOAD${o + 1}    "Mesh Option"=Default   "Add Restraints"=No`);
  e.push(" "), e.push('TABLE:  "AREA ASSIGNMENTS - AUTO EDGE CONSTRAINTS"');
  for (let o = 0; o < u; o++) e.push(`   UniqueName=${o + 1}        Constraint=Yes`), e.push(`   UniqueName=LOAD${o + 1}    Constraint=Yes`);
  e.push(" ");
  const D = Math.min(...h.map((o) => Math.min(o.Lz, o.Bz))), U = Math.round(Math.max(0.15, D / 6) * 100) / 100;
  if (e.push('TABLE:  "ANALYSIS OPTIONS - AUTOMATIC MESH SETTINGS FOR FLOORS"'), e.push(`   "Mesh Option"=Rectangular   "Use Localized Meshing"=Yes   "Merge Joints"=Yes   "Maximum Mesh Size"=${t(U)}`), e.push(" "), e.push('TABLE:  "ANALYSIS MODELING OPTIONS"'), e.push('   "Two Dimensional Only"=No   "Rigid Diaphragm At Top"=No   "Ignore Vertical Offsets"=Yes'), e.push(" "), e.push('TABLE:  "ANALYSIS OPTIONS - SAPFIRE OPTIONS"'), e.push('   "Solver Option"=Advanced   "Analysis Process"=Auto   "Number Analysis Threads"=0   "Max File Size"=0'), e.push(" "), e.push('TABLE:  "ANALYSIS OPTIONS - DESIGN AND RESPONSE RECOVERY OPTIONS"'), e.push('   "Number Design Threads"=0   "Number Recovery Threads"=0   "Use Memory Mapped Files"="Program Determined"   "Allow Model Differences"=No'), e.push(" "), e.push('TABLE:  "ANALYSIS OPTIONS - CRACKING ANALYSIS OPTIONS"'), e.push('   "Reinforcement Source"="User and Designed"   "Minimum Tension Ratio"=0.0018   "Minimum Compression Ratio"=0'), e.push(" "), T.length > 0) {
    const o = /* @__PURE__ */ new Map();
    for (const i of T) {
      const s = `${i.b.toFixed(3)}x${i.h.toFixed(3)}`;
      o.has(s) || o.set(s, { b: i.b, h: i.h });
    }
    e.push('TABLE:  "FRAME SECTION PROPERTY DEFINITIONS - SUMMARY"');
    for (const [i, s] of o) {
      const n = s.b * s.h, a = s.b * s.h ** 3 / 12, r = s.h * s.b ** 3 / 12, A = 0.21 * Math.pow(Math.min(s.b, s.h), 3) * Math.max(s.b, s.h), S = 5 / 6 * n, I = 5 / 6 * n, O = a / (s.h / 2), L = r / (s.b / 2), g = s.b * s.h ** 2 / 4, F = s.h * s.b ** 2 / 4, G = Math.sqrt(a / n), B = Math.sqrt(r / n);
      e.push(`   Name=VAmarre_${i}   Material=4000Psi   Shape="Concrete Rectangular"   Color=Magenta   Area=${t(n)}   J=${t(A)}   I33=${t(a)}   I22=${t(r)}   As2=${t(S)}   As3=${t(I)}   S33Pos=${t(O)}   S33Neg=${t(O)}   S22Pos=${t(L)}   S22Neg=${t(L)}   Z33=${t(g)}   Z22=${t(F)}   R33=${t(G)}   R22=${t(B)}   "CG Offset 3"=0   "CG Offset 2"=0   "PNA Offset 3"=0   "PNA Offset 2"=0   "Area Modifier"=1   "As2 Modifier"=1   "As3 Modifier"=1   "J Modifier"=1   "I33 Modifier"=1   "I22 Modifier"=1   "Mass Modifier"=1   "Weight Modifier"=1`);
    }
    e.push(" "), e.push('TABLE:  "FRAME SECTION PROPERTY DEFINITIONS - CONCRETE RECTANGULAR"');
    for (const [i, s] of o) e.push(`   Name=VAmarre_${i}   Material=4000Psi   "From File?"=No   Depth=${t(s.h)}   Width=${t(s.b)}   "Rigid Zone?"=No   "Notional Size Type"=Auto   "Notional Auto Factor"=1   "Section Type"=Beam   "Longitudinal Rebar Material"=A615Gr60   "Shear Rebar Material"=A615Gr60   "Flange Dimension Option"="Analysis Property"   "Cover Top"=0.06   "Cover Bottom"=0.06   "Area Modifier"=1   "As2 Modifier"=1   "As3 Modifier"=1   "J Modifier"=1   "I22 Modifier"=1   "I33 Modifier"=1   "Mass Modifier"=1   "Weight Modifier"=1   Color=Magenta   GUID=${p()}`);
    e.push(" "), e.push('TABLE:  "BEAM OBJECT CONNECTIVITY"');
    for (const i of f) {
      const s = T[i.vigaIdx], n = s.x2 - s.x1, a = s.y2 - s.y1, r = Math.sqrt(n * n + a * a);
      e.push(`   "Unique Name"=${i.vigaIdx + 1}   UniquePtI=${i.jStart}   UniquePtJ=${i.jEnd}   Length=${t(r)}   GUID=${p()}`);
    }
    e.push(" "), e.push('TABLE:  "FRAME ASSIGNMENTS - SECTION PROPERTIES"');
    for (const i of f) {
      const s = T[i.vigaIdx], n = `${s.b.toFixed(3)}x${s.h.toFixed(3)}`;
      e.push(`   UniqueName=${i.vigaIdx + 1}   Shape="Concrete Rectangular"   "Auto Select List"=N.A.   "Section Property"=VAmarre_${n}`);
    }
    e.push(" ");
  }
  return e.push("END TABLE DATA"), e.push(""), e.join(`
`);
}
function v(c, N = "cimentacion_edificio.f2k") {
  const M = _(c), d = new Blob([M], { type: "text/plain;charset=utf-8" }), h = URL.createObjectURL(d), u = document.createElement("a");
  u.href = h, u.download = N, document.body.appendChild(u), u.click(), document.body.removeChild(u), URL.revokeObjectURL(h);
}
export {
  v as downloadEdificioCimentacionF2k,
  _ as exportEdificioCimentacionF2k
};
