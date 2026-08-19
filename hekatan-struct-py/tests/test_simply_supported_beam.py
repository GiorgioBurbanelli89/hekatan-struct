"""Viga simplemente apoyada con carga puntual centro — PL³/48EI, M_max = PL/4."""
import numpy as np
import pytest
from hekatan_struct import deform, analyze, NodeInputs, ElementInputs


L = 6.0
B, H = 0.3, 0.5
E = 200e6
NU = 0.3
G = E / (2 * (1 + NU))
P = 10.0


@pytest.fixture
def beam_inputs():
    nodes = [(0.0, 0.0, 0.0), (L/2, 0.0, 0.0), (L, 0.0, 0.0)]
    elements = [[0, 1], [1, 2]]
    A_sec = B * H
    # Beam horizontal CSI: Local 2 = +Z (vertical), Local 3 = horizontal perp.
    # Strong axis vertical bending around Local 3 → I = b × h³ / 12 (b horizontal, h vertical depth)
    Iz_around_3 = B * H**3 / 12   # 0.003125 (strong)
    Iy_around_2 = H * B**3 / 12   # 0.001125 (weak)
    a_, b_ = max(B, H)/2, min(B, H)/2
    J = a_ * b_**3 * (16/3 - 3.36 * (b_/a_) * (1 - (b_/a_)**4 / 12))
    node_inputs = NodeInputs(
        supports={
            0: (True, True, True, True, False, False),  # pinned + Rx
            2: (False, True, True, True, False, False),  # roller + Rx
        },
        loads={1: (0, 0, -P, 0, 0, 0)},
    )
    element_inputs = ElementInputs(
        elasticities={0: E, 1: E},
        shear_moduli={0: G, 1: G},
        poissons_ratios={0: NU, 1: NU},
        areas={0: A_sec, 1: A_sec},
        moments_of_inertia_z={0: Iz_around_3, 1: Iz_around_3},
        moments_of_inertia_y={0: Iy_around_2, 1: Iy_around_2},
        torsional_constants={0: J, 1: J},
    )
    return nodes, elements, node_inputs, element_inputs


def test_midspan_deflection(beam_inputs):
    """δ = PL³/48EI + PL/(4·G·As) — el segundo término NO es tolerancia.

    El motor de Hekatan es Timoshenko (como ETABS): sin dar `as`, supone
    `As = 5/6·A`. Contra la fórmula de Euler-Bernoulli pelada salía un 2.17 %
    de "error" que es exactamente el cortante — y que crece al acortar el vano.
    El árbitro correcto es la fórmula con los dos términos, y ahí cierra al
    0.0 %.
    """
    nodes, elements, ni, ei = beam_inputs
    res = deform(nodes, elements, ni, ei)
    I = B * H**3 / 12
    As = (5.0 / 6.0) * (B * H)          # el default del motor, el de ETABS
    delta_flexion = P * L**3 / (48 * E * I)
    delta_cortante = P * L / (4 * G * As)
    delta_expected = delta_flexion + delta_cortante
    Uz_mid = abs(res.deformations[1][2])
    rel_err = abs(Uz_mid - delta_expected) / delta_expected
    assert rel_err < 1e-3, (
        f"δ_mid={Uz_mid*1000:.4f}mm vs Timoshenko={delta_expected*1000:.4f}mm "
        f"(flexión {delta_flexion*1000:.4f} + cortante {delta_cortante*1000:.4f}), "
        f"err={rel_err*100:.3f}%"
    )


def test_max_moment(beam_inputs):
    nodes, elements, ni, ei = beam_inputs
    res = deform(nodes, elements, ni, ei)
    ana = analyze(nodes, elements, ei, res)
    M_expected = P * L / 4
    M_max = max(abs(ana.bendings_z[0][1]), abs(ana.bendings_z[1][0]))
    rel_err = abs(M_max - M_expected) / M_expected
    assert rel_err < 0.02, f"M_max={M_max:.4f} vs expected={M_expected:.4f}, err={rel_err*100:.2f}%"


def test_reactions(beam_inputs):
    nodes, elements, ni, ei = beam_inputs
    res = deform(nodes, elements, ni, ei)
    r_i, r_j = res.reactions[0], res.reactions[2]
    assert abs(r_i[2] - P/2) < 1e-2
    assert abs(r_j[2] - P/2) < 1e-2
    assert abs(r_i[2] + r_j[2] - P) < 1e-2
