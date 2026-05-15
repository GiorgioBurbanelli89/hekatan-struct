% =========================================================================
% Rectangular Slab FEA — port de Calcpad oficial → Calcpad-Lab
% =========================================================================
% Equivalente MATLAB del ejemplo:
%   Calcpad-oficial/Examples/Mechanics/Finite Elements/Rectangular Slab FEA.cpd
%
% Geometría:   placa rectangular a × b × t con 4 lados simplemente apoyados
% Carga:       q (uniforme) sobre toda la placa
% Elemento:    Kirchhoff Q4-BFS con n=16 GDL por elemento
%              (4 nodos × 4 GDL: w, θ_x, θ_y, ψ)
% Solver:      penalty method para apoyos + Cholesky banded
% =========================================================================
t_total = tic;

%% Datos de entrada
a  = 6                % m  — dimensión x de la losa
b  = 4                % m  — dimensión y de la losa
t  = 0.1              % m  — espesor
q  = 10               % kN/m² — carga uniforme
E  = 35e6             % kN/m² (35000 MPa)
nu = 0.15

%% Malla
n_a = 6
n_b = 4
n_e = n_a*n_b
n_j = (n_a+1)*(n_b+1)
n_dof = 4
n_k = n_dof*4                 % = 16
a_1 = a/n_a
b_1 = b/n_b
n_g = n_dof*n_j               % GDL totales

% Coordenadas de nodos: numeración j = i_b + (n_b+1)*(i_a-1) + 1
% (recorre primero y luego x, igual que el .cpd original)
x_j = zeros(n_j, 1);
y_j = zeros(n_j, 1);
x = 0;
y = 0;
for j = 1:n_j
    x_j(j) = x;
    y_j(j) = y;
    y = y + b_1;
    if y > b + 1e-9
        y = 0;
        x = x + a_1;
    end
end

% Conectividad elementos (orden CCW: 1=BL, 2=BR, 3=TR, 4=TL)
e_j = zeros(n_e, 4);
for ia = 1:n_a
    for ib = 1:n_b
        e = ib + n_b*(ia-1);
        j_corner = e + ia - 1;
        e_j(e, 1) = j_corner;
        e_j(e, 2) = j_corner + n_b + 1;
        e_j(e, 3) = j_corner + n_b + 2;
        e_j(e, 4) = j_corner + 1;
    end
end

%% Nodos apoyados (perímetro)
% Lados y=0 e y=b (en x = i*a_1) y lados x=0 / x=a interiores
n_s = 2*(n_a + n_b)
s_j = zeros(n_s, 1);
i_s = 0;
% Lado y = 0: j = (n_b+1)*i - n_b, i = 1..n_a+1
for i = 1:n_a+1
    j = (n_b+1)*i - n_b;
    i_s = i_s + 1;
    s_j(i_s) = j;
end
% Lado y = b: j = (n_b+1)*i, i = 1..n_a+1
for i = 1:n_a+1
    j = (n_b+1)*i;
    i_s = i_s + 1;
    s_j(i_s) = j;
end
% Lado x = 0: j = i, i = 2..n_b (interior)
for i = 2:n_b
    j = i;
    i_s = i_s + 1;
    s_j(i_s) = j;
end
% Lado x = a: j = n_a*(n_b+1) + i, i = 2..n_b
for i = 2:n_b
    j = n_a*(n_b+1) + i;
    i_s = i_s + 1;
    s_j(i_s) = j;
end

%% Matriz constitutiva D (placa Kirchhoff)
D11 = E*t^3/(12*(1-nu^2))
D = D11 * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2]

%% Cuadratura Gauss-Legendre 4×4 en [0,1] (mismo orden que el .cpd)
gp = [0.0694318442029737, 0.3300094782075719, 0.6699905217924281, 0.9305681557970263];
gw = [0.1739274225687269, 0.3260725774312731, 0.3260725774312731, 0.1739274225687269];

