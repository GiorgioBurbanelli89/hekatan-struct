"""Screenshot solo la sección de cita de Wilson (sección 4)."""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

HERE = Path(__file__).parent
HTML = HERE / "22_platethin_explicado_cero.html"
OUT = HERE / "22_seccion4_citas.png"


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width": 980, "height": 800},
                                   device_scale_factor=2)
        page = await ctx.new_page()
        await page.goto(HTML.resolve().as_uri(), wait_until="networkidle")
        await page.wait_for_timeout(1500)
        # Encontrar el header de la sección 4 y screenshot desde ahí hasta sección 5
        await page.evaluate("""
            const h2s = Array.from(document.querySelectorAll('h2'));
            const target = h2s.find(h => h.textContent.includes('4. ¿De dónde'));
            if (target) target.scrollIntoView({ block: 'start' });
        """)
        await page.wait_for_timeout(500)
        # capturar solo la sección 4
        section_handle = await page.query_selector('section:has(h2:text-matches("4\\. ¿De"))')
        if section_handle:
            await section_handle.screenshot(path=str(OUT))
        else:
            await page.screenshot(path=str(OUT), clip={"x":0, "y":0, "width":980, "height":1200})
        await b.close()
    print(f"Saved: {OUT}")


asyncio.run(main())
