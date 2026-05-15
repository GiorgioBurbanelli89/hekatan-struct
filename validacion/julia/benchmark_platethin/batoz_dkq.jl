# =============================================================================
#  Batoz DKQ — Julia implementation
#  Misma fórmula que Python/C++/MATLAB — debe dar mismo resultado que SAP 2000
#
#  Esperado: w_c=6.5286, Mx_c=6.2249, My_c=12.7592, Mxy_esq=-7.2541
# =============================================================================
using LinearAlgebra
using Printf

# Datos
const a, b = 6.0, 4.0
const tt = 0.10
const E = 35e6
const nu = 0.15
const q = 10.0
const n_a, n_b = 6, 4
const n_e = n_a * n_b
const n_j = (n_a + 1) * (n_b + 1)
const n_dof = 3
const n_k = 12
const a_1 = a / n_a
const b_1 = b / n_b
const n_g = n_dof * n_j
const a_h = a_1 / 2
const b_h = b_1 / 2
const c_a = 1.5 / a_1
const c_b = 1.5 / b_1

# Mesh
x_j = zeros(n_j)
y_j = zeros(n_j)
let x = 0.0, y = 0.0
    for j = 1:n_j
        x_j[j] = x
        y_j[j] = y
        y += b_1
        if y > b + 1e-9
            y = 0.0
            x += a_1
        end
    end
end

e_j = zeros(Int, n_e, 4)
for ia = 1:n_a, ib = 1:n_b
    e = ib + n_b * (ia - 1)
    j0 = e + ia - 1
    e_j[e, 1] = j0
    e_j[e, 2] = j0 + n_b + 1
    e_j[e, 3] = j0 + n_b + 2
    e_j[e, 4] = j0 + 1
end

# Apoyos perimetrales (1-indexed)
s_j = Int[]
for i = 1:n_a+1
    push!(s_j, (n_b + 1) * i - n_b)
    push!(s_j, (n_b + 1) * i)
end
for i = 2:n_b
    push!(s_j, i)
    push!(s_j, n_a * (n_b + 1) + i)
end

# Constitutiva
D11 = E * tt^3 / (12 * (1 - nu^2))
D = D11 * [1.0  nu  0.0;
            nu  1.0  0.0;
            0.0  0.0  (1 - nu) / 2]

# Cuadratura 2×2 Gauss
gp = [-1/sqrt(3), 1/sqrt(3)]
gw = [1.0, 1.0]

