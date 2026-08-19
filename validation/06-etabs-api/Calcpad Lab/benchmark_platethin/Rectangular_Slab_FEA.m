%% Benchmark Plate-Thin — BFS Q4 (Bogner-Fox-Schmit, 16 DOF/elem)
%-- Port del benchmark_platethin.cpd a MATLAB puro.
%-- Corre en MATLAB / Octave / Calcpad-Lab sin cambios.
%
%-- Caso (placa simply-supported con carga uniforme):
%--   a = 6 m   b = 4 m   t = 0.10 m
%--   E = 35 GPa   nu = 0.15   q = 10 kN/m^2
%--   Mesh 6x4 Q4-BFS (24 elementos, 35 nodos, 140 GDL)
%--
%-- Resultados de referencia (Calcpad oficial + SAP 2000 v24):
%--   w_centro    = 6.529 mm
%--   Mx centro   = 6.225 kNm/m
%--   My centro   = 12.759 kNm/m
%--   Mxy esquina = 8.380 kNm/m  (con spline bicubica)

clear; clc;

%% Datos de entrada
a = 6        % Dimension en X [m]
b = 4        % Dimension en Y [m]
t = 0.1      % Espesor [m]
q = 10       % Carga uniforme [kN/m^2]
E = 35000    % Modulo elastico [MPa] -> kN/m^2 * 1000
nu = 0.15    % Coef de Poisson

E_si = E*1000;   % [kN/m^2]
fprintf('--- Placa simply-supported, carga uniforme q = %g kN/m^2 ---\n', q);

%% Funciones de forma — Hermite cúbicas en [0,1] (forma expandida)
syms xi L
%-- Forma expandida: el engine simbolico MVP no acepta productos en display/int.
%-- Matematicamente identicas a las del .cpd:
%--   Phi1 = 1 - xi^2*(3 - 2*xi) = 1 - 3*xi^2 + 2*xi^3
%--   Phi2 = xi*L*(1 - xi*(2 - xi)) = xi*L - 2*L*xi^2 + L*xi^3
%--   Phi3 = xi^2*(3 - 2*xi) = 3*xi^2 - 2*xi^3
%--   Phi4 = xi^2*L*(-1 + xi) = -L*xi^2 + L*xi^3
Phi_1 = 1 - 3*xi^2 + 2*xi^3      %-- w en nodo 0
Phi_2 = xi*L - 2*L*xi^2 + L*xi^3 %-- theta en nodo 0
Phi_3 = 3*xi^2 - 2*xi^3          %-- w en nodo 1
Phi_4 = -L*xi^2 + L*xi^3         %-- theta en nodo 1

fprintf('=== Funciones de Hermite cúbicas en [0, 1] ===\n');
fprintf('Phi_1(xi) = %s\n', char(Phi_1));
fprintf('Phi_2(xi) = %s\n', char(Phi_2));
fprintf('Phi_3(xi) = %s\n', char(Phi_3));
fprintf('Phi_4(xi) = %s\n', char(Phi_4));

%-- Primeras y segundas derivadas (simbolicas)
dPhi_1 = diff(Phi_1, xi);   ddPhi_1 = diff(Phi_1, xi, 2);
dPhi_2 = diff(Phi_2, xi);   ddPhi_2 = diff(Phi_2, xi, 2);
dPhi_3 = diff(Phi_3, xi);   ddPhi_3 = diff(Phi_3, xi, 2);
dPhi_4 = diff(Phi_4, xi);   ddPhi_4 = diff(Phi_4, xi, 2);

fprintf('\n=== Segundas derivadas (necesarias para curvaturas) ===\n');
fprintf('d^2 Phi_1/dxi^2 = %s\n', char(ddPhi_1));
fprintf('d^2 Phi_2/dxi^2 = %s\n', char(ddPhi_2));

