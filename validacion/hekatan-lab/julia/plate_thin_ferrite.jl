#=
========================================================================
 Plate Thin (Kirchhoff/Mindlin Q4 SRI) — Julia + Plots
 Track: validacion/julia/
========================================================================

 Elemento: Q4 Mindlin-Reissner con Selective Reduced Integration (SRI)
   - Bending: Gauss 2x2 (full)
   - Shear:   Gauss 1x1 (reduced) -> evita shear locking

 NOTA: Ferrite.jl es muy generico (Poisson, elasticidad) y requiere mucho
 codigo custom para placas Mindlin Q4 con DOF order (w, betax, betay).
 Por eso este script implementa el FEM A MANO en Julia, espejo del
 Python (plate_thin_skfem.py). Esto le da al usuario control total y un
 puente didactico claro entre los tracks.

 La carpeta Project.toml incluye Ferrite por si se quiere migrar despues.

 Caso canonico (igual a python-fem/ y opensees-python/):
   Placa 10x10 m, t = 0.20 m (Lx/t = 50, "thin")
   E = 30 GPa, nu = 0.3, q = 10 kN/m^2, mesh 16x16, SS en 4 bordes
   Solucion analitica: Navier series (Timoshenko 1959, Cap. 5)

 Salidas:
   - figs/plate_thin_ferrite_mesh.png        : mallado + nodos SS
   - figs/plate_thin_ferrite_deflection.png  : deflexion 3D + contour
   - figs/plate_thin_ferrite_moments.png     : Mxx, Myy, Mxy contour
   - stdout: resultados + comparacion vs Navier

 Referencias:
   - Bathe (1996), Cap. 5.4
   - Zienkiewicz & Taylor, FEM Vol. 2 (2000), Cap. 5
   - Timoshenko & Woinowsky-Krieger (1959), Cap. 5

 Ejecutar:  julia --project=. plate_thin_ferrite.jl
========================================================================
=#

using LinearAlgebra
using SparseArrays
using Statistics
using Printf
using Plots
gr()   # backend GR (headless friendly, mas rapido que PyPlot/GLMakie para PNG)

# ----------------------------------------------------------------------
# Parametros (identicos a los otros tracks)
# ----------------------------------------------------------------------
const Lx, Ly = 10.0, 10.0
const nx, ny = 16, 16
const E_mod  = 30e6
const nu     = 0.3
const t_pl   = 0.20
const q_load = -10.0
const kappa  = 5.0 / 6.0

# ----------------------------------------------------------------------
# Mesh
# ----------------------------------------------------------------------
const dx = Lx / nx
const dy = Ly / ny
const n_nodes = (nx + 1) * (ny + 1)
const n_elems = nx * ny
const n_dof   = 3 * n_nodes

coords = zeros(n_nodes, 2)
for j in 0:ny, i in 0:nx
    nid = j * (nx + 1) + i + 1   # 1-indexed Julia
    coords[nid, :] = [i * dx, j * dy]
end

elements = Matrix{Int}(undef, n_elems, 4)
for j in 0:(ny - 1), i in 0:(nx - 1)
    eid = j * nx + i + 1
    n1 = j * (nx + 1) + i + 1
    n2 = n1 + 1
    n3 = n2 + (nx + 1)
    n4 = n1 + (nx + 1)
    elements[eid, :] = [n1, n2, n3, n4]
end

# ----------------------------------------------------------------------
# Q4 bilinear shape functions
# ----------------------------------------------------------------------
const XI  = [-1.0, 1.0, 1.0, -1.0]
const ETA = [-1.0, -1.0, 1.0, 1.0]

function shape_N(xi::Float64, eta::Float64)
    return 0.25 .* (1 .+ XI .* xi) .* (1 .+ ETA .* eta)
end

function shape_dN(xi::Float64, eta::Float64)
    dN = zeros(4, 2)
    @inbounds for i in 1:4
        dN[i, 1] = 0.25 * XI[i]  * (1 + ETA[i] * eta)
        dN[i, 2] = 0.25 * ETA[i] * (1 + XI[i]  * xi)
    end
    return dN
