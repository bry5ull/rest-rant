
const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Rest-Rant')
  })

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(PORT, () => {
    console.log('listening at port', PORT)
})





