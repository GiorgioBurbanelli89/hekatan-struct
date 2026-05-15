%% ════════════════════════════════════════════════════════════════
%  SHELL THIN — Verification script (MATLAB R2017a)
%
%  Reproduce el template "FE05 — Shell Thin (Membrana + Kirchhoff)"
%  de HekatanLab Web (modo MATLAB) — solver Mindlin selectivo
%  (la version original Kirchhoff puro daba K singular).
%
%  - 5 DOFs/nodo (u, v, w, theta_x, theta_y) = 20 DOFs/elem
%  - Membrana + bending: 2x2 Gauss; Shear: 1x1 reducida
%  - Geometría: 1x1, t=0.005 (shell delgado)
%  - Material: E=200000, nu=0.3
%  - Carga: P=1 lateral total en u, distribuida en x=W
%  - BC: empotramiento total (5 DOFs) en x=0
%  - Malla: 4x4 Q4
%
%  USO:
%    >> shell_thin_verify
%% ════════════════════════════════════════════════════════════════

clear; clc;

%% Parámetros (idénticos a FE05)
E    = 200000;
nu   = 0.3;
t    = 0.005;
kapa = 5/6;

nx_m = 4;  ny_m = 4;
W_m  = 1.0; H_m = 1.0;
P_m  = 1.0;

dx_m  = W_m/nx_m;
dy_m  = H_m/ny_m;
nj_m  = (nx_m+1)*(ny_m+1);
n_dof = 5;
n_tot = n_dof*nj_m;

%% D matrices
Dm = (E/(1-nu^2)) * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2];
Dc = E*t^3 / (12*(1-nu^2));
Db = Dc * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2];
G_sh  = E / (2*(1+nu));
Ds_sh = kapa * G_sh * t * [1, 0; 0, 1];

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
        els_m(e,1)=bl; els_m(e,2)=bl+1;
        els_m(e,3)=bl+(nx_m+1)+1; els_m(e,4)=bl+(nx_m+1);
    end
end

%% Ke shell selective
J11_m = dx_m/2;  J22_m = dy_m/2;
detJ_m = J11_m*J22_m;
g      = 1/sqrt(3);
gp2    = [-g,-g; g,-g; g,g; -g,g];
Ke_m   = zeros(20, 20);

% Membrana + bending: 2x2 Gauss
for ig = 1:4
    xi=gp2(ig,1); eta=gp2(ig,2);
    dNxi  = [-(1-eta)/4,  (1-eta)/4, (1+eta)/4, -(1+eta)/4];
    dNeta = [-(1-xi)/4,  -(1+xi)/4,  (1+xi)/4,  (1-xi)/4];
    dNxm = dNxi/J11_m;  dNym = dNeta/J22_m;
    B_mb = zeros(6, 20);
    for i = 1:4
        B_mb(1, 5*i-4) = dNxm(i);
        B_mb(2, 5*i-3) = dNym(i);
        B_mb(3, 5*i-4) = dNym(i);
        B_mb(3, 5*i-3) = dNxm(i);
        B_mb(4, 5*i)   =  dNxm(i);
        B_mb(5, 5*i-1) = -dNym(i);
        B_mb(6, 5*i-1) = -dNxm(i);
        B_mb(6, 5*i)   =  dNym(i);
    end
    D6 = zeros(6, 6);
    D6(1:3,1:3) = Dm*t;
    D6(4:6,4:6) = Db;
    Ke_m = Ke_m + transpose(B_mb) * D6 * B_mb * detJ_m;
end

% Shear: 1x1 reducida
xi=0; eta=0;
dNxi  = [-(1-eta)/4,  (1-eta)/4, (1+eta)/4, -(1+eta)/4];
dNeta = [-(1-xi)/4,  -(1+xi)/4,  (1+xi)/4,  (1-xi)/4];
N_s = [(1-xi)*(1-eta)/4, (1+xi)*(1-eta)/4, (1+xi)*(1+eta)/4, (1-xi)*(1+eta)/4];
dNxm = dNxi/J11_m;  dNym = dNeta/J22_m;
Bs_sh = zeros(2, 20);
for i = 1:4
    Bs_sh(1, 5*i-2) =  dNxm(i);
    Bs_sh(1, 5*i)   = -N_s(i);
    Bs_sh(2, 5*i-2) =  dNym(i);
    Bs_sh(2, 5*i-1) =  N_s(i);
end
Ke_m = Ke_m + transpose(Bs_sh) * Ds_sh * Bs_sh * 4 * detJ_m;

%% Ensamble
K_g = zeros(n_tot, n_tot);
for e = 1:ne_m
    dofs = zeros(1, 20);
    for i = 1:4
        n_id = els_m(e, i);
        for kk = 1:5
            dofs(5*(i-1)+kk) = 5*(n_id-1) + kk;
        end
    end
    for i = 1:20
        for j = 1:20
            K_g(dofs(i),dofs(j)) = K_g(dofs(i),dofs(j)) + Ke_m(i,j);
        end
    end
end

%% BC empotramiento en x=0
kp = 1e8;
for k = 1:nj_m
    if abs(nds_m(k,1)) < 1e-9
        for d = 1:5
            K_g(5*(k-1)+d, 5*(k-1)+d) = K_g(5*(k-1)+d, 5*(k-1)+d) + kp;
        end
    end
end

%% Carga en x=W_m
F_g = zeros(n_tot, 1);
P_per = P_m/(ny_m+1);
for k = 1:nj_m
    if abs(nds_m(k,1) - W_m) < 1e-9
        F_g(5*(k-1) + 1) = P_per;
    end
end

%% Solve
u_full = inv(K_g) * F_g;
u_disp = zeros(nj_m, 1);
for k = 1:nj_m
    u_disp(k) = u_full(5*(k-1) + 1);
end
u_max_sh = max(abs(u_disp));

fprintf('Shell thin cantilever u_max = %.6e\n', u_max_sh);

delta_mem = P_m * W_m / (E * H_m * t);
fprintf('Estimacion membrana pura  = %.6e\n', delta_mem);
fprintf('Ratio FEM/Membrana axial  = %.3f\n', u_max_sh / delta_mem);

%% Paridad
fprintf('\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  PARIDAD vs HekatanLab Web (modo MATLAB, FE05)\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  HekatanLab publica:\n');
fprintf('     u_max = 1.261058e-03\n');
fprintf('     Ratio FEM/Membrana = 1.261\n');
fprintf('\n');
fprintf('  Tu MATLAB R2017a:\n');
fprintf('     u_max = %.6e\n', u_max_sh);
fprintf('     Ratio FEM/Membrana = %.3f\n', u_max_sh/delta_mem);
fprintf('\n');

diff_u = abs(u_max_sh - 1.261058e-3) / 1.261058e-3;
if diff_u < 1e-4
    fprintf('  PARIDAD: OK — diferencia < 0.01%%\n');
elseif diff_u < 1e-2
    fprintf('  PARIDAD: cercana — diferencia %.4f%%\n', diff_u*100);
else
    fprintf('  PARIDAD: discrepancia %.2f%%\n', diff_u*100);
end
