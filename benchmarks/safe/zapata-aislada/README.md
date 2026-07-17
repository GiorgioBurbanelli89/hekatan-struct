# Zapata Aislada — Hekatan vs SAFE (validación PARIDAD <0.03%)

Validación cruzada del solver `plateQ4Solve` (Hekatan, Mindlin Q4 + springs
Winkler) contra **SAFE 20** vía API .NET (`SAFEv1.dll`). Ver
[`README.md`](README.md) para detalles del setup y gotchas de la API SAFE.

Caso de prueba (idéntico en ambos):
- Zapata cuadrada 1.5 × 1.5 × 0.30 m
- Material concreto E = 24 855 MPa, ν = 0.20, γ = 24 kN/m³
- Suelo Winkler ks = 19 613 kN/m³ (≈ 2 000 tonf/m³, arena media)
- Carga puntual P = 20 tonf = 196.13 kN en centro (0.75, 0.75, 0)
- Malla 12 × 12 (169 nodos, 144 Q4) — **idéntica en ambos solvers**

## Reproducir

```bash
cd hekatan-struct-lineal/cli
# Hekatan (Node + tsx + WASM, ~10 ms)
npx tsx ./cli_zapata.mjs --json=hekatan_zapata_result.json

# SAFE (Python + pythonnet + SAFEv1.dll, ~55 s incl. spin-up GUI)
PYTHONIOENCODING=utf-8 python -X utf8 safe_api_zapata.py --json=safe_zapata_result.json
```

## Resultados (corrida final 2026-05-18, paridad alcanzada)

### Perfil de asentamiento — 9 puntos clave

| Posición                | Hekatan w [mm] | SAFE w [mm] | Δ        | q_Hekatan [kN/m²] | q_SAFE [kN/m²] |
|-------------------------|----------------|-------------|----------|--------------------|----------------|
| esquina (0,0)           | −4.3849        | −4.3840     | **−0.02%** | 86.00              | 85.98          |
| esquina (Lz,0)          | −4.3849        | −4.3840     | **−0.02%** | 86.00              | 85.98          |
| esquina (0,Bz)          | −4.3849        | −4.3840     | **−0.02%** | 86.00              | 85.98          |
| esquina (Lz,Bz)         | −4.3849        | −4.3840     | **−0.02%** | 86.00              | 85.98          |
| medio-borde (Lz/2,0)    | −4.4263        | −4.4270     | **+0.02%** | 86.81              | 86.83          |
| medio-borde (Lz,Bz/2)   | −4.4263        | −4.4270     | **+0.02%** | 86.81              | 86.83          |
| medio-borde (Lz/2,Bz)   | −4.4263        | −4.4270     | **+0.02%** | 86.81              | 86.83          |
| medio-borde (0,Bz/2)    | −4.4263        | −4.4270     | **+0.02%** | 86.81              | 86.83          |
| **centro (Lz/2,Bz/2)**  | **−4.5356**    | **−4.5370** | **+0.03%** | **88.96**          | **88.98**      |

### Sanity check con teoría analítica

- Carga distribuida equivalente q = P/A = 196.13/2.25 = 87.17 kN/m²
- Asentamiento uniforme Winkler infinito: `w_teo = q/ks = 87.17/19613 = 4.4445 mm`
- Hekatan w_avg (9 puntos) ≈ 4.42 mm (−0.6% del teórico) ✓
- SAFE w_avg (9 puntos) ≈ 4.42 mm (−0.6% del teórico) ✓
- Validación con carga uniforme directa: ambos solvers dan 4.4445 mm en
  **todos los puntos** (paridad teórica exacta, ver §"Test diagnóstico"
  abajo).

## Camino hasta la paridad (debugging)

Llegar a Δ <0.03% requirió 12 iteraciones del script SAFE. La causa raíz
del gap original de +37.8% NO era ninguna de las hipótesis intuitivas:

| Versión | Cambio                                | w_centro SAFE | Δ vs Hekatan |
|---------|---------------------------------------|----------------|--------------|
| v6      | Auto-mesh + ShellThin (Kirchhoff)    | −3.290 mm      | +37.8%       |
| v7      | Mesh 12×12 explícito (144 áreas Q4)  | −3.264 mm      | +38.9%       |
| v8      | ShellThick (Mindlin/Reissner)         | −3.304 mm      | +37.3%       |
| v9      | eSlabType.Mat en vez de Footing       | −3.304 mm      | +37.3%       |
| v10     | Calibration test (ks_input / 1.384)   | −3.211 mm      | +41.2%       |
| v11     | SoilProfile="" en vez de "None"       | −3.211 mm      | +41.2%       |
| **v12** | **DatabaseTables `SubModulus` override** | **−4.537 mm** | **+0.03%**   |

