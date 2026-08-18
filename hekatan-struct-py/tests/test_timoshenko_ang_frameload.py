"""Las tres cosas que el motor Python NO tenia y hacian imposible casar ETABS.

Arbitro: la teoria de vigas, que aqui es exacta (un solo vano, seccion
constante). No se usa un numero heredado de nadie.

  1. `as`   -> cortante de Timoshenko: delta = PL3/3EI + PL/(G·As)
  2. `ang`  -> local axis angle: girar 90 grados intercambia I22 e I33
  3. `frameload` -> carga de vano: 5wL4/384EI en el centro del vano
"""
import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from hekatan_struct import ElementInputs, NodeInputs, deform  # noqa: E402

E = 200e6          # kN/m2
NU = 0.3
G = E / (2 * (1 + NU))


def _viga(L, n_tramos, A, I22, I33, J, **extra):
    nodes = [(L * k / n_tramos, 0.0, 0.0) for k in range(n_tramos + 1)]
    elements = [[k, k + 1] for k in range(n_tramos)]
    ei = ElementInputs()
    for k in range(n_tramos):
        ei.elasticities[k] = E
        ei.shear_moduli[k] = G
        ei.poissons_ratios[k] = NU
        ei.areas[k] = A
        ei.moments_of_inertia_y[k] = I22
        ei.moments_of_inertia_z[k] = I33
        ei.torsional_constants[k] = J
        for campo, valor in extra.items():
            getattr(ei, campo)[k] = valor
    return nodes, elements, ei


def test_cortante_timoshenko_contra_la_formula():
    """Voladizo con As explicita: la flecha lleva su termino de cortante."""
    L, A, As = 3.0, 0.02, 0.006          # perfil I: el alma es 0.006, no 5/6·A
    I33 = 4.0e-4
    nodes, elements, ei = _viga(L, 1, A, 1.0e-4, I33, 1.0e-6,
                                shear_areas_z=As, shear_areas_y=As)
    ni = NodeInputs(supports={0: (True,) * 6}, loads={1: (0, 0, -10.0, 0, 0, 0)})
    uz = abs(deform(nodes, elements, ni, ei).deformations[1][2])
    # Plano 1-2 de una viga horizontal = el vertical, o sea manda I33 con As2.
    esperado = 10.0 * L ** 3 / (3 * E * I33) + 10.0 * L / (G * As)
    assert abs(uz - esperado) / esperado < 1e-9, (uz, esperado)


def test_sin_as_usa_cinco_sextos_del_area():
    """Sin `as` el motor supone 5/6·A — el mismo defecto que ETABS y que el TS."""
    L, A, I33 = 3.0, 0.02, 4.0e-4
    nodes, elements, ei = _viga(L, 1, A, 1.0e-4, I33, 1.0e-6)
    ni = NodeInputs(supports={0: (True,) * 6}, loads={1: (0, 0, -10.0, 0, 0, 0)})
    uz = abs(deform(nodes, elements, ni, ei).deformations[1][2])
    esperado = 10.0 * L ** 3 / (3 * E * I33) + 10.0 * L / (G * (5 / 6) * A)
    assert abs(uz - esperado) / esperado < 1e-9


def test_ang_90_intercambia_las_inercias():
    """Girar la barra 90 grados tiene que dar lo mismo que cruzar I22 e I33."""
    L, A = 3.0, 0.02
    I_fuerte, I_flojo = 4.0e-4, 3.0e-5
    ni = NodeInputs(supports={0: (True,) * 6}, loads={1: (0, 0, -10.0, 0, 0, 0)})

    n1, e1, ei1 = _viga(L, 1, A, I_fuerte, I_flojo, 1e-6, local_angles=90.0)
    n2, e2, ei2 = _viga(L, 1, A, I_flojo, I_fuerte, 1e-6)
    for ei in (ei1, ei2):
        ei.shear_areas_y[0] = ei.shear_areas_z[0] = 1e9   # apaga el cortante

    u1 = deform(n1, e1, ni, ei1).deformations[1][2]
    u2 = deform(n2, e2, ni, ei2).deformations[1][2]
    assert abs(u1 - u2) / abs(u2) < 1e-10, (u1, u2)
    # Y el giro tiene que NOTARSE. Sin `ang`, la flexion vertical de una viga
    # horizontal va por el plano 1-2, o sea por I33 = el flojo: sale 13.33
    # veces mas flecha, que es justo I_fuerte/I_flojo. Ese es el factor que se
    # perdia cuando el motor ignoraba el angulo.
    n3, e3, ei3 = _viga(L, 1, A, I_fuerte, I_flojo, 1e-6)
    ei3.shear_areas_y[0] = ei3.shear_areas_z[0] = 1e9
    u3 = deform(n3, e3, ni, ei3).deformations[1][2]
    assert abs(u3 / u1 - I_fuerte / I_flojo) < 1e-6


def test_frameload_da_la_flecha_de_vano():
    """Viga biapoyada con carga repartida: 5wL4/384EI en el centro."""
    L, A, I33, w = 6.0, 0.02, 4.0e-4, -12.0
    nodes, elements, ei = _viga(L, 2, A, 1e-4, I33, 1e-6, frame_loads=(0.0, 0.0, w))
    for k in (0, 1):
        ei.shear_areas_y[k] = ei.shear_areas_z[k] = 1e9   # Euler-Bernoulli puro
    ni = NodeInputs(supports={0: (True, True, True, True, False, False),
                              2: (False, True, True, True, False, False)})
    res = deform(nodes, elements, ni, ei)
    uz = abs(res.deformations[1][2])
    esperado = 5 * abs(w) * L ** 4 / (384 * E * I33)
    assert abs(uz - esperado) / esperado < 1e-9, (uz, esperado)
    # y la carga tiene que estar entera: cada apoyo se lleva wL/2
    assert abs(res.reactions[0][2] - abs(w) * L / 2) < 1e-9
    assert abs(res.reactions[2][2] - abs(w) * L / 2) < 1e-9


@pytest.mark.validation
def test_galpon_heks_si_esta():
    """El galpon entero: 378 nudos, y la carga tiene que cerrar al 100 %."""
    from hekatan_struct.heks import leer_heks, resolver_heks
    heks = (Path(__file__).resolve().parents[3]
            / "galpon-bodega-electoral" / "galpon_bodega.heks")
    if not heks.exists():
        pytest.skip("no esta el .heks del galpon")
    m = leer_heks(str(heks))
    assert not m.errores, m.errores[:5]
    assert (len(m.nodes), len(m.elements)) == (378, 723)
    assert len(m.element_inputs.local_angles) == 156
    assert len(m.element_inputs.shear_areas_z) == 723
    res = resolver_heks(m)
    fz = 0.0
    for idx, wv in m.element_inputs.frame_loads.items():
        i, j = m.elements[idx]
        a, b = m.nodes[i], m.nodes[j]
        fz += wv[2] * sum((b[t] - a[t]) ** 2 for t in range(3)) ** .5
    rz = sum(r[2] for r in res.reactions.values())
    assert abs(fz + rz) < 1e-6 * abs(fz)
    uz = min(d[2] for d in res.deformations.values()) * 1000
    assert abs(uz - (-28.378)) < 0.01, uz     # el mismo numero que el motor TS
