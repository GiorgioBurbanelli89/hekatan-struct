#!/usr/bin/env node
/**
 * Genera 3 .e2k con casos canónicos para validación analítica:
 *   1) cantileverColumn  — Columna vertical empotrada en base, P=10kN lateral en tope
 *   2) clampedClampedBeam — Viga horizontal doblemente empotrada, P=10kN en centro
 *   3) cantileverBeam    — Viga horizontal empotrada en un extremo, P=10kN en libre
 *
 * Material: Steel Mat_2 (E=200 GPa, ν=0.3)
 * Sección: W360X60 (Steel I/Wide Flange D=0.352 B=0.203 TF=0.013 TW=0.008)
 * Long: L = 4 m
 * Carga: P = 10 kN
 *
 * Solución analítica:
 *   cantileverColumn:    δ = PL³/(3EI) + PL/(GAs)        [Timoshenko]
 *   clampedClampedBeam:  δ = PL³/(192·EI) + PL/(4·GAs)
 *   cantileverBeam:      δ = PL³/(3EI) + PL/(GAs)
 */
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const L = 4.0;
const P = 10.0;  // kN
const E_s = 200e6, nu_s = 0.3;
const G_s = E_s / (2 * (1 + nu_s));
const W_h = 0.352, W_b = 0.203, W_tf = 0.013, W_tw = 0.008;

// W360X60 propiedades calculadas por ETABS (extraídas de API previamente)
const A_w360  = 7.886e-3;   // m²
const I33_w360 = 1.748e-4;  // m⁴ (strong axis bending)
const I22_w360 = 1.814e-5;  // m⁴ (weak axis)
const J_w360  = 3.55e-7;
const As_w360 = 2.79e-3;    // shear area (ETABS calculated)

// Soluciones analíticas Timoshenko (en mm)
function calcAnalytical() {
  const I = I33_w360;  // strong axis bending
  // 1) Cantilever (column or beam): δ = PL³/(3EI) + PL/(GAs)
  const cant_bending = P * L*L*L / (3 * E_s * I);
  const cant_shear   = P * L / (G_s * As_w360);
  const cant_total   = cant_bending + cant_shear;
  // 2) Clamped-clamped with P at center: δ = PL³/(192·EI) + PL/(4·GAs)
  const cc_bending   = P * L*L*L / (192 * E_s * I);
  const cc_shear     = P * L / (4 * G_s * As_w360);
  const cc_total     = cc_bending + cc_shear;
  return {
    cantilever: { bending: cant_bending*1000, shear: cant_shear*1000, total: cant_total*1000 },
    clamped:    { bending: cc_bending*1000,   shear: cc_shear*1000,   total: cc_total*1000   },
  };
}

const analytical = calcAnalytical();
console.log("=== Soluciones analíticas Timoshenko (W360X60, L=4m, P=10kN) ===");
console.log(`Cantilever: bending=${analytical.cantilever.bending.toFixed(4)} mm | shear=${analytical.cantilever.shear.toFixed(4)} mm | TOTAL=${analytical.cantilever.total.toFixed(4)} mm`);
console.log(`Clamped-clamped: bending=${analytical.clamped.bending.toFixed(4)} mm | shear=${analytical.clamped.shear.toFixed(4)} mm | TOTAL=${analytical.clamped.total.toFixed(4)} mm`);
console.log("");


