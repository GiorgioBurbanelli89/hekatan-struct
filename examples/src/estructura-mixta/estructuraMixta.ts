/**
 * 🧬 ESTRUCTURA MIXTA — un edificio real, entero, leído de su `.e2k`.
 *
 * Los demás ejemplos construyen su modelo con código: se eligen las luces y los
 * pisos y sale una malla limpia. Éste no. Éste es un **encargo de verdad**
 * —anonimizado— que se lee tal cual del `.e2k` que escribió ETABS, con todo lo
 * que un modelo real tiene y un ejemplo de laboratorio nunca:
 *
 *   · **seis familias de material a la vez**: hormigón de tres resistencias
 *     (f'c 210 / 240 / 280), acero laminado (A36, A572Gr50, A992, A500 Gr.B),
 *     acero conformado en frío (A653SQ Gr33 y Gr50), armadura (fy 4200),
 *     poliestireno expandido y **MADERA**
 *   · **CFT** — tubos de acero rellenos de hormigón, de 125×125 a 400×400
 *   · pilotes de hormigón circulares de Ø40, Ø60 y Ø80
 *   · correas en C conformadas en frío, deck, losas y muros
 *   · cotas de −1.00 m (cimentación) a +12.80 m
 *
 * ## Para qué está aquí
 *
 * Un ejemplo generado por código solo prueba lo que el generador sabe hacer.
 * Éste prueba **el importador contra el dialecto de ETABS**: se lee con el
 * mismo `parseE2k` que usa el botón «📥 Importar E2K», así que si el lector se
 * rompe, este ejemplo deja de salir — y eso se ve.
 *
 * Vino de ahí un arreglo de fondo (2026-08-28): el parser **contaba** las áreas
 * y no montaba ninguna, y **no convertía ninguna unidad**. Este fichero va en
 * **KGF y M**, así que servía además para pillar lo segundo: si la conversión
 * no estuviera, las cotas saldrían mil veces más grandes.
 *
 * ## Lo que NO entra, y por qué
 *
 * **No resuelve, y no es un descuido**: es un ejemplo de IMPORTACIÓN. El
 * estático sale singular porque el modelo importado no queda del todo cosido
 * —311 nudos tocan una sola barra— y eso está anotado como abierto. Lo que sí
 * demuestra es que el fichero entra ENTERO, que es lo que se quería probar.
 *
 * De sus 79 áreas se montan 76. Una es un **polígono de seis lados**, que ETABS
 * admite y `hekatan-fem` no (tiene Q4 y T3); triangularla a ciegas daría
 * elementos volteados si no es convexa. Las otras dos no resuelven su
 * `AREAASSIGN`. El parser lo dice por consola con la causa: se pierden, pero no
 * en silencio.
 */
