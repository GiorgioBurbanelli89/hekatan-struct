"""Screenshot solo la sección Mxy y la tarjeta de valores."""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

HERE = Path(__file__).parent
HTML = HERE / "viewer.html"


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width": 1400, "height": 900},
                                   device_scale_factor=2)
        page = await ctx.new_page()
        await page.goto(HTML.resolve().as_uri(), wait_until="domcontentloaded")
        await page.wait_for_function(
            "document.querySelectorAll('.plot-area .plotly').length === 16",
            timeout=30_000,
        )
        await page.wait_for_timeout(1200)

        # Screenshot value cards (las 4 tarjetas de números)
        cards = await page.query_selector('.formulaciones')
        if cards:
            await cards.screenshot(path=str(HERE / "viewer_cards.png"))

        # Screenshot Mxy section (el grid de 4 plots Mxy)
        h2_mxy = await page.evaluate("""
            () => {
                const h2s = Array.from(document.querySelectorAll('h2'));
                const m = h2s.find(h => h.textContent.includes('Mxy') || h.textContent.includes('torsor'));
                return m ? Array.from(document.body.children).indexOf(m) : -1;
            }
        """)
        # screenshot el grid Mxy directamente
        await page.evaluate("""
            () => {
                const cells = document.querySelectorAll('div[id^="plot_mxy_"]');
                if (cells.length > 0) {
                    const grid = cells[0].closest('.plot-grid');
                    grid.scrollIntoView({ block: 'center' });
                }
            }
        """)
        await page.wait_for_timeout(500)
        mxy_grid = await page.query_selector("xpath=//h2[contains(., 'M') and (contains(., 'xy') or contains(., 'torsor'))]/following-sibling::div[1]")
        if mxy_grid:
            await mxy_grid.screenshot(path=str(HERE / "viewer_mxy_grid.png"))

        await b.close()
    print("Saved viewer_cards.png and viewer_mxy_grid.png")


asyncio.run(main())
