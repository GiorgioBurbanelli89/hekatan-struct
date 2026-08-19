function ke = q4_plate_thick(E, nu, t, ce, kappa_shear)
% q4_plate_thick  Matriz de rigidez Q4 plate Mindlin-Reissner (FSDT, thick)
%   ke = q4_plate_thick(E, nu, t, ce)
%   ke = q4_plate_thick(E, nu, t, ce, kappa_shear)  (default kappa = 5/6)
%
% Uso típico: losas/muros GRUESOS donde t/L >= 1/20 (deformación por corte).
% Mindlin-Reissner FSDT: incluye corte transversal.
%
% Parámetros:
%   E, nu   : material
%   t       : espesor (m)
%   ce      : 4x2 coords (x, y) o (x, z) en orden CCW
%   kappa_shear : factor de corrección de corte (default 5/6 para isótropo)
%
% Salida:
%   ke      : 12x12 matriz de rigidez local
%             DOFs por nodo: [w, theta_x, theta_y]
%
% Integración: 2x2 para flexión, 1x1 (reducida) para corte
% — selective reduced integration para evitar shear locking.
%
% Compatible: MATLAB R2017a y Hekatan Lab modo MATLAB.

if nargin < 5
  kappa_shear = 5/6;
end

G = E / (2 * (1 + nu));

% Constitutiva flexión: M = Db * (chi)
Db = (E * t^3 / (12 * (1 - nu^2))) * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2];
% Constitutiva corte:    Q = Ds * gamma
Ds = G * t * kappa_shear * eye(2);

% --- Flexión: Gauss 2x2 (full) ---
gp = [-1/sqrt(3), 1/sqrt(3)];
ke_b = zeros(12, 12);
for ig = 1:2
  for jg = 1:2
    xi = gp(ig); eta = gp(jg);
    [Bb, ~, detJ] = mindlin_B(xi, eta, ce);
    ke_b = ke_b + transpose(Bb) * Db * Bb * detJ;
  end
end

% --- Corte: 1x1 reducida (xi=eta=0) ---
xi = 0; eta = 0;
[~, Bs, detJ] = mindlin_B(xi, eta, ce);
ke_s = transpose(Bs) * Ds * Bs * detJ * 4;  % weight 2*2 = 4

ke = ke_b + ke_s;
end


function [Bb, Bs, detJ] = mindlin_B(xi, eta, ce)
% Devuelve B_bending y B_shear para un Q4 Mindlin en (xi, eta).
% DOFs por nodo: [w, theta_x, theta_y]

dN_dxi  = 0.25 * [-(1-eta), (1-eta), (1+eta), -(1+eta)];
dN_deta = 0.25 * [-(1-xi),  -(1+xi), (1+xi),   (1-xi)];

J11 = dN_dxi(1)*ce(1,1) + dN_dxi(2)*ce(2,1) + dN_dxi(3)*ce(3,1) + dN_dxi(4)*ce(4,1);
J12 = dN_dxi(1)*ce(1,2) + dN_dxi(2)*ce(2,2) + dN_dxi(3)*ce(3,2) + dN_dxi(4)*ce(4,2);
J21 = dN_deta(1)*ce(1,1) + dN_deta(2)*ce(2,1) + dN_deta(3)*ce(3,1) + dN_deta(4)*ce(4,1);
J22 = dN_deta(1)*ce(1,2) + dN_deta(2)*ce(2,2) + dN_deta(3)*ce(3,2) + dN_deta(4)*ce(4,2);
detJ = J11*J22 - J12*J21;

Ji11 =  J22 / detJ;
Ji12 = -J12 / detJ;
Ji21 = -J21 / detJ;
Ji22 =  J11 / detJ;

dN_dx = zeros(1, 4);
dN_dy = zeros(1, 4);
for k = 1:4
  dN_dx(k) = Ji11 * dN_dxi(k) + Ji12 * dN_deta(k);
  dN_dy(k) = Ji21 * dN_dxi(k) + Ji22 * dN_deta(k);
end

% N (funciones de forma para evaluar w en corte)
N = 0.25 * [(1-xi)*(1-eta), (1+xi)*(1-eta), (1+xi)*(1+eta), (1-xi)*(1+eta)];

% B_bending (3 x 12): chi_xx, chi_yy, 2*chi_xy
%   chi_xx = -d theta_y / dx
%   chi_yy =  d theta_x / dy
%   2 chi_xy = d theta_x / dx - d theta_y / dy
Bb = zeros(3, 12);
for k = 1:4
  col = (k-1)*3;
  Bb(1, col+3) = -dN_dx(k);   % chi_xx en theta_y
  Bb(2, col+2) =  dN_dy(k);   % chi_yy en theta_x
  Bb(3, col+2) =  dN_dx(k);   % 2chi_xy en theta_x
  Bb(3, col+3) = -dN_dy(k);   % 2chi_xy en theta_y
end

% B_shear (2 x 12): gamma_xz, gamma_yz
%   gamma_xz = dw/dx - theta_y
%   gamma_yz = dw/dy + theta_x
Bs = zeros(2, 12);
for k = 1:4
  col = (k-1)*3;
  Bs(1, col+1) = dN_dx(k);    % dw/dx
  Bs(1, col+3) = -N(k);       % -theta_y
  Bs(2, col+1) = dN_dy(k);    % dw/dy
  Bs(2, col+2) =  N(k);       % +theta_x
end
end
