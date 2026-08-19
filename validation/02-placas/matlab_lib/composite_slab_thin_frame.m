% ===========================================================================
% composite_slab_thin_frame.m
% Losa cuadrada 4mx4m (Q4 shell THIN) sobre 4 vigas perimetrales (frame 3D),
% apoyada en 4 columnas-pin en las esquinas.  Carga uniforme q hacia abajo.
%
% Sirve como benchmark de transferencia de fuerzas de areas a frames.
% Comparable contra ETABS, Hekatan Struct (WASM) y MATLAB R2017a real.
% ===========================================================================
% Convencion DOFs por nodo: [u, v, w, theta_x, theta_y, theta_z]
% Ejes globales: X = 4 m, Y = 4 m, Z vertical (up).  La losa esta en z=0.
% ===========================================================================

% --- 1) Datos del modelo ---
Lx = 4;
Ly = 4;
nx = 4;
ny = 4;
t_slab = 0.10;
q_unif = 5;

% Concreto
E_c  = 25e6;
nu_c = 0.20;

% Acero W360x60 — orientacion ETABS-default (alma vertical, eje fuerte horizontal)
% En coords locales del frame: local_x = eje viga, local_y = horizontal perpendicular,
% local_z = vertical.  Bajo carga vertical, la flexion actua sobre local_y, asi que
% Iy_b = I_strong (eje fuerte) y Iz_b = I_weak (eje debil).
E_s  = 200e6;
G_s  = 77e6;
A_b  = 7610e-6;
Iy_b = 12.9e-5;   % I_strong (eje fuerte) — controla la flexion vertical
Iz_b = 1.20e-5;   % I_weak (eje debil)
J_b  = 0.31e-6;

dx = Lx / nx;
dy = Ly / ny;
nNx = nx + 1;
nNy = ny + 1;
nNodes = nNx * nNy;
nDofPerNode = 6;
nDof = nDofPerNode * nNodes;

fprintf('=== Composite floor: thin shell + 4 edge beams ===\n');
fprintf('Slab: %g x %g m, t=%g m, q=%g kN/m^2\n', Lx, Ly, t_slab, q_unif);
fprintf('Concreto: E=%g kN/m^2, nu=%g\n', E_c, nu_c);
fprintf('Vigas W360x60 acero: A=%g m^2, Iz=%g m^4\n', A_b, Iz_b);
fprintf('Mesh Q4 = %d, frames = %d\n', nx*ny, 2*nx + 2*ny);
fprintf('Nodos = %d, DOFs totales = %d\n\n', nNodes, nDof);

% --- 2) Coordenadas de nodos ---
nodes = zeros(nNodes, 3);
for jj = 1:nNy
  for ii = 1:nNx
    n = (jj - 1) * nNx + ii;
    nodes(n, 1) = (ii - 1) * dx;
    nodes(n, 2) = (jj - 1) * dy;
    nodes(n, 3) = 0;
  end
end

% --- 3) Conectividad de elementos ---
nShells = nx * ny;
shells = zeros(nShells, 4);
for jj = 1:ny
  for ii = 1:nx
    e = (jj - 1) * nx + ii;
    n_bl = (jj - 1) * nNx + ii;
    n_br = n_bl + 1;
    n_tr = jj * nNx + ii + 1;
    n_tl = jj * nNx + ii;
    shells(e, 1) = n_bl;
    shells(e, 2) = n_br;
    shells(e, 3) = n_tr;
    shells(e, 4) = n_tl;
  end
end

nFrames = 2 * nx + 2 * ny;
frames = zeros(nFrames, 2);
ib = 0;
for ii = 1:nx
  ib = ib + 1;
  frames(ib, 1) = ii;
  frames(ib, 2) = ii + 1;
end
for ii = 1:nx
  ib = ib + 1;
  base_top = (nNy - 1) * nNx;
  frames(ib, 1) = base_top + ii;
  frames(ib, 2) = base_top + ii + 1;