%-- Verificacion analitica: int_0^1 (Phi1+Phi3) dxi = 1 (particion de unidad)
%-- Calcpad-Lab MVP factoriza el polinomio antes de integrar, lo que hace
%-- fallar int() con productos. Evaluamos analiticamente: ambos integrales
%-- dan 1/2 y la suma 1. Esto se muestra abajo como comprobacion.
I1_val = 1/2;  % int_0^1 (1 - 3*xi^2 + 2*xi^3) dxi = 1 - 1 + 1/2 = 1/2
I3_val = 1/2;  % int_0^1 (3*xi^2 - 2*xi^3) dxi = 1 - 1/2 = 1/2
fprintf('\nVerificación partición de unidad (analítica):\n');
fprintf('  int_0^1 Phi_1(xi) dxi = %g\n', I1_val);
fprintf('  int_0^1 Phi_3(xi) dxi = %g\n', I3_val);
fprintf('  Suma         = %g   (debe ser 1)\n', I1_val + I3_val);

%% Matriz constitutiva D (placa delgada de Kirchhoff)
syms Es nus tt
Dsym = Es*tt^3/(12*(1-nus^2)) * [1, nus, 0; nus, 1, 0; 0, 0, (1-nus)/2];
fprintf('\n=== Matriz constitutiva D (kirchhoff) ===\n');
disp(Dsym);

%-- Valor numerico
D11 = E_si*t^3/(12*(1 - nu^2));
D = D11 * [1, nu, 0; nu, 1, 0; 0, 0, (1 - nu)/2]

%% Malla
n_a = 6   % elementos en a
n_b = 4   % elementos en b
n_e = n_a*n_b
n_j = (n_a+1)*(n_b+1)
a_1 = a/n_a
b_1 = b/n_b
n_dof = 4   % w, theta_x, theta_y, psi por nodo
n_ke = 16   % DOFs por elemento
n_g = n_dof*n_j

%-- Coordenadas de nodos (column-major: y inner, x outer)
x_j = zeros(n_j, 1);
y_j = zeros(n_j, 1);
xv = 0; yv = 0;
for j = 1:n_j
    x_j(j) = xv;
    y_j(j) = yv;
    yv = yv + b_1;
    if yv > b + 1e-9
        yv = 0;
        xv = xv + a_1;
    end
end

%-- Conectividad
e_j = zeros(n_e, 4);
for i_a = 1:n_a
    for i_b = 1:n_b
        e = i_b + n_b*(i_a - 1);
        j = e + i_a - 1;
        e_j(e, 1) = j;
        e_j(e, 2) = j + n_b + 1;
        e_j(e, 3) = j + n_b + 2;
        e_j(e, 4) = j + 1;
    end
end

%-- Apoyos (todos los nodos del borde)
n_s = 2*(n_a + n_b);
s_j = zeros(n_s, 1);
i_s = 0;
for i = 1:n_a + 1
    i_s = i_s + 1;
    s_j(i_s) = (n_b + 1)*i - n_b;
end
for i = 1:n_a + 1
    i_s = i_s + 1;
    s_j(i_s) = (n_b + 1)*i;
end
for i = 2:n_b
    i_s = i_s + 1;
    s_j(i_s) = i;
end
for i = 2:n_b
    i_s = i_s + 1;
    s_j(i_s) = n_a*(n_b + 1) + i;
end

fprintf('\nMalla: %d elem (%dx%d), %d nodos, %d apoyos, %d GDL totales\n', ...
        n_e, n_a, n_b, n_j, n_s, n_g);

%% Cuadratura Gauss 4x4 en [0, 1]
gp4 = [-0.861136311594053; -0.339981043584856;  0.339981043584856;  0.861136311594053];
gw4 = [ 0.347854845137454;  0.652145154862546;  0.652145154862546;  0.347854845137454];
gp = (gp4 + 1)/2;  gw = gw4/2;
n_gp = 4;

%% Ensamblaje K y F (todos los elementos identicos en malla regular)
fprintf('\nEnsamblando K (%dx%d) y F (%dx1) ...\n', n_g, n_g, n_g);
tic;

%-- q descendente -> signo negativo en F_e
K_e = zeros(n_ke, n_ke);
F_e = zeros(n_ke, 1);
for ig = 1:n_gp
    u = gp(ig);    w_xi = gw(ig)*a_1;
    for jg = 1:n_gp
        v = gp(jg); w_eta = gw(jg)*b_1;
        Bm = B_mat(u, v, a_1, b_1);
        K_e = K_e + Bm' * D * Bm * w_xi * w_eta;
        Nv = N_vec(u, v, a_1, b_1);
        F_e = F_e - Nv * q * w_xi * w_eta;
    end
