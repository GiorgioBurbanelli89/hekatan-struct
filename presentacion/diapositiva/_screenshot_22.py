"""Screenshot full slide 22 para verificar render."""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

HERE = Path(__file__).parent
HTML = HERE / "22_platethin_explicado_cero.html"
OUT = HERE / "22_platethin_explicado_cero_preview.png"


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width": 980, "height": 800},
                                   device_scale_factor=2)
        page = await ctx.new_page()
        await page.goto(HTML.resolve().as_uri(), wait_until="networkidle")
        await page.wait_for_timeout(1500)  # MathJax
        await page.screenshot(path=str(OUT), full_page=True)
        await b.close()
    print(f"Saved: {OUT}")


asyncio.run(main())
