import { parseIfcToAnalytical } from '../examples/src/shared/ifcAnalyticalParser.ts';
import fs from 'fs';

const output = document.getElementById('output')!;
const btn = document.getElementById('btn-run')!;

function log(msg: string, cls?: string) {
  const span = document.createElement('span');
  span.textContent = msg + '\n';
  if (cls) span.className = cls;
  output.appendChild(span);
}

btn.addEventListener('click', async () => {
  output.textContent = '';
  log('Loading IFC file...');

  try {
    // Fetch the IFC file from the ifc folder
    const resp = await fetch('/ifc/vivienda Silvia sin escalera.ifc');
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const text = await resp.text();
    log(`File loaded: ${(text.length / 1024).toFixed(0)} KB`, 'ok');

    const t0 = performance.now();
    const result = parseIfcToAnalytical(text);
    const dt = (performance.now() - t0).toFixed(0);

    log(`\n=== Parsed in ${dt} ms ===`, 'ok');
    log(`Nodes: ${result.nodes.length}`);
    log(`Elements: ${result.elements.length}`);

    // Count by category
    const cats: Record<string, number> = {};
    for (const el of result.elements) {
      cats[el.category] = (cats[el.category] || 0) + 1;
    }
    log(`\nBy category:`);
    for (const [cat, count] of Object.entries(cats)) {
      log(`  ${cat}: ${count}`, 'ok');
    }

    // Sections
    const secs: Record<string, number> = {};
    for (const el of result.elements) {
      secs[el.sectionName] = (secs[el.sectionName] || 0) + 1;
    }
    log(`\nSections:`);
    for (const [sec, count] of Object.entries(secs)) {
      log(`  ${sec}: ${count} elem`);
    }

    // First 10 nodes
    log(`\nFirst 10 nodes:`);
    for (const n of result.nodes.slice(0, 10)) {
      log(`  N${n.id}: (${n.x.toFixed(3)}, ${n.y.toFixed(3)}, ${n.z.toFixed(3)})`);
    }

    // First 15 elements
    log(`\nFirst 15 elements:`);
    for (const el of result.elements.slice(0, 15)) {
      log(`  E${el.id} [${el.category}] ${el.type} nodes=[${el.nodeIds.join(',')}] ${el.sectionName}`);
    }

    // Validation checks
    log(`\n=== Validation ===`);
    const frames = result.elements.filter(e => e.type === 'frame');
    const shells = result.elements.filter(e => e.type === 'shell');
    log(`Frames: ${frames.length}`, frames.length > 0 ? 'ok' : 'err');
    log(`Shells: ${shells.length}`, shells.length > 0 ? 'ok' : 'err');

    // Check node merging
    const uniqueCoords = new Set(result.nodes.map(n => `${n.x.toFixed(3)},${n.y.toFixed(3)},${n.z.toFixed(3)}`));
    log(`Unique node positions: ${uniqueCoords.size}/${result.nodes.length}`,
      uniqueCoords.size === result.nodes.length ? 'ok' : 'err');

    // Check all frame elements have 2 nodes
    const badFrames = frames.filter(f => f.nodeIds.length !== 2);
    log(`Frames with 2 nodes: ${frames.length - badFrames.length}/${frames.length}`,
      badFrames.length === 0 ? 'ok' : 'err');

    log(`\n✅ TEST COMPLETE`, 'ok');

  } catch (err: any) {
    log(`\n❌ ERROR: ${err.message}`, 'err');
    log(err.stack || '', 'err');
  }
});
