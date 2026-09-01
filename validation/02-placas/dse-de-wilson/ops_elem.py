# -*- coding: utf-8 -*-
r"""La K de PLACA de un shell de OpenSees, para CUALQUIER geometria.

Amplia `ops_k.py` (que solo hacia el cuadrado unidad) para poder meter OpenSees
en el campeonato: hace falta la misma celda que el resto, con su geometria, su
espesor y su nu.

Truco (de `ops_k.py`): `integrator GimmeMCK 0 0 1` hace que la matriz "A" del
sistema SEA la K; con un solo elemento y todos los GDL libres, la K global es la
del elemento. `printA` la saca a fichero.

OpenSees usa 6 GDL por nudo `[ux, uy, uz, rx, ry, rz]`; la parte de PLACA son
`uz, rx, ry` -> indices `6*i+2, 6*i+3, 6*i+4`, que es el orden `[w, tx, ty]` de
`k_directa.json`.

Elementos disponibles:
    ShellMITC4    Dvorkin-Bathe 1984 — el MITC4, placa gruesa
    ShellDKGQ     Kirchhoff discreto (DKQ) — placa delgada
    ShellNLDKGQ   el DKGQ en version no lineal (misma K tangente inicial)
"""
import os, tempfile
import numpy as np

_SP = tempfile.gettempdir()
_cache = {}


def K_placa_ops(pts, E, nu, t, elem="ShellMITC4"):
    """K 12x12 de la parte de placa, en GDL [w, theta_x, theta_y] por nudo."""
    clave = (tuple(map(tuple, pts)), E, nu, t, elem)
    if clave in _cache:
        return _cache[clave]
    import openseespy.opensees as ops
    ops.wipe()
    ops.model('basic', '-ndm', 3, '-ndf', 6)
    for i, (x, y) in enumerate(pts, 1):
        ops.node(i, float(x), float(y), 0.0)
    ops.section('ElasticMembranePlateSection', 1, float(E), float(nu),
                float(t), 0.0)
    ops.element(elem, 1, 1, 2, 3, 4, 1)
    ops.system('FullGeneral'); ops.numberer('Plain'); ops.constraints('Plain')
    ops.integrator('GimmeMCK', 0.0, 0.0, 1.0)
    ops.analysis('Transient'); ops.analyze(1, 0.0)
    p = os.path.join(_SP, 'K_ops_tmp.txt')
    ops.printA('-file', p)
    v = np.array([float(z) for z in open(p).read().split()])
    n = int(round(np.sqrt(v.size)))
    K24 = v.reshape(n, n)
    ops.wipe()
    idx = [6*i+k for i in range(4) for k in (2, 3, 4)]
    K = K24[np.ix_(idx, idx)]
    K = (K+K.T)/2
    _cache[clave] = K
    return K


if __name__ == "__main__":
    pts = [(0, 0), (1, 0), (1, 1), (0, 1)]
    E, nu = 2.2e7, 0.2
    print("  control: 3 modos nulos y comportamiento al adelgazar")
    for el in ("ShellMITC4", "ShellDKGQ"):
        print("  --- %s" % el)
        for t in (0.2, 0.02, 0.002):
            K = K_placa_ops(pts, E, nu, t, el)
            D = E*t**3/(12*(1-nu*nu))
            w = np.sort(np.linalg.eigvalsh(K))
            n0 = int((np.abs(w) < 1e-8*abs(w[-1])).sum())
            print("     t=%-6s nulos=%d  %s"
                  % (t, n0, " ".join("%9.4f" % z for z in w[3:]/D)))
