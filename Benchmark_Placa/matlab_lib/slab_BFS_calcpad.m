% ===========================================================================
% slab_BFS_calcpad.m
% Analisis FE de losa rectangular simplemente apoyada con elemento BFS 16-DOF
% Replica el ejemplo de Calcpad (calcpad.eu/media/mechanics/elastic/slab.png).
% ===========================================================================
% Datos:
%   a = 6 m  (lado largo)
%   b = 4 m  (lado corto)
%   t = 0.10 m
%   q = 10 kN/m^2 (carga uniforme)
%   E = 35000 MPa, nu = 0.15
%
% Elemento rectangular Bogner-Fox-Schmit (BFS), 4 DOFs/nodo:
%   [w, theta_x = dw/dy, theta_y = -dw/dx, psi = d2w/(dx dy)]
% Funciones de forma cubicas Hermite en x e y.
%
% Validacion:
%   FEM 6x4 = 24 elementos vs serie de Navier (referencia analitica exacta).
% ===========================================================================

% ------------- 1) Datos -------------
a  = 6;
b  = 4;
t  = 0.10;
q  = 10;
E  = 35e6;       % kN/m^2  (35000 MPa)
nu = 0.15;

n_a = 6;
n_b = 4;
n_e = n_a * n_b;
n_j = (n_a + 1) * (n_b + 1);
a1  = a / n_a;
b1  = b / n_b;
nDof = 4 * n_j;

D_plate = E * t^3 / (12 * (1 - nu^2));

fprintf('=== Losa BFS rectangular SS (replica Calcpad) ===\n');
fprintf('a=%g m, b=%g m, t=%g m, q=%g kN/m^2\n', a, b, t, q);
fprintf('E=%g kN/m^2, nu=%g\n', E, nu);
fprintf('Mesh: %dx%d = %d elementos, %d nodos, %d DOFs\n', n_a, n_b, n_e, n_j, nDof);
fprintf('D_plate = %.4f kN*m\n\n', D_plate);

% ------------- 2) Solucion analitica Navier (serie de doble seno) ----------
%   w(x,y)  = (16q/(pi^6 D)) * SUM_(m,n impares) sin(m pi x/a) sin(n pi y/b) /
%             ( m n (m^2/a^2 + n^2/b^2)^2 )
%   Mx     = -D (d2w/dx2 + nu d2w/dy2),   My = -D (d2w/dy2 + nu d2w/dx2)
% Evaluamos en (a/2, b/2).
w_navier  = 0;
Mx_navier = 0;
My_navier = 0;
N_terms = 39;
for m = 1:2:N_terms
  for nm = 1:2:N_terms
    sgn = sin(m * pi/2) * sin(nm * pi/2);
    den = m * nm * (m^2 / a^2 + nm^2 / b^2)^2;
    coef = sgn / den;
    w_navier = w_navier + coef;
    % Para Mx,My: d2(.)/dx2 -> -(m pi/a)^2; d2(.)/dy2 -> -(n pi/b)^2.
    % Mx = (16q/pi^4) * (m^2/a^2 + nu n^2/b^2) * sgn / [m n (m^2/a^2 + n^2/b^2)^2]
    fx = (m / a)^2;
    fy = (nm / b)^2;
    coef_M = (16 * q / pi^4) * coef;
    Mx_navier = Mx_navier + coef_M * (fx + nu * fy);
    My_navier = My_navier + coef_M * (fy + nu * fx);
  end
end
w_navier = (16 * q / (pi^6 * D_plate)) * w_navier;

fprintf('--- Solucion Navier (analitica, serie) ---\n');
fprintf('w(a/2, b/2)  = %.4f mm\n', w_navier * 1000);
fprintf('Mx(a/2, b/2) = %.4f kN*m/m\n', Mx_navier);
fprintf('My(a/2, b/2) = %.4f kN*m/m\n\n', My_navier);

% ------------- 3) Coordenadas y conectividad -------------
x_j = zeros(n_j, 1);
y_j = zeros(n_j, 1);
xx = 0;
yy = 0;
for j = 1:n_j
  x_j(j) = xx;
  y_j(j) = yy;
  yy = yy + b1;
  if yy > b + 1e-9
    yy = 0;
    xx = xx + a1;
  end