**Verificaciones que descartaron causas falsas:**

1. ❌ **Mesh (auto vs 12×12 explícito)**: 144 áreas no movió el resultado.
2. ❌ **Shear formulation (Kirchhoff vs Mindlin)**: ShellThin→ShellThick
   cambió 0.4%. Para t/L=0.2 esperaba 20-30% de diferencia → SAFE estaba
   resolviendo otro problema enteramente.
3. ❌ **Slab type (Footing vs Mat)**: idéntico.
4. ❌ **SoilProfile string "None" vs ""**: idéntico.
5. ✅ **`Spring Property → SubModulus` via DatabaseTables**: cerró el gap.

**La causa raíz:** `cPropAreaSpring.SetAreaSpringProp(U1, U2, U3, ...)` parece
controlar el spring stiffness, pero **SAFE ignora U3 silenciosamente** y
aplica un default `Subgrade Modulus = 100 lb/in³ = 27145 kN/m³`. Hay que
editar la tabla `Spring Property Definitions - Area Springs` campo
`SubModulus` directamente vía `cDatabaseTables.SetTableForEditingArray`
+ `ApplyEditedTables`. Verificación obligatoria: corrida con carga
distribuida `q=P/A` debe dar `w_uniform = q/ks` exacto.

Documentado en detalle en [`README.md`](README.md) sección "Area spring
(Winkler)" + Gotcha #8.

## Test diagnóstico de equilibrio (Hekatan vs SAFE vs teoría)

Para confirmar que el solver de spring de ambos respeta equilibrio,
corrida con carga UNIFORME q = P/A = 87.17 kN/m²:

| Solver  | w en todos los 9 puntos | Δ vs teórico (q/ks = 4.4445 mm) |
|---------|---------------------------|----------------------------------|
| Teórico | 4.4445 mm                 | —                                |
| Hekatan | 4.4445 mm                 | **0.00%**                        |
| SAFE    | 4.4450 mm                 | **+0.01%**                       |

Ambos solvers dan paridad teórica EXACTA con carga uniforme. Para carga
puntual el perfil tiene gradiente (bowl-shape) y ambos solvers lo
capturan idénticamente.

## Verificaciones de sanidad

- **Simetría perfecta**: las 4 esquinas dan el mismo valor (idem 4
  medios-bordes) en ambos solvers. Hekatan logra simetría tras
  reemplazar el BC artificial `βx=βy=0` en nodo (0,0) por springs
  torsionales débiles en las 4 esquinas.
- **Conservación de carga**: q_avg×A = 87×2.25 = 196 kN = P aplicada ✓.
- **Simetría Mxx = Myy en Hekatan**: 38.61 = 38.61 (paridad exacta) →
  solver Q4 correcto.
- **Régimen rígido vs flexible**: la diferencia centro-esquina
  (~3.4%) indica que la zapata 1.5×1.5×0.30 está en transición rígido-
  flexible. Parámetro de Boussinesq λ = (ks·L⁴/D)^(1/4) ≈ 1.4.

## Próximos pasos

- [ ] Replicar la metodología para zapata viga-amarre, zapata combinada,
      losa de cimentación, zapata conectada.
- [ ] Extraer momentos `Mxx_max`, `Myy_max` de SAFE — la tabla
      `Element Forces - Areas` retornó 0 filas; investigar tabla real
      (`Slab Forces - Slabs`, `Shell Forces`, etc.).
- [ ] Captura 3D del workspace Hekatan (Three.js) side-by-side.

## Archivos generados

```
hekatan-struct-lineal/
├── cli/
│   ├── cli_zapata.mjs                   # Hekatan WASM CLI
│   ├── safe_api_zapata.py               # SAFE API runner (final v13)
│   ├── hekatan_zapata_result.json       # output Hekatan
│   ├── safe_zapata_result.json          # output SAFE
│   ├── safe_run.log                     # log de la corrida SAFE
│   └── Zapata_Hekatan_via_API.fdb       # modelo SAFE generado
└── validacion/
    ├── safe/
    │   ├── README.md                    # documentación API SAFE + bug SubModulus
    │   └── zapata-aislada.md            # este archivo
    └── screenshots/
        └── zapata-aislada.png           # render 3D Three.js
```
