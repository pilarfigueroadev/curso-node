import fs from 'node:fs'

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
