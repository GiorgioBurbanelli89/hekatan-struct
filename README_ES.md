# Hekatan Struct -- Analisis Estructural Open Source

[![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-blue.svg)](LICENSE)
[![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-green)](https://giorgioburbanelli89.github.io/awatif-workspace/workspace/)

Plataforma web de ingenieria estructural con solver FEM en C++/Eigen compilado a WebAssembly. Funciona completamente en el navegador -- sin instalacion, sin servidor. Construido con Three.js para visualizacion 3D y VanJS para manejo reactivo de estado.

Basado en [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) de Mohamed Adil.

## Caracteristicas

- **Modelado estructural 3D** -- porticos, shells y edificios completos con visor interactivo Three.js
- **Analisis estatico** -- elastico lineal con vigas Timoshenko y elementos shell Q4 MITC4
- **Analisis modal** -- solver de eigenvalores (Eigen C++ SparseLU) para frecuencias naturales y modos
- **Elementos Shell Q4** -- membrana (modos incompatibles), placa Mindlin-Reissner (MITC4), GDL de drilling
- **Generadores parametricos** -- edificios, pergolas, cerchas, muros de contencion, taludes y 20+ modelos
- **Tutoriales interactivos FEM** -- 12 tutoriales paso a paso desde elementos barra hasta analisis modal
- **UI bilingue** -- soporte completo espanol/ingles en toda la interfaz
- **Importar/Exportar** -- ETABS (E2K), SAP2000 (S2K), IFC (Revit/ArchiCAD), OpenSees (Python/Tcl)
- **Panel de calculo** -- calculadora tipo MATLAB con math.js, renderizado KaTeX y matematica simbolica (nerdamer)
- **Analisis no lineal** -- pushover Newton-Raphson y pushover ciclico
- **Brazos rigidos y releases** -- condensacion estatica para conexiones realistas
- **Validado** -- resultados coinciden con ETABS 22.6 a 4+ decimales en porticos, 0.99-1.003 en shells

## Inicio Rapido

Visitar el despliegue en vivo: [giorgioburbanelli89.github.io/awatif-workspace/workspace/](https://giorgioburbanelli89.github.io/awatif-workspace/workspace/)

Para ejecutar localmente:

```bash
git clone https://github.com/GiorgioBurbanelli89/awatif-workspace.git
cd awatif-workspace && npm install
cd examples && npm install
npm run dev    # abre localhost:4600
```

## Capturas de Pantalla

<!-- TODO: Agregar capturas del visor 3D, panel de calculo y generadores parametricos -->

## Arquitectura

```
awatif-fem/     Solver FEM C++/Eigen compilado a WASM (334 KB)
                - deform.cpp (estatico), modal.cpp (eigenvalores)
                - Shell Q4, vigas Timoshenko, brazos rigidos
                - Eigen 3.4.0 SparseLU + GeneralizedEigenSolver

examples/       UI Three.js + modelos estructurales parametricos
                - getCad3d.ts (FEM Studio con 25+ generadores)
                - calc-editor/ (calculadora tipo MATLAB)
                - tutorials/ (12 tutoriales interactivos FEM)

awatif-ui/      Visor (Three.js), parametros (Tweakpane), toolbar (VanJS)
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
