import fs from 'node:fs'

console.log("Leyendo el contenido del archivo 'archivo.txt':")
fs.readFile('archivo.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }
  console.log(text)
})
console.log('------------------------------')
console.log("\nLeyendo el contenido del archivo 'archivo2.txt':")
fs.readFile('archivo2.txt', 'utf-8', (err, secondText) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }
  console.log(secondText)
})
