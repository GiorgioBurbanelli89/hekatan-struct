%% ════════════════════════════════════════════════════════════════
%  PLATE THICK — Verification script (MATLAB R2017a compatible)
%
%  Reproduce el template "FE03 — Placa gruesa Q4 (Mindlin-Reissner)"
%  de HekatanLab Web (modo MATLAB).
%
%  - Formulación: Mindlin-Reissner con integración selectiva
%    (2x2 bending + 1x1 shear)
%  - Geometría: placa cuadrada 1x1x0.25 (t/a = 0.25, gruesa)
%  - Material: E=30000, nu=0.2, kappa=5/6
%  - Carga: q = 1.0 uniforme
%  - BC: simply-supported (w=0 en bordes)
%  - Malla: 4x4 Q4
%  - Referencia: Reissner-Timoshenko (bending Navier + shear correction)
%
%  USO:
%    >> plate_thick_verify
%% ════════════════════════════════════════════════════════════════

clear; clc;

%% Parámetros (idénticos al template FE03)
nx_m = 4;   ny_m = 4;
W_m  = 1.0; H_m  = 1.0;
t_m  = 0.25;
E_m  = 30000;
nu_m = 0.2;
q    = 1.0;
kapa = 5/6;

dx_m  = W_m/nx_m;
dy_m  = H_m/ny_m;
nj_m  = (nx_m+1)*(ny_m+1);
n_dof = 3;
n_tot = n_dof*nj_m;

Dc_m = E_m*t_m^3 / (12*(1 - nu_m^2));
Db_m = Dc_m * [1, nu_m, 0; nu_m, 1, 0; 0, 0, (1-nu_m)/2];
G_m  = E_m / (2*(1+nu_m));
Ds_m = kapa * G_m * t_m * [1, 0; 0, 1];

fprintf('Placa SS Mindlin GRUESA: %.2fx%.2f, t=%.3f (t/a=%.2f)\n', ...
        W_m, H_m, t_m, t_m/W_m);

%% Coords + conectividad
nds_m = zeros(nj_m, 2);
for jj = 0:ny_m
    for ii = 0:nx_m
        k = jj*(nx_m+1) + ii + 1;
        nds_m(k,1) = ii*dx_m;
        nds_m(k,2) = jj*dy_m;
    end
end
ne_m  = nx_m*ny_m;
els_m = zeros(ne_m, 4);
for jj = 0:ny_m-1
    for ii = 0:nx_m-1
        e  = jj*nx_m + ii + 1;
        bl = jj*(nx_m+1) + ii + 1;
        els_m(e,1) = bl;
        els_m(e,2) = bl + 1;
        els_m(e,3) = bl + (nx_m+1) + 1;
        els_m(e,4) = bl + (nx_m+1);
    end
end

%% Ke selective integration
J11_m  = dx_m/2;  J22_m = dy_m/2;
detJ_m = J11_m*J22_m;
g      = 1/sqrt(3);
gp2    = [-g,-g; g,-g; g,g; -g,g];
Ke_m   = zeros(12, 12);

% Bending 2x2
for ig = 1:4
    xi = gp2(ig,1); eta = gp2(ig,2);
    dNxi  = [-(1-eta)/4,  (1-eta)/4, (1+eta)/4, -(1+eta)/4];
    dNeta = [-(1-xi)/4,  -(1+xi)/4,  (1+xi)/4,  (1-xi)/4];
    dNxm = dNxi / J11_m;  dNym = dNeta / J22_m;
    Bb_e = zeros(3, 12);
    for i = 1:4
        Bb_e(1, 3*i)   =  dNxm(i);
        Bb_e(2, 3*i-1) = -dNym(i);
        Bb_e(3, 3*i-1) = -dNxm(i);
        Bb_e(3, 3*i)   =  dNym(i);
    end
    Ke_m = Ke_m + transpose(Bb_e) * Db_m * Bb_e * detJ_m;
end

% Shear 1x1
xi = 0; eta = 0;
dNxi  = [-(1-eta)/4,  (1-eta)/4, (1+eta)/4, -(1+eta)/4];
dNeta = [-(1-xi)/4,  -(1+xi)/4,  (1+xi)/4,  (1-xi)/4];
N_s = [(1-xi)*(1-eta)/4, (1+xi)*(1-eta)/4, (1+xi)*(1+eta)/4, (1-xi)*(1+eta)/4];
dNxm = dNxi / J11_m;  dNym = dNeta / J22_m;
Bs_e = zeros(2, 12);
for i = 1:4
    Bs_e(1, 3*i-2) =  dNxm(i);
    Bs_e(1, 3*i)   = -N_s(i);
    Bs_e(2, 3*i-2) =  dNym(i);
    Bs_e(2, 3*i-1) =  N_s(i);
end
Ke_m = Ke_m + transpose(Bs_e) * Ds_m * Bs_e * 4 * detJ_m;

