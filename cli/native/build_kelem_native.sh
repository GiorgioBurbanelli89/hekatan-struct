#!/usr/bin/env bash
# Compila `kelem_native`: la K de UN elemento de cascara, en C++ nativo.
#
# De los MISMOS fuentes que el WASM, asi que sirve para tres cosas:
#   1. iterar una formulacion viendo la MATRIZ y no un desplazamiento;
#   2. comprobar que emscripten no mete nada (los dos deben dar lo mismo);
#   3. depurar con gdb, que en WASM no se puede.
#
# gnu++17 (no c++17) por el M_PI de getTransformationMatrix.cpp.
# -static-lib*: el g++ de Octave enlaza libstdc++/libgcc dinamico y el .exe
# sale con codigo 127 fuera de su carpeta bin.
#
#   bash cli/native/build_kelem_native.sh
#   cli/native/kelem_native.exe 0 0 0  1 0 0  1 1 0  0 1 0  2.2e7 0.2 0.20
set -e
cd "$(dirname "$0")/../.."
FEM=hekatan-fem/src/cpp
g++ -O2 -std=gnu++17 -static-libgcc -static-libstdc++ \
  -I "$FEM/eigen" -I "$FEM" \
  cli/native/kelem_native.cpp \
  "$FEM/utils/shellQ4.cpp" \
  "$FEM/utils/shellThin.cpp" \
  "$FEM/utils/drillingHughesBrezzi.cpp" \
  -o cli/native/kelem_native.exe
echo "compilado: cli/native/kelem_native.exe"
