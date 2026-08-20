# banco-elemento — el laboratorio donde se itera antes de tocar el C++

**Para qué es.** Probar una formulación de elemento cuesta **26.5 s** en C++
(compilar Eigen) y **0.42 s** en Python. Sesenta veces. El 19-ago-2026 se
probaron unas quince variantes: en C++ habrían sido siete minutos de espera
pura.

Y el cuello de botella no es *calcular* —estas matrices son 12×12, se resuelven
en microsegundos— sino **escribir la variante y mirar el resultado**. Por eso
esto es Python: `numpy.linalg.eigh`, `lstsq` y `solve` en una línea es
exactamente lo que hizo falta para aislar el drilling de ETABS.

El flujo es:

```
banco-elemento/  (aquí)  →  se valida  →  hekatan-struct-py  →  .cpp  →  WASM
   iterar rápido             la matriz      el motor           producto
```

## Por qué está separado de `hekatan-struct-py/`

Dos razones, y las dos son de convivencia:

1. **El paquete es el motor del producto**; esto es un banco de pruebas. Aquí
   entran variantes que probablemente **no valgan** — y muchas no valieron
   (integrar la penalización, los Δθ relativos de Wilson). Eso no debe vivir en
   `src/`.
2. **Hay otra sesión trabajando en `hekatan-struct-py/`.** Si los dos tocamos
   `src/hekatan_struct/elements/`, chocamos. Aquí se **importa** el paquete, no
   se modifica.

## Qué hay

| archivo | qué hace |
|---|---|
| `medir.py` | la biblioteca: cargar las matrices de ETABS, comparar por bloques, sacar rango y autovectores, ajustar coeficientes |
| `probar.py` | el CLI: mide una variante contra las 10 matrices de ETABS de un tirón |

## Uso

```bash
cd hekatan-struct/banco-elemento

# la formulación de hoy contra las 10 matrices medidas de ETABS
python probar.py --proyeccion

# comparar varias de un golpe
python probar.py --comparar

# de qué está hecho lo que sobra (rango, autovectores)
python probar.py --proyeccion --residuo

# y que el C++ diga lo mismo (necesita kelem_native.exe compilado)
python probar.py --proyeccion --cpp
```

## De dónde salen las referencias

Las **matrices 12×12 de ETABS** están en
`galpon-bodega-electoral/memb12.json` (geometría y material) y
`galpon-bodega-electoral/K12_*.npy` (las matrices). Se reconstruyeron por
**flexibilidad**, sin tocar el binario: se fija todo menos 9 grados de libertad,
se mete una carga unidad en cada uno y se leen los desplazamientos — eso es la
flexibilidad, y su inversa es la rigidez. Las 3 filas que faltan salen de que la
rigidez por un movimiento de sólido rígido da cero.

Son 10 geometrías: cuadrado con ν = 0, 0.1, 0.2, 0.3, 0.45, el mismo en
Shell-Thin, dos rectángulos, un paralelogramo y un trapecio.

## La regla que hace útil a este banco

**Comparar MATRICES, no desplazamientos.** Un desplazamiento es la matriz ya
mezclada con apoyos y cargas: si sale mal, no dice **dónde**. La matriz sí — y es
lo que permitió ver que `K_uu` coincidía al 0.00 % mientras `K_uθ` se iba al
328 %, que fue el diagnóstico que desatascó todo.

---

## ⚠️ HALLAZGO ABIERTO (19-ago-2026, primer uso del banco)

**El C++ y el Python NO dan la misma membrana en un cuadrilátero sin lados
paralelos.** Lo destapó `python probar.py --proyeccion --cpp` a la primera.

Geometría que falla, la del caso `trapecio` de `memb12.json`:

```
[(0, 0), (1.0, 0), (0.8, 0.9), (0.15, 1.0)]     ← NINGÚN par de lados paralelo
```

| | C++ vs Python |
|---|---|
| las otras 9 geometrías de `memb12` | **1e-13** ✔ |
| ésta | **5.4e-02** ✘ |

### Lo que ya está descartado, medido

| hipótesis | medida |
|---|---|
| es de las formulaciones nuevas | **no**: falla igual en los tipos 3, 7, 8 y 9 |
| es la burbuja | **no**: 5.245 % sin burbuja (tipos 7 y 9) contra 5.357 % con ella |
| es el drilling | **no**: `K_θθ` coincide al **0.000 %** |
| es el jacobiano degenerado | **no**: los 9 puntos con el mismo signo, `min/max = 0.65` |
| es `jacobian2D` del C++ | **no**: línea a línea es el mismo que el de Python |
| es la tríada local del shell 3D | **no**: con `z = 0`, `localX = n0→n1 = (1,0,0)` y `localZ = (0,0,1)`, o sea que las coordenadas locales son las globales |

**Está en la membrana pura**: el peor término es `K[0,6]` — nudo 0 con nudo 2,
los dos en `u`. Razón C++/Python = **0.9413**.

### Por qué no lo cazaba nada
El test `test_kelem_cpp_vs_python.py` usa **otro** trapecio,
`[(0,0),(2,0),(1.5,1),(0.25,1)]`, que **sí tiene** los lados superior e inferior
paralelos — y ése cuadra a `1.6e-13`. Las cuatro geometrías del test son
cuadrado, rectángulo, paralelogramo y ese trapecio: **ninguna es un
cuadrilátero general**.

### Lo primero que hay que hacer
Meter esta geometría en `GEOMETRIAS` de `test_kelem_cpp_vs_python.py`, para que
el fallo quede fijado antes de tocarlo. Un bug sin test se arregla dos veces.

### Por qué importa
Los `1.42 %` contra ETABS están medidos **en Python**. Si el C++ difiere de
Python en cuadriláteros generales, la cifra del **producto** no es esa — y las
mallas reales están llenas de cuadriláteros generales.
