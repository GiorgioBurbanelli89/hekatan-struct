/**
 * calcTemplates.ts — Scripts predefinidos para la calculadora FEM
 *
 * Cada template inyecta datos del modelo actual + código paso a paso.
 */

import { Node, Element, NodeInputs, ElementInputs } from "awatif-fem";

export interface ModelData {
  nodes: Node[];
  elements: Element[];
  nodeInputs: NodeInputs;
  elementInputs: ElementInputs;
}

/** Format nodes as MATLAB matrix */
function fmtNodes(nodes: Node[]): string {
  return nodes.map(n => `  ${n[0]}, ${n[1]}, ${n[2]}`).join(";\n");
}

/** Format elements as MATLAB matrix (0-based) */
function fmtElements(elements: Element[]): string {
  return elements.map(e => `  ${e.join(", ")}`).join(";\n");
}

/** Format supports */
function fmtSupports(ni: NodeInputs): string {
  if (!ni.supports) return "% (sin apoyos)";
  const lines: string[] = [];
  for (const [node, sup] of ni.supports) {
    const vals = sup.map(v => v ? "1" : "0").join(", ");
    lines.push(`  ${node}, ${vals}`);
  }
  return lines.join(";\n");
}

/** Format loads */
function fmtLoads(ni: NodeInputs): string {
  if (!ni.loads) return "% (sin cargas)";
  const lines: string[] = [];
  for (const [node, load] of ni.loads) {
    const vals = load.map(v => v).join(", ");
    lines.push(`  ${node}, ${vals}`);
  }
  return lines.join(";\n");
}

/** Format element property map */
function fmtPropMap(map: Map<number, number> | undefined, name: string): string {
  if (!map || map.size === 0) return `% ${name}: no definido`;
  // Check if all values are the same
  const vals = Array.from(map.values());
  if (vals.every(v => v === vals[0])) {
    return `${name} = ${vals[0]}`;
  }
  // Array format
  return `${name} = [${vals.join(", ")}]`;
}

// ═══════════════════════════════════════════════════════
// TEMPLATES
// ═══════════════════════════════════════════════════════

export function getTemplate(templateId: string, data: ModelData): string {
  switch (templateId) {
    case "empty": return templateEmpty(data);
    case "static": return templateStaticFull(data);
    case "stiffness": return templateStiffnessOnly(data);
    case "axial": return templateAxialOnly(data);
    case "custom": return templateCustomCalc();
    default: return templateEmpty(data);
  }
}

export const templateList = [
  { id: "static", name: "Análisis estático completo" },
  { id: "stiffness", name: "Solo rigidez (K_local, T)" },
  { id: "axial", name: "Barra axial paso a paso" },
  { id: "empty", name: "Solo datos del modelo" },
  { id: "custom", name: "Calculadora libre" },
];

// --- Template: Solo datos del modelo ---
function templateEmpty(data: ModelData): string {
  return `% ═══════════════════════════════════════════
% Modelo actual — Datos
% ═══════════════════════════════════════════

% Coordenadas de nodos [x, y, z]
nodes = [
${fmtNodes(data.nodes)}
]

% Conectividad de elementos [nodo_i, nodo_j]
elem = [
${fmtElements(data.elements)}
]

% Apoyos [nodo, tx,ty,tz,rx,ry,rz]
supports = [
${fmtSupports(data.nodeInputs)}
]

% Cargas [nodo, Fx,Fy,Fz,Mx,My,Mz]
loads = [
${fmtLoads(data.nodeInputs)}
]

% Propiedades
${fmtPropMap(data.elementInputs.elasticities, "E")}
${fmtPropMap(data.elementInputs.areas, "A")}
${fmtPropMap(data.elementInputs.momentsOfInertiaZ, "Iz")}
${fmtPropMap(data.elementInputs.momentsOfInertiaY, "Iy")}
${fmtPropMap(data.elementInputs.shearModuli, "G")}
${fmtPropMap(data.elementInputs.torsionalConstants, "J")}

nelem = ${data.elements.length}
nnodes = ${data.nodes.length}
ndof = nnodes * 6
`;
}

