# Modelos para ETABS

Dos carpetas, y la diferencia importa:

```
modelos-etabs/
├── e2k/     ← SÍ va en git. Texto, se ve el diff, formato de intercambio.
└── edb/     ← NO va en git. Binario de ETABS, pesa y no se puede diferenciar.
```

Las dos siguen el **mismo árbol que el selector del workspace**
(`1-frames/1-gdl-axial/…`), sin emojis en los nombres de carpeta porque dan
guerra en Windows, en git y al copiar a otra máquina.

## ¿Por qué el .e2k sí y el .edb no?

- El **`.e2k` es texto**. Git lo diferencia línea a línea, así que si un cambio
  en el exportador mueve una cota se ve en el diff. Es el formato que CSI
  documenta para importar y exportar.
- El **`.edb` es binario**. Git no lo puede diferenciar: cada regeneración
  guarda una copia entera y el repo se hincha para siempre. Además se regenera
  en un minuto a partir del `.e2k`, así que no hay nada que conservar.

Lo que **no** debe entrar aquí nunca: binarios de CSI (DLLs, ejecutables) y
modelos de clientes — eso último no es cosa de licencias sino de
confidencialidad.

## Regenerar

```bash
# los 85 .e2k, ordenados por categoría
node cli/exportar_todos_e2k.mjs

# convertirlos a .edb abriéndolos en ETABS (una sola instancia para los 85)
python ../galpon-bodega-electoral/e2k_a_edb.py modelos-etabs/e2k modelos-etabs/edb
```

## Comprobar uno contra ETABS

```bash
python ../galpon-bodega-electoral/e2k_vs_etabs_coords.py <e2k> coords.json  # geometría
python ../galpon-bodega-electoral/e2k_vs_etabs_modelo.py <e2k> modelo.json  # apoyos, cargas, secciones
```
