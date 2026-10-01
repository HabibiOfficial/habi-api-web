/**
 * =========================================================
 *  Kartu saldo SIMULASI
 *
 *  Menghasilkan kartu saldo/e-wallet untuk keperluan
 *  DEMO, UJI COBA, dan PEMBELAJARAN.
 *
 *  PENTING: kartu ini SELALU diberi watermark "SIMULASI"
 *  yang mencolok dan tidak bisa dimatikan. Endpoint ini
 *  sengaja tidak bisa dipakai membuat struk pembayaran
 *  palsu yang bisa dipakai menipu orang lain.
 *
 *  Usage:  renderSaldo({ nominal, nama, catatan })
 *  Return: Buffer PNG
 * =========================================================
 */

import { load } from './canvas-shared.mjs'

const W = 720
const H = 460

/** Format angka ke gaya Indonesia: 500000 → "500.000" */
function rupiah(n) {
  const num = Math.floor(Math.abs(Number(n) || 0))
  return num.toLocaleString('id-ID')
}

/**
 * Kartu saldo simulasi.
 * @param {object} opts
 * @param {number|string} opts.nominal nominal angka
 * @param {string} [opts.nama] nama pemilik
 * @param {string} [opts.catatan] teks kecil di bawah
 * @param {string} [opts.merk] nama aplikasi (default SIMULASI)
 */
export async function renderSaldo({
  nominal = 0,
  nama = 'Pengguna',
  catatan = 'Kartu uji coba — bukan transaksi nyata',
  merk = 'SIMULASI',
} = {}) {
  const { createCanvas, GlobalFonts } = load('@napi-rs/canvas')
  const canvas = createCanvas(W, H)
  const ctx = canvas.getContext('2d')

  /* latar */
  const bg = ctx.createLinearGradient(0, 0, W, H)
  bg.addColorStop(0, '#ffffff')
  bg.addColorStop(1, '#eef1f5')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, W, H)

  /* header */
  const head = ctx.createLinearGradient(0, 0, W, 150)
  head.addColorStop(0, '#1f6feb')
  head.addColorStop(1, '#0b3d91')
  ctx.fillStyle = head
  ctx.fillRect(0, 0, W, 150)

  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 34px sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  ctx.fillText(String(merk).toUpperCase().slice(0, 24), 44, 56)

  ctx.font = '22px sans-serif'
  ctx.fillStyle = 'rgba(255,255,255,0.85)'
  ctx.fillText('Saldo tersedia', 44, 104)

  /* nominal */
  ctx.fillStyle = '#111827'
  ctx.font = 'bold 62px sans-serif'
  const teks = `Rp ${rupiah(nominal)}`
  // auto-shrink supaya tidak keluar kotak
  let size = 62
  const maxW = W - 88
  while (ctx.measureText(teks).width > maxW && size > 24) {
    size -= 2
    ctx.font = `bold ${size}px sans-serif`
  }
  ctx.fillText(teks, 44, 226)

  /* garis pemisah */
  ctx.strokeStyle = '#d6dbe2'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(44, 296)
  ctx.lineTo(W - 44, 296)
  ctx.stroke()

  /* nama & catatan */
  ctx.fillStyle = '#4b5563'
  ctx.font = '24px sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText(String(nama).slice(0, 28), 44, 336)
  ctx.font = '19px sans-serif'
  ctx.fillStyle = '#8b95a5'
  ctx.fillText(String(catatan).slice(0, 52), 44, 372)

  /* WATERMARK — wajib ada, tidak bisa dimatikan */
  ctx.save()
  ctx.translate(W / 2, H / 2)
  ctx.rotate(-Math.PI / 9)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = 'bold 92px sans-serif'
  ctx.fillStyle = 'rgba(220, 38, 38, 0.20)'
  ctx.fillText('SIMULASI', 0, 0)
  ctx.font = 'bold 30px sans-serif'
  ctx.fillStyle = 'rgba(220, 38, 38, 0.30)'
  ctx.fillText('BUKAN TRANSAKSI NYATA', 0, 62)
  ctx.restore()

  /* pita merah di bawah */
  ctx.fillStyle = 'rgba(220, 38, 38, 0.92)'
  ctx.fillRect(0, H - 46, W, 46)
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 21px sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('KARTU SIMULASI — BUKAN BUKTI TRANSFER', W / 2, H - 23)

  return canvas.toBuffer('image/png')
}

export default { renderSaldo }
