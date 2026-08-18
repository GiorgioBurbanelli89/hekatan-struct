# -*- coding: utf-8 -*-
"""Reflexion .NET sobre SAFEv1.dll: que expone SAFE sobre los muelles de area."""
import clr  # type: ignore
clr.AddReference(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
import System  # type: ignore
from System.Reflection import Assembly  # type: ignore

asm = Assembly.LoadFrom(r"C:\Program Files\Computers and Structures\SAFE 20\SAFEv1.dll")
tipos = [t for t in asm.GetTypes()]
print("tipos en SAFEv1.dll:", len(tipos))
interes = [t for t in tipos if any(w in t.Name.lower() for w in ("spring","areaobj","propareaspring"))]
for t in interes:
    print("\n===", t.Name)
    for m in t.GetMethods():
        n = m.Name
        if n.startswith(("get_","set_","To","Equals","GetHash","GetType")):
            continue
        ps = ", ".join("%s %s" % (p.ParameterType.Name, p.Name) for p in m.GetParameters())
        print("   %s(%s)" % (n, ps[:130]))
