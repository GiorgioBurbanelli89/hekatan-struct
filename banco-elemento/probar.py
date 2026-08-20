# -*- coding: utf-8 -*-
"""Mide una formulación contra las 10 matrices medidas de ETABS, de un tirón.

    python probar.py --proyeccion            la formulación de hoy (el defecto)
    python probar.py --comparar              las cinco, una debajo de otra
    python probar.py --proyeccion --residuo  de qué está hecho lo que sobra
    python probar.py --proyeccion --cpp      y que el C++ diga lo mismo
    python probar.py --proyeccion --gamma 0.1 0.2 0.4 0.6    barrer un parámetro

Está pensado para el ciclo corto: cambiar una idea y ver el número en menos de
un segundo. Lo que se valide aquí pasa a `hekatan-struct-py`, y de ahí al `.cpp`.
"""
from __future__ import annotations

import argparse

import numpy as np

import medir


# Los kwargs de cada tipo salen del PROPIO paquete (`kwargs_drilling`), no de
# una copia aquí. La copia ya mordió: este banco nació asumiendo que llamar sin
# argumentos daba el tipo 3, y para cuando se escribió la sesión de Python ya
# había puesto el defecto en la proyección (tipo 8) — como tocaba. El banco
# entonces comparaba el tipo 8 de Python contra el tipo 3 del C++ y cantaba un
# 15 % de diferencia que no existía.
#
# Duplicar el mapeo tipo -> parámetros es exactamente el fallo que produjo esa
# falsa alarma. Con `kwargs_drilling` es imposible: si el paquete cambia, este
# banco cambia con él.
from hekatan_struct.elements.membrane_itw import kwargs_drilling

VARIANTES = {
    "itw1990":    ("3 · ITW 1990 (Allman + burbuja, Gauss 3x3)", 3),
    "regla8":     ("7 · ITW 1991, regla de ocho puntos", 7),
    "proyeccion": ("8 · proyección del drilling (FEAP)  ← el defecto", 8),
    "proy8":      ("9 · proyección + regla de ocho", 9),
}


def tabla(nombre, kw, cpp=False, tipo_cpp=None):
    print("\n%s" % nombre)
    print("  %-16s %-9s %-9s %-9s %-9s %s"
          % ("geometría", "K_uu", "K_uθ", "K_θθ", "12x12", "modos" + ("   C++" if cpp else "")))
    tot = []
    for nom, pts, E, nu, t, Ke in medir.casos():
        Kn = medir.k_nuestra(pts, E, nu, t, **kw)
        d = [medir.rel(a, b) for a, b in zip(medir.bloques(Kn), medir.bloques(Ke))]
        g = medir.rel(Kn, Ke)
        tot.append(g)
        extra = ""
        if cpp and tipo_cpp is not None:
            Kc = medir.k_del_cpp(pts, E, nu, t, tipo_cpp)
            extra = "   %.1e" % (np.linalg.norm(Kc - Kn) / np.linalg.norm(Kn))
        m = medir.modos_nulos(Kn)
        print("  %-16s %8.2f %8.2f %8.2f %8.2f  %d %s%s"
              % (nom, d[0], d[1], d[2], g, m, "OK " if m == 3 else "MEC", extra))
    print("  %-16s %8s %8s %8s %8.2f" % ("MEDIA", "", "", "", float(np.mean(tot))))
    return float(np.mean(tot))


def ver_residuo(kw):
    print("\nDE QUÉ ESTÁ HECHO LO QUE SOBRA")
    for nom, pts, E, nu, t, Ke in medir.casos():
        R, rel_w, V = medir.residuo(pts, E, nu, t, Ke, **kw)
        rango = int((rel_w > 1e-6).sum())
        d, Raj = medir.ajustar_hourglass(R)
        e = E / (2 * (1 + nu)) * t                       # G * t
        n0 = np.linalg.norm(R) / np.linalg.norm(Ke) * 100
        n1 = np.linalg.norm(Raj) / np.linalg.norm(Ke) * 100
        print("\n  %s   rango %d   %.3f %% -> %.3f %% quitando el reloj de arena"
              % (nom, rango, n0, n1))
        print("     coef/(G t):  uu %+.5f   vv %+.5f   tt %+.5f"
              % (d["uu"] / e, d["vv"] / e, d["tt"] / e))
        for r in range(min(2, rango)):
            print("     modo %d (%.3f)  %s" % (r + 1, rel_w[r], medir.describe_modo(V[:, r])))


def main():
    p = argparse.ArgumentParser(description="banco de iteración del elemento")
    for k in VARIANTES:
        p.add_argument("--" + k, action="store_true", help=VARIANTES[k][0])
    p.add_argument("--comparar", action="store_true", help="las cuatro variantes")
    p.add_argument("--residuo", action="store_true", help="rango y modos de lo que sobra")
    p.add_argument("--cpp", action="store_true", help="comprobar contra kelem_native.exe")
    p.add_argument("--gamma", type=float, nargs="+", help="barrer gamma/mu")
    a = p.parse_args()

    pedidas = [k for k in VARIANTES if getattr(a, k)]
    if a.comparar or not pedidas:
        pedidas = list(VARIANTES)

    for k in pedidas:
        nom, tipo = VARIANTES[k]
        kw = kwargs_drilling(tipo)
        if a.gamma:
            print("\n%s — barrido de gamma/mu" % nom)
            for g in a.gamma:
                m = float(np.mean([medir.rel(medir.k_nuestra(pts, E, nu, t, gamma_fac=g, **kw), Ke)
                                   for _, pts, E, nu, t, Ke in medir.casos()]))
                print("   gamma = %-6.3f  ->  %6.2f %% contra ETABS" % (g, m))
            continue
        tabla(nom, kw, cpp=a.cpp, tipo_cpp=tipo)
        if a.residuo:
            ver_residuo(kw)


if __name__ == "__main__":
    main()
