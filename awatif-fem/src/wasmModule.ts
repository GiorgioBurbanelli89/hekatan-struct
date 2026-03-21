import createModule from "./cpp/built/deform.js";

// Singleton WASM module instance shared across all solvers
// @ts-ignore
const mod = await createModule();

export default mod;
