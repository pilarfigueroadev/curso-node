const express = require('express')
const dittoJSON = require('./pokemon/ditto/ditto.json')

const app = express()
const PORT = process.env.PORT || 1234

app.disable('x-powered-by')

app.use(express.json())

app.get('/', (req, res) => {
  res.json(JSON.stringify(dittoJSON))
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
