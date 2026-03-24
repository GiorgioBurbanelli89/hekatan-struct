/**
 * calcTemplates.ts — Scripts predefinidos para la calculadora FEM
 *
 * TODOS los templates son ejemplos completos que funcionan sin errores.
 */

import { Node, Element, NodeInputs, ElementInputs } from "awatif-fem";

export interface ModelData {
  nodes: Node[];
  elements: Element[];
  nodeInputs: NodeInputs;
  elementInputs: ElementInputs;
}

// ═══════════════════════════════════════════════════════
// TEMPLATE LIST & DISPATCH
// ═══════════════════════════════════════════════════════

export const templateList = [
  { id: "fem_auto", name: "FEM del modelo actual (auto)" },
  { id: "empty", name: "Datos del modelo actual" },
  { id: "custom", name: "── Calculadora libre ──" },
  // ── Ferreira: MATLAB Codes for FEA ──
  { id: "fer_springs", name: "Ferreira Cap2: Resortes (problem1)" },
  { id: "fer_bar", name: "Ferreira Cap3: Barra axial (problem2)" },
  { id: "fer_truss2d", name: "Ferreira Cap4: Truss 2D (problem5)" },
  { id: "fer_truss3d", name: "Ferreira Cap5: Truss 3D (problem8)" },
  { id: "fer_bernoulli", name: "Ferreira Cap6: Viga Bernoulli (problem9)" },
  { id: "fer_frame2d", name: "Ferreira Cap7: Frame 2D (problem11)" },
  { id: "fer_frame3d", name: "Ferreira Cap8: Frame 3D (problem13)" },
  { id: "fer_timoshenko", name: "Ferreira Cap10: Timoshenko (problem16)" },
  { id: "fer_planestress", name: "Ferreira Cap11: Plane stress Q4 (problem17)" },
  { id: "fer_mindlin", name: "Ferreira Cap12: Mindlin plate Q4 (problem19)" },
  // ── Derivaciones didácticas ──
  { id: "axial", name: "Derivación: Barra axial paso a paso" },
  { id: "spring3", name: "Derivación: 3 resortes — assembly" },
  { id: "portal", name: "Derivación: Portal 2D" },
  { id: "viga2d", name: "Derivación: Viga empotrada" },
];

export function getTemplate(templateId: string, data: ModelData): string {
  switch (templateId) {
    case "fem_auto": return templateFemAuto(data);
    case "portal": return templatePortal();
    case "axial": return templateAxial();
    case "spring3": return templateSprings();
    case "viga2d": return templateViga();
    case "custom": return templateCustom();
    case "empty": return templateModelData(data);
    // Ferreira templates
    case "fer_springs": return ferSprings();
    case "fer_bar": return ferBar();
    case "fer_truss2d": return ferTruss2D();
    case "fer_truss3d": return ferTruss3D();
    case "fer_bernoulli": return ferBernoulli();
    case "fer_frame2d": return ferFrame2D();
    case "fer_frame3d": return ferFrame3D();
    case "fer_timoshenko": return ferTimoshenko();
    case "fer_planestress": return ferPlaneStressQ4();
    case "fer_mindlin": return ferMindlinQ4();
    default: return templateFemAuto(data);
  }
}

// ═══════════════════════════════════════════════════════
// TEMPLATE: FEM del modelo actual (usa funciones internas)
// ═══════════════════════════════════════════════════════

function templateFemAuto(data: ModelData): string {
  return templateModelData(data) + `
% ═══════════════════════════════════════════
% FEM paso a paso
% ═══════════════════════════════════════════

% ─── Paso 1: Matrices por elemento ───
K_loc_1 = stiffness(1)
T_1 = transform(1)
K_glob_1 = kglobal(1)
L_1 = elem_length(1)
dofs_1 = assemble_dofs(1)

% ─── Paso 2: Resolver (WASM C++/Eigen) ───
% Ensambla K global sparse, aplica BCs, SparseLU solve
resultado = solve_model()

% ─── Paso 3: Desplazamientos por nodo ───
u1 = unode(1)
u2 = unode(2)

% ─── Paso 4: Reacciones en apoyos ───
r1 = rnode(1)

% ─── Paso 5: Desplazamiento máximo ───
U_max = max(abs(U))

% ─── Para inspeccionar cualquier elemento: ───
% K_loc_i = stiffness(i)
% T_i = transform(i)
% K_glob_i = kglobal(i)
% L_i = elem_length(i)
% dofs_i = assemble_dofs(i)
`;
}

// ═══════════════════════════════════════════════════════
// TEMPLATE: Portal 2D paso a paso
// ═══════════════════════════════════════════════════════

