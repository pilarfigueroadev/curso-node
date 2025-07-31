// Argumentos de entrada
// console.log(process.argv);

// Controlar el proceso y su salida
// process.exit(0)
// process.exit(1)

// Controlar eventos del proceso
process.on('exit', (code) => {
  console.log(`El proceso ha finalizado con el código: ${code}`)
})

// Current working directory
console.log(`Directorio de trabajo actual: ${process.cwd()}`)