function dkq_eval_B(xi::Float64, eta::Float64)
    # Q8 Serendipity N + derivadas
    xi_q8 = [-1.0, 1.0, 1.0, -1.0, 0.0, 1.0, 0.0, -1.0]
    eta_q8 = [-1.0, -1.0, 1.0, 1.0, -1.0, 0.0, 1.0, 0.0]

    N = zeros(8)
    dNdxi = zeros(8)
    dNdeta = zeros(8)
    for k = 1:4
        s, t_ = xi_q8[k], eta_q8[k]
        N[k] = 0.25 * (1 + s*xi) * (1 + t_*eta) * (s*xi + t_*eta - 1)
        dNdxi[k]  = 0.25 * s * (1 + t_*eta) * (2*s*xi + t_*eta)
        dNdeta[k] = 0.25 * t_ * (1 + s*xi) * (s*xi + 2*t_*eta)
    end
    # Midside 5 (0,-1)
    N[5] = 0.5 * (1 - xi^2) * (1 - eta)
    dNdxi[5]  = -xi * (1 - eta)
    dNdeta[5] = -0.5 * (1 - xi^2)
    # Midside 6 (+1, 0)
    N[6] = 0.5 * (1 + xi) * (1 - eta^2)
    dNdxi[6]  = 0.5 * (1 - eta^2)
    dNdeta[6] = -eta * (1 + xi)
    # Midside 7 (0,+1)
    N[7] = 0.5 * (1 - xi^2) * (1 + eta)
    dNdxi[7]  = -xi * (1 + eta)
    dNdeta[7] = 0.5 * (1 - xi^2)
    # Midside 8 (-1, 0)
    N[8] = 0.5 * (1 - xi) * (1 - eta^2)
    dNdxi[8]  = -0.5 * (1 - eta^2)
    dNdeta[8] = -eta * (1 - xi)

    # Substituir midside DOFs en función de corner DOFs (Kirchhoff discreto)
    dHx_dxi = zeros(12)
    dHx_deta = zeros(12)
    dHy_dxi = zeros(12)
    dHy_deta = zeros(12)

    # DOF 1: w_1
    dHx_dxi[1]  = -c_a * dNdxi[5]
    dHx_deta[1] = -c_a * dNdeta[5]
    dHy_dxi[1]  = -c_b * dNdxi[8]
    dHy_deta[1] = -c_b * dNdeta[8]
    # DOF 2: βx_1
    dHx_dxi[2]  = dNdxi[1]  - 0.25 * dNdxi[5]  + 0.5 * dNdxi[8]
    dHx_deta[2] = dNdeta[1] - 0.25 * dNdeta[5] + 0.5 * dNdeta[8]
    # DOF 3: βy_1
    dHy_dxi[3]  = dNdxi[1]  + 0.5 * dNdxi[5]  - 0.25 * dNdxi[8]
    dHy_deta[3] = dNdeta[1] + 0.5 * dNdeta[5] - 0.25 * dNdeta[8]
    # DOF 4: w_2
    dHx_dxi[4]  = c_a * dNdxi[5]
    dHx_deta[4] = c_a * dNdeta[5]
    dHy_dxi[4]  = -c_b * dNdxi[6]
    dHy_deta[4] = -c_b * dNdeta[6]
    # DOF 5: βx_2
    dHx_dxi[5]  = dNdxi[2]  - 0.25 * dNdxi[5]  + 0.5 * dNdxi[6]
    dHx_deta[5] = dNdeta[2] - 0.25 * dNdeta[5] + 0.5 * dNdeta[6]
    # DOF 6: βy_2
    dHy_dxi[6]  = dNdxi[2]  + 0.5 * dNdxi[5]  - 0.25 * dNdxi[6]
    dHy_deta[6] = dNdeta[2] + 0.5 * dNdeta[5] - 0.25 * dNdeta[6]
    # DOF 7: w_3
    dHx_dxi[7]  = c_a * dNdxi[7]
    dHx_deta[7] = c_a * dNdeta[7]
    dHy_dxi[7]  = c_b * dNdxi[6]
    dHy_deta[7] = c_b * dNdeta[6]
    # DOF 8: βx_3
    dHx_dxi[8]  = dNdxi[3]  + 0.5 * dNdxi[6]  - 0.25 * dNdxi[7]
    dHx_deta[8] = dNdeta[3] + 0.5 * dNdeta[6] - 0.25 * dNdeta[7]
    # DOF 9: βy_3
    dHy_dxi[9]  = dNdxi[3]  - 0.25 * dNdxi[6]  + 0.5 * dNdxi[7]
    dHy_deta[9] = dNdeta[3] - 0.25 * dNdeta[6] + 0.5 * dNdeta[7]
    # DOF 10: w_4
    dHx_dxi[10]  = -c_a * dNdxi[7]
    dHx_deta[10] = -c_a * dNdeta[7]
    dHy_dxi[10]  = c_b * dNdxi[8]
    dHy_deta[10] = c_b * dNdeta[8]
    # DOF 11: βx_4
    dHx_dxi[11]  = dNdxi[4]  - 0.25 * dNdxi[7]  + 0.5 * dNdxi[8]
    dHx_deta[11] = dNdeta[4] - 0.25 * dNdeta[7] + 0.5 * dNdeta[8]
    # DOF 12: βy_4
    dHy_dxi[12]  = dNdxi[4]  + 0.5 * dNdxi[7]  - 0.25 * dNdxi[8]
    dHy_deta[12] = dNdeta[4] + 0.5 * dNdeta[7] - 0.25 * dNdeta[8]

    B = zeros(3, 12)
    B[1, :] = dHx_dxi / a_h
    B[2, :] = dHy_deta / b_h
    B[3, :] = dHx_deta / b_h .+ dHy_dxi / a_h
    return B
end

# Element K_e
K_e = zeros(12, 12)
for ig = 1:2, jg = 1:2
    xi, eta = gp[ig], gp[jg]
    wgt = gw[ig] * gw[jg]
    B = dkq_eval_B(xi, eta)
    K_e .+= B' * D * B .* (a_h * b_h * wgt)
end

# Consistent load Q4 bilineal: q*a_1*b_1/4 en DOFs de w
F_e = zeros(12)
F_e[1] = q * a_1 * b_1 / 4
F_e[4] = q * a_1 * b_1 / 4
F_e[7] = q * a_1 * b_1 / 4
F_e[10] = q * a_1 * b_1 / 4

# Ensamblaje global
t0 = time()
K = zeros(n_g, n_g)
F = zeros(n_g)
for e = 1:n_e
    gdl = Int[]
    for i = 1:4
        gi = e_j[e, i]
        for ii = 1:n_dof
            push!(gdl, n_dof * (gi - 1) + ii)
        end
    end
    K[gdl, gdl] .+= K_e
    F[gdl] .+= F_e