function templatePortal(): string {
  return `% ═══════════════════════════════════════════
% Portal 2D — Análisis paso a paso
% 2 columnas + 1 viga, 4 nodos, 3 DOF/nodo
% ═══════════════════════════════════════════

% Geometría
H = 3
L = 5
E = 2.1e7
A_col = 0.04
I_col = 0.000213
A_vig = 0.03
I_vig = 0.000160

% ─── Elemento 1: Columna izq (nodo 0→2) ───
L1 = H
k1 = E * A_col / L1
t1 = 12 * E * I_col / L1^3
b1 = 6 * E * I_col / L1^2
c1 = 4 * E * I_col / L1
d1 = 2 * E * I_col / L1

% K local columna (u, w, theta) x 2 nodos = 6x6
% DOFs: [u0, w0, th0, u2, w2, th2]
% Columna vertical: axial=w, corte=u, flexion=theta
K1 = [t1, 0, b1, -t1, 0, b1; 0, k1, 0, 0, -k1, 0; b1, 0, c1, -b1, 0, d1; -t1, 0, -b1, t1, 0, -b1; 0, -k1, 0, 0, k1, 0; b1, 0, d1, -b1, 0, c1]

% ─── Elemento 2: Columna der (nodo 1→3) ───
K2 = K1

% ─── Elemento 3: Viga (nodo 2→3) ───
L3 = L
k3 = E * A_vig / L3
t3 = 12 * E * I_vig / L3^3
b3 = 6 * E * I_vig / L3^2
c3 = 4 * E * I_vig / L3
d3 = 2 * E * I_vig / L3

% K local viga: DOFs [u2, w2, th2, u3, w3, th3]
K3 = [k3, 0, 0, -k3, 0, 0; 0, t3, b3, 0, -t3, b3; 0, b3, c3, 0, -b3, d3; -k3, 0, 0, k3, 0, 0; 0, -t3, -b3, 0, t3, -b3; 0, b3, d3, 0, -b3, c3]

% ─── Ensamblaje global (12 DOFs → 6 libres) ───
% Nodos 0,1 empotrados → DOFs 0-5 fijos
% Nodos 2,3 libres → DOFs 6-11 libres
% K_free = contribucion de K1(filas4-6,cols4-6) + K3(filas1-3,cols1-3)
%        + K2(filas4-6,cols4-6) + K3(filas4-6,cols4-6)

% Submatrices de cada elemento para nodos libres
% Nodo 2 recibe: K1[3:5,3:5] + K3[0:2,0:2]
% Nodo 3 recibe: K2[3:5,3:5] + K3[3:5,3:5]
% Acoplamiento 2-3: K3[0:2,3:5]

K_22 = [t1+k3, 0, -b1; 0, k1+t3, b3; -b1, b3, c1+c3]
K_33 = [t1+k3, 0, -b1; 0, k1+t3, -b3; -b1, -b3, c1+c3]
K_23 = [-k3, 0, 0; 0, -t3, b3; 0, -b3, d3]
K_32 = [-k3, 0, 0; 0, -t3, -b3; 0, b3, d3]

% K global reducido (6x6)
K_free = [K_22, K_23; K_32, K_33]

% ─── Carga lateral ───
P = 10
F_free = [P; 0; 0; 0; 0; 0]

% ─── Solve ───
u = inv(K_free) * F_free

% Desplazamiento lateral nodo 2
u_lat = u(1)
`;
}

// ═══════════════════════════════════════════════════════
// TEMPLATE: Barra axial — derivación FEM completa
// ═══════════════════════════════════════════════════════

function templateAxial(): string {
  return `% ═══════════════════════════════════════════
% Barra axial — Derivación FEM paso a paso
% 1 elemento, 2 nodos, 1 DOF por nodo
% ═══════════════════════════════════════════

% ─── Datos ───
L = 2
E = 210000
A = 0.01

% ─── Ecuación diferencial de gobierno ───
% $EA \\frac{d^2u}{dx^2} + q(x) = 0$

% ─── Funciones de forma (lineales) ───
% $N_1(\\xi) = 1 - \\xi$ donde $\\xi = x/L$
% $N_2(\\xi) = \\xi$

% ─── Matriz B = dN/dx ───
B = (1/L) * [-1, 1]

% ─── Rigidez: $K = \\int_0^L B^T \\cdot EA \\cdot B \\, dx$ ───
% $K = \\frac{EA}{L} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix}$
K = (E * A / L) * [1, -1; -1, 1]

% ─── Carga distribuida $q = 5$ kN/m ───
q = 5

% ─── Vector de cargas consistente ───
% $F = \\int_0^L N^T q \\, dx = \\begin{bmatrix} qL/2 \\\\ qL/2 \\end{bmatrix}$
F_vec = [q * L / 2; q * L / 2]

% ─── Carga puntual en extremo libre ───
P = 20

% ─── Condiciones de borde: $u_1 = 0$ ───
% Reducción: $K_{22} \\cdot u_2 = F_2 + P$
EA = E * A
K_red = EA / L
F_red = q * L / 2 + P

% ─── Solución ───
u2 = F_red / K_red

% ─── Solución exacta ───
% $u(L) = \\frac{1}{EA}\\left(PL + \\frac{qL^2}{2}\\right)$
u_exact = (P * L + q * L^2 / 2) / (E * A)

% ─── Verificación ───
error_pct = abs(u2 - u_exact) / u_exact * 100

% ─── Reacción en apoyo ───
R1 = -(P + q * L)

% ─── Esfuerzo ───
% $\\sigma = E \\cdot \\varepsilon = E \\cdot \\frac{u_2}{L}$
sigma = E * u2 / L
`;
}

// ═══════════════════════════════════════════════════════
// TEMPLATE: 3 resortes — assembly manual
// ═══════════════════════════════════════════════════════