end

# ----------------------------------------------------------------------
# Matrices constitutivas
# ----------------------------------------------------------------------
const D0 = E_mod * t_pl^3 / (12.0 * (1 - nu^2))
const Db = D0 * [1.0 nu  0.0;
                 nu  1.0 0.0;
                 0.0 0.0 0.5 * (1 - nu)]
const G_mod = E_mod / (2.0 * (1 + nu))
const Ds = kappa * G_mod * t_pl * Matrix{Float64}(I, 2, 2)

# ----------------------------------------------------------------------
# Gauss points
# ----------------------------------------------------------------------
const gp = 1.0 / sqrt(3.0)
const gauss_2x2 = [(-gp, -gp, 1.0), (gp, -gp, 1.0), (gp, gp, 1.0), (-gp, gp, 1.0)]
const gauss_1x1 = [(0.0, 0.0, 4.0)]

# ----------------------------------------------------------------------
# Element-level helpers
# ----------------------------------------------------------------------
function jacobian(nc::AbstractMatrix{Float64}, dN::AbstractMatrix{Float64})
    J = dN' * nc                                   # 2 x 2
    detJ = J[1, 1] * J[2, 2] - J[1, 2] * J[2, 1]
    Jinv = [J[2,2] -J[1,2]; -J[2,1] J[1,1]] ./ detJ
    return J, Jinv, detJ
end

function phys_derivs(dN::AbstractMatrix{Float64}, Jinv::AbstractMatrix{Float64})
    return dN * Jinv'
end

function bending_B(dNdx::AbstractMatrix{Float64})
    Bb = zeros(3, 12)
    @inbounds for i in 1:4
        Bb[1, 3*(i-1) + 2] = dNdx[i, 1]   # d(bx)/dx
        Bb[2, 3*(i-1) + 3] = dNdx[i, 2]   # d(by)/dy
        Bb[3, 3*(i-1) + 2] = dNdx[i, 2]   # d(bx)/dy
        Bb[3, 3*(i-1) + 3] = dNdx[i, 1]   # d(by)/dx
    end
    return Bb
end

function shear_B(N::AbstractVector{Float64}, dNdx::AbstractMatrix{Float64})
    Bs = zeros(2, 12)
    @inbounds for i in 1:4
        Bs[1, 3*(i-1) + 1] =  dNdx[i, 1]
        Bs[1, 3*(i-1) + 2] = -N[i]
        Bs[2, 3*(i-1) + 1] =  dNdx[i, 2]
        Bs[2, 3*(i-1) + 3] = -N[i]
    end
    return Bs
end

