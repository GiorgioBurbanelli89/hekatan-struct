# awatif-py

**Parametric structural FEM in pure Python.** Python port of [awatif v2](https://github.com/madil4/awatif) with frames, shells, modal analysis, Winkler springs, PyVista 3D viewer and ipywidgets sliders.

```bash
pip install awatif-py            # core (numpy + scipy)
pip install awatif-py[viewer]    # + PyVista 3D
pip install awatif-py[sliders]   # + ipywidgets / trame web app
pip install awatif-py[all]       # everything
```

## Quick start

```python
import numpy as np
from awatif import Model, deform, analyze
from awatif.viewer import View

m = Model()

# Geometría
m.node(0, 0, 0); m.node(0, 0, 4)              # base + top
m.frame(0, 1, section="rect", b=0.4, h=0.4)   # columna 40×40 C40

# Material
m.material("conc", E=2.486e8, nu=0.20, gamma=23.57)
m.assign_material("conc", to_all_elements=True)

# Apoyos + cargas
m.support(0, ux=True, uy=True, uz=True)  # pinned base
m.load(1, fx=10)                          # 10 kN horizontal en top

# Static
res = deform(m)
M, V, P = analyze(m, res)
print(f"Tip displacement Ux: {res.U[1*6+0]*1000:.3f} mm")

# 3D viewer
View(m, deformed=res).show()
```

## Features

- **Frame 3D elements** (Euler-Bernoulli, 12 DOF) con local axes CSI-convention
- **Shell Q4** (Mindlin-Reissner bending + plane stress membrane, 24 DOF)
- **Modal eigen analysis** (lumped o consistent mass)
- **Winkler springs** nodales (cimentaciones)
- **Rigid diaphragm** constraint (master-slave penalty)
- **Rigid offsets** y **cardinal points** estilo CSI ETABS
- **Lumped mass** CSI §4.12 (no rotational, ignora restrained)
- **3D viewer** PyVista (geometría, deformada, modos, colormaps)
- **Sliders paramétricos** via ipywidgets (Jupyter) y trame (web app standalone)

## API design

Espejo el API de [awatif v2 JS](https://github.com/madil4/awatif/tree/main/packages/fem):

| awatif JS                  | awatif-py                   |
|---|---|
| `deform(nodes, elements, nodeInputs, elementInputs)` | `deform(model)` |
| `analyze(...)`             | `analyze(model, deform_result)` |
| `modalAnalysis(...)`       | `modal(model, n_modes=12)` |
| `getViewer({ mesh })`      | `View(model).show()` |

## Examples

```bash
cd awatif-py/examples
python cantilever_3d.py                    # cantilever con tip load
python simply_supported_beam.py            # viga simplemente apoyada
python mesa_torsion.py                     # validación ETABS Mesa Torsión
python edificio_aporticado.py              # building parametric
jupyter notebook sliders_cantilever.ipynb  # ipywidgets demo
```

## Tests

```bash
pip install awatif-py[dev]
pytest                              # all
pytest -m "not slow"                # exclude slow tests
pytest -m validation                # only validation vs ETABS/SAP/OpenSees
```

## Status

**v0.1.0 — Alpha**. Feature parity with awatif v2 ongoing. Production usage at own risk.

Roadmap:
- [x] Frame 3D static
- [ ] Shell Q4 static
- [ ] Modal eigen (lumped + consistent)
- [ ] Winkler springs
- [ ] Rigid diaphragm
- [ ] PyVista viewer
- [ ] ipywidgets sliders
- [ ] trame web app

## License

MIT
