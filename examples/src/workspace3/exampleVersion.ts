/**
 * Versión monotónica del ejemplo activo.
 * Se incrementa cada vez que el workspace carga un ejemplo nuevo.
 *
 * Se aloja en un módulo separado (no en exampleRegistry) para evitar TDZ
 * por import circular: los ejemplos individuales pueden importar
 * `activeExampleVersion` SIN traer el exampleRegistry (que a su vez los importa).
 *
 * Uso: un ejemplo con `van.derive` reactivo (ej. zapata con springs 3D que siguen
 * la deformada) captura el valor al construir y hace no-op si ya no coincide —
 * así evita que la lógica de un ejemplo viejo siga ejecutándose tras cambiar.
 */
export const activeExampleVersion = { v: 0 };
