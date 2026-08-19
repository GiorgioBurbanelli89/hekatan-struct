% ===========================================================================
% composite_wall_membrane_frame.m
% Muro de corte 4mx4m (Q4 membrana plane stress) con vigas chord/collector
% perimetrales, base empotrada, carga lateral horizontal en el borde superior.
%
% Modelo en el plano xz: x = horizontal (0..4m), z = vertical (0..4m), y = 0.
% El muro trabaja in-plane (membrane), las vigas perimetrales actuan como
% chord/collector y elementos de borde (boundary elements).
% ===========================================================================
% DOFs por nodo: [u, v, w, theta_x, theta_y, theta_z]
% Los DOFs in-plane son ux (DOF 1) y uz (DOF 3).
% La membrana solo contribuye a esos.  Los frames perimetrales aportan ademas
% rigidez out-of-plane (uy, theta_x, etc.) — no afecta este caso planar.
% ===========================================================================

% --- 1) Datos ---
Lx = 4;
Lz = 4;
nx = 4;
nz = 4;
t_wall = 0.20;
F_top  = 100;       % kN total carga lateral hacia +x distribuida en el top edge

% Concreto
E_c  = 25e6;
nu_c = 0.20;

% Acero W360x60 (chord/collector + columnas)
E_s  = 200e6;
G_s  = 77e6;
A_b  = 7610e-6;
Iy_b = 12.9e-5;
Iz_b = 1.20e-5;
J_b  = 0.31e-6;

dx = Lx / nx;
dz = Lz / nz;
nNx = nx + 1;
nNz = nz + 1;
nNodes = nNx * nNz;
nDofPerNode = 6;
nDof = nDofPerNode * nNodes;

fprintf('=== Shear wall: membrane Q4 + 4 perimetral frames ===\n');
fprintf('Wall: %g x %g m, t=%g m, F_top=%g kN total\n', Lx, Lz, t_wall, F_top);
fprintf('Concreto: E=%g kN/m^2, nu=%g\n', E_c, nu_c);
fprintf('Frames W360x60: A=%g, Iy(strong)=%g\n', A_b, Iy_b);
fprintf('Mesh Q4 = %d, frames perimetrales = %d\n', nx*nz, 2*nx + 2*nz);
fprintf('Nodos = %d, DOFs = %d\n\n', nNodes, nDof);

% --- 2) Coordenadas (plano xz, y = 0) ---
nodes = zeros(nNodes, 3);
for kk = 1:nNz
  for ii = 1:nNx
    n = (kk - 1) * nNx + ii;
    nodes(n, 1) = (ii - 1) * dx;
    nodes(n, 2) = 0;
    nodes(n, 3) = (kk - 1) * dz;
  end
end

% --- 3) Conectividad ---
nShells = nx * nz;
shells = zeros(nShells, 4);
for kk = 1:nz
  for ii = 1:nx
    e = (kk - 1) * nx + ii;
    n_bl = (kk - 1) * nNx + ii;
    n_br = n_bl + 1;
    n_tr = kk * nNx + ii + 1;
    n_tl = kk * nNx + ii;
    shells(e, 1) = n_bl;
    shells(e, 2) = n_br;
    shells(e, 3) = n_tr;
    shells(e, 4) = n_tl;
  end
end

nFrames = 2 * nx + 2 * nz;
frames = zeros(nFrames, 2);
ib = 0;
% Bottom chord (z = 0): a lo largo de x
for ii = 1:nx
  ib = ib + 1;
  frames(ib, 1) = ii;
  frames(ib, 2) = ii + 1;
end
% Top chord (z = Lz)
for ii = 1:nx
  ib = ib + 1;
  base_top = (nNz - 1) * nNx;
  frames(ib, 1) = base_top + ii;
  frames(ib, 2) = base_top + ii + 1;
end
% Left column (x = 0): a lo largo de z
for kk = 1:nz
  ib = ib + 1;
  frames(ib, 1) = (kk - 1) * nNx + 1;
  frames(ib, 2) = kk * nNx + 1;
end
% Right column (x = Lx)
for kk = 1:nz
  ib = ib + 1;
  frames(ib, 1) = (kk - 1) * nNx + nNx;
  frames(ib, 2) = kk * nNx + nNx;
end

% Soportes: borde inferior (z=0) totalmente empotrado
sup_nodes = zeros(nNx, 1);
for ii = 1:nNx
  sup_nodes(ii) = ii;
end
nSups = length(sup_nodes);

fprintf('Soportes: borde inferior (z=0), %d nodos empotrados\n\n', nSups);

% --- 4) Ensamblaje ---
K = zeros(nDof, nDof);
F = zeros(nDof, 1);

% 4.1) Membrana Q4 (8 DOFs: u_x, u_z por nodo)
% Mapeo: local-u → global ux (DOF 1), local-v → global uz (DOF 3)
ce = zeros(4, 2);
for e = 1:nShells
  for k = 1:4
    nk = shells(e, k);
    ce(k, 1) = nodes(nk, 1);   % global x
    ce(k, 2) = nodes(nk, 3);   % global z
  end
  ke_m = q4_membrane(E_c, nu_c, t_wall, ce);
  edof_m = zeros(8, 1);
  for k = 1:4
    nk = shells(e, k);
    base_g = nDofPerNode * (nk - 1);
    base_l = 2 * (k - 1);
    edof_m(base_l + 1) = base_g + 1;   % ux
    edof_m(base_l + 2) = base_g + 3;   % uz
  end
  for ii = 1:8
    for jj = 1:8
      K(edof_m(ii), edof_m(jj)) = K(edof_m(ii), edof_m(jj)) + ke_m(ii, jj);
    end
  end
