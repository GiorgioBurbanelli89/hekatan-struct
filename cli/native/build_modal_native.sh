#!/usr/bin/env bash
# Compila el solver modal de Hekatan como BINARIO NATIVO, de los MISMOS fuentes
# que usa el WASM. Sirve para dos cosas:
#   1. comprobar que el WASM no mete nada de su cosecha (los dos tienen que dar
#      lo mismo hasta la ultima cifra), y
#   2. depurar con gdb/valgrind, que en WASM no se puede.
#
# Necesita gnu++17 (no c++17) por el M_PI de getTransformationMatrix.cpp.
#
#   bash cli/native/build_modal_native.sh
#   node cli/native/dump_modal_input.mjs modelo.heks entrada.bin 12 "0,0,1"
#   cli/native/modal_native.exe entrada.bin salida.json
set -e
cd "$(dirname "$0")/../.."
FEM=hekatan-fem/src/cpp
# -static*: el g++ de Octave enlaza libstdc++/libgcc dinamico y el .exe sale con
# codigo 127 ("no se encuentra") fuera de su carpeta bin. Con esto es portable.
# (`-static` a secas pide -lpthread y este MinGW no lo trae; con los dos
#  -static-lib* basta para que no dependa de las DLL del compilador.)
g++ -O2 -std=gnu++17 -static-libgcc -static-libstdc++ \
  -I "$FEM/eigen" -I "$FEM" \
  cli/native/main_modal_native.cpp \
  "$FEM/modal.cpp" \
  "$FEM/utils/feHelpers.cpp" \
  "$FEM/utils/getGlobalStiffnessMatrix.cpp" \
  "$FEM/utils/getLocalStiffnessMatrix.cpp" \
  "$FEM/utils/getTransformationMatrix.cpp" \
  "$FEM/utils/shellQ4.cpp" \
  "$FEM/utils/shellQ4_DKMQ.cpp" \
  "$FEM/utils/shellThin.cpp" \
  "$FEM/utils/drillingHughesBrezzi.cpp" \
  "$FEM/utils/getLocalMassMatrix.cpp" \
  "$FEM/utils/getGlobalMassMatrix.cpp" \
  -o cli/native/modal_native.exe
echo "listo → cli/native/modal_native.exe"
