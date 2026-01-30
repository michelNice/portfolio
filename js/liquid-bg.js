const canvas = document.getElementById('liquid-canvas')
const ctx = canvas.getContext('2d')

function resize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
resize()
window.addEventListener('resize', resize)

let t = 0

function animate() {
  t += 0.01

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // fundo base
  ctx.fillStyle = '#0b2c3a'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // blob 1
  let x1 = canvas.width * (0.5 + Math.sin(t * 0.7) * 0.25)
  let y1 = canvas.height * (0.5 + Math.cos(t * 0.6) * 0.25)

  let g1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, canvas.width * 0.6)
  g1.addColorStop(0, 'rgba(127, 142, 149, 0.6)')
  g1.addColorStop(1, 'transparent')

  ctx.fillStyle = g1
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // blob 2
  let x2 = canvas.width * (0.5 + Math.cos(t * 0.4) * 0.35)
  let y2 = canvas.height * (0.5 + Math.sin(t * 0.5) * 0.35)

  let g2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, canvas.width * 0.5)
  g2.addColorStop(0, 'rgba(27,79,95,0.5)')
  g2.addColorStop(1, 'transparent')

  ctx.fillStyle = g2
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  requestAnimationFrame(animate)
}

animate()






















