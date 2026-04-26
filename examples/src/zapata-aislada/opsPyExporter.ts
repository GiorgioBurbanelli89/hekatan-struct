/**
 * OpenSeesPy Exporter — exporta zapata-aislada al formato Python de openseespy
 *
 * Genera un script .py que se ejecuta con: `python zapata.py`
 * Modelo: ShellMITC4 sobre Winkler (zeroLength elements vertical)
 *
 * Requisito: pip install openseespy numpy
 *
 * Output: imprime δz max, reacciones totales, y opcionalmente exporta CSV.
 */

export interface ZapataOpsPyData {
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
  nx?: number;
  ny?: number;
}

export function exportZapataOpsPy(data: ZapataOpsPyData): string {
  const Lz = data.Lz;
  const Bz = data.Bz;
  const tz = data.tz;
  const ks = data.ks_kNm3;
  const E_MPa = data.E_concreto_MPa ?? 24855;
  const E_kPa = E_MPa * 1000;
  const nu = 0.20;
  const nx = data.nx ?? 12;
  const ny = data.ny ?? 12;

  const P_d = data.P_dead_kN;
  const P_l = data.P_live_kN;
  const Mx_d = data.Mx_dead_kNm ?? 0;
  const My_d = data.My_dead_kNm ?? 0;

  return `# OpenSeesPy — Zapata Aislada (exportada desde Hekatan Struct)
# Generado: ${new Date().toISOString()}
# Modelo: ShellMITC4 sobre Winkler springs zeroLength
# Unidades: kN, m
#
# Ejecutar: python ${"Zapata_Hekatan.py"}
# Requiere: pip install openseespy numpy

import openseespy.opensees as ops
import numpy as np

# --- Limpiar modelo previo -----------------------------------
ops.wipe()
ops.model("BasicBuilder", "-ndm", 3, "-ndf", 6)

# --- Parámetros del modelo (de Hekatan zapata-aislada) ------
Lz = ${Lz}      # m, lado X de la zapata
Bz = ${Bz}      # m, lado Y
tz = ${tz}      # m, espesor
ks = ${ks}      # kN/m³, módulo de balasto Winkler
E  = ${E_kPa.toFixed(0)}    # kN/m² (concreto E_c)
nu = ${nu}      # Poisson
nx = ${nx}; ny = ${ny}        # mesh refinement

dx = Lz / nx; dy = Bz / ny

# --- Material y sección Shell -------------------------------
ops.nDMaterial("ElasticIsotropic", 1, E, nu)
ops.section("ElasticMembranePlateSection", 1, E, nu, tz, 0.0)

# --- Nodos del slab -----------------------------------------
node_id = 1
node_grid = {}  # (i,j) -> node_id
for j in range(ny + 1):
    for i in range(nx + 1):
        x = -Lz/2 + i*dx
        y = -Bz/2 + j*dy
        ops.node(node_id, x, y, 0.0)
        node_grid[(i, j)] = node_id
        node_id += 1
N_slab = node_id - 1

# --- Soil-anchor nodos (mismo punto que slab, fijos) --------
# CRÍTICO: zeroLength requiere que ambos nodos estén en el MISMO punto
# (L=0). El soil_anchor se coloca exactamente sobre el slab node y se
# fija para representar el suelo (referencia rígida del Winkler).
for n in range(1, N_slab + 1):
    coord = ops.nodeCoord(n)
    ops.node(1000 + n, coord[0], coord[1], 0.0)   # MISMO Z, no -0.001
    ops.fix(1000 + n, 1, 1, 1, 1, 1, 1)

# --- Springs Winkler: K_node = ks x A_tributaria ------------
A_full = dx * dy
K_full   = ks * A_full
K_edge_x = ks * dx * dy / 2     # nodos en bordes Y
K_edge_y = ks * dx / 2 * dy     # nodos en bordes X
K_corner = ks * dx / 2 * dy / 2 # esquinas

ops.uniaxialMaterial("Elastic", 11, K_full)
ops.uniaxialMaterial("Elastic", 12, K_edge_x)
ops.uniaxialMaterial("Elastic", 13, K_edge_y)
ops.uniaxialMaterial("Elastic", 14, K_corner)

elem_id = 10000
for j in range(ny + 1):
    for i in range(nx + 1):
        n = node_grid[(i, j)]
        if (i in (0, nx)) and (j in (0, ny)):
            mat = 14  # corner
        elif i in (0, nx):
            mat = 13  # edge Y
        elif j in (0, ny):
            mat = 12  # edge X
        else:
            mat = 11  # full
        ops.element("zeroLength", elem_id, 1000 + n, n, "-mat", mat, "-dir", 3)
        elem_id += 1

# --- Shell elements (MITC4) ---------------------------------
for j in range(ny):
    for i in range(nx):
        n1 = node_grid[(i,   j  )]
        n2 = node_grid[(i+1, j  )]
        n3 = node_grid[(i+1, j+1)]
        n4 = node_grid[(i,   j+1)]
        ops.element("ShellMITC4", elem_id, n1, n2, n3, n4, 1)
        elem_id += 1

# --- Cargas aplicadas en el nodo central --------------------
i_center = round(nx / 2)
j_center = round(ny / 2)
center_node = node_grid[(i_center, j_center)]

# --- Eliminar rigid-body modes (slab horizontal) ------------
# Los springs vertcales SOLO restringen DOF 3 (Z). Para evitar matrix singular
# por translación X, Y y rotación Z del slab, fijamos esos 3 DOFs en el nodo
# central (donde se aplica la carga). Los DOFs verticales y rocking quedan
# libres — esos se restringen por los springs Winkler.
ops.fix(center_node, 1, 1, 0, 0, 0, 1)   # UX, UY, RZ fijos; UZ, RX, RY libres

# Pattern Dead
ops.timeSeries("Linear", 1)
ops.pattern("Plain", 1, 1)
ops.load(center_node, 0.0, 0.0, ${(-P_d).toFixed(4)}, ${Mx_d.toFixed(4)}, ${My_d.toFixed(4)}, 0.0)

${P_l > 0 ? `# Pattern Live (en orden separado para sumar después)
# OpenSeesPy soporta múltiples patterns
ops.timeSeries("Linear", 2)
ops.pattern("Plain", 2, 2)
ops.load(center_node, 0.0, 0.0, ${(-P_l).toFixed(4)}, 0, 0, 0)
` : "# (no Live load)"}

# --- Análisis Linear Static ---------------------------------
ops.system("BandSPD")
ops.numberer("RCM")
ops.constraints("Plain")
ops.integrator("LoadControl", 1.0)
ops.algorithm("Linear")
ops.analysis("Static")
ok = ops.analyze(1)
assert ok == 0, f"OpenSees analysis failed: code={ok}"

# --- Resultados ---------------------------------------------
print("=" * 60)
print("RESULTADOS — Zapata 1.5x1.5 (Hekatan -> OpenSeesPy)")
print("=" * 60)
disp_center = ops.nodeDisp(center_node)
print(f"Nodo central ({center_node}):")
print(f"  Ux = {disp_center[0]*1000:.6f} mm")
print(f"  Uy = {disp_center[1]*1000:.6f} mm")
print(f"  Uz = {disp_center[2]*1000:.6f} mm    <- settlement")
print(f"  Rx = {disp_center[3]:.6e} rad")
print(f"  Ry = {disp_center[4]:.6e} rad")
print(f"  Rz = {disp_center[5]:.6e} rad")

# Settlement máximo del slab (esquinas)
uz_all = []
for n in range(1, N_slab + 1):
    uz_all.append((n, ops.nodeDisp(n)[2]))
uz_min = min(uz_all, key=lambda x: x[1])
uz_max = max(uz_all, key=lambda x: x[1])
print(f"\\nSettlement extremos del slab:")
print(f"  Uz min  (más comprimido): nodo {uz_min[0]}, Uz = {uz_min[1]*1000:.4f} mm")
print(f"  Uz max  (menos comprimido): nodo {uz_max[0]}, Uz = {uz_max[1]*1000:.4f} mm")

# Reacciones totales (suma de springs Winkler)
ops.reactions()
total_Fz = sum(ops.nodeReaction(1000 + n)[2] for n in range(1, N_slab + 1))
P_total_aplicada = ${(P_d + P_l).toFixed(2)}   # kN total aplicado (Dead + Live)
print(f"\\nSum reaccion Z = {total_Fz:.4f} kN  (debe = +{P_total_aplicada:.2f} kN aplicada)")

print("\\n[OK] Análisis completo. Comparar con Hekatan Struct y SAFE.")
ops.wipe()
`;
}

export function downloadZapataOpsPy(data: ZapataOpsPyData, filename = "Zapata_Hekatan.py") {
  const text = exportZapataOpsPy(data);
  const blob = new Blob([text], { type: "text/x-python" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  return text.length;
}
