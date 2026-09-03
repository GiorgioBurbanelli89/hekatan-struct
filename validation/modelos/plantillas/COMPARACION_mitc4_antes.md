# Las 8 plantillas: el `.e2k` en ETABS, y los numeros de Hekatan lineal

Generado con `node cli/plantillas_vs_csi.mjs`. Los datos de ETABS salen de
abrir cada `.e2k` en **ETABS 22 de verdad** (`cli/plantillas_etabs.py`),
guardarlo como `.EDB`, correr `RunAnalysis` y leer por la OAPI.

Cinco capas, y el orden importa: modelo -> masa -> estatico -> modos ->
fuerzas. Cada una solo tiene sentido si la anterior cuadra.

## Capa 1 · el modelo

«Barras» no exige igualdad una a una: el exportador junta una columna de
varios tramos en una sola LINE y ETABS la vuelve a partir. Se pide que cada
barra del modelo este DENTRO de alguna de ETABS. «Sueltos» son los joints que
ETABS crea de mas **y que ademas tocan algo**.

| ✓ | plantilla | joints ETABS | sobre nudo | sueltos | barras | apoyos | ΣFz | seccion | areas E/M |
|---|---|---|---|---|---|---|---|---|---|
| ✓ | `portico-2d` | 69 | 98.6 % | 0 | 100.0 % de 76 | 4/4 | 0.000 % | 0.000 % | 0/0 |
| ✓ | `portico-3d` | 465 | 99.8 % | 0 | 100.0 % de 544 | 16/16 | 0.000 % | 0.000 % | 0/0 |
| ✓ | `portico-losa` | 1041 | 99.9 % | 0 | 100.0 % de 544 | 16/16 | 0.000 % | 0.000 % | 900/900 |
| ✓ | `solo-rejilla` | 81 | 98.8 % | 0 | 100.0 % de 64 | 16/16 | 0.000 % | 0.000 % | 0/0 |
| ✓ | `losa-plana` | 1041 | 99.9 % | 0 | 100.0 % de 64 | 16/16 | 0.000 % | 0.000 % | 900/900 |
| ✓ | `losa-vigas-borde` | 1041 | 99.9 % | 0 | 100.0 % de 304 | 16/16 | 0.000 % | 0.000 % | 900/900 |
| ✓ | `dual` | 1049 | 99.9 % | 0 | 100.0 % de 544 | 24/24 | 0.000 % | 0.000 % | 940/940 |
| ✓ | `arriostrado` | 465 | 99.8 % | 0 | 100.0 % de 560 | 16/16 | 0.000 % | 0.000 % | 0/0 |

## Capa 1b · la propiedad de la cascara

El tipo (`Thin`/`Thick`/`Membrane`) y los diez modificadores. No es
cosmetico: el tipo cambia el ELEMENTO (Kirchhoff contra Mindlin) y un
modificador cambia la rigidez. `ShellType` de ETABS: 1 = ShellThin,
2 = ShellThick, 3 = Membrane.

| ✓ | plantilla | propiedad | clase | t [m] | tipo en ETABS | pedido | modificadores |
|---|---|---|---|---|---|---|---|
| — | `portico-2d` | sin cascaras | | | | | |
| — | `portico-3d` | sin cascaras | | | | | |
| ✓ | `portico-losa` | Losa | Slab | 0.200 | ShellThin | ShellThin | todos 1 |
| — | `solo-rejilla` | sin cascaras | | | | | |
| ✓ | `losa-plana` | Losa | Slab | 0.200 | ShellThin | ShellThin | todos 1 |
| ✓ | `losa-vigas-borde` | Losa | Slab | 0.200 | ShellThin | ShellThin | todos 1 |
| ✓ | `dual` | Losa | Slab | 0.200 | ShellThin | ShellThin | todos 1 |
| ✓ | `dual` | Muro | Wall | 0.250 | ShellThin | ShellThin | todos 1 |
| — | `arriostrado` | sin cascaras | | | | | |

## Capa 2 · la masa

La bascula va ANTES que los modos: el periodo va con la raiz de la masa, asi
que con masas distintas los periodos tienen que salir distintos y compararlos
no informa de nada. Hekatan la saca de `assembled_joint_mass()` (la misma
`ensamblarMasa()` de `modal.cpp`), ETABS de `AssembledJointMass`.

**La masa que cuenta es la de los nudos LIBRES**: la que cae en un apoyo tiene
el GDL fijo y no participa. Comparar solo el total lo esconde.