import { deform, analyze, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { parseE2k } from "../shared/e2kParser";
// El `.e2k` va embebido como texto (ver `modelo.ts`): es el modelo, no un dato
// de entrada. Está
// recortado a los bloques que definen la ESTRUCTURA (se le quitaron los de
// diseño, las combinaciones y el log: 1621 KB → 233 KB) y anonimizado.
import { modeloE2k } from "./modelo";

export const estructuraMixta: ExampleDef = {
  id: "estructura-mixta",
  name: "🧬 Estructura mixta — hormigón + acero + CFT + madera (modelo real)",
  category: "4️⃣ Mixtos · 🏢 Edificios",
  defaultShellResult: "displacementZ",
  availableShellResults: ["displacementZ", "vonMises", "bendingXX", "bendingYY",
                          "membraneXX", "membraneYY"],
  params: {
    // El modelo viene dado: no hay luces ni pisos que tocar. Lo único que se
    // ofrece es CÓMO mirarlo, y un factor para escalar sus cargas.
    fCarga: { default: 1.0, min: 0, max: 2, step: 0.05,
              label: "factor de carga", folder: "⬇ Cargas" },
    // ⚠️ Por defecto NO se resuelve, y es a proposito.
    //
    // Este ejemplo esta aqui para demostrar la IMPORTACION: que un `.e2k` real
    // de ETABS entra entero —786 nudos, 746 barras, 76 areas, 15 materiales,
    // 90 secciones, con CFT, conformado en frio y madera— y se ve. El
    // ANALISIS es otra cosa y hoy no cierra: la matriz sale singular.
    //
    // Medido (2026-08-28), y NO es por falta de propiedades —las 746 barras
    // tienen area e inercia, incluidas las 54 del Section Designer—: el modelo
    // importado no queda del todo conectado. 311 de sus nudos tocan UNA sola
    // barra y nada mas, y 47 solo tocan cascaras. Un modelo de ETABS se cose
    // ademas con lo que el `.e2k` no trae o el lector aun no monta (muelles de
    // pilote, links, releases), y sin eso quedan trozos sueltos.
    //
    // Ponerlo en "Si" deja ver el aviso y el modelo igual: no se rompe nada,
    // simplemente no hay desplazamientos que pintar.
    resolver: { default: 0, options: { "Solo el modelo": 0, "Intentar resolver": 1 },
                label: "análisis", folder: "⬇ Cargas" },
  },
  build(p, states) {
    const m = parseE2k(modeloE2k);

    // El parser ya devuelve todo en kN y m — el fichero va en KGF/M y la
    // conversión es suya, no de aquí.
    const nodes = m.nodes as Node[];
    const elements = m.elements as Element[];
    const ni: any = { ...m.nodeInputs };
    const ei: any = { ...m.elementInputs };

    if (p.fCarga !== 1 && ni.loads instanceof Map) {
      const esc = new Map<number, number[]>();
      for (const [i, v] of ni.loads) esc.set(i, v.map((x: number) => x * p.fCarga));
      ni.loads = esc;
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = ni;
    states.elementInputs.val = ei;
    states.objects3D.val = [];

    const nBarras = elements.filter(e => e.length === 2).length;
    const nShells = elements.length - nBarras;
    const zs = nodes.map(n => n[2]);
    console.info(
      `[Estructura mixta] ${nodes.length} nudos · ${nBarras} barras · ${nShells} cáscaras · ` +
      `cotas ${Math.min(...zs).toFixed(2)} a ${Math.max(...zs).toFixed(2)} m · ` +
      `${m.materials.size} materiales · ${m.frameSections.size} secciones · ` +
      `leído de un .e2k en ${m.units.force}/${m.units.length}`);

    if (!p.resolver) return;

    // ── Fuera los nudos HUERFANOS antes de resolver ──────────────────────
    //
    // Un modelo real trae nudos que no tocan ningún elemento: puntos de la
    // rejilla, esquinas de un área que no se pudo montar, restos de una
    // edición. En ETABS no molestan; aquí son **6 GDL sin una sola rigidez**
    // cada uno, y la matriz sale singular — `LDLT failed (K may not be
    // positive definite)` y ni un desplazamiento. Este modelo trae 25.
    //
    // Se quitan y se renumera. Se hace AQUÍ y no en el parser a propósito: el
    // parser debe devolver lo que el fichero dice, huérfanos incluidos, porque
    // para DIBUJAR el modelo importado esos puntos existen.
    const usado = new Set<number>();
    for (const el of elements) for (const n of el) usado.add(n);
    const huerfanos = nodes.length - usado.size;
    if (huerfanos > 0) {
      const viejoANuevo = new Map<number, number>();
      const nodos2: Node[] = [];
      nodes.forEach((n, i) => {
        if (!usado.has(i)) return;
        viejoANuevo.set(i, nodos2.length);
        nodos2.push(n);
      });
      const elems2 = elements.map(el => el.map(i => viejoANuevo.get(i)!) as unknown as Element);
      const remapMapa = (m: unknown) => {
        if (!(m instanceof Map)) return m;
        const out = new Map();
        for (const [i, v] of m) {
          const j = viejoANuevo.get(i as number);
          if (j !== undefined) out.set(j, v);
        }
        return out;
      };
      ni.supports = remapMapa(ni.supports);
      ni.loads = remapMapa(ni.loads);
      states.nodes.val = nodos2;
      states.elements.val = elems2;
      states.nodeInputs.val = ni;
      console.info(`[Estructura mixta] ${huerfanos} nudos sin ningún elemento: fuera ` +
        `(cada uno son 6 GDL sin rigidez y la matriz saldría singular).`);
    }

    const nod = states.nodes.val as Node[];
    const ele = states.elements.val as Element[];
    try {
      states.deformOutputs.val = deform(nod, ele, states.nodeInputs.val, ei);
      states.analyzeOutputs.val = analyze(nod, ele, ei, states.deformOutputs.val);
      const d = states.deformOutputs.val.deformations;
      if (!d || d.size === 0) {
        console.warn("[Estructura mixta] el solver devolvió 0 desplazamientos: " +
          "queda alguna parte sin sujetar. El modelo se ve igual.");
      }
    } catch (e) {
      console.error("[Estructura mixta] el solver no cerró:", e);
    }
  },
};
