/**
 * tutorialContent.ts — FEM Tutorial Scripts (ES/EN)
 *
 * Each tutorial contains executable MATLAB-like code compatible with calcEngine.ts.
 * Comments (%) provide theory explanations between executable lines.
 *
 * IMPORTANT: No matrix indexing M(i,j) or V(i) is used anywhere.
 * All computations use scalar variables directly.
 */

export interface Tutorial {
  id: string;
  title: { es: string; en: string };
  desc: { es: string; en: string };
  code: { es: string; en: string };
}

export const TUTORIALS: Tutorial[] = [
  // ═══════════════════════════════════════════════════════
  // 1. Introduction to FEM
  // ═══════════════════════════════════════════════════════
  {
    id: "intro_fem",
    title: {
      es: "Introduccion al FEM",
      en: "Introduction to FEM",
    },
    desc: {
      es: "Discretizacion, nodos, elementos, GDL. Barra 1D con 2 nodos.",
      en: "Discretization, nodes, elements, DOFs. 1D bar with 2 nodes.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 1: Introduccion al Metodo de
%             Elementos Finitos (FEM)
% =========================================

% El FEM divide una estructura continua en
% elementos pequenos conectados por nodos.
% Cada nodo tiene grados de libertad (GDL).

% --- Ejemplo: Barra axial 1D ---
% Dos nodos, un elemento, 1 GDL por nodo
%
%   Nodo 1 (fijo) ---[E,A,L]--- Nodo 2 (carga P)

% Propiedades del material y seccion
E = 200000        % Modulo de elasticidad (MPa)
A = 500           % Area de la seccion (mm2)
L = 1000          % Longitud del elemento (mm)

% Rigidez axial del elemento
k = E * A / L
k

% Matriz de rigidez 2x2 del elemento
K = [k, -k; -k, k]

% Carga aplicada en el nodo 2
P = 50000         % Fuerza (N)

% Vector de fuerzas global
F = [0; P]

% Condiciones de contorno: nodo 1 fijo (u1=0)
% Particionamos: solo el GDL libre (nodo 2)
% Kff = k (diagonal inferior derecha de K)
Kff = k
Ff = P

% Resolver: Kff * u2 = Ff
u2 = Ff / Kff

% Desplazamiento en nodo 2 (mm)
u2

% Fuerza de reaccion en nodo 1
% R1 = K11*u1 + K12*u2 = 0 + (-k)*u2
R1 = -k * u2
R1

% Deformacion y esfuerzo
epsilon = u2 / L
sigma = E * epsilon
sigma`,

      en: `% =========================================
% TUTORIAL 1: Introduction to the Finite
%             Element Method (FEM)
% =========================================

% FEM divides a continuous structure into
% small elements connected at nodes.
% Each node has degrees of freedom (DOFs).

% --- Example: 1D axial bar ---
% Two nodes, one element, 1 DOF per node
%
%   Node 1 (fixed) ---[E,A,L]--- Node 2 (load P)

% Material and section properties
E = 200000        % Elastic modulus (MPa)
A = 500           % Cross-section area (mm2)
L = 1000          % Element length (mm)

% Axial stiffness of the element
k = E * A / L
k

% 2x2 element stiffness matrix
K = [k, -k; -k, k]

% Load applied at node 2
P = 50000         % Force (N)

% Global force vector
F = [0; P]

% Boundary conditions: node 1 fixed (u1=0)
% Partition: only free DOF (node 2)
% Kff = k (lower-right diagonal of K)
Kff = k
Ff = P

% Solve: Kff * u2 = Ff
u2 = Ff / Kff

% Displacement at node 2 (mm)
u2

% Reaction force at node 1
% R1 = K11*u1 + K12*u2 = 0 + (-k)*u2
R1 = -k * u2
R1

% Strain and stress
epsilon = u2 / L
sigma = E * epsilon
sigma`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 2. Shape Functions
  // ═══════════════════════════════════════════════════════
  {
    id: "shape_functions",
    title: {
      es: "Funciones de Forma",
      en: "Shape Functions",
    },
    desc: {
      es: "Funciones de forma lineales y Hermite para vigas.",
      en: "Linear and Hermite shape functions for beams.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 2: Funciones de Forma
% =========================================

% Las funciones de forma interpolan los
% desplazamientos dentro de cada elemento.

% --- Funciones lineales (barra axial) ---
% N1(xi) = (1-xi)/2,  N2(xi) = (1+xi)/2
% xi va de -1 a +1 (coordenadas naturales)

% Evaluar en los extremos
xi_1 = -1
N1_izq = (1 - xi_1) / 2
N2_izq = (1 + xi_1) / 2
N1_izq
N2_izq

xi_2 = 1
N1_der = (1 - xi_2) / 2
N2_der = (1 + xi_2) / 2
N1_der
N2_der

% Propiedad de particion de la unidad
N_sum = N1_izq + N2_izq
N_sum

% --- Puntos de Gauss (1 punto) ---
xi_g = 0
w_g = 2
N1_g = (1 - xi_g) / 2
N2_g = (1 + xi_g) / 2
N1_g
N2_g

% --- Funciones de Hermite (viga) ---
% 4 funciones: v1, theta1, v2, theta2
% H1 = 1 - 3*xi^2 + 2*xi^3
% H2 = xi - 2*xi^2 + xi^3
% H3 = 3*xi^2 - 2*xi^3
% H4 = -xi^2 + xi^3
% (xi normalizado de 0 a 1)

xi = 0.5
H1 = 1 - 3*xi^2 + 2*xi^3
H2 = xi - 2*xi^2 + xi^3
H3 = 3*xi^2 - 2*xi^3
H4 = -1*xi^2 + xi^3

% Verificar particion de la unidad (H1+H3=1)
H1
H3
check = H1 + H3
check

% Valores de las 4 funciones en xi=0.5
H1
H2
H3
H4`,

      en: `% =========================================
% TUTORIAL 2: Shape Functions
% =========================================

% Shape functions interpolate displacements
% within each element.

% --- Linear functions (axial bar) ---
% N1(xi) = (1-xi)/2,  N2(xi) = (1+xi)/2
% xi goes from -1 to +1 (natural coords)

% Evaluate at endpoints
xi_1 = -1
N1_left = (1 - xi_1) / 2
N2_left = (1 + xi_1) / 2
N1_left
N2_left

xi_2 = 1
N1_right = (1 - xi_2) / 2
N2_right = (1 + xi_2) / 2
N1_right
N2_right

% Partition of unity property
N_sum = N1_left + N2_left
N_sum

% --- Gauss points (1 point) ---
xi_g = 0
w_g = 2
N1_g = (1 - xi_g) / 2
N2_g = (1 + xi_g) / 2
N1_g
N2_g

% --- Hermite functions (beam) ---
% 4 functions: v1, theta1, v2, theta2
% H1 = 1 - 3*xi^2 + 2*xi^3
% H2 = xi - 2*xi^2 + xi^3
% H3 = 3*xi^2 - 2*xi^3
% H4 = -xi^2 + xi^3
% (xi normalized from 0 to 1)

xi = 0.5
H1 = 1 - 3*xi^2 + 2*xi^3
H2 = xi - 2*xi^2 + xi^3
H3 = 3*xi^2 - 2*xi^3
H4 = -1*xi^2 + xi^3

% Verify partition of unity (H1+H3=1)
H1
H3
check = H1 + H3
check

% Values of all 4 functions at xi=0.5
H1
H2
H3
H4`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 3. Bar Stiffness Matrix
  // ═══════════════════════════════════════════════════════
  {
    id: "stiffness_bar",
    title: {
      es: "Matriz de Rigidez de Barra",
      en: "Bar Stiffness Matrix",
    },
    desc: {
      es: "Derivacion de K = EA/L * [1,-1;-1,1] desde B'DB.",
      en: "Derive K = EA/L * [1,-1;-1,1] from B'DB.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 3: Matriz de Rigidez de Barra
% =========================================

% Derivacion desde el principio de energia:
%   K = integral(B' * D * B * A * dx)
%
% Para barra axial:
%   N1 = (1-xi)/2,  N2 = (1+xi)/2
%   B = dN/dx = [-1/L, 1/L]
%   D = E (modulo de elasticidad)

% Propiedades
E = 29000         % ksi (acero)
A = 10            % in2
L = 120           % in (10 pies)

% Matriz B (deformacion-desplazamiento)
B = [-1/L, 1/L]

% Rigidez: K = B' * D * B * A * L
% (integrando sobre la longitud)
Ke = transpose(B) * E * B * A * L
Ke

% Forma analitica: K = EA/L * [1,-1;-1,1]
coeff = E * A / L
K_analitica = [coeff, -coeff; -coeff, coeff]
K_analitica

% Verificar que son iguales
dif = Ke - K_analitica
dif

% --- Ejemplo numerico ---
% Barra empotrada con carga P=100 kip
P = 100

% Resolver para desplazamiento libre
u2 = P / coeff
u2

% Deformacion unitaria
epsilon = u2 / L
epsilon

% Esfuerzo
sigma = E * epsilon
sigma`,

      en: `% =========================================
% TUTORIAL 3: Bar Stiffness Matrix
% =========================================

% Derivation from energy principle:
%   K = integral(B' * D * B * A * dx)
%
% For axial bar:
%   N1 = (1-xi)/2,  N2 = (1+xi)/2
%   B = dN/dx = [-1/L, 1/L]
%   D = E (elastic modulus)

% Properties
E = 29000         % ksi (steel)
A = 10            % in2
L = 120           % in (10 feet)

% B matrix (strain-displacement)
B = [-1/L, 1/L]

% Stiffness: K = B' * D * B * A * L
% (integrating over the length)
Ke = transpose(B) * E * B * A * L
Ke

% Analytical form: K = EA/L * [1,-1;-1,1]
coeff = E * A / L
K_analytical = [coeff, -coeff; -coeff, coeff]
K_analytical

% Verify they are equal
dif = Ke - K_analytical
dif

% --- Numerical example ---
% Fixed bar with load P=100 kip
P = 100

% Solve for free displacement
u2 = P / coeff
u2

% Strain
epsilon = u2 / L
epsilon

% Stress
sigma = E * epsilon
sigma`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 4. Beam Stiffness Matrix
  // ═══════════════════════════════════════════════════════
  {
    id: "stiffness_beam",
    title: {
      es: "Matriz de Rigidez de Viga",
      en: "Beam Stiffness Matrix",
    },
    desc: {
      es: "Euler-Bernoulli 4x4 K para viga 2D con EI.",
      en: "Euler-Bernoulli 4x4 K for 2D beam with EI.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 4: Matriz de Rigidez de Viga
% =========================================

% Viga Euler-Bernoulli en 2D:
% 4 GDL: v1, theta1, v2, theta2
%
% K = (EI/L^3) * [ 12,   6L,  -12,   6L;
%                   6L,  4L2, -6L,  2L2;
%                  -12, -6L,   12,  -6L;
%                   6L,  2L2, -6L,  4L2]

% Propiedades
E = 29000         % ksi
I = 500           % in4
L = 180           % in (15 pies)

% Coeficientes
EI = E * I
c = EI / L^3

% Terminos escalares de la matriz K
L2 = L * L
k11 = 12 * c
k12 = 6 * c * L
k13 = -12 * c
k14 = 6 * c * L
k22 = 4 * c * L2
k23 = -6 * c * L
k24 = 2 * c * L2
k33 = 12 * c
k34 = -6 * c * L
k44 = 4 * c * L2

% Matriz de rigidez 4x4 (display)
K = [k11, k12, k13, k14; k12, k22, k23, k24; k13, k23, k33, k34; k14, k24, k34, k44]
K

% --- Cantilever con carga puntual ---
% Extremo izq empotrado (v1=0, theta1=0)
% Carga vertical en extremo derecho
P = -10           % kip (hacia abajo)

% GDL libres: v2, theta2
% Kff es la submatriz 2x2 inferior derecha
Kff = [k33, k34; k34, k44]
Kff

Ff = [P; 0]

% Resolver con lsolve
uf = lsolve(Kff, Ff)
uf

% Solucion analitica: v = PL^3/(3EI)
v_exacto = P * L^3 / (3 * EI)
v_exacto

% El FEM con 1 elemento da resultado exacto
% para carga puntual en cantilever`,

      en: `% =========================================
% TUTORIAL 4: Beam Stiffness Matrix
% =========================================

% Euler-Bernoulli beam in 2D:
% 4 DOFs: v1, theta1, v2, theta2
%
% K = (EI/L^3) * [ 12,   6L,  -12,   6L;
%                   6L,  4L2, -6L,  2L2;
%                  -12, -6L,   12,  -6L;
%                   6L,  2L2, -6L,  4L2]

% Properties
E = 29000         % ksi
I = 500           % in4
L = 180           % in (15 feet)

% Coefficients
EI = E * I
c = EI / L^3

% Scalar terms of K matrix
L2 = L * L
k11 = 12 * c
k12 = 6 * c * L
k13 = -12 * c
k14 = 6 * c * L
k22 = 4 * c * L2
k23 = -6 * c * L
k24 = 2 * c * L2
k33 = 12 * c
k34 = -6 * c * L
k44 = 4 * c * L2

% 4x4 stiffness matrix (display)
K = [k11, k12, k13, k14; k12, k22, k23, k24; k13, k23, k33, k34; k14, k24, k34, k44]
K

% --- Cantilever with point load ---
% Left end fixed (v1=0, theta1=0)
% Vertical load at right end
P = -10           % kip (downward)

% Free DOFs: v2, theta2
% Kff is the lower-right 2x2 submatrix
Kff = [k33, k34; k34, k44]
Kff

Ff = [P; 0]

% Solve with lsolve
uf = lsolve(Kff, Ff)
uf

% Analytical solution: v = PL^3/(3EI)
v_exact = P * L^3 / (3 * EI)
v_exact

% FEM with 1 element gives exact result
% for point load on cantilever`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 5. Global Assembly
  // ═══════════════════════════════════════════════════════
  {
    id: "assembly",
    title: {
      es: "Ensamblaje Global",
      en: "Global Assembly",
    },
    desc: {
      es: "Ensamblaje de 3 barras en un truss, mapeo de GDL local a global.",
      en: "Assembly of 3 bars in a truss, local-to-global DOF mapping.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 5: Ensamblaje Global
% =========================================

% El ensamblaje suma las contribuciones de
% cada elemento en la matriz global K.
%
%   K_global(dof_i, dof_j) += K_local(i,j)

% --- Ejemplo: 3 barras en serie ---
%
%  |--[1]--o--[2]--o--[3]--|
%  1       2       3       4
% fijo                    fijo
%
% Nodo 1 fijo, Nodo 4 fijo
% Carga en nodo 2 y nodo 3

% Propiedades (iguales para las 3 barras)
E = 200000        % MPa
A = 100           % mm2
L = 500           % mm
k = E * A / L
k

% Matriz local de cada barra: [k, -k; -k, k]
% Elementos: ke11=k, ke12=-k, ke21=-k, ke22=k
Ke = [k, -k; -k, k]
Ke

% Ensamblaje manual con escalares
% 4 nodos = 4 GDL
% Primero, inicializar todos los terminos

% Elem 1 (nodos 1-2): agrega a GDL 1,2
% Elem 2 (nodos 2-3): agrega a GDL 2,3
% Elem 3 (nodos 3-4): agrega a GDL 3,4

% K11 = k (solo elem 1)
K11 = k
% K12 = -k (solo elem 1)
K12 = -k
% K22 = k + k (elem 1 + elem 2)
K22 = k + k
% K23 = -k (solo elem 2)
K23 = -k
% K33 = k + k (elem 2 + elem 3)
K33 = k + k
% K34 = -k (solo elem 3)
K34 = -k
% K44 = k (solo elem 3)
K44 = k

% Matriz global ensamblada (display)
K = [K11, K12, 0, 0; K12, K22, K23, 0; 0, K23, K33, K34; 0, 0, K34, K44]
K

% Fuerzas aplicadas
F2 = 1000         % N en nodo 2
F3 = -500         % N en nodo 3

% GDL libres: 2, 3 (nodos 1 y 4 fijos)
% Kff (2x2 submatriz de GDL libres)
Kff = [K22, K23; K23, K33]

Ff = [F2; F3]

% Resolver
uf = lsolve(Kff, Ff)
uf

% Reacciones
% R1 = K12*u2 + 0*u3 = -k*u2
% R4 = 0*u2 + K34*u3 = -k*u3
% Usamos lsolve: uf es [u2; u3]
% Calculamos manualmente con los coefs
% u2 = primer componente, u3 = segundo
% Para obtener u2, u3 resolvemos el sistema 2x2:
% K22*u2 + K23*u3 = F2
% K23*u2 + K33*u3 = F3

% Solucion analitica 2x2 (Cramer)
det_Kff = K22*K33 - K23*K23
u2 = (F2*K33 - F3*K23) / det_Kff
u3 = (K22*F3 - K23*F2) / det_Kff
u2
u3

R1 = K12 * u2
R4 = K34 * u3
R1
R4

% Verificar equilibrio
total = R1 + F2 + F3 + R4
total`,

      en: `% =========================================
% TUTORIAL 5: Global Assembly
% =========================================

% Assembly sums element contributions
% into the global stiffness matrix K.
%
%   K_global(dof_i, dof_j) += K_local(i,j)

% --- Example: 3 bars in series ---
%
%  |--[1]--o--[2]--o--[3]--|
%  1       2       3       4
% fixed                   fixed
%
% Node 1 fixed, Node 4 fixed
% Loads at node 2 and node 3

% Properties (same for all 3 bars)
E = 200000        % MPa
A = 100           % mm2
L = 500           % mm
k = E * A / L
k

% Local matrix for each bar: [k, -k; -k, k]
% Elements: ke11=k, ke12=-k, ke21=-k, ke22=k
Ke = [k, -k; -k, k]
Ke

% Manual assembly with scalars
% 4 nodes = 4 DOFs
% First, initialize all terms

% Elem 1 (nodes 1-2): adds to DOFs 1,2
% Elem 2 (nodes 2-3): adds to DOFs 2,3
% Elem 3 (nodes 3-4): adds to DOFs 3,4

% K11 = k (only elem 1)
K11 = k
% K12 = -k (only elem 1)
K12 = -k
% K22 = k + k (elem 1 + elem 2)
K22 = k + k
% K23 = -k (only elem 2)
K23 = -k
% K33 = k + k (elem 2 + elem 3)
K33 = k + k
% K34 = -k (only elem 3)
K34 = -k
% K44 = k (only elem 3)
K44 = k

% Assembled global matrix (display)
K = [K11, K12, 0, 0; K12, K22, K23, 0; 0, K23, K33, K34; 0, 0, K34, K44]
K

% Applied forces
F2 = 1000         % N at node 2
F3 = -500         % N at node 3

% Free DOFs: 2, 3 (nodes 1 and 4 fixed)
% Kff (2x2 submatrix of free DOFs)
Kff = [K22, K23; K23, K33]

Ff = [F2; F3]

% Solve
uf = lsolve(Kff, Ff)
uf

% Reactions
% R1 = K12*u2, R4 = K34*u3
% Solve 2x2 analytically (Cramer's rule)
det_Kff = K22*K33 - K23*K23
u2 = (F2*K33 - F3*K23) / det_Kff
u3 = (K22*F3 - K23*F2) / det_Kff
u2
u3

R1 = K12 * u2
R4 = K34 * u3
R1
R4

% Verify equilibrium
total = R1 + F2 + F3 + R4
total`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 6. Boundary Conditions
  // ═══════════════════════════════════════════════════════
  {
    id: "boundary_conditions",
    title: {
      es: "Condiciones de Contorno",
      en: "Boundary Conditions",
    },
    desc: {
      es: "Metodo de particion Kff*uf=Ff y metodo de penalidad.",
      en: "Partition method Kff*uf=Ff and penalty method.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 6: Condiciones de Contorno
% =========================================

% Dos metodos principales para aplicar BCs:
% 1) Particion (eliminar filas/columnas)
% 2) Penalidad (numero grande en diagonal)

% --- Sistema ejemplo: viga cantilever ---
% 4 GDL: v1, theta1, v2, theta2
E = 29000
I = 200
L = 144
c = E * I / L^3
L2 = L * L

% Construir terminos escalares de K
k11 = 12 * c
k12 = 6 * c * L
k13 = -12 * c
k14 = 6 * c * L
k22 = 4 * c * L2
k23 = -6 * c * L
k24 = 2 * c * L2
k33 = 12 * c
k34 = -6 * c * L
k44 = 4 * c * L2

% Matriz K completa (display)
K = [k11, k12, k13, k14; k12, k22, k23, k24; k13, k23, k33, k34; k14, k24, k34, k44]

P = -5
% Vector de fuerzas: [0; 0; P; 0]

% ========================================
% METODO 1: Particion
% ========================================
% Nodo 1 empotrado: v1=0, theta1=0
% GDL libres: 3, 4 (v2, theta2)
% Kff es la submatriz inferior derecha

Kff = [k33, k34; k34, k44]
Ff = [P; 0]

uf_part = lsolve(Kff, Ff)
uf_part

% Extraer v2 y theta2 de la solucion 2x2
% Resolver analitico para comparar
det_ff = k33*k44 - k34*k34
v2_part = (P*k44 - 0*k34) / det_ff
theta2_part = (k33*0 - k34*P) / det_ff
v2_part
theta2_part

% ========================================
% METODO 2: Penalidad
% ========================================
% Agregar numero muy grande en K(i,i)
% donde el GDL esta restringido

big = 1e15

% Modificar los terminos diagonales
kp11 = k11 + big
kp22 = k22 + big
% k33, k44 no cambian

% Armar Kp completa
Kp = [kp11, k12, k13, k14; k12, kp22, k23, k24; k13, k23, k33, k34; k14, k24, k34, k44]

Fp = [0; 0; P; 0]

up = lsolve(Kp, Fp)
up

% Solucion analitica del cantilever
v_exacto = P * L^3 / (3 * E * I)
v_exacto

% Ambos metodos dan resultados iguales
% La particion es exacta, la penalidad
% es aproximada pero muy precisa`,

      en: `% =========================================
% TUTORIAL 6: Boundary Conditions
% =========================================

% Two main methods to apply BCs:
% 1) Partition (eliminate rows/columns)
% 2) Penalty (large number on diagonal)

% --- Example system: cantilever beam ---
% 4 DOFs: v1, theta1, v2, theta2
E = 29000
I = 200
L = 144
c = E * I / L^3
L2 = L * L

% Build scalar terms of K
k11 = 12 * c
k12 = 6 * c * L
k13 = -12 * c
k14 = 6 * c * L
k22 = 4 * c * L2
k23 = -6 * c * L
k24 = 2 * c * L2
k33 = 12 * c
k34 = -6 * c * L
k44 = 4 * c * L2

% Full K matrix (display)
K = [k11, k12, k13, k14; k12, k22, k23, k24; k13, k23, k33, k34; k14, k24, k34, k44]

P = -5
% Force vector: [0; 0; P; 0]

% ========================================
% METHOD 1: Partition
% ========================================
% Node 1 fixed: v1=0, theta1=0
% Free DOFs: 3, 4 (v2, theta2)
% Kff is the lower-right submatrix

Kff = [k33, k34; k34, k44]
Ff = [P; 0]

uf_part = lsolve(Kff, Ff)
uf_part

% Extract v2, theta2 analytically
det_ff = k33*k44 - k34*k34
v2_part = (P*k44 - 0*k34) / det_ff
theta2_part = (k33*0 - k34*P) / det_ff
v2_part
theta2_part

% ========================================
% METHOD 2: Penalty
% ========================================
% Add very large number to K(i,i)
% where DOF is restrained

big = 1e15

% Modify diagonal terms
kp11 = k11 + big
kp22 = k22 + big
% k33, k44 unchanged

% Build Kp complete
Kp = [kp11, k12, k13, k14; k12, kp22, k23, k24; k13, k23, k33, k34; k14, k24, k34, k44]

Fp = [0; 0; P; 0]

up = lsolve(Kp, Fp)
up

% Analytical cantilever solution
v_exact = P * L^3 / (3 * E * I)
v_exact

% Both methods give equal results
% Partition is exact, penalty is
% approximate but very accurate`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 7. 3D Beam Element
  // ═══════════════════════════════════════════════════════
  {
    id: "beam_3d",
    title: {
      es: "Elemento Viga 3D",
      en: "3D Beam Element",
    },
    desc: {
      es: "Viga 12 GDL, coeficientes de la K local, K_global = T'*K_local*T.",
      en: "12 DOF beam, local K coefficients, K_global = T'*K_local*T.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 7: Elemento Viga 3D
% =========================================

% Un elemento viga 3D tiene 12 GDL:
%   Nodo i: ux, uy, uz, rx, ry, rz
%   Nodo j: ux, uy, uz, rx, ry, rz
%
% K_local se define en ejes locales
% K_global = T' * K_local * T

% Propiedades (acero, perfil W)
E = 29000         % ksi
G = 11200         % ksi
A = 43.0          % in2  (W24x146)
Iz = 4580         % in4  (eje fuerte)
Iy = 391          % in4  (eje debil)
J = 17.7          % in4  (torsion)
L = 180           % in   (15 pies)

% Coeficientes de rigidez (todos escalares)
a1 = E*A/L
a2 = 12*E*Iz/L^3
a3 = 6*E*Iz/L^2
a4 = 4*E*Iz/L
a5 = 2*E*Iz/L
a6 = 12*E*Iy/L^3
a7 = 6*E*Iy/L^2
a8 = 4*E*Iy/L
a9 = 2*E*Iy/L
a10 = G*J/L

% Mostrar coeficientes principales
a1
a2
a6
a10

% La matriz local 12x12 tiene esta estructura:
%
%   Axial:    a1 en (1,1),(7,7), -a1 en (1,7),(7,1)
%   Flex-z:   a2,a3,a4,a5 en (2,6,8,12)
%   Flex-y:   a6,a7,a8,a9 en (3,5,9,11)
%   Torsion:  a10 en (4,4),(10,10), -a10 en (4,10)

% Rigidez axial
axial = a1
axial

% Rigidez flexional eje fuerte
flex_z = a2
flex_z

% Rigidez flexional eje debil
flex_y = a6
flex_y

% Rigidez torsional
torsion = a10
torsion

% --- Transformacion 3D ---
% T es la matriz de rotacion 12x12
% que rota ejes locales a globales.
% K_global = T' * K_local * T
%
% Para viga horizontal en X:
% ejes locales = ejes globales → T = I
% Para viga inclinada: se usan cosenos
% directores para construir T.

% Ratios entre rigideces
ratio_flex = flex_z / flex_y
ratio_flex

% Iz/Iy para secciones W tipicas ~ 10
% Esto explica por que las columnas son
% mas debiles en el eje debil

% Verificar que G = E/(2*(1+nu))
nu = E / (2*G) - 1
nu`,

      en: `% =========================================
% TUTORIAL 7: 3D Beam Element
% =========================================

% A 3D beam element has 12 DOFs:
%   Node i: ux, uy, uz, rx, ry, rz
%   Node j: ux, uy, uz, rx, ry, rz
%
% K_local is defined in local axes
% K_global = T' * K_local * T

% Properties (steel, W section)
E = 29000         % ksi
G = 11200         % ksi
A = 43.0          % in2  (W24x146)
Iz = 4580         % in4  (strong axis)
Iy = 391          % in4  (weak axis)
J = 17.7          % in4  (torsion)
L = 180           % in   (15 feet)

% Stiffness coefficients (all scalars)
a1 = E*A/L
a2 = 12*E*Iz/L^3
a3 = 6*E*Iz/L^2
a4 = 4*E*Iz/L
a5 = 2*E*Iz/L
a6 = 12*E*Iy/L^3
a7 = 6*E*Iy/L^2
a8 = 4*E*Iy/L
a9 = 2*E*Iy/L
a10 = G*J/L

% Show main coefficients
a1
a2
a6
a10

% The 12x12 local matrix has this structure:
%
%   Axial:   a1 at (1,1),(7,7), -a1 at (1,7),(7,1)
%   Flex-z:  a2,a3,a4,a5 at (2,6,8,12)
%   Flex-y:  a6,a7,a8,a9 at (3,5,9,11)
%   Torsion: a10 at (4,4),(10,10), -a10 at (4,10)

% Axial stiffness
axial = a1
axial

% Strong axis flexural stiffness
flex_z = a2
flex_z

% Weak axis flexural stiffness
flex_y = a6
flex_y

% Torsional stiffness
torsion = a10
torsion

% --- 3D Transformation ---
% T is the 12x12 rotation matrix
% that rotates local to global axes.
% K_global = T' * K_local * T
%
% For horizontal beam along X:
% local axes = global axes -> T = I
% For inclined beams: direction cosines
% are used to build T.

% Stiffness ratios
ratio_flex = flex_z / flex_y
ratio_flex

% Iz/Iy for typical W sections ~ 10
% This explains why columns are weaker
% about their weak axis

% Verify that G = E/(2*(1+nu))
nu = E / (2*G) - 1
nu`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 8. Shell Q4 Element
  // ═══════════════════════════════════════════════════════
  {
    id: "shell_q4",
    title: {
      es: "Elemento Shell Q4",
      en: "Shell Q4 Element",
    },
    desc: {
      es: "Funciones de forma bilineales, rigidez de membrana, integracion de Gauss 2x2.",
      en: "Bilinear shape functions, membrane stiffness, 2x2 Gauss integration.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 8: Elemento Shell Q4
% =========================================

% Cuadrilatero de 4 nodos (Q4):
% Funciones de forma bilineales en xi, eta
% N_i = (1+xi_i*xi)(1+eta_i*eta)/4

% --- Funciones de forma en un punto ---
xi = 0.5
eta = 0.3

N1 = (1-xi)*(1-eta)/4
N2 = (1+xi)*(1-eta)/4
N3 = (1+xi)*(1+eta)/4
N4 = (1-xi)*(1+eta)/4

N1
N2
N3
N4

% Verificar particion de la unidad
N_sum = N1 + N2 + N3 + N4
N_sum

% --- Derivadas de funciones de forma ---
% dN/dxi
dN1_dxi = -(1-eta)/4
dN2_dxi = (1-eta)/4
dN3_dxi = (1+eta)/4
dN4_dxi = -(1+eta)/4

% dN/deta
dN1_deta = -(1-xi)/4
dN2_deta = -(1+xi)/4
dN3_deta = (1+xi)/4
dN4_deta = (1-xi)/4

% --- Rigidez de membrana (plane stress) ---
E = 30000         % ksi
nu = 0.3
t = 0.5           % in (espesor)

% Matriz constitutiva D (plane stress)
c1 = E / (1 - nu^2)
D = c1 * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2]
D

% --- Integracion de Gauss 2x2 ---
% Puntos y pesos
gp = 1/sqrt(3)
pts = [-gp, -gp; gp, -gp; gp, gp; -gp, gp]
w = [1, 1, 1, 1]

% Elemento cuadrado 2x2 (simple)
a = 1.0           % medio-ancho
% Para este caso, det(J) = a^2 = 1

detJ = a * a
detJ

% Rigidez de membrana = sum(B'*D*B*t*detJ*w)
% Para Q4 cuadrado unitario, K es 8x8
% (simplificado aqui con un punto de Gauss)

% B matrix en el centro (xi=0, eta=0)
B_center = (1/(2*a)) * [-1, 0, 1, 0, 1, 0, -1, 0; 0, -1, 0, -1, 0, 1, 0, 1; -1, -1, -1, 1, 1, 1, 1, -1]

% Contribucion de rigidez (1 punto)
K_1pt = transpose(B_center) * D * B_center * t * detJ * 4
K_1pt

% Tamano de la matriz
K_size = size(K_1pt)
K_size`,

      en: `% =========================================
% TUTORIAL 8: Shell Q4 Element
% =========================================

% 4-node quadrilateral (Q4):
% Bilinear shape functions in xi, eta
% N_i = (1+xi_i*xi)(1+eta_i*eta)/4

% --- Shape functions at a point ---
xi = 0.5
eta = 0.3

N1 = (1-xi)*(1-eta)/4
N2 = (1+xi)*(1-eta)/4
N3 = (1+xi)*(1+eta)/4
N4 = (1-xi)*(1+eta)/4

N1
N2
N3
N4

% Verify partition of unity
N_sum = N1 + N2 + N3 + N4
N_sum

% --- Shape function derivatives ---
% dN/dxi
dN1_dxi = -(1-eta)/4
dN2_dxi = (1-eta)/4
dN3_dxi = (1+eta)/4
dN4_dxi = -(1+eta)/4

% dN/deta
dN1_deta = -(1-xi)/4
dN2_deta = -(1+xi)/4
dN3_deta = (1+xi)/4
dN4_deta = (1-xi)/4

% --- Membrane stiffness (plane stress) ---
E = 30000         % ksi
nu = 0.3
t = 0.5           % in (thickness)

% Constitutive matrix D (plane stress)
c1 = E / (1 - nu^2)
D = c1 * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2]
D

% --- 2x2 Gauss integration ---
% Points and weights
gp = 1/sqrt(3)
pts = [-gp, -gp; gp, -gp; gp, gp; -gp, gp]
w = [1, 1, 1, 1]

% Square element 2x2 (simple)
a = 1.0           % half-width
% For this case, det(J) = a^2 = 1

detJ = a * a
detJ

% Membrane stiffness = sum(B'*D*B*t*detJ*w)
% For unit square Q4, K is 8x8
% (simplified here with one Gauss point)

% B matrix at center (xi=0, eta=0)
B_center = (1/(2*a)) * [-1, 0, 1, 0, 1, 0, -1, 0; 0, -1, 0, -1, 0, 1, 0, 1; -1, -1, -1, 1, 1, 1, 1, -1]

% Stiffness contribution (1 point)
K_1pt = transpose(B_center) * D * B_center * t * detJ * 4
K_1pt

% Matrix size
K_size = size(K_1pt)
K_size`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 9. Static Analysis Complete
  // ═══════════════════════════════════════════════════════
  {
    id: "static_analysis",
    title: {
      es: "Analisis Estatico Completo",
      en: "Static Analysis Complete",
    },
    desc: {
      es: "Flujo completo: nodos, elementos, K, BC, resolver, fuerzas internas.",
      en: "Full workflow: nodes, elements, K, BC, solve, internal forces.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 9: Analisis Estatico Completo
% =========================================

% Portico plano 2D simplificado:
% Una columna vertical con carga lateral
%
%     2 (libre)
%     |
%     | H
%     |
%     1 (empotrado)
%
% Carga lateral P en nodo 2

% Propiedades
E = 29000         % ksi
A = 20            % in2
I = 800           % in4
H = 144           % in (12 pies)

% 3 GDL por nodo: u, v, theta
% Nodo 1 empotrado (3 GDL fijos)
% Nodo 2 libre (3 GDL)

% --- Columna vertical ---
% Eje local x = global y (90 grados)
% GDL locales: axial, flexion, rotacion
L = H
c1 = E*A/L       % axial
c2 = 12*E*I/L^3  % cortante
c3 = 6*E*I/L^2   % acoplamiento
c4 = 4*E*I/L     % rotacion
c5 = 2*E*I/L     % rotacion cruzada

% Para columna vertical (rotada 90 grados):
% u_global = v_local, v_global = -u_local
% Kff (3x3 del nodo libre, nodo 2):
% GDL: u2, v2, theta2
%
% Kff = [c2,   0,  -c3;
%         0,  c1,   0;
%        -c3,  0,  c4]

Kff_11 = c2    % rigidez lateral
Kff_12 = 0
Kff_13 = -c3
Kff_22 = c1    % rigidez axial
Kff_23 = 0
Kff_33 = c4    % rigidez rotacional

Kff = [Kff_11, Kff_12, Kff_13; Kff_12, Kff_22, Kff_23; Kff_13, Kff_23, Kff_33]
Kff

% Cargas en nodo 2
P_lateral = 10    % kip (fuerza lateral)
P_axial = 0       % sin carga axial
M_ext = 0         % sin momento externo

Ff = [P_lateral; P_axial; M_ext]

% Resolver
uf = lsolve(Kff, Ff)
uf

% Desplazamiento lateral (drift)
% u2 es el primer componente
% Solucion analitica del cantilever:
drift_exacto = P_lateral * H^3 / (3*E*I)
drift_exacto

% Drift ratio
drift_ratio = drift_exacto / H
drift_ratio

% --- Ahora portico completo ---
% Agregar una viga arriba (nodos 2-3)
%     2 -------- 3
%     |          |
%     1          4
%  (emp)      (emp)

% Rigidez lateral de dos columnas
% empotradas-empotradas: k = 12EI/H^3
k_col = 12 * E * I / H^3
K_lateral = 2 * k_col
K_lateral

% Drift del portico con viga rigida
drift_portico = P_lateral / K_lateral
drift_portico

% Rigidez del portico vs cantilever
ratio_rig = K_lateral / c2
ratio_rig

% El portico es mucho mas rigido que
% la columna sola (factor ~4)`,

      en: `% =========================================
% TUTORIAL 9: Static Analysis Complete
% =========================================

% Simplified 2D portal frame:
% Single vertical column with lateral load
%
%     2 (free)
%     |
%     | H
%     |
%     1 (fixed)
%
% Lateral load P at node 2

% Properties
E = 29000         % ksi
A = 20            % in2
I = 800           % in4
H = 144           % in (12 feet)

% 3 DOFs per node: u, v, theta
% Node 1 fixed (3 DOFs restrained)
% Node 2 free (3 DOFs)

% --- Vertical column ---
% Local x = global y (90 degrees)
% Local DOFs: axial, flexure, rotation
L = H
c1 = E*A/L       % axial
c2 = 12*E*I/L^3  % shear
c3 = 6*E*I/L^2   % coupling
c4 = 4*E*I/L     % rotation
c5 = 2*E*I/L     % cross-rotation

% For vertical column (rotated 90 degrees):
% u_global = v_local, v_global = -u_local
% Kff (3x3 of free node, node 2):
% DOFs: u2, v2, theta2
%
% Kff = [c2,   0,  -c3;
%         0,  c1,   0;
%        -c3,  0,  c4]

Kff_11 = c2    % lateral stiffness
Kff_12 = 0
Kff_13 = -c3
Kff_22 = c1    % axial stiffness
Kff_23 = 0
Kff_33 = c4    % rotational stiffness

Kff = [Kff_11, Kff_12, Kff_13; Kff_12, Kff_22, Kff_23; Kff_13, Kff_23, Kff_33]
Kff

% Loads at node 2
P_lateral = 10    % kip (lateral force)
P_axial = 0       % no axial load
M_ext = 0         % no external moment

Ff = [P_lateral; P_axial; M_ext]

% Solve
uf = lsolve(Kff, Ff)
uf

% Lateral displacement (drift)
% u2 is the first component
% Analytical cantilever solution:
drift_exact = P_lateral * H^3 / (3*E*I)
drift_exact

% Drift ratio
drift_ratio = drift_exact / H
drift_ratio

% --- Now complete portal frame ---
% Add beam on top (nodes 2-3)
%     2 -------- 3
%     |          |
%     1          4
%  (fix)      (fix)

% Lateral stiffness of two columns
% fixed-fixed: k = 12EI/H^3
k_col = 12 * E * I / H^3
K_lateral = 2 * k_col
K_lateral

% Frame drift with rigid beam
drift_frame = P_lateral / K_lateral
drift_frame

% Frame vs cantilever stiffness
ratio_stiff = K_lateral / c2
ratio_stiff

% The frame is much stiffer than a
% single column (factor ~4)`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 10. Modal Analysis
  // ═══════════════════════════════════════════════════════
  {
    id: "modal_analysis",
    title: {
      es: "Analisis Modal",
      en: "Modal Analysis",
    },
    desc: {
      es: "Problema de eigenvalores K*phi=w2*M*phi, masas consistente y concentrada.",
      en: "Eigenvalue problem K*phi=w2*M*phi, consistent and lumped mass.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 10: Analisis Modal
% =========================================

% El analisis modal resuelve:
%   K * phi = omega^2 * M * phi
%
% donde:
%   K = matriz de rigidez
%   M = matriz de masa
%   omega = frecuencia angular (rad/s)
%   phi = modo de vibracion

% --- Sistema de 2 GDL (2 pisos) ---
%
%   m2 ---[k2]--- m1 ---[k1]--- |fijo|
%
% Propiedades
m1 = 1.0          % masa piso 1 (kip*s2/in)
m2 = 1.0          % masa piso 2
k1 = 200          % rigidez piso 1 (kip/in)
k2 = 100          % rigidez piso 2

% Matriz de rigidez (escalares)
K11 = k1 + k2
K12 = -k2
K22 = k2

% Mostrar K
K = [K11, K12; K12, K22]
K

% --- Masa concentrada (lumped) ---
M = [m1, 0; 0, m2]
M

% --- Resolver eigenvalores ---
% K*phi = lambda*M*phi
% lambda = omega^2
%
% Con M diagonal: A = M^-1 * K
% a11 = K11/m1, a12 = K12/m1
% a21 = K12/m2, a22 = K22/m2

a11 = K11 / m1
a12 = K12 / m1
a21 = K12 / m2
a22 = K22 / m2

% Para 2x2: eigenvalores por formula directa
% lambda = tr/2 +/- sqrt((tr/2)^2 - det)
tr_A = a11 + a22
det_A = a11 * a22 - a12 * a21

lambda1 = tr_A/2 - sqrt((tr_A/2)^2 - det_A)
lambda2 = tr_A/2 + sqrt((tr_A/2)^2 - det_A)
lambda1
lambda2

% Las frecuencias naturales
omega1 = sqrt(lambda1)
omega2 = sqrt(lambda2)

% Frecuencias en Hz
f1 = omega1 / (2 * pi)
f2 = omega2 / (2 * pi)
f1
f2

% Periodos
T1 = 1 / f1
T2 = 1 / f2
T1
T2

% --- Modos de vibracion ---
% phi1 = [1; (a11-lambda1)/(-a12)]
r1 = (a11 - lambda1) / (-a12)
r2 = (a11 - lambda2) / (-a12)

% Modo 1: ambos pisos en la misma direccion
r1

% Modo 2: pisos en direcciones opuestas
r2

% Verificacion: traza = suma de eigenvalores
suma_eig = lambda1 + lambda2
suma_eig
tr_A`,

      en: `% =========================================
% TUTORIAL 10: Modal Analysis
% =========================================

% Modal analysis solves:
%   K * phi = omega^2 * M * phi
%
% where:
%   K = stiffness matrix
%   M = mass matrix
%   omega = angular frequency (rad/s)
%   phi = mode shape

% --- 2-DOF system (2 stories) ---
%
%   m2 ---[k2]--- m1 ---[k1]--- |fixed|
%
% Properties
m1 = 1.0          % mass story 1 (kip*s2/in)
m2 = 1.0          % mass story 2
k1 = 200          % stiffness story 1 (kip/in)
k2 = 100          % stiffness story 2

% Stiffness matrix (scalars)
K11 = k1 + k2
K12 = -k2
K22 = k2

% Display K
K = [K11, K12; K12, K22]
K

% --- Lumped mass ---
M = [m1, 0; 0, m2]
M

% --- Solve eigenvalues ---
% K*phi = lambda*M*phi
% lambda = omega^2
%
% With diagonal M: A = M^-1 * K
% a11 = K11/m1, a12 = K12/m1
% a21 = K12/m2, a22 = K22/m2

a11 = K11 / m1
a12 = K12 / m1
a21 = K12 / m2
a22 = K22 / m2

% For 2x2: eigenvalues by direct formula
% lambda = tr/2 +/- sqrt((tr/2)^2 - det)
tr_A = a11 + a22
det_A = a11 * a22 - a12 * a21

lambda1 = tr_A/2 - sqrt((tr_A/2)^2 - det_A)
lambda2 = tr_A/2 + sqrt((tr_A/2)^2 - det_A)
lambda1
lambda2

% Natural frequencies
omega1 = sqrt(lambda1)
omega2 = sqrt(lambda2)

% Frequencies in Hz
f1 = omega1 / (2 * pi)
f2 = omega2 / (2 * pi)
f1
f2

% Periods
T1 = 1 / f1
T2 = 1 / f2
T1
T2

% --- Mode shapes ---
% phi1 = [1; (a11-lambda1)/(-a12)]
r1 = (a11 - lambda1) / (-a12)
r2 = (a11 - lambda2) / (-a12)

% Mode 1: both stories in same direction
r1

% Mode 2: stories in opposite directions
r2

% Verification: trace = sum of eigenvalues
sum_eig = lambda1 + lambda2
sum_eig
tr_A`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 11. Moment Releases
  // ═══════════════════════════════════════════════════════
  {
    id: "releases",
    title: {
      es: "Releases (Articulaciones)",
      en: "Moment Releases",
    },
    desc: {
      es: "Condensacion estatica para extremos articulados, efecto en rigidez.",
      en: "Static condensation for pinned ends, effect on stiffness.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 11: Releases (Articulaciones)
% =========================================

% Un "release" libera un GDL rotacional
% en un extremo del elemento.
%
% Se aplica condensacion estatica:
%   K_cond = Kff - Kfc * inv(Kcc) * Kcf
%
% donde c = GDL condensado (release)

% Viga Euler-Bernoulli 4x4
E_val = 29000
I_val = 500
L_val = 180

% Coeficiente de rigidez
coef = E_val * I_val / L_val^3

% Terminos de la matriz K
k11 = 12 * coef
k12 = 6 * coef * L_val
k22 = 4 * coef * L_val^2
k24 = 2 * coef * L_val^2

% Matriz completa (sin release)
K = [k11, k12, -k11, k12; k12, k22, -k12, k24; -k11, -k12, k11, -k12; k12, k24, -k12, k22]

% ========================================
% Release en nodo i (theta1 libre)
% GDL 2 = condensado
% ========================================
% Se aplica condensacion estatica
% K_cond = Kff - Kfc * Kcc^-1 * Kcf

% Rigidez 12EI/L^3 (sin release)
k_full = 12 * E_val * I_val / L_val^3
k_full

% Rigidez 3EI/L^3 (con release en un extremo)
k_released = 3 * E_val * I_val / L_val^3
k_released

% Reduccion de rigidez
ratio = k_released / k_full
ratio

% Porcentaje de reduccion
reduccion = (1 - ratio) * 100
reduccion

% El release reduce la rigidez un 75%
% 3EI/L^3 = 0.25 * 12EI/L^3
%
% Fisicamente: un extremo articulado
% permite rotacion libre, reduciendo
% la restriccion del elemento`,

      en: `% =========================================
% TUTORIAL 11: Moment Releases
% =========================================

% A "release" frees a rotational DOF
% at one end of the element.
%
% Static condensation is applied:
%   K_cond = Kff - Kfc * Kcc^-1 * Kcf

% Euler-Bernoulli beam 4x4
E_val = 29000
I_val = 500
L_val = 180

% Stiffness coefficient
coef = E_val * I_val / L_val^3

% K matrix terms
k11 = 12 * coef
k12 = 6 * coef * L_val
k22 = 4 * coef * L_val^2
k24 = 2 * coef * L_val^2

% Full stiffness matrix (no release)
K = [k11, k12, -k11, k12; k12, k22, -k12, k24; -k11, -k12, k11, -k12; k12, k24, -k12, k22]

% ========================================
% Release at node i (theta1 free)
% ========================================
% Stiffness 12EI/L^3 (no release)
k_full = 12 * E_val * I_val / L_val^3
k_full

% Stiffness 3EI/L^3 (release at one end)
k_released = 3 * E_val * I_val / L_val^3
k_released

% Stiffness ratio
ratio = k_released / k_full
ratio

% Percent reduction
reduction = (1 - ratio) * 100
reduction

% Release reduces stiffness by 75%
% 3EI/L^3 = 0.25 * 12EI/L^3
%
% Physically: a pinned end allows
% free rotation, reducing the
% element's constraint`,
    },
  },

  // ═══════════════════════════════════════════════════════
  // 12. Property Modifiers
  // ═══════════════════════════════════════════════════════
  {
    id: "property_modifiers",
    title: {
      es: "Modificadores de Propiedades",
      en: "Property Modifiers",
    },
    desc: {
      es: "Inercia agrietada Icr, factores ACI, efecto en drift.",
      en: "Cracked inertia Icr, ACI factors, effect on drift.",
    },
    code: {
      es: `% =========================================
% TUTORIAL 12: Modificadores de Propiedades
% =========================================

% En concreto reforzado, las secciones
% agrietadas tienen menor rigidez.
% ACI 318 recomienda factores de reduccion.

% Factores ACI 318 (Tabla 6.6.3.1.1a):
%   Columnas: 0.70 * Ig
%   Vigas:    0.35 * Ig
%   Muros (sin fisurar): 0.70 * Ig
%   Muros (fisurados):   0.35 * Ig
%   Losas:    0.25 * Ig

% --- Seccion de columna ---
b_col = 24        % in (ancho)
h_col = 24        % in (alto)
Ig_col = b_col * h_col^3 / 12
Ig_col

% Inercia agrietada (ACI)
factor_col = 0.70
Icr_col = factor_col * Ig_col
Icr_col

% --- Seccion de viga ---
b_viga = 14       % in
h_viga = 28       % in
Ig_viga = b_viga * h_viga^3 / 12
Ig_viga

factor_viga = 0.35
Icr_viga = factor_viga * Ig_viga
Icr_viga

% --- Efecto en la rigidez lateral ---
E = 4000          % ksi (concreto fc=5000 psi)
H = 144           % in (12 pies)
W = 240           % in (20 pies)

% Rigidez de columna (extremos fijos)
% k = 12*EI/H^3
k_col_bruto = 12 * E * Ig_col / H^3
k_col_agr = 12 * E * Icr_col / H^3

k_col_bruto
k_col_agr

% Reduccion de rigidez lateral
ratio_col = k_col_agr / k_col_bruto
ratio_col

% --- Portico simple: 2 columnas + 1 viga ---
% Rigidez lateral bruta (viga infinitamente rigida)
K_bruto = 2 * k_col_bruto
K_bruto

% Rigidez lateral agrietada
K_agr = 2 * k_col_agr
K_agr

% --- Drift bajo carga lateral ---
V = 50            % kip (cortante de piso)

drift_bruto = V / K_bruto
drift_agr = V / K_agr

drift_bruto
drift_agr

% Drift ratio
dr_bruto = drift_bruto / H
dr_agr = drift_agr / H
dr_bruto
dr_agr

% Aumento del drift por agrietamiento
aumento = (drift_agr / drift_bruto - 1) * 100
aumento

% El drift aumenta ~43% al usar Icr
% Esto afecta significativamente el
% diseno sismico y la estabilidad P-Delta`,

      en: `% =========================================
% TUTORIAL 12: Property Modifiers
% =========================================

% In reinforced concrete, cracked sections
% have reduced stiffness.
% ACI 318 recommends reduction factors.

% ACI 318 factors (Table 6.6.3.1.1a):
%   Columns: 0.70 * Ig
%   Beams:   0.35 * Ig
%   Walls (uncracked): 0.70 * Ig
%   Walls (cracked):   0.35 * Ig
%   Slabs:   0.25 * Ig

% --- Column section ---
b_col = 24        % in (width)
h_col = 24        % in (height)
Ig_col = b_col * h_col^3 / 12
Ig_col

% Cracked inertia (ACI)
factor_col = 0.70
Icr_col = factor_col * Ig_col
Icr_col

% --- Beam section ---
b_beam = 14       % in
h_beam = 28       % in
Ig_beam = b_beam * h_beam^3 / 12
Ig_beam

factor_beam = 0.35
Icr_beam = factor_beam * Ig_beam
Icr_beam

% --- Effect on lateral stiffness ---
E = 4000          % ksi (concrete fc=5000 psi)
H = 144           % in (12 feet)
W = 240           % in (20 feet)

% Column stiffness (fixed-fixed)
% k = 12*EI/H^3
k_col_gross = 12 * E * Ig_col / H^3
k_col_crack = 12 * E * Icr_col / H^3

k_col_gross
k_col_crack

% Lateral stiffness reduction
ratio_col = k_col_crack / k_col_gross
ratio_col

% --- Simple frame: 2 columns + 1 beam ---
% Gross lateral stiffness (rigid beam)
K_gross = 2 * k_col_gross
K_gross

% Cracked lateral stiffness
K_crack = 2 * k_col_crack
K_crack

% --- Drift under lateral load ---
V = 50            % kip (story shear)

drift_gross = V / K_gross
drift_crack = V / K_crack

drift_gross
drift_crack

% Drift ratio
dr_gross = drift_gross / H
dr_crack = drift_crack / H
dr_gross
dr_crack

% Drift increase from cracking
increase = (drift_crack / drift_gross - 1) * 100
increase

% Drift increases ~43% using Icr
% This significantly affects seismic
% design and P-Delta stability`,
    },
  },
];
