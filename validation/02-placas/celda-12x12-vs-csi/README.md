# La celda 12×12 de flexión, desarmada contra ETABS / SAP2000

No basta con que pase el patch test: hay que ver **pieza por pieza** —jacobiano,
funciones de forma, B, la constitutiva, B^T·D·B— si cuadra con CSI. Esto es esa
medida.

## De dónde sale la referencia

De `galpon-bodega-electoral/flex12*.json`: la **flexibilidad 9×9 medida** por la
OAPI sobre UN elemento (`celda_flexion12*.py`). No es una cuenta a mano ni un
número heredado: es lo que ETABS y SAP2000 devolvieron.

    flex12.json       ETABS 22, 10 casos (cuadrado ν 0–0.45, rect, paralelogramo, trapecio)
    flex12_sap.json   SAP2000 24, los mismos 10
    flex12_thin.json  ETABS 22 Shell-Thin, 6 casos más
    flex12_dist.json  Shell-Thin distorsionado (paralelogramo, trapecio, irregular)
    flex12_t.json     barrido de espesor t = 0.20 / 0.10 / 0.05 / 0.02

## Lo primero: validar la medida (`validar12.py`)

Antes de creerse nada. Las 29 matrices cumplen:

    ||K·R_sólido_rígido|| / (||K||·||R||)  =  1e-16 … 1e-17
    autovalores nulos                      =  3 EXACTAMENTE
    el resto                               >  0  (semidefinida positiva)

Sin esto, comparar contra ella no significaría nada.

## Cómo se compara (`flex_vs_flex.py`) — medida contra medida

Comparar rigideces reconstruidas mete dos suposiciones (la inversión y el cierre
por sólido rígido). Así que se hace al revés: se coge **nuestra** 12×12 (por el
camino REAL del motor: `getLocalStiffnessMatrix*` → 24×24 local → `TᵀKT` →
GDL 2,3,4 de cada nudo), se le aplican **las mismas ataduras del ensayo**, se
invierte y se compara con la `F` medida. Es el mismo experimento numérico que se
le hizo a ETABS.

## RESULTADO 1 — el Shell-Thin ES el nuestro, al 0.000 %

| caso | ν | ETABS 22 | SAP2000 24 |
|---|---|---|---|
| cuadrado | 0.00 · 0.10 · 0.20 · 0.30 · 0.45 | **0.000 %** | **0.000 %** |
| rectángulo 1×0.5 | 0.20 | **0.000 %** | **0.000 %** |
| **paralelogramo** | 0.20 | **0.000 %** | — |
| **trapecio** | 0.20 | **0.000 %** | — |
| **irregular** | 0.30 | **0.000 %** | — |
| t = 0.02 (placa muy delgada) | 0.00 | **0.000 %** | — |

15 casos, término a término, incluidas las geometrías **distorsionadas**. Y el
espectro coincide **cifra a cifra** (ver abajo). El DKQ de Batoz & Tahar **es**
el Shell-Thin de CSI, no «se le parece».

**ETABS 22 y SAP2000 24 dan exactamente el mismo número** en los 10 casos: es el
mismo motor (SAPFire).

## RESULTADO 1b — y coincide PIEZA A PIEZA, no solo el producto

Que `K = ∫BᵀD B·detJ` coincida **no prueba** que B y D coincidan: podrían
compensarse. Así que se separan (`piezas_thin.py`, `piezasB_thin.py`).

**La constitutiva se aísla por ν.** Quitando `D0(ν) = Et³/(12(1-ν²))`:

    K(ν)·(1-ν²)·12/(E t³)  =  P  +  ν·Q          ← lineal en ν
      P = ∫Bᵀ [[1,0,0],[0,1,0],[0,0,½]]  B detJ
      Q = ∫Bᵀ [[0,1,0],[1,0,0],[0,0,-½]] B detJ

P y Q se resuelven con ν=0.00 y 0.10, y los otros tres ν se **predicen**, no se
ajustan:

    ν = 0.20  →  1.2e-15      ν = 0.30  →  2.1e-15      ν = 0.45  →  3.7e-15