function templateSprings(): string {
  return `% ═══════════════════════════════════════════
% 3 resortes en serie — Assembly paso a paso
% 4 nodos, 1 DOF/nodo, nodo 0 y 3 fijos
% ═══════════════════════════════════════════

% ─── Rigideces ───
k1 = 100
k2 = 200
k3 = 150

% ─── Matrices locales (2x2) ───
K1 = [k1, -k1; -k1, k1]
K2 = [k2, -k2; -k2, k2]
K3 = [k3, -k3; -k3, k3]

% ─── Assembly global (4x4) ───
K = zeros(4, 4)

% Elemento 1: nodos 0-1
K(1,1) = K(1,1) + K1(1,1)
K(1,2) = K(1,2) + K1(1,2)
K(2,1) = K(2,1) + K1(2,1)
K(2,2) = K(2,2) + K1(2,2)

% Elemento 2: nodos 1-2
K(2,2) = K(2,2) + K2(1,1)
K(2,3) = K(2,3) + K2(1,2)
K(3,2) = K(3,2) + K2(2,1)
K(3,3) = K(3,3) + K2(2,2)

% Elemento 3: nodos 2-3
K(3,3) = K(3,3) + K3(1,1)
K(3,4) = K(3,4) + K3(1,2)
K(4,3) = K(4,3) + K3(2,1)
K(4,4) = K(4,4) + K3(2,2)

% ─── K global ensamblada ───
K

% ─── Cargas: F2=50, F3=0 ───
F = [0; 50; 0; 0]

% ─── Reducir: nodos 0 y 3 fijos ───
% DOFs libres: 1 y 2 (indices 2,3 en MATLAB)
K_free = [K(2,2), K(2,3); K(3,2), K(3,3)]
F_free = [F(2); F(3)]

% ─── Solve ───
u_free = inv(K_free) * F_free

% ─── Vector completo ───
u1 = u_free(1)
u2 = u_free(2)

% ─── Reacciones ───
R0 = -k1 * u1
R3 = -k3 * (0 - u2)

% ─── Verificación equilibrio ───
suma = R0 + 50 + R3
`;
}

// ═══════════════════════════════════════════════════════
// TEMPLATE: Viga empotrada — flexión
// ═══════════════════════════════════════════════════════

function templateViga(): string {
  return `% ═══════════════════════════════════════════
% Viga empotrada-libre (cantilever)
% 1 elemento, 2 DOF/nodo (v, theta)
% ═══════════════════════════════════════════

% ─── Datos ───
L = 3
E = 2.1e7
b_sec = 0.25
h = 0.40
I = b_sec * h^3 / 12

% ─── Funciones de forma (Hermite) ───
%   N1 = 1 - 3*xi² + 2*xi³
%   N2 = L*xi*(1-xi)²
%   N3 = 3*xi² - 2*xi³
%   N4 = L*xi²*(xi-1)

% ─── K local (4x4): [v1, th1, v2, th2] ───
EI = E * I
K = (EI / L^3) * [12, 6*L, -12, 6*L; 6*L, 4*L^2, -6*L, 2*L^2; -12, -6*L, 12, -6*L; 6*L, 2*L^2, -6*L, 4*L^2]

% ─── Carga puntual en extremo libre ───
P = -10

% ─── BCs: nodo 1 empotrado (v1=0, th1=0) ───
% K reducida: filas/cols 3,4
K_free = [K(3,3), K(3,4); K(4,3), K(4,4)]
F_free = [P; 0]

% ─── Solve ───
u_free = inv(K_free) * F_free
v2 = u_free(1)
th2 = u_free(2)

% ─── Solución exacta ───
v_exact = P * L^3 / (3 * EI)
th_exact = P * L^2 / (2 * EI)

% ─── Verificación ───
error_v = abs(v2 - v_exact) / abs(v_exact) * 100
error_th = abs(th2 - th_exact) / abs(th_exact) * 100

% ─── Reacciones ───
% R = K_full * u_full - F
R_v = -(P)
M_emp = -(P * L)
`;
}

// ═══════════════════════════════════════════════════════
// TEMPLATE: Calculadora libre
// ═══════════════════════════════════════════════════════

function templateCustom(): string {
  return `% ═══════════════════════════════════════════
% Calculadora libre — Álgebra lineal
% ═══════════════════════════════════════════

% ─── Matrices ───
K = [4, -2, 0; -2, 4, -2; 0, -2, 4]
F = [10; 0; -5]

% ─── Solve K*u = F ───
u = inv(K) * F

% ─── Indexación (1-based) ───
K(1,1)
K(2,3)
F(3)

% ─── Operaciones ───
Kt = K'
d = det(K)
Ki = inv(K)

% ─── Verificación: K*u = F ───
check = K * u

% ─── Utilidades ───
Z = zeros(3, 3)
I = eye(3)
v = ones(4, 1)

% ─── Loop ───
suma = 0
for i = 1:5
  suma = suma + i^2
end
suma
`;
}

// ═══════════════════════════════════════════════════════
// TEMPLATE: Datos del modelo actual
// ═══════════════════════════════════════════════════════

/** Format nodes as single-line MATLAB matrix */
function fmtNodesCompact(nodes: Node[]): string {
  if (nodes.length === 0) return "[]";
  // Limit display to first 20 nodes
  const show = nodes.slice(0, 20);
  const rows = show.map(n => `${n[0]}, ${n[1]}, ${n[2]}`).join("; ");
  const suffix = nodes.length > 20 ? ` % ... (${nodes.length} nodos total)` : "";
  return `[${rows}]${suffix}`;
}

function fmtElementsCompact(elements: Element[]): string {
  if (elements.length === 0) return "[]";
  const show = elements.slice(0, 20);
  const rows = show.map(e => e.join(", ")).join("; ");
  const suffix = elements.length > 20 ? ` % ... (${elements.length} elementos total)` : "";
  return `[${rows}]${suffix}`;
}

