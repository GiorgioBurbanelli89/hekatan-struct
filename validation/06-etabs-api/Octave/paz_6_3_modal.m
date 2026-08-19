% Paz & Leigh — Example 6.3 Space Frame Modal Analysis
% ======================================================
%
% 5to solver independiente para validación cruzada de Hekatan Struct.
% Reimplementación pura en Octave de la formulación de elementos finitos
% pórtico 3D (12 DOF/elemento) usada por OpenSeesPy/SciPy/Hekatan WASM.
%
% Modelo: 4 columnas W24x146 + 4 vigas W14x84, 1 piso.
% Esperado: f1=9.6780 Hz, f2=16.9874 Hz, f3=26.6149 Hz (Paz textbook).
%
% Uso:  octave-cli paz_6_3_modal.m

clear all; close all; clc;

% ── Material y secciones ─────────────────────────────────────
E  = 29500.0;            % ksi
nu = 0.3;
G  = E / (2*(1+nu));     % shear modulus

% Steel density: 490 lb/ft^3 → kip*sec^2/in^4
RHO = 490.0 / 1000.0 / (12^3) / 386.4;

% Geometría
STORY_H = 180.0;   % in
BAY_X   = 114.0;   % in
BAY_Y   = 240.0;   % in

% Columns (W24x146)
A_col  = 43.0;  Iz_col = 5630.0;  Iy_col = 391.0;  J_col = 34.8;
% Girders (W14x84)
A_grd  = 24.7;  Iz_grd = 928.0;   Iy_grd = 225.0;  J_grd = 5.9;

% ── Nodes (8 fijos abajo + 4 libres en techo) ────────────────
% Layout abajo (z=0): 4 esquinas 0..3, libres en z=H: 4..7
nodes = [ ...
   0,        0,        0;       % 0
   BAY_X,    0,        0;       % 1
   BAY_X,    BAY_Y,    0;       % 2
   0,        BAY_Y,    0;       % 3
   0,        0,        STORY_H; % 4
   BAY_X,    0,        STORY_H; % 5
   BAY_X,    BAY_Y,    STORY_H; % 6
   0,        BAY_Y,    STORY_H; % 7
];
N_nodes = size(nodes,1);
N_dof   = 6 * N_nodes;

% Elements: [n1 n2 A Iy Iz J type]  type=1 col, type=2 girder
elements = [ ...
   0,4, A_col,Iy_col,Iz_col,J_col, 1; ...
   1,5, A_col,Iy_col,Iz_col,J_col, 1; ...
   2,6, A_col,Iy_col,Iz_col,J_col, 1; ...
   3,7, A_col,Iy_col,Iz_col,J_col, 1; ...
   4,5, A_grd,Iy_grd,Iz_grd,J_grd, 2; ...
   5,6, A_grd,Iy_grd,Iz_grd,J_grd, 2; ...
   6,7, A_grd,Iy_grd,Iz_grd,J_grd, 2; ...
   7,4, A_grd,Iy_grd,Iz_grd,J_grd, 2; ...
];
N_el = size(elements,1);

% ── Funciones helper ──────────────────────────────────────
% Matriz local de stiffness frame 3D (12x12)
function ke = local_k(L, E, A, Iy, Iz, J, G)
  EA_L  = E*A/L;
  GJ_L  = G*J/L;
  EIz_L = E*Iz/L;
  EIy_L = E*Iy/L;
  ke = zeros(12,12);
  ke(1,1)= EA_L;  ke(1,7)=-EA_L;  ke(7,1)=-EA_L;  ke(7,7)= EA_L;
  ke(4,4)= GJ_L;  ke(4,10)=-GJ_L; ke(10,4)=-GJ_L; ke(10,10)= GJ_L;
  % Bending about z (y-displacement)
  c1 = 12*EIz_L/L^2;  c2 = 6*EIz_L/L;  c3 = 4*EIz_L;  c4 = 2*EIz_L;
  ke(2,2)= c1;  ke(2,6)= c2;  ke(2,8)=-c1;  ke(2,12)= c2;
  ke(6,2)= c2;  ke(6,6)= c3;  ke(6,8)=-c2;  ke(6,12)= c4;
  ke(8,2)=-c1;  ke(8,6)=-c2;  ke(8,8)= c1;  ke(8,12)=-c2;
  ke(12,2)= c2; ke(12,6)= c4; ke(12,8)=-c2; ke(12,12)= c3;
  % Bending about y (z-displacement, signo invertido en cross)
  d1 = 12*EIy_L/L^2;  d2 = 6*EIy_L/L;  d3 = 4*EIy_L;  d4 = 2*EIy_L;
  ke(3,3)= d1;  ke(3,5)=-d2;  ke(3,9)=-d1;  ke(3,11)=-d2;
  ke(5,3)=-d2;  ke(5,5)= d3;  ke(5,9)= d2;  ke(5,11)= d4;
  ke(9,3)=-d1;  ke(9,5)= d2;  ke(9,9)= d1;  ke(9,11)= d2;
  ke(11,3)=-d2; ke(11,5)= d4; ke(11,9)= d2; ke(11,11)= d3;
endfunction

