import fs from 'node:fs/promises'

console.log("Leyendo el contenido del archivo 'archivo.txt':")
fs.readFile('archivo.txt', 'utf-8')
  .then(text => {
    console.log(text)
  })

console.log('------------------------------')
console.log("\nLeyendo el contenido del archivo 'archivo2.txt':")
fs.readFile('archivo2.txt', 'utf-8')
  .then(secondText => {
    console.log(secondText)
  })