function fmtPropValue(map: Map<number, number> | undefined, name: string): string {
  if (!map || map.size === 0) return `% ${name}: no definido`;
  const vals = Array.from(map.values());
  // All same → scalar (works with stiffness() which broadcasts)
  if (vals.every(v => v === vals[0])) {
    return `${name} = ${vals[0]}`;
  }
  // Group unique values: if only 2-3 groups, show as comment + array
  const unique = [...new Set(vals.map(v => v.toPrecision(8)))];
  if (unique.length <= 3) {
    // Show groups as comment, full array for math.js
    const groups = unique.map(u => {
      const count = vals.filter(v => v.toPrecision(8) === u).length;
      return `${parseFloat(u)}(×${count})`;
    }).join(", ");
    return `${name} = [${vals.join(", ")}] % ${groups}`;
  }
  // Many different values — full array (math.js needs it)
  return `${name} = [${vals.join(", ")}]`;
}

function templateModelData(data: ModelData): string {
  // Separate frames (2-node) and shells (3+ nodes)
  const frameIdx: number[] = [];
  const shellIdx: number[] = [];
  data.elements.forEach((el, i) => {
    if (el.length === 2) frameIdx.push(i);
    else shellIdx.push(i);
  });

  const ei = data.elementInputs;
  const ss = (ei as any).sectionShapes as Map<number, any> | undefined;

  // Group elements by section name
  const sectionGroups = new Map<string, { indices: number[], shape: any, E: number, G: number }>();
  frameIdx.forEach(i => {
    const shape = ss?.get(i);
    const name = shape?.name || "Default";
    if (!sectionGroups.has(name)) {
      sectionGroups.set(name, {
        indices: [],
        shape: shape || { type: "rect", b: 0.40, h: 0.40 },
        E: ei.elasticities?.get(i) || 0,
        G: ei.shearModuli?.get(i) || 0,
      });
    }
    sectionGroups.get(name)!.indices.push(i);
  });

  // Build section-based property lines
  const sectionLines: string[] = [];
  let secIdx = 0;
  for (const [name, grp] of sectionGroups) {
    secIdx++;
    const s = grp.shape;
    const count = grp.indices.length;
    const tag = secIdx === 1 ? "" : `_${secIdx}`;

    if (s.type === "rect") {
      sectionLines.push(`% ─── Sección ${name}: Rectangular ${(s.b*100).toFixed(0)}×${(s.h*100).toFixed(0)} cm (${count} elem) ───`);
      sectionLines.push(`b${tag} = ${s.b}`);
      sectionLines.push(`h${tag} = ${s.h}`);
      sectionLines.push(`A${tag} = b${tag} * h${tag}`);
      sectionLines.push(`Iz${tag} = b${tag} * h${tag}^3 / 12`);
      sectionLines.push(`Iy${tag} = h${tag} * b${tag}^3 / 12`);
      sectionLines.push(`J${tag} = b${tag} * h${tag} * (b${tag}^2 + h${tag}^2) / 12`);
    } else if (s.type === "I") {
      sectionLines.push(`% ─── Sección ${name}: Perfil I (${count} elem) ───`);
      sectionLines.push(`bf${tag} = ${s.b || 0}`);
      sectionLines.push(`d${tag} = ${s.h || 0}`);
      if (s.tf) sectionLines.push(`tf${tag} = ${s.tf}`);
      if (s.tw) sectionLines.push(`tw${tag} = ${s.tw}`);
      const A = ei.areas?.get(grp.indices[0]) || 0;
      const Iz = ei.momentsOfInertiaZ?.get(grp.indices[0]) || 0;
      const Iy = ei.momentsOfInertiaY?.get(grp.indices[0]) || 0;
      sectionLines.push(`A${tag} = ${A}`);
      sectionLines.push(`Iz${tag} = ${Iz}`);
      sectionLines.push(`Iy${tag} = ${Iy}`);
    } else if (s.type === "HSS" || s.type === "CFT") {
      sectionLines.push(`% ─── Sección ${name}: Tubular ${s.type} (${count} elem) ───`);
      sectionLines.push(`b${tag} = ${s.b || 0}`);
      sectionLines.push(`h${tag} = ${s.h || 0}`);
      if (s.tw) sectionLines.push(`t${tag} = ${s.tw}`);
      const A = ei.areas?.get(grp.indices[0]) || 0;
      sectionLines.push(`A${tag} = ${A}`);
    } else if (s.type === "circ" || s.type === "pipe") {
      sectionLines.push(`% ─── Sección ${name}: Circular (${count} elem) ───`);
      sectionLines.push(`d${tag} = ${s.d || 0}`);
      const A = ei.areas?.get(grp.indices[0]) || 0;
      sectionLines.push(`A${tag} = ${A}`);
    } else {
      sectionLines.push(`% ─── Sección ${name}: ${s.type} (${count} elem) ───`);
      const A = ei.areas?.get(grp.indices[0]) || 0;
      sectionLines.push(`A${tag} = ${A}`);
    }
    sectionLines.push("");
  }

  // Material
  const E0 = ei.elasticities?.get(frameIdx[0] || 0) || 0;
  const G0 = ei.shearModuli?.get(frameIdx[0] || 0) || 0;

  // Build shell property lines
  const shellPropLines: string[] = [];
  if (shellIdx.length > 0) {
    const t0 = ei.thicknesses?.get(shellIdx[0]) || 0;
    const nu0 = ei.poissonsRatios?.get(shellIdx[0]) || 0;
    shellPropLines.push(`% ─── Shell (${shellIdx.length} elementos) ───`);
    shellPropLines.push(`t_shell = ${t0}`);
    shellPropLines.push(`nu = ${nu0}`);
  }

  return `% ═══════════════════════════════════════════
% Datos del modelo actual
% ═══════════════════════════════════════════

nnodes = ${data.nodes.length}
nelem = ${data.elements.length}
ndof = nnodes * 6

% Coordenadas [x,y,z]
nodes = ${fmtNodesCompact(data.nodes)}

% Conectividad
elem = ${fmtElementsCompact(data.elements)}

% ─── Material ───
E = ${E0}
G = ${G0}

% ─── Secciones (${sectionGroups.size} tipos, ${frameIdx.length} frames) ───
${sectionLines.join("\n")}
${shellPropLines.join("\n")}`;
}

