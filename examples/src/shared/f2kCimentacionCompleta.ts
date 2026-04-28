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
  L.push(`TABLE:  "MATERIAL PROPERTIES - GENERAL"`);
  L.push(`   Material=4000Psi   Type=Concrete   SymType=Isotropic   Grade="f'c 4000 psi"   Color=Gray8Dark   GUID=${guid()}`);
  L.push(` `);
  L.push(`TABLE:  "MATERIAL PROPERTIES - BASIC MECHANICAL PROPERTIES"`);
  L.push(`   Material=4000Psi   DensityType=Weight   UnitWeight=${fmt(UnitWeight)}   UnitMass=${fmt(UnitMass)}   E1=${fmt(E_tonf_m2)}   G12=${fmt(G12_tonf_m2)}   U12=0.2   A1=9.9E-06`);
  L.push(` `);
  L.push(`TABLE:  "MATERIAL PROPERTIES - CONCRETE DATA"`);
  L.push(`   Material=4000Psi   Fc=${fmt(Fc_tonf_m2)}   LtWtConc=No   IsUserFr=No   SSCurveOpt=Mander   SSHysType=Concrete   SFc=0.00221914   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
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

  // ── VIGAS DE AMARRE: solo secciones + LINE OBJECT CONNECTIVITY
  // (los joints ya están agregados arriba en POINT OBJECT CONNECTIVITY) ──
  if (vigasArr.length > 0) {
    L.push(`TABLE:  "FRAME SECTION PROPERTIES - GENERAL"`);
    const sectionsCreated = new Set<string>();
    for (let i = 0; i < vigasArr.length; i++) {
      const v = vigasArr[i];
      const key = `${v.b.toFixed(3)}x${v.h.toFixed(3)}`;
      if (!sectionsCreated.has(key)) {
        sectionsCreated.add(key);
        const A = v.b * v.h;
        const I33 = (v.b * v.h ** 3) / 12;
        const I22 = (v.h * v.b ** 3) / 12;
        const J = 0.21 * Math.pow(Math.min(v.b, v.h), 3) * Math.max(v.b, v.h);
        L.push(`   SectionName=VAmarre_${key}   Material=4000Psi   Shape=Rectangular   t3=${fmt(v.h)}   t2=${fmt(v.b)}   Area=${fmt(A)}   TorsConst=${fmt(J)}   I33=${fmt(I33)}   I22=${fmt(I22)}   AS2=${fmt(A*5/6)}   AS3=${fmt(A*5/6)}   S33=${fmt(I33/(v.h/2))}   S22=${fmt(I22/(v.b/2))}   GUID=${guid()}`);
      }
    }
    L.push(` `);
    L.push(`TABLE:  "LINE OBJECT CONNECTIVITY"`);
    for (const vj of vigaJointsMap) {
      L.push(`   UniqueName=VA${vj.vigaIdx+1}   UniquePtI=${vj.jStart}   UniquePtJ=${vj.jEnd}   GUID=${guid()}`);
    }
    L.push(` `);
    L.push(`TABLE:  "LINE ASSIGNMENTS - SECTION PROPERTIES"`);
    for (const vj of vigaJointsMap) {
      const v = vigasArr[vj.vigaIdx];
      const key = `${v.b.toFixed(3)}x${v.h.toFixed(3)}`;
      L.push(`   UniqueName=VA${vj.vigaIdx+1}   "Section Property"=VAmarre_${key}`);
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
