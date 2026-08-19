"""Screenshot la sección K_e integral."""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

HERE = Path(__file__).parent


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width": 1000, "height": 600},
                                   device_scale_factor=2)
        page = await ctx.new_page()
        await page.goto((HERE / "benchmark_platethick_mitc4.html").resolve().as_uri(),
                        wait_until="networkidle")
        await page.wait_for_timeout(1200)
        await page.evaluate("""
            () => {
                const all = document.querySelectorAll('h4, p');
                for (const el of all) {
                    if (el.textContent.includes('K_e = K_b + K_s')) {
                        el.scrollIntoView({block:'start'});
                        return;
                    }
                }
            }
        """)
        await page.wait_for_timeout(400)
        await page.screenshot(path=str(HERE / "ke_integral_screenshot.png"),
                               clip={"x": 0, "y": 0, "width": 1000, "height": 600})
        await b.close()


asyncio.run(main())
print("Saved ke_integral_screenshot.png")
