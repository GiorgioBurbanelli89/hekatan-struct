% ===========================================================================
% shear_wall_q4.m - Muro de corte cantilever Q4 plane stress
% ===========================================================================
% Validacion cruzada Hekatan Struct, MATLAB R2017a, Hekatan Lab, ETABS, SAP2000
%
% Geometria: muro vertical en plano XZ, empotrado en base, carga lateral en top
%   W = 5 m  (ancho horizontal)
%   H = 3 m  (altura)
%   t = 0.2 m (espesor)
% Material: E = 25e6 kN/m2, nu = 0.2
% Carga: P = 100 kN repartido en los nodos del top
% Mesh: nx x ny elementos Q4
%
% Valores de referencia (Ux nodo top center) - de hekatan-struct shear-wall-q4:
%   OpenSees TCL : 4.602e-5 m
%   SAP2000      : 4.629e-5 m
%   ETABS        : 4.582e-5 m
%
% Compatible: MATLAB R2017a y Hekatan Lab modo MATLAB (sin toolboxes)
% ===========================================================================

% --- Parametros ---
W  = 5;
H  = 3;
t  = 0.2;
E  = 25e6;
nu = 0.2;
P_total = 100;
nx = 8;
ny = 6;

% --- Mesh ---
dx = W / nx;
dz = H / ny;
nNx = nx + 1;
nNz = ny + 1;
nNodes = nNx * nNz;

coords = zeros(nNodes, 2);
for j = 0:ny
  for i = 0:nx
    coords(j*nNx + i + 1, 1) = i*dx;
    coords(j*nNx + i + 1, 2) = j*dz;
  end
end

nElems = nx * ny;
elems = zeros(nElems, 4);
e = 1;
for j = 0:ny-1
  for i = 0:nx-1
    elems(e, 1) = j*nNx + i + 1;
    elems(e, 2) = j*nNx + i + 2;
    elems(e, 3) = (j+1)*nNx + i + 2;
    elems(e, 4) = (j+1)*nNx + i + 1;
    e = e + 1;
  end
end

% --- Matriz constitutiva plane stress ---
D = (E / (1 - nu^2)) * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2];

% --- Ensamblar K global (2 DOFs por nodo: ux, uz) ---
nDof = 2 * nNodes;
K = zeros(nDof, nDof);

gp1 = -1/sqrt(3);
gp2 =  1/sqrt(3);

for el = 1:nElems
  ne1 = elems(el, 1);
  ne2 = elems(el, 2);
  ne3 = elems(el, 3);
  ne4 = elems(el, 4);

  ke = zeros(8, 8);

  for ig = 1:2
    for jg = 1:2
      if ig == 1
        xi = gp1;
      else
        xi = gp2;
      end
      if jg == 1
        eta = gp1;
      else
        eta = gp2;
      end

      % Derivadas funciones de forma
      dN_dxi  = 0.25 * [-(1-eta), (1-eta), (1+eta), -(1+eta)];
      dN_deta = 0.25 * [-(1-xi),  -(1+xi), (1+xi),   (1-xi)];

      % Coords del elemento (4 x 2)
      ce = zeros(4, 2);
      ce(1, 1) = coords(ne1, 1); ce(1, 2) = coords(ne1, 2);
      ce(2, 1) = coords(ne2, 1); ce(2, 2) = coords(ne2, 2);
      ce(3, 1) = coords(ne3, 1); ce(3, 2) = coords(ne3, 2);
      ce(4, 1) = coords(ne4, 1); ce(4, 2) = coords(ne4, 2);

      % Jacobiano 2x2
      J11 = dN_dxi(1)*ce(1,1) + dN_dxi(2)*ce(2,1) + dN_dxi(3)*ce(3,1) + dN_dxi(4)*ce(4,1);
      J12 = dN_dxi(1)*ce(1,2) + dN_dxi(2)*ce(2,2) + dN_dxi(3)*ce(3,2) + dN_dxi(4)*ce(4,2);
      J21 = dN_deta(1)*ce(1,1) + dN_deta(2)*ce(2,1) + dN_deta(3)*ce(3,1) + dN_deta(4)*ce(4,1);
      J22 = dN_deta(1)*ce(1,2) + dN_deta(2)*ce(2,2) + dN_deta(3)*ce(3,2) + dN_deta(4)*ce(4,2);
      detJ = J11*J22 - J12*J21;

      % Inversa del Jacobiano
      Ji11 =  J22 / detJ;
      Ji12 = -J12 / detJ;
      Ji21 = -J21 / detJ;
      Ji22 =  J11 / detJ;

      % Derivadas dN/dx y dN/dz
      dN_dx = zeros(1, 4);
      dN_dz = zeros(1, 4);
      for k = 1:4
        dN_dx(k) = Ji11 * dN_dxi(k) + Ji12 * dN_deta(k);
        dN_dz(k) = Ji21 * dN_dxi(k) + Ji22 * dN_deta(k);
      end

      % Matriz B (3x8)
      B = zeros(3, 8);
      for k = 1:4
        B(1, 2*k-1) = dN_dx(k);
        B(2, 2*k)   = dN_dz(k);
        B(3, 2*k-1) = dN_dz(k);
        B(3, 2*k)   = dN_dx(k);
      end

      ke = ke + transpose(B) * D * B * detJ * t;
    end
  end

  % Mapeo DOFs locales a globales
  dofs = zeros(1, 8);
  dofs(1) = 2*(ne1 - 1) + 1; dofs(2) = 2*(ne1 - 1) + 2;
  dofs(3) = 2*(ne2 - 1) + 1; dofs(4) = 2*(ne2 - 1) + 2;
  dofs(5) = 2*(ne3 - 1) + 1; dofs(6) = 2*(ne3 - 1) + 2;
  dofs(7) = 2*(ne4 - 1) + 1; dofs(8) = 2*(ne4 - 1) + 2;

  for ii = 1:8
    for jj = 1:8
      K(dofs(ii), dofs(jj)) = K(dofs(ii), dofs(jj)) + ke(ii, jj);
    end
  end