// --- Template: Análisis estático completo ---
function templateStaticFull(data: ModelData): string {
  return templateEmpty(data) + `
% ═══════════════════════════════════════════
% Análisis estático paso a paso
% ═══════════════════════════════════════════

% Paso 1: Rigidez local y transformación por elemento
for i = 1:nelem
  K_loc = stiffness(i)
  T_i = transform(i)
  K_glob = T_i' * K_loc * T_i
end

% Paso 2: Ensamblaje global
K_total = assemble()

% Paso 3: Vector de fuerzas
F = forcevec()

% Paso 4: Aplicar condiciones de borde y resolver
u = solve()

% Paso 5: Reacciones
R = reactions()

% Paso 6: Fuerzas internas del último elemento
f_local = K_loc * T_i * u
`;
}

// --- Template: Solo rigidez ---
function templateStiffnessOnly(data: ModelData): string {
  return templateEmpty(data) + `
% ═══════════════════════════════════════════
% Matrices de rigidez por elemento
% ═══════════════════════════════════════════

for i = 1:nelem
  % Matriz de rigidez local (12x12)
  K_loc = stiffness(i)

  % Matriz de transformación (12x12)
  T_i = transform(i)

  % Cosenos directores (3x3)
  % lambda = T_i(1:3, 1:3)

  % Rigidez global = T' * K_local * T
  K_glob = T_i' * K_loc * T_i
end
`;
}

// --- Template: Barra axial paso a paso ---
function templateAxialOnly(data: ModelData): string {
  return `% ═══════════════════════════════════════════
% Barra axial — Derivación paso a paso
% (1 elemento, 2 nodos, 1 DOF por nodo)
% ═══════════════════════════════════════════

% Geometría
L = 1
E = 1
A = 1

% Ecuación diferencial de gobierno:
%   EA * d²u/dx² + q(x) = 0

% Funciones de forma lineales:
%   N1(xi) = 1 - xi    (xi = x/L)
%   N2(xi) = xi

% Matriz de deformación B = dN/dx:
%   B = (1/L) * [-1, 1]
B = (1/L) * [-1, 1]

% Matriz constitutiva D = E
D = E

% Rigidez: K = A * integral(B' * D * B dx, 0, L)
%   K = (E*A/L) * [1, -1; -1, 1]
K = (E * A / L) * [1, -1; -1, 1]

% Carga distribuida q(x) = b = 1
b = 1
% Vector de cargas: Q = integral(N' * q dx, 0, L)
Q = [b * L / 2; b * L / 2]

% Carga puntual en extremo libre
P = 0

% Condición de borde: u1 = 0 (empotrado)
% Ecuación reducida: K(2,2) * u2 = Q(2) + P
u2 = (Q(2) + P) / K(2,2)

% Desplazamiento exacto:
%   u(x) = (1/EA) * (-b*x²/2 + (P+b*L)*x)
% En x=L:
u_exact = (1 / (E * A)) * (-b * L * L / 2 + (P + b * L) * L)

% Verificación
error = u2 - u_exact
`;
}

// --- Template: Calculadora libre ---
function templateCustomCalc(): string {
  return `% ═══════════════════════════════════════════
% Calculadora libre
% ═══════════════════════════════════════════

% Matrices estilo MATLAB
K = [4, -2, 0; -2, 4, -2; 0, -2, 4]
F = [10; 0; -5]

% Solve
u = K \\ F

% Indexación (1-based)
K(1,1)
K(2,3)
F(3)

% Operaciones
Kt = K'
d = det(K)
Ki = inv(K)

% Verificación: K * u debe dar F
check = K * u

% Zeros, ones, eye
Z = zeros(3, 3)
I = eye(3)
v = ones(4, 1)
`;
}