%% K_e y F_e (iguales en todos los elementos — malla regular)
K_e = zeros(n_k, n_k);
F_e = zeros(n_k, 1);
for ig = 1:4
    for jg = 1:4
        xi = gp(ig); eta = gp(jg); wgt = gw(ig)*gw(jg);
        % Hermite cubic shape functions a lo largo de xi (longitud a_1)
        P1a = 1 - xi^2*(3 - 2*xi);
        P2a = xi*a_1*(1 - xi*(2 - xi));
        P3a = xi^2*(3 - 2*xi);
        P4a = xi^2*a_1*(xi - 1);
        Pd1a = -6*(xi/a_1)*(1 - xi);
        Pd2a = 1 - xi*(4 - 3*xi);
        Pd3a =  6*(xi/a_1)*(1 - xi);
        Pd4a = -xi*(2 - 3*xi);
        Pdd1a = -(6/a_1^2)*(1 - 2*xi);
        Pdd2a = -(2/a_1)*(2 - 3*xi);
        Pdd3a =  (6/a_1^2)*(1 - 2*xi);
        Pdd4a = -(2/a_1)*(1 - 3*xi);
        % Hermite cubic shape functions a lo largo de eta (longitud b_1)
        P1b = 1 - eta^2*(3 - 2*eta);
        P2b = eta*b_1*(1 - eta*(2 - eta));
        P3b = eta^2*(3 - 2*eta);
        P4b = eta^2*b_1*(eta - 1);
        Pd1b = -6*(eta/b_1)*(1 - eta);
        Pd2b = 1 - eta*(4 - 3*eta);
        Pd3b =  6*(eta/b_1)*(1 - eta);
        Pd4b = -eta*(2 - 3*eta);
        Pdd1b = -(6/b_1^2)*(1 - 2*eta);
        Pdd2b = -(2/b_1)*(2 - 3*eta);
        Pdd3b =  (6/b_1^2)*(1 - 2*eta);
        Pdd4b = -(2/b_1)*(1 - 3*eta);
        % Filas B: curvaturas k_x = -d²w/dx², k_y = -d²w/dy², k_xy = -2·d²w/dxdy
        B1 = [Pdd1a*P1b, Pdd2a*P1b, Pdd1a*P2b, Pdd2a*P2b, ...
              Pdd3a*P1b, Pdd4a*P1b, Pdd3a*P2b, Pdd4a*P2b, ...
              Pdd3a*P3b, Pdd4a*P3b, Pdd3a*P4b, Pdd4a*P4b, ...
              Pdd1a*P3b, Pdd2a*P3b, Pdd1a*P4b, Pdd2a*P4b];
        B2 = [P1a*Pdd1b, P2a*Pdd1b, P1a*Pdd2b, P2a*Pdd2b, ...
              P3a*Pdd1b, P4a*Pdd1b, P3a*Pdd2b, P4a*Pdd2b, ...
              P3a*Pdd3b, P4a*Pdd3b, P3a*Pdd4b, P4a*Pdd4b, ...
              P1a*Pdd3b, P2a*Pdd3b, P1a*Pdd4b, P2a*Pdd4b];
        B3 = 2*[Pd1a*Pd1b, Pd2a*Pd1b, Pd1a*Pd2b, Pd2a*Pd2b, ...
                Pd3a*Pd1b, Pd4a*Pd1b, Pd3a*Pd2b, Pd4a*Pd2b, ...
                Pd3a*Pd3b, Pd4a*Pd3b, Pd3a*Pd4b, Pd4a*Pd4b, ...
                Pd1a*Pd3b, Pd2a*Pd3b, Pd1a*Pd4b, Pd2a*Pd4b];
        B = [B1; B2; B3];
        K_e = K_e + (B')*D*B * a_1*b_1*wgt;
        % Funciones de forma N (16 entries — mismo orden que B)
        N = [P1a*P1b, P2a*P1b, P1a*P2b, P2a*P2b, ...
             P3a*P1b, P4a*P1b, P3a*P2b, P4a*P2b, ...
             P3a*P3b, P4a*P3b, P3a*P4b, P4a*P4b, ...
             P1a*P3b, P2a*P3b, P1a*P4b, P2a*P4b];
        F_e = F_e + (N')*q*a_1*b_1*wgt;
    end
end

%% Ensamblaje global
K = zeros(n_g, n_g);
F = zeros(n_g, 1);
for e = 1:n_e
    gdl_e = zeros(n_k, 1);
    for i = 1:4
        gi = e_j(e, i);
        for ii = 1:n_dof
            gdl_e(n_dof*(i-1)+ii) = n_dof*(gi-1) + ii;
        end
    end
    K(gdl_e, gdl_e) = K(gdl_e, gdl_e) + K_e;
    F(gdl_e) = F(gdl_e) + F_e;
end

%% Condiciones de borde: penalty method (k_s = 1e20) sobre los apoyos
% Restringe w (GDL 1 de cada nodo) en todos los nodos apoyados.
% Además, si el nodo está en y=0 o y=b → restringe θ_x (GDL 2).
% Si el nodo está en x=0 o x=a → restringe θ_y (GDL 3).
% (No restringe ψ — tema clásico de Kirchhoff Q4-BFS con apoyos simples.)
k_s = 1e20;
for i = 1:n_s
    j_n = s_j(i);
    g = n_dof*(j_n - 1) + 1;
    K(g, g) = K(g, g) + k_s;       % w restringido
    if y_j(j_n) <= 1e-9 || y_j(j_n) >= b - 1e-9
        K(g+1, g+1) = K(g+1, g+1) + k_s;   % θ_x restringido en y=0,b
    end
    if x_j(j_n) <= 1e-9 || x_j(j_n) >= a - 1e-9
        K(g+2, g+2) = K(g+2, g+2) + k_s;   % θ_y restringido en x=0,a
    end
end

%% Solve
Z = K \ F;

%% Postproceso: extraer w por nodo + máximo en el centro
w_nodo = zeros(n_j, 1);
for j = 1:n_j
    w_nodo(j) = Z(n_dof*(j-1)+1);
end
w_nodo_mm = w_nodo * 1000;

% Nodo central (a/2, b/2) — para malla 6×4: i=4 (x=3m), k=3 (y=2m), j=(4-1)*5+3=18
j_centro = round(n_a/2)*(n_b+1) + round(n_b/2) + 1;
w_centro_mm = w_nodo_mm(j_centro)

%% Postproceso momentos (en cada nodo, promediando los elementos vecinos)
M_j = zeros(3, n_j);    % filas: Mx, My, Mxy
c_j = zeros(n_j, 1);    % contador de elementos por nodo (para promediar)
for e = 1:n_e
    % Coordenadas del nodo 1 del elemento (esquina BL)
    j_1 = e_j(e, 1);
    % GDL del elemento (16 vector)
    Z_e = zeros(n_k, 1);
    for i = 1:4
        gi = e_j(e, i);
        for ii = 1:n_dof
            Z_e(n_dof*(i-1)+ii) = Z(n_dof*(gi-1) + ii);
        end
    end
    % Evaluar B(xi, eta) en cada nodo del elemento (esquinas xi=0/1, eta=0/1)
    for i = 1:4
        if i == 1, xi = 0; eta = 0;
        elseif i == 2, xi = 1; eta = 0;
        elseif i == 3, xi = 1; eta = 1;
        else, xi = 0; eta = 1;
        end
        % B en (xi, eta)
        P1a = 1 - xi^2*(3-2*xi);  P2a = xi*a_1*(1-xi*(2-xi));
        P3a = xi^2*(3-2*xi);      P4a = xi^2*a_1*(xi-1);
        Pdd1a = -(6/a_1^2)*(1-2*xi); Pdd2a = -(2/a_1)*(2-3*xi);
        Pdd3a =  (6/a_1^2)*(1-2*xi); Pdd4a = -(2/a_1)*(1-3*xi);
        Pd1a = -6*(xi/a_1)*(1-xi);   Pd2a = 1 - xi*(4-3*xi);
        Pd3a =  6*(xi/a_1)*(1-xi);   Pd4a = -xi*(2-3*xi);
        P1b = 1 - eta^2*(3-2*eta);  P2b = eta*b_1*(1-eta*(2-eta));
        P3b = eta^2*(3-2*eta);      P4b = eta^2*b_1*(eta-1);
        Pdd1b = -(6/b_1^2)*(1-2*eta); Pdd2b = -(2/b_1)*(2-3*eta);
        Pdd3b =  (6/b_1^2)*(1-2*eta); Pdd4b = -(2/b_1)*(1-3*eta);
        Pd1b = -6*(eta/b_1)*(1-eta);  Pd2b = 1 - eta*(4-3*eta);
        Pd3b =  6*(eta/b_1)*(1-eta);  Pd4b = -eta*(2-3*eta);
        B1 = [Pdd1a*P1b, Pdd2a*P1b, Pdd1a*P2b, Pdd2a*P2b, Pdd3a*P1b, Pdd4a*P1b, Pdd3a*P2b, Pdd4a*P2b, Pdd3a*P3b, Pdd4a*P3b, Pdd3a*P4b, Pdd4a*P4b, Pdd1a*P3b, Pdd2a*P3b, Pdd1a*P4b, Pdd2a*P4b];
        B2 = [P1a*Pdd1b, P2a*Pdd1b, P1a*Pdd2b, P2a*Pdd2b, P3a*Pdd1b, P4a*Pdd1b, P3a*Pdd2b, P4a*Pdd2b, P3a*Pdd3b, P4a*Pdd3b, P3a*Pdd4b, P4a*Pdd4b, P1a*Pdd3b, P2a*Pdd3b, P1a*Pdd4b, P2a*Pdd4b];
        B3 = 2*[Pd1a*Pd1b, Pd2a*Pd1b, Pd1a*Pd2b, Pd2a*Pd2b, Pd3a*Pd1b, Pd4a*Pd1b, Pd3a*Pd2b, Pd4a*Pd2b, Pd3a*Pd3b, Pd4a*Pd3b, Pd3a*Pd4b, Pd4a*Pd4b, Pd1a*Pd3b, Pd2a*Pd3b, Pd1a*Pd4b, Pd2a*Pd4b];
        Bmat = [B1; B2; B3];
        M_local = -D * Bmat * Z_e;          % M = -D·B·Z (signo convención .cpd)
        j_nod = e_j(e, i);
        M_j(1, j_nod) = M_j(1, j_nod) + M_local(1);
        M_j(2, j_nod) = M_j(2, j_nod) + M_local(2);
        M_j(3, j_nod) = M_j(3, j_nod) + M_local(3);
        c_j(j_nod) = c_j(j_nod) + 1;
    end
end
for j = 1:n_j
    if c_j(j) > 0
        M_j(1, j) = M_j(1, j) / c_j(j);
        M_j(2, j) = M_j(2, j) / c_j(j);
        M_j(3, j) = M_j(3, j) / c_j(j);
    end
end

% Reorganizar a grilla Mx(i,k), My(i,k), Mxy(i,k) — i en x, k en y
Mx_grid = zeros(n_a+1, n_b+1);
My_grid = zeros(n_a+1, n_b+1);
Mxy_grid = zeros(n_a+1, n_b+1);
for i = 1:n_a+1
    for k = 1:n_b+1
        j = (i-1)*(n_b+1) + k;
        Mx_grid(i, k) = M_j(1, j);
        My_grid(i, k) = M_j(2, j);
        Mxy_grid(i, k) = M_j(3, j);
    end
end

% Valores máximos / centrales
Mx_centro = Mx_grid(round(n_a/2)+1, round(n_b/2)+1)
My_centro = My_grid(round(n_a/2)+1, round(n_b/2)+1)
Mxy_esquina = Mxy_grid(1, 1)

%% Reporte
fprintf('══════════════════════════════════════════════════════════\n')
fprintf('  Rectangular Slab FEA — port Calcpad oficial → Calcpad-Lab\n')
fprintf('══════════════════════════════════════════════════════════\n')
fprintf('  Geometría     : a=%.1f m × b=%.1f m × t=%.3f m\n', a, b, t)
fprintf('  Material      : E=%.0f MPa, ν=%.2f\n', E/1000, nu)
fprintf('  Carga         : q=%.2f kN/m²\n', q)
fprintf('  Malla         : %d × %d Q4 (%d nodos, %d GDL totales)\n', n_a, n_b, n_j, n_g)
fprintf('  Apoyos        : %d nodos perimetrales (simply-supported)\n', n_s)
fprintf('  ──────────────────────────────────────────────────────────\n')
fprintf('  w_centro      : %+.3f mm  (a/2, b/2)\n', w_centro_mm)
fprintf('  w_max         : %+.3f mm\n', max(abs(w_nodo_mm)))
fprintf('  M_x centro    : %+.3f kNm/m\n', Mx_centro)
fprintf('  M_y centro    : %+.3f kNm/m\n', My_centro)
fprintf('  M_xy esquina  : %+.3f kNm/m\n', Mxy_esquina)
fprintf('  ──────────────────────────────────────────────────────────\n')
fprintf('  Tiempo total  : %.3f s\n', toc(t_total))
fprintf('══════════════════════════════════════════════════════════\n')

%% Visualización
%% Fig 1: Deflexión w en planta (contorno)
figure
T = zeros(2*n_e, 3);
for e = 1:n_e
    T(2*e-1, 1) = e_j(e, 1); T(2*e-1, 2) = e_j(e, 2); T(2*e-1, 3) = e_j(e, 3);
    T(2*e, 1)   = e_j(e, 1); T(2*e, 2)   = e_j(e, 3); T(2*e, 3)   = e_j(e, 4);
end
V = [x_j, y_j];
patch('Faces', T, 'Vertices', V, 'FaceVertexCData', w_nodo_mm, ...
      'FaceColor', 'interp', 'EdgeColor', 'none')
title(sprintf('Deflexión w [mm] — w_{centro}=%.3f mm', w_centro_mm))
xlabel('x [m]')
ylabel('y [m]')
colorbar

%% Fig 2: Momento Mx
figure
patch('Faces', T, 'Vertices', V, 'FaceVertexCData', M_j(1,:)', ...
      'FaceColor', 'interp', 'EdgeColor', 'none')
title(sprintf('Momento M_x [kNm/m] — M_x centro=%.3f', Mx_centro))
xlabel('x [m]')
ylabel('y [m]')
colorbar

%% Fig 3: Momento My
figure
patch('Faces', T, 'Vertices', V, 'FaceVertexCData', M_j(2,:)', ...
      'FaceColor', 'interp', 'EdgeColor', 'none')
title(sprintf('Momento M_y [kNm/m] — M_y centro=%.3f', My_centro))
xlabel('x [m]')
ylabel('y [m]')
colorbar

%% Fig 4: Momento Mxy
figure
patch('Faces', T, 'Vertices', V, 'FaceVertexCData', M_j(3,:)', ...
      'FaceColor', 'interp', 'EdgeColor', 'none')
title(sprintf('Momento M_{xy} [kNm/m] — M_{xy} esquina=%.3f', Mxy_esquina))
xlabel('x [m]')
ylabel('y [m]')
colorbar

%% Fig 5: Deflexión 3D
figure
trisurf(T, x_j, y_j, w_nodo_mm, w_nodo_mm);
title(sprintf('Deflexión 3D — w_{centro}=%.3f mm', w_centro_mm))
xlabel('x [m]')
ylabel('y [m]')
zlabel('w [mm]')

fprintf('Done — visualización con 5 figuras.\n')
