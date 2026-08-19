# run_julia_cft.jl — Validador independiente FEM en Julia (self-contained).
#
# Implementa direct-stiffness:
#   - Frame3D Bernoulli (12 DOFs, 6 DOF/node)
#   - Plate Mindlin Q4 con Selective Reduced Integration (SRI)
#   - Drilling stabilization para shells + frames coupling
#
# No requiere paquetes externos (sólo LinearAlgebra y SparseArrays stdlib).
# Modelo idéntico a run_matrix_cft.mjs / run_opensees_cft.py / run_pynite_cft.py.
#
# Uso:
#   julia run_julia_cft.jl cftNoSlab
#   julia run_julia_cft.jl cftDeckSlab

using LinearAlgebra
using SparseArrays

setup = length(ARGS) >= 1 ? ARGS[1] : "cftDeckSlab"
has_slab = setup == "cftDeckSlab"

# Beam theory: "bernoulli" (default) or "timoshenko" (igual que Hekatan As=5/6·A)
# Configurable vía env var BEAM_THEORY=bernoulli|timoshenko
beam_theory = lowercase(get(ENV, "BEAM_THEORY", "bernoulli"))
@assert beam_theory in ("bernoulli", "timoshenko")
println("# Beam theory: $(beam_theory)")

# ── Geometría ──
const Lx, Ly = 4.0, 4.0
const nx_, ny_ = 4, 4
const nNx, nNy = nx_ + 1, ny_ + 1
const dx, dy = Lx / nx_, Ly / ny_
const slab_z = 4.0
const t_slab = 0.10

# ── Materiales / cargas ──
const E_c, nu_c = 25e6, 0.20
const E_s, nu_s = 200e6, 0.30
const G_s = E_s / (2 * (1 + nu_s))
const G_c = E_c / (2 * (1 + nu_c))
const q_unif = 5.0
const P_point = 20.0

# Beam W360x60
const A_b = 7610e-6
const Iy_b = 12.9e-5
const Iz_b = 1.20e-5
const J_b = 0.31e-6

# CFT transformed steel-equivalent
const D_out, t_HSS = 0.250, 0.010
const D_in = D_out - 2*t_HSS
const A_s_HSS = D_out^2 - D_in^2
const A_c_fill = D_in^2
const I_s_HSS = (D_out^4 - D_in^4) / 12
const I_c_fill = D_in^4 / 12
const J_s_HSS = 2 * I_s_HSS
const n_modular = E_s / E_c
const A_cft = A_s_HSS + A_c_fill / n_modular
const I_cft = I_s_HSS + I_c_fill / n_modular
const J_cft = J_s_HSS

println("# CFT transformed-section (steel-equivalent):")
println("#   A_cft = $(A_cft) m^2   I_cft = $(I_cft) m^4   J_cft = $(J_cft) m^4")

