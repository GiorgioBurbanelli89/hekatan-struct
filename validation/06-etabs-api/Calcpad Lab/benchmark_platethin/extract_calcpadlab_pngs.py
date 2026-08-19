"""
Extrae cada figura de un HTML de Calcpad-Lab como PNG individual.

Calcpad-Lab emite plotly-JS interactivos dentro de <div id="matlab_plot_N">.
Para obtener PNGs comparables a los de MATLAB (saveas), abrimos el HTML
en un browser headless (Playwright + Chromium) y screenshoteamos cada div.

Uso:
    python extract_calcpadlab_pngs.py <html_path> [--outdir OUTDIR]

Si se omite html_path, procesa los 3 .html del benchmark_platethin:
    benchmark_platethin_BFS.html
    benchmark_platethin_DKQ.html
    benchmark_platethin_Melosh.html
"""
import os
import sys
import re
import argparse
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

THIS_DIR = Path(__file__).parent


async def extract_pngs(html_path: Path, out_dir: Path, prefix: str | None = None):
    """Abre html_path en Chromium headless y screenshotea cada matlab_plot_N."""
    out_dir.mkdir(parents=True, exist_ok=True)
    prefix = prefix or html_path.stem

    # Asegurar URL file:// absoluta
    url = html_path.resolve().as_uri()
    print(f"\n  HTML: {html_path.name}")
    print(f"  URL : {url}")

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        ctx = await browser.new_context(viewport={"width": 1100, "height": 800},
                                         device_scale_factor=2)
        page = await ctx.new_page()
        await page.goto(url, wait_until="networkidle", timeout=60_000)

        # Esperar que plotly termine de renderizar (network_idle ya lo cubre, pero por si acaso)
        try:
            await page.wait_for_function(
                "document.querySelectorAll('.matlab-plot .plotly').length > 0 || "
                "document.querySelectorAll('[data-anchor=\"matlab_plot_1\"]').length > 0",
                timeout=10_000,
            )
        except Exception:
            pass
        await page.wait_for_timeout(800)  # margen extra para fonts/colorbar

        # Encontrar todos los divs matlab_plot_N
        plot_ids = await page.evaluate(
            "Array.from(document.querySelectorAll('div[id^=\"matlab_plot_\"]')).map(d => d.id)"
        )
        print(f"  Plots detectados: {len(plot_ids)}")

        saved = []
        for i, pid in enumerate(sorted(plot_ids,
                                        key=lambda s: int(re.search(r"\d+", s).group())), 1):
            handle = await page.query_selector(f"#{pid}")
            if handle is None:
                continue
            out_path = out_dir / f"{prefix}_fig{i}.png"
            await handle.screenshot(path=str(out_path))
            saved.append(out_path)
            print(f"  [OK] fig{i}: {out_path.name}")

        # Bonus: si hay PNGs base64 embebidos (no típico en Calcpad-Lab pero
        # por si acaso), también los extraemos:
        html_text = html_path.read_text(encoding="utf-8", errors="ignore")
        b64_imgs = re.findall(
            r'<img[^>]*src="data:image/png;base64,([A-Za-z0-9+/=]+)"',
            html_text, re.IGNORECASE | re.DOTALL,
        )
        if b64_imgs:
            import base64
            for k, b64 in enumerate(b64_imgs, 1):
                out_path = out_dir / f"{prefix}_embedded_b64_{k}.png"
                out_path.write_bytes(base64.b64decode(b64))
                print(f"  [OK] base64 embedded: {out_path.name}")
                saved.append(out_path)

        await browser.close()
    return saved


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("html_path", nargs="?", default=None,
                    help="Ruta al .html. Si se omite, procesa los 3 del benchmark.")
    ap.add_argument("--outdir", default=None,
                    help="Directorio destino. Default = misma carpeta + /figs_calcpadlab/")
    args = ap.parse_args()

    if args.html_path:
        paths = [Path(args.html_path)]
    else:
        # batch: los 3 .html del benchmark_platethin
        paths = sorted(THIS_DIR.glob("benchmark_platethin_*.html"))
        print(f"Modo batch: {len(paths)} HTMLs")

    out_dir = Path(args.outdir) if args.outdir else (THIS_DIR / "figs_calcpadlab")

    for p in paths:
        if not p.exists():
            print(f"  [SKIP] no existe: {p}")
            continue
        await extract_pngs(p, out_dir)

    print(f"\n  PNGs guardados en: {out_dir}")


if __name__ == "__main__":
    asyncio.run(main())
