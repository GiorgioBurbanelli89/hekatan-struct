# Hekatan Struct Lineal -- Analisis Estructural Open Source

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-blue.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-green)](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/)

Plataforma web de ingenieria estructural con solver FEM en C++/Eigen compilado a WebAssembly. Funciona completamente en el navegador -- sin instalacion, sin servidor. Construido con Three.js para visualizacion 3D y VanJS para manejo reactivo de estado.

Basado en [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) de Mohamed Adil.

## Caracteristicas

- **Modelado estructural 3D** -- porticos, shells y edificios completos con visor interactivo Three.js
- **Analisis estatico** -- elastico lineal con vigas Timoshenko (ejes locales de CSI, `ang`, `as`, releases, brazos rigidos) y cascaras Q4
- **Analisis modal** -- solver de eigenvalores (Eigen C++ SparseLU) para frecuencias naturales y modos
- **Elementos Shell Q4** -- los de CSI: membrana ITW + burbuja con drilling (1e-13 % contra la celda 12x12 de ETABS), Shell-Thin = DKQ de Batoz-Tahar (0.000000 %), Shell-Thick extraido de `CsiGo2.dll` (1e-12 % en ~140 celdas medidas)
- **Deck / pisos membrana** -- `deck etabs [oneway]`: el pano se parte en los nudos de sus bordes y su peso/carga de area va a las vigas de borde por area tributaria, como ETABS (0.0000 %); sin la directiva se comporta como SAP2000 (1e-13 %)
- **Generadores parametricos** -- edificios, pergolas, cerchas, muros de contencion, taludes y 20+ modelos
- **Tutoriales interactivos FEM** -- 12 tutoriales paso a paso desde elementos barra hasta analisis modal
- **UI bilingue** -- soporte completo espanol/ingles en toda la interfaz
- **Importar/Exportar** -- ETABS (E2K), SAP2000 (S2K), SAFE (F2K), IFC (Revit/ArchiCAD), OpenSees (Python/Tcl)
- **Import auto-load** -- al importar E2K/S2K en cualquier ejemplo se navega a `?t=new-blank` con el modelo cargado como geometria CAD editable
- **Benchmarks W##** -- naming unificado (W1=barra axial, W2=viga, W3=armadura, W4=portico 2D, W5=torre 3D, W6=placa) que matchea entre hekatan-struct-lineal, ETABS, SAP2000, SAFE, Octave, MATLAB y Calcpad-Lab
- **Panel de calculo** -- calculadora tipo MATLAB con math.js, renderizado KaTeX y matematica simbolica (nerdamer)
- **Analisis no lineal** -- pushover Newton-Raphson y pushover ciclico
- **Brazos rigidos y releases** -- condensacion estatica para conexiones realistas
- **Validado** -- contra ETABS 22, SAP2000 24 y SAFE 20 con el MISMO modelo y la MISMA malla nudo a nudo: galpon de 609 nudos con deck 0.001 %, mezanines 1e-13 % (SAP) / 0.0000 % (ETABS), cimentaciones 0.01-0.29 %; suite `npm test` 499/499 y `pytest` 208

## ETABS · SAP2000 · SAFE · Hekatan Struct Lineal, frente a frente

Mismo modelo, misma malla, mismas cargas. Lo que cada programa hace por su cuenta y lo que hace Hekatan, con que interruptor. Todo medido (4 y 5-sep-2026, `tests/casos/deck_edge_constraint_vs_csi.mjs`).

