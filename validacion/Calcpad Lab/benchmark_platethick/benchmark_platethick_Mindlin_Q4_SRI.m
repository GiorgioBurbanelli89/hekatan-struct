%% Rectangular Slab FEA — Mindlin-Reissner Q4 (12 DOF/elem, SRI shear)
%-- Benchmark de placa rectangular simply-supported, carga uniforme q.
%-- Teoria Mindlin-Reissner: incluye deformacion por corte transversal
%-- (apropiada para placas medianas-gruesas). Para placas delgadas
%-- (t/a < 1/20) converge al resultado Kirchhoff.
%--
%-- Caso (placa simply-supported con carga uniforme):
%--   a = 6 m   b = 4 m   t = 0.1 m   (t/a = 0.017 → DELGADA)
%--   E = 35 GPa   nu = 0.15   q = 10 kN/m^2
%--
%-- Element: Q4 bilinear, 3 DOF/nodo: w (deflexion), theta_x (rot x), theta_y (rot y)
%-- Bending: B_b (3x12) integrado con Gauss 2x2 (full)
%-- Shear:   B_s (2x12) integrado con Gauss 1x1 (SRI — evita shear locking)
%--
%-- Resultado esperado (placas delgadas, ≈ Kirchhoff BFS):
%--   w_centro ≈ -6.5 a -7.0 mm (slightly mas grande por corte)

clear; clc;

%% Datos de entrada
a = 6        % Dimension en X [m]
b = 4        % Dimension en Y [m]
t = 0.1      % Espesor [m]
q = 10       % Carga uniforme [kN/m^2]
E = 35000    % Modulo elastico [MPa] -> kN/m^2 * 1000
nu = 0.15    % Coef de Poisson
kappa = 5/6  % Factor correccion corte (placas)

E_si = E*1000;   % [kN/m^2]
G = E_si / (2*(1 + nu));   % Modulo corte [kN/m^2]

fprintf('--- Placa Mindlin-Reissner Q4 SRI, q = %g kN/m^2 ---\n', q);
fprintf('t/a = %.4f (delgada si <0.05)\n', t/a);

%% Matriz constitutiva D_b (bending) y D_s (shear)
D11 = E_si*t^3/(12*(1 - nu^2));
D_b = D11 * [1, nu, 0; nu, 1, 0; 0, 0, (1 - nu)/2]   % bending [kN*m]
D_s = kappa*G*t * [1, 0; 0, 1]                        % shear [kN/m]

%% Malla
n_a = 6   % elementos en a
n_b = 4   % elementos en b
n_e = n_a*n_b
n_j = (n_a+1)*(n_b+1)
a_1 = a/n_a
b_1 = b/n_b
n_dof = 3   % w, theta_x, theta_y por nodo
n_ke = 12   % DOFs por elemento (4 nodos x 3 DOFs)
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

%% Cuadratura Gauss 2x2 (bending full) y 1x1 (shear SRI)
%-- Gauss 2-pt en [-1, 1]: ±1/sqrt(3), peso 1 cada uno
gp2 = [-1/sqrt(3); 1/sqrt(3)];
gw2 = [1; 1];

%% K_e Q4 Mindlin-Reissner (12x12) — SRI: bending full, shear reducido
fprintf('Computando K_e (12x12) con SRI...\n');

K_e = zeros(12, 12);

%-- BENDING: Gauss 2x2 full
for ig = 1:2
    for jg = 1:2
        xi = gp2(ig); eta = gp2(jg); w_g = gw2(ig)*gw2(jg);
        Bb = B_bending(xi, eta, a_1, b_1);
        K_e = K_e + Bb' * D_b * Bb * (a_1*b_1/4) * w_g;
    end
end

%-- SHEAR: Gauss 1x1 reducido (en el centroide xi=0, eta=0)
xi = 0; eta = 0; w_g = 4;   % peso del 1-pt en [-1,1]^2 = 4
Bs = B_shear(xi, eta, a_1, b_1);
K_e = K_e + Bs' * D_s * Bs * (a_1*b_1/4) * w_g;

fprintf('K_e calculado. Diagonal:\n');
fprintf('  K_e(1,1) = %g  (DOF w nodo 1)\n', K_e(1,1));
fprintf('  K_e(2,2) = %g  (DOF theta_x nodo 1)\n', K_e(2,2));
fprintf('  K_e(3,3) = %g  (DOF theta_y nodo 1)\n', K_e(3,3));

%% Vector de carga F_e (consistente con N)
F_e = zeros(12, 1);
for ig = 1:2
    for jg = 1:2
        xi = gp2(ig); eta = gp2(jg); w_g = gw2(ig)*gw2(jg);
        N_w = N_deflection(xi, eta);   % 1x4: shape functions para w
        for k = 1:4
            F_e((k-1)*3 + 1) = F_e((k-1)*3 + 1) - q * N_w(k) * (a_1*b_1/4) * w_g;
        end
    end
end

