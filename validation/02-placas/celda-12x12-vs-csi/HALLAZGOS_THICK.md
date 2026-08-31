# El Shell-Thick, desarmado — qué se descartó y qué queda

Todo medido el 31-ago-2026 contra ETABS 22 (= SAP2000 24, dígito a dígito).
Cuadrado 1×1, E=2.2e7, t=0.20. `D = E·t³/(12(1−ν²))`.

## ⚠️ Lo primero: el método presupone LINEALIDAD

`A11 = K(m11=2) − K(base)` solo es `∫B₁ᵀB₁·detJ` si `K` es **lineal** en los
modificadores. Si no, no significa nada. Verificado (`linealidad.py`):

    ||K(2,2,1)−K(1,1,1) − (A11+A22)|| / ||…||
      ETABS thick   0.0545 %
      ETABS thin    1.4653 %      <- el resto es el cruzado D0·ν, que ningun
      Hekatan thin  1.4653 %         modificador cubre solo. IDENTICO.
      Hekatan thick 3.2105 %

## EL DATO — qué parte de la matriz es flexión y qué parte es cortante

Se mide subiendo `M11` (flexión) y `V13/V23` (cortante) y viendo cuánto se
mueve la matriz:

    | motor   |   ‖K‖    | ‖A_M11‖/‖K‖ | ‖A_V13‖/‖K‖ |
    |---------|----------|-------------|-------------|
    | ETABS   | 6.78e+06 |  **0.4113** |   0.1606    |
    | Hekatan | 2.94e+06 |  **0.0055** | **0.9998**  |

**Nuestra matriz de Shell-Thick es 99.98 % cortante y 0.55 % flexión. La de
ETABS es 41 % flexión y 16 % cortante.** Con la misma `D`, las mismas `N` y la
misma constitutiva: su rigidez de flexión es **173 veces** la nuestra.

Eso explica de una vez todo lo que se había medido por separado:

* su modo alto `455.454364·D` escala como **t³** (flexión, 9 cifras iguales de
  t=0.20 a 0.02) y el nuestro `156.25·D` como **t** (cortante);
* el modo con `w=0` y curvatura nula nos cuesta `κGt/12 = 125/12·D = 10.416667·D`
  —el valor **exacto** de Mindlin— y a ellos 43.7 veces más;
* escalar `Ds` ×400 no movía el error del ensayo de flexibilidad: `‖K‖` la
  dominan los autovalores **grandes** (cortante) y la **flexibilidad** los
  **pequeños** (flexión). Son dos ventanas distintas de la misma matriz.

Y el **rango** lo corrobora: su `A11` tiene rango **8**, el nuestro **3**. Un
`∫B₁ᵀB₁` de una sola componente de curvatura tendría rango ≤ 4; el rango 8 solo
sale si hay **GDL internos condensados** metiendo un `Kaa⁻¹` en medio.

## Descartado, con medida

| hipótesis | cómo se descartó |
|---|---|
| es el cortante / el κ | `V13=V23` de 0.25 a 100 → el error va de 83.6 % a 84.2 % |
| es la constitutiva `D` | barrido de ν: su `D0(ν)` y su matriz son las clásicas |
| es la cuadratura | 3×3 vs 4×4 → 2.3e-16 |
| es Thin + cortante | la resta da autovalores **negativos** |
| es `K = A·t³ + B·t` (Reissner-Mindlin) | resuelto con 2 espesores, predice los otros 2 con 8 % el mejor y **176 %** el peor |
| **son las funciones de forma `N`** | **área unitaria: idénticas a 1e-16**, y momentos nodales **cero** en los 12 casos → su `w` es bilineal |
| es la atadura del cortante | MITC4 / completo 2×2 / reducido: el modo de cortante puro da `10.416667·D` en las tres |

## Lo que queda — y ya está identificado

**`B` de flexión: los GDL internos.** Y no por eliminación, sino porque el
manual de CSI lo dice (Analysis Reference Manual §10.1.1):

> «Out-of-plane displacements are **cubic**»

`w` cúbico ⇒ **4 GDL internos, uno por lado**.

### Los cuatro modos, aislados (`residuo4.py`)

`R = K_ETABS − K_DSE_FULL` sale **casi semidefinida positiva** (los únicos
autovalores negativos valen −0.015, el 0.003 % del máximo) y de **rango 4** —
justo los cuatro que anuncia el manual:

| λ | el modo, como movimiento | curvatura con B bilineal |
|---|---|---|
| **0.4999·D** | giros alternando `+,−,+,−` | **cero** |
| **0.4999·D** | el mismo, rotado 90° | **cero** |
| **83.6292·D** | reloj de arena de `w` + giros | cero salvo κxy |
| **454.5420·D** | giros `+,−,−,+` / `+,+,−,−` | **cero** |

Los cuatro tienen **curvatura cero** para la B bilineal: son modos que nuestro
elemento deja libres y ETABS penaliza. Y el modo dominante es **el mismo** contra
las cuatro variantes probadas (MITC4+α, MITC4 sin α, DKMQ, DKQ, DSE_FULL): a
todas les falta la misma pieza.

⚠️ Esos números son de **un** caso (cuadrado, ν=0, t=0.20). Para implementarlo
hace falta **la ley**, no los números: los mismos cuatro modos en las seis
geometrías medidas y con el barrido de ν.

### Y una lectura que hubo que corregir

El área unitaria se leyó primero como «sus `N` son bilineales, luego su `w` no
es cúbico». **Va demasiado lejos**: ese ensayo mide la `N` del **reparto de
carga**, no la del campo de desplazamientos. Un DKQ no interpola `w` en absoluto
y reparte igual. Ver
`../area-unitaria-funciones-de-forma/README.md`.

## Y lo que NO hay que perder de vista

El resultado **físico** del Shell-Thick ya cierra: **0.09 %** contra Roark &
Young en el Ejemplo 2-012 de SAP2000 —el banco que CSI usa para verificar su
propio Thick—, y el término de cortante transversal aislado al **0.20 %**
(`tests/casos/anular_shear_sap2000.mjs`). Son dos elementos distintos que
convergen a la misma solución. Que la matriz difiera no es lo mismo que estar
roto.
