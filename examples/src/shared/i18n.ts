/**
 * i18n — Internationalization for Hekatan Struct
 * Supports: ES (Spanish) and EN (English)
 */
export type Lang = "es" | "en";

let _lang: Lang = (typeof localStorage !== "undefined" && localStorage.getItem("hk_lang") as Lang) || "es";

export function currentLang(): Lang { return _lang; }
export function setLang(l: Lang) {
  _lang = l;
  if (typeof localStorage !== "undefined") localStorage.setItem("hk_lang", l);
}

/** Translation dictionary */
const D: Record<string, [string, string]> = {
  // [ES, EN]  — key is the ES string (or a short key)

  // ── Settings panel ──
  "Settings":           ["Configuración", "Settings"],
  "Display scale":      ["Escala visual", "Display scale"],
  "Nodes":              ["Nodos", "Nodes"],
  "Elements":           ["Elementos", "Elements"],
  "Columnas":           ["Columnas", "Columns"],
  "Vigas":              ["Vigas", "Beams"],
  "Nodes indexes":      ["Índices nodos", "Node indexes"],
  "Elements indexes":   ["Índices elem.", "Element indexes"],
  "Grid":               ["Grilla", "Grid"],
  "Mostrar grid":       ["Mostrar grilla", "Show grid"],
  "Mostrar labels":     ["Mostrar etiquetas", "Show labels"],
  "Modelo":             ["Modelo", "Model"],

  // ── FEM Studio header ──
  "FEM Studio":         ["FEM Studio", "FEM Studio"],

  // ── Example buttons ──
  "Cercha":             ["Cercha", "Truss"],
  "Portico":            ["Pórtico", "Portal Frame"],
  "Torre":              ["Torre", "Tower"],
  "Galpon":             ["Galpón", "Warehouse"],
  "Edificio":           ["Edificio", "Building"],
  "Edif. Muros":        ["Edif. Muros", "Bldg. Walls"],
  "Edif. Acero":        ["Edif. Acero", "Steel Bldg."],
  "Acero+Diag":         ["Acero+Diag", "Steel+Brace"],
  "Edif. Mixto":        ["Edif. Mixto", "Mixed Bldg."],
  "Mezanine":           ["Mezanine", "Mezzanine"],
  "Barra":              ["Barra", "Bar"],
  "Placa 3Q":           ["Placa 3Q", "Plate 3Q"],
  "Placa Q4":           ["Placa Q4", "Plate Q4"],
  "Losa Rect":          ["Losa Rect", "Rect. Slab"],
  "Losa Plana":         ["Losa Plana", "Flat Slab"],
  "Viga Alta":          ["Viga Alta", "Deep Beam"],
  "Muro Cont.":         ["Muro Cont.", "Ret. Wall"],
  "Zapata":             ["Zapata", "Footing"],
  "Placa Base":         ["Placa Base", "Base Plate"],
  "Col+Placa 3D":       ["Col+Placa 3D", "Col+Plate 3D"],
  "Talud":              ["Talud", "Slope"],
  "Eiffel":             ["Eiffel", "Eiffel"],
  "Arco":               ["Arco", "Arch"],
  "Puente":             ["Puente", "Bridge"],
  "Twist":              ["Twist", "Twist"],
  "Burj":               ["Burj", "Burj"],
  "Opera":              ["Opera", "Opera"],
  "Diagrid":            ["Diagrid", "Diagrid"],
  "Muro Q4":            ["Muro Q4", "Wall Q4"],
  "Viga Q4":            ["Viga Q4", "Beam Q4"],
  "Placa XZ":           ["Placa XZ", "Plate XZ"],
  "Pérgola":            ["Pérgola", "Pergola"],

  // ── Tool buttons ──
  "Select":             ["Seleccionar", "Select"],
  "Draw":               ["Dibujar", "Draw"],
  "Inspect":            ["Inspeccionar", "Inspect"],
  "New":                ["Nuevo", "New"],
  "Export":             ["Exportar", "Export"],

  // ── View buttons ──
  "3D":                 ["3D", "3D"],
  "Plan":               ["Planta", "Plan"],
  "EX":                 ["EX", "EX"],
  "EY":                 ["EY", "EY"],

  // ── Analysis ──
  "Modal":              ["Modal", "Modal"],
  "Nonlinear":          ["No-lineal", "Nonlinear"],
  "Pushover":           ["Pushover", "Pushover"],
  "Report Explained":   ["Reporte FEM", "FEM Report"],
  "Cálculo":            ["Cálculo", "Calc"],
  "Log":                ["Log", "Log"],
  "CLI":                ["CLI", "CLI"],

  // ── I/O ──
  "I/O":                ["I/O", "I/O"],
  "Tests":              ["Tests", "Tests"],
  "Clear":              ["Limpiar", "Clear"],

  // ── Tutorials ──
  "Tutorials":          ["Tutoriales", "Tutorials"],
  "Tutoriales FEM":     ["Tutoriales FEM: teoría + práctica interactiva", "FEM Tutorials: interactive theory + practice"],

  // ── Units ──
  "MKS":                ["MKS", "MKS"],
  "SI":                 ["SI", "SI"],
  "US":                 ["US", "US"],

  // ── Tooltips ──
  "Pantalla completa":            ["Pantalla completa", "Fullscreen"],
  "Ayuda interactiva":            ["Ayuda interactiva — Tour guiado", "Interactive help — Guided tour"],
  "Nuevo modelo vacío":           ["Nuevo modelo vacío", "New empty model"],
  "Exportar coordenadas":         ["Exportar coordenadas y datos del modelo", "Export model coordinates and data"],
  "Análisis modal":               ["Análisis modal (frecuencias y modos)", "Modal analysis (frequencies and modes)"],
  "Análisis no-lineal":           ["Análisis no-lineal dinámico (BRB + sismo)", "Nonlinear dynamic analysis (BRB + earthquake)"],
  "Pushover cíclico":             ["Pushover cíclico con histéresis", "Cyclic pushover with hysteresis"],
  "Report derivación":            ["Report Explained: derivación FEM paso a paso", "Report Explained: step-by-step FEM derivation"],
  "Calculadora FEM":              ["Calculadora FEM: editor MATLAB + output KaTeX", "FEM Calculator: MATLAB editor + KaTeX output"],
  "Ver log":                      ["Ver log del solver", "View solver log"],
  "CLI toggle":                   ["Abrir/cerrar consola CLI", "Open/close CLI console"],

  // ── Selection toolbar ──
  "Asignar sección":              ["Asignar sección", "Assign section"],
  "Info del elemento":            ["Info del elemento", "Element info"],
  "Ocultar seleccionados":        ["Ocultar seleccionados", "Hide selected"],
  "Aislar":                       ["Aislar (mostrar solo seleccionados)", "Isolate (show selected only)"],
  "Mostrar todo":                 ["Mostrar todo", "Show all"],
  "Eliminar seleccionados":       ["Eliminar seleccionados", "Delete selected"],
  "Limpiar selección":            ["Limpiar selección", "Clear selection"],

  // ── Parameters (units.ts) ──
  "Luz":                ["Luz", "Span"],
  "Altura":             ["Altura", "Height"],
  "Divisiones":         ["Divisiones", "Divisions"],
  "Discretización":     ["Discretización", "Discretization"],
  "Pisos":              ["Pisos", "Stories"],
  "N. Vanos":           ["N. Vanos", "N. Spans"],
  "Luz vano":           ["Luz vano", "Span length"],
  "N. Pisos":           ["N. Pisos", "N. Stories"],
  "h piso":             ["h piso", "Story h"],
  "Vanos X":            ["Vanos X", "Spans X"],
  "Vanos Y":            ["Vanos Y", "Spans Y"],
  "Div. Vigas":         ["Div. Vigas", "Beam Div."],
  "Div. Columnas":      ["Div. Columnas", "Col. Div."],
  "Largo":              ["Largo", "Length"],
  "Altura col":         ["Altura col", "Col. height"],
  "Flecha arco":        ["Flecha arco", "Arch rise"],
  "Div. X":             ["Div. X", "Div. X"],
  "Div. Y":             ["Div. Y", "Div. Y"],
  "L total":            ["L total", "Total L"],
  "Num elementos":      ["Num elementos", "Num elements"],
  "Mesh size":          ["Mesh", "Mesh size"],
  "Ancho Lx":           ["Ancho Lx", "Width Lx"],
  "Largo Ly":           ["Largo Ly", "Length Ly"],
  "H bajo":             ["H bajo", "H low"],
  "H alto":             ["H alto", "H high"],
  "Columnas/pórtico":   ["Columnas/pórtico", "Columns/portal"],
  "Correas":            ["Correas", "Purlins"],
  "E acero":            ["E acero", "E steel"],
  "E concreto":         ["E concreto", "E concrete"],
  "t panel":            ["t panel", "Panel t"],
  "q carga":            ["q carga", "q load"],
  "Espesor t":          ["Espesor t", "Thickness t"],
  "Mesh nx":            ["Mesh nx", "Mesh nx"],
  "Mesh ny":            ["Mesh ny", "Mesh ny"],
  "P lateral":          ["P lateral", "Lateral P"],
  "Ancho W":            ["Ancho W", "Width W"],
  "Alto H":             ["Alto H", "Height H"],
  "Ancho carga":        ["Ancho carga", "Load width"],
  "B base":             ["B base", "Base B"],
  "t muro":             ["t muro", "Wall t"],
  "t base":             ["t base", "Base t"],
  "gamma suelo":        ["γ suelo", "γ soil"],
  "q sobrecarga":       ["q sobrecarga", "q surcharge"],
  "E suelo":            ["E suelo", "E soil"],
  "v suelo":            ["ν suelo", "ν soil"],
  "v concreto":         ["ν concreto", "ν concrete"],
  "kn interfaz":        ["kn interfaz", "kn interface"],
  "ks interfaz":        ["ks interfaz", "ks interface"],
  "gamma agua":         ["γ agua", "γ water"],
  "H agua":             ["H agua", "Water H"],
  "Lx zapata":          ["Lx zapata", "Footing Lx"],
  "Ly zapata":          ["Ly zapata", "Footing Ly"],
  "t zapata":           ["t zapata", "Footing t"],
  "a columna":          ["a columna", "Col. width"],
  "h pedestal":         ["h pedestal", "Pedestal h"],
  "P axial":            ["P axial", "Axial P"],
  "ks":                 ["ks", "ks"],
  "N pernos":           ["N pernos", "N bolts"],
  "d perno":            ["d perno", "Bolt d"],
  "Sep. pernos X":      ["Sep. pernos X", "Bolt spacing X"],
  "Sep. pernos Y":      ["Sep. pernos Y", "Bolt spacing Y"],
  "Col a":              ["Col a", "Col a"],
  "Col b":              ["Col b", "Col b"],
  "Col h":              ["Col h", "Col h"],
  "Col t":              ["Col t", "Col t"],
  "Col altura":         ["Col altura", "Col height"],
  "Placa Lx":           ["Placa Lx", "Plate Lx"],
  "Placa Ly":           ["Placa Ly", "Plate Ly"],
  "Placa t":            ["Placa t", "Plate t"],
  "Col subdiv V":       ["Col subdiv V", "Col subdiv V"],
  "Col subdiv H":       ["Col subdiv H", "Col subdiv H"],
  "Placa subdiv":       ["Placa subdiv", "Plate subdiv"],
  "Peralte h":          ["Peralte h", "Depth h"],
  "Luz L":              ["Luz L", "Span L"],
  "Col d":              ["Col d", "Col d"],
  "Col bf":             ["Col bf", "Col bf"],
  "Col tf":             ["Col tf", "Col tf"],
  "Col tw":             ["Col tw", "Col tw"],
  "Vig d":              ["Vig d", "Beam d"],
  "Vig bf":             ["Vig bf", "Beam bf"],
  "Vig tf":             ["Vig tf", "Beam tf"],
  "Vig tw":             ["Vig tw", "Beam tw"],
  "Corr b":             ["Corr b", "Purlin b"],
  "Corr t":             ["Corr t", "Purlin t"],
  "F axial":            ["F axial", "Axial F"],
  "nx elem":            ["nx elem", "nx elem"],
  "ny elem":            ["ny elem", "ny elem"],
  "Mesh nz":            ["Mesh nz", "Mesh nz"],
  "Sep pernos X":       ["Sep pernos X", "Bolt spacing X"],
  "Sep pernos Y":       ["Sep pernos Y", "Bolt spacing Y"],
  "Angulo":             ["Ángulo", "Angle"],
  "b top":              ["b top", "Top b"],
  "b base":             ["b base", "Base b"],
  "Cohesion c":         ["Cohesión c", "Cohesion c"],
  "Friccion φ":         ["Fricción φ", "Friction φ"],
  "Sobrecarga":         ["Sobrecarga", "Surcharge"],
  "P puntual":          ["P puntual", "Point P"],

  // ── Load params ──
  "CM":                 ["CM", "DL"],
  "CV":                 ["CV", "LL"],
  "Ex sismo":           ["Ex sismo", "Ex seismic"],
  "Ey sismo":           ["Ey sismo", "Ey seismic"],
  "P borde":            ["P borde", "Edge P"],

  // ── Support types ──
  "Empotrado":          ["Empotrado", "Fixed"],
  "Articulado":         ["Articulado", "Pinned"],
  "Roller Z":           ["Roller Z", "Roller Z"],
  "Simply Supported":   ["Simplemente apoyado", "Simply Supported"],
  "Winkler (k)":        ["Winkler (k)", "Winkler (k)"],
  "Emp-Libre":          ["Emp-Libre", "Fixed-Free"],
  "Emp-Emp":            ["Emp-Emp", "Fixed-Fixed"],
  "Emp-Art":            ["Emp-Art", "Fixed-Pinned"],
  "Rankine (Ka)":       ["Rankine (Ka)", "Rankine (Ka)"],
  "Suelo continuo":     ["Suelo continuo", "Continuous soil"],
  "Interfaz":           ["Interfaz", "Interface"],
  "Presion agua":       ["Presión agua", "Water pressure"],
  "Pin (w=0)":          ["Pin (w=0)", "Pin (w=0)"],
  "Simplemente apoyado": ["Simplemente apoyado", "Simply Supported"],
  "Pernos empotrados":  ["Pernos empotrados", "Fixed bolts"],

  // ── Structural categories ──
  "Losas":              ["Losas", "Slabs"],
  "Zapatas":            ["Zapatas", "Footings"],
  "Diagonales":         ["Diagonales", "Braces"],
  "Muros":              ["Muros", "Walls"],
  "Aberturas":          ["Aberturas", "Openings"],
  "Refuerzo":           ["Refuerzo", "Reinforcement"],
  "Placas":             ["Placas", "Plates"],
  "Pernos":             ["Pernos", "Bolts"],
  "Otros":              ["Otros", "Others"],

  // ── Building sections panel ──
  "Piso":               ["Piso", "Floor"],
  "Vigas X":            ["Vigas X", "Beams X"],
  "Vigas Y":            ["Vigas Y", "Beams Y"],
  "Vigas Secundarias":  ["Vigas Secundarias", "Secondary Beams"],
  "Losas de Piso":      ["Losas de Piso", "Floor Slabs"],
  "Muros de Corte":     ["Muros de Corte", "Shear Walls"],
  "Rangos":             ["Rangos", "Ranges"],
  "Luces X":            ["Luces X", "Spans X"],
  "Luces Y":            ["Luces Y", "Spans Y"],
  "Alturas por Piso":   ["Alturas por Piso", "Heights per Floor"],

  // ── Parameters panel title ──
  "Parameters":         ["Parámetros", "Parameters"],

  // ── Sections panel ──
  "Secciones":          ["Secciones", "Sections"],
  "Col Material":       ["Col Material", "Col Material"],
  "Hormigon":           ["Hormigón", "Concrete"],
  "Acero":              ["Acero", "Steel"],
  "Col forma":          ["Col forma", "Col shape"],
  "Rectangular":        ["Rectangular", "Rectangular"],
  "Circular":           ["Circular", "Circular"],
  "Col tipo":           ["Col tipo", "Col type"],
  "Tubular":            ["Tubular", "Tubular"],
  "Viga Material":      ["Viga Material", "Beam Material"],
  "Viga tipo":          ["Viga tipo", "Beam type"],
  "Columna":            ["Columna", "Column"],
  "Activar":            ["Activar", "Enable"],
  "Corren en":          ["Corren en", "Run along"],
  "X (entre ejes Y)":   ["X (entre ejes Y)", "X (between Y axes)"],
  "Y (entre ejes X)":   ["Y (entre ejes X)", "Y (between X axes)"],
  "Cantidad/vano":      ["Cantidad/vano", "Qty/span"],
  "Activar losas":      ["Activar losas", "Enable slabs"],
  "Espesor":            ["Espesor", "Thickness"],
  "Vano":               ["Vano", "Span"],
  "vanos":              ["vanos", "spans"],
  "ubicaciones":        ["ubicaciones", "locations"],

  // ── Plate theory ──
  "Teoría":             ["Teoría", "Theory"],
  "Membrana":           ["Membrana", "Membrane"],
  "Kirchhoff (delgada)": ["Kirchhoff (delgada)", "Kirchhoff (thin)"],
  "Mindlin (gruesa)":   ["Mindlin (gruesa)", "Mindlin (thick)"],

  // ── Loads panel ──
  "Cargas Estáticas":   ["Cargas Estáticas", "Static Loads"],
  "Cargas":             ["Cargas", "Loads"],
  "Luces":              ["Luces", "Spans"],

  // ── Axis/Floor buttons ──
  "Ejes":               ["Ejes", "Axes"],
  "Eje":                ["Eje", "Axis"],
  "Planta":             ["Planta", "Plan"],
  "elevación mirando en": ["elevación mirando en", "elevation looking at"],

  // ── Support ──
  "Apoyo":              ["Apoyo", "Support"],
  "Apoyos":             ["Apoyos", "Supports"],
  "Apoyos fijos":       ["Apoyos fijos", "Fixed supports"],
  "Escala deformación": ["Escala deformación", "Deform scale"],
  "Apoyos DOFs":        ["Apoyos DOFs", "Support DOFs"],
  "Apoyo Ux":           ["Apoyo Ux", "Support Ux"],
  "Apoyo Uy":           ["Apoyo Uy", "Support Uy"],
  "Apoyo Uz":           ["Apoyo Uz", "Support Uz"],
  "Apoyo Rx":           ["Apoyo Rx", "Support Rx"],
  "Apoyo Ry":           ["Apoyo Ry", "Support Ry"],
  "Apoyo Rz":           ["Apoyo Rz", "Support Rz"],

  // ── Solver log ──
  "nodos":              ["nodos", "nodes"],
  "Ensamblaje":         ["Ensamblaje", "Assembly"],
  "Triángulos":         ["Triángulos", "Triangles"],
  "libres":             ["libres", "free"],

  // ── Element info panel ──
  "Elemento":           ["Elemento", "Element"],
  "Tipo":               ["Tipo", "Type"],
  "Viga":               ["Viga", "Beam"],
  "Sección":            ["Sección", "Section"],
  "Eliminar":           ["Eliminar", "Delete"],
  "Nodo":               ["Nodo", "Node"],
  "fijos":              ["fijos", "fixed"],
  "de":                 ["de", "of"],
  "Cargas aplicadas":   ["Cargas aplicadas", "Applied loads"],

  // ── Assign section dialog ──
  "Perfil":             ["Perfil", "Profile"],
  "Paramétrica":        ["Paramétrica", "Parametric"],
  "Tubular Hueca":      ["Tubular Hueca", "Hollow Tube"],
  "Tubo relleno concreto": ["Tubo relleno concreto", "Concrete-filled tube"],

  // ── IFC import ──
  "Modelo Analítico":   ["Modelo Analítico", "Analytical Model"],
};

/**
 * Translate a key. Returns the string in the current language.
 * If key not found, returns the key itself.
 */
export function tr(key: string): string {
  const entry = D[key];
  if (!entry) return key;
  return _lang === "es" ? entry[0] : entry[1];
}

/**
 * Update all DOM elements with data-i18n attribute.
 * Call this after setLang() to refresh the UI.
 */
export function updateDomTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = (el as HTMLElement).dataset.i18n!;
    const translated = tr(key);
    if (el.tagName === "INPUT" || el.tagName === "SELECT") {
      (el as HTMLInputElement).placeholder = translated;
    } else {
      el.textContent = translated;
    }
  });
  // Also update title attributes
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = (el as HTMLElement).dataset.i18nTitle!;
    (el as HTMLElement).title = tr(key);
  });
}