| plantilla | total Hek [t] | total ETABS | dif | **libre** Hek | **libre** ETABS | dif | en apoyos E/H |
|---|---|---|---|---|---|---|---|
| `portico-2d` | 46.01 | 45.57 | 0.957 % | 43.27 | 24.89 | 42.477 % | 9.8 / 2.7 |
| `portico-3d` | 289.76 | 286.24 | 1.216 % | 278.80 | 199.11 | 28.581 % | 39.2 / 11.0 |
| `portico-losa` | 924.11 | 920.58 | 0.381 % | 924.11 | 661.61 | 28.406 % | 258.3 / 0.0 |
| `solo-rejilla` | 78.31 | 78.31 | 0.000 % | 67.35 | 0.00 | 100.000 % | 39.2 / 11.0 |
| `losa-plana` | 712.66 | 712.66 | 0.000 % | 712.66 | 506.11 | 28.984 % | 205.8 / 0.0 |
| `losa-vigas-borde` | 818.38 | 816.62 | 0.215 % | 818.38 | 584.96 | 28.523 % | 231.0 / 0.0 |
| `dual` | 1015.88 | 1012.36 | 0.347 % | 1015.88 | 739.73 | 27.184 % | 271.9 / 0.0 |
| `arriostrado` | 295.73 | 292.20 | 1.192 % | 284.00 | 203.57 | 28.319 % | 39.9 / 11.7 |

## Capa 3 · estatico (caso `Dead`)

El nudo a nudo se mide contra el **maximo del modelo**, no contra el valor de
cada nudo: un nudo que casi no se mueve da un error relativo enorme sin que
eso signifique nada.

| plantilla | ΣRz Hek [kN] | ΣRz ETABS | dif | Uz Hek [mm] | Uz ETABS | dif | nudos | dentro del 1 % | peor nudo |
|---|---|---|---|---|---|---|---|---|---|
| `portico-2d` | 2160.0 | 2160.0 | 0.000 % | -3.245 | -3.235 | 0.312 % | 68 | 85.3 % | 2.694 % |
| `portico-3d` | 6480.0 | 6480.0 | 0.000 % | -2.281 | -2.278 | 0.148 % | 464 | 80.2 % | 2.140 % |
| `portico-losa` | 6480.0 | 6480.0 | 0.000 % | -2.849 | -2.847 | 0.069 % | 1040 | 100.0 % | 0.402 % |
| `solo-rejilla` | 6480.0 | 6480.0 | 0.000 % | -1.569 | -1.569 | 0.000 % | 80 | 100.0 % | 0.000 % |
| `losa-plana` | 6480.0 | 6480.0 | 0.000 % | -4.772 | -4.770 | 0.037 % | 1040 | 100.0 % | 0.238 % |
| `losa-vigas-borde` | 6480.0 | 6480.0 | 0.000 % | -3.960 | -3.960 | 0.002 % | 1040 | 100.0 % | 0.355 % |
| `dual` | 6480.0 | 6480.0 | 0.000 % | -2.855 | -2.854 | 0.040 % | 1048 | 100.0 % | 0.930 % |
| `arriostrado` | 6480.0 | 6480.0 | 0.000 % | -2.279 | -2.275 | 0.159 % | 464 | 15.1 % | 9.187 % |

## Capa 4 · los modos, emparejados por participacion de masa

**No por numero de orden.** Un portico plano tiene su primer modo FUERA del
plano, y el «modo 1» de un programa puede ser un modo distinto del otro. Cada
modo se cruza con el de ETABS cuyo vector de participacion
`[UX UY UZ RX RY RZ]` mas se le parece (coseno > 0.7).

