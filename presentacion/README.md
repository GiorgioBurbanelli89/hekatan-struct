# Presentación clase UPS — 8 may 2026, 18:00

Diapositivas en formato **Marp** (Markdown → PDF/PPTX/HTML).

## 📋 Archivo

- `clase_ups_2026-05-08.md` — 18 diapositivas, ~30 min de exposición

## 🚀 Cómo exportar a PDF / PPTX (3 opciones)

### Opción A — VS Code (más rápida, recomendada)

1. Instalar la extensión **"Marp for VS Code"** (`marp-team.marp-vscode`)
2. Abrir `clase_ups_2026-05-08.md` en VS Code
3. `Ctrl + Shift + P` → escribir **"Marp: Export slide deck"**
4. Elegir formato: **PDF**, **PPTX** o **HTML**
5. Listo — archivo generado en la misma carpeta

### Opción B — CLI Marp (sin instalar VS Code)

```bash
# Instalar marp-cli global (1 vez)
npm install -g @marp-team/marp-cli

# Exportar a PDF
marp clase_ups_2026-05-08.md --pdf --allow-local-files

# Exportar a PPTX (PowerPoint editable)
marp clase_ups_2026-05-08.md --pptx --allow-local-files

# Exportar a HTML (presentar desde navegador con teclas ←/→)
marp clase_ups_2026-05-08.md --html --allow-local-files
```

### Opción C — Web (si nada de lo anterior funciona)

1. Ir a https://web.marp.app/
2. Pegar el contenido de `clase_ups_2026-05-08.md`
3. Botón **"Download"** → PDF / PPTX

## 🎬 Plan del live-demo (Slide 17)

1. Abrir https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/
2. Dropdown categoría → **🏁 Benchmarks · 1️⃣ Frames**
3. Seleccionar **benchmark-cft-cantilever**
4. Mover slider `L` (3 → 5 m) → ver re-cálculo en vivo
5. Hover sobre nodo top → tooltip muestra `Uz = -0.00276 mm`
6. Toggle **"📤 Exportar a ETABS .e2k"** → descarga archivo
7. Abrir el `.e2k` en bloc de notas → mostrar líneas:
   - `FRAMESECTION  "CR300X300X121mm"  MATERIAL "A572Gr50"  SHAPE "Filled Steel Tube"  D 0.3 B 0.3 TF 0.012 TW 0.012 FILLMATERIAL "4000Psi"`
   - `POINTASSIGN  "1"  "Base"  RESTRAINT "UX UY UZ RX RY RZ"`
8. (Si hay tiempo) abrir ese `.e2k` en ETABS Live → comparar Uz top

## 📦 Backup en caso de problemas técnicos

Si Internet falla durante la clase, llevar:
- `clase_ups_2026-05-08.pdf` exportado (las slides)
- Build local del workspace: `cd examples && npm run dev`
- Capturas de pantalla del workspace + e2k en `presentacion/screenshots/`

## ⏱️ Cronometraje sugerido (30 min)

| Slides | Tiempo | Tema |
|--------|--------|------|
| 1-4 | 5 min | Intro + pregunta TFM + arquitectura |
| 5-7 | 5 min | Stack + paradigma + API |
| 8-12 | 10 min | 3 benchmarks + tabla comparativa |
| 13-14 | 4 min | Property modifiers + e2k export |
| 15-16 | 3 min | Importador + ventaja vs ETABS |
| 17 | 5 min | Demo en vivo |
| 18 | resto | Q&A |