Luego su constitutiva **es** la clásica, con ese `D0(ν)` y esa matriz. Y ya sin
constitutiva: `||P_E − P_H||/||P|| = 4.9e-16`, `||Q_E − Q_H||/||Q|| = 3.7e-14`,
con `||P|| = 26.9537` y `||Q|| = 6.32895` **idénticos**.

**B, componente a componente, con los modificadores direccionales.** La rigidez
es lineal en ellos, así que subiendo uno de 1 a 2 y restando sale la integral
sola — sin constitutiva ninguna:

| pieza | qué es | ‖ΔA‖/‖A‖ | ‖A‖ ETABS | ‖A‖ Hekatan |
|---|---|---|---|---|
| A11 | `∫B₁ᵀB₁·detJ` (κxx) | **1.8e-15** | 245612 | 245612 |
| A22 | `∫B₂ᵀB₂·detJ` (κyy) | **2.2e-15** | 245612 | 245612 |
| A12 | `∫B₃ᵀB₃·detJ` (κxy) | **5.9e-15** | 97820.2 | 97820.2 |

**El término cruzado `D(1,2)=D0·ν`**, que ningún modificador cubre por separado:
el resto `K − (A11+A22+A12)` vale **1.2913 %** en ETABS y **1.2913 %** en
Hekatan, y los dos restos coinciden entre sí a **2.4e-13**.

> Eso cierra el pendiente nº1 del `CONTINUAR_AQUI`: aquel «A11+A22+A12 no
> reconstruye K, falla 1.29 %» **no era un error nuestro** — es el término
> cruzado, y es idéntico en los dos.

**Los modos.** Comparar autovectores uno a uno no vale (hay autovalores
repetidos y dentro de un subespacio propio cualquier base sirve), así que se
comparan los **proyectores espectrales** agrupados por autovalor:

    ν=0.00  6 subespacios  ‖P_E − P_H‖ = 1.0e-13
    ν=0.20  7 subespacios  ‖P_E − P_H‖ = 4.0e-13
    ν=0.45  7 subespacios  ‖P_E − P_H‖ = 1.0e-13

**El jacobiano** queda probado por las geometrías distorsionadas (5e-16, 6e-16,
7e-16): un jacobiano mal calculado no puede dar cero ahí — es justo lo que
delataba el bounding box del DKE, con 23–44 %.

**La ley en t** (`t³`, Kirchhoff puro sin cortante): `‖K/t³‖ = 4.94151e+07`
igual en t=0.20 y t=0.02, y K coincide a 1.2e-15 en los dos.

### El último hueco del Thin — CERRADO el 31-ago-2026

Faltaba el reparto del término cruzado cuando **M11 y M22 suben A LA VEZ**. En
`plateDKQ.h` estaba puesto `D0·ν·sqrt(m11·m22)` **por suposición**, y las
candidatas eran `sqrt(m11·m22)=1.414`, `(m11+m22)/2=1.5`, `m11=2` y `1`.

Medido con `celda_flexion12_piezas_thick.py` (caso `thinM1122`):

    ETABS    ||K(2,2,1) − K(1,1,1)||  =  364874
    Hekatan                            =  364874
    dif = 0.0000 %

**La suposición era correcta.** Con eso el Shell-Thin no tiene ningún hueco.

Y de paso valida el método: `||K(2,2,1)−K(1,1,1) − (A11+A22)||` da **1.4653 %**
en ETABS y **1.4653 %** en Hekatan — el mismo número, que es el peso del término
cruzado `D0·ν`.

## RESULTADO 2 — el Shell-Thick sigue abierto, pero la pieza ya está localizada

Se descartó pieza por pieza, midiendo:

| pieza que se toca | cómo se toca | efecto |
|---|---|---|
| **CORTANTE** (`Ds`, o sea κ) | `V13MOD=V23MOD=s`, s de 0.25 a 100 | **NINGUNO**: el error va de 83.6 % a 84.2 % con s ×400. No es el cortante, y no es el κ. |
| **CONSTITUTIVA de flexión** (`Db`) | `M11=M22=m` | no cierra: el mejor es m≈2–3 y se queda en 31 % |
| **MODOS INCOMPATIBLES α** | quitarlos | **de 83.6 % a 43.5 %** — es la pieza que más separa |
| formulación entera | DKQ / DKMQ / DSE | 58 % / 59 % / 43.5 % |

Y el error **no depende del espesor** (83.6 · 85.3 · 85.7 · 85.9 % para
t = 0.20 → 0.02). Si fuese cortante se iría al adelgazar. **Es flexión.**

Tampoco vale la ley de Reissner-Mindlin `K = A·t³ + B·t` (`separar_t2.py`):
resuelta exacta con dos espesores, predice los otros dos con 8 % en el mejor
caso y **176 % en el peor**.

## RESULTADO 3 — el espectro, que es la firma

Los autovalores no dependen de convenciones de signo, ni del orden de los nudos,
ni de los ejes. Cuadrado 1×1, ν=0, t=0.20, **divididos por D** (números puros):

    modo   ETABS thick   ETABS thin   MITC4+α   MITC4 s/α   DKQ     DKMQ
      4      0.887804     0.484390    0.333333   0.500000   0.484390  0.500000
      5      0.999867     0.500000    0.333333   0.500000   0.500000  0.500000
      6      0.999867     0.500000    0.887827   0.887827   0.500000  0.507904
      7      1.000000     1.000000    1.000000   1.000000   1.000000  0.912409
      8      1.000000     1.000000    1.000000   1.000000   1.000000  1.000000
      9     13.671172     1.000000   10.416667  10.416667   1.000000  1.000000
     10     13.671172    15.000000   93.862173  93.862173  15.000000 13.686131
     11     91.953045    15.000000  156.250000 156.250000  15.000000 13.686131
     12    455.454364    16.515610  156.250000 156.250000  16.515610 14.371365

Lo que dice este cuadro:

* **`ETABS thin` y `DKQ` son la misma columna, cifra a cifra.** Cerrado.
* Nuestro **0.887827** y su **0.887804** coinciden a 5 cifras: ese modo lo
  tenemos exacto, y viene de los modos incompatibles.
* Donde ETABS tiene **0.999867 ×2**, nosotros tenemos **0.333333 ×2** con los
  modos α y **0.500000 ×2** sin ellos. Los modos α nos ablandan justo en la
  dirección contraria a ETABS — la misma conclusión que el barrido, por otro
  camino.
* Sus dos modos altos, **13.671172 ×2**, son el **15.000000** del Thin
  ablandado por el cortante. Y su modo máximo, **455.454364**, es el que no
  tiene pareja en ninguna de nuestras columnas.

## Cómo se corre

    cd hekatan-fem/src/cpp
    V=../../../validation/02-placas/celda-12x12-vs-csi
    g++ -O2 -std=c++17 -static-libgcc -static-libstdc++ -I eigen -I . \
        $V/kb12b.cpp utils/shellQ4.cpp utils/shellThin.cpp utils/shellQ4_DKMQ.cpp \
        utils/drillingHughesBrezzi.cpp utils/feHelpers.cpp -o kb12b.exe
    # y las variantes: -DHK_BENDING_FORMULATION=1 (DSE) y =2 (DSE_FULL)

    cd galpon-bodega-electoral
    python validar12.py                  # 1. la medida es buena
    python flex_vs_flex.py  kb12b.exe    # 2. medida contra medida
    python variantes.py     <dir_exes>   # 3. que formulacion acerca
    python barrido.py       kb12b.exe    # 4. que PIEZA acerca
    python espectro.py      <dir_exes>   # 5. la firma

## Lo que falta

El **43.5 %** que queda del Shell-Thick, una vez descartados cortante,
constitutiva y modos α. La pieza que no se ha tocado todavía es **B** (las
funciones de forma y la interpolación), y el número que hay que explicar es el
**455.454364**.
