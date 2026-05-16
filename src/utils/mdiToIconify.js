/**
 * Convierte nombre estilo Vuetify (mdi-foo) a ID Iconify (mdi:foo).
 * @param {string} name
 * @returns {string}
 */
export function mdiToIconify(name) {
  if (!name || typeof name !== 'string') return ''
  const s = name.trim()
  if (s.startsWith('mdi:')) return s
  return `mdi:${s.replace(/^mdi-/, '')}`
}
