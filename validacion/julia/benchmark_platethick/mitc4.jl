# =============================================================================
#  MITC4 — Mixed Interpolation of Tensorial Components (Dvorkin & Bathe 1985)
#  Julia implementation — placa Mindlin-Reissner con tying de corte
#
#  Caso: 6 × 4 × 0.10 m, E=35 GPa, ν=0.15, q=10 kN/m², mesh 6×4
# =============================================================================
using LinearAlgebra, Printf

const a, b = 6.0, 4.0
const tt = 0.10
const E = 35e6
const nu = 0.15
const q = 10.0
const KAPPA = 5.0/6.0

const n_a, n_b = 6, 4
const n_e = n_a*n_b
const n_j = (n_a+1)*(n_b+1)
const n_dof = 3
const n_k = 12
const a_1 = a/n_a
const b_1 = b/n_b
const a_h = a_1/2
const b_h = b_1/2
const n_g = n_dof*n_j

x_j = zeros(n_j); y_j = zeros(n_j)
let x = 0.0, y = 0.0
    for j = 1:n_j
        x_j[j] = x; y_j[j] = y
        y += b_1
        if y > b + 1e-9; y = 0.0; x += a_1; end
    end
end

e_j = zeros(Int, n_e, 4)
for ia = 1:n_a, ib = 1:n_b
    e = ib + n_b*(ia-1)
    j0 = e + ia - 1
    e_j[e, 1] = j0
    e_j[e, 2] = j0 + n_b + 1
    e_j[e, 3] = j0 + n_b + 2
    e_j[e, 4] = j0 + 1
end

s_j = Int[]
for i = 1:n_a+1
    push!(s_j, (n_b+1)*i - n_b)
    push!(s_j, (n_b+1)*i)
end
for i = 2:n_b
    push!(s_j, i)
    push!(s_j, n_a*(n_b+1) + i)
end

D11 = E*tt^3/(12*(1 - nu^2))
D_b = D11 * [1.0  nu  0.0; nu  1.0  0.0; 0.0  0.0  (1-nu)/2]
G = E/(2*(1+nu))
D_s = KAPPA*G*tt * Matrix(I, 2, 2)

gp = [-1/sqrt(3), 1/sqrt(3)]
gw = [1.0, 1.0]

function mitc4_eval_Bb_Bs(xi, eta)
    xi_n = [-1.0, 1.0, 1.0, -1.0]
    eta_n = [-1.0, -1.0, 1.0, 1.0]
    Nv = zeros(4); dNdx = zeros(4); dNdy = zeros(4)
    for k = 1:4
        s, t_ = xi_n[k], eta_n[k]
        Nv[k]   = 0.25*(1+s*xi)*(1+t_*eta)
        dNdx[k] = 0.25*s*(1+t_*eta)/a_h
        dNdy[k] = 0.25*t_*(1+s*xi)/b_h
    end
    Bb = zeros(3, 12)
    for k = 1:4
        idx = 3*(k-1)
        Bb[1, idx+2] = dNdx[k]
        Bb[2, idx+3] = dNdy[k]
        Bb[3, idx+2] = dNdy[k]
        Bb[3, idx+3] = dNdx[k]
    end
    inv_2ah = 1.0/(2.0*a_h)
    inv_2bh = 1.0/(2.0*b_h)
    gA = zeros(12); gA[1] = -inv_2ah; gA[2] = -0.5; gA[4] = inv_2ah; gA[5] = -0.5
    gC = zeros(12); gC[7] = inv_2ah; gC[8] = -0.5; gC[10] = -inv_2ah; gC[11] = -0.5
    gB = zeros(12); gB[4] = -inv_2bh; gB[6] = -0.5; gB[7] = inv_2bh; gB[9] = -0.5
    gD = zeros(12); gD[1] = -inv_2bh; gD[3] = -0.5; gD[10] = inv_2bh; gD[12] = -0.5
    Bs = zeros(2, 12)
    Bs[1, :] = 0.5*(1 - eta)*gA + 0.5*(1 + eta)*gC
    Bs[2, :] = 0.5*(1 - xi)*gD + 0.5*(1 + xi)*gB
    return Bb, Bs, Nv
