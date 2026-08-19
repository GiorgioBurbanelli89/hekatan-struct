"""Los `.heks` CON CÁSCARAS, resueltos por los dos motores y comparados nudo a nudo.

Hasta el 2026-08-18 `heks.py` solo montaba barras: `shell`, `areaload`,
`shellmod` y `shellang` iban a un `continue` mudo. El mezanine salía con 116
nudos, flecha 0.000 mm y un cierre de báscula del 0.0000 % — perfecto, porque
`0 = 0`. Este test existe para que eso no pueda volver: si el lector deja de
montar algo, el modelo ya no tiene el mismo número de elementos que el del
motor y salta aquí.

El árbitro es el **WASM del C++** (`hekatan-fem/src/index` → `deformCpp`), que
es el motor del producto, por el MISMO camino que la app: `cliModeler` leyendo
el `.heks`. No se rearma nada en Python.

    pytest tests/test_heks_shells.py -v

Se salta solo si no hay Node, node_modules o `deform.wasm`.
"""
import json
import subprocess
import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from hekatan_struct.heks import leer_heks, resolver_heks  # noqa: E402

AQUI = Path(__file__).resolve().parent
RAIZ = AQUI.parents[1]                      # .../hekatan-struct
DATOS = RAIZ / "tests" / "datos"

# El guion que resuelve un .heks con el motor del producto y vuelca los nudos.
_GUION = r"""
import { writeFileSync } from "node:fs";
import { resolverHeks } from "file:///%s/tests/lib/heks.mjs";
const r = await resolverHeks(process.argv[2]);
const d = r.deformOutputs?.val ?? r.deformOutputs;
const defs = d.deformations instanceof Map
  ? [...d.deformations] : Object.entries(d.deformations ?? {});
writeFileSync(process.argv[3], JSON.stringify({
  nodes: r.nodes, nElements: r.elements.length,
  deformations: Object.fromEntries(defs),
}));
"""


def _motor_ts(ruta_heks: Path, destino: Path):
    """Resuelve el `.heks` con el motor TS/C++ (WASM) y devuelve el JSON."""
    if not (RAIZ / "node_modules" / "esbuild").exists():
        pytest.skip("faltan los node_modules de hekatan-struct")
    if not (RAIZ / "hekatan-fem/src/cpp/built/deform.wasm").exists():
        pytest.skip("falta deform.wasm")
    guion = destino.parent / "resolver.mjs"
    guion.write_text(_GUION % RAIZ.as_posix().replace(" ", "%20"), encoding="utf-8")
    r = subprocess.run(["node", str(guion), str(ruta_heks), str(destino)],
                       capture_output=True, text=True, cwd=str(RAIZ))
    if r.returncode != 0:
        pytest.skip("motor TS no disponible: %s" % (r.stderr or "")[:300])
    return json.loads(destino.read_text(encoding="utf-8"))


CASOS = [
    "galpon_lc",           # 116 cáscaras de zinc SIN flexión + 1140 barras
    "losas_deck",          # deck: shellmod direccional
    "losas_maciza_mem",
    "losas_maciza_thin",   # 1175 cáscaras
    "losas_maciza_thick",
    "losas_nervada_1d",
    "losas_waffle_2d",
    "mezanine_em_grav",
    "tcl_roundtrip",       # sin cáscaras: el galpón, de control
]


@pytest.mark.parametrize("caso", CASOS)
def test_heks_con_cascaras_clona_al_motor(caso, tmp_path):
    ruta = DATOS / f"{caso}.heks"
    if not ruta.exists():
        pytest.skip(f"no está {ruta}")
    ref = _motor_ts(ruta, tmp_path / "ref.json")

    m = leer_heks(str(ruta))
    assert len(m.nodes) == len(ref["nodes"]), "otro número de NUDOS que el motor"
    assert len(m.elements) == ref["nElements"], (
        "otro número de ELEMENTOS que el motor: %d vs %d — el lector se está "
        "dejando algo fuera" % (len(m.elements), ref["nElements"])
    )
    assert not m.errores, "el lector avisa de algo: %s" % m.errores

    res = resolver_heks(m)
    n = len(m.nodes)
    uz_ref = [ref["deformations"][str(i)][2] for i in range(n)]
    uz_py = [res.deformations[i][2] for i in range(n)]
    # Error como % del MÁXIMO, no del propio nudo: un nudo casi quieto da
    # porcentajes enormes sobre su propio valor y no significan nada.
    mx = max(abs(v) for v in uz_ref) or 1e-12
    err = [abs(a - b) / mx * 100 for a, b in zip(uz_py, uz_ref)]
    peor = max(err)
    print("\n  %-20s %5d nudos %5d elem   Uz %9.4f mm   peor %.2e %%"
          % (caso, n, len(m.elements), min(uz_ref) * 1000, peor))
    assert peor < 1e-6, "%s: peor nudo %.3e %% del máximo" % (caso, peor)


def test_carga_de_area_reparte_q_por_el_area_exacta(tmp_path):
    """`areaload` sobre un paño NO es q·A/4 en cada esquina si el paño no es
    un rectángulo: es ∫N_i·q·dA. Lo que sí tiene que salir exacto en cualquier
    caso es la SUMA, que es q por el área del polígono.
    """
    # Trapecio: base 4, techo 2, altura 3 -> A = (4+2)/2*3 = 9
    heks = tmp_path / "trapecio.heks"
    heks.write_text(
        "node 1 0 0 0\nnode 2 4 0 0\nnode 3 3 3 0\nnode 4 1 3 0\n"
        "shell 1 1 2 3 4 0.20 25e6\n"
        "areaload 1 -5\n"
        "support 1 fixed\nsupport 2 fixed\nsupport 3 fixed\nsupport 4 fixed\n",
        encoding="utf-8")
    m = leer_heks(str(heks))
    total = sum(v[2] for v in m.node_inputs.loads.values())
    assert abs(total - (-5 * 9.0)) < 1e-9, f"ΣFz = {total}, se esperaba -45"
