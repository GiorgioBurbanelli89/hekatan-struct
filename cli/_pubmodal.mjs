import puppeteer from "puppeteer";
const nav = await puppeteer.launch({headless:"new",
  args:["--no-sandbox","--disable-setuid-sandbox","--enable-unsafe-swiftshader","--use-angle=swiftshader"]});
const p = await nav.newPage(); await p.setViewport({width:1500,height:1000});
const errs=[]; p.on("pageerror",e=>errs.push(e.message));
await p.goto("https://giorgioburbanelli89.github.io/hekatan-struct-lineal/workspace/?t=test-m-dual",
             {waitUntil:"networkidle2",timeout:180000});
await new Promise(r=>setTimeout(r,12000));
await p.keyboard.press("Escape");
// "Correr modal + animar" y "Mostrar tabla de modos"
const clic = await p.evaluate(()=>{
  const btn = Array.from(document.querySelectorAll("button"))
    .find(b=>/Correr modal/i.test(b.textContent||""));
  if(!btn) return "no esta el boton";
  btn.click(); return "ok";
});
await new Promise(r=>setTimeout(r,25000));
await p.evaluate(()=>{ const f=Array.from(document.querySelectorAll(".tp-lblv"))
  .find(x=>/Tabla de modos/i.test(x.textContent||"")); const c=f?.querySelector("input[type=checkbox]");
  if(c&&!c.checked) c.click(); });
await new Promise(r=>setTimeout(r,4000));
const t = await p.evaluate(()=>{
  const el = document.querySelector("#hk-modal-panel, .modal-panel, [id*=modal]");
  const txt = (el?.innerText || document.body.innerText);
  const i = txt.search(/Modo|UX/i);
  return i>=0 ? txt.slice(i, i+700) : txt.slice(0,400);
});
console.log("boton:", clic, "| pageerror:", errs.length);
console.log(t);
await p.screenshot({path:"cli/shots/publico_test-m-dual_modal.png"});
await nav.close();
