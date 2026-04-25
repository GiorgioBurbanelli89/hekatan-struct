# Hekatan Struct — Modelo de Licenciamiento Dual

## Estrategia

```
hekatan-struct/                  ← Repo público (github.com/GiorgioBurbanelli89/hekatan-struct)
│
├── LICENSE                      ← MIT (todo lo público)
├── awatif-fem/                  ← Solver lineal MIT
│   ├── src/cpp/
│   │   ├── deform.cpp           ← lineal  (público)
│   │   ├── modal.cpp            ← lineal  (público)
│   │   └── ...
│   └── src/cpp/built/
│       └── deform.wasm          ← WASM SIN no-lineal (4 MB)
│
├── examples/                    ← MIT (público)
│   ├── conexion-rbs/
│   ├── conexion-bfp/
│   ├── ...
│   └── workspace/
│
├── docs/                        ← MIT (público)
│   ├── HEKATAN_PRO_LICENSING.md ← este archivo
│   └── symbolic/
│
└── .gitignore                   ← bloquea folders Pro abajo

# ──────────────────────────────────────────────────────────────────────
# LO QUE SIGUE NO SE SUBE AL REPO PÚBLICO (gitignored):
# ──────────────────────────────────────────────────────────────────────

awatif-fem-pro/                  ← LICENCIA COMERCIAL Hekatan Pro
├── LICENSE.commercial.txt       ← acuerdo de licencia
├── src/cpp/
│   ├── nonlinear.cpp            ← Newton-Raphson incremental
│   ├── return_mapping_J2.cpp    ← plasticidad J2 con return-mapping
│   ├── damage_lemaitre.cpp      ← Lemaitre damage model
│   ├── arc_length_riks.cpp      ← Riks arc-length para post-peak
│   └── nonlinear_dynamic.cpp    ← time-history Newmark/HHT
└── built/
    └── deform-pro.wasm          ← WASM CON no-lineal (6 MB)

examples/src/conexion-rbs-pro/   ← Ejemplos avanzados Pro
examples/src/conexion-bfp-pro/
examples/src/conexion-end-plate-pro/
docs/PRO/                        ← Documentación comercial
```

## Plan Free (público, MIT)

✅ Análisis lineal (deform, analyze, modal)
✅ Solver matricial Q4, MITC4, frame
✅ Property modifiers ETABS-style
✅ Lumped mass HRZ
✅ Modal con ASCE 7-22 §12.9.1.1
✅ Conexiones con visualización colormap
✅ Workspace web 100% gratis
✅ Validado contra OpenSees + ETABS

## Plan Pro (privado, licencia comercial)

⭐ Solver no-lineal Newton-Raphson incremental
⭐ Return-mapping J2 (plasticidad de von Mises)
⭐ Damage model Lemaitre (fractura dúctil)
⭐ Arc-length Riks (post-peak softening)
⭐ Time-history dinámico (Newmark/HHT)
⭐ Pushover IDA (Incremental Dynamic Analysis)
⭐ Cyclic AISC 341 K3 con plasticidad real
⭐ Soporte técnico + actualizaciones
⭐ Precio sugerido: $50/mes o $400/año

## Workflow de desarrollo

```bash
# Trabajar en código público (lineal, abierto)
cd hekatan-struct/
git checkout main
# ... editar awatif-fem/, examples/, docs/
git push hekatan-struct main      # → repo público

# Trabajar en código Pro (no-lineal, privado)
cd hekatan-struct/awatif-fem-pro/  # local solamente, en .gitignore
# ... editar nonlinear.cpp, etc.
# Push a repo privado SEPARADO si tienes uno:
cd ../  # back to hekatan-struct/
git -C awatif-fem-pro/ push origin main  # repo privado opcional
```

## Build dual

### Build público (Free, sin no-lineal)
```bash
emcc awatif-fem/src/cpp/deform.cpp ... \
  -o awatif-fem/src/cpp/built/deform.wasm
# 4 MB, sin _nonlinear_*, _arc_length_*
```

### Build comercial (Pro, con no-lineal)
```bash
emcc awatif-fem/src/cpp/deform.cpp \
     awatif-fem-pro/src/cpp/nonlinear.cpp \
     awatif-fem-pro/src/cpp/return_mapping_J2.cpp \
     ... \
  -o awatif-fem-pro/built/deform-pro.wasm
# 6 MB, con todas las extensiones Pro
```

El usuario público recibe `deform.wasm`. Si compra Hekatan Pro:
1. Pagas la licencia
2. Recibes `deform-pro.wasm` + clave de activación
3. Reemplazas el archivo en tu instalación local
4. La interfaz detecta el WASM Pro y desbloquea las opciones no-lineales

## Notas legales

- **MIT**: permite uso comercial, modificación, distribución, sin obligación
  de divulgar el código derivado. Apto para Hekatan Free.
- **Comercial**: licencia personalizada con cláusulas de uso, prohibición
  de redistribución, soporte y actualizaciones. Apto para Hekatan Pro.

Esto es el mismo modelo dual que usan Qt, MySQL, MongoDB, GitLab CE/EE.

## Referencias

- [Qt Licensing](https://www.qt.io/licensing/)
- [MySQL Dual Licensing](https://www.mysql.com/about/legal/licensing/oem/)
- [GitLab CE vs EE](https://about.gitlab.com/install/ce-or-ee/)
