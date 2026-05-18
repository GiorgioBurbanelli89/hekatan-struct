# -*- coding: utf-8 -*-
"""
OpenSeesPy del MISMO modelo que el .e2k generado.
Edificio 4×4 cols × 3 pisos, vanos 5m, h=3m, hormigón f'c=210,
cols 40×40, vigas 30×40, losa 0.15m.

Compara con ETABS Membrane: T₁=0.6718s, T₃=0.5845s
"""
import openseespy.opensees as ops
import math, sys

sys.stdout.reconfigure(encoding='utf-8')

# ── Parámetros (idénticos al .e2k) ────────────────────────────────────────
NX, NY = 3, 3              # 3 vanos = 4 cols
DX, DY = 5.0, 5.0          # m
HP = 3.0
NP = 3
LOSA_E = 0.15
COL_B = COL_H = 0.40
VIG_B = 0.30
VIG_H = 0.40
E = 21458891.0    # kN/m² (f'c=210)
NU = 0.2
RHO = 24.0        # kN/m³ → masa = w/g

G = E / (2 * (1 + NU))


def run(case_name, slab_modifier_b=1.0, slab_modifier_m=1.0):
    """slab_modifier_b: bending stiffness factor; m: membrane stiffness factor."""
    ops.wipe()
    ops.model('basic', '-ndm', 3, '-ndf', 6)

    # Crear nodos
    nmap = {}
    nid = 1
    for ip in range(NP+1):
        for iy in range(NY+1):
            for ix in range(NX+1):
                ops.node(nid, ix*DX, iy*DY, ip*HP)
                nmap[(ix,iy,ip)] = nid
                nid += 1
    # Restraints en base
    for iy in range(NY+1):
        for ix in range(NX+1):
            ops.fix(nmap[(ix,iy,0)], 1,1,1,1,1,1)

    # Material para shell
    ops.nDMaterial('ElasticIsotropic', 1, E, NU, RHO)
    # Sección PlateFiber con thickness ajustada por bending modifier
    # PlateFiber maneja membrana + bending a la vez. Para "Membrane only" = bending=0
    # En OpenSees no hay separación directa, pero podemos usar t' = t * sqrt(modifier^(1/3))
    # O simplemente usar ShellMITC4 + PlateFiber y aceptar que es Shell completo
    ops.section('PlateFiber', 1, 1, LOSA_E)

    # Geom transforms
    ops.geomTransf('Linear', 1, 0, 1, 0)  # cols (eje longitudinal Z)
    ops.geomTransf('Linear', 2, 0, 0, 1)  # vigas (eje longitudinal X o Y)

    # Frames
    A_col = COL_B*COL_H
    Iz_col = COL_B*COL_H**3/12
    Iy_col = COL_H*COL_B**3/12
    J_col = (Iy_col + Iz_col) * 0.7

    A_vig = VIG_B*VIG_H
    Iz_vig = VIG_B*VIG_H**3/12
    Iy_vig = VIG_H*VIG_B**3/12
    J_vig = (Iy_vig + Iz_vig) * 0.7

    rho_col = RHO/9.81 * A_col
    rho_vig = RHO/9.81 * A_vig

    eid = 1
    # Columnas
    for ip in range(NP):
        for iy in range(NY+1):
            for ix in range(NX+1):
                n1 = nmap[(ix,iy,ip)]; n2 = nmap[(ix,iy,ip+1)]
                ops.element('elasticBeamColumn', eid, n1, n2,
                           A_col, E, G, J_col, Iy_col, Iz_col, 1,
                           '-mass', rho_col)
                eid += 1
    # Vigas
    for ip in range(1, NP+1):
        for iy in range(NY+1):
            for ix in range(NX):
                n1 = nmap[(ix,iy,ip)]; n2 = nmap[(ix+1,iy,ip)]
                ops.element('elasticBeamColumn', eid, n1, n2,
                           A_vig, E, G, J_vig, Iy_vig, Iz_vig, 2,
                           '-mass', rho_vig)
                eid += 1
        for iy in range(NY):
            for ix in range(NX+1):
                n1 = nmap[(ix,iy,ip)]; n2 = nmap[(ix,iy+1,ip)]
                ops.element('elasticBeamColumn', eid, n1, n2,
                           A_vig, E, G, J_vig, Iy_vig, Iz_vig, 2,
                           '-mass', rho_vig)
                eid += 1

    # Losas
    if slab_modifier_m > 1e-6:  # solo crear si hay membrane
        for ip in range(1, NP+1):
            for iy in range(NY):
                for ix in range(NX):
                    n1 = nmap[(ix,iy,ip)]
                    n2 = nmap[(ix+1,iy,ip)]
                    n3 = nmap[(ix+1,iy+1,ip)]
                    n4 = nmap[(ix,iy+1,ip)]
                    ops.element('ShellMITC4', eid, n1, n2, n3, n4, 1)
                    eid += 1

    # Eigen
    try:
        eig = ops.eigen('-fullGenLapack', 12)
    except Exception as e:
        print(f"  [ERROR] {e}")
        return []
    T = []
    for ev in eig:
        if ev > 1e-12:
            T.append(2*math.pi/math.sqrt(ev))
        else:
            T.append(float('inf'))
    print(f"\n=== {case_name} ===")
    for i in range(min(8, len(T))):
        print(f"  Modo {i+1}: T = {T[i]:.4f} s")
    return T


# Caso único: edificio con shells (= "Membrane completo" en OpenSees)
T_shell = run("OpenSeesPy — Edificio con ShellMITC4 (membrana + bending)")

# ── Comparación con ETABS ────────────────────────────────────────────────
T_etabs_membrane = [0.6718, 0.6718, 0.5845, 0.2028, 0.2028, 0.1783, 0.1125, 0.1125]

print("\n" + "="*70)
print("  COMPARATIVA — Edificio 4×4 cols × 3 pisos · Losa 0.15m hormigón")
print("="*70)
print(f"  {'Modo':<5} {'ETABS Membrane':<17} {'OpenSeesPy Shell':<20} {'Δ%':<10}")
print("  " + "-"*55)
for i in range(min(8, len(T_etabs_membrane), len(T_shell))):
    te = T_etabs_membrane[i]
    to = T_shell[i] if T_shell[i] != float('inf') else 0
    d = (to-te)/te*100 if te > 0 else 0
    to_s = f"{to:.4f}" if to else "—"
    print(f"  {i+1:<5} {te:<17.4f} {to_s:<20} {d:<+10.2f}")

print("\nNotas:")
print("  - ETABS Membrane: SHELLPROP MODELINGTYPE=Membrane (sin bending)")
print("  - OpenSeesPy ShellMITC4: full shell (membrane + bending) — NO equivale a Membrane")
print("  - Para equivalencia exacta, OpenSees no tiene 'membrane only' element directo")
