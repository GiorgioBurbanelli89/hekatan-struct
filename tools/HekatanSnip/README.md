# HekatanSnip

Recortador de pantalla minimalista para Windows. Presionás **`Ctrl` + `` ` ``**
(la tecla debajo de `Esc`), arrastrás un rectángulo, y el PNG queda guardado
en disco **con la ruta ya copiada al portapapeles**.

Ese último detalle es el punto de todo: no copia la imagen, copia **la ruta**.
Así podés pegarla directo en un chat con un agente (Claude Code, por ejemplo)
sin pasar por ningún diálogo de "guardar como".

Son 4 archivos de script. No hay `.exe`, no hay instalador, no hay dependencias.

---

## Instalar

Copiá la carpeta donde quieras y doble clic en:

```
install-hotkey.bat
```

Eso hace dos cosas:

1. Crea un acceso directo en `Startup` → arranca solo con Windows.
2. Lo lanza ya mismo, sin reiniciar.

Vas a ver un icono en la bandeja del sistema: `HekatanSnip - Ctrl+\` para recortar`.

**Desinstalar:** click derecho en el icono → *Salir*, y borrá
`%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\HekatanSnip.lnk`.

---

## Usar

| Acción | Cómo |
|---|---|
| Recortar | `Ctrl` + `` ` `` — o doble clic en el icono de bandeja |
| Cancelar | `Esc` mientras la pantalla está oscurecida |
| Cambiar carpeta | Click derecho en el icono → *Cambiar carpeta por defecto...* |

Al presionar el hotkey la pantalla se oscurece y el cursor pasa a cruz.
El área que vas seleccionando se ve **a brillo normal** sobre el fondo oscuro,
con un borde rojo. Soltás el botón y listo.

El archivo se llama `capture_AAAAMMDD_HHMMSS.png`.

---

## Dónde guarda

Se resuelve en cascada, de lo más específico a lo más genérico:

1. La carpeta guardada en `%APPDATA%\HekatanSnip\config.json`, si ya elegiste una.
2. `<hekatan-struct>\ScreenShoot`, si el script vive dentro de este repo.
3. `Imágenes\HekatanSnip`, en cualquier otro caso.

Por eso funciona en cualquier máquina y con cualquier usuario: **no hay
ninguna ruta absoluta escrita en el código.** Todo sale de variables de
entorno o de la ubicación del propio script.

---

## Los archivos

| Archivo | Qué hace |
|---|---|
| `snip.ps1` | El recortador. Captura, oscurece, deja seleccionar, recorta, guarda, copia la ruta. |
| `snip-hotkey.ps1` | El residente: registra `Ctrl+\`` vía `RegisterHotKey` (user32) y pone el icono de bandeja. |
| `snip-hotkey.vbs` | Lanzador. Existe solo para que no parpadee una consola negra al arrancar. |
| `install-hotkey.bat` | Crea el acceso en `Startup` y arranca el residente. |

### Cómo captura la pantalla

Usa `VirtualScreen`, no la pantalla primaria — así **la selección puede cruzar
de un monitor a otro** sin cortarse. Y llama a `SetProcessDPIAware()` antes de
nada: sin eso, en un monitor escalado al 150 % Windows le miente al script
sobre las coordenadas y el recorte sale corrido.

Se toman **dos** copias del bitmap: una intacta y una oscurecida. La oscurecida
es el fondo de la ventana; la intacta es de donde se dibuja el área seleccionada
y de donde sale el recorte final. Por eso lo que ves seleccionado es exactamente
lo que se guarda.

---

## Requisitos

- Windows 10 u 11
- PowerShell 5.1 — **ya viene con Windows**, no hay que instalar nada

Es Windows-only por diseño: usa WinForms y `user32.dll` directamente.

---

## Si algo falla

**El hotkey no responde.** Otro programa puede tener tomado `Ctrl+\``.
El script te avisa con un mensaje al arrancar si no pudo registrarlo — no
falla en silencio. Mientras tanto, el doble clic en el icono de bandeja
siempre funciona.

**No aparece el icono.** Revisá el log:

```
%TEMP%\HekatanSnip.log
```

**Quiero cambiar la tecla.** En `snip-hotkey.ps1`, la línea:

```powershell
$hk = New-Object Hk 2, 0xC0
```

`2` es `MOD_CONTROL`; `0xC0` es `VK_OEM_3`, la tecla `` ` ``.
Los códigos están en la doc de [Virtual-Key Codes](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
de Microsoft.