end

% Conectividad nodal CCW: nodos (0,0), (a1,0), (a1,b1), (0,b1) por elemento
e_j = zeros(n_e, 4);
for ia = 1:n_a
  for ib = 1:n_b
    e = ib + n_b * (ia - 1);
    j = e + ia - 1;
    e_j(e, 1) = j;
    e_j(e, 2) = j + n_b + 1;
    e_j(e, 3) = j + n_b + 2;
    e_j(e, 4) = j + 1;
  end
end

% ------------- 4) Matriz constitutiva D (3x3) -------------
Dm = D_plate * [1, nu, 0;
                nu, 1, 0;
                0,  0, (1 - nu) / 2];

% ------------- 5) Cuadratura Gauss-Legendre 4-puntos en [0,1] -------------
gp_n = 4;
gp = [0.069431844202974, 0.330009478207572, 0.669990521792428, 0.930568155797026];
gw = [0.173927422568727, 0.326072577431273, 0.326072577431273, 0.173927422568727];

% ------------- 6) K_e y F_e (mismas para todos los elementos rectangulares)
Ke = zeros(16, 16);
Fe = zeros(16, 1);
for ig = 1:gp_n
  for jg = 1:gp_n
    xi_n  = gp(ig);
    eta_n = gp(jg);
    wij   = gw(ig) * gw(jg) * a1 * b1;
    Bm = bfs_B(xi_n, eta_n, a1, b1);
    Nv = bfs_N(xi_n, eta_n, a1, b1);
    Ke = Ke + wij * (Bm' * Dm * Bm);
    Fe = Fe + wij * Nv * q;
  end
end

% ------------- 7) Ensamblaje de K y F globales -------------
K = zeros(nDof, nDof);
F = zeros(nDof, 1);
edof = zeros(16, 1);
for e = 1:n_e
  for k = 1:4
    jg = e_j(e, k);
    base_l = 4 * (k - 1);
    base_g = 4 * (jg - 1);
    edof(base_l + 1) = base_g + 1;
    edof(base_l + 2) = base_g + 2;
    edof(base_l + 3) = base_g + 3;
    edof(base_l + 4) = base_g + 4;
  end
  for ii = 1:16
    F(edof(ii)) = F(edof(ii)) + Fe(ii);
    for jj = 1:16
      K(edof(ii), edof(jj)) = K(edof(ii), edof(jj)) + Ke(ii, jj);
    end
  end
end

% ------------- 8) Lista de nodos apoyados (perimetro) -------------
n_s = 2 * (n_a + n_b);
s_j = zeros(n_s, 1);
is = 0;
for i = 1:(n_a + 1)
  is = is + 1;
  s_j(is) = (n_b + 1) * i - n_b;        % borde y = 0
end
for i = 1:(n_a + 1)
  is = is + 1;
  s_j(is) = (n_b + 1) * i;              % borde y = b
end
for i = 2:n_b
  is = is + 1;
  s_j(is) = i;                           % borde x = 0 (interiores)
end
for i = 2:n_b
  is = is + 1;
  s_j(is) = n_a * (n_b + 1) + i;         % borde x = a (interiores)
end

% ------------- 9) Penalty BC simplemente apoyado -------------
% w siempre fijo en bordes; las rotaciones tangentes al borde tambien (twist
% libre dentro del plano del borde) - igual al script Calcpad.
ks_pen = 1e20;
for i = 1:n_s
  jn = s_j(i);
  base_g = 4 * (jn - 1);
  K(base_g + 1, base_g + 1) = K(base_g + 1, base_g + 1) + ks_pen;
  if abs(y_j(jn)) < 1e-9
    K(base_g + 2, base_g + 2) = K(base_g + 2, base_g + 2) + ks_pen;
  end
  if abs(y_j(jn) - b) < 1e-9
    K(base_g + 2, base_g + 2) = K(base_g + 2, base_g + 2) + ks_pen;
  end
  if abs(x_j(jn)) < 1e-9
    K(base_g + 3, base_g + 3) = K(base_g + 3, base_g + 3) + ks_pen;
  end
  if abs(x_j(jn) - a) < 1e-9
    K(base_g + 3, base_g + 3) = K(base_g + 3, base_g + 3) + ks_pen;
  end
