import fs from 'node:fs/promises'
import path from 'node:path'
import pc from 'picocolors'

// Advanced version of the code that allows specifying a folder to read
// If no folder is specified, it defaults to the current directory
const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error('Error reading directory:', folder)
    process.exit(1)
  }

  const filePromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath)
      console.log(`${file} - Size: ${stats.size} bytes`)
    } catch {
      console.error(`Error getting stats for file ${file}:`, folder)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'dir' : 'file'
    const fileSize = stats.size ? `Size: ${stats.size} bytes` : 'Size: N/A'
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${pc.blue(file)} ${pc.green(fileSize.toLocaleString())} ${pc.yellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach(info => console.log(info))
}

ls(folder)