%% Ensamblaje K global y F global
fprintf('\nEnsamblando K (%dx%d) y F (%dx1) ...\n', n_g, n_g, n_g);
tic;
K = zeros(n_g, n_g);
F = zeros(n_g, 1);
for e = 1:n_e
    for ni = 1:4
        ji = e_j(e, ni);
        for nj = 1:4
            jj = e_j(e, nj);
            for di = 1:3
                gi = 3*(ji-1) + di;
                ei = 3*(ni-1) + di;
                for dj = 1:3
                    gj = 3*(jj-1) + dj;
                    ej_dof = 3*(nj-1) + dj;
                    K(gi, gj) = K(gi, gj) + K_e(ei, ej_dof);
                end
            end
        end
        for di = 1:3
            gi = 3*(ji-1) + di;
            ei = 3*(ni-1) + di;
            F(gi) = F(gi) + F_e(ei);
        end
    end
end
fprintf('Ensamblaje %.0f ms\n', toc*1000);

%% Aplicar condiciones de contorno (simply supported soft)
%-- Mindlin SS soft: solo w=0 en los bordes (theta_x, theta_y libres).
%-- Para SS hard: w=0 Y rotacion tangencial = 0, pero soft es el caso
%-- "natural" para placas finitas y converge mejor.
k_s = 1e20;
for i = 1:n_s
    js = s_j(i);
    g_w = 3*(js - 1) + 1;
    K(g_w, g_w) = K(g_w, g_w) + k_s;   % w = 0
end

%% Resolucion
tic; Z = K \ F; t_solve = toc;
fprintf('Solve K\\F: %.0f ms\n', t_solve*1000);

%% Resultados — deflexion central
n_center = (n_a/2)*(n_b + 1) + (n_b/2) + 1;
w_center_mm = Z(n_dof*(n_center-1) + 1) * 1000;
fprintf('\n=== Resultados Mindlin-Reissner ===\n');
fprintf('w_centro     = %.4f mm   (vs Kirchhoff BFS: -6.6353 mm, ref: -6.529)\n', w_center_mm);
fprintf('  → Mindlin incluye corte: deflexion ligeramente mas grande para t/a finito\n');

%% Reconstruir deflexion sobre grilla densa
N_DENSE = 21;
xx = linspace(0, a, n_a*N_DENSE);
yy = linspace(0, b, n_b*N_DENSE);
W = zeros(length(yy), length(xx));
Mx = zeros(length(yy), length(xx));
My = zeros(length(yy), length(xx));
Mxy = zeros(length(yy), length(xx));

for e = 1:n_e
    ia = floor((e-1)/n_b); ib = mod((e-1), n_b);
    Z_e = zeros(12, 1);
    for i = 1:4
        gnode = e_j(e, i);
        for k = 1:3
            Z_e((i-1)*3 + k) = Z(n_dof*(gnode-1) + k);
        end
    end
    x0 = ia*a_1; y0 = ib*b_1;
    for ii = 1:N_DENSE
        for jj = 1:N_DENSE
            xi  = 2*(ii-1)/(N_DENSE-1) - 1;
            eta = 2*(jj-1)/(N_DENSE-1) - 1;
            ix = ia*N_DENSE + ii;  iy = ib*N_DENSE + jj;
            %-- Deflexion w via N (4 shape functions para DOF w)
            Nw = N_deflection(xi, eta);
            w_val = Nw(1)*Z_e(1) + Nw(2)*Z_e(4) + Nw(3)*Z_e(7) + Nw(4)*Z_e(10);
            W(iy, ix) = w_val * 1000;   % [mm]
            %-- Momentos: M = -D_b * Bb * Z_e
            Bb = B_bending(xi, eta, a_1, b_1);
            M_vec = D_b * Bb * Z_e;
            Mx(iy, ix) = -M_vec(1);
            My(iy, ix) = -M_vec(2);
            Mxy(iy, ix) = -M_vec(3);
        end
    end
end

fprintf('Mx_max  = %.4f kNm/m  (ref Kirchhoff: 6.225)\n', max(abs(Mx(:))));
fprintf('My_max  = %.4f kNm/m  (ref Kirchhoff: 12.759)\n', max(abs(My(:))));
fprintf('Mxy_max = %.4f kNm/m  (ref Kirchhoff: 8.380)\n', max(abs(Mxy(:))));

%% Visualizacion — 4 plots con colormap jet
[XX, YY] = meshgrid(xx, yy);
colormap('jet');

figure;
%-- Deflexion: signo real (W negativo, placa se hunde)
subplot(2, 2, 1);
colormap('jet');
surf(XX, YY, W);
xlabel('x [m]'); ylabel('y [m]'); zlabel('w [mm] (deflexion)');
title(sprintf('Mindlin-Reissner — w_{min} = %.3f mm', min(W(:))));
shading('interp');
colorbar;

subplot(2, 2, 2);
colormap('jet');
contourf(XX, YY, Mx, 16);
xlabel('x [m]'); ylabel('y [m]');
title(sprintf('M_x — max |M_x| = %.3f kNm/m', max(abs(Mx(:)))));
colorbar; axis equal;

