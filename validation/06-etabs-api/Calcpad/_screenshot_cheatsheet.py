import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

HERE = Path(__file__).parent


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width": 980, "height": 800},
                                   device_scale_factor=2)
        page = await ctx.new_page()
        await page.goto((HERE / "noc_operators_cheatsheet.html").resolve().as_uri(),
                        wait_until="networkidle")
        await page.wait_for_timeout(1200)
        await page.screenshot(path=str(HERE / "noc_cheatsheet_preview.png"),
                               full_page=True)
        await b.close()


asyncio.run(main())
print("Saved")
