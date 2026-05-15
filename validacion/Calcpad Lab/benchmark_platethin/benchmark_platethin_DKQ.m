% =========================================================================
% Rectangular Slab FEA — Batoz DKQ (Discrete Kirchhoff Quadrilateral)
% Reproduce EXACTAMENTE la formulación de SAP 2000 Plate-Thin
% =========================================================================
% Elemento Batoz-Tahar DKQ (Batoz & Tahar, IJNME 1982):
%   - 4 nodos × 3 GDL = 12 GDL/elemento
%   - GDLs/nodo: {w, β_x = ∂w/∂x, β_y = ∂w/∂y}
%   - Rotaciones interpoladas con Serendipity Q8 (4 corners + 4 midsides)
%   - Mid-side rotations condensadas via Kirchhoff constraint:
%       βs_midside = (3/2L)(w_J - w_I) - (1/4)(βs_I + βs_J)
%       βn_midside = (βn_I + βn_J) / 2
%   - 2×2 Gauss para K_e y para extracción de momentos
%   - Extrapolación bilinear Gauss→nodos (igual que SAP 2000)
%
% Esperado para el caso Calcpad/SAP (6×4, t=0.1, E=35GPa, ν=0.15, q=10):
%   SAP v24 (medido):  w=6.5286 mm, Mx=6.2249, My=12.7592, Mxy=-7.2541
% =========================================================================
t_total = tic;

%% Datos
a  = 6
b  = 4
t  = 0.1
q  = 10
E  = 35e6
nu = 0.15

%% Malla
n_a = 6
n_b = 4
n_e = n_a*n_b
n_j = (n_a+1)*(n_b+1)
n_dof = 3
n_k = n_dof*4
a_1 = a/n_a
b_1 = b/n_b
n_g = n_dof*n_j

x_j = zeros(n_j, 1);
y_j = zeros(n_j, 1);
x = 0; y = 0;
for j = 1:n_j
    x_j(j) = x;
    y_j(j) = y;
    y = y + b_1;
    if y > b + 1e-9, y = 0; x = x + a_1; end
end
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

%% Apoyos perimetrales
n_s = 2*(n_a + n_b)
s_j = zeros(n_s, 1);
i_s = 0;
for i = 1:n_a+1
    j = (n_b+1)*i - n_b; i_s = i_s + 1; s_j(i_s) = j;
end
for i = 1:n_a+1
    j = (n_b+1)*i; i_s = i_s + 1; s_j(i_s) = j;
end
for i = 2:n_b
    j = i; i_s = i_s + 1; s_j(i_s) = j;
end
for i = 2:n_b
    j = n_a*(n_b+1) + i; i_s = i_s + 1; s_j(i_s) = j;
end

%% Constitutiva
D11 = E*t^3/(12*(1-nu^2))
D = D11 * [1, nu, 0; nu, 1, 0; 0, 0, (1-nu)/2]

%% Cuadratura 2×2 Gauss (la que usa SAP 2000)
gp = [-0.5773502691896257, 0.5773502691896257];
gw = [1.0, 1.0];

%% Element K_e via Batoz DKQ — rectangular a_1 × b_1
% Local coords ξ, η ∈ [-1, +1] mapeado a x_local ∈ [0, a_1], y_local ∈ [0, b_1]
% Jacobiano: dx/dξ = a_1/2 = a_h, dy/dη = b_1/2 = b_h
a_h = a_1/2;
b_h = b_1/2;
K_e = zeros(n_k, n_k);

% Acumulador de F_e (Q4 bilinear consistent load para uniform q):
% F_e = q * a_1*b_1/4 en cada GDL w (1, 4, 7, 10), 0 en β_x, β_y
F_e = zeros(n_k, 1);
F_e(1) = q*a_1*b_1/4;
F_e(4) = q*a_1*b_1/4;
F_e(7) = q*a_1*b_1/4;
F_e(10) = q*a_1*b_1/4;

% Corner & midside natural coords (Serendipity Q8)
xi_q8  = [-1,  1, 1, -1,  0, 1, 0, -1];
eta_q8 = [-1, -1, 1,  1, -1, 0, 1,  0];

