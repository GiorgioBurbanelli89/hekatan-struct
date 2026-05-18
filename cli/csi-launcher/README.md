# CSI File Launcher

Herramienta local unificada para abrir archivos **ETABS** (`.e2k`/`.EDB`),
**SAP2000** (`.s2k`/`.SDB`) y **SAFE** (`.f2k`/`.FDB`) detectando automáticamente
qué aplicación CSI lanzar.

## Instalación

Solo requiere **Python 3.10+** con `pythonnet`:

```powershell
pip install pythonnet
```

No requiere instalación adicional — el launcher detecta las apps CSI por
las rutas de instalación estándar.

## Uso

### Modo GUI (más fácil)

```bash
python csi_launcher.py
```

Abre una ventana con:
- 📁 Selector de archivo (filtra por extensión CSI)
- 🎯 Detección automática de app por extensión
- 📋 Lista de archivos recientes (doble-click para reabrir)
- 🚀 Botón "Abrir en CSI"

O simplemente doble-click en `csi_launcher.bat`.

### Modo CLI

```bash
# Auto-detecta por extensión
python csi_launcher.py modelo.e2k        → ETABS
python csi_launcher.py modelo.s2k        → SAP2000
python csi_launcher.py modelo.f2k        → SAFE

# Forzar app específica (override)
python csi_launcher.py file.txt --etabs
python csi_launcher.py file.txt --sap
python csi_launcher.py file.txt --safe

# Ver recientes
python csi_launcher.py --recent
```

### File Association (doble-click directo)

Para que doble-click en un `.e2k`/`.s2k`/`.f2k` use el launcher automático:

```bash
# Click derecho → Ejecutar como administrador
install_associations.bat
```

Esto reasocia las extensiones text de CSI al launcher (los binarios
`.EDB`/`.SDB`/`.FDB` siguen abriéndose con ETABS/SAP/SAFE nativos).

## Extensiones reconocidas

| Ext | App | Tipo |
|---|---|---|
| `.e2k` | ETABS 22 | Text format (text export) |
| `.EDB` | ETABS 22 | Database binary (native) |
| `.$et` | ETABS 22 | Backup auto |
| `.s2k` | SAP2000 25 | Text format |
| `.SDB` | SAP2000 25 | Database binary |
| `.$2k` | SAP2000 25 | Backup auto |
| `.f2k` | SAFE 20 | Text format |
| `.FDB` | SAFE 20 | Database binary |

## Configuración de rutas CSI

Si tus CSI están en rutas diferentes a las default, editá las primeras
líneas de `csi_launcher.py`:

```python
CSI_APPS = {
    "etabs": {
        "exe":  r"C:\Program Files\Computers and Structures\ETABS 22\ETABS.exe",
        "dll":  r"C:\Program Files\Computers and Structures\ETABS 22\ETABSv1.dll",
        ...
    },
    ...
}
```

## Cómo funciona internamente

1. **Detección**: parsea la extensión del archivo
2. **API .NET**: usa `pythonnet` + `clr.AddReference` para cargar el SDK
   (`ETABSv1.dll`/`SAP2000v1.dll`/`SAFEv1.dll`)
3. **Attach to existing**: intenta `Helper.GetObject()` para reutilizar
   una instancia abierta de la app
4. **New instance**: si no hay una abierta, hace `CreateObjectProgID` +
   `ApplicationStart()` (~5s)
5. **Open file**: llama `sap.File.OpenFile(path)` — funciona tanto para
   binarios como para text formats (la API discrimina internamente)
6. **Guarda en recientes**: `recent.json` con los últimos 15 archivos

## Troubleshooting

### "pythonnet no disponible"
```bash
pip install pythonnet
```

### "No encuentro ETABS.exe"
Editá `CSI_APPS["etabs"]["exe"]` en `csi_launcher.py` con tu ruta real.

### "OpenFile retornó != 0"
- Para `.e2k` malformados (p.ej. de exportadores third-party como
  hekatan-struct con bugs), abrí en ETABS GUI primero, guardá como
  `.EDB`, y a partir de ahí usá el binario.
- Si la instancia ETABS está "zombie" (no responde), cerrá con Task
  Manager y reabrí.

## Integración con flujo Hekatan ↔ ETABS

Este launcher se usa típicamente para:
1. Abrir el template `W##_template.e2k` que prepara Claude
2. Editar la sección/cargas manualmente en GUI
3. Guardar — Claude detecta los cambios y valida con
   `validate_*.py` (ver `validacion/Etabs/README.md`)