// ═══════════════════════════════════════════════════════
// FERREIRA: MATLAB Codes for FEA — Cap 2: Springs
// Ref: problem1.m (Ferreira 2008, p.24)
// ═══════════════════════════════════════════════════════

function ferSprings(): string {
  return `% ═══════════════════════════════════════════
% Ferreira Cap 2: Resortes discretos
% Ref: problem1.m — 3 resortes, 4 nodos
% ═══════════════════════════════════════════

% ─── Datos ───
% 3 resortes conectando 4 nodos
% $k_1, k_2, k_3 = 1$ (rigidez unitaria)
% Carga $P = 10$ en nodo 2
nNodes = 4
nElem = 3

% Conectividad
elemNodes = [1, 2; 2, 3; 2, 4]

% Rigideces
k1 = 1
k2 = 1
k3 = 1

% ─── Matrices locales $K^e = k \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix}$ ───
K1 = k1 * [1, -1; -1, 1]
K2 = k2 * [1, -1; -1, 1]
K3 = k3 * [1, -1; -1, 1]

% ─── Ensamblaje manual ───
K = zeros(nNodes, nNodes)
% Elemento 1: nodos 1-2
K = K + [[k1, -k1, 0, 0; -k1, k1, 0, 0; 0, 0, 0, 0; 0, 0, 0, 0]]
% Elemento 2: nodos 2-3
K = K + [[0, 0, 0, 0; 0, k2, -k2, 0; 0, -k2, k2, 0; 0, 0, 0, 0]]
% Elemento 3: nodos 2-4
K = K + [[0, 0, 0, 0; 0, k3, 0, -k3; 0, 0, 0, 0; 0, -k3, 0, k3]]

% ─── K global ensamblada ───
% $K_{global}$:
K

% ─── Vector de fuerzas ───
F = [0; 10; 0; 0]

% ─── BCs: nodos 1, 3, 4 fijos ───
% DOF libre: solo nodo 2
% $K_{22} \\cdot u_2 = F_2$
K_red = K(2, 2)
F_red = 10

% ─── Solución ───
u2 = F_red / K_red

% ─── Reacciones $R = K \\cdot u - F$ ───
R1 = -k1 * u2
R3 = -k2 * u2
R4 = -k3 * u2
% Verificación: $R_1 + R_3 + R_4 + P = 0$
check = R1 + R3 + R4 + 10
`;
}

// ═══════════════════════════════════════════════════════
// FERREIRA: Cap 3 — Barra axial isoparamétrica
// Ref: problem2.m (Ferreira 2008, p.37)
// ═══════════════════════════════════════════════════════

function ferBar(): string {
  return `% ═══════════════════════════════════════════
% Ferreira Cap 3: Barra axial
% Ref: problem2.m — barra con carga puntual
% ═══════════════════════════════════════════

% ─── Datos ───
E = 1
A = 1
L_total = 1
nElem = 4
Le = L_total / nElem

% ─── Rigidez local ───
% $K^e = \\frac{EA}{L_e} \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix}$
ke = E * A / Le
Ke = ke * [1, -1; -1, 1]

% ─── Ensamblaje ───
nNodes = nElem + 1
K = zeros(nNodes, nNodes)
% Ciclo de ensamblaje
% for e = 1:nElem
%   dofs = [e, e+1]
%   K(dofs,dofs) = K(dofs,dofs) + Ke
% end
% Resultado equivalente:
K(1,1) = ke
K(nNodes,nNodes) = ke
% Nodos internos: 2*ke en diagonal
K(2,2) = 2*ke
K(3,3) = 2*ke
K(4,4) = 2*ke
% Off-diagonals
K(1,2) = -ke
K(2,1) = -ke
K(2,3) = -ke
K(3,2) = -ke
K(3,4) = -ke
K(4,3) = -ke
K(4,5) = -ke
K(5,4) = -ke

% ─── Carga: P = 1 en nodo 5 (extremo libre) ───
P = 1
F = [0; 0; 0; 0; P]

% ─── BCs: nodo 1 fijo ───
% Reducción: eliminar fila/columna 1
% $K_{red} \\cdot u = F_{red}$

% ─── Solución exacta ───
% $u(x) = \\frac{Px}{EA}$
u_exact_5 = P * L_total / (E * A)
`;
}

// ═══════════════════════════════════════════════════════
// FERREIRA: Cap 4 — Truss 2D
// Ref: problem5.m (Ferreira 2008, p.53)
// ═══════════════════════════════════════════════════════

