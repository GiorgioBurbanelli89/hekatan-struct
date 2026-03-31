const e = [{ id: "intro_fem", title: { es: "Introduccion al FEM", en: "Introduction to FEM" }, desc: { es: "Discretizacion, nodos, elementos, GDL. Barra 1D con 2 nodos.", en: "Discretization, nodes, elements, DOFs. 1D bar with 2 nodes." }, code: { es: `% =========================================
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
Kff = K(2,2)
Ff = F(2)

% Resolver: Kff * u2 = Ff
u2 = Ff / Kff

% Desplazamiento en nodo 2 (mm)
u2

% Fuerza de reaccion en nodo 1
R1 = K(1,1)*0 + K(1,2)*u2
R1

% Deformacion y esfuerzo
epsilon = u2 / L
sigma = E * epsilon
sigma`, en: `% =========================================
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
Kff = K(2,2)
Ff = F(2)

% Solve: Kff * u2 = Ff
u2 = Ff / Kff

% Displacement at node 2 (mm)
u2

% Reaction force at node 1
R1 = K(1,1)*0 + K(1,2)*u2
R1

% Strain and stress
epsilon = u2 / L
sigma = E * epsilon
sigma` } }, { id: "shape_functions", title: { es: "Funciones de Forma", en: "Shape Functions" }, desc: { es: "Funciones de forma lineales y Hermite para vigas.", en: "Linear and Hermite shape functions for beams." }, code: { es: `% =========================================
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
H4`, en: `% =========================================
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
H4` } }, { id: "stiffness_bar", title: { es: "Matriz de Rigidez de Barra", en: "Bar Stiffness Matrix" }, desc: { es: "Derivacion de K = EA/L * [1,-1;-1,1] desde B'DB.", en: "Derive K = EA/L * [1,-1;-1,1] from B'DB." }, code: { es: `% =========================================
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
sigma`, en: `% =========================================
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
sigma` } }, { id: "stiffness_beam", title: { es: "Matriz de Rigidez de Viga", en: "Beam Stiffness Matrix" }, desc: { es: "Euler-Bernoulli 4x4 K para viga 2D con EI.", en: "Euler-Bernoulli 4x4 K for 2D beam with EI." }, code: { es: `% =========================================
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

% Matriz de rigidez 4x4
L2 = L * L
K = c * [12, 6*L, -12, 6*L; 6*L, 4*L2, -6*L, 2*L2; -12, -6*L, 12, -6*L; 6*L, 2*L2, -6*L, 4*L2]
K

% --- Cantilever con carga puntual ---
% Extremo izq empotrado (v1=0, theta1=0)
% Carga vertical en extremo derecho
P = -10           % kip (hacia abajo)

% GDL libres: v2, theta2
Kff = [K(3,3), K(3,4); K(4,3), K(4,4)]
Kff

Ff = [P; 0]

% Resolver
uf = Kff \\ Ff
uf

v2 = uf(1)
theta2 = uf(2)

% Solucion analitica: v = PL^3/(3EI)
v_exacto = P * L^3 / (3 * EI)
v_exacto

% Error porcentual
error_pct = abs((v2 - v_exacto) / v_exacto) * 100
error_pct`, en: `% =========================================
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

% 4x4 stiffness matrix
L2 = L * L
K = c * [12, 6*L, -12, 6*L; 6*L, 4*L2, -6*L, 2*L2; -12, -6*L, 12, -6*L; 6*L, 2*L2, -6*L, 4*L2]
K

% --- Cantilever with point load ---
% Left end fixed (v1=0, theta1=0)
% Vertical load at right end
P = -10           % kip (downward)

% Free DOFs: v2, theta2
Kff = [K(3,3), K(3,4); K(4,3), K(4,4)]
Kff

Ff = [P; 0]

% Solve
uf = Kff \\ Ff
uf

v2 = uf(1)
theta2 = uf(2)

% Analytical solution: v = PL^3/(3EI)
v_exact = P * L^3 / (3 * EI)
v_exact

% Percent error
error_pct = abs((v2 - v_exact) / v_exact) * 100
error_pct` } }, { id: "assembly", title: { es: "Ensamblaje Global", en: "Global Assembly" }, desc: { es: "Ensamblaje de 3 barras en un truss, mapeo de GDL local a global.", en: "Assembly of 3 bars in a truss, local-to-global DOF mapping." }, code: { es: `% =========================================
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

% Matriz local de cada barra
Ke = [k, -k; -k, k]
Ke

% Ensamblaje manual: 4 nodos = 4 GDL
K = zeros(4, 4)

% Elemento 1: nodos 1-2 (GDL 1,2)
K(1,1) = K(1,1) + Ke(1,1)
K(1,2) = K(1,2) + Ke(1,2)
K(2,1) = K(2,1) + Ke(2,1)
K(2,2) = K(2,2) + Ke(2,2)

% Elemento 2: nodos 2-3 (GDL 2,3)
K(2,2) = K(2,2) + Ke(1,1)
K(2,3) = K(2,3) + Ke(1,2)
K(3,2) = K(3,2) + Ke(2,1)
K(3,3) = K(3,3) + Ke(2,2)

% Elemento 3: nodos 3-4 (GDL 3,4)
K(3,3) = K(3,3) + Ke(1,1)
K(3,4) = K(3,4) + Ke(1,2)
K(4,3) = K(4,3) + Ke(2,1)
K(4,4) = K(4,4) + Ke(2,2)

% Matriz global ensamblada
K

% Verificar simetria
Kt = transpose(K)
dif = K - Kt
dif

% Fuerzas aplicadas
F = [0; 1000; -500; 0]

% GDL libres: 2, 3 (nodos 1 y 4 fijos)
Kff = [K(2,2), K(2,3); K(3,2), K(3,3)]
Ff = [F(2); F(3)]

% Resolver
uf = Kff \\ Ff
uf

% Reacciones
R1 = K(1,2)*uf(1)
R4 = K(4,3)*uf(2)
R1
R4

% Verificar equilibrio
total = R1 + F(2) + F(3) + R4
total`, en: `% =========================================
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

% Local matrix for each bar
Ke = [k, -k; -k, k]
Ke

% Manual assembly: 4 nodes = 4 DOFs
K = zeros(4, 4)

% Element 1: nodes 1-2 (DOFs 1,2)
K(1,1) = K(1,1) + Ke(1,1)
K(1,2) = K(1,2) + Ke(1,2)
K(2,1) = K(2,1) + Ke(2,1)
K(2,2) = K(2,2) + Ke(2,2)

% Element 2: nodes 2-3 (DOFs 2,3)
K(2,2) = K(2,2) + Ke(1,1)
K(2,3) = K(2,3) + Ke(1,2)
K(3,2) = K(3,2) + Ke(2,1)
K(3,3) = K(3,3) + Ke(2,2)

% Element 3: nodes 3-4 (DOFs 3,4)
K(3,3) = K(3,3) + Ke(1,1)
K(3,4) = K(3,4) + Ke(1,2)
K(4,3) = K(4,3) + Ke(2,1)
K(4,4) = K(4,4) + Ke(2,2)

% Assembled global matrix
K

% Verify symmetry
Kt = transpose(K)
dif = K - Kt
dif

% Applied forces
F = [0; 1000; -500; 0]

% Free DOFs: 2, 3 (nodes 1 and 4 fixed)
Kff = [K(2,2), K(2,3); K(3,2), K(3,3)]
Ff = [F(2); F(3)]

% Solve
uf = Kff \\ Ff
uf

% Reactions
R1 = K(1,2)*uf(1)
R4 = K(4,3)*uf(2)
R1
R4

% Verify equilibrium
total = R1 + F(2) + F(3) + R4
total` } }, { id: "boundary_conditions", title: { es: "Condiciones de Contorno", en: "Boundary Conditions" }, desc: { es: "Metodo de particion Kff*uf=Ff y metodo de penalidad.", en: "Partition method Kff*uf=Ff and penalty method." }, code: { es: `% =========================================
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

K = c * [12, 6*L, -12, 6*L; 6*L, 4*L2, -6*L, 2*L2; -12, -6*L, 12, -6*L; 6*L, 2*L2, -6*L, 4*L2]

P = -5
F = [0; 0; P; 0]

% ========================================
% METODO 1: Particion
% ========================================
% Nodo 1 empotrado: v1=0, theta1=0
% GDL libres: 3, 4 (v2, theta2)

Kff = [K(3,3), K(3,4); K(4,3), K(4,4)]
Ff = [F(3); F(4)]

uf_part = Kff \\ Ff
uf_part

% ========================================
% METODO 2: Penalidad
% ========================================
% Agregar numero muy grande en K(i,i)
% donde el GDL esta restringido

big = 1e15
Kp = K
Kp(1,1) = Kp(1,1) + big
Kp(2,2) = Kp(2,2) + big

up = Kp \\ F
up

% Los GDL restringidos son ~0
v1_pen = up(1)
v1_pen
theta1_pen = up(2)
theta1_pen

% Los GDL libres coinciden con particion
v2_pen = up(3)
v2_pen
v2_part = uf_part(1)
v2_part

% Comparar resultados
dif_v2 = abs(v2_pen - v2_part)
dif_v2`, en: `% =========================================
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

K = c * [12, 6*L, -12, 6*L; 6*L, 4*L2, -6*L, 2*L2; -12, -6*L, 12, -6*L; 6*L, 2*L2, -6*L, 4*L2]

P = -5
F = [0; 0; P; 0]

% ========================================
% METHOD 1: Partition
% ========================================
% Node 1 fixed: v1=0, theta1=0
% Free DOFs: 3, 4 (v2, theta2)

Kff = [K(3,3), K(3,4); K(4,3), K(4,4)]
Ff = [F(3); F(4)]

uf_part = Kff \\ Ff
uf_part

% ========================================
% METHOD 2: Penalty
% ========================================
% Add very large number to K(i,i)
% where DOF is restrained

big = 1e15
Kp = K
Kp(1,1) = Kp(1,1) + big
Kp(2,2) = Kp(2,2) + big

up = Kp \\ F
up

% Restrained DOFs are ~0
v1_pen = up(1)
v1_pen
theta1_pen = up(2)
theta1_pen

% Free DOFs match partition
v2_pen = up(3)
v2_pen
v2_part = uf_part(1)
v2_part

% Compare results
dif_v2 = abs(v2_pen - v2_part)
dif_v2` } }, { id: "beam_3d", title: { es: "Elemento Viga 3D", en: "3D Beam Element" }, desc: { es: "Viga 12 GDL, matriz de transformacion T, K_global = T'*K_local*T.", en: "12 DOF beam, transformation matrix T, K_global = T'*K_local*T." }, code: { es: `% =========================================
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

% Coeficientes
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

% Matriz local 12x12 (simetrica)
K = zeros(12,12)

% Axial (GDL 1, 7)
K(1,1) = a1
K(7,7) = a1
K(1,7) = -a1
K(7,1) = -a1

% Flexion eje z (GDL 2,6,8,12)
K(2,2) = a2
K(2,6) = a3
K(2,8) = -a2
K(2,12) = a3
K(6,6) = a4
K(6,8) = -a3
K(6,12) = a5
K(8,8) = a2
K(8,12) = -a3
K(12,12) = a4

% Flexion eje y (GDL 3,5,9,11)
K(3,3) = a6
K(3,5) = -a7
K(3,9) = -a6
K(3,11) = -a7
K(5,5) = a8
K(5,9) = a7
K(5,11) = a9
K(9,9) = a6
K(9,11) = a7
K(11,11) = a8

% Torsion (GDL 4, 10)
K(4,4) = a10
K(10,10) = a10
K(4,10) = -a10
K(10,4) = -a10

% Simetrizar
for i = 1:12
  for j = 1:12
    if j > i
      K(i,j) = K(i,j)
    end
    if i > j
      K(i,j) = K(j,i)
    end
  end
end

% Verificar simetria
check = K - transpose(K)
det_K = det(K)
det_K

% El determinante debe ser 0 (movimiento rigido)
K`, en: `% =========================================
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

% Coefficients
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

% Local 12x12 matrix (symmetric)
K = zeros(12,12)

% Axial (DOFs 1, 7)
K(1,1) = a1
K(7,7) = a1
K(1,7) = -a1
K(7,1) = -a1

% Bending z-axis (DOFs 2,6,8,12)
K(2,2) = a2
K(2,6) = a3
K(2,8) = -a2
K(2,12) = a3
K(6,6) = a4
K(6,8) = -a3
K(6,12) = a5
K(8,8) = a2
K(8,12) = -a3
K(12,12) = a4

% Bending y-axis (DOFs 3,5,9,11)
K(3,3) = a6
K(3,5) = -a7
K(3,9) = -a6
K(3,11) = -a7
K(5,5) = a8
K(5,9) = a7
K(5,11) = a9
K(9,9) = a6
K(9,11) = a7
K(11,11) = a8

% Torsion (DOFs 4, 10)
K(4,4) = a10
K(10,10) = a10
K(4,10) = -a10
K(10,4) = -a10

% Symmetrize
for i = 1:12
  for j = 1:12
    if j > i
      K(i,j) = K(i,j)
    end
    if i > j
      K(i,j) = K(j,i)
    end
  end
end

% Verify symmetry
check = K - transpose(K)
det_K = det(K)
det_K

% Determinant should be 0 (rigid body motion)
K` } }, { id: "shell_q4", title: { es: "Elemento Shell Q4", en: "Shell Q4 Element" }, desc: { es: "Funciones de forma bilineales, rigidez de membrana, integracion de Gauss 2x2.", en: "Bilinear shape functions, membrane stiffness, 2x2 Gauss integration." }, code: { es: `% =========================================
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
K_size`, en: `% =========================================
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
K_size` } }, { id: "static_analysis", title: { es: "Analisis Estatico Completo", en: "Static Analysis Complete" }, desc: { es: "Flujo completo: nodos, elementos, K, BC, resolver, fuerzas internas.", en: "Full workflow: nodes, elements, K, BC, solve, internal forces." }, code: { es: `% =========================================
% TUTORIAL 9: Analisis Estatico Completo
% =========================================

% Portico plano 2D (portal frame):
%
%     3 -------- 4
%     |          |
%     |          |
%     1          2
%   (fijo)     (fijo)
%
% Carga lateral: 10 kip en nodo 3

% Propiedades
E = 29000         % ksi
A = 20            % in2
I = 800           % in4

% Geometria
H = 144           % in (12 pies - columnas)
W = 240           % in (20 pies - viga)

% 3 GDL por nodo (u, v, theta)
% Total: 4 nodos x 3 = 12 GDL

% --- Matriz de rigidez de viga-columna 2D ---
% 6x6: u1, v1, t1, u2, v2, t2

% Columna (vertical, L=H)
L = H
c1 = E*A/L
c2 = 12*E*I/L^3
c3 = 6*E*I/L^2
c4 = 4*E*I/L
c5 = 2*E*I/L

% Para columna vertical: eje local x = global y
% Rotacion 90 grados:
% u_local = v_global, v_local = -u_global
Kc = [c2, 0, c3, -c2, 0, c3; 0, c1, 0, 0, -c1, 0; c3, 0, c4, -c3, 0, c5; -c2, 0, -c3, c2, 0, -c3; 0, -c1, 0, 0, c1, 0; c3, 0, c5, -c3, 0, c4]

% Viga (horizontal, L=W)
L = W
b1 = E*A/L
b2 = 12*E*I/L^3
b3 = 6*E*I/L^2
b4 = 4*E*I/L
b5 = 2*E*I/L

Kb = [b1, 0, 0, -b1, 0, 0; 0, b2, b3, 0, -b2, b3; 0, b3, b4, 0, -b3, b5; -b1, 0, 0, b1, 0, 0; 0, -b2, -b3, 0, b2, -b3; 0, b3, b5, 0, -b3, b4]

% --- Ensamblaje ---
K = zeros(12, 12)

% Columna 1: nodos 1-3 (GDL 1-3, 7-9)
K(1,1) = K(1,1) + Kc(1,1)
K(1,2) = K(1,2) + Kc(1,2)
K(1,3) = K(1,3) + Kc(1,3)
K(1,7) = K(1,7) + Kc(1,4)
K(1,8) = K(1,8) + Kc(1,5)
K(1,9) = K(1,9) + Kc(1,6)
K(2,2) = K(2,2) + Kc(2,2)
K(2,8) = K(2,8) + Kc(2,5)
K(3,3) = K(3,3) + Kc(3,3)
K(3,7) = K(3,7) + Kc(3,4)
K(3,9) = K(3,9) + Kc(3,6)
K(7,7) = K(7,7) + Kc(4,4)
K(7,9) = K(7,9) + Kc(4,6)
K(8,8) = K(8,8) + Kc(5,5)
K(9,9) = K(9,9) + Kc(6,6)

% Columna 2: nodos 2-4 (GDL 4-6, 10-12)
K(4,4) = K(4,4) + Kc(1,1)
K(4,10) = K(4,10) + Kc(1,4)
K(5,5) = K(5,5) + Kc(2,2)
K(5,11) = K(5,11) + Kc(2,5)
K(6,6) = K(6,6) + Kc(3,3)
K(6,10) = K(6,10) + Kc(3,4)
K(6,12) = K(6,12) + Kc(3,6)
K(10,10) = K(10,10) + Kc(4,4)
K(10,12) = K(10,12) + Kc(4,6)
K(11,11) = K(11,11) + Kc(5,5)
K(12,12) = K(12,12) + Kc(6,6)

% Viga: nodos 3-4 (GDL 7-9, 10-12)
for i = 1:6
  for j = 1:6
    K(i+6, j+6) = K(i+6, j+6) + Kb(i,j)
  end
end

% Simetrizar
for i = 1:12
  for j = 1:12
    if i > j
      K(i,j) = K(j,i)
    end
  end
end

% --- Cargas ---
F = zeros(12, 1)
F(7) = 10         % Fuerza lateral en nodo 3 (kip)

% --- Condiciones de contorno ---
% Nodos 1 y 2 empotrados (GDL 1-6 = 0)
% GDL libres: 7-12

Kff = zeros(6,6)
for i = 1:6
  for j = 1:6
    Kff(i,j) = K(i+6, j+6)
  end
end

Ff = [F(7); F(8); F(9); F(10); F(11); F(12)]

% --- Resolver ---
uf = Kff \\ Ff
uf

% Desplazamiento lateral del piso (drift)
drift = uf(1)
drift

% Drift ratio
drift_ratio = drift / H
drift_ratio`, en: `% =========================================
% TUTORIAL 9: Static Analysis Complete
% =========================================

% 2D portal frame:
%
%     3 -------- 4
%     |          |
%     |          |
%     1          2
%   (fixed)    (fixed)
%
% Lateral load: 10 kip at node 3

% Properties
E = 29000         % ksi
A = 20            % in2
I = 800           % in4

% Geometry
H = 144           % in (12 feet - columns)
W = 240           % in (20 feet - beam)

% 3 DOFs per node (u, v, theta)
% Total: 4 nodes x 3 = 12 DOFs

% --- 2D beam-column stiffness matrix ---
% 6x6: u1, v1, t1, u2, v2, t2

% Column (vertical, L=H)
L = H
c1 = E*A/L
c2 = 12*E*I/L^3
c3 = 6*E*I/L^2
c4 = 4*E*I/L
c5 = 2*E*I/L

% For vertical column: local x = global y
% 90 degree rotation:
Kc = [c2, 0, c3, -c2, 0, c3; 0, c1, 0, 0, -c1, 0; c3, 0, c4, -c3, 0, c5; -c2, 0, -c3, c2, 0, -c3; 0, -c1, 0, 0, c1, 0; c3, 0, c5, -c3, 0, c4]

% Beam (horizontal, L=W)
L = W
b1 = E*A/L
b2 = 12*E*I/L^3
b3 = 6*E*I/L^2
b4 = 4*E*I/L
b5 = 2*E*I/L

Kb = [b1, 0, 0, -b1, 0, 0; 0, b2, b3, 0, -b2, b3; 0, b3, b4, 0, -b3, b5; -b1, 0, 0, b1, 0, 0; 0, -b2, -b3, 0, b2, -b3; 0, b3, b5, 0, -b3, b4]

% --- Assembly ---
K = zeros(12, 12)

% Column 1: nodes 1-3 (DOFs 1-3, 7-9)
K(1,1) = K(1,1) + Kc(1,1)
K(1,2) = K(1,2) + Kc(1,2)
K(1,3) = K(1,3) + Kc(1,3)
K(1,7) = K(1,7) + Kc(1,4)
K(1,8) = K(1,8) + Kc(1,5)
K(1,9) = K(1,9) + Kc(1,6)
K(2,2) = K(2,2) + Kc(2,2)
K(2,8) = K(2,8) + Kc(2,5)
K(3,3) = K(3,3) + Kc(3,3)
K(3,7) = K(3,7) + Kc(3,4)
K(3,9) = K(3,9) + Kc(3,6)
K(7,7) = K(7,7) + Kc(4,4)
K(7,9) = K(7,9) + Kc(4,6)
K(8,8) = K(8,8) + Kc(5,5)
K(9,9) = K(9,9) + Kc(6,6)

% Column 2: nodes 2-4 (DOFs 4-6, 10-12)
K(4,4) = K(4,4) + Kc(1,1)
K(4,10) = K(4,10) + Kc(1,4)
K(5,5) = K(5,5) + Kc(2,2)
K(5,11) = K(5,11) + Kc(2,5)
K(6,6) = K(6,6) + Kc(3,3)
K(6,10) = K(6,10) + Kc(3,4)
K(6,12) = K(6,12) + Kc(3,6)
K(10,10) = K(10,10) + Kc(4,4)
K(10,12) = K(10,12) + Kc(4,6)
K(11,11) = K(11,11) + Kc(5,5)
K(12,12) = K(12,12) + Kc(6,6)

% Beam: nodes 3-4 (DOFs 7-9, 10-12)
for i = 1:6
  for j = 1:6
    K(i+6, j+6) = K(i+6, j+6) + Kb(i,j)
  end
end

% Symmetrize
for i = 1:12
  for j = 1:12
    if i > j
      K(i,j) = K(j,i)
    end
  end
end

% --- Loads ---
F = zeros(12, 1)
F(7) = 10         % Lateral force at node 3 (kip)

% --- Boundary conditions ---
% Nodes 1 and 2 fixed (DOFs 1-6 = 0)
% Free DOFs: 7-12

Kff = zeros(6,6)
for i = 1:6
  for j = 1:6
    Kff(i,j) = K(i+6, j+6)
  end
end

Ff = [F(7); F(8); F(9); F(10); F(11); F(12)]

% --- Solve ---
uf = Kff \\ Ff
uf

% Lateral floor displacement (drift)
drift = uf(1)
drift

% Drift ratio
drift_ratio = drift / H
drift_ratio` } }, { id: "modal_analysis", title: { es: "Analisis Modal", en: "Modal Analysis" }, desc: { es: "Problema de eigenvalores K*phi=w2*M*phi, masas consistente y concentrada.", en: "Eigenvalue problem K*phi=w2*M*phi, consistent and lumped mass." }, code: { es: `% =========================================
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

% Matriz de rigidez
K = [k1+k2, -k2; -k2, k2]
K

% --- Masa concentrada (lumped) ---
M_lumped = [m1, 0; 0, m2]
M_lumped

% --- Masa consistente ---
% Para barras: M = (m*L/6)*[2,1;1,2]
% Aqui usamos la concentrada por simplicidad

% --- Resolver eigenvalores ---
% K*phi = lambda*M*phi
% lambda = omega^2
% Para M=I: directamente eigs(K)

% Metodo: resolver det(K - lambda*M) = 0
% Con M diagonal, podemos usar M^(-1)*K
Minv = inv(M_lumped)
A = Minv * K
A

% Eigenvalores con eigs()
eig_result = eigs(A)
eig_result

% Las frecuencias naturales
% omega = sqrt(lambda)
lambda1 = eig_result(1)
lambda2 = eig_result(2)

omega1 = sqrt(abs(lambda1))
omega2 = sqrt(abs(lambda2))

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

% Verificacion: traza = suma de eigenvalores
traza_K = K(1,1) + K(2,2)
suma_eig = lambda1 + lambda2
traza_K
suma_eig`, en: `% =========================================
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

% Stiffness matrix
K = [k1+k2, -k2; -k2, k2]
K

% --- Lumped mass ---
M_lumped = [m1, 0; 0, m2]
M_lumped

% --- Consistent mass ---
% For bars: M = (m*L/6)*[2,1;1,2]
% Here we use lumped for simplicity

% --- Solve eigenvalues ---
% K*phi = lambda*M*phi
% lambda = omega^2
% For M=I: directly eigs(K)

% Method: solve det(K - lambda*M) = 0
% With diagonal M, we can use M^(-1)*K
Minv = inv(M_lumped)
A = Minv * K
A

% Eigenvalues with eigs()
eig_result = eigs(A)
eig_result

% Natural frequencies
% omega = sqrt(lambda)
lambda1 = eig_result(1)
lambda2 = eig_result(2)

omega1 = sqrt(abs(lambda1))
omega2 = sqrt(abs(lambda2))

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

% Verification: trace = sum of eigenvalues
trace_K = K(1,1) + K(2,2)
sum_eig = lambda1 + lambda2
trace_K
sum_eig` } }, { id: "releases", title: { es: "Releases (Articulaciones)", en: "Moment Releases" }, desc: { es: "Condensacion estatica para extremos articulados, efecto en rigidez.", en: "Static condensation for pinned ends, effect on stiffness." }, code: { es: `% =========================================
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
E = 29000
I = 500
L = 180

c = E * I / L^3
L2 = L * L

% Matriz completa (sin release)
K_full = c * [12, 6*L, -12, 6*L; 6*L, 4*L2, -6*L, 2*L2; -12, -6*L, 12, -6*L; 6*L, 2*L2, -6*L, 4*L2]
K_full

% ========================================
% Release en nodo i (theta1 libre)
% GDL 2 = condensado
% ========================================

% Particionar:
% f = [1, 3, 4] (libres)
% c = [2] (condensado)

Kff = [K_full(1,1), K_full(1,3), K_full(1,4); K_full(3,1), K_full(3,3), K_full(3,4); K_full(4,1), K_full(4,3), K_full(4,4)]

Kfc = [K_full(1,2); K_full(3,2); K_full(4,2)]
Kcf = [K_full(2,1), K_full(2,3), K_full(2,4)]
Kcc = K_full(2,2)

% Condensacion
K_rel_i = Kff - Kfc * inv(Kcc) * Kcf
K_rel_i

% ========================================
% Release en nodo j (theta2 libre)
% GDL 4 = condensado
% ========================================

Kff2 = [K_full(1,1), K_full(1,2), K_full(1,3); K_full(2,1), K_full(2,2), K_full(2,3); K_full(3,1), K_full(3,2), K_full(3,3)]

Kfc2 = [K_full(1,4); K_full(2,4); K_full(3,4)]
Kcf2 = [K_full(4,1), K_full(4,2), K_full(4,3)]
Kcc2 = K_full(4,4)

K_rel_j = Kff2 - Kfc2 * inv(Kcc2) * Kcf2
K_rel_j

% ========================================
% Comparar rigideces
% ========================================
% Rigidez lateral sin release
k_orig = K_full(1,1)
k_orig

% Rigidez con release en i
k_rel = K_rel_i(1,1)
k_rel

% Reduccion de rigidez
reduccion = (1 - k_rel/k_orig) * 100
reduccion

% El release reduce la rigidez un 75%
% (3EI/L^3 vs 12EI/L^3)`, en: `% =========================================
% TUTORIAL 11: Moment Releases
% =========================================

% A "release" frees a rotational DOF
% at one end of the element.
%
% Static condensation is applied:
%   K_cond = Kff - Kfc * inv(Kcc) * Kcf
%
% where c = condensed DOF (release)

% Euler-Bernoulli beam 4x4
E = 29000
I = 500
L = 180

c = E * I / L^3
L2 = L * L

% Full matrix (no release)
K_full = c * [12, 6*L, -12, 6*L; 6*L, 4*L2, -6*L, 2*L2; -12, -6*L, 12, -6*L; 6*L, 2*L2, -6*L, 4*L2]
K_full

% ========================================
% Release at node i (theta1 free)
% DOF 2 = condensed
% ========================================

% Partition:
% f = [1, 3, 4] (free)
% c = [2] (condensed)

Kff = [K_full(1,1), K_full(1,3), K_full(1,4); K_full(3,1), K_full(3,3), K_full(3,4); K_full(4,1), K_full(4,3), K_full(4,4)]

Kfc = [K_full(1,2); K_full(3,2); K_full(4,2)]
Kcf = [K_full(2,1), K_full(2,3), K_full(2,4)]
Kcc = K_full(2,2)

% Condensation
K_rel_i = Kff - Kfc * inv(Kcc) * Kcf
K_rel_i

% ========================================
% Release at node j (theta2 free)
% DOF 4 = condensed
% ========================================

Kff2 = [K_full(1,1), K_full(1,2), K_full(1,3); K_full(2,1), K_full(2,2), K_full(2,3); K_full(3,1), K_full(3,2), K_full(3,3)]

Kfc2 = [K_full(1,4); K_full(2,4); K_full(3,4)]
Kcf2 = [K_full(4,1), K_full(4,2), K_full(4,3)]
Kcc2 = K_full(4,4)

K_rel_j = Kff2 - Kfc2 * inv(Kcc2) * Kcf2
K_rel_j

% ========================================
% Compare stiffnesses
% ========================================
% Lateral stiffness without release
k_orig = K_full(1,1)
k_orig

% Stiffness with release at i
k_rel = K_rel_i(1,1)
k_rel

% Stiffness reduction
reduction = (1 - k_rel/k_orig) * 100
reduction

% Release reduces stiffness by 75%
% (3EI/L^3 vs 12EI/L^3)` } }, { id: "property_modifiers", title: { es: "Modificadores de Propiedades", en: "Property Modifiers" }, desc: { es: "Inercia agrietada Icr, factores ACI, efecto en drift.", en: "Cracked inertia Icr, ACI factors, effect on drift." }, code: { es: `% =========================================
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
% diseno sismico y la estabilidad P-Delta`, en: `% =========================================
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
% design and P-Delta stability` } }];
export {
  e as TUTORIALS
};
