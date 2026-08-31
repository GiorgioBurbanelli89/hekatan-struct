# Patch test 2-001 de SAP2000 — el test del jacobiano

`C:\Program Files\Computers and Structures\SAP2000 24\Manuals\Verification\Analysis\Shells\Problem 2-001.pdf`
(y su gemelo, el `Example 2-001-thin.sdb` / `-thick.sdb` ya montados).

Es el de **MacNeal & Harder 1985**. Cinco elementos IRREGULARES dentro de un
rectangulo, con un campo de tension CONSTANTE impuesto por desplazamientos en el
contorno. Un elemento completo lo reproduce EXACTO aunque este distorsionado;
uno que no, **no converge** — y no lo delata ningun benchmark de malla regular,
porque ahi el error vale cero por casualidad geometrica.

El arbitro NO es otro programa: es **teoria publicada**. SAP2000 publica la
tabla con 0 % de diferencia en las dos opciones.

    membrana  ->  Timoshenko & Goodier 1951, ec. 2 pag. 6
    flexion   ->  Timoshenko & Woinowsky-Krieger 1959, ecs. 101-102 pag. 81

## El modelo (pulgadas)

    E = 1e6 lb/in2      nu = 0.25      t = 0.001 in

    1 (0,    0   )   2 (0,    0.12)   3 (0.04, 0.02)   4 (0.08, 0.08)
    5 (0.18, 0.03)   6 (0.16, 0.08)   7 (0.24, 0   )   8 (0.24, 0.12)

    conectividad (MacNeal-Harder): 2-1-3-4 · 1-7-5-3 · 7-8-6-5 · 8-2-4-6 · 3-5-6-4

Campo impuesto en los nudos 1, 2, 7 y 8 — el giro sobre Z queda **libre**:

    u = 1e-3 (x + y/2)              v = 1e-3 (y + x/2)
    w = 1e-3 (x^2 + xy + y^2)/2     Rx = +dw/dy      Ry = -dw/dx

    D = E t^3 / (12(1-nu^2)) = 1/11250

    sigma_xx = sigma_yy = 1333.33 psi     tau_xy = 400 psi
    Mxx = Myy = 1.1111e-07                Mxy = 3.3333e-08 lb-in/in

El modelo es plano: membrana y flexion **no se acoplan** y se comprueban por
separado. Los nudos interiores 3, 4, 5 y 6 tienen que salir EXACTOS.

⚠️ Las 3 paginas de **calculo a mano** del PDF salen VACIAS en texto (son
imagen). Estan aqui como `p2001_hand-5/6/7.png`, sacadas con
`pdftoppm -r 160 -png -f 5 -l 7`. La tabla del texto plano ademas se descoloca y
hace leer «Mxx = 400», que en realidad es el `tau_xy` de la membrana.

## Lo que destapo (31-ago-2026)

| formulacion | membrana | flexion ANTES | flexion AHORA |
|---|---|---|---|
| Shell-Thin (DKQ)    | 4e-14 % | 4e-13 %     | 4e-13 % |
| Shell-Thick (MITC4) | 4e-14 % | **276.9 %** | 2e-9 %  |

Dos bugs, los dos «cartesiano contra natural», los dos **invisibles en un
rectangulo** — el mismo patron que el bounding box del DKE de la vispera:

**A · a los modos incompatibles les faltaba media receta de Taylor 1976.** Son
DOS cosas, no una: derivar con `J0` **y** escalar por `detJ0/detJ`. Sin la
segunda `∫Ba dA != 0`, que es justo la condicion del patch test de curvatura
constante (`diag_thick.cpp`):

    elem      ||∫Ba dA||/A      con detJ0/detJ
      1          12.5              4.4e-16
      2          18.9              4.1e-15
      3          11.6              2.9e-16
      4          23.6              7.7e-16
      5           9.3              2.3e-16

**B · el MITC4 interpolaba el cortante CARTESIANO.** Dvorkin & Bathe (1984)
interpolan las componentes **covariantes** y solo al final vuelven al cartesiano:

    gamma_cov  = J · gamma_cart      (J directo, en el punto de atadura)
    interpolar A-C en eta,  B-D en xi
    gamma_cart = J^-1 · gamma_cov    (en el punto de Gauss)

Medido con un campo de Kirchhoff EXACTO, donde `gamma` tiene que ser 0:

    elem      gamma_espurio / pendiente
      1              0.61
      2              2.88
      3              0.53
      4              2.07
      5              0.47

O sea cortante inventado del orden de la propia solucion.

El B tiene ademas un sintoma que se ve **sin teoria ninguna** (`inv_orden.cpp`):
la matriz del elemento cambiaba segun **por que nudo empezases a numerar**.

    arranque en nudo 1:  antes 3.97e-01     ahora 8.8e-17
    arranque en nudo 2:  antes 2.84e-17     ahora 2.8e-17
    arranque en nudo 3:  antes 3.97e-01     ahora 8.8e-17

sobre un CUADRADO. Por eso movia tambien en malla regular — y por eso cerro de
paso el PENDIENTE de `zapata_winkler_sap2000.mjs` (0.686 % -> 0.259 %).

## Arreglado en

- `hekatan-fem/src/cpp/utils/shellQ4.cpp` — `getBendingK`: los dos
- `hekatan-fem/src/cpp/plate_q4/kirchhoff_q4.cpp` — el B
- `hekatan-fem/src/utils/shellQ4.ts` — el B
- `hekatan-struct-py/src/hekatan_struct/elements/shell_q4_motor.py` — los dos

## Como se corre

Desde `hekatan-fem/src/cpp`, con Eigen en `eigen/`:

    G="/c/Program Files/GNU Octave/Octave-10.1.0/mingw64/bin"
    V=../../../validation/02-placas/patch-test-sap2000-2001

    # el patch test del motor (shellQ4.cpp: Thin y Thick)
    g++ -O2 -std=c++17 -static-libgcc -static-libstdc++ -I eigen -I . \
        $V/patch2001.cpp utils/shellQ4.cpp utils/shellThin.cpp \
        utils/drillingHughesBrezzi.cpp utils/feHelpers.cpp -o patch2001.exe
    PATH="$G:$PATH" ./patch2001.exe

    # el diagnostico de los dos bugs (∫Ba dA y gamma espurio)
    g++ -O2 -std=c++17 -I eigen -I . $V/diag_thick.cpp \
        utils/drillingHughesBrezzi.cpp utils/feHelpers.cpp -o diag.exe

    # el otro solver de placa, y la invariancia al orden de nudos
    g++ -O2 -std=c++17 -I eigen -I . $V/patch_kirchhoff.cpp \
        plate_q4/kirchhoff_q4.cpp -o patchk.exe
    g++ -O2 -std=c++17 -I eigen -I . $V/inv_orden.cpp \
        plate_q4/kirchhoff_q4.cpp -o inv.exe

Y el motor de Python (usa PENDIENTES `[w, betax, betay]`, no `[w, thx, thy]`):

    python patch2001.py

## Lo que falta de este manual

`Problem 2-002.pdf` a `2-020.pdf` — 20 casos de cascara, todos con solucion
teorica independiente y los `.sdb` montados en `Verification\Analysis Examples\`,
separados en `-thin` y `-thick`. El siguiente que toca es el **2-007, el
hemisferio**, que es el deficit abierto (-34 % en 8x8).