end

% --- DOFs libres = todos menos los de la base (j=0, primeros nNx nodos) ---
% Lista de indices libres: del DOF (2*nNx + 1) hasta nDof
free_dofs = (2*nNx + 1):nDof;

% --- Cargas: P_total / nNx en cada nodo del top, direccion +X ---
F = zeros(nDof, 1);
P_node = P_total / nNx;
for i = 0:nx
  n = ny*nNx + i + 1;
  F(2*(n-1) + 1) = P_node;
end

% --- Resolver sistema reducido ---
Kred = K(free_dofs, free_dofs);
Fred = F(free_dofs);
ured = inv(Kred) * Fred;

% Reconstruir u completo (ceros en DOFs fijos)
u = zeros(nDof, 1);
for i = 1:length(free_dofs)
  u(free_dofs(i)) = ured(i);
end

% --- Reportar Ux del nodo top center ---
top_center_node = ny*nNx + floor(nx/2) + 1;
ux_top = u(2*(top_center_node-1) + 1);

fprintf('=== Muro cantilever Q4 plane stress ===\n');
fprintf('W=%.1f m, H=%.1f m, t=%.2f m\n', W, H, t);
fprintf('E=%.0f kN/m^2, nu=%.2f\n', E, nu);
fprintf('Carga lateral total P=%.0f kN\n', P_total);
fprintf('Mesh: %dx%d Q4 = %d elementos\n', nx, ny, nElems);
fprintf('Total DOFs: %d (libres: %d, fijos: %d)\n', nDof, length(free_dofs), 2*nNx);
fprintf('\n');
fprintf('--- Resultados ---\n');
fprintf('Ux top center = %.6e m = %.4f mm\n', ux_top, ux_top*1000);
fprintf('\n');
fprintf('--- Validacion cruzada (ux top center) ---\n');
fprintf('  OpenSees TCL : 4.602e-05 m\n');
fprintf('  SAP2000      : 4.629e-05 m\n');
fprintf('  ETABS        : 4.582e-05 m\n');
fprintf('  MATLAB (este): %.3e m\n', abs(ux_top));
fprintf('\n');
err_OS    = abs(abs(ux_top) - 4.602e-5) / 4.602e-5 * 100;
err_SAP   = abs(abs(ux_top) - 4.629e-5) / 4.629e-5 * 100;
err_ETABS = abs(abs(ux_top) - 4.582e-5) / 4.582e-5 * 100;
fprintf('Error vs OpenSees:  %.2f%%\n', err_OS);
fprintf('Error vs SAP2000:   %.2f%%\n', err_SAP);
fprintf('Error vs ETABS:     %.2f%%\n', err_ETABS);