% Matriz local de masa consistente (12x12) — Ip = Iy+Iz
function me = local_m(L, A, Iy, Iz, rho)
  m = rho*A*L;
  Ip = Iy + Iz;
  me = zeros(12,12);
  me(1,1)= m/3;     me(1,7)= m/6;
  me(7,1)= m/6;     me(7,7)= m/3;
  me(4,4)= rho*Ip*L/3;  me(4,10)= rho*Ip*L/6;
  me(10,4)= rho*Ip*L/6; me(10,10)= rho*Ip*L/3;
  % v-direction (consistent)
  me(2,2)= 13*m/35;       me(2,6)= 11*m*L/210;    me(2,8)= 9*m/70;       me(2,12)=-13*m*L/420;
  me(6,2)= 11*m*L/210;    me(6,6)= m*L^2/105;     me(6,8)= 13*m*L/420;   me(6,12)=-m*L^2/140;
  me(8,2)= 9*m/70;        me(8,6)= 13*m*L/420;    me(8,8)= 13*m/35;      me(8,12)=-11*m*L/210;
  me(12,2)=-13*m*L/420;   me(12,6)=-m*L^2/140;    me(12,8)=-11*m*L/210;  me(12,12)= m*L^2/105;
  % w-direction
  me(3,3)= 13*m/35;       me(3,5)=-11*m*L/210;    me(3,9)= 9*m/70;       me(3,11)= 13*m*L/420;
  me(5,3)=-11*m*L/210;    me(5,5)= m*L^2/105;     me(5,9)=-13*m*L/420;   me(5,11)=-m*L^2/140;
  me(9,3)= 9*m/70;        me(9,5)=-13*m*L/420;    me(9,9)= 13*m/35;      me(9,11)= 11*m*L/210;
  me(11,3)= 13*m*L/420;   me(11,5)=-m*L^2/140;    me(11,9)= 11*m*L/210;  me(11,11)= m*L^2/105;
endfunction

% Transformación local→global para frame 3D (matriz 12x12 a partir de 3x3 por 4)
function T = trans_matrix(p1, p2)
  % Forzar a column vectors
  p1 = p1(:);  p2 = p2(:);
  L = norm(p2 - p1);
  ex = (p2 - p1) / L;
  if abs(ex(3)) > 0.9
    ref = [1; 0; 0];
  else
    ref = [0; 0; 1];
  endif
  ez = cross(ex, ref);
  ez = ez / norm(ez);
  ey = cross(ez, ex);
  R = [ex'; ey'; ez'];   % 3x3
  T = zeros(12, 12);
  for k = 0:3
    T(k*3+1:k*3+3, k*3+1:k*3+3) = R;
  endfor
endfunction

% ── Ensamblaje ────────────────────────────────────────────
K = sparse(N_dof, N_dof);
M = sparse(N_dof, N_dof);

for e = 1:N_el
  n1 = elements(e,1);  n2 = elements(e,2);
  A  = elements(e,3);  Iy = elements(e,4);  Iz = elements(e,5);  J = elements(e,6);
  p1 = nodes(n1+1,:);  p2 = nodes(n2+1,:);
  L = norm(p2 - p1);
  ke = local_k(L, E, A, Iy, Iz, J, G);
  me = local_m(L, A, Iy, Iz, RHO);
  T  = trans_matrix(p1, p2);
  Kg = T' * ke * T;
  Mg = T' * me * T;
  dofs = [6*n1+1 : 6*n1+6, 6*n2+1 : 6*n2+6];
  K(dofs,dofs) = K(dofs,dofs) + Kg;
  M(dofs,dofs) = M(dofs,dofs) + Mg;
endfor

% ── Apoyos: fijar nodos 0..3 (DOFs 1..24) ─────────────────
fixed = 1:24;
free  = setdiff(1:N_dof, fixed);
Kff = K(free,free);
Mff = M(free,free);

% ── Eigenvalue problem K·phi = lambda·M·phi ─────────────
% Convertir a denso para usar eig generalizado
Kd = full(Kff);  Md = full(Mff);
[V, D] = eig(Kd, Md);
lambda = real(diag(D));
[lambda_sorted, idx] = sort(lambda);
omega = sqrt(lambda_sorted);
freq = omega / (2*pi);

% Solo los primeros 6
n_modes = min(6, length(freq));
printf("\n========================================================================\n");
printf("  Paz & Leigh 6.3 — Octave 10.1 Independent Modal Solver\n");
printf("========================================================================\n");
printf("  N_dof = %d, free = %d\n", N_dof, length(free));
printf("\n  Mode      omega (rad/s)      Freq (Hz)      Period (s)\n");
printf("  -------------------------------------------------------\n");
for k = 1:n_modes
  printf("  %4d   %15.4f   %12.4f   %11.4f\n", k, omega(k), freq(k), 1/freq(k));
endfor

% Comparación contra valores Paz textbook
paz_freqs = [9.6780, 16.9874, 26.6149, 29.9497, 33.9929, 44.9332];
printf("\n  Octave vs Paz textbook reference:\n");
printf("  Mode   Octave (Hz)   Paz (Hz)    Δ %%\n");
printf("  -----------------------------------------\n");
for k = 1:n_modes
  delta = 100*(freq(k) - paz_freqs(k))/paz_freqs(k);
  printf("  %4d   %10.4f   %8.4f   %6.3f%%\n", k, freq(k), paz_freqs(k), delta);
endfor
printf("\n");
