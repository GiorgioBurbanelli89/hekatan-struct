# Zapata Combinada 4×2×0.40m, 2 columnas — Hekatan vs SAFE

Validación cruzada `plateQ4Solve` (Hekatan) vs **SAFE 20** via API .NET.
Ver [`../README.md`](../README.md) para setup general (gotcha `SubModulus`).

## Caso de prueba

- Losa rectangular **4 × 2 × 0.40 m** sobre Winkler
- Concreto E = 24 855 MPa, ν = 0.20, γ = 24 kN/m³
- Suelo arena media: ks = 19 613 kN/m³
- **2 columnas** alineadas en x = 1.0 m y x = 3.0 m, ambas en y = 1.0 m (línea media)
- P = **30 tonf** = 294.20 kN por columna (total 588.4 kN)
- Malla 16 × 8 = **128 Q4** (dx = dy = 0.25 m, 153 nodos)

**Aplicación típica**: 2 columnas próximas al borde de propiedad o muro
medianero. La zapata rectangular única absorbe momentos de excentricidad
que zapatas aisladas independientes no podrían.

## Reproducir

```bash
cd hekatan-struct-lineal/benchmarks/safe/zapata-combinada
npx tsx ./cli_combinada.mjs --json=hekatan_combinada_result.json
PYTHONIOENCODING=utf-8 python -X utf8 safe_api_combinada.py --json=safe_combinada_result.json
```

## Resultados (corrida 2026-05-18)

| Posición                  | Hekatan w [mm] | SAFE w [mm] | Δ        |
|---------------------------|----------------|-------------|----------|
| esquina (0,0)             | −3.6138        | −3.6120     | −0.05%   |
| esquina (Lz,0)            | −3.6138        | −3.6120     | −0.05%   |
| esquina (0,Bz)            | −3.6138        | −3.6120     | −0.05%   |
| esquina (Lz,Bz)           | −3.6138        | −3.6120     | −0.05%   |
| **col_1 (1.0, 1.0)**      | **−3.8458**    | **−3.8490** | **+0.08%** |
| **col_2 (3.0, 1.0)**      | **−3.8458**    | **−3.8490** | **+0.08%** |
| centro (Lz/2, Bz/2)       | −3.8030        | −3.8030     | 0.00%    |
| voladizo izq (0, Bz/2)    | −3.6597        | −3.6600     | +0.01%   |
| voladizo der (Lz, Bz/2)   | −3.6597        | −3.6600     | +0.01%   |
| mid-borde sup (Lz/2, 0)   | −3.7535        | −3.7520     | −0.04%   |
| mid-borde inf (Lz/2, Bz)  | −3.7535        | −3.7520     | −0.04%   |

**Δ máxima: +0.08% bajo columnas.** Paridad excelente.

### Sanity check con teoría

- P_total = 2 × 294.20 = 588.4 kN
- w_avg Winkler = P_tot / (A·ks) = 588.4 / (8 × 19613) = **3.750 mm**
- Hekatan w_avg ≈ 3.74 mm (−0.3% del teórico) ✓
- SAFE w_avg ≈ 3.74 mm (−0.3% del teórico) ✓

### Verificaciones

- **Simetría perfecta**: 4 esquinas idénticas, 2 columnas idénticas,
  2 voladizos idénticos, 2 mid-bordes idénticos. Ambos solvers
  preservan la simetría 4-fold del problema.
- **Bowl shape**: w_centro = −3.80 mm < w_col = −3.85 mm. La losa
  asienta MÁS bajo las columnas (esperado), MENOS en el centro
  entre columnas (cuasi-rígida en X, blanda en Y).
- **Voladizos extremos** (x=0 y x=4): w = −3.66 mm — más asentamiento
  que las esquinas (−3.61) porque están más cerca del centro
  cargado pero menos que en las columnas.
- **Mxx_max = 46.4 kN·m/m**, **Myy_max = 46.8 kN·m/m** (casi iguales,
  geometría 2:1 amortigua diferencia direccional).

## Archivos

```
benchmarks/safe/zapata-combinada/
├── README.md
├── cli_combinada.mjs               # Hekatan WASM CLI (8 ms)
├── safe_api_combinada.py           # SAFE API (~12 s solver)
├── hekatan_combinada_result.json
├── safe_combinada_result.json
├── safe_combinada_run.log
└── Zapata_Combinada_via_API.fdb
```