| | **ETABS 22** | **SAP2000 24** | **SAFE 20** | **Hekatan Struct Lineal** |
|---|---|---|---|---|
| Barra | Timoshenko, ejes CSI, `ang`, releases; brazos rigidos **automaticos** (t3/t2 de la seccion) que ademas no pesa | igual, brazos **apagados** por defecto | vigas como barras | mismo elemento; `endoffset` explicito; al arbitrar se anulan los automaticos de ETABS |
| Shell-Thin | DKQ | DKQ | DKQ | DKQ, **0.000000 %** en los 9 modos |
| Shell-Thick | la formulacion propia de CSI (DSE de Wilson / PQ3, 8 puntos ITW) | igual | igual | **extraida de `CsiGo2.dll`**, 1e-12 % en ~140 celdas |
| Membrana / drilling | ITW + burbuja + reloj, γ = 0.4 μ | igual | -- | igual (`drillingTypes = 12`), 1e-13 % |
| Conexion del pano de piso | a **todo nudo que toca**: lo corta en la viga que cruza (cookie-cut) y cose los nudos que caen en un borde (edge constraint, encendido por defecto) | **solo sus 4 nudos** | su propio mallador | 4 nudos por defecto (= SAP2000); `deck etabs` lo parte en los nudos de borde (= ETABS) |
| Peso propio / carga de area de la membrana | a las **vigas de borde por area tributaria** (bisectrices), linea trapezoidal | a las **4 esquinas** (consistente) | a su malla de losa | 4 esquinas por defecto (= SAP2000, 1e-13 %); `deck etabs` tributario con Hermite (= ETABS, 0.0000 %) |
| Reparto en un sentido | si: `ONEWAYLOADDIST` o seccion `Deck` (vano = eje local 1) | **no** | franjas | `deck etabs oneway` (vano = eje local 1 girado `shellang`), 0.0010 % vs ETABS por e2k |
| Automallado de pisos | membranas horizontales: cookie-cut; inclinadas: nada; cascaras: 1.25 m | ninguno | el suyo | ninguno; `meshcross` parte las barras que se cruzan como ETABS |
| Union viga-muro | penalizacion de ETABS | plana | -- | `etabsjoint 1` (defecto) / `0` = SAP2000 |
| Diafragma rigido | maestro virtual, D1 por planta | constraint | -- | `diaph`, maestro virtual en el centro de masa |
| Winkler | nodal o de area | nodal | de **area** por defecto | nodal (`spring`); area vs nodal = 1.92 % en una zapata, es otro modelo, no un error |
| Ficheros | `.e2k`, OAPI | `.s2k`, OAPI | `.f2k`, OAPI | los tres |
| **Cierre medido** | barras 0.000 %; deck 0.0000 % con `deck etabs`; masa 0.000 % | barras + deck **0.001 %** (609 nudos); mezanines **1e-13 %** | cimentaciones 0.01-0.29 % (w_max); zapata con muelle nodal 1e-9 % | -- |

Regla de la casa: **primero se compara con SAP2000** (solo conecta lo que se malla: mide el solver) y **despues con ETABS**, anadiendo a Hekatan lo que ETABS hace como un interruptor con nombre que se puede apagar (`deck etabs`, `etabsjoint`, `meshcross`). Nunca se tuerce el motor hacia ETABS en silencio.

## Inicio Rapido

Visitar el despliegue en vivo: [giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/](https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/)

Para ejecutar localmente:

```bash
git clone https://github.com/GiorgioBurbanelli89/hekatan-struct-lineal.git
cd hekatan-struct-lineal && npm install
cd examples && npm install
npm run dev    # abre localhost:4600
```

## Capturas de Pantalla

<!-- TODO: Agregar capturas del visor 3D, panel de calculo y generadores parametricos -->

## Arquitectura

```
hekatan-fem/     Solver FEM C++/Eigen compilado a WASM (334 KB)
                - deform.cpp (estatico), modal.cpp (eigenvalores)
                - Shell Q4, vigas Timoshenko, brazos rigidos
                - Eigen 3.4.0 SparseLU + GeneralizedEigenSolver

examples/       UI Three.js + modelos estructurales parametricos
                - getCad3d.ts (FEM Studio con 25+ generadores)
                - calc-editor/ (calculadora tipo MATLAB)
                - tutorials/ (12 tutoriales interactivos FEM)

hekatan-ui/      Visor (Three.js), parametros (Tweakpane), toolbar (VanJS)
```

## Stack Tecnologico

| Tecnologia | Proposito |
|-----------|---------|
| C++ / Eigen 3.4 | Solver FEM (SparseLU, eigenvalores) |
| Emscripten | Compilador C++ a WebAssembly |
| Three.js | Renderizado 3D (WebGL) |
| VanJS | Manejo de estado reactivo (1.5 KB) |
| math.js + KaTeX | Calculadora y renderizado de ecuaciones |
| web-ifc | Parser de geometria IFC (WASM) |
| Vite | Herramienta de build y servidor de desarrollo |

## Creditos

- [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) de Mohamed Adil -- framework original
- [Eigen 3.4](https://eigen.tuxfamily.org/) -- libreria de algebra lineal C++
- [web-ifc](https://github.com/ThatOpen/engine_web-ifc) -- parser IFC de That Open Company

## Autor

**Jorge Burbano** -- Ingeniero Estructural, Ecuador

## Licencia

Licencia MIT. Ver [LICENSE](LICENSE) para detalles.
