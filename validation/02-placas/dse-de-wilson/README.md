# El DSE de Wilson — la formulación del Shell-Thick de CSI, en su fuente

## La fuente, y es gratis

`Three-Dimensional Static and Dynamic Analysis of Structures`, **Edward L.
Wilson** — el autor del motor de SAP2000/ETABS. **Él mismo lo publica gratis**:
<https://edwilson.org/bookshelf/edsbook> · PDF completo:
<https://edwilson.neocities.org/bookshelf/threedimensional.pdf>

**Capítulo 8, «Plate Bending Elements»**, extraído en
`registros/libros/wilson_cap8_DSE/`.

> «This quadrilateral plate bending element, **including shear deformations**,
> is defined in this book as the **Discrete Shear Element, or DSE**.»
>
> «If the shear is set to zero along each side… This approximation produces the
> **Discrete Kirchhoff Element, DKE**.»

    Shell-THICK de CSI = DSE        Shell-THIN de CSI = DKE

Son **el mismo elemento padre**: 8 nudos, 16 rotaciones → las de punto medio se
giran a normal/tangencial → **las tangenciales se anulan** (12 GDL) → **lados
CÚBICOS en `u_z`** → los 4 `Δψ` se condensan. Es el «out-of-plane displacements
are cubic» del Analysis Reference Manual.

Y la única referencia del capítulo, que es la del Thick:

> **Ibrahimbegović, A. (1993), «Quadrilateral Elements for Analysis of Thick and
> Thin Plates»**, *CMAME* **110**, 195–209.

## Lo implementado (`dse_wilson.py`) y lo que da

Ecuaciones (8.7), (8.9), (8.10), (8.15), (8.17), (8.18)-(8.19) y (8.21).
Emparejando los modos **por valor** (no por orden), contra la K medida:

| caso | ETABS | DSE de Wilson | dif |
|---|---|---|---|
| thin cuadrado | `0.452918` ×2 | `0.452918` | **0.000 %** |
| thin cuadrado | `0.800000` ×2 | `0.800000` | **0.000 %** |
| thin cuadrado | `15.013748` ×2 | `15.013748` | **0.000 %** |
| thick rect | `0.473791` | `0.473791` | **0.000 %** |
| thick rect | `2.026209` | `2.026209` | **0.000 %** |
| thick rect | `6.722075` | `6.723035` | 0.014 % |
| thick cuadrado | `13.671172` ×2 | `13.686131` | 0.109 % |

**La formulación es la correcta**: los modos que emparejan lo hacen exactos.

## Lo que NO cierra, y por qué no puede cerrarse así

A ETABS le sobran **dos modos altos** que ninguna variante del DSE produce:

    ETABS:  0.8878  0.9999  0.9999  1.0000  1.0000  13.6712  13.6712  91.9530  455.4544
    DSE:    0.5000  0.5000  0.8756  0.9124  1.0000   1.0000   8.3361  13.6861   13.6861

Se barrió el factor `2/3` de la ecuación (8.7) y la corrección (8.17):

    f=2/3  ->  aparecen los 13.686 (los 13.671 de ETABS) pero el techo es 13.86
    f=0    ->  aparecen 0.8878 (su 0.887804) y 93.86 (su 91.95) pero se pierden
               los 13.686
    intermedios (0.5, 1/3, 0.2) -> 22.8, 43.4, 80.6. **Nunca 455.45.**

**ETABS tiene los dos comportamientos a la vez** y nuestro elemento nunca.

Se probó darle **8 GDL internos** (sin anular las rotaciones tangenciales, que
explicaría el rango 7-8 medido en su `A11` frente a nuestro 3) y con **dos
familias** (unas acopladas al cortante y otras no). **Los 8 internos solo
ablandan más**, y eso es álgebra, no casualidad:

    Kb = K11 − K12 · K22⁻¹ · K12ᵀ      con K22 definida positiva

lo que se resta es semidefinido positivo, así que **unos GDL internos
condensados solo pueden ABLANDAR, nunca endurecer**. Si ETABS sale más rígido,
su rigidez extra **no viene de tener más internos**.

Y concuerda con lo medido por el otro camino: `K_ETABS − K_DSE_FULL` sale
**semidefinida positiva y de rango 4** en cuadrado, rectángulo, paralelogramo y
trapecio. Es decir:

    K_ETABS  ≈  K_DSE  +  (rigidez añadida de rango 4)

Los cuatro modos de esa rigidez son todos **relojes de arena** sobre `w`, `θx`,
`θy` y `φ = ∂θx/∂x + ∂θy/∂y`, con alineación **1.00000000** contra `φ` y
`A11+A22+A12 = 455.453785` frente al `455.454364` medido (**1.3e-6**).

