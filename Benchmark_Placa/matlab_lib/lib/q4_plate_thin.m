function ke = q4_plate_thin(E, nu, t, ce)
% q4_plate_thin  Matriz de rigidez Q4 placa Kirchhoff (CPT, thin)
%   ke = q4_plate_thin(E, nu, t, ce)
%
% Implementación: usamos Mindlin-Reissner Q4 con integración selectiva 2x2/1x1
% (selective reduced integration). Para t/L pequeño (<<1/20), Mindlin Q4
% converge a Kirchhoff a precisión numérica — es la aproximación estándar
% y robusta, evitando los problemas conocidos del MZC Q4 puro (mallas no
% rectangulares dan resultados pobres).
%
% Si necesitas Kirchhoff PURO con elementos no rectangulares, considera:
%   - DKQ (Discrete Kirchhoff Quadrilateral) — más robusto pero ~150 líneas
%   - BFS (Bogner-Fox-Schmit) Hermite C1 — alta precisión pero 16 DOFs/elem
%
% Parámetros:
%   E, nu : material
%   t     : espesor (m)
%   ce    : 4x2 coords (x, y) en CCW
%
% Salida:
%   ke    : 12x12 con DOFs [w, theta_x, theta_y] por nodo
%
% Compatible MATLAB R2017a + Hekatan Lab modo MATLAB.

% Mindlin con shear correction estándar 5/6 — para t/L pequeño converge
% a Kirchhoff sin shear locking gracias a la integración reducida.
ke = q4_plate_thick(E, nu, t, ce, 5/6);
end
