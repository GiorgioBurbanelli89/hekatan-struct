#=
========================================================================
 Plate Thin Q4-BFS (Bogner-Fox-Schmit) — Julia — replica EXACTA Calcpad
 Track: validacion/julia/
========================================================================

 Misma formulacion que validacion/python-fem/plate_thin_bfs_calcpad.py
 y que Calcpad-oficial/.../Rectangular Slab FEA.cpd.

 Objetivo: demostrar que con la MISMA formulacion BFS, Python y Julia
 dan EXACTAMENTE los mismos numeros que Calcpad.
========================================================================
=#

using LinearAlgebra
using SparseArrays
using Statistics
using Printf

# Parametros (identicos a Python BFS y Calcpad)
const a, b    = 6.0, 4.0
const t_pl    = 0.10
const q_load  = 10.0
const E_mod   = 35e6
const nu      = 0.15
const n_a     = 6
const n_b     = 4
const n_e     = n_a * n_b
const n_j     = (n_a + 1) * (n_b + 1)
const a_1     = a / n_a
const b_1     = b / n_b
const n_dof   = 4
const n_k     = 16
const n_g     = n_dof * n_j

println(repeat("=", 72))
println("  Plate Thin Q4-BFS — Julia — replica Calcpad")
println(repeat("=", 72))
@printf("  Placa     : %.1f x %.1f m, t = %.2f m\n", a, b, t_pl)
@printf("  Material  : E = %.0f GPa, nu = %.2f\n", E_mod/1e6, nu)
@printf("  Carga     : q = %.1f kN/m^2 (descendente)\n", q_load)
@printf("  Mesh      : %d x %d = %d Q4-BFS (%d nodos, %d GDL)\n", n_a, n_b, n_e, n_j, n_g)
println("  BC        : Simply supported (w=0 en 4 bordes)")
println(repeat("=", 72))

# Nodos (column-major: y inner, x outer)
function build_nodes()
    x_j = zeros(n_j)
    y_j = zeros(n_j)
    xx, yy = 0.0, 0.0
    for j in 1:n_j
        x_j[j] = xx
        y_j[j] = yy
        yy += b_1
        if yy > b + 1e-9
            yy = 0.0
            xx += a_1
        end
    end
    return x_j, y_j
end
x_j, y_j = build_nodes()

# Connectivity
e_j = zeros(Int, n_e, 4)
for ia in 1:n_a, ib in 1:n_b
    e = ib + n_b * (ia - 1)
    j_corner = e + ia - 1
    e_j[e, 1] = j_corner
    e_j[e, 2] = j_corner + n_b + 1
    e_j[e, 3] = j_corner + n_b + 2
    e_j[e, 4] = j_corner + 1
end

# Supported joints
sj_set = Set{Int}()
for j in 1:(n_b+1); push!(sj_set, j); end
for j in 1:(n_b+1); push!(sj_set, n_a*(n_b+1) + j); end
for i in 1:(n_a+1); push!(sj_set, (i-1)*(n_b+1) + 1); end
for i in 1:(n_a+1); push!(sj_set, (i-1)*(n_b+1) + (n_b+1)); end
s_j = sort(collect(sj_set))
@printf("  Nodos en bordes: %d  (esperado: %d)\n", length(s_j), 2*(n_a + n_b))

# Constitutive matrix (Kirchhoff bending)
const D = E_mod * t_pl^3 / (12.0 * (1 - nu^2)) .* [
    1.0 nu  0.0;
    nu  1.0 0.0;
    0.0 0.0 0.5*(1 - nu)
]
@printf("  D = %.3f kN*m\n", D[1,1])

# Hermitian shape functions on [0, 1] (igual que Calcpad y Python)
shape_along(xi, l)         = (1 - xi^2*(3 - 2*xi),
                              xi*l*(1 - xi*(2 - xi)),
                              xi^2*(3 - 2*xi),
                              xi^2*l*(xi - 1))
shape_2nd_along(xi, l)     = (-(6/l^2)*(1 - 2*xi),
                              -(2/l)*(2 - 3*xi),
                               (6/l^2)*(1 - 2*xi),
                              -(2/l)*(1 - 3*xi))
shape_1st_along(xi, l)     = (-6*(xi/l)*(1 - xi),
                              1.0 - xi*(4 - 3*xi),
                              6*(xi/l)*(1 - xi),
                              -xi*(2 - 3*xi))

# Gauss-Legendre 4x4 on [0, 1]
const gp_v = [0.0694318442029737, 0.3300094782075719, 0.6699905217924281, 0.9305681557970263]
const gw_v = [0.1739274225687269, 0.3260725774312731, 0.3260725774312731, 0.1739274225687269]