end

% ------------- 10) Resolver K Z = F -------------
Z = K \ F;

% ------------- 11) w en cada nodo (matriz (n_a+1) x (n_b+1)) -------------
W_z = zeros(n_a + 1, n_b + 1);
for i = 1:(n_a + 1)
  for k = 1:(n_b + 1)
    jg = (i - 1) * (n_b + 1) + k;
    W_z(i, k) = Z(4 * jg - 3) * 1000;     % a mm
  end
end

% Centro
i_c = n_a / 2 + 1;
j_c = n_b / 2 + 1;
w_FEM = W_z(i_c, j_c);

% ------------- 12) Momentos por nodo (promedio de elementos adyacentes) ----
Mj = zeros(3, n_j);
cj = zeros(1, n_j);
for e = 1:n_e
  j1 = e_j(e, 1);
  x1 = x_j(j1);
  y1 = y_j(j1);

  % Vector Z_e (16 DOFs del elemento)
  Ze = zeros(16, 1);
  for k = 1:4
    jg = e_j(e, k);
    base_l = 4 * (k - 1);
    base_g = 4 * (jg - 1);
    Ze(base_l + 1) = Z(base_g + 1);
    Ze(base_l + 2) = Z(base_g + 2);
    Ze(base_l + 3) = Z(base_g + 3);
    Ze(base_l + 4) = Z(base_g + 4);
  end

  for kk = 1:4
    jn = e_j(e, kk);
    xn = (x_j(jn) - x1) / a1;
    yn = (y_j(jn) - y1) / b1;
    Bm = bfs_B(xn, yn, a1, b1);
    Me = -Dm * Bm * Ze;
    Mj(1, jn) = Mj(1, jn) + Me(1);
    Mj(2, jn) = Mj(2, jn) + Me(2);
    Mj(3, jn) = Mj(3, jn) + Me(3);
    cj(jn) = cj(jn) + 1;
  end
end
for j = 1:n_j
  Mj(1, j) = Mj(1, j) / cj(j);
  Mj(2, j) = Mj(2, j) / cj(j);
  Mj(3, j) = Mj(3, j) / cj(j);
end

% Reformatear en matrices Mx, My, Mxy de tamano (n_a+1) x (n_b+1)
Mx_g  = zeros(n_a + 1, n_b + 1);
My_g  = zeros(n_a + 1, n_b + 1);
Mxy_g = zeros(n_a + 1, n_b + 1);
for i = 1:(n_a + 1)
  for k = 1:(n_b + 1)
    jg = (i - 1) * (n_b + 1) + k;
    Mx_g(i, k)  = Mj(1, jg);
    My_g(i, k)  = Mj(2, jg);
    Mxy_g(i, k) = Mj(3, jg);
  end
end

Mx_FEM = Mx_g(i_c, j_c);
My_FEM = My_g(i_c, j_c);

fprintf('--- Resultados FEM (%d elementos BFS) ---\n', n_e);
fprintf('w(a/2, b/2)  = %.4f mm\n', w_FEM);
fprintf('Mx(a/2, b/2) = %.4f kN*m/m\n', Mx_FEM);
fprintf('My(a/2, b/2) = %.4f kN*m/m\n\n', My_FEM);

fprintf('--- Comparacion FEM vs Navier ---\n');
fprintf('              FEM          Navier       Error %%\n');
err_w  = abs(w_FEM  - w_navier * 1000) / (w_navier * 1000) * 100;
err_Mx = abs(Mx_FEM - Mx_navier) / abs(Mx_navier) * 100;
err_My = abs(My_FEM - My_navier) / abs(My_navier) * 100;
fprintf('w   [mm]    %9.4f    %9.4f     %5.2f\n', w_FEM,  w_navier * 1000, err_w);
fprintf('Mx  [kNm/m] %9.4f    %9.4f     %5.2f\n', Mx_FEM, Mx_navier,       err_Mx);
fprintf('My  [kNm/m] %9.4f    %9.4f     %5.2f\n', My_FEM, My_navier,       err_My);

