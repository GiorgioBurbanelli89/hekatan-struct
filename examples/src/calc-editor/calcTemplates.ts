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
  { id: "portal", name: "Portal 2D — paso a paso" },
  { id: "axial", name: "Barra axial — derivación FEM" },
  { id: "spring3", name: "3 resortes — assembly manual" },
  { id: "viga2d", name: "Viga empotrada — flexión" },
  { id: "custom", name: "Calculadora libre" },
  { id: "empty", name: "Datos del modelo actual" },
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
u1 = u_node(1)
u2 = u_node(2)

% ─── Paso 4: Reacciones en apoyos ───
r1 = r_node(1)

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
%   EA * d²u/dx² + q(x) = 0

% ─── Funciones de forma (lineales) ───
%   N1(xi) = 1 - xi    (xi = x/L)
%   N2(xi) = xi

% ─── Matriz B = dN/dx ───
B = (1/L) * [-1, 1]

% ─── Rigidez: K = integral(B' * E*A * B dx, 0, L) ───
%   K = (EA/L) * [1, -1; -1, 1]
K = (E * A / L) * [1, -1; -1, 1]

% ─── Carga distribuida q = 5 kN/m ───
q = 5

% ─── Vector de cargas consistente ───
%   Q = integral(N' * q dx, 0, L)
%   Q = [q*L/2; q*L/2]
Q = [q * L / 2; q * L / 2]

% ─── Carga puntual en extremo libre ───
P = 20

% ─── Condiciones de borde: u1 = 0 ───
% Ecuación reducida: K(2,2) * u2 = Q(2) + P
K_red = K(2,2)
F_red = Q(2) + P

% ─── Solución ───
u2 = F_red / K_red

% ─── Solución exacta ───
%   u(L) = (1/EA) * (P*L + q*L²/2)
u_exact = (P * L + q * L^2 / 2) / (E * A)

% ─── Verificación ───
error_pct = abs(u2 - u_exact) / u_exact * 100

% ─── Reacción en apoyo ───
R1 = -(P + q * L)

% ─── Esfuerzo ───
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

  // Build frame-only property maps
  const framePropLines: string[] = [];
  const addFrameProp = (map: Map<number, number> | undefined, name: string) => {
    if (!map || map.size === 0) return;
    const vals = frameIdx.map(i => map.get(i)).filter(v => v !== undefined) as number[];
    if (vals.length === 0) return;
    if (vals.every(v => v === vals[0])) {
      framePropLines.push(`${name} = ${vals[0]}`);
    } else {
      framePropLines.push(`${name} = [${vals.join(", ")}]`);
    }
  };
  addFrameProp(data.elementInputs.elasticities, "E");
  addFrameProp(data.elementInputs.areas, "A");
  addFrameProp(data.elementInputs.momentsOfInertiaZ, "Iz");
  addFrameProp(data.elementInputs.momentsOfInertiaY, "Iy");
  addFrameProp(data.elementInputs.shearModuli, "G");
  addFrameProp(data.elementInputs.torsionalConstants, "J");

  // Build shell property lines
  const shellPropLines: string[] = [];
  if (shellIdx.length > 0) {
    const addShellProp = (map: Map<number, number> | undefined, name: string) => {
      if (!map || map.size === 0) return;
      const vals = shellIdx.map(i => map.get(i)).filter(v => v !== undefined) as number[];
      if (vals.length === 0) return;
      if (vals.every(v => v === vals[0])) {
        shellPropLines.push(`${name}_shell = ${vals[0]}`);
      } else {
        shellPropLines.push(`${name}_shell = [${vals.join(", ")}]`);
      }
    };
    addShellProp(data.elementInputs.elasticities, "E");
    addShellProp(data.elementInputs.thicknesses, "t");
    addShellProp(data.elementInputs.poissonsRatios, "nu");
  }

  const shellSection = shellIdx.length > 0 ? `
% Shells (${shellIdx.length} elementos de ${shellIdx[0]+1}..${shellIdx[shellIdx.length-1]+1})
nshells = ${shellIdx.length}
${shellPropLines.join("\n")}
` : "";

  return `% ═══════════════════════════════════════════
% Datos del modelo actual
% ═══════════════════════════════════════════

nnodes = ${data.nodes.length}
nelem = ${data.elements.length}
nframes = ${frameIdx.length}
ndof = nnodes * 6

% Coordenadas [x,y,z]
nodes = ${fmtNodesCompact(data.nodes)}

% Conectividad
elem = ${fmtElementsCompact(data.elements)}

% Propiedades frames (${frameIdx.length} elementos)
${framePropLines.join("\n")}
${shellSection}`;
}
