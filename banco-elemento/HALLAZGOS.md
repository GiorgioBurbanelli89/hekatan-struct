# Hallazgos del banco

## 1 · Integración selectiva del término volumétrico (19-ago-2026) — **confirmada**

### De dónde salió
Con la proyección del drilling puesta, quedaba un **1.42 %** contra la matriz de
ETABS. Ese residuo tiene **rango 3** y sus modos son **reloj de arena** en `u`,
en `v` y en `θ`. Ajustándolos bajaba a 0.52 %, y sus coeficientes en unidades de
`G·t` decían **qué** eran:

| ν | 0.0 | 0.10 | 0.20 | 0.30 | 0.45 |
|---|---|---|---|---|---|
| `c_uu = c_vv` | −0.0046 | −0.0064 | −0.0089 | −0.0124 | −0.0208 |

**Negativos y creciendo con ν.** Una estabilización añadida sería positiva y
constante. Que el coeficiente **siga a ν** —justo lo que multiplica al término
volumétrico— apunta a que ETABS integra ese término con **menos puntos**.

### Cómo se probó sin tocar el elemento
`K` es **lineal en `D`**, y la constitutiva de tensión plana se separa:

$$\mathbf D=\lambda^{*}\mathbf A+2\mu\,\mathbf B,\qquad
\lambda^{*}=\frac{E\nu}{1-\nu^{2}},\qquad 2\mu=\frac{E}{1+\nu}$$

Con `ν = 0` desaparece `λ*`, así que **`D(E/(1+ν), 0)` es exactamente la parte
desviadora**. De ahí:

```
K_SRI = K(E/(1+ν), 0)|completa  +  [ K(E, ν)|reducida − K(E/(1+ν), 0)|reducida ]
        └── desviador entero ──┘     └────── volumétrico reducido ──────┘
```

Todo con llamadas normales a `k_membrana_itw`, sin tocar el paquete.

### Lo medido, con el volumétrico a 2×2

| | completa | **vol. a 2×2** |
|---|---|---|
| matriz 12×12 vs ETABS (media) | 1.417 % | **0.878 %** |
| ν = 0.45 (el peor) | 2.081 % | **0.639 %** |
| ν = 0.0 | 1.065 % | 1.065 % *(sin cambio — correcto: sin ν no hay término volumétrico)* |
| patch test | 1.500000 / 0.600000 | **1.500000 / 0.600000** |
| cantilever | −0.366 % | **−0.317 %** |
| Cook | −0.288 % | **−0.270 %** |
| modos de energía nula | 3 | **3** |

**Mejora en todo y no rompe nada.** Que el caso `ν = 0` no se mueva es la
comprobación de que la descomposición está bien hecha: si cambiara, el
`λ*` estaría mal separado.

### Lo que falta para llevarlo al producto
1. Implementarlo **dentro** del elemento (separar `D` en el bucle, no por
   combinación de tres llamadas) — en `hekatan-struct-py` primero.
2. Probar también el volumétrico a **1 punto**, que es la SRI clásica.
3. Medirlo en los bancos del producto (drilling-dof, mezanine, escalón B).
4. Portarlo al C++ como un `drillingTypes` nuevo y recompilar el WASM.

### Variantes probadas y DESCARTADAS, con su medida

**Volumétrico a 1 punto (la SRI clásica).** Mucho peor: **22.9 %** contra ETABS
y **+23.7 %** en el cantilever. El elemento se queda demasiado blando. El punto
óptimo es **2×2**, no menos.

| | completa | vol. 2×2 | vol. 1 punto |
|---|---|---|---|
| matriz vs ETABS | 1.417 % | **0.878 %** | 22.875 % |
| cantilever | −0.366 % | −0.317 % | **+23.703 %** |

---

## 2 · El reloj de arena residual — **descartado, y por qué importa**

Tras la SRI queda un **0.878 %** que sigue siendo **rango 3** y sigue teniendo
forma de reloj de arena. Pero ahora **baja al subir ν** (1.065 % en ν=0 →
0.639 % en ν=0.45), al revés que antes: la SRI se llevó justo la parte que crecía
con ν, que es la comprobación de que atacaba lo que decía atacar.

Y sus coeficientes ya **no dependen del material**: los cinco cuadrados con ν de
0 a 0.45 dan exactamente `c_uu = c_vv = −0.00463` y `c_θθ = −0.00551` (en
unidades de `G·t·A`). Dependen solo de la geometría.

**Y generaliza**: aplicando los coeficientes ajustados **en el cuadrado** a las
diez geometrías, el error baja de **0.878 % a 0.519 %** en todas. Eso descarta el
sobreajuste… pero no lo hace correcto:

| | patch test | modos nulos |
|---|---|---|
| hoy (tipo 8) | 1.500000 / 0.600000 | 3 |
| + SRI | **1.500000 / 0.600000** | 3 |
| + SRI + reloj de arena | **1.625429 / 0.650172** ✘ | **2** ✘ |

**Rompe el patch test** y, en una geometría, deja el elemento con **dos** modos
de energía nula en vez de tres — o sea que pierde un movimiento de sólido rígido.
Los coeficientes son negativos y le quitan rigidez hasta volver la matriz
indefinida.

**La lección**: bajar el error contra una referencia no basta. Un término que
mejora el ajuste y rompe una propiedad exacta del elemento **está mal**, por
mucho que generalice.

---

## 3 · ¿Estamos en el suelo de la medida? — **no**

Antes de seguir persiguiendo el 0.878 %, conviene saber si la referencia da para
tanto. La matriz de ETABS se reconstruyó **invirtiendo una 9×9 de
desplazamientos**, y eso amplifica errores. Dos propiedades son exactas en
cualquier `K` correcta, así que lo que se desvíen **mide el ruido**:

| | las 10 geometrías |
|---|---|
| asimetría `‖K − Kᵀ‖/‖K‖` | **0.00e+00** |
| sólido rígido `‖K·R‖/‖K‖` | **~6e-16** |

**Cero ruido.** La referencia es exacta a precisión de máquina, así que el
0.878 % que queda **es real** y hay margen para seguir. Lo que no vale es el
reloj de arena.

---

## Recorrido, en una tabla

| paso | contra la matriz de ETABS |
|---|---|
| ITW 1990 (de donde se partía) | **15.97 %** |
| + proyección del drilling (FEAP) | **1.42 %** |
| + integración selectiva del volumétrico | **0.878 %** |
| ~~+ reloj de arena~~ | ~~0.519 %~~ — rompe el patch test |