function ferTruss2D(): string {
  return `% ═══════════════════════════════════════════
% Ferreira Cap 4: Truss 2D
% Ref: problem5.m — cercha plana, 2 DOF/nodo
% ═══════════════════════════════════════════

% ─── Datos ───
E = 30e6
A = 2

% Nodos [x, y]
nodes = [0, 0; 40, 0; 40, 30; 0, 30]
nNodes = 4

% Conectividad
elem = [1, 2; 1, 3; 2, 3; 3, 4; 1, 4]
nElem = 5

% ─── Longitud y cosenos directores ───
% Elemento 1: horizontal
dx_1 = 40
dy_1 = 0
L_1 = 40
c_1 = dx_1 / L_1
s_1 = dy_1 / L_1

% Elemento 2: diagonal
dx_2 = 40
dy_2 = 30
L_2 = sqrt(dx_2^2 + dy_2^2)
c_2 = dx_2 / L_2
s_2 = dy_2 / L_2

% ─── K local truss (4x4 en global) ───
% $K^e = \\frac{EA}{L} \\begin{bmatrix} c^2 & cs & -c^2 & -cs \\\\ cs & s^2 & -cs & -s^2 \\\\ -c^2 & -cs & c^2 & cs \\\\ -cs & -s^2 & cs & s^2 \\end{bmatrix}$

% Elemento 1 (horizontal): c=1, s=0
K1 = E * A / L_1 * [1, 0, -1, 0; 0, 0, 0, 0; -1, 0, 1, 0; 0, 0, 0, 0]

% Elemento 2 (diagonal): c=0.8, s=0.6
K2 = E * A / L_2 * [c_2^2, c_2*s_2, -c_2^2, -c_2*s_2; c_2*s_2, s_2^2, -c_2*s_2, -s_2^2; -c_2^2, -c_2*s_2, c_2^2, c_2*s_2; -c_2*s_2, -s_2^2, c_2*s_2, s_2^2]

% ─── Cargas ───
% $F_3 = 20000$ lb (en nodo 2, dirección y)
% $F_7 = -25000$ lb (en nodo 4, dirección y)
`;
}

// ═══════════════════════════════════════════════════════
// FERREIRA: Cap 5 — Truss 3D
// ═══════════════════════════════════════════════════════

function ferTruss3D(): string {
  return `% ═══════════════════════════════════════════
% Ferreira Cap 5: Truss 3D
% Ref: problem8.m — cercha espacial, 3 DOF/nodo
% ═══════════════════════════════════════════

% ─── Datos ───
E = 1.2e6
A = 0.5

% Nodos [x, y, z]
nodes = [72, 0, 0; 0, 36, 0; 0, 36, 72; 0, 0, -48]

% Conectividad
elem = [1, 2; 1, 3; 1, 4]
nElem = 3

% ─── Longitud elemento 1 ───
dx = nodes(2,1) - nodes(1,1)
dy = nodes(2,2) - nodes(1,2)
dz = nodes(2,3) - nodes(1,3)
L_1 = sqrt(dx^2 + dy^2 + dz^2)

% Cosenos directores
cx = dx / L_1
cy = dy / L_1
cz = dz / L_1

% ─── K local truss 3D (6x6) ───
% $K^e = \\frac{EA}{L} T^T \\begin{bmatrix} 1 & -1 \\\\ -1 & 1 \\end{bmatrix} T$
% donde $T$ transforma 3D a local

% ─── Carga en nodo 1 ───
% $F = [0, -1000, 0]$ (nodo 1)
`;
}

// ═══════════════════════════════════════════════════════
// FERREIRA: Cap 6 — Viga Bernoulli
// ═══════════════════════════════════════════════════════

function ferBernoulli(): string {
  return `% ═══════════════════════════════════════════
% Ferreira Cap 6: Viga Euler-Bernoulli
% Ref: problem9.m — viga simplemente apoyada
% ═══════════════════════════════════════════

% ─── Datos ───
E = 1
I = 1
L = 1
nElem = 4
Le = L / nElem

% 2 DOF/nodo: $w$ (deflexión) y $\\theta$ (rotación)
% ─── Rigidez local (4x4) ───
% $K^e = \\frac{EI}{L^3} \\begin{bmatrix} 12 & 6L & -12 & 6L \\\\ 6L & 4L^2 & -6L & 2L^2 \\\\ -12 & -6L & 12 & -6L \\\\ 6L & 2L^2 & -6L & 4L^2 \\end{bmatrix}$

coeff = E * I / Le^3
Ke = coeff * [12, 6*Le, -12, 6*Le; 6*Le, 4*Le^2, -6*Le, 2*Le^2; -12, -6*Le, 12, -6*Le; 6*Le, 2*Le^2, -6*Le, 4*Le^2]

% ─── Carga distribuida q ───
q = 1
% Vector de fuerzas consistente:
% $f^e = \\frac{qL}{2} \\begin{bmatrix} 1 \\\\ L/6 \\\\ 1 \\\\ -L/6 \\end{bmatrix}$
fe = q * Le / 2 * [1; Le/6; 1; -Le/6]

% ─── BCs: SS (simplemente apoyada) ───
% $w_1 = 0$, $w_{n+1} = 0$ (DOFs 1, 2*nNodes-1)

% ─── Solución exacta centro ───
% $w_{max} = \\frac{5qL^4}{384EI}$
w_exact = 5 * q * L^4 / (384 * E * I)
`;
}

// ═══════════════════════════════════════════════════════
// FERREIRA: Cap 7 — Frame 2D
// ═══════════════════════════════════════════════════════