function generateE2k(caseId) {
  const lines = [];
  lines.push(`$ canonical case: ${caseId}`);
  lines.push(``);
  lines.push(`$ PROGRAM INFORMATION`);
  lines.push(`  PROGRAM  "ETABS"  VERSION "22.6.0"`);
  lines.push(``);
  lines.push(`$ CONTROLS`);
  lines.push(`  UNITS  "KN"  "M"  "C"  `);
  lines.push(`  TITLE2  "Canonical (${caseId})"`);
  lines.push(``);

  const isColumn = (caseId === "cantileverColumn");
  // Stories: para columna L=4m, para vigas L=4m horizontal a una elevación
  if (isColumn) {
    lines.push(`$ STORIES - IN SEQUENCE FROM TOP`);
    lines.push(`  STORY "Level_2"  HEIGHT ${L}  MASTERSTORY "Yes"  `);
    lines.push(`  STORY "Base"  ELEV 0`);
  } else {
    lines.push(`$ STORIES - IN SEQUENCE FROM TOP`);
    lines.push(`  STORY "Level_1"  HEIGHT 1  MASTERSTORY "Yes"  `);
    lines.push(`  STORY "Base"  ELEV 0`);
  }
  lines.push(``);

  // Grids
  lines.push(`$ GRIDS`);
  lines.push(`  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1`);
  lines.push(`  GRID "G1"  LABEL "A"  DIR "X"  COORD 0  VISIBLE "Yes"  BUBBLELOC "End"`);
  if (!isColumn) {
    lines.push(`  GRID "G1"  LABEL "B"  DIR "X"  COORD ${L}  VISIBLE "Yes"  BUBBLELOC "End"`);
  }
  lines.push(`  GRID "G1"  LABEL "1"  DIR "Y"  COORD 0  VISIBLE "Yes"  BUBBLELOC "Start"`);
  lines.push(``);

  // Materials
  lines.push(`$ MATERIAL PROPERTIES`);
  lines.push(`  MATERIAL  "Mat_2"    TYPE "Steel"    WEIGHTPERVOLUME 7.85`);
  lines.push(`  MATERIAL  "Mat_2"    SYMTYPE "Isotropic"  E ${E_s}  U ${nu_s}  A 1E-05`);
  lines.push(`  MATERIAL  "Mat_2"    FY 345000  FU 450000  EFFFY 379500  EFFFU 495000`);
  lines.push(``);

  // Frame Sections
  lines.push(`$ FRAME SECTIONS`);
  lines.push(`  FRAMESECTION  "W360X60"  MATERIAL "Mat_2"  SHAPE "Steel I/Wide Flange"  D ${W_h}  B ${W_b}  TF ${W_tf}  TW ${W_tw}`);
  lines.push(``);

  // Points & connectivity
  lines.push(`$ POINT COORDINATES`);
  if (isColumn) {
    // Columna vertical: solo 1 punto plano (origin), las elevaciones vienen de las stories
    lines.push(`  POINT "1"  0 0`);
  } else {
    lines.push(`  POINT "1"  0 0`);
    lines.push(`  POINT "2"  ${L} 0`);
    if (caseId === "clampedClampedBeam") {
      lines.push(`  POINT "3"  ${L/2} 0`);
    }
  }
  lines.push(``);

  // Line connectivities
  lines.push(`$ LINE CONNECTIVITIES`);
  if (isColumn) {
    // COLUMN va de la story al level superior. Aquí desde Base hacia Level_2 (1 story arriba)
    lines.push(`  LINE  "C1"  COLUMN  "1"  "1"  1`);
  } else if (caseId === "clampedClampedBeam") {
    lines.push(`  LINE  "B1"  BEAM  "1"  "3"  0`);
    lines.push(`  LINE  "B2"  BEAM  "3"  "2"  0`);
  } else {
    lines.push(`  LINE  "B1"  BEAM  "1"  "2"  0`);
  }
  lines.push(``);

  // Point assigns
  lines.push(`$ POINT ASSIGNS`);
  if (isColumn) {
    // Punto plano "1" se proyecta a las stories. Asignar Base con restraint, Level_2 con carga.
    lines.push(`  POINTASSIGN  "1"  "Base"  RESTRAINT "UX UY UZ RX RY RZ"  `);
    lines.push(`  POINTASSIGN  "1"  "Level_2"  `);
  } else if (caseId === "clampedClampedBeam") {
    lines.push(`  POINTASSIGN  "1"  "Level_1"  RESTRAINT "UX UY UZ RX RY RZ"  `);
    lines.push(`  POINTASSIGN  "2"  "Level_1"  RESTRAINT "UX UY UZ RX RY RZ"  `);
    lines.push(`  POINTASSIGN  "3"  "Level_1"  `);
  } else {
    lines.push(`  POINTASSIGN  "1"  "Level_1"  RESTRAINT "UX UY UZ RX RY RZ"  `);
    lines.push(`  POINTASSIGN  "2"  "Level_1"  `);
  }
  lines.push(``);

  // Line assigns
  lines.push(`$ LINE ASSIGNS`);
  if (isColumn) {
    lines.push(`  LINEASSIGN  "C1"  "Level_2"  SECTION "W360X60"  MINNUMSTA 3 AUTOMESH "YES"  `);
  } else if (caseId === "clampedClampedBeam") {
    lines.push(`  LINEASSIGN  "B1"  "Level_1"  SECTION "W360X60"  MINNUMSTA 3 AUTOMESH "YES"  `);
    lines.push(`  LINEASSIGN  "B2"  "Level_1"  SECTION "W360X60"  MINNUMSTA 3 AUTOMESH "YES"  `);
  } else {
    lines.push(`  LINEASSIGN  "B1"  "Level_1"  SECTION "W360X60"  MINNUMSTA 3 AUTOMESH "YES"  `);
  }
  lines.push(``);

  // Load patterns
  lines.push(`$ LOAD PATTERNS`);
  lines.push(`  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0`);
  lines.push(``);

  // Loads — P=10kN
  lines.push(`$ POINT OBJECT LOADS`);
  if (isColumn) {
    // P horizontal (FX) en tope: punto plano "1" en story Level_2
    lines.push(`  POINTLOAD  "1"  "Level_2"  LC "Live"  TYPE "FORCE"  FX ${P} FY 0 FZ 0 MX 0 MY 0 MZ 0`);
  } else if (caseId === "clampedClampedBeam") {
    lines.push(`  POINTLOAD  "3"  "Level_1"  LC "Live"  TYPE "FORCE"  FX 0 FY 0 FZ -${P} MX 0 MY 0 MZ 0`);
  } else {
    lines.push(`  POINTLOAD  "2"  "Level_1"  LC "Live"  TYPE "FORCE"  FX 0 FY 0 FZ -${P} MX 0 MY 0 MZ 0`);
  }
  lines.push(``);

  // Analysis options + load cases
  lines.push(`$ ANALYSIS OPTIONS`);
  lines.push(`  ACTIVEDOF "UX UY UZ RX RY RZ"`);
  lines.push(`  PDELTA  METHOD "NONE"`);
  lines.push(``);
  lines.push(`$ LOAD CASES`);
  lines.push(`  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"`);
  lines.push(`  LOADCASE "Live"  LOADPAT  "Live"  SF  1`);
  lines.push(``);
  lines.push(`  END`);
  lines.push(`$ END OF MODEL FILE`);

  return lines.join("\r\n");
}

const CASES = ["cantileverColumn", "clampedClampedBeam", "cantileverBeam"];
const outDir = join(__dirname, "etabs_canonical");
if (!existsSync(outDir)) mkdirSync(outDir);

console.log("=== Generador .e2k canonical ===");
for (const c of CASES) {
  const txt = generateE2k(c);
  const outPath = join(outDir, `case_${c}.e2k`);
  writeFileSync(outPath, txt, "utf8");
  console.log(`[OK] ${outPath}`);
}

// Save analytical for Hekatan to compare
writeFileSync(join(__dirname, "analytical_canonical.json"), JSON.stringify(analytical, null, 2));
console.log(`\n[OK] analytical_canonical.json`);
