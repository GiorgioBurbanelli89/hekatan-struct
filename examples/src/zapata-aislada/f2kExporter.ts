/**
 * SAFE .f2k Exporter — exporta zapata-aislada Hekatan al formato SAFE 20.x
 *
 * Re-escrito Apr 2026: la versión anterior usaba nombres de tabla inventados
 * (MATERIAL PROPERTIES 01, SOIL SUBGRADE PROPERTIES, JOINT COORDINATES, etc.)
 * que SAFE rechaza silenciosamente. Esta versión usa los nombres EXACTOS del
 * F2K real (verificado contra `Zapata aislada.f2k` del usuario):
 *
 *   - MATERIAL PROPERTIES - GENERAL                              (no "01")
 *   - MATERIAL PROPERTIES - BASIC MECHANICAL PROPERTIES
 *   - MATERIAL PROPERTIES - CONCRETE DATA
 *   - AREA SECTION PROPERTY DEFINITIONS - SUMMARY
 *   - SLAB PROPERTY DEFINITIONS
 *   - SPRING PROPERTY DEFINITIONS - AREA SPRINGS                 (no "SOIL SUBGRADE")
 *   - LOAD PATTERN DEFINITIONS
 *   - LOAD CASE DEFINITIONS - SUMMARY + LINEAR STATIC
 *   - POINT OBJECT CONNECTIVITY                                  (no "JOINT COORDINATES")
 *   - FLOOR OBJECT CONNECTIVITY                                  (slab como polígono)
 *   - JOINT LOADS ASSIGNMENTS - FORCE                            (no "JOINT LOADS - FORCE")
 *   - AREA ASSIGNMENTS - SUMMARY / SECTION PROPERTIES / INSERTION POINT / AREA SPRINGS / FLOOR AUTO MESH OPTIONS
 *
 * KEY INSIGHT: SAFE define la zapata como POLÍGONO de joints (4 puntos)
 * y auto-meshea internamente. NO necesitamos generar nuestra propia malla Q4.
 */

export interface ZapataF2kData {
  Lz: number;            // m
  Bz: number;            // m
  tz: number;            // m
  bc: number;            // m (lado columna cuadrada — define el patch interior)
  ks_kNm3: number;       // kN/m³
  E_concreto_MPa?: number;  // default 24,855 (f'c=4000 psi)
  P_dead_kN: number;
  P_live_kN: number;
  Mx_dead_kNm?: number;
  My_dead_kNm?: number;
  Mx_live_kNm?: number;
  My_live_kNm?: number;
  /** Tipo de spring (default "area" — único soportado plenamente para zapatas) */
  springType?: "area";
}

const KN_TO_TONF = 1 / 9.80665;

