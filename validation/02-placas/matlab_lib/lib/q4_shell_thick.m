function ke = q4_shell_thick(E, nu, t, ce, kappa_shear)
% q4_shell_thick  Matriz de rigidez Q4 SHELL Mindlin-Reissner (membrana + flexión + corte)
%   ke = q4_shell_thick(E, nu, t, ce)
%   ke = q4_shell_thick(E, nu, t, ce, kappa_shear)  (default 5/6)
%
% Uso típico: muros y losas GRUESAS donde t/L >= 1/20. Equivale a ETABS
% "ShellThick" — Mindlin-Reissner FSDT para flexión + plane stress para membrana.
%
% Parámetros:
%   E, nu       : material
%   t           : espesor (m)
%   ce          : 4x2 coords en plano local (CCW)
%   kappa_shear : factor de corte (default 5/6)
%
% Salida:
%   ke   : 24x24 con DOFs [u,v,w,thx,thy,thz] por nodo
%
% Compatible: MATLAB R2017a y Hekatan Lab modo MATLAB.

if nargin < 5
  kappa_shear = 5/6;
end

% --- Membrana ---
ke_m = q4_membrane(E, nu, t, ce);

% --- Flexión + corte Mindlin (out-of-plane) ---
ke_b = q4_plate_thick(E, nu, t, ce, kappa_shear);

% --- Drilling stiffness ---
alphaDrill = 1e-3;
k_drill_diag = alphaDrill * max(abs(diag(ke_m)));

% --- Ensamblar 24x24 con DOFs [u,v,w,thx,thy,thz] por nodo ---
ke = zeros(24, 24);
for k = 1:4
  for j = 1:4
    rowM = (k-1)*2;  rowG = (k-1)*6;
    colM = (j-1)*2;  colG = (j-1)*6;
    ke(rowG+1, colG+1) = ke(rowG+1, colG+1) + ke_m(rowM+1, colM+1);
    ke(rowG+1, colG+2) = ke(rowG+1, colG+2) + ke_m(rowM+1, colM+2);
    ke(rowG+2, colG+1) = ke(rowG+2, colG+1) + ke_m(rowM+2, colM+1);
    ke(rowG+2, colG+2) = ke(rowG+2, colG+2) + ke_m(rowM+2, colM+2);
    rowB = (k-1)*3;  rowG2 = (k-1)*6 + 2;
    colB = (j-1)*3;  colG2 = (j-1)*6 + 2;
    for ii = 1:3
      for jj = 1:3
        ke(rowG2+ii, colG2+jj) = ke(rowG2+ii, colG2+jj) + ke_b(rowB+ii, colB+jj);
      end
    end
  end
  ke((k-1)*6+6, (k-1)*6+6) = k_drill_diag;
end
end