## Marcador

    MITC4 (lo que usa hoy el motor)   4/45 modos <1 %   ||dK|| 101 %
    + c·phi                           2/45              69.6 %
    + reloj de arena (3 constantes)   8/45              69.4 %
    DSE de Wilson                     7/45              ~96 %

## Cómo se corre

    cd galpon-bodega-electoral
    python <ruta>/dse_marcador.py      # el marcador
    python <ruta>/dse_emparejar.py     # emparejando modos POR VALOR
    python <ruta>/dse_variantes.py     # que pieza genera cada modo
    python <ruta>/dse_barrido.py       # el factor 2/3 y la correccion 8.17
    python <ruta>/dse8_test.py         # 8 internos
    python <ruta>/cuatro_motores.py    # ETABS vs Abaqus vs OpenSees vs Hekatan

## Lo que queda

La **rigidez de rango 4** que hay que sumarle al DSE. Su ley con ν está medida
(`λ/D = 363.636 + 181.818·(1−ν)/2`, con `b = a/2` exacto y residuo `2e-5`) y es
constante en `t`; falta su ley con la **geometría**, que en el trapecio ya no es
`φ` puro (alineación 0.746 frente a 1.000 en el cuadrado).

---

# La pista de Ibrahimbegović (1993) y hasta dónde llegó

El paper está en ScienceDirect (de pago), pero **su abstract es explícito**:

> «...two quadrilateral plate elements applicable in the analysis of both thick
> and thin plates, based on Reissner-Mindlin plate theory and an **enhanced
> displacement interpolation**, which enables the consistent loading vector to
> be constructed. **The constraint on the constant shear strain is enforced
> explicitly**, thus eliminating the shear locking phenomena.»

Y la literatura que lo cita lo describe así:

> «The element incorporates **assumed shear strains** and **incompatible bending
> modes** as main ingredients for efficiency.»

Eso encaja con todo lo medido, y explica por qué el DSE solo no llegaba:

* **condensar ABLANDA** (`K11 − K12·K22⁻¹·K12ᵀ`), así que ni el DSE ni más GDL
  internos podían dar los modos altos de ETABS;
* pero una **RESTRICCIÓN impuesta explícitamente SUMA** una matriz semidefinida
  positiva — que es exactamente la forma del residuo medido (semidefinido
  positivo, rango 4).

## Lo probado (`dse_constraint.py`, `mix_final.py`)

Penalizando la parte **no constante** del cortante:

    K += alpha · G·t · ∫ (γ − γ_media)ᵀ (γ − γ_media) dA

| | resultado |
|---|---|
| con el cortante del DSE (8.9) | sube `0.9124 → 1.0000` (uno de los `1.0000` de ETABS), pero **no toca los altos** |
| con el cortante MITC4 | **sí sube los altos**: `156.25 → 1031` con α=10, y hay un α≈3.9 que da el `455` |

**Pero no cierra**: al subir los altos, los `13.6712 ×2` de ETABS desaparecen, y
`‖dK‖` empeora (104.6 % es el mejor, con α=0.5).

    a= 0.00   0.500 0.500 0.888 1.000 1.000  10.417  93.862 156.250 156.250
    a= 3.00   0.500 0.500 0.889 1.000 1.000  41.667 156.250 156.250 375.111
    a= 6.00   0.500 0.500 0.889 1.000 1.000  72.917 156.250 156.250 656.361
    ETABS     0.888 0.999 0.999 1.000 1.000  13.671  13.671  91.953 455.454

**ETABS tiene a la vez los `13.67` (que salen del acoplamiento `2/3` del DSE) y
los `91.95 / 455.45` (que salen de la restricción).** Ninguna combinación
probada da las dos cosas.

## Marcador

    MITC4 (lo que usa hoy el motor)      4/45 modos <1 %   ||dK|| 101 %
    + c·phi                              2/45              69.6 %
    + reloj de arena (3 constantes)      8/45              69.4 %
    DSE de Wilson                        7/45              ~96 %
    DSE + restriccion de cortante        3/9 (cuadrado)   104.6 %

## Lo que falta

**El paper de Ibrahimbegović 1993** (CMAME 110, 195-209, DOI
`10.1016/0045-7825(93)90160-Y`). Es la única fuente que dice **cómo** se combinan
las dos piezas —la interpolación enriquecida y la restricción explícita— sin que
una rompa a la otra. Todo lo demás ya está medido y acotado.

---

# Las TRES formulaciones implementadas, y dónde falla cada una

Con los papers en la mano (`registros/papers_shell_csi/`,
`registros/ibrahimbegovic_1993/`), implementadas las tres candidatas:

