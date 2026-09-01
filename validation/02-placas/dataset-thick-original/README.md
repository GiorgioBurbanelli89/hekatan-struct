# La matriz ORIGINAL del Shell-Thick de ETABS — para estudiarla

**24 casos medidos**, con el método **directo** (sin supuestos): se sujetan los
12 GDL, se impone un **desplazamiento unitario** en uno y las **reacciones son la
columna de K**. Equilibrio comprobado en cada caso (`max|Σ F3| ~ 1e-10`).

    dataset_thick.json          las 24 matrices 12x12
    celda_dataset_thick.py      como se midieron (OAPI de ETABS)
    estudio_thick.py            los cinco cortes del analisis

Tres barridos, cada uno aislando una cosa:

| barrido | casos | qué aísla |
|---|---|---|
| **geometría** | cuad · rect 1×0.5 · rect 1×0.25 · paralelogramo · trapecio · irregular | el jacobiano |
| **ν** | 0 · 0.10 · 0.20 · 0.30 · 0.45 | la constitutiva |
| **espesor** | 0.02 · 0.05 · 0.10 · 0.20 · 0.40 | separa flexión (t³) de cortante (t) |

y de cada geometría y espesor, también el **Thin**, para tener la pareja.

## LO QUE ENSEÑA — el barrido de espesor

Cuadrado, ν=0, autovalores **divididos por D** (números puros):

    t=0.02   0.8889 0.9999 0.9999 1.0 1.0  14.9677 14.9677  455.4544 3045.1682
    t=0.05   0.8888 0.9999 0.9999 1.0 1.0  14.8928 14.8928  455.4544 1125.7289
    t=0.10   0.8886 0.9999 0.9999 1.0 1.0  14.6313 14.6313  346.3237  455.4544
    t=0.20   0.8878 0.9999 0.9999 1.0 1.0  13.6712 13.6712   91.9530  455.4544
    t=0.40   0.8845 0.9999 0.9999 1.0 1.0  10.8288 10.8288   23.4318  455.4544
    THIN     0.4844 0.5000 0.5000 1.0 1.0   1.0000 15.0000  15.0000   16.5156

**Tres cosas se leen directamente de ahí:**

**1 · El `455.4544` está en TODOS los espesores.** Constante en `t` ⇒ va con `D`
⇒ es un modo de **FLEXIÓN**, no de cortante. Y su Thin **no lo tiene** (llega a
16.5156). O sea: **el Thick de CSI tiene un modo de flexión que su propio Thin no
tiene, y que nosotros tampoco.**

**2 · El otro modo alto SÍ es cortante**, y confirma un número viejo: escala
`3045 → 1126 → 346 → 92 → 23`, con razones `2.705 / 3.251 / 3.766 / 3.92` donde
un `1/t²` puro daría `6.25 / 4 / 4 / 4`. **Solo se acerca a `1/t²` en placa
gruesa**; en fina se queda corto. (Es exactamente lo que ya se había medido y
anotado como «su cortante NO escala 1/t²».)

**3 · Los `14.9677 → 10.8288` SÍ convergen al Thin.** Al adelgazar tienden a
`15.0000`, que es el valor del Thin. Ahí el Thick se comporta como debe.

**Pero los modos bajos NO convergen**: a `t=0.02`, donde el cortante ya casi no
cuenta, el Thick sigue en `0.8889 / 0.9999` y el Thin en `0.4844 / 0.5 / 0.5`.
Eso es la diferencia estructural, y **el manual de CSI lo respalda**:

> «the thick-plate formulation tends to be more accurate, although **somewhat
> stiffer**, than the thin-plate formulation» — Analysis Reference Manual

## Y con ν

    nu=0.00   0.8878 0.9999 0.9999 1.0000 1.0000 13.6712 13.6712 91.9530 455.4544
    nu=0.10   0.7990 0.9000 0.9297 0.9297 1.1000 13.5425 13.5425 82.8957 446.2726
    nu=0.20   0.7102 0.8000 0.8524 0.8524 1.2000 13.3906 13.3906 73.8132 437.0908
    nu=0.30   0.6215 0.7000 0.7683 0.7683 1.3000 13.2042 13.2042 64.7038 427.9090
    nu=0.45   0.4883 0.5500 0.6295 0.6295 1.4500 12.8170 12.8170 50.9851 414.1363

El modo grande es **lineal en ν**: `λ/D = 454.542·(1 − 0.199994·ν)`, residuo del
ajuste `2e-5`. Y descompuesto, `λ/D = 363.636 + 181.818·(1−ν)/2` con `b = a/2`
**exacto** — o sea, una parte va con el término directo `D` y otra con el de
**torsión** `D(1−ν)/2`, en proporción 2:1. **Es curvatura de verdad, no una
penalización arbitraria.**

## Qué tiene la suya que la nuestra no

Comparado con nuestro MITC4 (`||dK|| ≈ 95–105 %`), el residuo `K_ETABS − K_nuestra`
tiene **3 autovalores positivos y 3 negativos**: no es «rigidez que falta», es
**otra distribución**. Contra el **DSE** sí sale semidefinido positivo y de
**rango 4** — por eso el DSE es el punto de partida correcto.

Los cuatro modos de esa diferencia son **relojes de arena** sobre `w`, `θx`, `θy`
y `φ = ∂θx/∂x + ∂θy/∂y`, con alineación **1.00000000** contra `φ`, y

    A11 + A22 + A12 = 455.453785    vs    455.454364 medido     (1.3e-6)

## Para qué sirve este dataset

Es la **referencia permanente**: cualquier formulación que se implemente se mide
contra estas 24 matrices, geometría a geometría, espesor a espesor y ν a ν. El
marcador (`../dse-de-wilson/marcador.py`) da los modos por debajo del 1 %.

    python estudio_thick.py        # los cinco cortes