# ───────────────────────────────────────────────────────────────────────────
# FRAME 3D BERNOULLI — matriz local 12x12
# ───────────────────────────────────────────────────────────────────────────
"""
    frame3d_K_local(E, G, A, Iy, Iz, J, L; AsY=0, AsZ=0)

K local de un beam-column 3D. DOFs: [u1,v1,w1,θx1,θy1,θz1, u2,v2,w2,θx2,θy2,θz2].

Si `AsY > 0` y/o `AsZ > 0`, incluye deformación por cortante (Timoshenko).
AsY = área efectiva de cortante para flexión sobre y → afecta plano local x-z.
AsZ = área efectiva de cortante para flexión sobre z → afecta plano local x-y.
Si ambos = 0 (default), reduce a Euler-Bernoulli puro.
"""
function frame3d_K_local(E, G, A, Iy, Iz, J, L; AsY::Float64=0.0, AsZ::Float64=0.0)
    K = zeros(12, 12)
    EA_L = E*A/L
    GJ_L = G*J/L
    L2 = L*L
    L3 = L*L2

    # Timoshenko shear factors (phi=0 → Bernoulli)
    phiZ = (AsZ > 0 && G > 0) ? (12.0 * E * Iz) / (G * AsZ * L2) : 0.0
    phiY = (AsY > 0 && G > 0) ? (12.0 * E * Iy) / (G * AsY * L2) : 0.0

    tz = (12.0 * E * Iz / L3) / (1.0 + phiZ)
    bz = (6.0  * E * Iz / L2) / (1.0 + phiZ)
    kz = (4.0  * E * Iz / L)  * (1.0 + phiZ / 4.0) / (1.0 + phiZ)
    az = (2.0  * E * Iz / L)  * (1.0 - phiZ / 2.0) / (1.0 + phiZ)

    ty = (12.0 * E * Iy / L3) / (1.0 + phiY)
    by = (6.0  * E * Iy / L2) / (1.0 + phiY)
    ky = (4.0  * E * Iy / L)  * (1.0 + phiY / 4.0) / (1.0 + phiY)
    ay = (2.0  * E * Iy / L)  * (1.0 - phiY / 2.0) / (1.0 + phiY)

    # Axial
    K[1, 1] += EA_L; K[1, 7] -= EA_L
    K[7, 1] -= EA_L; K[7, 7] += EA_L
    # Torsional
    K[4, 4] += GJ_L; K[4, 10] -= GJ_L
    K[10, 4] -= GJ_L; K[10, 10] += GJ_L
    # Bending about z (in xy plane) — uses Iz, with Timoshenko if phiZ > 0
    K[2, 2]  += tz;  K[2, 6]  += bz;  K[2, 8]  -= tz;  K[2, 12] += bz
    K[6, 2]  += bz;  K[6, 6]  += kz;  K[6, 8]  -= bz;  K[6, 12] += az
    K[8, 2]  -= tz;  K[8, 6]  -= bz;  K[8, 8]  += tz;  K[8, 12] -= bz
    K[12, 2] += bz;  K[12, 6] += az;  K[12, 8] -= bz;  K[12, 12]+= kz
    # Bending about y (in xz plane) — uses Iy, with Timoshenko if phiY > 0
    K[3, 3]  += ty;  K[3, 5]  -= by;  K[3, 9]  -= ty;  K[3, 11] -= by
    K[5, 3]  -= by;  K[5, 5]  += ky;  K[5, 9]  += by;  K[5, 11] += ay
    K[9, 3]  -= ty;  K[9, 5]  += by;  K[9, 9]  += ty;  K[9, 11] += by
    K[11, 3] -= by;  K[11, 5] += ay;  K[11, 9] += by;  K[11, 11]+= ky
    return K
end

