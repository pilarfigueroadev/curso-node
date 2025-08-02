import http from 'node:http'
import fs from 'node:fs'

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('<h1>Hello, World!</h1>')
  } else if (req.url === '/planisferio.png') {
    fs.readFile('./planisferio.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Error reading image file')
      } else {
        res.setHeader('Content-Type', 'imagen/png')
        res.end(data)
      }
    })
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('<h1>About Page</h1>')
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('<h1>Page Not Found</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`Server is running at http://localhost:${desiredPort}`)
})