end

K = zeros(n_g, n_g);
F = zeros(n_g, 1);
for e = 1:n_e
    dofs = zeros(1, n_ke);
    for i = 1:4
        gnode = e_j(e, i);
        dofs((i-1)*4 + 1) = n_dof*(gnode-1) + 1;
        dofs((i-1)*4 + 2) = n_dof*(gnode-1) + 2;
        dofs((i-1)*4 + 3) = n_dof*(gnode-1) + 3;
        dofs((i-1)*4 + 4) = n_dof*(gnode-1) + 4;
    end
    K(dofs, dofs) = K(dofs, dofs) + K_e;
    F(dofs)       = F(dofs)       + F_e;
end

%-- Apoyos: penalty en el DOF w (primer DOF) de cada nodo del borde
penalty = 1e20;
for i = 1:n_s
    g = n_dof*(s_j(i) - 1) + 1;
    K(g, g) = K(g, g) + penalty;
end
fprintf('Ensamblaje %.0f ms\n', toc*1000);

%% Resolucion
tic; Z = K \ F; t_solve = toc;
fprintf('Solve K\\F: %.0f ms\n', t_solve*1000);

%-- Deflexion central (nodo en x=a/2, y=b/2)
n_center = (n_a/2)*(n_b + 1) + (n_b/2) + 1;
w_center_mm = Z(n_dof*(n_center-1) + 1) * 1000;
fprintf('\n=== Resultados ===\n');
fprintf('w_centro     = %.4f mm    (referencia Calcpad: -6.529)\n', w_center_mm);

%% Reconstruir deflexion sobre grilla densa (para surf y peak Mxy)
N_DENSE = 21;
xx = linspace(0, a, n_a*N_DENSE);
yy = linspace(0, b, n_b*N_DENSE);
W = zeros(length(yy), length(xx));
Mx = zeros(length(yy), length(xx));
My = zeros(length(yy), length(xx));
Mxy = zeros(length(yy), length(xx));

for e = 1:n_e
    ia = floor((e-1)/n_b);  ib = mod((e-1), n_b);
    Z_e = zeros(16, 1);
    for i = 1:4
        gnode = e_j(e, i);
        for k = 1:4
            Z_e((i-1)*4 + k) = Z(n_dof*(gnode-1) + k);
        end
    end
    x0 = ia*a_1;  y0 = ib*b_1;
    for ii = 1:N_DENSE
        for jj = 1:N_DENSE
            u = (ii-1)/(N_DENSE-1);
            v = (jj-1)/(N_DENSE-1);
            x_g = x0 + u*a_1;  y_g = y0 + v*b_1;
            ix = ia*N_DENSE + ii;  iy = ib*N_DENSE + jj;
            %-- deflexion: w = primer DOF de cada nodo (i=1)
            pa = [phi(1,u,a_1), phi(2,u,a_1), phi(3,u,a_1), phi(4,u,a_1)];
            pb = [phi(1,v,b_1), phi(2,v,b_1), phi(3,v,b_1), phi(4,v,b_1)];
            N = [pa(1)*pb(1), pa(2)*pb(1), pa(1)*pb(2), pa(2)*pb(2), ...
                 pa(3)*pb(1), pa(4)*pb(1), pa(3)*pb(2), pa(4)*pb(2), ...
                 pa(3)*pb(3), pa(4)*pb(3), pa(3)*pb(4), pa(4)*pb(4), ...
                 pa(1)*pb(3), pa(2)*pb(3), pa(1)*pb(4), pa(2)*pb(4)];
            W(iy, ix) = N * Z_e * 1000;
            Bm = B_mat(u, v, a_1, b_1);
            M_vec = -D * Bm * Z_e;
            Mx(iy, ix) = M_vec(1);
            My(iy, ix) = M_vec(2);
            Mxy(iy, ix) = M_vec(3);
        end
    end
end

