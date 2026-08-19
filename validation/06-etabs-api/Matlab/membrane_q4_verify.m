%% ════════════════════════════════════════════════════════════════
%  MEMBRANE Q4 (Cantilever Wall) — Verification (MATLAB R2017a)
%
%  Reproduce el template "FE01b — Cantilever Wall Q4 (con contorno)"
%  de HekatanLab Web (modo MATLAB).
%
%  - Geometría: muro 5x3 m, espesor 0.2 m
%  - Material: E=25000, nu=0.2
%  - Carga: P=100 lateral total repartida en el top
%  - BC: empotramiento en la base (penalización kp=1e8)
%  - Malla: 6x4 Q4
%  - Formulación: plane stress, 2x2 Gauss
%  - Referencia: viga Euler-Bernoulli (subestima — FEM captura corte)
%
%  USO:
%    >> membrane_q4_verify
%% ════════════════════════════════════════════════════════════════

clear; clc;

%% Parámetros (idénticos al template FE01b)
W  = 5;
H  = 3;
t  = 0.2;
P  = 100;
E  = 25000;
nu = 0.2;
nx = 6;
ny = 4;

fprintf('Muro %.1fx%.1f m, t=%.2f, P=%.0f, malla %dx%d\n', W, H, t, P, nx, ny);

%% Mesh
n_dof   = 2;
ne      = nx*ny;
nj      = (nx+1)*(ny+1);
n_total = n_dof*nj;
dx      = W/nx;
dy      = H/ny;

nds = zeros(nj, 2);
for j = 0:ny
    for i = 0:nx
        k = j*(nx+1) + i + 1;
        nds(k, 1) = i*dx;
        nds(k, 2) = j*dy;
    end
end

els = zeros(ne, 4);
for j = 0:ny-1
    for i = 0:nx-1
        e  = j*nx + i + 1;
        bl = j*(nx+1) + i + 1;
        els(e, 1) = bl;
        els(e, 2) = bl + 1;
        els(e, 3) = bl + (nx+1) + 1;
        els(e, 4) = bl + (nx+1);
    end
end

%% D plane stress
D = (E/(1-nu^2)) * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2];

%% Ke con 2x2 Gauss
J11  = dx/2;  J22 = dy/2;
detJ = J11*J22;
g    = 1/sqrt(3);
gpts = [-g,-g; g,-g; g,g; -g,g];

Ke = zeros(8, 8);
for ig = 1:4
    xi = gpts(ig, 1); eta = gpts(ig, 2);
    dNxi  = [-(1-eta)/4,  (1-eta)/4, (1+eta)/4, -(1+eta)/4];
    dNeta = [-(1-xi)/4, -(1+xi)/4, (1+xi)/4, (1-xi)/4];
    dNx   = dNxi / J11;
    dNy   = dNeta / J22;
    B = zeros(3, 8);
    for i = 1:4
        B(1, 2*i-1) = dNx(i);
        B(2, 2*i)   = dNy(i);
        B(3, 2*i-1) = dNy(i);
        B(3, 2*i)   = dNx(i);
    end
    Ke = Ke + transpose(B) * D * B * t * detJ;
end

% B en centroide para esfuerzos
xi = 0;  eta = 0;
dNxi  = [-(1-eta)/4,  (1-eta)/4, (1+eta)/4, -(1+eta)/4];
dNeta = [-(1-xi)/4,  -(1+xi)/4,  (1+xi)/4,  (1-xi)/4];
dNx   = dNxi / J11;
dNy   = dNeta / J22;
B_c = zeros(3, 8);
for i = 1:4
    B_c(1, 2*i-1) = dNx(i);
    B_c(2, 2*i)   = dNy(i);
    B_c(3, 2*i-1) = dNy(i);
    B_c(3, 2*i)   = dNx(i);
end

%% Ensamble
K = zeros(n_total, n_total);
for e = 1:ne
    dofs = zeros(1, 8);
    for i = 1:4
        n_id        = els(e, i);
        dofs(2*i-1) = 2*n_id - 1;
        dofs(2*i)   = 2*n_id;
    end
    for i = 1:8
        for j = 1:8
            K(dofs(i), dofs(j)) = K(dofs(i), dofs(j)) + Ke(i, j);
        end
    end
end

%% BC empotramiento base
kp = 1e8;
for i = 1:(nx+1)
    j = 2*i - 1;
    K(j, j)     = K(j, j)     + kp;
    K(j+1, j+1) = K(j+1, j+1) + kp;
end

%% Carga top
F = zeros(n_total, 1);
p_n = P/(nx+1);
for i = 1:(nx+1)
    j_top = ny*(nx+1) + i;
    F(2*j_top - 1) = p_n;