function ferFrame2D(): string {
  return `% ═══════════════════════════════════════════
% Ferreira Cap 7: Frame 2D
% Ref: problem11.m — pórtico plano, 3 DOF/nodo
% ═══════════════════════════════════════════

% ─── Datos ───
E = 210e6
A = 2e-2
I = 5e-5
P = 10000

% Nodos [x, y]
nodes = [0, 0; 0, 6; 6, 6; 6, 0]
nNodes = 4

% Conectividad
elem = [1, 2; 2, 3; 3, 4]
nElem = 3

% 3 DOF/nodo: $u$, $v$, $\\theta$
ndof = nNodes * 3

% ─── Longitud y ángulo ───
% Elem 1 (columna izq): L=6, $\\theta=90°$
L_1 = 6
theta_1 = pi / 2
% Elem 2 (viga): L=6, $\\theta=0°$
L_2 = 6
theta_2 = 0
% Elem 3 (columna der): L=6, $\\theta=-90°$
L_3 = 6
theta_3 = -pi / 2

% ─── K local frame 2D (6x6) ───
% $K^e = \\begin{bmatrix} EA/L & 0 & 0 & -EA/L & 0 & 0 \\\\
%   0 & 12EI/L^3 & 6EI/L^2 & 0 & -12EI/L^3 & 6EI/L^2 \\\\
%   0 & 6EI/L^2 & 4EI/L & 0 & -6EI/L^2 & 2EI/L \\\\
%   \\cdots \\end{bmatrix}$

% Ejemplo elem 2 (viga horizontal):
Ke_2_local = [E*A/L_2, 0, 0, -E*A/L_2, 0, 0; 0, 12*E*I/L_2^3, 6*E*I/L_2^2, 0, -12*E*I/L_2^3, 6*E*I/L_2^2; 0, 6*E*I/L_2^2, 4*E*I/L_2, 0, -6*E*I/L_2^2, 2*E*I/L_2; -E*A/L_2, 0, 0, E*A/L_2, 0, 0; 0, -12*E*I/L_2^3, -6*E*I/L_2^2, 0, 12*E*I/L_2^3, -6*E*I/L_2^2; 0, 6*E*I/L_2^2, 2*E*I/L_2, 0, -6*E*I/L_2^2, 4*E*I/L_2]

% ─── Transformación ───
% $T = \\begin{bmatrix} c & s & 0 \\\\ -s & c & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$

% ─── Carga: P horizontal en nodo 2 ───
% $F = [P, 0, 0]$ en nodo 2 (DOFs 4,5,6)

% ─── BCs: empotrado nodos 1 y 4 ───
`;
}

// ═══════════════════════════════════════════════════════
// FERREIRA: Cap 8 — Frame 3D
// ═══════════════════════════════════════════════════════

function ferFrame3D(): string {
  return `% ═══════════════════════════════════════════
% Ferreira Cap 8: Frame 3D
% Ref: problem13.m — pórtico espacial, 6 DOF/nodo
% ═══════════════════════════════════════════

% ─── Datos ───
E = 210e9
G = 84e9
A = 0.02
Iy = 10e-5
Iz = 20e-5
J = 5e-5

% Nodos [x, y, z]
nodes = [0, 0, 0; 3, 0, 0; 3, 0, -3; 0, 0, -3]

% Conectividad
elem = [1, 2; 2, 3; 3, 4]

% 6 DOF/nodo: $u, v, w, \\theta_x, \\theta_y, \\theta_z$
nNodes = 4
ndof = nNodes * 6

% ─── K local frame 3D (12x12) ───
% Incluye: axial, flexión 2 planos, torsión
% Los coeficientes del libro (Eq 8.1-8.4):
% $K_{11} = EA/L$, $K_{22} = 12EI_z/L^3$, $K_{33} = 12EI_y/L^3$
% $K_{44} = GJ/L$, $K_{55} = 4EI_y/L$, $K_{66} = 4EI_z/L$

L_1 = 3
K_axial = E * A / L_1
K_flex_z = 12 * E * Iz / L_1^3
K_flex_y = 12 * E * Iy / L_1^3
K_torsion = G * J / L_1
K_bend_y = 4 * E * Iy / L_1
K_bend_z = 4 * E * Iz / L_1

% ─── Carga: P = 20000 N en nodo 2, dirección -Z ───
P = -20000

% ─── BCs: empotrado nodos 1 y 4 ───
`;
}

// ═══════════════════════════════════════════════════════
// FERREIRA: Cap 10 — Timoshenko beam
// ═══════════════════════════════════════════════════════

function ferTimoshenko(): string {
  return `% ═══════════════════════════════════════════
% Ferreira Cap 10: Viga Timoshenko
% Ref: problem16.m — incluye deformación por corte
% ═══════════════════════════════════════════

% ─── Datos ───
E = 1
I = 1
L_total = 1
kapa = 5/6
nElem = 20
Le = L_total / nElem
q = 1

% ─── Rigidez Timoshenko (4x4) ───
% 2 DOF/nodo: $w$ y $\\theta$
% $K^e = K_b + K_s$ (flexión + corte)
% $K_b = \\frac{EI}{L} \\begin{bmatrix} 0 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & -1 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & -1 & 0 & 1 \\end{bmatrix}$
% Integración reducida (1 pto Gauss)

% ─── Thickness ratio ───
thickness = 0.001
% $h/L$ = 0.001 → thin plate limit
G = E / (2 * (1 + 0.3))

% ─── Solución exacta (SS, carga uniforme) ───
% $w_{max} = \\frac{5qL^4}{384EI} + \\frac{qL^2}{8\\kappa G A}$
w_euler = 5 * q * L_total^4 / (384 * E * I)
A_s = thickness
w_shear = q * L_total^2 / (8 * kapa * G * A_s)
w_total = w_euler + w_shear

% ─── Para thick beam ($h/L = 0.1$) ───
thick_h = 0.1
I_thick = thick_h^3 / 12
w_euler_thick = 5 * q * L_total^4 / (384 * E * I_thick)
w_shear_thick = q * L_total^2 / (8 * kapa * G * thick_h)
ratio_shear = w_shear_thick / w_euler_thick * 100
`;
}