function element_stiffness(nc::AbstractMatrix{Float64})
    Ke = zeros(12, 12)
    for (xi, eta, w_gp) in gauss_2x2
        dN = shape_dN(xi, eta)
        _, Jinv, detJ = jacobian(nc, dN)
        dNdx = phys_derivs(dN, Jinv)
        Bb = bending_B(dNdx)
        Ke .+= w_gp * detJ * (Bb' * Db * Bb)
    end
    for (xi, eta, w_gp) in gauss_1x1
        N    = shape_N(xi, eta)
        dN   = shape_dN(xi, eta)
        _, Jinv, detJ = jacobian(nc, dN)
        dNdx = phys_derivs(dN, Jinv)
        Bs   = shear_B(N, dNdx)
        Ke .+= w_gp * detJ * (Bs' * Ds * Bs)
    end
    return Ke
end

function element_load(nc::AbstractMatrix{Float64}, q::Float64)
    fe = zeros(12)
    for (xi, eta, w_gp) in gauss_2x2
        N  = shape_N(xi, eta)
        dN = shape_dN(xi, eta)
        _, _, detJ = jacobian(nc, dN)
        @inbounds for i in 1:4
            fe[3*(i-1) + 1] += N[i] * q * detJ * w_gp
        end
    end
    return fe
end

function element_moments(nc::AbstractMatrix{Float64}, d_e::AbstractVector{Float64})
    dN = shape_dN(0.0, 0.0)
    _, Jinv, _ = jacobian(nc, dN)
    dNdx = phys_derivs(dN, Jinv)
    Bb = bending_B(dNdx)
    kappa_v = Bb * d_e
    return Db * kappa_v   # Mxx, Myy, Mxy
end

# ----------------------------------------------------------------------
# Ensamblaje global (sparse)
# ----------------------------------------------------------------------
println(repeat("=", 72))
println("  PLATE THIN — Julia + Plots (Q4 Mindlin SRI)")
println(repeat("=", 72))
@printf("  Placa     : %.1f x %.1f m, t = %.2f m  (Lx/t = %.0f)\n", Lx, Ly, t_pl, Lx/t_pl)
@printf("  Material  : E = %.0f GPa, nu = %.2f\n", E_mod/1e6, nu)
@printf("  Carga     : q = %.1f kN/m^2 (descendente)\n", abs(q_load))
@printf("  Mesh      : %d x %d = %d elementos Q4 (%d nodos, %d GDL)\n",
        nx, ny, n_elems, n_nodes, n_dof)
println("  BC        : Simply supported (w=0 en 4 bordes)")
println(repeat("=", 72))

t0 = time()
I_rows = Int[]
J_cols = Int[]
K_vals = Float64[]
sizehint!(I_rows, 144 * n_elems)
sizehint!(J_cols, 144 * n_elems)
sizehint!(K_vals, 144 * n_elems)

F = zeros(n_dof)
for e in 1:n_elems
    elem = elements[e, :]
    nc   = coords[elem, :]
    Ke   = element_stiffness(nc)
    fe   = element_load(nc, q_load)
    dof_map = vcat([[3*(elem[i]-1) + d for d in 1:3] for i in 1:4]...)
    @inbounds for ii in 1:12
        F[dof_map[ii]] += fe[ii]
        for jj in 1:12
            push!(I_rows, dof_map[ii])
            push!(J_cols, dof_map[jj])
            push!(K_vals, Ke[ii, jj])
        end
    end
end
K = sparse(I_rows, J_cols, K_vals, n_dof, n_dof)
t_asm = time() - t0
@printf("  Ensamblaje: %.1f ms\n", t_asm * 1000)

# ----------------------------------------------------------------------
# BC: simply supported (w=0 en bordes) via penalty
# ----------------------------------------------------------------------
penalty = 1e20
bc_count = Ref(0)
for nid in 1:n_nodes
    x, y = coords[nid, :]
    if x < 1e-9 || x > Lx - 1e-9 || y < 1e-9 || y > Ly - 1e-9
        gdof = 3 * (nid - 1) + 1
        K[gdof, gdof] += penalty
        bc_count[] += 1
    end
end
@printf("  BC        : %d nodos con w=0\n", bc_count[])

# ----------------------------------------------------------------------
# Solve
# ----------------------------------------------------------------------
t0 = time()
u = K \ F
t_solve = time() - t0
@printf("  Solve     : %.1f ms\n", t_solve * 1000)

# ----------------------------------------------------------------------
# Post-procesamiento
# ----------------------------------------------------------------------
w_arr = u[1:3:end]
cx, cy = Lx / 2, Ly / 2
center_idx = argmin([sqrt((coords[i,1]-cx)^2 + (coords[i,2]-cy)^2) for i in 1:n_nodes])
w_center = u[3 * (center_idx - 1) + 1]

Mxx_e = zeros(n_elems)
Myy_e = zeros(n_elems)
Mxy_e = zeros(n_elems)
for e in 1:n_elems
    elem = elements[e, :]
    nc   = coords[elem, :]
    d_e  = vcat([[u[3*(elem[i]-1) + d] for d in 1:3] for i in 1:4]...)
    M    = element_moments(nc, d_e)
    Mxx_e[e], Myy_e[e], Mxy_e[e] = M[1], M[2], M[3]
end

# ----------------------------------------------------------------------
# Solucion analitica Navier (Timoshenko 1959)
# ----------------------------------------------------------------------
function navier_w(a, b, q_val, D_flex, x, y, n_terms=49)
    w_sum = 0.0
    for m in 1:2:n_terms, n in 1:2:n_terms
        amn = (m*pi/a)^2 + (n*pi/b)^2
        qmn = 16.0 * q_val / (pi^2 * m * n)
        w_sum += qmn / (D_flex * amn^2) * sin(m*pi*x/a) * sin(n*pi*y/b)
    end
    return w_sum
end

function navier_Mxx(a, b, q_val, D_flex, nu_v, x, y, n_terms=49)
    Mx = 0.0
    for m in 1:2:n_terms, n in 1:2:n_terms
        am = m*pi/a
        an = n*pi/b
        amn = am^2 + an^2
        qmn = 16.0 * q_val / (pi^2 * m * n)
        w_mn = qmn / (D_flex * amn^2)
        Mx += D_flex * (am^2 + nu_v * an^2) * w_mn * sin(m*pi*x/a) * sin(n*pi*y/b)
    end
    return Mx
end

D_flex = E_mod * t_pl^3 / (12.0 * (1 - nu^2))
w_nav  = navier_w(Lx, Ly, abs(q_load), D_flex, cx, cy)
Mx_nav = navier_Mxx(Lx, Ly, abs(q_load), D_flex, nu, cx, cy)

err_w = abs((abs(w_center) - w_nav) / w_nav) * 100.0
err_M = abs((maximum(abs.(Mxx_e)) - Mx_nav) / Mx_nav) * 100.0

println()
println("  RESULTADOS")
println(repeat("-", 72))
@printf("  %-22s %18s %18s %10s\n", "Metrica", "Q4 Julia", "Navier (analit)", "Error %")
println("  " * repeat("-", 22) * " " * repeat("-", 18) * " " * repeat("-", 18) * " " * repeat("-", 10))
@printf("  %-22s %18.6e %18.6e %9.2f\n", "w_center (m)", w_center, -w_nav, err_w)
@printf("  %-22s %18.4f %18.4f %9.2f\n", "|Mxx|_max (kNm/m)", maximum(abs.(Mxx_e)), Mx_nav, err_M)
@printf("  %-22s %18.4f\n", "|Myy|_max (kNm/m)", maximum(abs.(Myy_e)))
@printf("  %-22s %18.4f\n", "|Mxy|_max (kNm/m)", maximum(abs.(Mxy_e)))

# Hekatan-fem WASM reference
wasm_ref = -1.881942e-2
println()
@printf("  Referencia Hekatan-fem WASM: %18.6e m  (vs Julia: %.6e m)\n", wasm_ref, w_center)

# ----------------------------------------------------------------------
# Renderizado PNGs
# ----------------------------------------------------------------------
mkpath("figs")

# Reshape para plotting
W_grid = reshape(w_arr * 1000.0, (nx + 1, ny + 1))'  # mm, transposed para que rows = y
X_vec  = collect(0:dx:Lx)
Y_vec  = collect(0:dy:Ly)

# Momentos por element -> grids (centroide)
elem_cx = [mean(coords[elements[e, :], 1]) for e in 1:n_elems]
elem_cy = [mean(coords[elements[e, :], 2]) for e in 1:n_elems]
Mxx_grid = reshape(Mxx_e, (nx, ny))'
Myy_grid = reshape(Myy_e, (nx, ny))'
Mxy_grid = reshape(Mxy_e, (nx, ny))'
EX_vec   = collect((dx/2):dx:(Lx - dx/2))
EY_vec   = collect((dy/2):dy:(Ly - dy/2))

# Colormap SAP2000
sap_cmap = cgrad([:blue, RGB(0,0.5,1), :cyan, RGB(0,1,0.5), :green,
                  RGB(0.5,1,0), :yellow, RGB(1,0.5,0), :red])

# Fig 1: mesh
p1 = plot(legend=false, aspect_ratio=:equal, xlabel="x [m]", ylabel="y [m]",
          title=@sprintf("Mallado Q4 Julia — %dx%d = %d elementos, %d nodos\nrojo = SS (w=0)",
                          nx, ny, n_elems, n_nodes),
          titlefontsize=10, size=(700, 700))
for e in 1:n_elems
    xs = coords[[elements[e,1], elements[e,2], elements[e,3], elements[e,4], elements[e,1]], 1]
    ys = coords[[elements[e,1], elements[e,2], elements[e,3], elements[e,4], elements[e,1]], 2]
    plot!(p1, xs, ys, color=:blue, lw=0.6)
end
scatter!(p1, coords[:, 1], coords[:, 2], color=:black, ms=2, msw=0)
bc_nodes = [nid for nid in 1:n_nodes
            if coords[nid,1] < 1e-9 || coords[nid,1] > Lx-1e-9 ||
               coords[nid,2] < 1e-9 || coords[nid,2] > Ly-1e-9]
scatter!(p1, coords[bc_nodes, 1], coords[bc_nodes, 2],
         color=:red, ms=5, msw=1.5, markershape=:square)
savefig(p1, "figs/plate_thin_ferrite_mesh.png")

# Fig 2: deflexion 3D surface + contour side by side
p_surf = surface(X_vec, Y_vec, W_grid, c=sap_cmap, xlabel="x [m]", ylabel="y [m]",
                 zlabel="w [mm]", title="Deflexion w(x,y) — Q4 Julia",
                 titlefontsize=10, camera=(40, 30))
p_cont = contourf(X_vec, Y_vec, W_grid, levels=20, c=sap_cmap,
                  aspect_ratio=:equal, xlabel="x [m]", ylabel="y [m]",
                  title=@sprintf("Contour w  |  w_center = %.3f mm  |  Navier = %.3f mm  |  err = %.2f%%",
                                  w_center*1000, -w_nav*1000, err_w),
                  titlefontsize=8, colorbar_title="w [mm]")
p2 = plot(p_surf, p_cont, layout=(1, 2), size=(1400, 600))
savefig(p2, "figs/plate_thin_ferrite_deflection.png")

# Fig 3: momentos contour
p_mxx = contourf(EX_vec, EY_vec, Mxx_grid, levels=20, c=sap_cmap,
                 aspect_ratio=:equal, xlabel="x [m]", ylabel="y [m]",
                 title=@sprintf("Mxx  |  |Mxx|max = %.3f kN·m/m", maximum(abs.(Mxx_grid))),
                 titlefontsize=9, colorbar_title="kN·m/m")
p_myy = contourf(EX_vec, EY_vec, Myy_grid, levels=20, c=sap_cmap,
                 aspect_ratio=:equal, xlabel="x [m]", ylabel="y [m]",
                 title=@sprintf("Myy  |  |Myy|max = %.3f kN·m/m", maximum(abs.(Myy_grid))),
                 titlefontsize=9, colorbar_title="kN·m/m")
p_mxy = contourf(EX_vec, EY_vec, Mxy_grid, levels=20, c=sap_cmap,
                 aspect_ratio=:equal, xlabel="x [m]", ylabel="y [m]",
                 title=@sprintf("Mxy  |  |Mxy|max = %.3f kN·m/m", maximum(abs.(Mxy_grid))),
                 titlefontsize=9, colorbar_title="kN·m/m")
p3 = plot(p_mxx, p_myy, p_mxy, layout=(1, 3), size=(1800, 550),
          plot_title=@sprintf("Momentos (Julia Q4 SRI) — Mxx Navier = %.3f, err = %.2f%%",
                              Mx_nav, err_M),
          plot_titlefontsize=11)
savefig(p3, "figs/plate_thin_ferrite_moments.png")

println()
println("  PNGs generados:")
println("    figs/plate_thin_ferrite_mesh.png")
println("    figs/plate_thin_ferrite_deflection.png")
println("    figs/plate_thin_ferrite_moments.png")
println(repeat("=", 72))
