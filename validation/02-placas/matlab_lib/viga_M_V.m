% ===========================================================================
% viga_M_V.m - Viga simple FSec2 (Steel I/Wide Flange) bajo gravedad
% ===========================================================================
% Reproduce una de las vigas principales del modelo composite family_b
% para comparar M y V contra ETABS, Hekatan Lab, Hekatan Struct, MATLAB.
%
% Geometría (igual a Frame "1" de family_b_stell_composite):
%   L = 5 m  (luz simple apoyada)
%   carga distribuida w = 12 kN/m (Dead)  [aprox por panel]
% Sección FSec2: A=11860 mm², I33=290.5e6 mm⁴, perfil W como en e2k
% Material A992Fy50: E = 200 GPa
%
% Resultados teóricos viga simple:
%   Vmax = w*L/2  = 12*5/2  = 30 kN     en apoyos
%   Mmax = w*L²/8 = 12*25/8 = 37.5 kN*m en centro
% ===========================================================================

% --- Datos viga FSec2 (real del e2k composite) ---
L  = 5;         % m
w  = 12;        % kN/m (Dead aproximado)
E  = 200e6;     % kN/m²
A  = 0.01186;   % m² (FSec2)
Iz = 290.5e-6;  % m⁴

% --- Cálculo analítico (Bernoulli simple-soportada) ---
V_max_teo = w * L / 2;
M_max_teo = w * L^2 / 8;

fprintf('=== Viga simple-apoyada (FSec2 W450x250 acero) ===\n');
fprintf('L=%g m, w=%g kN/m, E=%g kN/m^2\n', L, w, E);
fprintf('A=%g m^2, Iz=%g m^4\n', A, Iz);
fprintf('\n');
fprintf('--- Resultados teóricos (Bernoulli) ---\n');
fprintf('Vmax = w*L/2  = %.2f kN\n', V_max_teo);
fprintf('Mmax = w*L²/8 = %.4f kN*m\n', M_max_teo);
fprintf('\n');

% --- Discretización FEM con 4 elementos viga ---
nElem = 4;
nNodes = nElem + 1;
dx = L / nElem;

% Matriz K global (3 DOFs/nodo: u, w, theta = membrana axial + flexión 2D)
nDof = 3 * nNodes;
K = zeros(nDof, nDof);

% Frame 2D ke 6x6
for el = 1:nElem
  ea = E * A / dx;
  ei = E * Iz;
  L1 = dx; L2 = L1*L1; L3 = L2*L1;
  ke = [ea,         0,          0,  -ea,         0,          0;
         0, 12*ei/L3,    6*ei/L2,    0,-12*ei/L3,    6*ei/L2;
         0,  6*ei/L2,     4*ei/L1,    0, -6*ei/L2,     2*ei/L1;
       -ea,         0,          0,   ea,         0,          0;
         0,-12*ei/L3,   -6*ei/L2,    0, 12*ei/L3,   -6*ei/L2;
         0,  6*ei/L2,     2*ei/L1,    0, -6*ei/L2,     4*ei/L1];
  dofs = [3*(el-1)+1, 3*(el-1)+2, 3*(el-1)+3, 3*el+1, 3*el+2, 3*el+3];
  for ii = 1:6
    for jj = 1:6
      K(dofs(ii), dofs(jj)) = K(dofs(ii), dofs(jj)) + ke(ii, jj);
    end
  end
end

% Cargas (consistent loads para w distribuida)
F = zeros(nDof, 1);
% Para cada elemento: f_eq = w*L/2 [F_z; M] aplicado en cada nodo
for el = 1:nElem
  fe = w * dx;  % por elemento total
  % Nodal equivalent: en cada extremo: -w*L/2 (vertical) + -+ w*L²/12 (momento)
  m_eq = w * dx^2 / 12;
  ni = 3*(el-1) + 2; nj = 3*el + 2;
  mi = 3*(el-1) + 3; mj = 3*el + 3;
  F(ni) = F(ni) - fe/2;        % cortante hacia abajo
  F(nj) = F(nj) - fe/2;
  F(mi) = F(mi) - m_eq;        % momento empotramiento
  F(mj) = F(mj) + m_eq;
end

% BC: nodo 1 pin (u1=0, w1=0), nodo último roller (w_last=0).
% Esto da una viga simple-apoyada en 2D con K positiva-definida.
% DOFs fijos: 1 (u node1), 2 (w node1), nDof-1 (w last node).
free_dofs = zeros(1, nDof - 3);
fxU1 = 1;
fxW1 = 2;
fxWN = nDof - 1;
k = 1;
for d = 1:nDof
  if d == fxU1
    continue;
  end
  if d == fxW1
    continue;
  end
  if d == fxWN
    continue;
  end
  free_dofs(k) = d;
  k = k + 1;
end

% Resolver
Kred = K(free_dofs, free_dofs);
Fred = F(free_dofs);
ured = inv(Kred) * Fred;
u = zeros(nDof, 1);
for k = 1:length(free_dofs)
  u(free_dofs(k)) = ured(k);
end

% Calcular V y M en el centro (entre elementos 2 y 3)
% V = sum de fuerzas a la izquierda + reacción
% Reacción en nodo 1 (DOF 2)
% M en nodo central (nodo nElem/2 + 1)
center_node = nElem/2 + 1;
w_center = u(3*(center_node-1) + 2);

% Aproximación M en el centro: M = E*Iz * curvatura
% Mejor: post-process por elemento. Tomamos elemento del centro
el_center = nElem / 2;
ni_c = 3*(el_center-1);
nj_c = 3*el_center;
% disp local
ul = [u(ni_c+1); u(ni_c+2); u(ni_c+3); u(nj_c+1); u(nj_c+2); u(nj_c+3)];
% Fuerzas internas extremo i del elemento (signo positivo = compresión arriba)
ea = E * A / dx; ei = E * Iz;
L1 = dx; L2 = L1*L1; L3 = L2*L1;
ke = [ea,         0,          0,  -ea,         0,          0;
       0, 12*ei/L3,    6*ei/L2,    0,-12*ei/L3,    6*ei/L2;
       0,  6*ei/L2,     4*ei/L1,    0, -6*ei/L2,     2*ei/L1;
     -ea,         0,          0,   ea,         0,          0;
       0,-12*ei/L3,   -6*ei/L2,    0, 12*ei/L3,   -6*ei/L2;
       0,  6*ei/L2,     2*ei/L1,    0, -6*ei/L2,     4*ei/L1];
fe_internal = ke * ul;
% Element 2 va de x=L/4 a x=L/2.  Nodo j (DOFs 4-6) cae en x=L/2 (centro del vano).
% fe(5) = cortante en nodo j  ;  fe(6) = momento en nodo j.
V_center = fe_internal(5);
M_center = fe_internal(6);

fprintf('--- Resultados FEM (4 elementos viga 2D) ---\n');
fprintf('w_centro = %.6e m = %.4f mm\n', w_center, w_center*1000);
fprintf('V_centro = %.4f kN  (teórico: 0 en simple apoyada centro)\n', V_center);
fprintf('M_centro = %.4f kN*m\n', M_center);
fprintf('\n');
fprintf('Comparación M_max:\n');
fprintf('  Teórico Bernoulli : %.4f kN*m\n', M_max_teo);
fprintf('  FEM 4-elem        : %.4f kN*m\n', M_center);
fprintf('  Error             : %.2f%%\n', abs(M_center - M_max_teo) / M_max_teo * 100);