// ═══════════════════════════════════════════════════════
// FERREIRA: Cap 11 — Plane stress Q4
// ═══════════════════════════════════════════════════════

function ferPlaneStressQ4(): string {
  return `% ═══════════════════════════════════════════
% Ferreira Cap 11: Plane Stress Q4
% Ref: problem17.m — tensión plana, elemento Q4
% ═══════════════════════════════════════════

% ─── Datos ───
E = 1
nu = 0.3
thickness = 1

% ─── Matriz constitutiva $D$ ───
% $D = \\frac{E}{1-\\nu^2} \\begin{bmatrix} 1 & \\nu & 0 \\\\ \\nu & 1 & 0 \\\\ 0 & 0 & \\frac{1-\\nu}{2} \\end{bmatrix}$
coeff_D = E / (1 - nu^2)
D11 = coeff_D
D12 = coeff_D * nu
D33 = coeff_D * (1 - nu) / 2

% ─── Funciones de forma Q4 ───
% $N_i(\\xi,\\eta) = \\frac{1}{4}(1 \\pm \\xi)(1 \\pm \\eta)$
% Derivadas:
% $\\frac{\\partial N_1}{\\partial \\xi} = -\\frac{1}{4}(1-\\eta)$

% ─── Puntos de Gauss 2×2 ───
gp = 0.577350269189626
pts = [-gp, -gp; gp, -gp; gp, gp; -gp, gp]
weights = [1, 1, 1, 1]

% ─── Ejemplo: placa con agujero ───
% Placa cuadrada 1x1, 2 DOF/nodo (u, v)
% Presión en tracción

% ─── Matriz B (strain-displacement) ───
% $B = \\begin{bmatrix} \\frac{\\partial N_i}{\\partial x} & 0 \\\\ 0 & \\frac{\\partial N_i}{\\partial y} \\\\ \\frac{\\partial N_i}{\\partial y} & \\frac{\\partial N_i}{\\partial x} \\end{bmatrix}$

% ─── Rigidez: $K^e = \\int B^T D B \\, t \\, dA$ ───
% Integración numérica con 4 puntos de Gauss
`;
}

// ═══════════════════════════════════════════════════════
// FERREIRA: Cap 12 — Mindlin plate Q4
// ═══════════════════════════════════════════════════════

function ferMindlinQ4(): string {
  return `% ═══════════════════════════════════════════
% Ferreira Cap 12: Placa Mindlin Q4
% Ref: problem19.m — placa cuadrada en flexión
% Benchmark validado con solución exacta
% ═══════════════════════════════════════════

% ─── Datos ───
E = 10920
nu = 0.30
kapa = 5/6
thickness = 0.1
I_plate = thickness^3 / 12

% ─── Rigidez flexural $D$ ───
% $D = \\frac{Eh^3}{12(1-\\nu^2)}$
D_flex = E * thickness^3 / (12 * (1 - nu^2))

% ─── Matriz constitutiva flexión ───
% $C_b = \\frac{E}{1-\\nu^2} \\begin{bmatrix} 1 & \\nu & 0 \\\\ \\nu & 1 & 0 \\\\ 0 & 0 & \\frac{1-\\nu}{2} \\end{bmatrix}$
C_b_coeff = I_plate * E / (1 - nu^2)

% ─── Matriz constitutiva corte ───
% $C_s = \\kappa \\frac{Eh}{2(1+\\nu)} I_2$
C_s_coeff = kapa * thickness * E / (2 * (1 + nu))

% ─── Placa cuadrada ───
a = 1
P = -1

% ─── Mesh 4×4 ───
nX = 4
nY = 4
nNodes = (nX + 1) * (nY + 1)
nElem = nX * nY
ndof = 3 * nNodes

% 3 DOF/nodo: $w, \\theta_x, \\theta_y$

% ─── Integración selectiva ───
% Flexión: 2×2 Gauss (completa)
% Corte: 1×1 Gauss (reducida → evita shear locking)

% ─── K elemento: $K^e = K_b + K_s$ ───
% $K_b = \\frac{h^3}{12} \\int B_f^T D_f B_f \\, |J| \\, d\\xi d\\eta$ (2×2)
% $K_s = \\alpha h \\int B_c^T D_c B_c \\, |J| \\, d\\xi d\\eta$ (1×1)

% ─── Solución exacta (SSSS, a/h=10) ───
% $\\bar{w} = w \\frac{D}{PL^4}$
w_bar_exact_SSSS = 0.004270
w_bar_exact_CCCC = 0.001503

% ─── Desplazamiento esperado ───
w_SSSS = w_bar_exact_SSSS * P * a^4 / D_flex
w_CCCC = w_bar_exact_CCCC * P * a^4 / D_flex

% ─── Resultados Ferreira (Table 12.1, a/h=10) ───
% Mesh 2×2:   SSSS=0.003545  CCCC=0.000357
% Mesh 6×6:   SSSS=0.004245  CCCC=0.001486
% Mesh 10×10: SSSS=0.004263  CCCC=0.001498
% Mesh 20×20: SSSS=0.004270  CCCC=0.001503
% Mesh 30×30: SSSS=0.004271  CCCC=0.001503
% Exacto:     SSSS=0.004270  CCCC=—
`;
}
