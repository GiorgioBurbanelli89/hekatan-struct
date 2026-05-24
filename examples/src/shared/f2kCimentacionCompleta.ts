/**
 * SAFE .f2k Exporter — CIMENTACIÓN COMPLETA del edificio (N zapatas en 1 archivo)
 *
 * Genera UN solo archivo .f2k con TODAS las zapatas del edificio (con sus
 * P, Mx, My individuales) como slabs separados en el mismo modelo SAFE.
 * Mismo formato verificado contra `Zapata aislada.f2k` (SAFE 20.x), pero
 * extendido a múltiples zapatas con joints e IDs únicos.
 *
 * Estructura por zapata i (i=0..N-1):
 *   joints i·9+1 .. i·9+9   (4 esquinas perímetro + 4 patch col + 1 centro)
 *   slab Footing(i+1)        (zapata con spring)
 *   slab Stiff(i+1)         (patch rígido bajo columna)
 *   joint load en i·9+9     (centro de zapata)
 */

const KN_TO_TONF = 1 / 9.80665;

function guid(): string {
  try {
    const c = (globalThis as any).crypto;
    if (c && typeof c.randomUUID === "function") return c.randomUUID();
  } catch {}
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function n(v: number): string {
  if (v === 0) return "0";
  if (Math.abs(v) < 1e-10) return "0";
  return v.toString();
}

export interface ZapataItem {
  /** Centro global de la zapata en X (m) */
  xC: number;
  /** Centro global de la zapata en Y (m) */
  yC: number;
  /** Posición global X de la columna (puede diferir del centro en lindero/esquinera) */
  xCol: number;
  /** Posición global Y de la columna */
  yCol: number;
  /** Lados X de la zapata (m) */
  Lz: number;
  /** Lado Y de la zapata (m) */
  Bz: number;
  /** Espesor (m) */
  tz: number;
  /** Lado de la columna (cuadrada) (m) */
  bc: number;
  /** Carga axial muerta (kN, +compresión) */
  P_dead_kN: number;
  Mx_dead_kNm?: number;
  My_dead_kNm?: number;
  /** Identificador (NodeIdx del edificio) — solo para logging/etiqueta */
  label?: string | number;
}

export interface VigaAmarreItem {
  /** Centro X inicio (m, global) */
  x1: number;
  /** Centro Y inicio (m, global) */
  y1: number;
  /** Centro X fin (m, global) */
  x2: number;
  /** Centro Y fin (m, global) */
  y2: number;
  /** Altura sección viga (m) */
  h: number;
  /** Ancho sección viga (m) */
  b: number;
  /** Cota Z (m) — típicamente la misma de la zapata o pedestal */
  z?: number;
}

export interface F2kCimentacionData {
  zapatas: ZapataItem[];
  /** Vigas de amarre (opcional) — frames entre zapatas/pedestales */
  vigasAmarre?: VigaAmarreItem[];
  /** Módulo de balasto único, kN/m³ (todos comparten el mismo subgrade) */
  ks_kNm3: number;
  /** E del concreto, MPa (default f'c=4000 psi → 24,855 MPa) */
  E_concreto_MPa?: number;
  /** Cota Z global de la cimentación (m). Default 0. */
  Z?: number;
}

export function exportEdificioCimentacionF2k(data: F2kCimentacionData): string {
  const E_MPa = data.E_concreto_MPa ?? 24855;
  const ks_kNm3 = data.ks_kNm3;
  const Z = data.Z ?? 0;
  const zapatas = data.zapatas;
  const Nz = zapatas.length;

  // Conversiones
  const ks_tonf_m3 = ks_kNm3 * KN_TO_TONF;
  const E_tonf_m2 = (E_MPa * 1000) / 9.80665;
  const G12_tonf_m2 = E_tonf_m2 / (2 * (1 + 0.2));
  const UnitWeight = 24 * KN_TO_TONF;
  const UnitMass = UnitWeight / 9.80665;
  const Fc_tonf_m2 = (E_MPa / 4700) ** 2 * 1000 / 9.80665;

  const fmt = n;
  const L: string[] = [];
  L.push(`File "Cimentacion_Edificio_Hekatan.f2k" exportado desde Hekatan Struct ${new Date().toISOString().slice(0, 10)} at ${new Date().toLocaleTimeString()}`);
  L.push(`File contains ${Nz} zapatas en un solo modelo SAFE.`);
  L.push(` `);

  // ── PROGRAM CONTROL ──
  L.push(`TABLE:  "PROGRAM CONTROL"`);
  L.push(`   ProgramName=SAFE   Version=20.3.0   ProgLevel="Post Tensioning"   LicenseNum=3010-*12MBTJ2L34MJLQ5   CurrUnits="tonf, m, C"   CompBmCode="AISC 360-16"   ConcFrmCode="ACI 318-19"   ConcSlbCode="ACI 318-19"`);
  L.push(` `);

  // ── MATERIAL PROPERTIES ──
  // 4000Psi: concrete f'c=4000psi para slabs/frames de cimentación.
  // A615Gr60: rebar ASTM A615 Grade 60 — requerido por SAFE 20.3 como
  // "Longitudinal Rebar Material" en cualquier sección CONCRETE RECTANGULAR
  // (sin esto, SAFE descarta la sección al importar el F2K y la viga de
  // amarre queda con sección default → bug reportado en deploy).
  L.push(`TABLE:  "MATERIAL PROPERTIES - GENERAL"`);
  L.push(`   Material=4000Psi   Type=Concrete   SymType=Isotropic   Grade="f'c 4000 psi"   Color=Gray8Dark   GUID=${guid()}`);
  L.push(`   Material=A615Gr60   Type=Rebar   SymType=Uniaxial   Grade="Grade 60"   Color=Green   GUID=${guid()}`);
  L.push(` `);
  L.push(`TABLE:  "MATERIAL PROPERTIES - BASIC MECHANICAL PROPERTIES"`);
  L.push(`   Material=4000Psi   DensityType=Weight   UnitWeight=${fmt(UnitWeight)}   UnitMass=${fmt(UnitMass)}   E1=${fmt(E_tonf_m2)}   G12=${fmt(G12_tonf_m2)}   U12=0.2   A1=9.9E-06`);
  // Rebar: peso 7849 kg/m³ ≈ 7.849 tonf/m³, E=200 GPa ≈ 20,389,019 tonf/m²,
  // α térmico ≈ 6.5E-6 /°C (ASTM). Sin G12/U12 (Uniaxial).
  L.push(`   Material=A615Gr60   DensityType=Weight   UnitWeight=7.849   UnitMass=0.800380   E1=20389019.16   A1=6.5E-06`);
  L.push(` `);
  L.push(`TABLE:  "MATERIAL PROPERTIES - CONCRETE DATA"`);
  L.push(`   Material=4000Psi   Fc=${fmt(Fc_tonf_m2)}   LtWtConc=No   IsUserFr=No   SSCurveOpt=Mander   SSHysType=Concrete   SFc=0.00221914   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  L.push(` `);
  // Rebar data: Fy=420 MPa ≈ 42,184 tonf/m² (Grade 60 nominal), Fu=630 MPa ≈ 63,276 tonf/m².
  L.push(`TABLE:  "MATERIAL PROPERTIES - REBAR DATA"`);
  L.push(`   Material=A615Gr60   Fy=42184.18   Fu=63276.27   Fye=46402.60   Fue=69603.89   SSCurveOpt=Simple   SSHysType=Kinematic   SHard=0.01   SCap=0.09   FinalSlope=-0.1`);
  L.push(` `);

  // ── AREA SECTION + SLAB PROPERTIES ──
  // UNA propiedad de slab por zapata para permitir distintos espesores
  // (en la práctica suelen ser iguales, pero soportamos heterogéneo).
  L.push(`TABLE:  "AREA SECTION PROPERTY DEFINITIONS - SUMMARY"`);
  for (let i = 0; i < Nz; i++) {
    const z = zapatas[i];
    L.push(`   Name=Footing${i+1}   Type=Slab   "Element Type"=Shell-Thin   Material=4000Psi   "Total Thickness"=${fmt(z.tz)}`);
    L.push(`   Name=Stiff${i+1}     Type=Slab   "Element Type"=Shell-Thin   Material=4000Psi   "Total Thickness"=${fmt(z.tz)}`);
  }
  L.push(` `);

  L.push(`TABLE:  "SLAB PROPERTY DEFINITIONS"`);
  for (let i = 0; i < Nz; i++) {
    const z = zapatas[i];
    L.push(`   Name=Footing${i+1}   "Modeling Type"=Shell-Thin   "Property Type"=Footing   Material=4000Psi   "Slab Thickness"=${fmt(z.tz)}   "Notional Size Type"=Auto   "Notional Auto Factor"=1   "f11 Modifier"=1   "f22 Modifier"=1   "f12 Modifier"=1   "m11 Modifier"=1   "m22 Modifier"=1   "m12 Modifier"=1   "v13 Modifier"=1   "v23 Modifier"=1   "Mass Modifier"=1   "Weight Modifier"=1   Color=Blue   GUID=${guid()}   Orthotropic?=No`);
    L.push(`   Name=Stiff${i+1}     "Modeling Type"=Shell-Thin   "Property Type"=Stiff     Material=4000Psi   "Slab Thickness"=${fmt(z.tz)}   "Notional Size Type"=Auto   "Notional Auto Factor"=1   "f11 Modifier"=1   "f22 Modifier"=1   "f12 Modifier"=1   "m11 Modifier"=100   "m22 Modifier"=100   "m12 Modifier"=100   "v13 Modifier"=1   "v23 Modifier"=1   "Mass Modifier"=0   "Weight Modifier"=0   Color=Cyan   GUID=${guid()}   Orthotropic?=No`);
  }
  L.push(` `);

  // ── SPRING PROPERTY: UN ks compartido (subgrade uniforme) ──
  L.push(`TABLE:  "SPRING PROPERTY DEFINITIONS - AREA SPRINGS"`);
  L.push(`   Name=ASpr1   "Subgrade Modulus"=${fmt(ks_tonf_m3)}   "Nonlinear Option"="Compression Only"   Color=Green   GUID=${guid()}`);
  L.push(` `);

  // ── LOAD PATTERN + CASE + MASS SOURCE ──
  L.push(`TABLE:  "LOAD PATTERN DEFINITIONS"`);
  L.push(`   Name=Dead   "Is Auto Load"=No   Type=Dead   "Self Weight Multiplier"=1   GUID=${guid()}`);
  L.push(` `);
  L.push(`TABLE:  "LOAD CASE DEFINITIONS - SUMMARY"`);
  L.push(`   Name=Dead   Type="Linear Static"   GUID=${guid()}`);
  L.push(` `);
  L.push(`TABLE:  "LOAD CASE DEFINITIONS - LINEAR STATIC"`);
  L.push(`   Name=Dead   "Exclude Group"=None   "Mass Source"=MsSrc1   "Initial Condition"=Unstressed   "Load Type"=Load   "Load Name"=Dead   "Load SF"=1   "Design Type"="Program Determined"   GUID=${guid()}`);
  L.push(` `);
  L.push(`TABLE:  "MASS SOURCE DEFINITION"`);
  L.push(`   Name=MsSrc1   "Is Default"=Yes   "Include Lateral Mass?"=No   "Include Vertical Mass?"=Yes   "Lump Mass?"=Yes   "Source Self Mass?"=Yes   "Source Added Mass?"=Yes   "Source Load Patterns?"=No   "Move Mass Centroid?"=No   GUID=${guid()}`);
  L.push(` `);

  // ── POINT OBJECT CONNECTIVITY: TODOS los joints en UNA sola tabla ──
  // (zapatas: 9 por zapata + vigas: 2 por viga). SAFE rechaza tablas
  // POINT OBJECT CONNECTIVITY duplicadas — debe ser una sola.
  const vigasArr = data.vigasAmarre ?? [];
  L.push(`TABLE:  "POINT OBJECT CONNECTIVITY"`);
  // Zapatas joints (1 .. Nz*9)
  for (let i = 0; i < Nz; i++) {
    const z = zapatas[i];
    const offset = i * 9;
    const halfL = z.Lz / 2;
    const halfB = z.Bz / 2;
    const halfBc = z.bc / 2;
    const corners = [
      { uid: offset+1, x: z.xC - halfL, y: z.yC - halfB, special: false },
      { uid: offset+2, x: z.xC + halfL, y: z.yC - halfB, special: false },
      { uid: offset+3, x: z.xC + halfL, y: z.yC + halfB, special: false },
      { uid: offset+4, x: z.xC - halfL, y: z.yC + halfB, special: false },
      { uid: offset+5, x: z.xCol - halfBc, y: z.yCol - halfBc, special: false },
      { uid: offset+6, x: z.xCol + halfBc, y: z.yCol - halfBc, special: false },
      { uid: offset+7, x: z.xCol + halfBc, y: z.yCol + halfBc, special: false },
      { uid: offset+8, x: z.xCol - halfBc, y: z.yCol + halfBc, special: false },
      { uid: offset+9, x: z.xCol, y: z.yCol, special: true },
    ];
    for (const c of corners) {
      L.push(`   UniqueName=${c.uid}   "Is Auto Point"=No   IsSpecial=${c.special?"Yes":"No"}   X=${fmt(c.x)}   Y=${fmt(c.y)}   Z=${fmt(Z)}   GUID=${guid()}`);
    }
  }
  // Vigas de amarre joints (Nz*9+1 .. Nz*9+2*nVigas)
  // Reuso joints existentes si las coordenadas coinciden con un joint de zapata.
  const vigaJointsMap: Array<{vigaIdx: number, jStart: number, jEnd: number}> = [];
  let nextVigaId = Nz * 9 + 1;
  // Helper: encontrar joint con coords (x, y) entre joints zapata
  const findOrCreateJoint = (x: number, y: number, zCoord: number): number => {
    for (let i = 0; i < Nz; i++) {
      const z = zapatas[i];
      // Solo el centro de columna (joint offset+9) coincidirá típicamente
      if (Math.abs(z.xCol - x) < 1e-3 && Math.abs(z.yCol - y) < 1e-3 && Math.abs(Z - zCoord) < 1e-3) {
        return i * 9 + 9;  // centro columna ya existe
      }
    }
    // Crear nuevo joint
    const newId = nextVigaId++;
    L.push(`   UniqueName=${newId}   "Is Auto Point"=No   IsSpecial=No   X=${fmt(x)}   Y=${fmt(y)}   Z=${fmt(zCoord)}   GUID=${guid()}`);
    return newId;
  };
  for (let i = 0; i < vigasArr.length; i++) {
    const v = vigasArr[i];
    const zV = v.z ?? Z;
    const jStart = findOrCreateJoint(v.x1, v.y1, zV);
    const jEnd = findOrCreateJoint(v.x2, v.y2, zV);
    vigaJointsMap.push({ vigaIdx: i, jStart, jEnd });
  }
  L.push(` `);

  // ── FLOOR OBJECT CONNECTIVITY: slabs y patches con joints únicos ──
  L.push(`TABLE:  "FLOOR OBJECT CONNECTIVITY"`);
  for (let i = 0; i < Nz; i++) {
    const z = zapatas[i];
    const offset = i * 9;
    const A_zap = z.Lz * z.Bz;
    const Per_zap = 2 * (z.Lz + z.Bz);
    const A_col = z.bc * z.bc;
    const Per_col = 4 * z.bc;
    L.push(`   "Unique Name"=${i+1}        UniquePt1=${offset+1}   UniquePt2=${offset+2}   UniquePt3=${offset+3}   UniquePt4=${offset+4}   Perimeter=${fmt(Per_zap)}   Area=${fmt(A_zap)}   GUID=${guid()}`);
    L.push(`   "Unique Name"=LOAD${i+1}    UniquePt1=${offset+5}   UniquePt2=${offset+6}   UniquePt3=${offset+7}   UniquePt4=${offset+8}   Perimeter=${fmt(Per_col)}   Area=${fmt(A_col)}   GUID=${guid()}`);
  }
  L.push(` `);

  // ── MESH OPTION: incluir el centro de cada columna ──
  L.push(`TABLE:  "JOINT ASSIGNMENTS - FLOOR MESHING OPTION"`);
  for (let i = 0; i < Nz; i++) {
    const offset = i * 9;
    L.push(`   UniqueName=${offset+9}   IncludeInMesh=Yes`);
  }
  L.push(` `);

  // ── JOINT LOADS — P, Mx, My por columna ──
  L.push(`TABLE:  "JOINT LOADS ASSIGNMENTS - FORCE"`);
  for (let i = 0; i < Nz; i++) {
    const z = zapatas[i];
    const offset = i * 9;
    const P_d = z.P_dead_kN * KN_TO_TONF;
    const Mx_d = (z.Mx_dead_kNm ?? 0) * KN_TO_TONF;
    const My_d = (z.My_dead_kNm ?? 0) * KN_TO_TONF;
    if (P_d !== 0 || Mx_d !== 0 || My_d !== 0) {
      L.push(`   UniqueName=${offset+9}   "Load Pattern"=Dead   FX=0   FY=0   FZ=${fmt(-P_d)}   MX=${fmt(Mx_d)}   MY=${fmt(My_d)}   MZ=0   "X Dimension"=${fmt(z.bc)}   "Y Dimension"=${fmt(z.bc)}   GUID=${guid()}`);
    }
  }
  L.push(` `);

  // ── AREA ASSIGNMENTS ──
  L.push(`TABLE:  "AREA ASSIGNMENTS - SUMMARY"`);
  for (let i = 0; i < Nz; i++) {
    L.push(`   UniqueName=${i+1}        "Section Property"=Footing${i+1}   "Property Type"=Slab   Spring=ASpr1`);
    L.push(`   UniqueName=LOAD${i+1}    "Section Property"=Stiff${i+1}     "Property Type"=Slab`);
  }
  L.push(` `);

  L.push(`TABLE:  "AREA ASSIGNMENTS - SECTION PROPERTIES"`);
  for (let i = 0; i < Nz; i++) {
    L.push(`   UniqueName=${i+1}        "Section Property"=Footing${i+1}   "Property Type"=Slab`);
    L.push(`   UniqueName=LOAD${i+1}    "Section Property"=Stiff${i+1}     "Property Type"=Slab`);
  }
  L.push(` `);

  L.push(`TABLE:  "AREA ASSIGNMENTS - INSERTION POINT"`);
  for (let i = 0; i < Nz; i++) {
    L.push(`   UniqueName=${i+1}        "Cardinal Point"=Top   Transform=No`);
    L.push(`   UniqueName=LOAD${i+1}    "Cardinal Point"=Top   Transform=No`);
  }
  L.push(` `);

  L.push(`TABLE:  "AREA ASSIGNMENTS - AREA SPRINGS"`);
  for (let i = 0; i < Nz; i++) {
    L.push(`   UniqueName=${i+1}   "Spring Property"=ASpr1`);
  }
  L.push(` `);

  L.push(`TABLE:  "AREA ASSIGNMENTS - FLOOR AUTO MESH OPTIONS"`);
  for (let i = 0; i < Nz; i++) {
    L.push(`   UniqueName=${i+1}        "Mesh Option"=Default   "Add Restraints"=No`);
    L.push(`   UniqueName=LOAD${i+1}    "Mesh Option"=Default   "Add Restraints"=No`);
  }
  L.push(` `);

  // ── AUTO EDGE CONSTRAINTS: fuerza unión de bordes entre Footing y Stiff
  // (sin esto, el patch chico bajo la columna no comparte nodos con la
  // zapata grande y SAFE genera mesh disjoint — fuente de las warnings
  // "Check meshing, At area X (% Increment)").
  L.push(`TABLE:  "AREA ASSIGNMENTS - AUTO EDGE CONSTRAINTS"`);
  for (let i = 0; i < Nz; i++) {
    L.push(`   UniqueName=${i+1}        Constraint=Yes`);
    L.push(`   UniqueName=LOAD${i+1}    Constraint=Yes`);
  }
  L.push(` `);

  // ── ANALYSIS MESH SETTINGS: Rectangular + localized + merge joints
  // Tamaño máximo de elemento adaptado al tamaño típico de zapata.
  // Con Localized Meshing=Yes, SAFE ajusta el mesh alrededor del Stiff
  // patch reduciendo el % de incremento entre elementos vecinos.
  const minLado = Math.min(...zapatas.map(z => Math.min(z.Lz, z.Bz)));
  const maxMeshSize = Math.round(Math.max(0.15, minLado / 6) * 100) / 100;
  L.push(`TABLE:  "ANALYSIS OPTIONS - AUTOMATIC MESH SETTINGS FOR FLOORS"`);
  L.push(`   "Mesh Option"=Rectangular   "Use Localized Meshing"=Yes   "Merge Joints"=Yes   "Maximum Mesh Size"=${fmt(maxMeshSize)}`);
  L.push(` `);

  // ── ANALYSIS RUN-READY OPTIONS ──
  // Estas tablas hacen que SAFE 20.x pueda ejecutar Run Analysis (F5)
  // automáticamente sin pasos manuales. Sin ellas, el .f2k se importa
  // pero RunAnalysis devuelve "model has not been analyzed" porque
  // faltan las opciones del solver SAPFire y de modelado.
  // Valores tomados de un modelo SAFE 20.3 real (Riochico, verificado).

  L.push(`TABLE:  "ANALYSIS MODELING OPTIONS"`);
  L.push(`   "Two Dimensional Only"=No   "Rigid Diaphragm At Top"=No   "Ignore Vertical Offsets"=Yes`);
  L.push(` `);

  L.push(`TABLE:  "ANALYSIS OPTIONS - SAPFIRE OPTIONS"`);
  L.push(`   "Solver Option"=Advanced   "Analysis Process"=Auto   "Number Analysis Threads"=0   "Max File Size"=0`);
  L.push(` `);

  L.push(`TABLE:  "ANALYSIS OPTIONS - DESIGN AND RESPONSE RECOVERY OPTIONS"`);
  L.push(`   "Number Design Threads"=0   "Number Recovery Threads"=0   "Use Memory Mapped Files"="Program Determined"   "Allow Model Differences"=No`);
  L.push(` `);

  L.push(`TABLE:  "ANALYSIS OPTIONS - CRACKING ANALYSIS OPTIONS"`);
  L.push(`   "Reinforcement Source"="User and Designed"   "Minimum Tension Ratio"=0.0018   "Minimum Compression Ratio"=0`);
  L.push(` `);

  // ── VIGAS DE AMARRE: solo secciones + LINE OBJECT CONNECTIVITY
  // (los joints ya están agregados arriba en POINT OBJECT CONNECTIVITY) ──
  if (vigasArr.length > 0) {
    // SAFE usa convención mixta verificada contra archivos reales SAFE 20.x:
    //   FRAME SECTION PROPERTY DEFINITIONS - SUMMARY     (sección general)
    //   FRAME SECTION PROPERTY DEFINITIONS - CONCRETE RECTANGULAR (dimensiones)
    //   BEAM OBJECT CONNECTIVITY                         (frame element refs)
    //   FRAME ASSIGNMENTS - SECTION PROPERTIES           (asignación)
    // BEAM se usa solo para CONNECTIVITY; FRAME para todo lo demás.

    // Calcular propiedades por sección única
    const sectionsCreated = new Map<string, { b: number; h: number }>();
    for (const v of vigasArr) {
      const key = `${v.b.toFixed(3)}x${v.h.toFixed(3)}`;
      if (!sectionsCreated.has(key)) sectionsCreated.set(key, { b: v.b, h: v.h });
    }

    // FRAME SECTION PROPERTY DEFINITIONS - SUMMARY
    L.push(`TABLE:  "FRAME SECTION PROPERTY DEFINITIONS - SUMMARY"`);
    for (const [key, dim] of sectionsCreated) {
      const A = dim.b * dim.h;
      const I33 = (dim.b * dim.h ** 3) / 12;
      const I22 = (dim.h * dim.b ** 3) / 12;
      const J = 0.21 * Math.pow(Math.min(dim.b, dim.h), 3) * Math.max(dim.b, dim.h);
      const As2 = (5 / 6) * A;
      const As3 = (5 / 6) * A;
      const S33 = I33 / (dim.h / 2);
      const S22 = I22 / (dim.b / 2);
      const Z33 = (dim.b * dim.h ** 2) / 4;
      const Z22 = (dim.h * dim.b ** 2) / 4;
      const R33 = Math.sqrt(I33 / A);
      const R22 = Math.sqrt(I22 / A);
      L.push(`   Name=VAmarre_${key}   Material=4000Psi   Shape="Concrete Rectangular"   Color=Magenta   Area=${fmt(A)}   J=${fmt(J)}   I33=${fmt(I33)}   I22=${fmt(I22)}   As2=${fmt(As2)}   As3=${fmt(As3)}   S33Pos=${fmt(S33)}   S33Neg=${fmt(S33)}   S22Pos=${fmt(S22)}   S22Neg=${fmt(S22)}   Z33=${fmt(Z33)}   Z22=${fmt(Z22)}   R33=${fmt(R33)}   R22=${fmt(R22)}   "CG Offset 3"=0   "CG Offset 2"=0   "PNA Offset 3"=0   "PNA Offset 2"=0   "Area Modifier"=1   "As2 Modifier"=1   "As3 Modifier"=1   "J Modifier"=1   "I33 Modifier"=1   "I22 Modifier"=1   "Mass Modifier"=1   "Weight Modifier"=1`);
    }
    L.push(` `);

    // FRAME SECTION PROPERTY DEFINITIONS - CONCRETE RECTANGULAR
    // Campos `Longitudinal/Shear Rebar Material` y `Flange Dimension Option` +
    // `Cover Top/Bottom` son REQUERIDOS por SAFE 20.3. Sin ellos la sección
    // se descarta al importar (error "Error reading field; record skipped") y
    // la asignación de viga cae a sección default (warning posterior).
    // Cover default 6.35cm (2.5") — típico de cimentación expuesta al suelo.
    L.push(`TABLE:  "FRAME SECTION PROPERTY DEFINITIONS - CONCRETE RECTANGULAR"`);
    for (const [key, dim] of sectionsCreated) {
      L.push(`   Name=VAmarre_${key}   Material=4000Psi   "From File?"=No   Depth=${fmt(dim.h)}   Width=${fmt(dim.b)}   "Rigid Zone?"=No   "Notional Size Type"=User   "Notional User Size"=0.1   "Section Type"=Beam   "Longitudinal Rebar Material"=A615Gr60   "Shear Rebar Material"=A615Gr60   "Flange Dimension Option"="Analysis Property"   "Cover Top"=0.0635   "Cover Bottom"=0.0635   "Area Modifier"=1   "As2 Modifier"=1   "As3 Modifier"=1   "J Modifier"=1   "I22 Modifier"=1   "I33 Modifier"=1   "Mass Modifier"=1   "Weight Modifier"=1   Color=Magenta   GUID=${guid()}`);
    }
    L.push(` `);

    // BEAM OBJECT CONNECTIVITY (formato real SAFE: "Unique Name" con comillas)
    L.push(`TABLE:  "BEAM OBJECT CONNECTIVITY"`);
    for (const vj of vigaJointsMap) {
      // Calcular longitud del beam
      const v = vigasArr[vj.vigaIdx];
      const dx = v.x2 - v.x1, dy = v.y2 - v.y1;
      const len = Math.sqrt(dx*dx + dy*dy);
      L.push(`   "Unique Name"=${vj.vigaIdx+1}   UniquePtI=${vj.jStart}   UniquePtJ=${vj.jEnd}   Length=${fmt(len)}   GUID=${guid()}`);
    }
    L.push(` `);

    // FRAME ASSIGNMENTS - SECTION PROPERTIES (asignar la sección al frame)
    L.push(`TABLE:  "FRAME ASSIGNMENTS - SECTION PROPERTIES"`);
    for (const vj of vigaJointsMap) {
      const v = vigasArr[vj.vigaIdx];
      const key = `${v.b.toFixed(3)}x${v.h.toFixed(3)}`;
      L.push(`   UniqueName=${vj.vigaIdx+1}   Shape="Concrete Rectangular"   "Auto Select List"=N.A.   "Section Property"=VAmarre_${key}`);
    }
    L.push(` `);
  }

  L.push(`END TABLE DATA`);
  L.push(``);
  return L.join("\n");
}

/** Helper: descarga el F2K como archivo. */
export function downloadEdificioCimentacionF2k(
  data: F2kCimentacionData,
  filename: string = "cimentacion_edificio.f2k",
): void {
  const txt = exportEdificioCimentacionF2k(data);
  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