| plantilla | modo Hek | modo ETABS | cos | T Hek [s] | T ETABS [s] | dif | UX/UY/RZ ETABS |
|---|---|---|---|---|---|---|---|
| `portico-2d` | 1 | 1 | 0.733 | 1.4230 | 1.6049 | -11.34 % | 0/77/0 |
|  | 2 | 2 | 1.000 | 0.6739 | 0.7445 | -9.49 % | 0/0/83 |
|  | 3 | 3 | 0.841 | 0.3300 | 0.3398 | -2.88 % | 89/0/0 |
|  | 4 | 6 | 0.731 | 0.3261 | 0.1135 | 187.39 % | 0/0/0 |
| `portico-3d` | 1 | 1 | 0.915 | 0.4256 | 0.4281 | -0.57 % | 0/88/0 |
|  | 2 | 2 | 0.915 | 0.4256 | 0.4281 | -0.57 % | 88/0/0 |
|  | 3 | 3 | 1.000 | 0.3832 | 0.3873 | -1.06 % | 0/0/89 |
|  | 4 | - | 0.000 | 0.3004 | - | - | - |
| `portico-losa` | 1 | 1 | 0.962 | 0.7055 | 0.7066 | -0.16 % | 33/56/0 |
|  | 2 | 2 | 0.962 | 0.7055 | 0.7066 | -0.16 % | 56/33/0 |
|  | 3 | 3 | 1.000 | 0.5880 | 0.5900 | -0.34 % | 0/0/89 |
|  | 4 | - | 0.327 | 0.2269 | - | - | - |
| `solo-rejilla` | 1 | - | 0.550 | 0.8116 | - | - | - |
|  | 2 | 3 | 1.000 | 0.8116 | 0.9557 | -15.08 % | 0/0/100 |
|  | 3 | - | 0.381 | 0.8116 | - | - | - |
|  | 4 | - | 0.403 | 0.8116 | - | - | - |
| `losa-plana` | 1 | 1 | 0.949 | 1.0206 | 1.0365 | -1.53 % | 9/74/0 |
|  | 2 | 2 | 0.949 | 1.0206 | 1.0365 | -1.53 % | 74/9/0 |
|  | 3 | 3 | 1.000 | 0.8940 | 0.9187 | -2.69 % | 0/0/82 |
|  | 4 | - | 0.337 | 0.2930 | - | - | - |
| `losa-vigas-borde` | 1 | 2 | 0.973 | 0.7646 | 0.7689 | -0.57 % | 0/87/0 |
|  | 2 | 1 | 0.973 | 0.7646 | 0.7689 | -0.57 % | 87/0/0 |
|  | 3 | 3 | 1.000 | 0.5861 | 0.5893 | -0.55 % | 0/0/89 |
|  | 4 | - | 0.337 | 0.2396 | - | - | - |
| `dual` | 1 | 1 | 0.973 | 0.6804 | 0.6822 | -0.26 % | 0/88/0 |
|  | 2 | - | 0.350 | 0.2152 | - | - | - |
|  | 3 | 3 | 0.920 | 0.1827 | 0.1828 | -0.07 % | 78/0/0 |
|  | 4 | 8 | 1.000 | 0.1613 | 0.0458 | 252.40 % | 0/0/19 |
| `arriostrado` | 1 | 1 | 0.915 | 0.4293 | 0.4315 | -0.52 % | 0/88/0 |
|  | 2 | 2 | 1.000 | 0.3435 | 0.2958 | 16.11 % | 0/0/89 |
|  | 3 | 3 | 0.914 | 0.2685 | 0.2684 | 0.01 % | 88/0/0 |
|  | 4 | 9 | 0.997 | 0.2308 | 0.0911 | 153.19 % | 0/0/5 |

## Capa 5 · fuerzas

Las de barra pasan por `tests/lib/comparar.mjs`, que hace las dos
conversiones de la convencion CSI: fuerza de EXTREMO -> DIAGRAMA (en el nudo
i cambia de signo) y el signo de `M2`. Las de cascara se emparejan por
CENTROIDE, porque ETABS renumera las areas al importar.

| plantilla | barras emparejadas | peor P | peor V2 | peor M3 | shells | peor M11 | peor M22 |
|---|---|---|---|---|---|---|---|
| `portico-2d` | 66 de 76 | 4.660 % | 0.338 % | 0.732 % | 0 de 0 | 0.000 % | 0.000 % |
| `portico-3d` | 480 de 544 | 2.494 % | 0.366 % | 0.794 % | 0 de 0 | 0.000 % | 0.000 % |
| `portico-losa` | 480 de 544 | 0.669 % | 0.091 % | 0.167 % | 900 de 900 | 67.998 % | 67.998 % |
| `solo-rejilla` | 64 de 64 | 0.000 % | 0.000 % | 0.000 % | 0 de 0 | 0.000 % | 0.000 % |
| `losa-plana` | 64 de 64 | 0.006 % | 0.285 % | 0.319 % | 900 de 900 | 87.586 % | 87.586 % |
| `losa-vigas-borde` | 268 de 304 | 0.475 % | 0.197 % | 0.333 % | 900 de 900 | 85.147 % | 85.147 % |
| `dual` | 480 de 544 | 0.860 % | 5.618 % | 6.397 % | 940 de 940 | 67.399 % | 103.191 % |
| `arriostrado` | 496 de 560 | 3.067 % | 1.176 % | 2.003 % | 0 de 0 | 0.000 % | 0.000 % |