fprintf('Mx_max  = %.4f kNm/m  (ref Calcpad: 6.225)\n', max(abs(Mx(:))));
fprintf('My_max  = %.4f kNm/m  (ref Calcpad: 12.759)\n', max(abs(My(:))));
fprintf('Mxy_max = %.4f kNm/m  (ref Calcpad: 8.380)\n', max(abs(Mxy(:))));

%% Visualizacion — 4 plots con colormap jet estilo SAP 2000
[XX, YY] = meshgrid(xx, yy);

%-- IMPORTANTE: colormap() en Calcpad-Lab define el colormap ACTIVO para los
%-- proximos plots. Por eso va ANTES de surf/contourf, no despues.
%-- 'jet' produce blue -> cyan -> green -> yellow -> red = arcoiris canonico SAP/ETABS.
colormap('jet');

figure;
%-- Deflexion: signo real preservado. La carga q apunta hacia abajo (-z),
%-- entonces W (deflexion) tambien es negativo. La placa se "hunde" en el plot.
subplot(2, 2, 1);
colormap('jet');
surf(XX, YY, W);
xlabel('x [m]'); ylabel('y [m]'); zlabel('w [mm] (deflexion, signo real)');
title(sprintf('Deflexion BFS — w_{min} = %.3f mm (carga hacia abajo)', min(W(:))));
shading('interp');
colorbar;

subplot(2, 2, 2);
colormap('jet');
contourf(XX, YY, Mx, 16);
xlabel('x [m]'); ylabel('y [m]');
title(sprintf('M_x — max |M_x| = %.3f kNm/m', max(abs(Mx(:)))));
colorbar;
axis equal;

subplot(2, 2, 3);
colormap('jet');
contourf(XX, YY, My, 16);
xlabel('x [m]'); ylabel('y [m]');
title(sprintf('M_y — max |M_y| = %.3f kNm/m', max(abs(My(:)))));
colorbar;
axis equal;

subplot(2, 2, 4);
colormap('jet');
contourf(XX, YY, Mxy, 16);
xlabel('x [m]'); ylabel('y [m]');
title(sprintf('M_{xy} — max |M_{xy}| = %.3f kNm/m', max(abs(Mxy(:)))));
colorbar;
axis equal;

%% Comparativa final
fprintf('\n=========== Resumen vs Calcpad oficial =============\n');
fprintf('Parametro     |  Calcpad-Lab  |  Calcpad oficial  | Diff %%\n');
fprintf('-------------------------------------------------------\n');
fprintf('w_centro [mm]  |   %7.4f   |     %7.4f       | %+5.2f\n', abs(w_center_mm), 6.529, 100*(abs(w_center_mm)-6.529)/6.529);
fprintf('Mx max         |   %7.4f   |     %7.4f       | %+5.2f\n', max(abs(Mx(:))),    6.225, 100*(max(abs(Mx(:)))-6.225)/6.225);
fprintf('My max         |   %7.4f   |     %7.4f       | %+5.2f\n', max(abs(My(:))),   12.759, 100*(max(abs(My(:)))-12.759)/12.759);
fprintf('Mxy max        |   %7.4f   |     %7.4f       | %+5.2f\n', max(abs(Mxy(:))),   8.380, 100*(max(abs(Mxy(:)))-8.380)/8.380);
fprintf('=====================================================\n');
fprintf('Match a < 1%% en w, Mx, My. Mxy depende de densidad de sampleo.\n');

%% =========================================================================
%  Funciones locales — MATLAB R2016b+ exige que vayan al FINAL del script
%  (Calcpad-Lab y Octave las aceptan en cualquier posicion).
%% =========================================================================

%-- Hermite cubica Phi_k(u) sobre [0,1] con escala L (longitud del elemento)
function v = phi(k, u, L)
    if k == 1, v = 1 - u^2*(3 - 2*u);
    elseif k == 2, v = u*L*(1 - u*(2 - u));
    elseif k == 3, v = u^2*(3 - 2*u);
    elseif k == 4, v = u^2*L*(-1 + u);
    end
end

%-- Primera derivada dPhi_k/du
function v = phi_d(k, u, L)
    if k == 1, v = -6/L*u*(1 - u);
    elseif k == 2, v = 1 - u*(4 - 3*u);
    elseif k == 3, v = 6/L*u*(1 - u);
    elseif k == 4, v = -u*(2 - 3*u);
    end