% Coeficientes de Kirchhoff
inv_a1 = 1.0 / a_1;
inv_b1 = 1.0 / b_1;
c_a = 1.5 * inv_a1;   % = 3/(2*a_1)
c_b = 1.5 * inv_b1;   % = 3/(2*b_1)

for ig = 1:2
    for jg = 1:2
        xi = gp(ig);
        eta = gp(jg);
        wgt = gw(ig)*gw(jg);

        % --- Q8 Serendipity N_k y derivadas en (xi, eta) ---
        N_q8  = zeros(1, 8);
        dN_dxi = zeros(1, 8);
        dN_deta = zeros(1, 8);
        % Corners (k = 1..4)
        for k = 1:4
            si = xi_q8(k); ti = eta_q8(k);
            N_q8(k) = 0.25*(1+si*xi)*(1+ti*eta)*(si*xi + ti*eta - 1);
            dN_dxi(k)  = 0.25*si*(1+ti*eta)*(2*si*xi + ti*eta);
            dN_deta(k) = 0.25*ti*(1+si*xi)*(si*xi + 2*ti*eta);
        end
        % Midside 5 (0,-1)
        N_q8(5)  = 0.5*(1 - xi^2)*(1 - eta);
        dN_dxi(5)  = -xi*(1 - eta);
        dN_deta(5) = -0.5*(1 - xi^2);
        % Midside 6 (+1,0)
        N_q8(6)  = 0.5*(1 + xi)*(1 - eta^2);
        dN_dxi(6)  = 0.5*(1 - eta^2);
        dN_deta(6) = -eta*(1 + xi);
        % Midside 7 (0,+1)
        N_q8(7)  = 0.5*(1 - xi^2)*(1 + eta);
        dN_dxi(7)  = -xi*(1 + eta);
        dN_deta(7) = 0.5*(1 - xi^2);
        % Midside 8 (-1, 0)
        N_q8(8)  = 0.5*(1 - xi)*(1 - eta^2);
        dN_dxi(8)  = -0.5*(1 - eta^2);
        dN_deta(8) = -eta*(1 - xi);

        % --- Hx (1×12) y Hy (1×12) — coeficientes en función de DOFs ---
        % DOF order: [w_1, βx_1, βy_1, w_2, βx_2, βy_2, w_3, βx_3, βy_3, w_4, βx_4, βy_4]
        % Midside βx,βy substituidas usando Kirchhoff + interp normal:
        %   βx_5 = c_a*(w_2 - w_1) - 0.25*(βx_1+βx_2)
        %   βy_5 = 0.5*(βy_1 + βy_2)
        %   βx_6 = 0.5*(βx_2 + βx_3)
        %   βy_6 = c_b*(w_3 - w_2) - 0.25*(βy_2 + βy_3)
        %   βx_7 = c_a*(w_3 - w_4) - 0.25*(βx_3 + βx_4)
        %   βy_7 = 0.5*(βy_3 + βy_4)
        %   βx_8 = 0.5*(βx_4 + βx_1)
        %   βy_8 = c_b*(w_4 - w_1) - 0.25*(βy_1 + βy_4)
        % Hx(ξ,η) = Σ N_k(ξ,η)·βx_k  for k=1..8
        % Hy(ξ,η) = Σ N_k(ξ,η)·βy_k

        Hx = zeros(1, n_k);
        Hy = zeros(1, n_k);
        dHx_dxi = zeros(1, n_k);
        dHx_deta = zeros(1, n_k);
        dHy_dxi = zeros(1, n_k);
        dHy_deta = zeros(1, n_k);

        % Para cada DOF, acumular las contribuciones:
        % --- w_1 (DOF 1) ---
        % De βx_5 = c_a*(w_2 - w_1) →  -c_a*w_1 en N_5·βx_5
        % De βy_8 = c_b*(w_4 - w_1) →  -c_b*w_1 en N_8·βy_8
        Hx(1)  = -c_a*N_q8(5);
        Hy(1)  = -c_b*N_q8(8);
        dHx_dxi(1)  = -c_a*dN_dxi(5);
        dHx_deta(1) = -c_a*dN_deta(5);
        dHy_dxi(1)  = -c_b*dN_dxi(8);
        dHy_deta(1) = -c_b*dN_deta(8);

        % --- βx_1 (DOF 2) ---
        % De N_1·βx_1 directo + N_5·(-0.25·βx_1) + N_8·(0.5·βx_1)
        Hx(2)  = N_q8(1) - 0.25*N_q8(5) + 0.5*N_q8(8);
        Hy(2)  = 0;
        dHx_dxi(2)  = dN_dxi(1)  - 0.25*dN_dxi(5)  + 0.5*dN_dxi(8);
        dHx_deta(2) = dN_deta(1) - 0.25*dN_deta(5) + 0.5*dN_deta(8);
        dHy_dxi(2)  = 0;
        dHy_deta(2) = 0;

        % --- βy_1 (DOF 3) ---
        % De N_1·βy_1 + N_5·(0.5·βy_1) + N_8·(-0.25·βy_1)
        Hx(3)  = 0;
        Hy(3)  = N_q8(1) + 0.5*N_q8(5) - 0.25*N_q8(8);
        dHx_dxi(3)  = 0;
        dHx_deta(3) = 0;
        dHy_dxi(3)  = dN_dxi(1)  + 0.5*dN_dxi(5)  - 0.25*dN_dxi(8);
        dHy_deta(3) = dN_deta(1) + 0.5*dN_deta(5) - 0.25*dN_deta(8);

        % --- w_2 (DOF 4) ---
        % De βx_5 = c_a*(w_2 - w_1) →  +c_a·w_2 en N_5
        % De βy_6 = c_b*(w_3 - w_2) →  -c_b·w_2 en N_6
        Hx(4)  = c_a*N_q8(5);
        Hy(4)  = -c_b*N_q8(6);
        dHx_dxi(4)  = c_a*dN_dxi(5);
        dHx_deta(4) = c_a*dN_deta(5);
        dHy_dxi(4)  = -c_b*dN_dxi(6);
        dHy_deta(4) = -c_b*dN_deta(6);

        % --- βx_2 (DOF 5) ---
        Hx(5)  = N_q8(2) - 0.25*N_q8(5) + 0.5*N_q8(6);
        Hy(5)  = 0;
        dHx_dxi(5)  = dN_dxi(2)  - 0.25*dN_dxi(5)  + 0.5*dN_dxi(6);
        dHx_deta(5) = dN_deta(2) - 0.25*dN_deta(5) + 0.5*dN_deta(6);

        % --- βy_2 (DOF 6) ---
        Hy(6)  = N_q8(2) + 0.5*N_q8(5) - 0.25*N_q8(6);
        dHy_dxi(6)  = dN_dxi(2)  + 0.5*dN_dxi(5)  - 0.25*dN_dxi(6);
        dHy_deta(6) = dN_deta(2) + 0.5*dN_deta(5) - 0.25*dN_deta(6);

        % --- w_3 (DOF 7) ---
        % De βy_6 = c_b*(w_3 - w_2) →  +c_b·w_3 en N_6
        % De βx_7 = c_a*(w_3 - w_4) →  +c_a·w_3 en N_7
        Hx(7)  = c_a*N_q8(7);
        Hy(7)  = c_b*N_q8(6);
        dHx_dxi(7)  = c_a*dN_dxi(7);
        dHx_deta(7) = c_a*dN_deta(7);
        dHy_dxi(7)  = c_b*dN_dxi(6);
        dHy_deta(7) = c_b*dN_deta(6);

        % --- βx_3 (DOF 8) ---
        Hx(8)  = N_q8(3) + 0.5*N_q8(6) - 0.25*N_q8(7);
        dHx_dxi(8)  = dN_dxi(3)  + 0.5*dN_dxi(6)  - 0.25*dN_dxi(7);
        dHx_deta(8) = dN_deta(3) + 0.5*dN_deta(6) - 0.25*dN_deta(7);

        % --- βy_3 (DOF 9) ---
        Hy(9)  = N_q8(3) - 0.25*N_q8(6) + 0.5*N_q8(7);
        dHy_dxi(9)  = dN_dxi(3)  - 0.25*dN_dxi(6)  + 0.5*dN_dxi(7);
        dHy_deta(9) = dN_deta(3) - 0.25*dN_deta(6) + 0.5*dN_deta(7);

        % --- w_4 (DOF 10) ---
        % De βx_7 = c_a*(w_3 - w_4) →  -c_a·w_4 en N_7
        % De βy_8 = c_b*(w_4 - w_1) →  +c_b·w_4 en N_8
        Hx(10) = -c_a*N_q8(7);
        Hy(10) = c_b*N_q8(8);
        dHx_dxi(10)  = -c_a*dN_dxi(7);
        dHx_deta(10) = -c_a*dN_deta(7);
        dHy_dxi(10)  = c_b*dN_dxi(8);
        dHy_deta(10) = c_b*dN_deta(8);

        % --- βx_4 (DOF 11) ---
        Hx(11) = N_q8(4) - 0.25*N_q8(7) + 0.5*N_q8(8);
        dHx_dxi(11)  = dN_dxi(4)  - 0.25*dN_dxi(7)  + 0.5*dN_dxi(8);
        dHx_deta(11) = dN_deta(4) - 0.25*dN_deta(7) + 0.5*dN_deta(8);

        % --- βy_4 (DOF 12) ---
        Hy(12) = N_q8(4) + 0.5*N_q8(7) - 0.25*N_q8(8);
        dHy_dxi(12)  = dN_dxi(4)  + 0.5*dN_dxi(7)  - 0.25*dN_dxi(8);
        dHy_deta(12) = dN_deta(4) + 0.5*dN_deta(7) - 0.25*dN_deta(8);

        % --- Convertir a derivadas físicas y construir B (3×12) ---
        % B[1,:] = ∂Hx/∂x = (1/a_h) dHx_dxi
        % B[2,:] = ∂Hy/∂y = (1/b_h) dHy_deta
        % B[3,:] = ∂Hx/∂y + ∂Hy/∂x = (1/b_h) dHx_deta + (1/a_h) dHy_dxi
        Brow1 = dHx_dxi  / a_h;
        Brow2 = dHy_deta / b_h;
        Brow3 = dHx_deta / b_h + dHy_dxi / a_h;
        B = [Brow1; Brow2; Brow3];

        % Jacobiano para integración (constante en mesh rectangular)
        K_e = K_e + (B')*D*B * (a_h*b_h*wgt);
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

%% BC (igual que SAP 2000)
k_s = 1e20;
for i = 1:n_s
    j_n = s_j(i);
    g = n_dof*(j_n - 1);
    K(g+1, g+1) = K(g+1, g+1) + k_s;
    is_x = (x_j(j_n) <= 1e-9 || x_j(j_n) >= a - 1e-9);
    is_y = (y_j(j_n) <= 1e-9 || y_j(j_n) >= b - 1e-9);
    if is_x && is_y
        K(g+2, g+2) = K(g+2, g+2) + k_s;
        K(g+3, g+3) = K(g+3, g+3) + k_s;
    elseif is_x
        K(g+3, g+3) = K(g+3, g+3) + k_s;
    elseif is_y
        K(g+2, g+2) = K(g+2, g+2) + k_s;
    end
end

%% Solve
Z = K \ F;

%% w por nodo
w_nodo = zeros(n_j, 1);
for j = 1:n_j
    w_nodo(j) = Z(n_dof*(j-1)+1);
end
w_nodo_mm = w_nodo * 1000;
j_centro = round(n_a/2)*(n_b+1) + round(n_b/2) + 1;
w_centro_mm = w_nodo_mm(j_centro)

%% Postproceso momentos: evaluar B en 2×2 Gauss → extrapolar a nodos (SAP-style)
% Extrapolación bilineal Gauss→nodos: multiplicar coord Gauss por √3
% para mapear (±1/√3) → (±1)
sqrt3 = 1.7320508075688772;
% Coord Gauss en orden 1=(-1/√3,-1/√3), 2=(+1/√3,-1/√3), 3=(+1/√3,+1/√3), 4=(-1/√3,+1/√3)
gp_corner = sqrt3;   % multiplicador para llegar al corner desde Gauss
M_j = zeros(3, n_j);
c_j = zeros(n_j, 1);

for e = 1:n_e
    Z_e = zeros(n_k, 1);
    for i = 1:4
        gi = e_j(e, i);
        for ii = 1:n_dof
            Z_e(n_dof*(i-1)+ii) = Z(n_dof*(gi-1)+ii);
        end
    end
    % Evaluar M en los 4 Gauss points
    M_gauss = zeros(3, 4);
    g_idx = 0;
    for jg = 1:2
        for ig = 1:2
            g_idx = g_idx + 1;
            xi = gp(ig);
            eta = gp(jg);
            % Build B at this Gauss point (same code as above)
            N_q8 = zeros(1, 8); dN_dxi = zeros(1, 8); dN_deta = zeros(1, 8);
            for k = 1:4
                si = xi_q8(k); ti = eta_q8(k);
                N_q8(k) = 0.25*(1+si*xi)*(1+ti*eta)*(si*xi + ti*eta - 1);
                dN_dxi(k)  = 0.25*si*(1+ti*eta)*(2*si*xi + ti*eta);
                dN_deta(k) = 0.25*ti*(1+si*xi)*(si*xi + 2*ti*eta);
            end
            N_q8(5) = 0.5*(1-xi^2)*(1-eta); dN_dxi(5) = -xi*(1-eta); dN_deta(5) = -0.5*(1-xi^2);
            N_q8(6) = 0.5*(1+xi)*(1-eta^2); dN_dxi(6) = 0.5*(1-eta^2); dN_deta(6) = -eta*(1+xi);
            N_q8(7) = 0.5*(1-xi^2)*(1+eta); dN_dxi(7) = -xi*(1+eta); dN_deta(7) = 0.5*(1-xi^2);
            N_q8(8) = 0.5*(1-xi)*(1-eta^2); dN_dxi(8) = -0.5*(1-eta^2); dN_deta(8) = -eta*(1-xi);

            Hx = zeros(1, n_k); Hy = zeros(1, n_k);
            dHx_dxi = zeros(1, n_k); dHx_deta = zeros(1, n_k);
            dHy_dxi = zeros(1, n_k); dHy_deta = zeros(1, n_k);
            % DOF 1 = w_1
            dHx_dxi(1) = -c_a*dN_dxi(5);  dHx_deta(1) = -c_a*dN_deta(5);
            dHy_dxi(1) = -c_b*dN_dxi(8);  dHy_deta(1) = -c_b*dN_deta(8);
            % DOF 2 = βx_1
            dHx_dxi(2)  = dN_dxi(1)  - 0.25*dN_dxi(5)  + 0.5*dN_dxi(8);
            dHx_deta(2) = dN_deta(1) - 0.25*dN_deta(5) + 0.5*dN_deta(8);
            % DOF 3 = βy_1
            dHy_dxi(3)  = dN_dxi(1)  + 0.5*dN_dxi(5)  - 0.25*dN_dxi(8);
            dHy_deta(3) = dN_deta(1) + 0.5*dN_deta(5) - 0.25*dN_deta(8);
            % DOF 4 = w_2
            dHx_dxi(4) = c_a*dN_dxi(5);  dHx_deta(4) = c_a*dN_deta(5);
            dHy_dxi(4) = -c_b*dN_dxi(6); dHy_deta(4) = -c_b*dN_deta(6);
            % DOF 5 = βx_2
            dHx_dxi(5)  = dN_dxi(2)  - 0.25*dN_dxi(5)  + 0.5*dN_dxi(6);
            dHx_deta(5) = dN_deta(2) - 0.25*dN_deta(5) + 0.5*dN_deta(6);
            % DOF 6 = βy_2
            dHy_dxi(6)  = dN_dxi(2)  + 0.5*dN_dxi(5)  - 0.25*dN_dxi(6);
            dHy_deta(6) = dN_deta(2) + 0.5*dN_deta(5) - 0.25*dN_deta(6);
            % DOF 7 = w_3
            dHx_dxi(7) = c_a*dN_dxi(7);  dHx_deta(7) = c_a*dN_deta(7);
            dHy_dxi(7) = c_b*dN_dxi(6);  dHy_deta(7) = c_b*dN_deta(6);
            % DOF 8 = βx_3
            dHx_dxi(8)  = dN_dxi(3)  + 0.5*dN_dxi(6)  - 0.25*dN_dxi(7);
            dHx_deta(8) = dN_deta(3) + 0.5*dN_deta(6) - 0.25*dN_deta(7);
            % DOF 9 = βy_3
            dHy_dxi(9)  = dN_dxi(3)  - 0.25*dN_dxi(6)  + 0.5*dN_dxi(7);
            dHy_deta(9) = dN_deta(3) - 0.25*dN_deta(6) + 0.5*dN_deta(7);
            % DOF 10 = w_4
            dHx_dxi(10) = -c_a*dN_dxi(7); dHx_deta(10) = -c_a*dN_deta(7);
            dHy_dxi(10) = c_b*dN_dxi(8);  dHy_deta(10) = c_b*dN_deta(8);
            % DOF 11 = βx_4
            dHx_dxi(11)  = dN_dxi(4)  - 0.25*dN_dxi(7)  + 0.5*dN_dxi(8);
            dHx_deta(11) = dN_deta(4) - 0.25*dN_deta(7) + 0.5*dN_deta(8);
            % DOF 12 = βy_4
            dHy_dxi(12)  = dN_dxi(4)  + 0.5*dN_dxi(7)  - 0.25*dN_dxi(8);
            dHy_deta(12) = dN_deta(4) + 0.5*dN_deta(7) - 0.25*dN_deta(8);

            Brow1 = dHx_dxi  / a_h;
            Brow2 = dHy_deta / b_h;
            Brow3 = dHx_deta / b_h + dHy_dxi / a_h;
            B = [Brow1; Brow2; Brow3];
            M_local = -D * B * Z_e;
            M_gauss(1, g_idx) = M_local(1);
            M_gauss(2, g_idx) = M_local(2);
            M_gauss(3, g_idx) = M_local(3);
        end
    end
    % Extrapolación bilineal Gauss → 4 corners del elemento
    % Corner order: 1=(-1,-1), 2=(+1,-1), 3=(+1,+1), 4=(-1,+1)
    % Gauss order: 1=(-,-), 2=(+,-), 3=(+,+), 4=(-,+) en el código de doble loop (ig=1..2, jg=1..2)
    % Pero en mi loop: g_idx = 1: (ig=1,jg=1)=(- ,-), g_idx=2: (ig=2,jg=1)=(+,-), g_idx=3:(ig=1,jg=2)=(-,+), g_idx=4:(ig=2,jg=2)=(+,+)
    % Mapping para extrapolar:
    % corner_i = N_1_extrap(xi_corner)*M_gauss(1) + N_2_extrap*M_gauss(2) + ...
    % donde N_k_extrap = (1/4)(1 + xi_g_k*sqrt3*xi_c)(1 + eta_g_k*sqrt3*eta_c)
    xi_corner  = [-1,  1, 1, -1];
    eta_corner = [-1, -1, 1,  1];
    xi_gauss   = [-1,  1, -1,  1];   % g_idx=1..4 → (ig=1,jg=1), (ig=2,jg=1), (ig=1,jg=2), (ig=2,jg=2)
    eta_gauss  = [-1, -1,  1,  1];
    for i = 1:4
        xc = xi_corner(i);
        ec = eta_corner(i);
        Mxx_c = 0; Myy_c = 0; Mxy_c = 0;
        for k = 1:4
            Nk = 0.25 * (1 + xi_gauss(k)*sqrt3*xc) * (1 + eta_gauss(k)*sqrt3*ec);
            Mxx_c = Mxx_c + Nk * M_gauss(1, k);
            Myy_c = Myy_c + Nk * M_gauss(2, k);
            Mxy_c = Mxy_c + Nk * M_gauss(3, k);
        end
        j_nod = e_j(e, i);
        M_j(1, j_nod) = M_j(1, j_nod) + Mxx_c;
        M_j(2, j_nod) = M_j(2, j_nod) + Myy_c;
        M_j(3, j_nod) = M_j(3, j_nod) + Mxy_c;
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

Mx_centro = M_j(1, j_centro)
My_centro = M_j(2, j_centro)
Mxy_esquina = M_j(3, 1)

%% Reporte
fprintf('══════════════════════════════════════════════════════════════════\n')
fprintf('  Rectangular Slab FEA — Batoz DKQ (igual SAP 2000 Plate-Thin)\n')
fprintf('══════════════════════════════════════════════════════════════════\n')
fprintf('  Elemento     : Batoz-Tahar Discrete Kirchhoff Quadrilateral\n')
fprintf('  GDLs/nodo    : 3 (w, β_x, β_y)\n')
fprintf('  Recovery     : 2×2 Gauss + extrapolación bilineal a nodos (SAP-style)\n')
fprintf('  ──────────────────────────────────────────────────────────────────\n')
fprintf('                Calcpad-Lab(DKQ)    SAP 2000 v24      Δ %%\n')
fprintf('  w_centro    :   %+8.4f mm       %+8.4f mm     %+.2f%%\n', w_centro_mm, -6.5286, 100*(abs(w_centro_mm)-6.5286)/6.5286)
fprintf('  M_x centro  :   %+8.4f kNm/m     %+8.4f kNm/m   %+.2f%%\n', Mx_centro, 6.2249, 100*(Mx_centro-6.2249)/6.2249)
fprintf('  M_y centro  :   %+8.4f kNm/m     %+8.4f kNm/m   %+.2f%%\n', My_centro, 12.7592, 100*(My_centro-12.7592)/12.7592)
fprintf('  M_xy esq.   :   %+8.4f kNm/m     %+8.4f kNm/m   %+.2f%%\n', Mxy_esquina, -7.2541, 100*(abs(Mxy_esquina)-7.2541)/7.2541)
fprintf('  ──────────────────────────────────────────────────────────────────\n')
fprintf('  Tiempo total : %.3f s\n', toc(t_total))
fprintf('══════════════════════════════════════════════════════════════════\n')

%% Plots
T = zeros(2*n_e, 3);
for e = 1:n_e
    T(2*e-1, 1) = e_j(e, 1); T(2*e-1, 2) = e_j(e, 2); T(2*e-1, 3) = e_j(e, 3);
    T(2*e, 1)   = e_j(e, 1); T(2*e, 2)   = e_j(e, 3); T(2*e, 3)   = e_j(e, 4);
end
V = [x_j, y_j];

figure
patch('Faces', T, 'Vertices', V, 'FaceVertexCData', w_nodo_mm, 'FaceColor', 'interp', 'EdgeColor', 'none')
title(sprintf('DKQ: Deflexión w [mm] — w_{centro}=%.4f mm (SAP: 6.5286)', w_centro_mm))
xlabel('x [m]'); ylabel('y [m]'); colorbar

figure
patch('Faces', T, 'Vertices', V, 'FaceVertexCData', M_j(1,:)', 'FaceColor', 'interp', 'EdgeColor', 'none')
title(sprintf('DKQ: M_x [kNm/m] — centro=%.4f (SAP: 6.2249)', Mx_centro))
xlabel('x [m]'); ylabel('y [m]'); colorbar

figure
patch('Faces', T, 'Vertices', V, 'FaceVertexCData', M_j(2,:)', 'FaceColor', 'interp', 'EdgeColor', 'none')
title(sprintf('DKQ: M_y [kNm/m] — centro=%.4f (SAP: 12.7592)', My_centro))
xlabel('x [m]'); ylabel('y [m]'); colorbar

figure
patch('Faces', T, 'Vertices', V, 'FaceVertexCData', M_j(3,:)', 'FaceColor', 'interp', 'EdgeColor', 'none')
title(sprintf('DKQ: M_{xy} [kNm/m] — esquina=%.4f (SAP: -7.2541)', Mxy_esquina))
xlabel('x [m]'); ylabel('y [m]'); colorbar

figure
trisurf(T, x_j, y_j, w_nodo_mm, w_nodo_mm);
title(sprintf('DKQ: Deflexión 3D — w_{centro}=%.4f mm', w_centro_mm))
xlabel('x [m]'); ylabel('y [m]'); zlabel('w [mm]')

fprintf('Done — Batoz DKQ (igual SAP 2000) con 5 figuras.\n')
