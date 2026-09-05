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

| qué | **ETABS 22** — qué hace · **Δ vs Hekatan** | **SAP2000 24** — qué hace · **Δ vs Hekatan** | **SAFE 20** — qué hace · **Δ vs Hekatan** | **Hekatan Struct Lineal** — interruptor |
|---|---|---|---|---|
| Barras (Timoshenko, ejes CSI, `ang`, releases) | brazos rígidos automáticos que no pesa → se anulan · **0.000 %** (galpón, 609 nudos, solo barras) · modal Paz 6.3 **0.00 %** | brazos apagados · **0.001 %** (galpón + deck) · mezanines **1e-13 %** | vigas como barras · zapata corrida shell + barras **0.01 %** | mismo elemento; `endoffset` explícito |
| Shell-Thin (DKQ) | **0.000000 %** en los 9 modos de la celda · placa 8×8 **0.000 %** · 6 tipos de losa misma malla **< 3e-7 %** | zapata Shell-Thin **1e-9 %** (10 cifras) | zapata con muelle nodal **1e-9 %** · 5 benchmarks de cimentación **0.01–0.29 %** | `shelltype thin` |
| Shell-Thick (formulación de CSI) | K de ~140 celdas medidas **1e-12 %** · placa 8×8 = ETABS a **7 cifras** | misma K, **1e-12 %** · mezanine losa maciza misma malla **< 1e-6 %** | — | `shelltype thick` (extraído de `CsiGo2.dll`) |
| Membrana / drilling (ITW + burbuja + reloj) | celda 12×12, 9 geometrías **1e-13 %** | drilling-dof (2 muros + viga de acople) **2.5e-12 %** | — | `drillingTypes = 12` (defecto) |
| Conexión del paño de piso | a **todo nudo que toca** (cookie-cut + edge constraint): vs Hekatan por defecto **4.5 %** (galpón) · vs `deck etabs` **0.0000 %** (mezanines) / **2e-5 %** (galpón partido) | **solo sus 4 nudos**: vs Hekatan por defecto **0.001 %** (galpón) · **1e-13 %** (mezanines) | su mallador | defecto = SAP2000; `deck etabs` = ETABS |
| Peso propio / carga de área de la membrana | a las **vigas de borde por área tributaria**: vs Hekatan a 4 esquinas **0.55–75 %** · vs `deck etabs` Dead **0.0000 %**, carga de área **2.5e-5 %** | a las **4 esquinas**: Dead **0.0000 %** · carga de área **9e-13 %** | a su malla de losa | defecto = SAP2000; `deck etabs` = ETABS |
| Reparto en un sentido | `ONEWAYLOADDIST` / sección `Deck`: vs `deck etabs oneway` **0.0010 %** (vs bidireccional 0.22 %) · sección `Deck` **0.11 %** | **no existe** | franjas | `deck etabs oneway` |
| Automallado de pisos | membranas horizontales cookie-cut, cáscaras 1.25 m, inclinadas nada: apagándolo (`OBJMESHTYPE NONE`) quedan **4.4 %** — era el edge constraint, no la malla | ninguno | el suyo | `meshcross` parte los cruces como ETABS |
| Unión viga-muro | penalización de ETABS (3×3 medida): plantilla dual con muros, modos 1-3 **0.00–0.01 %** | plana: `etabsjoint 0` | — | `etabsjoint 1` (defecto) / `0` |
| Diafragma rígido | D1 por planta: 8 plantillas, masa **0.000 %**, modos 1-3 **0.00–0.01 %** | constraint: mezanine **0.0000 %** (cuando el .s2k lo lleva) | — | `diaph`, maestro virtual |
| Winkler | nodal o de área | nodal: zapata **1e-9 %** | de **área** por defecto: **1.92 %** vs nodal en una zapata (otro modelo) · nodal **1e-9 %** | `spring` nodal |
| Masa ensamblada | `AssembledJointMass` **0.000 %** (609 nudos, por objeto) | — | — | `assembled_joint_mass()` |
| Ficheros | `.e2k` ida y vuelta **0.000 %** | `.s2k` ida y vuelta **0.000 %** | `.f2k` ida y vuelta **6.8 %** ⏳ (muelle de área) | los tres + driver OAPI |

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
