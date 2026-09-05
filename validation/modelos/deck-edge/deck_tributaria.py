# -*- coding: utf-8 -*-
"""Reparto TRIBUTARIO (dos direcciones, bisectrices a 45 grados) de una carga uniforme q sobre un
cuadrilatero hacia sus 4 bordes, como hace ETABS con los objetos de piso MEMBRANA / DECK
("vertical loads are transformed from the floors onto the beams using tributary area
algorithms"): cada borde recibe el area entre el borde y las bisectrices de sus dos esquinas.
Devuelve, por borde, la carga total (kN) y la longitud; se aplica como carga de linea uniforme
equivalente sobre las barras que caen en ese borde.
Para un rectangulo a x b (a >= b): bordes largos b/2*(a - b/2)*q, cortos b^2/4*q."""
import numpy as np
def muestras(P, n=400):
    """Por borde k: (puntos 3D del pano cuya region tributaria es ese borde, dA de cada punto)."""
    P = np.asarray(P, float); c = P.mean(axis=0)
    e1 = P[1] - P[0]; nrm = np.cross(e1, P[3] - P[0]); nrm /= np.linalg.norm(nrm); e1 /= np.linalg.norm(e1); e2 = np.cross(nrm, e1)
    Q = np.array([[np.dot(p - c, e1), np.dot(p - c, e2)] for p in P])
    xs = np.linspace(Q[:, 0].min(), Q[:, 0].max(), n); ys = np.linspace(Q[:, 1].min(), Q[:, 1].max(), n)
    X, Y = np.meshgrid(xs, ys); pts = np.stack([X.ravel(), Y.ravel()], 1)
    sgn = 0
    for i in range(4):
        a, b = Q[i], Q[(i + 1) % 4]; cr = (b[0] - a[0]) * (pts[:, 1] - a[1]) - (b[1] - a[1]) * (pts[:, 0] - a[0]); sgn = sgn + (cr >= 0).astype(int)
    pts = pts[(sgn == 4) | (sgn == 0)]
    dists = []
    for i in range(4):
        a, b = Q[i], Q[(i + 1) % 4]; d = b - a; L = np.linalg.norm(d); t = np.clip(((pts - a) @ d) / (L * L), 0, 1)
        dists.append(np.linalg.norm(pts - (a + t[:, None] * d), axis=1))
    borde = np.argmin(np.array(dists), axis=0)
    A = 0.5 * abs(np.linalg.norm(np.cross(P[2] - P[0], P[3] - P[1]))); dA = A / len(pts)
    out = []
    for k in range(4):
        sel = pts[borde == k]; out.append((c + sel[:, :1] * e1 + sel[:, 1:2] * e2, dA))
    return out

def tributaria(P, q):
    """P: 4 puntos (np.array 4x3) en orden, q: carga por m2 (positiva = magnitud). -> lista de 4
    (carga_total_kN, longitud) para los bordes 01, 12, 23, 30. Se calcula en el plano del pano
    con las bisectrices interiores: para cuadrilateros convexos la region de cada borde es el
    poligono borde + puntos de las bisectrices (aproximacion por muestreo, exacta en rectangulos)."""
    P = np.asarray(P, float); c = P.mean(axis=0)
    e1 = P[1] - P[0]; n = np.cross(e1, P[3] - P[0]); n /= np.linalg.norm(n); e1 /= np.linalg.norm(e1); e2 = np.cross(n, e1)
    Q = np.array([[np.dot(p - c, e1), np.dot(p - c, e2)] for p in P])      # 2D
    # muestreo: rejilla fina dentro del poligono, cada punto va al borde mas cercano (eso ES la
    # region tributaria por bisectrices en un poligono convexo)
    xs = np.linspace(Q[:, 0].min(), Q[:, 0].max(), 400); ys = np.linspace(Q[:, 1].min(), Q[:, 1].max(), 400)
    X, Y = np.meshgrid(xs, ys); pts = np.stack([X.ravel(), Y.ravel()], 1)
    def dentro(p):
        s = 0
        for i in range(4):
            a, b = Q[i], Q[(i + 1) % 4]; cr = (b[0] - a[0]) * (p[:, 1] - a[1]) - (b[1] - a[1]) * (p[:, 0] - a[0])
            s = s + (cr >= 0).astype(int)
        return (s == 4) | (s == 0)
    m = dentro(pts); pts = pts[m]
    dists = []
    for i in range(4):
        a, b = Q[i], Q[(i + 1) % 4]; d = b - a; L = np.linalg.norm(d); t = np.clip(((pts - a) @ d) / (L * L), 0, 1)
        dists.append(np.linalg.norm(pts - (a + t[:, None] * d), axis=1))
    borde = np.argmin(np.array(dists), axis=0)
    A = 0.5 * abs(np.linalg.norm(np.cross(P[2] - P[0], P[3] - P[1])))
    dA = A / len(pts)
    out = []
    for i in range(4):
        L = np.linalg.norm(P[(i + 1) % 4] - P[i]); out.append((q * dA * int((borde == i).sum()), L))
    return out
if __name__ == "__main__":
    P = np.array([[0, 0, 0], [12, 0, 0], [12, 1, 0], [0, 1, 0.0]])
    print(tributaria(P, 1.0), "esperado largos 0.5*(12-0.5)=5.75, cortos 0.25")
