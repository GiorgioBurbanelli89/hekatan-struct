/**
 * AISC Steel Profile Database (US Customary → stored in SI: m, m², m⁴)
 * Source: AISC Steel Construction Manual, 15th Edition
 * Conversion: 1 in = 0.0254 m, 1 in² = 6.4516e-4 m², 1 in⁴ = 4.16231e-7 m⁴
 */

export interface SteelProfile {
  name: string;
  type: "W" | "HSS" | "L" | "C";
  A: number;   // m² (cross-section area)
  Iz: number;  // m⁴ (strong axis moment of inertia)
  Iy: number;  // m⁴ (weak axis moment of inertia)
  J: number;   // m⁴ (torsional constant)
  d: number;   // m  (depth)
  bf: number;  // m  (flange width)
}

// Conversion helpers
const in2 = 6.4516e-4;   // in² → m²
const in4 = 4.16231e-7;  // in⁴ → m⁴
const inch = 0.0254;     // in → m

export const STEEL_PROFILES: SteelProfile[] = [
  // ═══════════════════════════════════════════════════════════
  // W Shapes (Wide Flange) — Columns & Beams
  // ═══════════════════════════════════════════════════════════
  // W6
  { name: "W6x9",     type: "W", A: 2.68*in2, Iz: 16.4*in4, Iy: 2.20*in4,  J: 0.0405*in4, d: 5.90*inch, bf: 3.94*inch },
  { name: "W6x15",    type: "W", A: 4.43*in2, Iz: 29.1*in4, Iy: 9.32*in4,  J: 0.103*in4,  d: 5.99*inch, bf: 5.99*inch },
  { name: "W6x20",    type: "W", A: 5.87*in2, Iz: 41.4*in4, Iy: 13.3*in4,  J: 0.204*in4,  d: 6.20*inch, bf: 6.02*inch },
  // W8
  { name: "W8x10",    type: "W", A: 2.96*in2, Iz: 30.8*in4, Iy: 2.09*in4,  J: 0.0426*in4, d: 7.89*inch, bf: 3.94*inch },
  { name: "W8x18",    type: "W", A: 5.26*in2, Iz: 61.9*in4, Iy: 7.97*in4,  J: 0.172*in4,  d: 8.14*inch, bf: 5.25*inch },
  { name: "W8x24",    type: "W", A: 7.08*in2, Iz: 82.7*in4, Iy: 18.3*in4,  J: 0.346*in4,  d: 7.93*inch, bf: 6.50*inch },
  { name: "W8x31",    type: "W", A: 9.13*in2, Iz: 110*in4,  Iy: 37.1*in4,  J: 0.536*in4,  d: 8.00*inch, bf: 7.995*inch },
  { name: "W8x40",    type: "W", A: 11.7*in2, Iz: 146*in4,  Iy: 49.1*in4,  J: 0.871*in4,  d: 8.25*inch, bf: 8.07*inch },
  { name: "W8x48",    type: "W", A: 14.1*in2, Iz: 184*in4,  Iy: 60.9*in4,  J: 1.45*in4,   d: 8.50*inch, bf: 8.11*inch },
  { name: "W8x67",    type: "W", A: 19.7*in2, Iz: 272*in4,  Iy: 88.6*in4,  J: 3.54*in4,   d: 9.00*inch, bf: 8.28*inch },
  // W10
  { name: "W10x12",   type: "W", A: 3.54*in2, Iz: 53.8*in4, Iy: 2.18*in4,  J: 0.0547*in4, d: 9.87*inch, bf: 3.96*inch },
  { name: "W10x22",   type: "W", A: 6.49*in2, Iz: 118*in4,  Iy: 11.4*in4,  J: 0.239*in4,  d: 10.17*inch, bf: 5.75*inch },
  { name: "W10x33",   type: "W", A: 9.71*in2, Iz: 171*in4,  Iy: 36.6*in4,  J: 0.583*in4,  d: 9.73*inch, bf: 7.96*inch },
  { name: "W10x49",   type: "W", A: 14.4*in2, Iz: 272*in4,  Iy: 93.4*in4,  J: 1.39*in4,   d: 9.98*inch, bf: 10.0*inch },
  { name: "W10x68",   type: "W", A: 20.0*in2, Iz: 394*in4,  Iy: 134*in4,   J: 3.56*in4,   d: 10.40*inch, bf: 10.13*inch },
  { name: "W10x100",  type: "W", A: 29.4*in2, Iz: 623*in4,  Iy: 207*in4,   J: 10.9*in4,   d: 11.10*inch, bf: 10.34*inch },
  // W12
  { name: "W12x14",   type: "W", A: 4.16*in2, Iz: 88.6*in4, Iy: 2.36*in4,  J: 0.0704*in4, d: 11.91*inch, bf: 3.97*inch },
  { name: "W12x22",   type: "W", A: 6.48*in2, Iz: 156*in4,  Iy: 4.66*in4,  J: 0.293*in4,  d: 12.31*inch, bf: 4.03*inch },
  { name: "W12x26",   type: "W", A: 7.65*in2, Iz: 204*in4,  Iy: 17.3*in4,  J: 0.300*in4,  d: 12.22*inch, bf: 6.49*inch },
  { name: "W12x40",   type: "W", A: 11.7*in2, Iz: 310*in4,  Iy: 44.1*in4,  J: 0.906*in4,  d: 11.94*inch, bf: 8.01*inch },
  { name: "W12x53",   type: "W", A: 15.6*in2, Iz: 425*in4,  Iy: 95.8*in4,  J: 1.58*in4,   d: 12.06*inch, bf: 9.99*inch },
  { name: "W12x72",   type: "W", A: 21.1*in2, Iz: 597*in4,  Iy: 195*in4,   J: 4.05*in4,   d: 12.25*inch, bf: 12.04*inch },
  { name: "W12x96",   type: "W", A: 28.2*in2, Iz: 833*in4,  Iy: 270*in4,   J: 8.44*in4,   d: 12.71*inch, bf: 12.16*inch },
  { name: "W12x120",  type: "W", A: 35.3*in2, Iz: 1070*in4, Iy: 345*in4,   J: 16.0*in4,   d: 13.12*inch, bf: 12.32*inch },
  // W14
  { name: "W14x22",   type: "W", A: 6.49*in2, Iz: 199*in4,  Iy: 7.00*in4,  J: 0.208*in4,  d: 13.74*inch, bf: 5.00*inch },
  { name: "W14x30",   type: "W", A: 8.85*in2, Iz: 291*in4,  Iy: 19.6*in4,  J: 0.380*in4,  d: 13.84*inch, bf: 6.73*inch },
  { name: "W14x38",   type: "W", A: 11.2*in2, Iz: 385*in4,  Iy: 26.7*in4,  J: 0.798*in4,  d: 14.10*inch, bf: 6.77*inch },
  { name: "W14x48",   type: "W", A: 14.1*in2, Iz: 485*in4,  Iy: 51.4*in4,  J: 1.45*in4,   d: 13.79*inch, bf: 8.03*inch },
  { name: "W14x61",   type: "W", A: 17.9*in2, Iz: 640*in4,  Iy: 107*in4,   J: 2.19*in4,   d: 13.89*inch, bf: 9.99*inch },
  { name: "W14x82",   type: "W", A: 24.0*in2, Iz: 882*in4,  Iy: 148*in4,   J: 5.07*in4,   d: 14.31*inch, bf: 10.13*inch },
  { name: "W14x109",  type: "W", A: 32.0*in2, Iz: 1240*in4, Iy: 447*in4,   J: 7.12*in4,   d: 14.32*inch, bf: 14.61*inch },
  { name: "W14x132",  type: "W", A: 38.8*in2, Iz: 1530*in4, Iy: 548*in4,   J: 12.3*in4,   d: 14.66*inch, bf: 14.73*inch },
  { name: "W14x176",  type: "W", A: 51.8*in2, Iz: 2140*in4, Iy: 838*in4,   J: 23.7*in4,   d: 15.22*inch, bf: 15.65*inch },
  // W16
  { name: "W16x26",   type: "W", A: 7.68*in2, Iz: 301*in4,  Iy: 9.59*in4,  J: 0.262*in4,  d: 15.69*inch, bf: 5.50*inch },
  { name: "W16x36",   type: "W", A: 10.6*in2, Iz: 448*in4,  Iy: 24.5*in4,  J: 0.545*in4,  d: 15.86*inch, bf: 6.99*inch },
  { name: "W16x50",   type: "W", A: 14.7*in2, Iz: 659*in4,  Iy: 37.2*in4,  J: 1.52*in4,   d: 16.26*inch, bf: 7.07*inch },
  { name: "W16x67",   type: "W", A: 19.7*in2, Iz: 954*in4,  Iy: 119*in4,   J: 2.39*in4,   d: 16.33*inch, bf: 10.24*inch },
  { name: "W16x89",   type: "W", A: 26.2*in2, Iz: 1300*in4, Iy: 163*in4,   J: 5.45*in4,   d: 16.75*inch, bf: 10.37*inch },
  // W18
  { name: "W18x35",   type: "W", A: 10.3*in2, Iz: 510*in4,  Iy: 15.3*in4,  J: 0.506*in4,  d: 17.70*inch, bf: 6.00*inch },
  { name: "W18x50",   type: "W", A: 14.7*in2, Iz: 800*in4,  Iy: 40.1*in4,  J: 1.24*in4,   d: 17.99*inch, bf: 7.50*inch },
  { name: "W18x71",   type: "W", A: 20.8*in2, Iz: 1170*in4, Iy: 60.3*in4,  J: 3.49*in4,   d: 18.47*inch, bf: 7.64*inch },
  { name: "W18x97",   type: "W", A: 28.5*in2, Iz: 1750*in4, Iy: 201*in4,   J: 5.86*in4,   d: 18.59*inch, bf: 11.15*inch },
  // W21
  { name: "W21x44",   type: "W", A: 13.0*in2, Iz: 843*in4,  Iy: 20.7*in4,  J: 0.770*in4,  d: 20.66*inch, bf: 6.50*inch },
  { name: "W21x62",   type: "W", A: 18.3*in2, Iz: 1330*in4, Iy: 57.5*in4,  J: 1.83*in4,   d: 20.99*inch, bf: 8.24*inch },
  { name: "W21x83",   type: "W", A: 24.3*in2, Iz: 1830*in4, Iy: 81.4*in4,  J: 4.34*in4,   d: 21.43*inch, bf: 8.36*inch },
  { name: "W21x111",  type: "W", A: 32.7*in2, Iz: 2670*in4, Iy: 274*in4,   J: 6.83*in4,   d: 21.51*inch, bf: 12.34*inch },
  // W24
  { name: "W24x55",   type: "W", A: 16.2*in2, Iz: 1350*in4, Iy: 29.1*in4,  J: 1.18*in4,   d: 23.57*inch, bf: 7.01*inch },
  { name: "W24x76",   type: "W", A: 22.4*in2, Iz: 2100*in4, Iy: 82.5*in4,  J: 2.68*in4,   d: 23.92*inch, bf: 8.99*inch },
  { name: "W24x104",  type: "W", A: 30.6*in2, Iz: 3100*in4, Iy: 259*in4,   J: 4.72*in4,   d: 24.06*inch, bf: 12.75*inch },
  { name: "W24x131",  type: "W", A: 38.5*in2, Iz: 4020*in4, Iy: 340*in4,   J: 9.50*in4,   d: 24.48*inch, bf: 12.86*inch },
  { name: "W24x146",  type: "W", A: 43.0*in2, Iz: 4580*in4, Iy: 391*in4,   J: 12.6*in4,   d: 24.74*inch, bf: 12.90*inch },
  { name: "W24x176",  type: "W", A: 51.7*in2, Iz: 5680*in4, Iy: 479*in4,   J: 21.2*in4,   d: 25.24*inch, bf: 12.90*inch },
  // W27
  { name: "W27x84",   type: "W", A: 24.8*in2, Iz: 2850*in4, Iy: 106*in4,   J: 2.81*in4,   d: 26.71*inch, bf: 9.96*inch },
  { name: "W27x114",  type: "W", A: 33.5*in2, Iz: 4090*in4, Iy: 159*in4,   J: 6.77*in4,   d: 27.29*inch, bf: 10.07*inch },
  // W30
  { name: "W30x90",   type: "W", A: 26.4*in2, Iz: 3610*in4, Iy: 115*in4,   J: 3.06*in4,   d: 29.53*inch, bf: 10.40*inch },
  { name: "W30x116",  type: "W", A: 34.2*in2, Iz: 4930*in4, Iy: 164*in4,   J: 6.43*in4,   d: 30.01*inch, bf: 10.50*inch },
  // W33
  { name: "W33x118",  type: "W", A: 34.7*in2, Iz: 5900*in4, Iy: 187*in4,   J: 5.30*in4,   d: 32.86*inch, bf: 11.48*inch },
  // W36
  { name: "W36x135",  type: "W", A: 39.7*in2, Iz: 7800*in4, Iy: 225*in4,   J: 7.00*in4,   d: 35.55*inch, bf: 11.95*inch },

  // ═══════════════════════════════════════════════════════════
  // HSS — Hollow Structural Sections (Square/Rectangular)
  // ═══════════════════════════════════════════════════════════
  { name: "HSS4x4x1/4",    type: "HSS", A: 3.37*in2, Iz: 8.22*in4,  Iy: 8.22*in4,  J: 13.4*in4,  d: 4*inch,  bf: 4*inch },
  { name: "HSS4x4x3/8",    type: "HSS", A: 4.78*in2, Iz: 10.7*in4,  Iy: 10.7*in4,  J: 17.9*in4,  d: 4*inch,  bf: 4*inch },
  { name: "HSS4x4x1/2",    type: "HSS", A: 6.02*in2, Iz: 12.3*in4,  Iy: 12.3*in4,  J: 21.0*in4,  d: 4*inch,  bf: 4*inch },
  { name: "HSS6x6x1/4",    type: "HSS", A: 5.24*in2, Iz: 30.3*in4,  Iy: 30.3*in4,  J: 48.3*in4,  d: 6*inch,  bf: 6*inch },
  { name: "HSS6x6x3/8",    type: "HSS", A: 7.58*in2, Iz: 41.1*in4,  Iy: 41.1*in4,  J: 66.9*in4,  d: 6*inch,  bf: 6*inch },
  { name: "HSS6x6x1/2",    type: "HSS", A: 9.74*in2, Iz: 49.6*in4,  Iy: 49.6*in4,  J: 82.2*in4,  d: 6*inch,  bf: 6*inch },
  { name: "HSS8x8x1/4",    type: "HSS", A: 7.10*in2, Iz: 70.7*in4,  Iy: 70.7*in4,  J: 112*in4,   d: 8*inch,  bf: 8*inch },
  { name: "HSS8x8x3/8",    type: "HSS", A: 10.4*in2, Iz: 98.0*in4,  Iy: 98.0*in4,  J: 158*in4,   d: 8*inch,  bf: 8*inch },
  { name: "HSS8x8x1/2",    type: "HSS", A: 13.5*in2, Iz: 122*in4,   Iy: 122*in4,    J: 199*in4,   d: 8*inch,  bf: 8*inch },
  { name: "HSS10x10x3/8",  type: "HSS", A: 13.2*in2, Iz: 202*in4,   Iy: 202*in4,    J: 323*in4,   d: 10*inch, bf: 10*inch },
  { name: "HSS10x10x1/2",  type: "HSS", A: 17.2*in2, Iz: 254*in4,   Iy: 254*in4,    J: 412*in4,   d: 10*inch, bf: 10*inch },
  { name: "HSS12x12x3/8",  type: "HSS", A: 16.0*in2, Iz: 355*in4,   Iy: 355*in4,    J: 564*in4,   d: 12*inch, bf: 12*inch },
  { name: "HSS12x12x1/2",  type: "HSS", A: 21.0*in2, Iz: 452*in4,   Iy: 452*in4,    J: 724*in4,   d: 12*inch, bf: 12*inch },
  // Rectangular HSS
  { name: "HSS6x4x1/4",    type: "HSS", A: 4.30*in2, Iz: 18.0*in4,  Iy: 9.58*in4,   J: 22.6*in4,  d: 6*inch,  bf: 4*inch },
  { name: "HSS6x4x3/8",    type: "HSS", A: 6.18*in2, Iz: 23.8*in4,  Iy: 12.3*in4,   J: 30.3*in4,  d: 6*inch,  bf: 4*inch },
  { name: "HSS8x4x1/4",    type: "HSS", A: 5.24*in2, Iz: 33.6*in4,  Iy: 11.8*in4,   J: 33.0*in4,  d: 8*inch,  bf: 4*inch },
  { name: "HSS8x4x3/8",    type: "HSS", A: 7.58*in2, Iz: 45.1*in4,  Iy: 15.0*in4,   J: 44.5*in4,  d: 8*inch,  bf: 4*inch },
  { name: "HSS8x6x1/4",    type: "HSS", A: 6.17*in2, Iz: 46.1*in4,  Iy: 28.2*in4,   J: 61.3*in4,  d: 8*inch,  bf: 6*inch },
  { name: "HSS8x6x3/8",    type: "HSS", A: 8.97*in2, Iz: 63.0*in4,  Iy: 37.5*in4,   J: 84.6*in4,  d: 8*inch,  bf: 6*inch },
  { name: "HSS10x6x3/8",   type: "HSS", A: 10.4*in2, Iz: 103*in4,   Iy: 47.1*in4,   J: 115*in4,   d: 10*inch, bf: 6*inch },
  { name: "HSS12x8x3/8",   type: "HSS", A: 13.2*in2, Iz: 196*in4,   Iy: 102*in4,    J: 249*in4,   d: 12*inch, bf: 8*inch },
];

/** Get profile names grouped by type for dropdown */
export function getProfileOptions(): Record<string, number> {
  const opts: Record<string, number> = {};
  STEEL_PROFILES.forEach((p, i) => { opts[p.name] = i; });
  return opts;
}

/** Get W-section names only */
export function getWProfileOptions(): Record<string, number> {
  const opts: Record<string, number> = {};
  STEEL_PROFILES.forEach((p, i) => { if (p.type === "W") opts[p.name] = i; });
  return opts;
}

/** Get HSS names only */
export function getHSSProfileOptions(): Record<string, number> {
  const opts: Record<string, number> = {};
  STEEL_PROFILES.forEach((p, i) => { if (p.type === "HSS") opts[p.name] = i; });
  return opts;
}
