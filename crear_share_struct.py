# -*- coding: utf-8 -*-
"""
Crea un ENLACE DE COMPARTIR para Hekatan Struct Lineal.

Es el equivalente del `/id/<codigo>` del visor DWG, pero en un hosting
estatico (GitHub Pages) no hay reescritura de rutas, asi que el enlace va por
consulta: `?m=<codigo>`.

    python crear_share_struct.py galpon_bodega.heks --titulo "Galpon bodega"

Deja `examples/public/m/<codigo>/modelo.heks` + `v.json`, imprime el enlace y
recuerda el push. El codigo sale de `secrets.token_urlsafe`: es impredecible.

NO ES CONTROL DE ACCESO. El codigo no se puede adivinar y robots.txt tapa
/m/, pero cualquiera que TENGA el enlace ve el modelo. Para privacidad de
verdad hace falta autenticacion en el hosting (Cloudflare Access o similar).
"""
import argparse
import json
import os
import secrets
import shutil
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
PUB = os.path.join(AQUI, "examples", "public")
# El workspace NO cuelga de la raiz del deploy, sino de /workspace/. El .heks
# si vive en la raiz (m/<codigo>/), porque la app lo resuelve con BASE_URL.
BASE_PUB = "https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/"


def crear(heks, titulo=None, codigo=None):
    if not os.path.isfile(heks):
        sys.exit("no existe: %s" % heks)
    codigo = codigo or secrets.token_urlsafe(12).replace("-", "").replace("_", "")[:16]
    dest = os.path.join(PUB, "m", codigo)
    os.makedirs(dest, exist_ok=True)
    shutil.copy2(heks, os.path.join(dest, "modelo.heks"))
    # El manifiesto lleva el titulo: asi el nombre real del archivo del usuario
    # no viaja en la URL ni aparece en la pagina.
    with open(os.path.join(dest, "v.json"), "w", encoding="utf-8") as f:
        json.dump({"titulo": titulo or os.path.basename(heks),
                   "f": "modelo.heks"}, f, ensure_ascii=False, indent=1)

    # robots.txt: que los buscadores no indexen los modelos compartidos.
    rob = os.path.join(PUB, "robots.txt")
    linea = "Disallow: /m/"
    if not os.path.isfile(rob) or linea not in open(rob, encoding="utf-8").read():
        with open(rob, "a", encoding="utf-8") as f:
            f.write("User-agent: *\n%s\n" % linea)

    n = os.path.getsize(os.path.join(dest, "modelo.heks"))
    print("Codigo   : %s" % codigo)
    print("Carpeta  : %s  (%d bytes)" % (dest, n))
    print()
    print("PUBLICO  : %s?m=%s" % (BASE_PUB, codigo))
    print("LOCAL    : http://localhost:4600/workspace/index.html?m=%s" % codigo)
    print()
    print("Falta subirlo:  git add examples/public/m && git commit && git push")
    print("OJO: cualquiera con el enlace lo ve. No es control de acceso.")
    return codigo


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("heks")
    p.add_argument("--titulo")
    p.add_argument("--codigo", help="forzar el codigo (para rehacer un enlace)")
    a = p.parse_args()
    crear(a.heks, a.titulo, a.codigo)
