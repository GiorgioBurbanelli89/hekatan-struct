/**
 * OpenSees TCL Exporter — exporta zapata-aislada al formato OpenSees Classic (TCL)
 *
 * Genera un script .tcl que se ejecuta con: `opensees zapata.tcl`
 * Modelo: shell MITC4 (ShellMITC4 element) sobre Winkler (zeroLength springs)
 *
 * Uso:
 *   opensees zapata_hekatan.tcl > output.txt
 *
 * Output: archivos `disp_<case>.out`, `reaction_<case>.out`
 */

export interface ZapataTclData {
  Lz: number;
  Bz: number;
  tz: number;
  bc: number;
  ks_kNm3: number;
  E_concreto_MPa?: number;
  P_dead_kN: number;
  P_live_kN: number;
  Mx_dead_kNm?: number;
  My_dead_kNm?: number;
  /** Mesh refinement nx × ny */
  nx?: number;
  ny?: number;
}

export function exportZapataTcl(data: ZapataTclData): string {
  const Lz = data.Lz;
  const Bz = data.Bz;
  const tz = data.tz;
  const ks = data.ks_kNm3;
  const E_MPa = data.E_concreto_MPa ?? 24855;
  // En OpenSees usamos unidades SI: kN, m
  const E_kPa = E_MPa * 1000;  // kN/m²
  const nu = 0.20;
  const nx = data.nx ?? 12;
  const ny = data.ny ?? 12;
  const dx = Lz / nx;
  const dy = Bz / ny;

  const P_d = data.P_dead_kN;
  const P_l = data.P_live_kN;
  const Mx_d = data.Mx_dead_kNm ?? 0;
  const My_d = data.My_dead_kNm ?? 0;

  const L: string[] = [];
  L.push(`# OpenSees TCL — Zapata Aislada (exportada desde Hekatan Struct Lineal)`);
  L.push(`# Generado: ${new Date().toISOString()}`);
  L.push(`# Modelo: ShellMITC4 sobre Winkler springs zeroLength`);
  L.push(`# Unidades: kN, m`);
  L.push(``);
  L.push(`wipe`);
  L.push(`model BasicBuilder -ndm 3 -ndf 6`);
  L.push(``);

  // ── Material y sección shell ──
  L.push(`# Material concreto: E=${E_MPa} MPa, ν=${nu}`);
  L.push(`set E ${E_kPa.toFixed(0)}     ;# kN/m²`);
  L.push(`set nu ${nu}`);
  L.push(`set h ${tz}                   ;# espesor zapata (m)`);
  L.push(`nDMaterial ElasticIsotropic 1 $E $nu`);
  L.push(`section ElasticMembranePlateSection 1 $E $nu $h 0.0`);
  L.push(``);

  // ── Nodos ──
  L.push(`# Nodos: malla ${nx}×${ny} sobre zapata ${Lz}×${Bz} m centrada en (0,0,0)`);
  let nodeId = 1;
  const nodeIdMap = new Map<string, number>();
  for (let j = 0; j <= ny; j++) {
    for (let i = 0; i <= nx; i++) {
      const x = -Lz / 2 + i * dx;
      const y = -Bz / 2 + j * dy;
      L.push(`node ${nodeId} ${x.toFixed(6)} ${y.toFixed(6)} 0.0`);
      nodeIdMap.set(`${i},${j}`, nodeId);
      nodeId++;
    }
  }
  L.push(``);

  // ── Soil-anchor nodos (para los springs zeroLength) ──
  // Para cada nodo del slab, creamos un nodo "anchor" en mismo X,Y pero -1 en Z (debajo)
  // que está fijo. El zeroLength conecta slab_node ↔ soil_anchor.
  const N_slab = nodeId - 1;
  L.push(`# Soil-anchor nodes (fijos al "suelo")`);
  for (let n = 1; n <= N_slab; n++) {
    L.push(`node ${1000 + n} [nodeCoord ${n} 1] [nodeCoord ${n} 2] -0.001`);
  }
  L.push(``);

  // ── Restricciones soil anchor (todos los DOF fijos) ──
  L.push(`# Fijar todos los soil anchors (DOFs 1..6)`);
  for (let n = 1; n <= N_slab; n++) {
    L.push(`fix ${1000 + n} 1 1 1 1 1 1`);
  }
  L.push(``);

  // ── Material spring vertical Winkler ──
  // K_node = ks × A_tributaria
  // OpenSees usa uniaxialMaterial Elastic — uno por cada tipo de tributaria
  L.push(`# Winkler springs (vertical Z) — K = ks × A_trib`);
  L.push(`# ks = ${ks} kN/m³`);
  // Para simplificar: 4 tipos (centro, edge_x, edge_y, corner) según área tributaria
  const A_full = dx * dy;
  L.push(`set K_full   ${(ks * A_full).toFixed(4)}    ;# nodos interiores`);
  L.push(`set K_edge_x ${(ks * dx * dy / 2).toFixed(4)}    ;# nodos en bordes Y`);
  L.push(`set K_edge_y ${(ks * dx / 2 * dy).toFixed(4)}    ;# nodos en bordes X`);
  L.push(`set K_corner ${(ks * dx / 2 * dy / 2).toFixed(4)}    ;# nodos esquinas`);
  L.push(``);
  L.push(`uniaxialMaterial Elastic 11 $K_full`);
  L.push(`uniaxialMaterial Elastic 12 $K_edge_x`);
  L.push(`uniaxialMaterial Elastic 13 $K_edge_y`);
  L.push(`uniaxialMaterial Elastic 14 $K_corner`);
  L.push(``);

  // ── Spring elements (zeroLength entre nodo slab y soil_anchor) ──
  L.push(`# Spring elements: zeroLength entre slab_n y soil_anchor (1000+n)`);
  let elemId = 10000;
  for (let j = 0; j <= ny; j++) {
    for (let i = 0; i <= nx; i++) {
      const n = nodeIdMap.get(`${i},${j}`)!;
      let matTag = 11;  // default full tributary
      if ((i === 0 || i === nx) && (j === 0 || j === ny)) matTag = 14;
      else if (i === 0 || i === nx) matTag = 13;
      else if (j === 0 || j === ny) matTag = 12;
      L.push(`element zeroLength ${elemId} ${1000 + n} ${n} -mat ${matTag} -dir 3`);
      elemId++;
    }
  }
  L.push(``);

  // ── Shell elements ──
  L.push(`# Shell MITC4 (Q4) elements`);
  for (let j = 0; j < ny; j++) {
    for (let i = 0; i < nx; i++) {
      const n1 = nodeIdMap.get(`${i},${j}`)!;
      const n2 = nodeIdMap.get(`${i + 1},${j}`)!;
      const n3 = nodeIdMap.get(`${i + 1},${j + 1}`)!;
      const n4 = nodeIdMap.get(`${i},${j + 1}`)!;
      L.push(`element ShellMITC4 ${elemId} ${n1} ${n2} ${n3} ${n4} 1`);
      elemId++;
    }
  }
  L.push(``);

  // ── Cargas: aplicadas en el nodo central ──
  const i_center = Math.round(nx / 2);
  const j_center = Math.round(ny / 2);
  const centerNode = nodeIdMap.get(`${i_center},${j_center}`)!;
  L.push(`# Carga aplicada en nodo central ${centerNode}`);
  L.push(`set centerNode ${centerNode}`);
  L.push(``);

  L.push(`# Pattern Dead`);
  L.push(`pattern Plain 1 Linear {`);
  L.push(`  load $centerNode 0.0 0.0 ${(-P_d).toFixed(4)} ${Mx_d.toFixed(4)} ${My_d.toFixed(4)} 0.0`);
  L.push(`}`);
  L.push(``);

  if (P_l > 0) {
    L.push(`# Pattern Live`);
    L.push(`pattern Plain 2 Linear {`);
    L.push(`  load $centerNode 0.0 0.0 ${(-P_l).toFixed(4)} 0 0 0`);
    L.push(`}`);
    L.push(``);
  }

  // ── Análisis Linear Static ──
  L.push(`# Análisis estático lineal`);
  L.push(`system BandSPD`);
  L.push(`numberer RCM`);
  L.push(`constraints Plain`);
  L.push(`integrator LoadControl 1.0`);
  L.push(`algorithm Linear`);
  L.push(`analysis Static`);
  L.push(`analyze 1`);
  L.push(``);

  // ── Output ──
  L.push(`# Output: desplazamiento del nodo central`);
  L.push(`puts "==== RESULTADOS ===="`);
  L.push(`puts "Nodo central: [nodeDisp $centerNode]"`);
  L.push(`puts "  Uz (m) = [lindex [nodeDisp $centerNode] 2]"`);
  L.push(``);
  L.push(`# Recorder: TODOS los desplazamientos (mm)`);
  L.push(`recorder Node -file disp_dead.out -node $centerNode -dof 1 2 3 4 5 6 disp`);
  L.push(``);
  L.push(`puts "Análisis completo. Output en disp_dead.out"`);
  L.push(`wipe`);

  return L.join("\n");
}

export function downloadZapataTcl(data: ZapataTclData, filename = "Zapata_Hekatan.tcl") {
  const text = exportZapataTcl(data);
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  return text.length;
}
