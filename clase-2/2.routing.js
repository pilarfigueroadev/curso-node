const http = require('node:http')
const dittoJSON = require('./pokemon/ditto/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.setHeader('Content-Type', 'text/html;charset=utf-8')
          res.end('<h1>Hello, World!</h1>')
          break
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json;charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html;charset=utf-8')
          return res.end('<h1>Page Not Found</h1>')
      }
      break
    case 'POST':
      switch (url) {
        case '/pokemon':
          let body = ''

          req.on('data', chunk => {
            body += chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json;charset=utf-8' })
            res.end(JSON.stringify({ message: 'Pokemon created', data }))
          })
          break
      }
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})