% ===========================================================================
% Funciones locales (BFS Hermite cubicos)
% ===========================================================================

function P = bfs_phi(xn, L)
  % Phi_1..Phi_4 evaluadas en xn in [0,1] escaladas por L (longitud lado)
  P = [1 - xn^2 * (3 - 2 * xn);
       xn * L * (1 - xn * (2 - xn));
       xn^2 * (3 - 2 * xn);
       xn^2 * L * (-1 + xn)];
end

function P = bfs_dphi(xn, L)
  % d/dX Phi_i (derivada respecto a la coordenada dimensional X = L*xn)
  P = [-6 * (xn / L) * (1 - xn);
       1 - xn * (4 - 3 * xn);
       6 * (xn / L) * (1 - xn);
       -xn * (2 - 3 * xn)];
end

function P = bfs_ddphi(xn, L)
  % d2/dX^2 Phi_i (curvatura dimensional)
  P = [-(6 / L^2) * (1 - 2 * xn);
       -(2 / L) * (2 - 3 * xn);
       (6 / L^2) * (1 - 2 * xn);
       -(2 / L) * (1 - 3 * xn)];
end

function Nv = bfs_N(xi_n, eta_n, a1, b1)
  Pa  = bfs_phi(xi_n, a1);
  Pb  = bfs_phi(eta_n, b1);
  ka  = [1, 3, 3, 1];
  kb  = [1, 1, 3, 3];
  ka2 = [2, 4, 4, 2];
  kb2 = [2, 2, 4, 4];
  Nv = zeros(16, 1);
  for k = 1:4
    base = 4 * (k - 1);
    Nv(base + 1) = Pa(ka(k))  * Pb(kb(k));    % w
    Nv(base + 2) = Pa(ka2(k)) * Pb(kb(k));    % theta_x = dw/dy
    Nv(base + 3) = Pa(ka(k))  * Pb(kb2(k));   % theta_y = -dw/dx
    Nv(base + 4) = Pa(ka2(k)) * Pb(kb2(k));   % psi = d2w/(dx dy)
  end
end

function Bm = bfs_B(xi_n, eta_n, a1, b1)
  Pa   = bfs_phi(xi_n,  a1);
  Pb   = bfs_phi(eta_n, b1);
  dPa  = bfs_dphi(xi_n,  a1);
  dPb  = bfs_dphi(eta_n, b1);
  ddPa = bfs_ddphi(xi_n,  a1);
  ddPb = bfs_ddphi(eta_n, b1);

  ka  = [1, 3, 3, 1];
  kb  = [1, 1, 3, 3];
  ka2 = [2, 4, 4, 2];
  kb2 = [2, 2, 4, 4];

  Bm = zeros(3, 16);
  for k = 1:4
    base = 4 * (k - 1);
    % DOF 1: w
    Bm(1, base + 1) = ddPa(ka(k))  * Pb(kb(k));
    Bm(2, base + 1) = Pa(ka(k))    * ddPb(kb(k));
    Bm(3, base + 1) = 2 * dPa(ka(k)) * dPb(kb(k));
    % DOF 2: theta_x
    Bm(1, base + 2) = ddPa(ka2(k)) * Pb(kb(k));
    Bm(2, base + 2) = Pa(ka2(k))   * ddPb(kb(k));
    Bm(3, base + 2) = 2 * dPa(ka2(k)) * dPb(kb(k));
    % DOF 3: theta_y
    Bm(1, base + 3) = ddPa(ka(k))  * Pb(kb2(k));
    Bm(2, base + 3) = Pa(ka(k))    * ddPb(kb2(k));
    Bm(3, base + 3) = 2 * dPa(ka(k)) * dPb(kb2(k));
    % DOF 4: psi
    Bm(1, base + 4) = ddPa(ka2(k)) * Pb(kb2(k));
    Bm(2, base + 4) = Pa(ka2(k))   * ddPb(kb2(k));
    Bm(3, base + 4) = 2 * dPa(ka2(k)) * dPb(kb2(k));
  end
end
