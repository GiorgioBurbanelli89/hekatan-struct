function ke = q4_membrane(E, nu, t, ce)
% q4_membrane  Matriz de rigidez Q4 plane stress (membrana 2D)
%   ke = q4_membrane(E, nu, t, ce)
%
% Uso típico: muros corte (shear walls) en su plano, decks en su plano,
% cualquier elemento que solo trabaja membrana (sin flexión out-of-plane).
%
% Parámetros:
%   E   : módulo de elasticidad (kN/m^2 o tonf/m^2 según el sistema)
%   nu  : Poisson
%   t   : espesor del shell (m)
%   ce  : 4x2 con coordenadas (x, z) o (x, y) de los 4 nodos en orden CCW
%
% Salida:
%   ke  : 8x8 matriz de rigidez en coords locales del elemento
%         DOFs por nodo: [u, v]  (in-plane)
%
% Integración: Gauss 2x2.
% Compatible: MATLAB R2017a y Hekatan Lab modo MATLAB.

D = (E / (1 - nu^2)) * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2];

ke = zeros(8, 8);
gp = [-1/sqrt(3), 1/sqrt(3)];   % puntos de Gauss 2x2

for ig = 1:2
  for jg = 1:2
    xi  = gp(ig);
    eta = gp(jg);

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

    B = zeros(3, 8);
    for k = 1:4
      B(1, 2*k-1) = dN_dx(k);
      B(2, 2*k)   = dN_dy(k);
      B(3, 2*k-1) = dN_dy(k);
      B(3, 2*k)   = dN_dx(k);
    end

    ke = ke + transpose(B) * D * B * detJ * t;
  end
end
end
