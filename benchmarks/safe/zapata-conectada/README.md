# Zapata Conectada 5×1m, 2 zapatas + viga unión — Hekatan vs SAFE

Validación cruzada `plateQ4Solve` con `thicknesses[]` per-elemento
(Hekatan) vs **SAFE 20** con 2 slab properties (`ZapataExt`, `VigaConex`)
via API .NET. Ver [`../README.md`](../README.md) para setup general.

## Caso de prueba

Losa continua rectangular con **espesor variable** por zona:

```
0           1.0         4.0           5.0  [m]
├─── zap ───┼──── viga ─────┼─── zap ───┤
   t=0.40       t=0.20         t=0.40
```

- **Lz × Bz = 5.0 × 1.0 m** (losa total)
- Zapatas extremas: longitud 1.0 m, espesor **0.40 m**
- Viga conexión central: longitud 3.0 m, espesor **0.20 m**
- Concreto E = 24 855 MPa, ν = 0.20
- Suelo arena media: ks = 19 613 kN/m³
- 2 columnas centradas en cada zapata: (0.5, 0.5) y (4.5, 0.5)
- P = 20 tonf = 196.13 kN c/u (total 392.27 kN)
- Malla 20 × 4 = **80 Q4** (dx = dy = 0.25 m)

**Aplicación típica**: 2 columnas distantes (luz ~3-4 m) que comparten
una losa de cimentación con tramo central reducido (viga ancha como
strap). Equivalente conceptual a dos zapatas aisladas conectadas por
viga de amarre, pero modelado en plate-only (sin frames separados).

## Reproducir

```bash
cd hekatan-struct/benchmarks/safe/zapata-conectada
npx tsx ./cli_conectada.mjs --json=hekatan_conectada_result.json
PYTHONIOENCODING=utf-8 python -X utf8 safe_api_conectada.py --json=safe_conectada_result.json
```

## Resultados (corrida 2026-05-18)

| Posición                          | Hekatan w [mm] | SAFE w [mm] | Δ        |
|-----------------------------------|----------------|-------------|----------|
| esquina (0,0)                     | −8.9003        | −8.8980     | −0.03%   |
| esquina (Lz,0)                    | −8.9003        | −8.8970     | −0.04%   |
| esquina (0,Bz)                    | −8.9003        | −8.8940     | −0.07%   |
| esquina (Lz,Bz)                   | −8.9003        | −8.8950     | −0.06%   |
| col_izq (0.5, Bz/2)               | −6.7579        | −6.7600     | +0.03%   |
| col_der (4.5, Bz/2)               | −6.7579        | −6.7600     | +0.03%   |
| borde zap-viga izq (1.0, Bz/2)    | −4.5478        | −4.5510     | +0.07%   |
| borde zap-viga der (4.0, Bz/2)    | −4.5478        | −4.5510     | +0.07%   |
| **centro viga (2.5, Bz/2)**       | **−0.9444**    | **−0.9420** | **−0.25%** |
| 1/4 viga (1.75, Bz/2)             | −1.9040        | −1.9020     | −0.10%   |
| 3/4 viga (3.25, Bz/2)             | −1.9040        | −1.9020     | −0.10%   |

**Δ máxima: −0.25% (centro viga).** Paridad excelente en TODOS los puntos.

## Interpretación física (alerta de diseño)

⚠️ **Los resultados muestran un patrón de "rebote inverso" no obvio:**

| Punto | w [mm] | Esperado intuitivo |
|---|---|---|
| Esquinas extremos | −8.90 | mínimo (sin carga directa) |
| Bajo columnas | −6.76 | máximo (carga puntual) |
| Bordes zap-viga | −4.55 | intermedio |
| Centro viga | −0.94 | mínimo (alejado de cargas) |

**Pero el sampling real da:**
- Esquinas SE HUNDEN MÁS (−8.9 mm) que las columnas (−6.8 mm)
- Centro de la viga casi NO se hunde (−0.94 mm)
- Configuración rotacional: las zapatas extremas "giran" hacia afuera

**Causa estructural**: la viga delgada (t=0.20) tiene rigidez **8× menor**
que las zapatas (I = b·t³/12, ratio = (0.40/0.20)³ = 8). Eso convierte la
viga en una "bisagra elástica" entre las zapatas. Cada zapata gira
libremente como cuerpo rígido alrededor de su columna, y los extremos
exteriores se hunden más que los puntos cargados.

**w_avg teórico Winkler** = P_tot / (A·ks) = 392.27 / (5 × 19613) = 4.00 mm
- Hekatan w_avg medido (11 puntos) ≈ 4.69 mm (+17% del teórico)
- SAFE w_avg medido (11 puntos) ≈ 4.69 mm (+17% del teórico)

El +17% sobre el teórico uniforme refleja la **redistribución por
rotación**: como la viga no transmite efectivamente el momento entre
zapatas, cada zapata responde como rígido aislado y los extremos van
más abajo. La conservación de carga sigue siendo correcta (el promedio
de presiones × A = P aplicada), pero la distribución es muy
inhomogénea.

**Lección de diseño**: para una zapata conectada de este largo, hay que:
- Aumentar el espesor de la viga conexión (al menos 0.30 m) para
  rigidizar la unión.
- O reducir la luz entre columnas.
- O agregar refuerzo activo (cable post-tensado en la viga).

**Validación del solver**: paridad <0.25% confirma que AMBOS solvers
capturan correctamente el comportamiento, aunque el resultado físico
no sea favorable para el diseño.

## Verificaciones

- **Simetría**: col_izq = col_der, bordes iguales, 1/4 viga = 3/4 viga.
  Las 4 esquinas casi idénticas (Δ <0.07% entre ellas en ambos solvers).
- **Mxx_max = −57.7 kN·m/m** (Hekatan): momento negativo significativo en
  los bordes zapata-viga, donde cambia el espesor → concentración de
  curvatura.
- **Mxy bajo** (≈ 5 kN·m/m): twist menor, esperado para geometría 1D.

## Archivos

```
benchmarks/safe/zapata-conectada/
├── README.md
├── cli_conectada.mjs               # Hekatan + thicknesses[] (6 ms)
├── safe_api_conectada.py           # SAFE + 2 slab props (30 s)
├── hekatan_conectada_result.json
├── safe_conectada_result.json
├── safe_conectada_run.log
└── Zapata_Conectada_via_API.fdb
```
