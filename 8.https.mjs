import http from 'node:http'
import { findAvailablePort } from './9.free-port.mjs'

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello, World!\n')
})
findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  })
})