/** Genera un GUID v4 random (SAFE los acepta — no necesitan ser persistentes). */
function guid(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/** Number formatter — preserva precisión SAFE-compatible (alta precisión decimal). */
function n(v: number): string {
  if (v === 0) return "0";
  if (Math.abs(v) < 1e-10) return "0";
  // SAFE típicamente usa 14-15 dígitos significativos
  return v.toString();
}

/**
 * Exporta zapata-aislada como F2K SAFE 20.x — formato verificado contra modelo
 * SAFE real. Las unidades del F2K son tonf, m, C (CurrUnits standard).
 */
export function exportZapataF2k(data: ZapataF2kData): string {
  const Lz = data.Lz;
  const Bz = data.Bz;
  const tz = data.tz;
  const bc = data.bc;
  const ks_kNm3 = data.ks_kNm3;
  const E_MPa = data.E_concreto_MPa ?? 24855;  // f'c=4000 psi default

  // Conversiones SI → SAFE (tonf, m)
  const ks_tonf_m3 = ks_kNm3 * KN_TO_TONF;
  // E del concreto en tonf/m². 1 tonf/m² = 9.80665 kPa = 0.00980665 MPa
  // E (tonf/m²) = E (MPa) × 1000 / 9.80665
  const E_tonf_m2 = (E_MPa * 1000) / 9.80665;
  const G12_tonf_m2 = E_tonf_m2 / (2 * (1 + 0.2));  // G = E / 2(1+ν), ν=0.2 concreto
  // Densidad concreto: 24 kN/m³ → tonf/m³
  const UnitWeight = 24 * KN_TO_TONF;  // ≈ 2.4477
  const UnitMass = UnitWeight / 9.80665;  // mass density ≈ 0.2496
  // f'c en tonf/m². 4000 psi = 27.58 MPa = 2812.28 tonf/m² (igual que F2K original)
  const Fc_tonf_m2 = (E_MPa / 4700) ** 2 * 1000 / 9.80665;  // inverse de Ec=4700√fc
  const P_dead_tonf = data.P_dead_kN * KN_TO_TONF;
  const P_live_tonf = data.P_live_kN * KN_TO_TONF;
  const Mx_d = (data.Mx_dead_kNm ?? 0) * KN_TO_TONF;
  const My_d = (data.My_dead_kNm ?? 0) * KN_TO_TONF;
  const Mx_l = (data.Mx_live_kNm ?? 0) * KN_TO_TONF;
  const My_l = (data.My_live_kNm ?? 0) * KN_TO_TONF;

  // ── Geometría: zapata centrada en (0,0,0), columna en (0,0,0) ──
  const halfL = Lz / 2;
  const halfB = Bz / 2;
  const halfBc = bc / 2;
  const Z = 0;  // SAFE típicamente usa el slab a Z=0 (o Z=story si hay levels)

  // Joints:
  //   1-4: esquinas de la zapata (perímetro exterior)
  //   5-8: esquinas del patch de columna (interior, define la "Stiff" patch)
  //   9: centro (donde se aplica la carga vertical)
  const joints: { uid: number; x: number; y: number; z: number; isSpecial: boolean }[] = [
    { uid: 1, x: -halfL, y: -halfB, z: Z, isSpecial: false },  // SW zapata
    { uid: 2, x:  halfL, y: -halfB, z: Z, isSpecial: false },  // SE zapata
    { uid: 3, x:  halfL, y:  halfB, z: Z, isSpecial: false },  // NE zapata
    { uid: 4, x: -halfL, y:  halfB, z: Z, isSpecial: false },  // NW zapata
    { uid: 5, x: -halfBc, y: -halfBc, z: Z, isSpecial: false }, // SW columna
    { uid: 6, x:  halfBc, y: -halfBc, z: Z, isSpecial: false }, // SE columna
    { uid: 7, x:  halfBc, y:  halfBc, z: Z, isSpecial: false }, // NE columna
    { uid: 8, x: -halfBc, y:  halfBc, z: Z, isSpecial: false }, // NW columna
    { uid: 9, x: 0,       y: 0,       z: Z, isSpecial: true },  // CENTRO (carga aquí)
  ];

  // Floor objects:
  //   1: zapata completa (Footing) → spring asignado
  //   LOAD1: patch de columna (Stiff) → solo geometría, NO spring
  // Nota: SAFE auto-meshea ambos. La zapata "Footing" se mesha con springs distribuidos,
  // el patch "Stiff" rigidiza localmente bajo la columna.

  const fmt = n;
  const L: string[] = [];
  L.push(`File "Zapata_Hekatan.f2k" exportado desde Hekatan Struct ${new Date().toISOString().slice(0, 10)} at ${new Date().toLocaleTimeString()}`);
  L.push(` `);

  // ── PROGRAM CONTROL ──
  L.push(`TABLE:  "PROGRAM CONTROL"`);
  L.push(`   ProgramName=SAFE   Version=20.3.0   ProgLevel="Post Tensioning"   LicenseNum=3010-*12MBTJ2L34MJLQ5   CurrUnits="tonf, m, C"   CompBmCode="AISC 360-16"   ConcFrmCode="ACI 318-19"   ConcSlbCode="ACI 318-19"`);
  L.push(` `);

  // ── MATERIAL PROPERTIES - GENERAL ──
  L.push(`TABLE:  "MATERIAL PROPERTIES - GENERAL"`);
  L.push(`   Material=4000Psi   Type=Concrete   SymType=Isotropic   Grade="f'c 4000 psi"   Color=Gray8Dark   GUID=${guid()}`);
  L.push(` `);

  // ── MATERIAL PROPERTIES - BASIC MECHANICAL PROPERTIES ──
  L.push(`TABLE:  "MATERIAL PROPERTIES - BASIC MECHANICAL PROPERTIES"`);
  L.push(`   Material=4000Psi   DensityType=Weight   UnitWeight=${fmt(UnitWeight)}   UnitMass=${fmt(UnitMass)}   E1=${fmt(E_tonf_m2)}   G12=${fmt(G12_tonf_m2)}   U12=0.2   A1=9.9E-06`);
  L.push(` `);

  // ── MATERIAL PROPERTIES - CONCRETE DATA ──
  L.push(`TABLE:  "MATERIAL PROPERTIES - CONCRETE DATA"`);
  L.push(`   Material=4000Psi   Fc=${fmt(Fc_tonf_m2)}   LtWtConc=No   IsUserFr=No   SSCurveOpt=Mander   SSHysType=Concrete   SFc=0.00221914   SCap=0.005   FinalSlope=-0.1   FAngle=0   DAngle=0`);
  L.push(` `);

  // ── AREA SECTION PROPERTY DEFINITIONS - SUMMARY ──
  L.push(`TABLE:  "AREA SECTION PROPERTY DEFINITIONS - SUMMARY"`);
  L.push(`   Name=Footing1   Type=Slab   "Element Type"=Shell-Thin   Material=4000Psi   "Total Thickness"=${fmt(tz)}`);
  L.push(`   Name=Stiff1     Type=Slab   "Element Type"=Shell-Thin   Material=4000Psi   "Total Thickness"=${fmt(tz)}`);
  L.push(` `);

  // ── SLAB PROPERTY DEFINITIONS ──
  // El "Property Type=Footing" es el que SAFE reconoce como cimentación con spring.
  // El "Property Type=Stiff" es un parche local que rigidiza para distribuir la carga.
  L.push(`TABLE:  "SLAB PROPERTY DEFINITIONS"`);
  L.push(`   Name=Footing1   "Modeling Type"=Shell-Thin   "Property Type"=Footing   Material=4000Psi   "Slab Thickness"=${fmt(tz)}   "Notional Size Type"=Auto   "Notional Auto Factor"=1   "f11 Modifier"=1   "f22 Modifier"=1   "f12 Modifier"=1   "m11 Modifier"=1   "m22 Modifier"=1   "m12 Modifier"=1   "v13 Modifier"=1   "v23 Modifier"=1   "Mass Modifier"=1   "Weight Modifier"=1   Color=Blue   GUID=${guid()}   Orthotropic?=No`);
  L.push(`   Name=Stiff1     "Modeling Type"=Shell-Thin   "Property Type"=Stiff     Material=4000Psi   "Slab Thickness"=${fmt(tz)}   "Notional Size Type"=Auto   "Notional Auto Factor"=1   "f11 Modifier"=1   "f22 Modifier"=1   "f12 Modifier"=1   "m11 Modifier"=100   "m22 Modifier"=100   "m12 Modifier"=100   "v13 Modifier"=1   "v23 Modifier"=1   "Mass Modifier"=0   "Weight Modifier"=0   Color=Cyan   GUID=${guid()}   Orthotropic?=No`);
  L.push(` `);

  // ── SPRING PROPERTY DEFINITIONS - AREA SPRINGS ──
  L.push(`TABLE:  "SPRING PROPERTY DEFINITIONS - AREA SPRINGS"`);
  L.push(`   Name=ASpr1   "Subgrade Modulus"=${fmt(ks_tonf_m3)}   "Nonlinear Option"="Compression Only"   Color=Green   GUID=${guid()}`);
  L.push(` `);

  // ── LOAD PATTERN DEFINITIONS ──
  // Dead pattern con Self Weight Multiplier=1 (default ACI/SAFE):
  //   SAFE auto-calcula el peso propio del slab (V × γ_concreto) y lo suma al
  //   load pattern Dead. NO agregamos SW manualmente como joint force — SAFE
  //   lo hace internamente. Para que Hekatan match con SAFE, también debe
  //   considerarlo (ver computedLabels "P + SW" en zapataAislada.ts).
  L.push(`TABLE:  "LOAD PATTERN DEFINITIONS"`);
  L.push(`   Name=Dead   "Is Auto Load"=No   Type=Dead   "Self Weight Multiplier"=1   GUID=${guid()}`);
  L.push(`   Name=Live   "Is Auto Load"=No   Type=Live   "Self Weight Multiplier"=0   GUID=${guid()}`);
  L.push(` `);

  // ── LOAD CASE DEFINITIONS - SUMMARY ──
  L.push(`TABLE:  "LOAD CASE DEFINITIONS - SUMMARY"`);
  L.push(`   Name=Dead   Type="Linear Static"   GUID=${guid()}`);
  L.push(`   Name=Live   Type="Linear Static"   GUID=${guid()}`);
  L.push(` `);

  // ── LOAD CASE DEFINITIONS - LINEAR STATIC ──
  L.push(`TABLE:  "LOAD CASE DEFINITIONS - LINEAR STATIC"`);
  L.push(`   Name=Dead   "Exclude Group"=None   "Mass Source"=MsSrc1   "Initial Condition"=Unstressed   "Load Type"=Load   "Load Name"=Dead   "Load SF"=1   "Design Type"="Program Determined"   GUID=${guid()}`);
  L.push(`   Name=Live   "Exclude Group"=None   "Mass Source"=MsSrc1   "Initial Condition"=Unstressed   "Load Type"=Load   "Load Name"=Live   "Load SF"=1   "Design Type"="Program Determined"   GUID=${guid()}`);
  L.push(` `);

  // ── MASS SOURCE DEFINITION ──
  L.push(`TABLE:  "MASS SOURCE DEFINITION"`);
  L.push(`   Name=MsSrc1   "Is Default"=Yes   "Include Lateral Mass?"=No   "Include Vertical Mass?"=Yes   "Lump Mass?"=Yes   "Source Self Mass?"=Yes   "Source Added Mass?"=Yes   "Source Load Patterns?"=No   "Move Mass Centroid?"=No   GUID=${guid()}`);
  L.push(` `);

  // ── POINT OBJECT CONNECTIVITY ──
  L.push(`TABLE:  "POINT OBJECT CONNECTIVITY"`);
  for (const j of joints) {
    L.push(`   UniqueName=${j.uid}   "Is Auto Point"=No   IsSpecial=${j.isSpecial ? "Yes" : "No"}   X=${fmt(j.x)}   Y=${fmt(j.y)}   Z=${fmt(j.z)}   GUID=${guid()}`);
  }
  L.push(` `);

  // ── FLOOR OBJECT CONNECTIVITY ──
  // Slab principal (zapata Footing) y patch interior (columna Stiff)
  const A_zap = Lz * Bz;
  const Per_zap = 2 * (Lz + Bz);
  const A_col = bc * bc;
  const Per_col = 4 * bc;
  L.push(`TABLE:  "FLOOR OBJECT CONNECTIVITY"`);
  L.push(`   "Unique Name"=1       UniquePt1=1   UniquePt2=2   UniquePt3=3   UniquePt4=4   Perimeter=${fmt(Per_zap)}   Area=${fmt(A_zap)}   GUID=${guid()}`);
  L.push(`   "Unique Name"=LOAD1   UniquePt1=5   UniquePt2=6   UniquePt3=7   UniquePt4=8   Perimeter=${fmt(Per_col)}   Area=${fmt(A_col)}   GUID=${guid()}`);
  L.push(` `);

  // ── JOINT ASSIGNMENTS - FLOOR MESHING OPTION ──
  L.push(`TABLE:  "JOINT ASSIGNMENTS - FLOOR MESHING OPTION"`);
  L.push(`   UniqueName=9   IncludeInMesh=Yes`);
  L.push(` `);

  // ── JOINT LOADS ASSIGNMENTS - FORCE ──
  L.push(`TABLE:  "JOINT LOADS ASSIGNMENTS - FORCE"`);
  if (P_dead_tonf !== 0 || Mx_d !== 0 || My_d !== 0) {
    L.push(`   UniqueName=9   "Load Pattern"=Dead   FX=0   FY=0   FZ=${fmt(-P_dead_tonf)}   MX=${fmt(Mx_d)}   MY=${fmt(My_d)}   MZ=0   "X Dimension"=${fmt(bc)}   "Y Dimension"=${fmt(bc)}   GUID=${guid()}`);
  }
  if (P_live_tonf !== 0 || Mx_l !== 0 || My_l !== 0) {
    L.push(`   UniqueName=9   "Load Pattern"=Live   FX=0   FY=0   FZ=${fmt(-P_live_tonf)}   MX=${fmt(Mx_l)}   MY=${fmt(My_l)}   MZ=0   "X Dimension"=${fmt(bc)}   "Y Dimension"=${fmt(bc)}   GUID=${guid()}`);
  }
  L.push(` `);

  // ── AREA ASSIGNMENTS - SUMMARY ──
  L.push(`TABLE:  "AREA ASSIGNMENTS - SUMMARY"`);
  L.push(`   UniqueName=1       "Section Property"=Footing1   "Property Type"=Slab   Spring=ASpr1`);
  L.push(`   UniqueName=LOAD1   "Section Property"=Stiff1     "Property Type"=Slab`);
  L.push(` `);

  // ── AREA ASSIGNMENTS - SECTION PROPERTIES ──
  L.push(`TABLE:  "AREA ASSIGNMENTS - SECTION PROPERTIES"`);
  L.push(`   UniqueName=1       "Section Property"=Footing1   "Property Type"=Slab`);
  L.push(`   UniqueName=LOAD1   "Section Property"=Stiff1     "Property Type"=Slab`);
  L.push(` `);

  // ── AREA ASSIGNMENTS - INSERTION POINT ──
  L.push(`TABLE:  "AREA ASSIGNMENTS - INSERTION POINT"`);
  L.push(`   UniqueName=1       "Cardinal Point"=Top   Transform=No`);
  L.push(`   UniqueName=LOAD1   "Cardinal Point"=Top   Transform=No`);
  L.push(` `);

  // ── AREA ASSIGNMENTS - AREA SPRINGS ──
  // Spring asignado SOLO al slab principal (Footing). El patch Stiff no tiene spring.
  L.push(`TABLE:  "AREA ASSIGNMENTS - AREA SPRINGS"`);
  L.push(`   UniqueName=1   "Spring Property"=ASpr1`);
  L.push(` `);

  // ── AREA ASSIGNMENTS - FLOOR AUTO MESH OPTIONS ──
  L.push(`TABLE:  "AREA ASSIGNMENTS - FLOOR AUTO MESH OPTIONS"`);
  L.push(`   UniqueName=1       "Mesh Option"=Default   "Add Restraints"=No`);
  L.push(`   UniqueName=LOAD1   "Mesh Option"=Default   "Add Restraints"=No`);
  L.push(` `);

  L.push(`END TABLE DATA`);
  L.push(``);

  return L.join("\n");
}

/** Helper para descargar el F2K como archivo desde el browser. */
export function downloadZapataF2k(data: ZapataF2kData, filename = "Zapata_Hekatan.f2k") {
  const text = exportZapataF2k(data);
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  return text.length;
}
