const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = false
const port = process.env.PORT || 3000
const hostname = 'localhost'

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error:', err)
      res.statusCode = 500
      res.end('Server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Running on port ${port}`)
  })
})
