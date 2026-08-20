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
