const d = 0.10197162129779283;
function c() {
  try {
    const p = globalThis.crypto;
    if (p && typeof p.randomUUID == "function") return p.randomUUID();
  } catch {
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (p) => {
    const S = Math.random() * 16 | 0;
    return (p === "x" ? S : S & 3 | 8).toString(16);
  });
}
function G(p) {
  return p === 0 || Math.abs(p) < 1e-10 ? "0" : p.toString();
}
function Y(p) {
  const S = p.E_concreto_MPa ?? 24855, f = p.ks_kNm3, l = p.Z ?? 0, h = p.zapatas, u = h.length, P = f * d, M = S * 1e3 / 9.80665, C = M / (2 * (1 + 0.2)), E = 24 * d, L = E / 9.80665, R = (S / 4700) ** 2 * 1e3 / 9.80665, t = G, e = [];
  e.push(`File "Cimentacion_Edificio_Hekatan.f2k" exportado desde Hekatan Struct ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)} at ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`), e.push(`File contains ${u} zapatas en un solo modelo SAFE.`), e.push(" "), e.push('TABLE:  "PROGRAM CONTROL"'), e.push('   ProgramName=SAFE   Version=20.3.0   ProgLevel="Post Tensioning"   LicenseNum=3010-*12MBTJ2L34MJLQ5   CurrUnits="tonf, m, C"   CompBmCode="AISC 360-16"   ConcFrmCode="ACI 318-19"   ConcSlbCode="ACI 318-19"'), e.push(" "), e.push('TABLE:  "MATERIAL PROPERTIES - GENERAL"'), e.push(`   Material=4000Psi   Type=Concrete   SymType=Isotropic   Grade="f'c 4000 psi"   Color=Gray8Dark   GUID=${c()}`), e.push(" "), e.push('TABLE:  "MATERIAL PROPERTIES - BASIC MECHANICAL PROPERTIES"'), e.push(`   Material=4000Psi   DensityType=Weight   UnitWeight=${t(E)}   UnitMass=${t(L)}   E1=${t(M)}   G12=${t(C)}   U12=0.2   A1=9.9E-06`), e.push(" "), e.push('TABLE:  "MATERIAL PROPERTIES - CONCRETE DATA"'), e.push(`   Material=4000Psi   Fc=${t(R)}   LtWtConc=No   IsUserFr=No   SSCurveOpt=Mander   SSHysType=Concrete   SFc=0.00221914   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`), e.push(" "), e.push('TABLE:  "AREA SECTION PROPERTY DEFINITIONS - SUMMARY"');
  for (let o = 0; o < u; o++) {
    const s = h[o];
    e.push(`   Name=Footing${o + 1}   Type=Slab   "Element Type"=Shell-Thin   Material=4000Psi   "Total Thickness"=${t(s.tz)}`), e.push(`   Name=Stiff${o + 1}     Type=Slab   "Element Type"=Shell-Thin   Material=4000Psi   "Total Thickness"=${t(s.tz)}`);
  }
  e.push(" "), e.push('TABLE:  "SLAB PROPERTY DEFINITIONS"');
  for (let o = 0; o < u; o++) {
    const s = h[o];
    e.push(`   Name=Footing${o + 1}   "Modeling Type"=Shell-Thin   "Property Type"=Footing   Material=4000Psi   "Slab Thickness"=${t(s.tz)}   "Notional Size Type"=Auto   "Notional Auto Factor"=1   "f11 Modifier"=1   "f22 Modifier"=1   "f12 Modifier"=1   "m11 Modifier"=1   "m22 Modifier"=1   "m12 Modifier"=1   "v13 Modifier"=1   "v23 Modifier"=1   "Mass Modifier"=1   "Weight Modifier"=1   Color=Blue   GUID=${c()}   Orthotropic?=No`), e.push(`   Name=Stiff${o + 1}     "Modeling Type"=Shell-Thin   "Property Type"=Stiff     Material=4000Psi   "Slab Thickness"=${t(s.tz)}   "Notional Size Type"=Auto   "Notional Auto Factor"=1   "f11 Modifier"=1   "f22 Modifier"=1   "f12 Modifier"=1   "m11 Modifier"=100   "m22 Modifier"=100   "m12 Modifier"=100   "v13 Modifier"=1   "v23 Modifier"=1   "Mass Modifier"=0   "Weight Modifier"=0   Color=Cyan   GUID=${c()}   Orthotropic?=No`);
  }
  e.push(" "), e.push('TABLE:  "SPRING PROPERTY DEFINITIONS - AREA SPRINGS"'), e.push(`   Name=ASpr1   "Subgrade Modulus"=${t(P)}   "Nonlinear Option"="Compression Only"   Color=Green   GUID=${c()}`), e.push(" "), e.push('TABLE:  "LOAD PATTERN DEFINITIONS"'), e.push(`   Name=Dead   "Is Auto Load"=No   Type=Dead   "Self Weight Multiplier"=1   GUID=${c()}`), e.push(" "), e.push('TABLE:  "LOAD CASE DEFINITIONS - SUMMARY"'), e.push(`   Name=Dead   Type="Linear Static"   GUID=${c()}`), e.push(" "), e.push('TABLE:  "LOAD CASE DEFINITIONS - LINEAR STATIC"'), e.push(`   Name=Dead   "Exclude Group"=None   "Mass Source"=MsSrc1   "Initial Condition"=Unstressed   "Load Type"=Load   "Load Name"=Dead   "Load SF"=1   "Design Type"="Program Determined"   GUID=${c()}`), e.push(" "), e.push('TABLE:  "MASS SOURCE DEFINITION"'), e.push(`   Name=MsSrc1   "Is Default"=Yes   "Include Lateral Mass?"=No   "Include Vertical Mass?"=Yes   "Lump Mass?"=Yes   "Source Self Mass?"=Yes   "Source Added Mass?"=Yes   "Source Load Patterns?"=No   "Move Mass Centroid?"=No   GUID=${c()}`), e.push(" ");
  const A = p.vigasAmarre ?? [];
  e.push('TABLE:  "POINT OBJECT CONNECTIVITY"');
  for (let o = 0; o < u; o++) {
    const s = h[o], i = o * 9, n = s.Lz / 2, a = s.Bz / 2, r = s.bc / 2, T = [{ uid: i + 1, x: s.xC - n, y: s.yC - a, special: false }, { uid: i + 2, x: s.xC + n, y: s.yC - a, special: false }, { uid: i + 3, x: s.xC + n, y: s.yC + a, special: false }, { uid: i + 4, x: s.xC - n, y: s.yC + a, special: false }, { uid: i + 5, x: s.xCol - r, y: s.yCol - r, special: false }, { uid: i + 6, x: s.xCol + r, y: s.yCol - r, special: false }, { uid: i + 7, x: s.xCol + r, y: s.yCol + r, special: false }, { uid: i + 8, x: s.xCol - r, y: s.yCol + r, special: false }, { uid: i + 9, x: s.xCol, y: s.yCol, special: true }];
    for (const N of T) e.push(`   UniqueName=${N.uid}   "Is Auto Point"=No   IsSpecial=${N.special ? "Yes" : "No"}   X=${t(N.x)}   Y=${t(N.y)}   Z=${t(l)}   GUID=${c()}`);
  }
  const I = [];
  let y = u * 9 + 1;
  const m = (o, s, i) => {
    for (let a = 0; a < u; a++) {
      const r = h[a];
      if (Math.abs(r.xCol - o) < 1e-3 && Math.abs(r.yCol - s) < 1e-3 && Math.abs(l - i) < 1e-3) return a * 9 + 9;
    }
    const n = y++;
    return e.push(`   UniqueName=${n}   "Is Auto Point"=No   IsSpecial=No   X=${t(o)}   Y=${t(s)}   Z=${t(i)}   GUID=${c()}`), n;
  };
  for (let o = 0; o < A.length; o++) {
    const s = A[o], i = s.z ?? l, n = m(s.x1, s.y1, i), a = m(s.x2, s.y2, i);
    I.push({ vigaIdx: o, jStart: n, jEnd: a });
  }
  e.push(" "), e.push('TABLE:  "FLOOR OBJECT CONNECTIVITY"');
  for (let o = 0; o < u; o++) {
    const s = h[o], i = o * 9, n = s.Lz * s.Bz, a = 2 * (s.Lz + s.Bz), r = s.bc * s.bc, T = 4 * s.bc;
    e.push(`   "Unique Name"=${o + 1}        UniquePt1=${i + 1}   UniquePt2=${i + 2}   UniquePt3=${i + 3}   UniquePt4=${i + 4}   Perimeter=${t(a)}   Area=${t(n)}   GUID=${c()}`), e.push(`   "Unique Name"=LOAD${o + 1}    UniquePt1=${i + 5}   UniquePt2=${i + 6}   UniquePt3=${i + 7}   UniquePt4=${i + 8}   Perimeter=${t(T)}   Area=${t(r)}   GUID=${c()}`);
  }
  e.push(" "), e.push('TABLE:  "JOINT ASSIGNMENTS - FLOOR MESHING OPTION"');
  for (let o = 0; o < u; o++) {
    const s = o * 9;
    e.push(`   UniqueName=${s + 9}   IncludeInMesh=Yes`);
  }
  e.push(" "), e.push('TABLE:  "JOINT LOADS ASSIGNMENTS - FORCE"');
  for (let o = 0; o < u; o++) {
    const s = h[o], i = o * 9, n = s.P_dead_kN * d, a = (s.Mx_dead_kNm ?? 0) * d, r = (s.My_dead_kNm ?? 0) * d;
    (n !== 0 || a !== 0 || r !== 0) && e.push(`   UniqueName=${i + 9}   "Load Pattern"=Dead   FX=0   FY=0   FZ=${t(-n)}   MX=${t(a)}   MY=${t(r)}   MZ=0   "X Dimension"=${t(s.bc)}   "Y Dimension"=${t(s.bc)}   GUID=${c()}`);
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
  const x = Math.min(...h.map((o) => Math.min(o.Lz, o.Bz))), U = Math.round(Math.max(0.15, x / 6) * 100) / 100;
  if (e.push('TABLE:  "ANALYSIS OPTIONS - AUTOMATIC MESH SETTINGS FOR FLOORS"'), e.push(`   "Mesh Option"=Rectangular   "Use Localized Meshing"=Yes   "Merge Joints"=Yes   "Maximum Mesh Size"=${t(U)}`), e.push(" "), e.push('TABLE:  "ANALYSIS MODELING OPTIONS"'), e.push('   "Two Dimensional Only"=No   "Rigid Diaphragm At Top"=No   "Ignore Vertical Offsets"=Yes'), e.push(" "), e.push('TABLE:  "ANALYSIS OPTIONS - SAPFIRE OPTIONS"'), e.push('   "Solver Option"=Advanced   "Analysis Process"=Auto   "Number Analysis Threads"=0   "Max File Size"=0'), e.push(" "), e.push('TABLE:  "ANALYSIS OPTIONS - DESIGN AND RESPONSE RECOVERY OPTIONS"'), e.push('   "Number Design Threads"=0   "Number Recovery Threads"=0   "Use Memory Mapped Files"="Program Determined"   "Allow Model Differences"=No'), e.push(" "), e.push('TABLE:  "ANALYSIS OPTIONS - CRACKING ANALYSIS OPTIONS"'), e.push('   "Reinforcement Source"="User and Designed"   "Minimum Tension Ratio"=0.0018   "Minimum Compression Ratio"=0'), e.push(" "), A.length > 0) {
    const o = /* @__PURE__ */ new Map();
    for (const s of A) {
      const i = `${s.b.toFixed(3)}x${s.h.toFixed(3)}`;
      o.has(i) || o.set(i, { b: s.b, h: s.h });
    }
    e.push('TABLE:  "FRAME SECTION PROPERTY DEFINITIONS - SUMMARY"');
    for (const [s, i] of o) {
      const n = i.b * i.h, a = i.b * i.h ** 3 / 12, r = i.h * i.b ** 3 / 12, T = 0.21 * Math.pow(Math.min(i.b, i.h), 3) * Math.max(i.b, i.h), N = 5 / 6 * n, D = 5 / 6 * n, O = a / (i.h / 2), $ = r / (i.b / 2), g = i.b * i.h ** 2 / 4, F = i.h * i.b ** 2 / 4, B = Math.sqrt(a / n), b = Math.sqrt(r / n);
      e.push(`   Name=VAmarre_${s}   Material=4000Psi   Shape="Concrete Rectangular"   Color=Magenta   Area=${t(n)}   J=${t(T)}   I33=${t(a)}   I22=${t(r)}   As2=${t(N)}   As3=${t(D)}   S33Pos=${t(O)}   S33Neg=${t(O)}   S22Pos=${t($)}   S22Neg=${t($)}   Z33=${t(g)}   Z22=${t(F)}   R33=${t(B)}   R22=${t(b)}   "CG Offset 3"=0   "CG Offset 2"=0   "PNA Offset 3"=0   "PNA Offset 2"=0   "Area Modifier"=1   "As2 Modifier"=1   "As3 Modifier"=1   "J Modifier"=1   "I33 Modifier"=1   "I22 Modifier"=1   "Mass Modifier"=1   "Weight Modifier"=1`);
    }
    e.push(" "), e.push('TABLE:  "FRAME SECTION PROPERTY DEFINITIONS - CONCRETE RECTANGULAR"');
    for (const [s, i] of o) e.push(`   Name=VAmarre_${s}   Material=4000Psi   "From File?"=No   Depth=${t(i.h)}   Width=${t(i.b)}   "Rigid Zone?"=No   "Notional Size Type"=User   "Notional User Size"=0.1   "Section Type"=Beam   "Area Modifier"=1   "As2 Modifier"=1   "As3 Modifier"=1   "J Modifier"=1   "I22 Modifier"=1   "I33 Modifier"=1   "Mass Modifier"=1   "Weight Modifier"=1   Color=Magenta   GUID=${c()}`);
    e.push(" "), e.push('TABLE:  "BEAM OBJECT CONNECTIVITY"');
    for (const s of I) {
      const i = A[s.vigaIdx], n = i.x2 - i.x1, a = i.y2 - i.y1, r = Math.sqrt(n * n + a * a);
      e.push(`   "Unique Name"=${s.vigaIdx + 1}   UniquePtI=${s.jStart}   UniquePtJ=${s.jEnd}   Length=${t(r)}   GUID=${c()}`);
    }
    e.push(" "), e.push('TABLE:  "FRAME ASSIGNMENTS - SECTION PROPERTIES"');
    for (const s of I) {
      const i = A[s.vigaIdx], n = `${i.b.toFixed(3)}x${i.h.toFixed(3)}`;
      e.push(`   UniqueName=${s.vigaIdx + 1}   Shape="Concrete Rectangular"   "Auto Select List"=N.A.   "Section Property"=VAmarre_${n}`);
    }
    e.push(" ");
  }
  return e.push("END TABLE DATA"), e.push(""), e.join(`
`);
}
function _(p, S = "cimentacion_edificio.f2k") {
  const f = Y(p), l = new Blob([f], { type: "text/plain;charset=utf-8" }), h = URL.createObjectURL(l), u = document.createElement("a");
  u.href = h, u.download = S, document.body.appendChild(u), u.click(), document.body.removeChild(u), URL.revokeObjectURL(h);
}
export {
  _ as downloadEdificioCimentacionF2k,
  Y as exportEdificioCimentacionF2k
};