%% Ensamble
K_g = zeros(n_tot, n_tot);
for e = 1:ne_m
    dofs = zeros(1, 12);
    for i = 1:4
        n_id = els_m(e, i);
        dofs(3*i-2) = 3*n_id - 2;
        dofs(3*i-1) = 3*n_id - 1;
        dofs(3*i)   = 3*n_id;
    end
    for i = 1:12
        for j = 1:12
            K_g(dofs(i), dofs(j)) = K_g(dofs(i), dofs(j)) + Ke_m(i, j);
        end
    end
end

%% BC: SS w=0
kp = 1e8;
for k = 1:nj_m
    xk = nds_m(k,1); yk = nds_m(k,2);
    on_bd = abs(xk) < 1e-9 || abs(xk - W_m) < 1e-9 || ...
            abs(yk) < 1e-9 || abs(yk - H_m) < 1e-9;
    if on_bd
        K_g(3*k-2, 3*k-2) = K_g(3*k-2, 3*k-2) + kp;
    end
end

%% Cargas
F_g = zeros(n_tot, 1);
load_per_node = q * dx_m * dy_m / 4;
for e = 1:ne_m
    for i = 1:4
        n_id = els_m(e, i);
        F_g(3*n_id - 2) = F_g(3*n_id - 2) + load_per_node;
    end
end

%% Solve
u_full = inv(K_g) * F_g;
w_disp = zeros(nj_m, 1);
for k = 1:nj_m
    w_disp(k) = u_full(3*k - 2);
end
w_max = max(abs(w_disp));

fprintf('w_max placa Mindlin gruesa = %.6e\n', w_max);

%% Reissner reference
D_ref     = E_m * t_m^3 / (12*(1-nu_m^2));
w_bend    = 0.00406 * q * W_m^4 / D_ref;
w_shear   = 0.0737 * q * W_m^2 / (kapa * G_m * t_m);
w_reiss   = w_bend + w_shear;
alpha_FEM = w_max * D_ref / (q * W_m^4);

fprintf('w_bend (Navier)       = %.6e\n', w_bend);
fprintf('w_shear (Reissner)    = %.6e\n', w_shear);
fprintf('w_total Reissner      = %.6e\n', w_reiss);
fprintf('alpha_FEM (effective) = %.5f\n', alpha_FEM);
fprintf('Error vs Reissner: %+.2f%%\n', (w_max/w_reiss - 1)*100);

%% Verification table (estilo ETABS)
fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  VERIFICATION — Plate Thick Mindlin (t/a=0.25)\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  Quantity              MATLAB        Reissner      Diff %%\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  w_max [m]          %10.4e %12.4e %10.2f\n', ...
        w_max, w_reiss, (w_max/w_reiss - 1)*100);

%% Paridad vs HekatanLab
fprintf('\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  PARIDAD vs HekatanLab Web (modo MATLAB, FE03)\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  HekatanLab publica:\n');
fprintf('     w_max          = 1.543172e-04\n');
fprintf('     alpha_FEM      = 0.00628\n');
fprintf('     Error Reissner = +20.49%%\n');
fprintf('\n');
fprintf('  Tu MATLAB R2017a:\n');
fprintf('     w_max          = %.6e\n', w_max);
fprintf('     alpha_FEM      = %.5f\n', alpha_FEM);
fprintf('     Error Reissner = %+.2f%%\n', (w_max/w_reiss - 1)*100);
fprintf('\n');

diff_vs_hekatanlab = abs(w_max - 1.543172e-4) / 1.543172e-4;
if diff_vs_hekatanlab < 1e-4
    fprintf('  PARIDAD: OK — diferencia < 0.01%% (numéricamente idéntico)\n');
elseif diff_vs_hekatanlab < 1e-2
    fprintf('  PARIDAD: cercana — diferencia %.4f%%\n', diff_vs_hekatanlab*100);
else
    fprintf('  PARIDAD: discrepancia %.2f%% — revisar.\n', diff_vs_hekatanlab*100);
end

%% Plot
nx1 = nx_m + 1;  ny1 = ny_m + 1;
W_grid = zeros(ny1, nx1);
for jj = 1:ny1
    for ii = 1:nx1
        k = (jj-1)*nx1 + ii;
        W_grid(jj, ii) = w_disp(k);
    end
end
xc = 0:dx_m:W_m;
yc = 0:dy_m:H_m;
sap2k = [255,0,255; 255,0,180; 255,0,0; 255,80,0; 255,140,0; ...
         255,190,0; 255,255,0; 180,255,0; 0,255,0; 0,255,180; ...
         0,255,255; 0,180,255; 0,0,255; 0,0,180] / 255;

figure;
surf(xc, yc, W_grid);
view(2); shading('interp'); colormap(sap2k); colorbar;
title('w(x,y) [m] - Placa SS Mindlin GRUESA (MATLAB)');
xlabel('x [m]'); ylabel('y [m]'); axis('equal');