| fichero | qué implementa | modos nulos | resultado |
|---|---|---|---|
| `ib93.py` (`cubico=False`) | **PQ2** — Ibrahimbegović 1993 §3.1 | 3 ✓ | **idéntico a nuestro MITC4** |
| `ib93.py` (`cubico=True`) | **PQ3** — §3.2, = el DSE de Wilson | 3 ✓ | 4/9 modos |
| `itw91.py` | **ITW 1991 IJNME 31** — el que está EN SAP | 1 ✗ | convenciones sin fijar |

    ETABS   0.8878 0.9999 0.9999 1.0000 1.0000 13.6712 13.6712 91.9530 455.4544
    PQ2     0.5000 0.5000 0.8878 1.0000 1.0000 10.4167 93.8622 156.2500 156.2500
    PQ3     0.4843 0.5000 0.5000 0.9124 1.0000  1.0000 13.6861 13.6861  13.8580

## Lo verificado

* **PQ3 = DSE**: dan el mismo espectro cifra a cifra. Ibrahimbegović 1993 §3.2 y
  Wilson cap. 8 **son el mismo elemento**, confirmado numéricamente.
* **PQ2 = nuestro MITC4** = el **T1 de Hughes & Tezduyar** (lo dice el propio
  paper: «the proposed shear strain interpolation (3.22) corresponds to the T1
  plate element of Hughes and Tezduyar»).
* Ninguno de los dos da los modos altos de ETABS (`91.95`, `455.45`).

## La pieza que faltaba, y de dónde sale

El **Apéndice del IJNME 31** («SHEAR/MEMBRANE LOCKING CORRECTION») da una
corrección **B-barra sobre el CORTANTE** que no estaba aplicada:

    (90)  gamma = b_I^T w_I + G_I theta_I + gamma_c
    (91)  G_I theta_I + gamma_c = 0            <- la restriccion
    (96)  G_bar_I = G_I - (1/Omega) * int G_I dOmega

> «Both G corrections, (89) and (96), are performed by utilizing the **corrected
> serendipity shape functions**»

Nosotros la aplicábamos **solo a las curvaturas**, nunca al cortante. Y eso
encaja con el abstract de 1993 («the constraint on the constant shear strain is
enforced explicitly») y con la forma del residuo medido (semidefinido positivo).

## El ITW 1991, ya bien construido (`itw91b.py`)

Salía con **1 modo nulo en vez de 3**. La causa era un **error de lectura de la
ec. (80)**: el PDF parte la línea y el segundo término arranca con `−`, no `+`.
Y tiene que ser **resta**, porque en la (71) el término jerárquico va con
`(θ_K − θ_J)`: al reagrupar por nudo, cada `θ_I` aparece con **signos opuestos**
en sus dos lados. Con suma, un giro constante no se cancela y el elemento pierde
sólidos rígidos.

Y las convenciones, leídas del PDF y no supuestas:

* **(74)** `n_JK = (cos α_JK ; sin α_JK)` es la **normal saliente** — en la Fig. 2
  se ve `n₁₂` con símbolo de ángulo recto sobre el lado. Así que `α` es el ángulo
  de la **normal**, y no hay nada que invertir: la normal saliente **no depende
  del orden de los nudos**. (El intento anterior usaba el ángulo del **lado**,
  que sí cambia de signo al invertirlo.)
* **(75)** `J = I−4; K = mod(I,4)+1` para los de punto medio
* **(76)** `symm∇β = B_I·e·θ_I`, con `e` alternante — su signo global no afecta
  a `BᵀDB`, y se comprobó: da lo mismo con `e = ±1`.

Con eso, **3 modos nulos** y:

    ETABS      0.8878 0.9999 0.9999 1.0000 1.0000 13.6712 13.6712 91.9530 455.4544
    ITW 1991   0.5000 0.5000 0.8880 1.0000 1.0000 10.4170 93.8620 125.0000 125.0000

**3 de 9 modos** bajo el 1 % (`0.8878`, `1.0000` ×2), y el `93.86` a 2 % del
`91.95`. Sigue sin dar los `13.67 ×2` ni el `455.45`.

## Dónde está el bloqueo AHORA

`itw91.py` implementa la ec. (80) tal cual, pero **con 1 modo nulo en vez de 3**:
hay convenciones sin fijar y no se deben adivinar —

* el sentido de `α_IJ` (el lado I→J con J = el **anterior**: ¿se invierte el
  ángulo del lado, o no?). Con `inv=0` salen dos modos de ETABS (`0.8878` y
  `1.0000`) pero el elemento tiene **1** modo nulo; con `inv=1` salen los 3 nulos
  y los valores no.
* la matriz alternante **`e`** de la ec. (21), que define `β = e·θ` — sin leer.
* la ec. (71), la interpolación de `w` del thick shell — sin leer.

Las tres están en el PDF (`itw1991_thick_IJNME31_p-*.png`). **Es lectura, no
tanteo**: ese es el siguiente paso, y no hace falta ninguna fuente más.