end

K_e = zeros(12, 12)
F_e = zeros(12)
for ig = 1:2, jg = 1:2
    xi, eta = gp[ig], gp[jg]
    wgt = gw[ig]*gw[jg]
    Bb, Bs, Nv = mitc4_eval_Bb_Bs(xi, eta)
    jac = a_h*b_h*wgt
    K_e .+= Bb'*D_b*Bb .* jac
    K_e .+= Bs'*D_s*Bs .* jac
    for k = 1:4
        F_e[3*(k-1)+1] += Nv[k]*q*jac
    end
end

t0 = time()
K = zeros(n_g, n_g)
F = zeros(n_g)
for e = 1:n_e
    gdl = Int[]
    for i = 1:4
        gi = e_j[e, i]
        for ii = 1:n_dof
            push!(gdl, n_dof*(gi-1) + ii)
        end
    end
    K[gdl, gdl] .+= K_e
    F[gdl] .+= F_e
end

k_s = 1e20
for j_n in s_j
    g = n_dof*(j_n-1) + 1
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

Z = K \ F
t_solve = (time() - t0)*1000

w_nodo_mm = zeros(n_j)
for j = 1:n_j
    w_nodo_mm[j] = Z[n_dof*(j-1) + 1]*1000
end
j_centro = (n_a÷2)*(n_b+1) + (n_b÷2) + 1
w_centro = w_nodo_mm[j_centro]

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
            push!(gdl, n_dof*(gi-1) + ii)
        end
    end
    Ze = Z[gdl]
    Mg = zeros(3, 4)
    g_idx = 0
    for jg = 1:2, ig = 1:2
        g_idx += 1
        xi, eta = gp[ig], gp[jg]
        Bb, _, _ = mitc4_eval_Bb_Bs(xi, eta)
        Mg[:, g_idx] = -D_b * (Bb * Ze)
    end
    for c = 1:4
        xc, ec = xi_corner[c], eta_corner[c]
        Mxx_c = 0.0; Myy_c = 0.0; Mxy_c = 0.0
        for k = 1:4
            Nk = 0.25*(1 + xi_gauss[k]*sqrt3*xc)*(1 + eta_gauss[k]*sqrt3*ec)
            Mxx_c += Nk*Mg[1, k]
            Myy_c += Nk*Mg[2, k]
            Mxy_c += Nk*Mg[3, k]
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

SAP_W = 6.4567
SAP_MX = 6.4435
SAP_MY = 12.4305
SAP_MXY = -7.7089

println(repeat("=", 70))
println("  MITC4 (Dvorkin-Bathe 1985) — Julia validation")
println(repeat("=", 70))
@printf "  Caso          : 6×4×0.10 m, E=35 GPa, ν=0.15, q=10\n"
@printf "  Malla         : %d × %d (%d nodos, %d GDL)\n" n_a n_b n_j n_g
@printf "  Tiempo solve  : %.2f ms\n" t_solve
println(repeat("-", 70))
@printf "  %-14s %14s %14s %10s\n" "Métrica" "Julia MITC4" "SAP P-Thick" "Δ %"
@printf "  %-14s %14.6f %14.6f %+9.4f%%\n" "w_centro" w_centro SAP_W (abs(w_centro)-SAP_W)/SAP_W*100
@printf "  %-14s %14.6f %14.6f %+9.4f%%\n" "Mx centro" Mx_centro SAP_MX (Mx_centro-SAP_MX)/SAP_MX*100
@printf "  %-14s %14.6f %14.6f %+9.4f%%\n" "My centro" My_centro SAP_MY (My_centro-SAP_MY)/SAP_MY*100
@printf "  %-14s %14.6f %14.6f %+9.4f%%\n" "Mxy esquina" Mxy_esquina SAP_MXY (abs(Mxy_esquina)-abs(SAP_MXY))/abs(SAP_MXY)*100
println(repeat("=", 70))