end

# BC penalty
k_s = 1e20
for j_n in s_j
    g = n_dof * (j_n - 1) + 1
    K[g, g] += k_s
    is_x = (x_j[j_n] < 1e-9) || (x_j[j_n] > a - 1e-9)
    is_y = (y_j[j_n] < 1e-9) || (y_j[j_n] > b - 1e-9)
    if is_x && is_y
        K[g+1, g+1] += k_s
        K[g+2, g+2] += k_s
    elseif is_x
        K[g+2, g+2] += k_s
    elseif is_y
        K[g+1, g+1] += k_s
    end
end

# Solve
Z = K \ F
t_solve = (time() - t0) * 1000

# w por nodo
w_nodo_mm = zeros(n_j)
for j = 1:n_j
    w_nodo_mm[j] = Z[n_dof * (j - 1) + 1] * 1000
end
j_centro = (n_a ÷ 2) * (n_b + 1) + (n_b ÷ 2) + 1
w_centro = w_nodo_mm[j_centro]

# Momentos via 2×2 Gauss + extrapolación bilineal a corners
sqrt3 = sqrt(3.0)
M_j = zeros(3, n_j)
c_j = zeros(Int, n_j)
xi_corner = [-1.0, 1.0, 1.0, -1.0]
eta_corner = [-1.0, -1.0, 1.0, 1.0]
xi_gauss = [-1.0, 1.0, -1.0, 1.0]
eta_gauss = [-1.0, -1.0, 1.0, 1.0]

for e = 1:n_e
    gdl = Int[]
    for i = 1:4
        gi = e_j[e, i]
        for ii = 1:n_dof
            push!(gdl, n_dof * (gi - 1) + ii)
        end
    end
    Ze = Z[gdl]
    Mg = zeros(3, 4)
    g_idx = 0
    for jg = 1:2, ig = 1:2
        g_idx += 1
        xi, eta = gp[ig], gp[jg]
        B = dkq_eval_B(xi, eta)
        Mg[:, g_idx] = -D * B * Ze
    end
    for c = 1:4
        xc, ec = xi_corner[c], eta_corner[c]
        Mxx_c = 0.0; Myy_c = 0.0; Mxy_c = 0.0
        for k = 1:4
            Nk = 0.25 * (1 + xi_gauss[k]*sqrt3*xc) * (1 + eta_gauss[k]*sqrt3*ec)
            Mxx_c += Nk * Mg[1, k]
            Myy_c += Nk * Mg[2, k]
            Mxy_c += Nk * Mg[3, k]
        end
        j_nod = e_j[e, c]
        M_j[1, j_nod] += Mxx_c
        M_j[2, j_nod] += Myy_c
        M_j[3, j_nod] += Mxy_c
        c_j[j_nod] += 1
    end
end

for j = 1:n_j
    if c_j[j] > 0
        M_j[:, j] ./= c_j[j]
    end
end

Mx_centro = M_j[1, j_centro]
My_centro = M_j[2, j_centro]
Mxy_esquina = M_j[3, 1]

# Reporte
SAP_W = 6.5286
SAP_MX = 6.2249
SAP_MY = 12.7592
SAP_MXY = -7.2541

println(repeat("=", 70))
println("  Batoz DKQ — Julia implementation (validacion vs SAP 2000)")
println(repeat("=", 70))
@printf "  Malla         : %d × %d (%d nodos, %d GDL)\n" n_a n_b n_j n_g
@printf "  Tiempo solve  : %.2f ms\n" t_solve
println(repeat("-", 70))
@printf "  %-14s %14s %14s %10s\n" "Métrica" "Julia" "SAP 2000" "Δ %"
@printf "  %-14s %14.6f %14.6f %+9.4f%%\n" "w_centro" w_centro SAP_W (abs(w_centro)-SAP_W)/SAP_W*100
@printf "  %-14s %14.6f %14.6f %+9.4f%%\n" "Mx centro" Mx_centro SAP_MX (Mx_centro-SAP_MX)/SAP_MX*100
@printf "  %-14s %14.6f %14.6f %+9.4f%%\n" "My centro" My_centro SAP_MY (My_centro-SAP_MY)/SAP_MY*100
@printf "  %-14s %14.6f %14.6f %+9.4f%%\n" "Mxy esquina" Mxy_esquina SAP_MXY (abs(Mxy_esquina)-abs(SAP_MXY))/abs(SAP_MXY)*100
println(repeat("=", 70))
