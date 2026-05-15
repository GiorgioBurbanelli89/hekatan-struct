#!/usr/bin/env bash
# Wrapper que invoca el CLI nativo de Hekatan Struct desde validacion/
# Salida: tabla legible por defecto, o JSON con --json
#
# Uso:
#   ./run.sh                    # todos los casos, output legible
#   ./run.sh plate_thin         # un caso, output legible
#   ./run.sh --json > out.json  # todos los casos, output JSON

set -e
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
HEKATAN_ROOT="$( cd "$SCRIPT_DIR/../.." && pwd )"
CLI="$HEKATAN_ROOT/cli_fem_benchmark.mjs"

if [ ! -f "$CLI" ]; then
    echo "Error: no se encontro $CLI"
    echo "Verifica que cli_fem_benchmark.mjs este en la raiz de hekatan-struct/"
    exit 1
fi

node "$CLI" "$@"