"""
    rotation_matrix_3d(p1, p2, vecxz)

Construye la matriz de transformación 3D del frame3D. `vecxz` es un vector
en el plano local xz que define la orientación del eje local z.
"""
function rotation_matrix_3d(p1, p2, vecxz)
    L = norm(p2 - p1)
    e1 = (p2 - p1) / L
    # local z perpendicular a e1 dentro del plano (e1, vecxz)
    proj = dot(vecxz, e1) * e1
    e3 = vecxz - proj
    if norm(e3) < 1e-10
        # vecxz colinear → fallback: usar [0,1,0] si e1 ∥ Z, else [0,0,1]
        e3 = abs(e1[3]) > 0.99 ? [0.0, 1.0, 0.0] : [0.0, 0.0, 1.0]
        proj = dot(e3, e1) * e1
        e3 = e3 - proj
    end
    e3 = e3 / norm(e3)
    e2 = cross(e3, e1)
    R = [e1'; e2'; e3']   # 3x3

    # T 12x12 = blockdiag(R, R, R, R)
    T = zeros(12, 12)
    for k in 0:3
        T[3k+1:3k+3, 3k+1:3k+3] = R
    end
    return T, L
end

# ───────────────────────────────────────────────────────────────────────────
# PLATE MINDLIN Q4 — Selective Reduced Integration (SRI)
# ───────────────────────────────────────────────────────────────────────────
"""
    plate_mindlin_q4_SRI(coords, E, nu, t)

K local 12x12 (3 DOFs por nodo: w, θx, θy) para placa Mindlin Q4 con SRI:
   - bending: 2x2 Gauss
   - shear:   1x1 Gauss (under-integrated → corrige shear locking)

`coords` es 4x2 con (x,y) de los 4 nodos en CCW. Devuelve K en sistema local
con DOFs ordenados [w1,θx1,θy1, w2,θx2,θy2, w3,θx3,θy3, w4,θx4,θy4].

Convención βx = +∂w/∂x para Kirchhoff limit. Usamos:
   κxx = -∂θy/∂x,   κyy = +∂θx/∂y,   κxy = +∂θx/∂x − ∂θy/∂y
   γxz = +θy + ∂w/∂x − wait, esto necesita pensarse bien
"""
function plate_mindlin_q4_SRI(coords::Matrix{Float64}, E, nu, t)
    # D matrix bending (D_b)
    D = E * t^3 / (12 * (1 - nu^2))
    Db = D * [1.0   nu    0;
              nu    1.0   0;
              0     0     (1-nu)/2]
    # D matrix shear (D_s) — k = 5/6 shear factor
    G = E / (2 * (1 + nu))
    Ds = (5/6) * G * t * I(2)   # 2x2 identity scaled

    K = zeros(12, 12)

    # Función: shape, derivatives evaluados en (xi, eta)
    function NdN(xi, eta)
        N = 0.25 * [(1-xi)*(1-eta), (1+xi)*(1-eta), (1+xi)*(1+eta), (1-xi)*(1+eta)]
        dNdxi  = 0.25 * [-(1-eta), (1-eta), (1+eta), -(1+eta)]
        dNdeta = 0.25 * [-(1-xi), -(1+xi), (1+xi),  (1-xi)]
        return N, dNdxi, dNdeta
    end

    function jacobian(coords, dNdxi, dNdeta)
        J = zeros(2, 2)
        for i in 1:4
            J[1, 1] += dNdxi[i]  * coords[i, 1]
            J[1, 2] += dNdxi[i]  * coords[i, 2]
            J[2, 1] += dNdeta[i] * coords[i, 1]
            J[2, 2] += dNdeta[i] * coords[i, 2]
        end
        return J, det(J), inv(J)
    end

    # ── Bending part — 2x2 Gauss
    gp = [-1/sqrt(3), 1/sqrt(3)]
    for xi in gp, eta in gp
        N, dNdxi, dNdeta = NdN(xi, eta)
        J, detJ, Jinv = jacobian(coords, dNdxi, dNdeta)
        Bb = zeros(3, 12)
        for i in 1:4
            dNdx = Jinv[1,1] * dNdxi[i] + Jinv[1,2] * dNdeta[i]
            dNdy = Jinv[2,1] * dNdxi[i] + Jinv[2,2] * dNdeta[i]
            # DOF de nodo i: [w_i, θx_i, θy_i] = positions 3(i-1)+1, +2, +3
            # κxx = -∂θy/∂x  → -dNdx multiplicando θy
            # κyy = +∂θx/∂y  → +dNdy multiplicando θx
            # κxy = +∂θx/∂x − ∂θy/∂y
            Bb[1, 3i] = -dNdx
            Bb[2, 3i-1] = dNdy
            Bb[3, 3i-1] = dNdx
            Bb[3, 3i] = -dNdy
        end
        K += Bb' * Db * Bb * detJ * 1.0 * 1.0  # weight = 1*1
    end

    # ── Shear part — 1x1 Gauss (centro xi=eta=0) → SRI corrige shear locking.
    # Una vez que ux/uy del slab estén pinneados (no hay membrana activa) y
    # se agregue drilling stabilization para θz, no hay hourglass problemáticos
    # en este bench (carga uniforme + frames perimetrales que estabilizan).
    let xi = 0.0, eta = 0.0
        N, dNdxi, dNdeta = NdN(xi, eta)
        J, detJ, Jinv = jacobian(coords, dNdxi, dNdeta)
        Bs = zeros(2, 12)
        for i in 1:4
            dNdx = Jinv[1,1] * dNdxi[i] + Jinv[1,2] * dNdeta[i]
            dNdy = Jinv[2,1] * dNdxi[i] + Jinv[2,2] * dNdeta[i]
            Bs[1, 3i-2] = dNdx
            Bs[1, 3i] = N[i]
            Bs[2, 3i-2] = dNdy
            Bs[2, 3i-1] = -N[i]
        end
        K += Bs' * Ds * Bs * detJ * 4.0   # weight 1x1 = 2*2 = 4
    end
    return K
end

# ───────────────────────────────────────────────────────────────────────────
# ENSAMBLE GLOBAL
# ───────────────────────────────────────────────────────────────────────────
function nodeID(i, j)
    return (j - 1) * nNx + i   # 1-based
end

# ── Build nodes ──
nodes = Vector{Vector{Float64}}()
for j in 1:nNy, i in 1:nNx
    push!(nodes, [(i-1)*dx, (j-1)*dy, slab_z])
end
n_slab = length(nodes)   # 25
# 4 base nodes
push!(nodes, [0.0, 0.0, 0.0])
push!(nodes, [Lx, 0.0, 0.0])
push!(nodes, [0.0, Ly, 0.0])
push!(nodes, [Lx, Ly, 0.0])
const NB = length(nodes)    # 29
const NDOF = 6 * NB

# ── Beams + columns ──
# Beam connectivity (1-based node indices)
beams_BC = Vector{Tuple{Int,Int,Bool}}()  # (n1, n2, is_column)
# bottom edge
for i in 1:nx_; push!(beams_BC, (nodeID(i,1), nodeID(i+1,1), false)); end
# top edge
for i in 1:nx_; push!(beams_BC, (nodeID(i,nNy), nodeID(i+1,nNy), false)); end
# left edge
for j in 1:ny_; push!(beams_BC, (nodeID(1,j), nodeID(1,j+1), false)); end
# right edge
for j in 1:ny_; push!(beams_BC, (nodeID(nNx,j), nodeID(nNx,j+1), false)); end
const N_BEAMS = length(beams_BC)   # 16
# 4 columns CFT (corners)
corners_top = [nodeID(1,1), nodeID(nNx,1), nodeID(1,nNy), nodeID(nNx,nNy)]
for (k, c) in enumerate(corners_top)
    base_idx = n_slab + k    # 26..29
    push!(beams_BC, (base_idx, c, true))
end
const N_FRAMES = length(beams_BC)  # 20

# ── Plates (sólo si has_slab) ──
plates = Vector{NTuple{4, Int}}()
if has_slab
    for j in 1:ny_, i in 1:nx_
        n1 = nodeID(i, j)
        n2 = nodeID(i+1, j)
        n3 = nodeID(i+1, j+1)
        n4 = nodeID(i, j+1)
        push!(plates, (n1, n2, n3, n4))
    end
end

# ── Assemble global K ──
println("# Ensamblando K (NDOF=$(NDOF))...")
I_K = Int[]; J_K = Int[]; V_K = Float64[]
function add_block!(I_K, J_K, V_K, gdofs, K_local)
    n = length(gdofs)
    for a in 1:n, b in 1:n
        push!(I_K, gdofs[a]); push!(J_K, gdofs[b]); push!(V_K, K_local[a, b])
    end
end

# Frames
for (idx, (n1, n2, is_col)) in enumerate(beams_BC)
    p1 = nodes[n1]; p2 = nodes[n2]
    if is_col
        # Column CFT
        E, G, A, Iy, Iz, J_t = E_s, G_s, A_cft, I_cft, I_cft, J_cft
        vecxz = [1.0, 0.0, 0.0]   # vertical → vecxz horizontal
    else
        # Beam W360x60
        E, G, A, Iy, Iz, J_t = E_s, G_s, A_b, Iy_b, Iz_b, J_b
        vecxz = [0.0, 0.0, 1.0]   # horizontal → vecxz vertical
    end
    T, L = rotation_matrix_3d(p1, p2, vecxz)
    # Timoshenko: As = 5/6·A (igual que Hekatan default)
    AsY = beam_theory == "timoshenko" ? (5.0/6.0)*A : 0.0
    AsZ = beam_theory == "timoshenko" ? (5.0/6.0)*A : 0.0
    Kl = frame3d_K_local(E, G, A, Iy, Iz, J_t, L; AsY=AsY, AsZ=AsZ)
    Kg = T' * Kl * T
    gdofs = vcat([6*(n1-1) + k for k in 1:6], [6*(n2-1) + k for k in 1:6])
    add_block!(I_K, J_K, V_K, gdofs, Kg)
end

# Plates Mindlin Q4 SRI (only if has_slab)
for (n1, n2, n3, n4) in plates
    coords = [nodes[n1][1] nodes[n1][2];
              nodes[n2][1] nodes[n2][2];
              nodes[n3][1] nodes[n3][2];
              nodes[n4][1] nodes[n4][2]]
    Kpl = plate_mindlin_q4_SRI(coords, E_c, nu_c, t_slab)
    # Plate DOFs locally: [w1, θx1, θy1, w2, ..., w4, θx4, θy4] (12 DOFs)
    # Map a global 6-DOF/node: w → uz (3), θx → θx (4), θy → θy (5)
    gdofs = Int[]
    for n in (n1, n2, n3, n4)
        push!(gdofs, 6*(n-1) + 3)   # w → uz
        push!(gdofs, 6*(n-1) + 4)   # θx
        push!(gdofs, 6*(n-1) + 5)   # θy
    end
    add_block!(I_K, J_K, V_K, gdofs, Kpl)
end

K_full = sparse(I_K, J_K, V_K, NDOF, NDOF)

# ── Cargas ──
F = zeros(NDOF)
if has_slab
    A_elem = dx * dy
    fz_node = -q_unif * A_elem / 4
    for (n1, n2, n3, n4) in plates
        for n in (n1, n2, n3, n4)
            F[6*(n-1) + 3] += fz_node
        end
    end
else
    midspans = [
        nodeID(div(nx_,2)+1, 1),       # bottom mid
        nodeID(div(nx_,2)+1, nNy),     # top mid
        nodeID(1, div(ny_,2)+1),       # left mid
        nodeID(nNx, div(ny_,2)+1),     # right mid
    ]
    for n in midspans
        F[6*(n-1) + 3] += -P_point
    end
end

# ── Restraints ──
# 4 base nodes FIXED (empotramiento completo: UX UY UZ RX RY RZ)
fixed_dofs = Int[]
for k in 1:4
    base_idx = n_slab + k
    for d in 1:6
        push!(fixed_dofs, 6*(base_idx-1) + d)
    end
end
# Si no hay slab, fijar nodos interiores (sin elementos conectados)
if !has_slab
    for j in 2:ny_, i in 2:nx_
        n = nodeID(i, j)
        for d in 1:6
            push!(fixed_dofs, 6*(n-1) + d)
        end
    end
end
# Si HAY slab, el plate Mindlin Q4 sólo aporta rigidez en (w, θx, θy). Los
# DOFs ux, uy de los nodos interiores del slab (sin frames atravesándolos)
# quedan libres → K singular. Como la carga es 100% vertical, fijar ux, uy
# de todos los nodos del slab no altera el resultado físico (no hay
# membrana activa). Equivale a un "shell rigid in-plane" para este bench.
if has_slab
    for n in 1:n_slab
        push!(fixed_dofs, 6*(n-1) + 1)   # ux
        push!(fixed_dofs, 6*(n-1) + 2)   # uy
    end
end
# Drilling stabilization para θz (no usado por plates ni vigas horizontales).
# Para nodos sin frame conectado, sin esto K es singular. Valor proporcional a
# la rigidez del K bending del plate (~ E·t³ / L) para no contaminar resultados.
drilling_k = E_c * t_slab^3 / dx * 1e-3   # ~ 0.6 kN·m/rad para nuestro caso
for n in 1:n_slab
    K_full[6*(n-1)+6, 6*(n-1)+6] += drilling_k
end

# Apply BCs (penalty method)
penalty = 1e15
for d in fixed_dofs
    K_full[d, d] += penalty
    F[d] = 0.0
end

# ── Solve ──
println("# Resolviendo...")
u = K_full \ F

# ── Extract KPI ──
i_c, j_c = div(nx_, 2) + 1, div(ny_, 2) + 1
n_kpi = has_slab ? nodeID(i_c, j_c) : nodeID(div(nx_,2) + 1, 1)
w_mm = u[6*(n_kpi-1) + 3] * 1000

# Sum reactions Rz at base nodes (compute as F_internal at base = K * u for those rows BEFORE penalty applied)
# Simpler: total external load Q
Q_total = has_slab ? q_unif * Lx * Ly : 4 * P_point

println("=== Julia FEM (CFT bench): $(setup) [$(beam_theory)] ===")
println("  Modelo: frame3D $(beam_theory == "timoshenko" ? "Timoshenko (As=5/6·A)" : "Bernoulli") + plate Mindlin Q4 SRI")
println("  KPI = $(round(w_mm; digits=4)) mm")
kpi_label = has_slab ? "w_centro" : "w_midspan_beam"
println("  ($(kpi_label), nodo $(n_kpi))")
println("  Total load Q = $(Q_total) kN")
