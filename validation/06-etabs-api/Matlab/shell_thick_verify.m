%% ════════════════════════════════════════════════════════════════
%  SHELL THICK — Verification script (MATLAB R2017a)
%
%  Reproduce el template "FE06 — Shell Thick (Membrana + Mindlin)"
%  de HekatanLab Web (modo MATLAB).
%
%  - 5 DOFs/nodo (u, v, w, theta_x, theta_y) = 20 DOFs/elem
%  - Membrana + bending: 2x2 Gauss; Shear: 1x1 reducida (anti-locking)
%  - Geometría: 0.5x0.5, t=0.05
%  - Material: E=200000, nu=0.3, kappa=5/6
%  - Carga: P=100 lateral total en u, en x=W
%  - BC: empotramiento (5 DOFs) en x=0
%  - Malla: 3x3 Q4
%
%  USO:
%    >> shell_thick_verify
%% ════════════════════════════════════════════════════════════════

clear; clc;

%% Parámetros
E    = 200000;
nu   = 0.3;
t    = 0.05;
kapa = 5/6;

nx_m = 3;  ny_m = 3;
W_m  = 0.5; H_m = 0.5;
P_m  = 100;

dx_m  = W_m/nx_m;
dy_m  = H_m/ny_m;
nj_m  = (nx_m+1)*(ny_m+1);
n_dof = 5;
n_tot = n_dof*nj_m;

fprintf('Shell thick: t/a = %.3f\n', t/W_m);

Dm = (E/(1-nu^2)) * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2];
Dc = E*t^3 / (12*(1-nu^2));
Db = Dc * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2];
G  = E / (2*(1+nu));
Ds = kapa * G * t * [1, 0; 0, 1];

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

%% Ke selective
J11_m = dx_m/2;  J22_m = dy_m/2;
detJ_m = J11_m*J22_m;
g     = 1/sqrt(3);
gpts  = [-g,-g; g,-g; g,g; -g,g];
Ke_m  = zeros(20, 20);

% Membrana + Bending 2x2
for ig = 1:4
    xi=gpts(ig,1); eta=gpts(ig,2);
    dNxi  = [-(1-eta)/4,  (1-eta)/4, (1+eta)/4, -(1+eta)/4];
    dNeta = [-(1-xi)/4,  -(1+xi)/4,  (1+xi)/4,  (1-xi)/4];
    dNxm = dNxi/J11_m;  dNym = dNeta/J22_m;
    Bmb = zeros(6, 20);
    for i = 1:4
        Bmb(1, 5*i-4) = dNxm(i);
        Bmb(2, 5*i-3) = dNym(i);
        Bmb(3, 5*i-4) = dNym(i);
        Bmb(3, 5*i-3) = dNxm(i);
        Bmb(4, 5*i)   =  dNxm(i);
        Bmb(5, 5*i-1) = -dNym(i);
        Bmb(6, 5*i-1) = -dNxm(i);
        Bmb(6, 5*i)   =  dNym(i);
    end
    D6 = zeros(6, 6);
    D6(1:3,1:3) = Dm*t;
    D6(4:6,4:6) = Db;
    Ke_m = Ke_m + transpose(Bmb) * D6 * Bmb * detJ_m;
end

% Shear 1x1
xi=0; eta=0;
dNxi  = [-(1-eta)/4,  (1-eta)/4, (1+eta)/4, -(1+eta)/4];
dNeta = [-(1-xi)/4,  -(1+xi)/4,  (1+xi)/4,  (1-xi)/4];
N_s = [(1-xi)*(1-eta)/4, (1+xi)*(1-eta)/4, (1+xi)*(1+eta)/4, (1-xi)*(1+eta)/4];
dNxm = dNxi/J11_m;  dNym = dNeta/J22_m;
Bs = zeros(2, 20);
for i = 1:4
    Bs(1, 5*i-2) =  dNxm(i);
    Bs(1, 5*i)   = -N_s(i);
    Bs(2, 5*i-2) =  dNym(i);
    Bs(2, 5*i-1) =  N_s(i);
end
Ke_m = Ke_m + transpose(Bs) * Ds * Bs * detJ_m * 4;

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

%% BC empotramiento
kp = 1e10;
for k = 1:nj_m
    if abs(nds_m(k,1)) < 1e-9
        for d = 1:5
            K_g(5*(k-1)+d, 5*(k-1)+d) = K_g(5*(k-1)+d, 5*(k-1)+d) + kp;
        end
    end
end

%% Carga
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

fprintf('Desplazamiento horizontal max shell thick: %.4e\n', u_max_sh);

%% Paridad
fprintf('\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  PARIDAD vs HekatanLab Web (modo MATLAB, FE06)\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  HekatanLab publica:\n');
fprintf('     u_max = 1.2528e-02\n');
fprintf('\n');
fprintf('  Tu MATLAB R2017a:\n');
fprintf('     u_max = %.4e\n', u_max_sh);
fprintf('\n');

diff_u = abs(u_max_sh - 1.2528e-2) / 1.2528e-2;
if diff_u < 1e-3
    fprintf('  PARIDAD: OK — diferencia < 0.1%%\n');
elseif diff_u < 1e-2
    fprintf('  PARIDAD: cercana — diferencia %.4f%%\n', diff_u*100);
else
    fprintf('  PARIDAD: discrepancia %.2f%%\n', diff_u*100);
end