end

% 4.2) Frames 3D
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

% 4.3) Carga lateral en top edge: F_top distribuido entre nNx nodos
% F per node = F_top / nNx (en direccion +x, DOF 1)
n_top_edge = nNz - 1;       % indice del primer nodo del top edge en grilla
F_per = F_top / nNx;
for ii = 1:nNx
  n = n_top_edge * nNx + ii;
  base_g = nDofPerNode * (n - 1);
  F(base_g + 1) = F(base_g + 1) + F_per;
end

% --- 5) BC empotrado: ux=uy=uz=0 + rotaciones=0 en borde inferior ---
maxK = max(abs(diag(K)));
ks_pen = 1e10 * maxK;
for s = 1:nSups
  ns = sup_nodes(s);
  base_g = nDofPerNode * (ns - 1);
  for d = 1:6
    K(base_g + d, base_g + d) = K(base_g + d, base_g + d) + ks_pen;
  end
end

% Tambien fijar uy y rotaciones fuera-del-plano para todos los nodos no-soporte
% (porque la membrana no tiene rigidez out-of-plane y los frames perimetrales
% no llegan a los nodos interiores en uy)
for n = 1:nNodes
  is_sup = 0;
  for s = 1:nSups
    if sup_nodes(s) == n
      is_sup = 1;
    end
  end
  if is_sup == 0
    base_g = nDofPerNode * (n - 1);
    % Solo nodos interiores que NO estan en perimetro: si es perimetro,
    % los frames si proveen rigidez (axial torsional flexion en plano).
    % Para nodos puramente interiores (no en frame perimetral): fijar uy.
    is_perim = 0;
    if nodes(n, 1) == 0 || nodes(n, 1) == Lx
      is_perim = 1;
    end
    if nodes(n, 3) == 0 || nodes(n, 3) == Lz
      is_perim = 1;
    end
    if is_perim == 0
      K(base_g + 2, base_g + 2) = K(base_g + 2, base_g + 2) + ks_pen;
      K(base_g + 4, base_g + 4) = K(base_g + 4, base_g + 4) + ks_pen;
      K(base_g + 5, base_g + 5) = K(base_g + 5, base_g + 5) + ks_pen;
      K(base_g + 6, base_g + 6) = K(base_g + 6, base_g + 6) + ks_pen;
    end
  end
end

% --- 6) Resolver ---
U = K \ F;

% --- 7) Postproceso ---
% Top center: nodo en (Lx/2, 0, Lz)
i_c = nx / 2 + 1;
n_top_c = (nNz - 1) * nNx + i_c;
ux_top = U(nDofPerNode * (n_top_c - 1) + 1) * 1000;     % a mm

% Reacciones en base
R_base_x = 0;
R_base_z = 0;
for s = 1:nSups
  ns = sup_nodes(s);
  base_g = nDofPerNode * (ns - 1);
  R_base_x = R_base_x + ks_pen * U(base_g + 1);
  R_base_z = R_base_z + ks_pen * U(base_g + 3);
end

fprintf('--- Desplazamientos ---\n');
fprintf('ux top center (nodo %d) = %.4f mm\n\n', n_top_c, ux_top);

fprintf('--- Reacciones en la base (suma de los 5 nodos empotrados) ---\n');
fprintf('  Sum Rx = %.3f kN  (esperado %.1f, signo opuesto)\n', -R_base_x, F_top);
fprintf('  Sum Rz = %.3f kN  (esperado 0)\n\n', -R_base_z);

% Fuerzas internas en chord beams (top y bottom) y columnas verticales
fprintf('--- Frames: bottom chord (z=0): N V Mz en nodo i ---\n');
fprintf('  e | Ni | Nj |   N(kN)  | Vz(kN) | My(kN*m) | Mz(kN*m)\n');
N_max  = 0;
M_max  = 0;
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

  % Imprimir bottom chord (4 primeros) y left col (9..12)
  if e <= nx
    fprintf('  %d | %3d | %3d | %8.3f | %7.3f | %8.3f | %8.3f\n', e, n1, n2, Fe_l(1), Fe_l(3), Fe_l(5), Fe_l(6));
  end

  Fl1 = Fe_l(1);
  Fl5 = Fe_l(5);
  Fl6 = Fe_l(6);
  Fl11 = Fe_l(11);
  Fl12 = Fe_l(12);
  if abs(Fl1) > abs(N_max)
    N_max = Fl1;
  end
  if abs(Fl5) > abs(M_max)
    M_max = Fl5;
  end
  if abs(Fl6) > abs(M_max)
    M_max = Fl6;
  end
  if abs(Fl11) > abs(M_max)
    M_max = Fl11;
  end
  if abs(Fl12) > abs(M_max)
    M_max = Fl12;
  end
end

fprintf('\n=== Resumen Membrane Wall ===\n');
fprintf('  ux top center  = %8.4f mm\n', ux_top);
fprintf('  Sum Rx base    = %8.3f kN\n', -R_base_x);
fprintf('  N max frame    = %8.3f kN\n', N_max);
fprintf('  M max frame    = %8.3f kN*m\n', M_max);
