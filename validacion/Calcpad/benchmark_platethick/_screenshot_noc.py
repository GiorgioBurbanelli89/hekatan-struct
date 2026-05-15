"""Screenshot la sección de fórmulas #noc del HTML."""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

HERE = Path(__file__).parent


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width": 1000, "height": 900},
                                   device_scale_factor=2)
        page = await ctx.new_page()
        await page.goto((HERE / "benchmark_platethick_mitc4.html").resolve().as_uri(),
                        wait_until="networkidle")
        await page.wait_for_timeout(1500)

        # Buscar la sección que contiene "K_e,ij" — fórmula con $Area
        await page.evaluate("""
            () => {
                const all = document.querySelectorAll('p, h4, div');
                for (const el of all) {
                    if (el.textContent.includes('Curvaturas')) {
                        el.scrollIntoView({block:'start'});
                        return;
                    }
                }
            }
        """)
        await page.wait_for_timeout(500)
        await page.screenshot(path=str(HERE / "noc_formulas_screenshot.png"),
                               clip={"x": 0, "y": 0, "width": 1000, "height": 1100})
        await b.close()
    print("Saved noc_formulas_screenshot.png")


asyncio.run(main())