end

%% Solve
u_full = inv(K) * F;
u_disp = zeros(nj, 1);
v_disp = zeros(nj, 1);
for i = 1:nj
    u_disp(i) = u_full(2*i - 1);
    v_disp(i) = u_full(2*i);
end

u_max = 0; u_node = 0;
for i = 1:(nx+1)
    j_top = ny*(nx+1) + i;
    if abs(u_disp(j_top)) > abs(u_max)
        u_max  = u_disp(j_top);
        u_node = j_top;
    end
end
fprintf('u_max = %.4e m en nodo %d\n', u_max, u_node);

%% Esfuerzos
sxx_nd = zeros(nj, 1);
syy_nd = zeros(nj, 1);
sxy_nd = zeros(nj, 1);
cnt_nd = zeros(nj, 1);
for e = 1:ne
    ue = zeros(8, 1);
    for i = 1:4
        n_id      = els(e, i);
        ue(2*i-1) = u_disp(n_id);
        ue(2*i)   = v_disp(n_id);
    end
    sigma = D * B_c * ue;
    for i = 1:4
        n_id         = els(e, i);
        sxx_nd(n_id) = sxx_nd(n_id) + sigma(1);
        syy_nd(n_id) = syy_nd(n_id) + sigma(2);
        sxy_nd(n_id) = sxy_nd(n_id) + sigma(3);
        cnt_nd(n_id) = cnt_nd(n_id) + 1;
    end
end
for i = 1:nj
    if cnt_nd(i) > 0
        sxx_nd(i) = sxx_nd(i) / cnt_nd(i);
        syy_nd(i) = syy_nd(i) / cnt_nd(i);
        sxy_nd(i) = sxy_nd(i) / cnt_nd(i);
    end
end
svm_nd = zeros(nj, 1);
for i = 1:nj
    svm_nd(i) = sqrt(sxx_nd(i)^2 - sxx_nd(i)*syy_nd(i) + syy_nd(i)^2 + 3*sxy_nd(i)^2);
end

fprintf('sigma_xx range: [%.3f, %.3f] MPa\n', min(sxx_nd), max(sxx_nd));
fprintf('sigma_vM  max : %.3f MPa\n', max(svm_nd));

%% Viga Euler-Bernoulli
I_w        = t*W^3 / 12;
delta_beam = P*H^3 / (3*E*I_w);
ratio      = abs(u_max) / delta_beam;
fprintf('\nDeflexion teorica viga: %.4e m\n', delta_beam);
fprintf('Ratio FEM/Viga: %.3f (>1 por corte, esperado en muro stocky)\n', ratio);

%% Verification table
fprintf('\n═══════════════════════════════════════════════════════════\n');
fprintf('  VERIFICATION — Membrane Q4 Cantilever Wall\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  Quantity              MATLAB        Viga E-B      Diff %%\n');
fprintf('  ─────────────────────────────────────────────────────────\n');
fprintf('  u_max [m]          %10.4e %12.4e %10.2f\n', ...
        abs(u_max), delta_beam, (abs(u_max)/delta_beam - 1)*100);

%% Paridad HekatanLab
fprintf('\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  PARIDAD vs HekatanLab Web (modo MATLAB, FE01b)\n');
fprintf('═══════════════════════════════════════════════════════════\n');
fprintf('  HekatanLab publica:\n');
fprintf('     u_max          = 5.7417e-02\n');
fprintf('     sigma_xx range = [-79.787, +79.787] MPa\n');
fprintf('     sigma_vM max   = 303.813 MPa\n');
fprintf('     Ratio FEM/Viga = 3.323\n');
fprintf('\n');
fprintf('  Tu MATLAB R2017a:\n');
fprintf('     u_max          = %.4e\n', abs(u_max));
fprintf('     sigma_xx range = [%.3f, %.3f] MPa\n', min(sxx_nd), max(sxx_nd));
fprintf('     sigma_vM max   = %.3f MPa\n', max(svm_nd));
fprintf('     Ratio FEM/Viga = %.3f\n', ratio);
fprintf('\n');

diff_u  = abs(abs(u_max) - 5.7417e-2) / 5.7417e-2;
diff_vm = abs(max(svm_nd) - 303.813) / 303.813;
if diff_u < 1e-3 && diff_vm < 1e-3
    fprintf('  PARIDAD: OK — diferencia < 0.1%% en u_max y sigma_vM\n');
else
    fprintf('  PARIDAD: u_max %.4f%%, sigma_vM %.4f%%\n', diff_u*100, diff_vm*100);
end
