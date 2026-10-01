/**
 * =========================================================
 *  Lazy loader untuk dependency native (Canvas).
 *
 *  Dipakai bersama oleh image-tools.mjs dan saldo.mjs
 *  supaya cara memuat library-nya konsisten.
 * =========================================================
 */

import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const cache = {}

/**
 * Muat library native, dengan pesan error yang jelas
 * kalau paketnya belum terpasang.
 */
export function load(name) {
  if (cache[name]) return cache[name]
  try {
    cache[name] = require(name)
  } catch (err) {
    throw new Error(
      `Library "${name}" belum terpasang. Jalankan: npm install ${name} — (${err.message})`
    )
  }
  return cache[name]
}

export default { load }
