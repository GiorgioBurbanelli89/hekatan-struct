"""Screenshot full viewer.html to verify WASM render works."""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

HERE = Path(__file__).parent
HTML = HERE / "viewer.html"
OUT = HERE / "viewer_preview.png"


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width": 1400, "height": 900},
                                   device_scale_factor=2)
        page = await ctx.new_page()
        url = HTML.resolve().as_uri()
        print(f"Loading {url}")
        await page.goto(url, wait_until="domcontentloaded", timeout=30000)
        # wait for WASM + 4 solves to complete (status should turn green)
        try:
            await page.wait_for_function(
                "document.querySelector('#status')?.classList.contains('ok') && "
                "document.querySelectorAll('.plot-area .plotly').length === 16",
                timeout=30_000,
            )
        except Exception as e:
            print(f"Wait failed: {e}")
        await page.wait_for_timeout(1500)
        await page.screenshot(path=str(OUT), full_page=True)

        # capture console logs
        logs = await page.evaluate("() => (window.__logs || [])")
        # capture text content of value cards
        vals = await page.evaluate("""
            () => [0,1,2,3].map(i => document.querySelector('#vals_'+i)?.innerText || '')
        """)
        print("Values:")
        for i, v in enumerate(['BFS', 'DKQ', 'Melosh', 'Mindlin']):
            print(f"--- {v} ---")
            print(vals[i])

        status = await page.evaluate("() => document.querySelector('#status').textContent")
        print(f"\nStatus: {status}")

        await b.close()
    print(f"\nSaved: {OUT}")


asyncio.run(main())