end
for jj = 1:ny
  ib = ib + 1;
  frames(ib, 1) = (jj - 1) * nNx + 1;
  frames(ib, 2) = jj * nNx + 1;
end
for jj = 1:ny
  ib = ib + 1;
  frames(ib, 1) = (jj - 1) * nNx + nNx;
  frames(ib, 2) = jj * nNx + nNx;
end

% Soportes en esquinas (pin)
nc1 = 1;
nc2 = nNx;
nc3 = (nNy - 1) * nNx + 1;
nc4 = nNy * nNx;
sup_nodes = [nc1, nc2, nc3, nc4];

fprintf('Esquinas pin: %d, %d, %d, %d\n\n', nc1, nc2, nc3, nc4);

% --- 4) Ensamblaje K, F ---
K = zeros(nDof, nDof);
F = zeros(nDof, 1);

% 4.1) Shells thin Q4 (Ke 24x24)
ce = zeros(4, 2);
for e = 1:nShells
  for k = 1:4
    nk = shells(e, k);
    ce(k, 1) = nodes(nk, 1);
    ce(k, 2) = nodes(nk, 2);
  end
  ke_s = q4_shell_thin(E_c, nu_c, t_slab, ce);
  edof = zeros(24, 1);
  for k = 1:4
    nk = shells(e, k);
    base_g = nDofPerNode * (nk - 1);
    base_l = 6 * (k - 1);
    for d = 1:6
      edof(base_l + d) = base_g + d;
    end
  end
  for ii = 1:24
    for jj = 1:24
      K(edof(ii), edof(jj)) = K(edof(ii), edof(jj)) + ke_s(ii, jj);
    end
  end
  area_e = abs((ce(2,1) - ce(1,1)) * (ce(3,2) - ce(2,2)));
  fz_node = q_unif * area_e / 4;
  for k = 1:4
    nk = shells(e, k);
    base_g = nDofPerNode * (nk - 1);
    F(base_g + 3) = F(base_g + 3) - fz_node;
  end
end

% 4.2) Frames 3D (Ke 12x12 globalizado por la propia funcion)
% Guardamos Tmat de cada elemento para postproceso (se vuelve a calcular igual).
for e = 1:nFrames
  n1 = frames(e, 1);
  n2 = frames(e, 2);
  p1 = [nodes(n1, 1), nodes(n1, 2), nodes(n1, 3)];
  p2 = [nodes(n2, 1), nodes(n2, 2), nodes(n2, 3)];
  [ke_f, Tmat_f, Le_f] = frame3d_ke(E_s, G_s, A_b, J_b, Iy_b, Iz_b, p1, p2);
  edof = zeros(12, 1);
  base_g1 = nDofPerNode * (n1 - 1);
  base_g2 = nDofPerNode * (n2 - 1);
  for d = 1:6
    edof(d)     = base_g1 + d;
    edof(d + 6) = base_g2 + d;
  end
  for ii = 1:12
    for jj = 1:12
      K(edof(ii), edof(jj)) = K(edof(ii), edof(jj)) + ke_f(ii, jj);
    end
  end
end

% --- 5) BC pin en esquinas: u=v=w=0 ---
maxK = max(abs(diag(K)));
ks_pen = 1e10 * maxK;
for s = 1:length(sup_nodes)
  ns = sup_nodes(s);
  base_g = nDofPerNode * (ns - 1);
  K(base_g + 1, base_g + 1) = K(base_g + 1, base_g + 1) + ks_pen;
  K(base_g + 2, base_g + 2) = K(base_g + 2, base_g + 2) + ks_pen;
  K(base_g + 3, base_g + 3) = K(base_g + 3, base_g + 3) + ks_pen;
end

% --- 6) Resolver ---
U = K \ F;

% --- 7) Postproceso ---
i_c = nx / 2 + 1;
j_c = ny / 2 + 1;
n_c = (j_c - 1) * nNx + i_c;
w_center = U(nDofPerNode * (n_c - 1) + 3) * 1000;

