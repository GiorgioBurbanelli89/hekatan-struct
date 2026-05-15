# Shell Thick Cantilever — HekatanLab Web (FE06)

## Cómo reproducir

1. Modo **📐 MATLAB**
2. Seleccionar **"FE06 — Shell Thick (Membrana + Mindlin)"**

## Resultados publicados (malla 3×3)

```
Shell thick: t/a = 0.100
Desplazamiento horizontal max shell thick: 1.2528e-02
```

## Paridad

| Comparable con   | Diferencia |
|------------------|------------|
| MATLAB R2017a    | 0.00% (idéntico) |
| Membrana axial   | +25.3% |

## Notas

- Misma formulación que FE05 pero con t=0.05 (t/a=0.1, grueso)
- Empotramiento completo (5 DOFs) en x=0
- Carga lateral P=100 distribuida en (ny+1) nodos del borde x=W
- Script standalone: `../matlab/shell_thick_verify.m`