# Element stiffness K_e (16x16) — Kirchhoff bending
function element_stiffness(a1::Float64, b1::Float64, D::Matrix{Float64})
    Ke = zeros(16, 16)
    for ig in 1:4, jg in 1:4
        xi  = gp_v[ig]
        eta = gp_v[jg]
        wgt = gw_v[ig] * gw_v[jg]
        P1a, P2a, P3a, P4a       = shape_along(xi, a1)
        Pdd1a, Pdd2a, Pdd3a, Pdd4a = shape_2nd_along(xi, a1)
        Pd1a, Pd2a, Pd3a, Pd4a     = shape_1st_along(xi, a1)
        P1b, P2b, P3b, P4b       = shape_along(eta, b1)
        Pdd1b, Pdd2b, Pdd3b, Pdd4b = shape_2nd_along(eta, b1)
        Pd1b, Pd2b, Pd3b, Pd4b     = shape_1st_along(eta, b1)

        B1 = [Pdd1a*P1b  Pdd2a*P1b  Pdd1a*P2b  Pdd2a*P2b  Pdd3a*P1b  Pdd4a*P1b  Pdd3a*P2b  Pdd4a*P2b  Pdd3a*P3b  Pdd4a*P3b  Pdd3a*P4b  Pdd4a*P4b  Pdd1a*P3b  Pdd2a*P3b  Pdd1a*P4b  Pdd2a*P4b]
        B2 = [P1a*Pdd1b  P2a*Pdd1b  P1a*Pdd2b  P2a*Pdd2b  P3a*Pdd1b  P4a*Pdd1b  P3a*Pdd2b  P4a*Pdd2b  P3a*Pdd3b  P4a*Pdd3b  P3a*Pdd4b  P4a*Pdd4b  P1a*Pdd3b  P2a*Pdd3b  P1a*Pdd4b  P2a*Pdd4b]
        B3 = 2.0 .* [Pd1a*Pd1b  Pd2a*Pd1b  Pd1a*Pd2b  Pd2a*Pd2b  Pd3a*Pd1b  Pd4a*Pd1b  Pd3a*Pd2b  Pd4a*Pd2b  Pd3a*Pd3b  Pd4a*Pd3b  Pd3a*Pd4b  Pd4a*Pd4b  Pd1a*Pd3b  Pd2a*Pd3b  Pd1a*Pd4b  Pd2a*Pd4b]
        B = [B1; B2; B3]
        Ke .+= (B' * D * B) * (a1 * b1 * wgt)
    end
    return Ke
end

function element_load(a1::Float64, b1::Float64, q::Float64)
    fe = zeros(16)
    for ig in 1:4, jg in 1:4
        xi  = gp_v[ig]
        eta = gp_v[jg]
        wgt = gw_v[ig] * gw_v[jg]
        P1a, P2a, P3a, P4a = shape_along(xi, a1)
        P1b, P2b, P3b, P4b = shape_along(eta, b1)
        Nshape = [P1a*P1b, P2a*P1b, P1a*P2b, P2a*P2b,
                  P3a*P1b, P4a*P1b, P3a*P2b, P4a*P2b,
                  P3a*P3b, P4a*P3b, P3a*P4b, P4a*P4b,
                  P1a*P3b, P2a*P3b, P1a*P4b, P2a*P4b]
        fe .+= q .* Nshape .* (a1 * b1 * wgt)
    end
    return fe
end

# Assembly
println("  Ensamblando...")
t0 = time()
Ke_proto = element_stiffness(a_1, b_1, D)
fe_proto = element_load(a_1, b_1, -q_load)

I_rows = Int[]
J_cols = Int[]
K_vals = Float64[]
F = zeros(n_g)

for e in 1:n_e
    for i in 1:4
        gi = e_j[e, i]
        for ii in 1:4
            row_glob = n_dof * (gi - 1) + ii
            row_loc  = 4 * (i - 1) + ii
            F[row_glob] += fe_proto[row_loc]
            for j in 1:4
                gj = e_j[e, j]
                for jj in 1:4
                    col_glob = n_dof * (gj - 1) + jj
                    col_loc  = 4 * (j - 1) + jj
                    push!(I_rows, row_glob)
                    push!(J_cols, col_glob)
                    push!(K_vals, Ke_proto[row_loc, col_loc])
                end
            end
        end
    end
end
K = sparse(I_rows, J_cols, K_vals, n_g, n_g)
t_asm = time() - t0
@printf("  Ensamblaje: %.1f ms\n", t_asm * 1000)

# BC penalty
penalty = 1e20
for nd in s_j
    g = n_dof * (nd - 1) + 1
    K[g, g] += penalty
end

# Solve
t0 = time()
Z = K \ F
t_solve = time() - t0
@printf("  Solve     : %.1f ms\n", t_solve * 1000)

# Post-process
n_center_i = div(n_a, 2)
n_center_j = div(n_b, 2)
n_center   = n_center_i * (n_b + 1) + n_center_j + 1
w_center_m = Z[n_dof * (n_center - 1) + 1]
@printf("  w_center  = %.6e m  (%.4f mm)\n", w_center_m, w_center_m * 1000)

w_all = Z[1:n_dof:end]
w_max_m = minimum(w_all)
@printf("  w_max     = %.6e m  (%.4f mm)\n", w_max_m, w_max_m * 1000)

# Bending moments at nodes (average across neighboring elements)
M_acc = zeros(n_j, 3)
c_acc = zeros(Int, n_j)
NODE_XI  = [0.0, 1.0, 1.0, 0.0]
NODE_ETA = [0.0, 0.0, 1.0, 1.0]

for e in 1:n_e
    Z_e = zeros(16)
    for i in 1:4
        gi = e_j[e, i]
        for ii in 1:4
            Z_e[4*(i-1) + ii] = Z[n_dof*(gi-1) + ii]
        end
    end
    for k in 1:4
        xi  = NODE_XI[k]
        eta = NODE_ETA[k]
        P1a, P2a, P3a, P4a       = shape_along(xi, a_1)
        Pdd1a, Pdd2a, Pdd3a, Pdd4a = shape_2nd_along(xi, a_1)
        Pd1a, Pd2a, Pd3a, Pd4a     = shape_1st_along(xi, a_1)
        P1b, P2b, P3b, P4b       = shape_along(eta, b_1)
        Pdd1b, Pdd2b, Pdd3b, Pdd4b = shape_2nd_along(eta, b_1)
        Pd1b, Pd2b, Pd3b, Pd4b     = shape_1st_along(eta, b_1)
        B1 = [Pdd1a*P1b  Pdd2a*P1b  Pdd1a*P2b  Pdd2a*P2b  Pdd3a*P1b  Pdd4a*P1b  Pdd3a*P2b  Pdd4a*P2b  Pdd3a*P3b  Pdd4a*P3b  Pdd3a*P4b  Pdd4a*P4b  Pdd1a*P3b  Pdd2a*P3b  Pdd1a*P4b  Pdd2a*P4b]
        B2 = [P1a*Pdd1b  P2a*Pdd1b  P1a*Pdd2b  P2a*Pdd2b  P3a*Pdd1b  P4a*Pdd1b  P3a*Pdd2b  P4a*Pdd2b  P3a*Pdd3b  P4a*Pdd3b  P3a*Pdd4b  P4a*Pdd4b  P1a*Pdd3b  P2a*Pdd3b  P1a*Pdd4b  P2a*Pdd4b]
        B3 = 2.0 .* [Pd1a*Pd1b  Pd2a*Pd1b  Pd1a*Pd2b  Pd2a*Pd2b  Pd3a*Pd1b  Pd4a*Pd1b  Pd3a*Pd2b  Pd4a*Pd2b  Pd3a*Pd3b  Pd4a*Pd3b  Pd3a*Pd4b  Pd4a*Pd4b  Pd1a*Pd3b  Pd2a*Pd3b  Pd1a*Pd4b  Pd2a*Pd4b]
        B = [B1; B2; B3]
        M_node = -D * B * Z_e
        global_node = e_j[e, k]
        M_acc[global_node, :] .+= vec(M_node)
        c_acc[global_node] += 1
    end
end

M_nodal = zeros(n_j, 3)
for nd in 1:n_j
    if c_acc[nd] > 0
        M_nodal[nd, :] = M_acc[nd, :] ./ c_acc[nd]
    end
end

Mx_max  = maximum(abs.(M_nodal[:, 1]))
My_max  = maximum(abs.(M_nodal[:, 2]))
Mxy_max = maximum(abs.(M_nodal[:, 3]))

println()
@printf("  |Mx|_max  = %.4f kN*m/m  (Calcpad: 6.32  | Python BFS: 6.27)\n", Mx_max)
@printf("  |My|_max  = %.4f kN*m/m  (Calcpad: 12.74 | Python BFS: 12.75)\n", My_max)
@printf("  |Mxy|_max = %.4f kN*m/m  (Calcpad: 8.38  | Python BFS: 5.23)\n", Mxy_max)
println()

# Comparacion final
ref_w_calcpad   = -6.63
ref_python_BFS_w = -6.6353
println("  COMPARACION 3-WAY (misma formulacion BFS, 3 lenguajes)")
println(repeat("-", 72))
@printf("  %-22s %14s %14s %14s\n", "", "w_max [mm]", "|Mx|max", "|My|max")
println("  " * repeat("-", 22) * " " * repeat("-", 14) * " " * repeat("-", 14) * " " * repeat("-", 14))
@printf("  %-22s %14.4f %14.4f %14.4f\n", "Calcpad (.cpd)",   ref_w_calcpad,    6.32,  12.74)
@printf("  %-22s %14.4f %14.4f %14.4f\n", "Python BFS",       ref_python_BFS_w, 6.27,  12.75)
@printf("  %-22s %14.4f %14.4f %14.4f\n", "Julia BFS (este)", w_max_m*1000,     Mx_max, My_max)
println()
@printf("  Diff Julia BFS vs Python BFS: w = %+.4f%%, Mx = %+.4f%%, My = %+.4f%%\n",
    (abs(w_max_m*1000) - abs(ref_python_BFS_w))/abs(ref_python_BFS_w)*100,
    (Mx_max - 6.27)/6.27*100,
    (My_max - 12.75)/12.75*100)
println()
println(repeat("=", 72))