R_corners = zeros(4, 1);
for s = 1:4
  ns = sup_nodes(s);
  base_g = nDofPerNode * (ns - 1);
  R_corners(s) = ks_pen * U(base_g + 3);
end

Q_total = q_unif * Lx * Ly;
sumR = -(R_corners(1) + R_corners(2) + R_corners(3) + R_corners(4));

fprintf('--- Desplazamientos ---\n');
fprintf('w_centro = %.4f mm\n\n', w_center);

fprintf('--- Reacciones verticales en esquinas ---\n');
for s = 1:4
  fprintf('  Nodo %d: Rz = %.3f kN\n', sup_nodes(s), -R_corners(s));
end
fprintf('  Suma reacciones    = %.3f kN\n', sumR);
fprintf('  Carga total Q*A    = %.3f kN\n', Q_total);
fprintf('  Error equilibrio   = %.2f %%\n\n', abs(sumR - Q_total) / Q_total * 100);

% --- 8) Fuerzas internas en frames (en coords locales del elemento) ---
% Convencion local:  My = Fe_l(5)/Fe_l(11) = bending sobre eje fuerte (vertical load)
%                    Vz = Fe_l(3)/Fe_l(9)  = cortante vertical
%                    N  = Fe_l(1)/Fe_l(7)  = axial
fprintf('--- Frames lado bottom (y=0): fuerzas locales ---\n');
fprintf('  e |  Ni |  Nj |   N(kN)  |  Vz(kN)  |  My(kN*m)  (en nodo i)\n');

My_max = 0;
Vz_max = 0;
N_max = 0;
for e = 1:nFrames
  n1 = frames(e, 1);
  n2 = frames(e, 2);
  p1 = [nodes(n1, 1), nodes(n1, 2), nodes(n1, 3)];
  p2 = [nodes(n2, 1), nodes(n2, 2), nodes(n2, 3)];
  [ke_f, Tmat_f, Le_f] = frame3d_ke(E_s, G_s, A_b, J_b, Iy_b, Iz_b, p1, p2);

  base_g1 = nDofPerNode * (n1 - 1);
  base_g2 = nDofPerNode * (n2 - 1);
  Ue = zeros(12, 1);
  for d = 1:6
    Ue(d)     = U(base_g1 + d);
    Ue(d + 6) = U(base_g2 + d);
  end

  Fe_g = ke_f * Ue;
  Fe_l = Tmat_f * Fe_g;

  if e <= nx
    fprintf('  %d | %3d | %3d | %8.3f | %8.3f | %8.3f\n', e, n1, n2, Fe_l(1), Fe_l(3), Fe_l(5));
  end

  Fl5  = Fe_l(5);
  Fl11 = Fe_l(11);
  Fl3  = Fe_l(3);
  Fl9  = Fe_l(9);
  Fl1  = Fe_l(1);
  Fl7  = Fe_l(7);
  if abs(Fl5) > abs(My_max)
    My_max = Fl5;
  end
  if abs(Fl11) > abs(My_max)
    My_max = Fl11;
  end
  if abs(Fl3) > abs(Vz_max)
    Vz_max = Fl3;
  end
  if abs(Fl9) > abs(Vz_max)
    Vz_max = Fl9;
  end
  if abs(Fl1) > abs(N_max)
    N_max = Fl1;
  end
  if abs(Fl7) > abs(N_max)
    N_max = Fl7;
  end
end

fprintf('\n=== Resumen para comparar ETABS / Struct / MATLAB ===\n');
fprintf('  w_centro          = %8.4f mm\n', w_center);
fprintf('  Sum Rz            = %8.3f kN  (esperado %.1f)\n', sumR, Q_total);
fprintf('  My max viga       = %8.3f kN*m  (M3 ETABS = bending eje fuerte)\n', My_max);
fprintf('  Vz max viga       = %8.3f kN    (V2 ETABS = cortante vertical)\n', Vz_max);
fprintf('  N axial max viga  = %8.3f kN\n', N_max);
