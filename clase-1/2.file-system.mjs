import fs from 'node:fs'

const stats = fs.statSync('archivo.txt')
console.log('Información del archivo:')
console.log(`Tamaño: ${stats.size} bytes`)
console.log(`Creado: ${stats.birthtime}`)
console.log(`Modificado: ${stats.mtime}`)
console.log(`Es un directorio: ${stats.isDirectory()}`)
console.log(`Es un archivo: ${stats.isFile()}`)
