import net from 'node:net'

export function findAvailablePort (desiredPort = 3000) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const port = server.address().port
      server.close(() => resolve(port))
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // If the desired port is in use, try to find another available port
        findAvailablePort(desiredPort + 1).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}