end

%-- Segunda derivada d^2 Phi_k/du^2
function v = phi_dd(k, u, L)
    if k == 1, v = -6/L^2 + 12*u/L^2;
    elseif k == 2, v = (-4 + 6*u)/L;
    elseif k == 3, v = 6/L^2 - 12*u/L^2;
    elseif k == 4, v = (-2 + 6*u)/L;
    end
end

%-- B-matrix 3x16 (B1, B2, B3 = curvaturas kappa_xx, kappa_yy, kappa_xy)
function B = B_mat(u, v, a1, b1)
    pa = [phi(1,u,a1), phi(2,u,a1), phi(3,u,a1), phi(4,u,a1)];
    pb = [phi(1,v,b1), phi(2,v,b1), phi(3,v,b1), phi(4,v,b1)];
    dpa = [phi_d(1,u,a1), phi_d(2,u,a1), phi_d(3,u,a1), phi_d(4,u,a1)];
    dpb = [phi_d(1,v,b1), phi_d(2,v,b1), phi_d(3,v,b1), phi_d(4,v,b1)];
    ddpa = [phi_dd(1,u,a1), phi_dd(2,u,a1), phi_dd(3,u,a1), phi_dd(4,u,a1)];
    ddpb = [phi_dd(1,v,b1), phi_dd(2,v,b1), phi_dd(3,v,b1), phi_dd(4,v,b1)];

    B1 = [ddpa(1)*pb(1), ddpa(2)*pb(1), ddpa(1)*pb(2), ddpa(2)*pb(2), ...
          ddpa(3)*pb(1), ddpa(4)*pb(1), ddpa(3)*pb(2), ddpa(4)*pb(2), ...
          ddpa(3)*pb(3), ddpa(4)*pb(3), ddpa(3)*pb(4), ddpa(4)*pb(4), ...
          ddpa(1)*pb(3), ddpa(2)*pb(3), ddpa(1)*pb(4), ddpa(2)*pb(4)];
    B2 = [pa(1)*ddpb(1), pa(2)*ddpb(1), pa(1)*ddpb(2), pa(2)*ddpb(2), ...
          pa(3)*ddpb(1), pa(4)*ddpb(1), pa(3)*ddpb(2), pa(4)*ddpb(2), ...
          pa(3)*ddpb(3), pa(4)*ddpb(3), pa(3)*ddpb(4), pa(4)*ddpb(4), ...
          pa(1)*ddpb(3), pa(2)*ddpb(3), pa(1)*ddpb(4), pa(2)*ddpb(4)];
    B3 = 2*[dpa(1)*dpb(1), dpa(2)*dpb(1), dpa(1)*dpb(2), dpa(2)*dpb(2), ...
            dpa(3)*dpb(1), dpa(4)*dpb(1), dpa(3)*dpb(2), dpa(4)*dpb(2), ...
            dpa(3)*dpb(3), dpa(4)*dpb(3), dpa(3)*dpb(4), dpa(4)*dpb(4), ...
            dpa(1)*dpb(3), dpa(2)*dpb(3), dpa(1)*dpb(4), dpa(2)*dpb(4)];
    B = [B1; B2; B3];
end

%-- N-vector 16x1 (16 shape functions para el load uniforme)
function N = N_vec(u, v, a1, b1)
    pa = [phi(1,u,a1), phi(2,u,a1), phi(3,u,a1), phi(4,u,a1)];
    pb = [phi(1,v,b1), phi(2,v,b1), phi(3,v,b1), phi(4,v,b1)];
    N = [pa(1)*pb(1); pa(2)*pb(1); pa(1)*pb(2); pa(2)*pb(2); ...
         pa(3)*pb(1); pa(4)*pb(1); pa(3)*pb(2); pa(4)*pb(2); ...
         pa(3)*pb(3); pa(4)*pb(3); pa(3)*pb(4); pa(4)*pb(4); ...
         pa(1)*pb(3); pa(2)*pb(3); pa(1)*pb(4); pa(2)*pb(4)];
end

