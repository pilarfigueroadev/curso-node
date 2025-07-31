import path from 'node:path'

// Unir rutas con path.join
const filePath = path.join('src', 'components', 'Button.js')

// Mostrar la ruta completa
console.log('Ruta del archivo:', filePath)
const base = path.basename('/tmp/pili/foo.txt')
// Mostrar el nombre del archivo
console.log(base)

// Obtener la extensión del archivo
const ext = path.extname('/tmp/pili/foo.txt')
// Mostrar la extensión del archivo
console.log('Extensión del archivo:', ext)