subplot(2, 2, 3);
colormap('jet');
contourf(XX, YY, My, 16);
xlabel('x [m]'); ylabel('y [m]');
title(sprintf('M_y — max |M_y| = %.3f kNm/m', max(abs(My(:)))));
colorbar; axis equal;

subplot(2, 2, 4);
colormap('jet');
contourf(XX, YY, Mxy, 16);
xlabel('x [m]'); ylabel('y [m]');
title(sprintf('M_{xy} — max |M_{xy}| = %.3f kNm/m', max(abs(Mxy(:)))));
colorbar; axis equal;

%% Comparativa final
fprintf('\n=========== Comparativa Mindlin vs Kirchhoff ===========\n');
fprintf('Parametro         |  Mindlin Q4 SRI |  Kirchhoff BFS  | Calcpad ref\n');
fprintf('--------------------------------------------------------------\n');
fprintf('w_centro [mm]      |   %8.4f      |     -6.6353     |    -6.529\n', w_center_mm);
fprintf('Mx max             |   %8.4f      |      6.2958     |     6.225\n', max(abs(Mx(:))));
fprintf('My max             |   %8.4f      |     12.7494     |    12.759\n', max(abs(My(:))));
fprintf('Mxy max            |   %8.4f      |      8.0305     |     8.380\n', max(abs(Mxy(:))));
fprintf('==============================================================\n');
fprintf('Nota: Mindlin incluye corte transversal — para t/a=%.3f el efecto\n', t/a);
fprintf('      es pequeno (~1-3%%). Para placas gruesas (t/a > 0.1) la\n');
fprintf('      diferencia con Kirchhoff es significativa.\n');

%% =========================================================================
%% Funciones locales — Q4 bilinear shape functions y matrices B
%% =========================================================================

%-- Shape functions Q4 bilineales para w en (xi, eta) ∈ [-1, 1]^2
%-- N_i = 1/4 * (1 ± xi)(1 ± eta) en orden (1,1), (-1,1), (-1,-1), (1,-1)
%-- O canonico (-1,-1), (1,-1), (1,1), (-1,1) — uso este orden:
function N = N_deflection(xi, eta)
    N = [0.25*(1 - xi)*(1 - eta), ...
         0.25*(1 + xi)*(1 - eta), ...
         0.25*(1 + xi)*(1 + eta), ...
         0.25*(1 - xi)*(1 + eta)];
end

%-- dN/dxi para Q4
function dN = dN_dxi(eta)
    dN = [-0.25*(1 - eta),  0.25*(1 - eta),  0.25*(1 + eta), -0.25*(1 + eta)];
end

%-- dN/deta para Q4
function dN = dN_deta(xi)
    dN = [-0.25*(1 - xi), -0.25*(1 + xi),  0.25*(1 + xi),  0.25*(1 - xi)];
end

%-- Matriz B bending (3x12): kappa = [kappa_xx; kappa_yy; 2*kappa_xy] = B_b * d
%-- d = [w1, tx1, ty1, w2, tx2, ty2, w3, tx3, ty3, w4, tx4, ty4]
%-- kappa_xx = -d(theta_x)/dx, kappa_yy = -d(theta_y)/dy, 2*kappa_xy = -(d(theta_x)/dy + d(theta_y)/dx)
%-- Jacobiano: dN/dx = (2/a_1) * dN/dxi, dN/dy = (2/b_1) * dN/deta
function B = B_bending(xi, eta, a_1, b_1)
    dNx = (2/a_1) * dN_dxi(eta);
    dNy = (2/b_1) * dN_deta(xi);
    B = zeros(3, 12);
    for i = 1:4
        col_w  = (i-1)*3 + 1;
        col_tx = (i-1)*3 + 2;
        col_ty = (i-1)*3 + 3;
        %-- kappa_xx = -dtheta_x/dx
        B(1, col_tx) = -dNx(i);
        %-- kappa_yy = -dtheta_y/dy
        B(2, col_ty) = -dNy(i);
        %-- 2*kappa_xy = -(dtheta_x/dy + dtheta_y/dx)
        B(3, col_tx) = -dNy(i);
        B(3, col_ty) = -dNx(i);
    end
end

%-- Matriz B shear (2x12): gamma = [gamma_xz; gamma_yz] = B_s * d
%-- gamma_xz = dw/dx - theta_x
%-- gamma_yz = dw/dy - theta_y
function B = B_shear(xi, eta, a_1, b_1)
    Nw  = N_deflection(xi, eta);
    dNx = (2/a_1) * dN_dxi(eta);
    dNy = (2/b_1) * dN_deta(xi);
    B = zeros(2, 12);
    for i = 1:4
        col_w  = (i-1)*3 + 1;
        col_tx = (i-1)*3 + 2;
        col_ty = (i-1)*3 + 3;
        %-- gamma_xz = dw/dx - theta_x
        B(1, col_w)  =  dNx(i);
        B(1, col_tx) = -Nw(i);
        %-- gamma_yz = dw/dy - theta_y
        B(2, col_w)  =  dNy(i);
        B(2, col_ty) = -Nw(i);
    end
end
